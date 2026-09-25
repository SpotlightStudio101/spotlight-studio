import { site } from "../../src/data/site.ts";

interface Env {
  RESEND_API_KEY?: string;
}

// Fields the form adds for routing/spam control; never shown in the email body.
const INTERNAL_FIELDS = new Set(["form", "locale", "website"]);
const SUBJECTS: Record<string, string> = {
  contact: "Contact",
  devis: "Demande de devis",
  home: "Message depuis l'accueil",
};
const MAX_FIELD_LENGTH = 5000;
const FROM = `${site.name} <site@spotlightstudio.fr>`;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const wantsJson = request.headers.get("accept")?.includes("application/json");
  const fail = (status: number, error: string) => (wantsJson ? json({ ok: false, error }, status) : new Response(error, { status }));

  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return fail(403, "forbidden");

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, "bad_request");
  }

  const redirect = new URL(form.get("locale") === "en" ? "/en/thanks" : "/thanks", request.url).toString();
  const succeed = () => (wantsJson ? json({ ok: true, redirect }, 200) : Response.redirect(redirect, 303));

  // Bots fill the hidden "website" field; answer as if it worked so they don't retry.
  if (form.get("website")) return succeed();

  const email = String(form.get("email") ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail(422, "invalid_email");

  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return fail(500, "not_configured");
  }

  const fields: [string, string][] = [];
  for (const [key, value] of form.entries()) {
    if (INTERNAL_FIELDS.has(key) || typeof value !== "string" || !value.trim()) continue;
    fields.push([key.replace(/[-_]/g, " "), value.trim().slice(0, MAX_FIELD_LENGTH)]);
  }

  const senderName =
    String(form.get("name") ?? `${form.get("first-name") ?? ""} ${form.get("last-name") ?? ""}`)
      .replace(/[\r\n]+/g, " ")
      .trim()
      .slice(0, 80) || email;
  const subject = `${SUBJECTS[String(form.get("form"))] ?? SUBJECTS.contact} — ${senderName}`;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = fields
    .map(
      ([label, value]) =>
        `<p><strong style="text-transform:capitalize">${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`
    )
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [site.email], reply_to: email, subject, text, html }),
  });

  if (!response.ok) {
    console.error("Resend rejected the message", response.status, await response.text());
    return fail(502, "send_failed");
  }
  return succeed();
};
