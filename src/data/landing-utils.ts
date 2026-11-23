import { landingPages, type LandingPage } from "./landing-pages";
import { landingPagesEn } from "./landing-pages-en";
import { landingPagesMoreFrA } from "./landing-pages-more-fr-a";
import { landingPagesMoreFrB } from "./landing-pages-more-fr-b";
import { landingPagesMoreEnA } from "./landing-pages-more-en-a";
import { landingPagesMoreEnB } from "./landing-pages-more-en-b";
import type { Locale } from "../i18n/translations";

export const pageId = (p: LandingPage) => p.id ?? p.slug;

/** The six main service pages (shown in the footer). */
export function corePagesFor(locale: Locale): LandingPage[] {
  return locale === "fr" ? landingPages : landingPagesEn;
}

/** Every landing page: main services, extra services and guides. */
export function pagesFor(locale: Locale): LandingPage[] {
  return locale === "fr"
    ? [...landingPages, ...landingPagesMoreFrA, ...landingPagesMoreFrB]
    : [...landingPagesEn, ...landingPagesMoreEnA, ...landingPagesMoreEnB];
}

export function landingHref(page: LandingPage, locale: Locale): string {
  return locale === "fr" ? `/${page.slug}/` : `/en/${page.slug}/`;
}

/** Link to the page mirroring French slug `id`, in `locale`. */
export function hrefForId(id: string, locale: Locale): string | undefined {
  const page = pagesFor(locale).find((p) => pageId(p) === id);
  return page ? landingHref(page, locale) : undefined;
}

/** The index page listing every prestation and guide. */
export const hubHref = (locale: Locale) => (locale === "fr" ? "/prestations/" : "/en/services/");

/** For a landing-page (or hub) pathname, its French and English counterparts (undefined for any other page). */
export function landingAlternates(pathname: string): { fr: string; en: string } | undefined {
  const clean = pathname.replace(/\/$/, "");
  if (clean === "/mentions-legales" || clean === "/en/legal-notice") return { fr: "/mentions-legales/", en: "/en/legal-notice/" };
  if (clean === "/prestations" || clean === "/en/services") return { fr: hubHref("fr"), en: hubHref("en") };
  const locale: Locale = clean.startsWith("/en/") ? "en" : "fr";
  const slug = locale === "en" ? clean.slice(4) : clean.slice(1);
  const page = pagesFor(locale).find((p) => p.slug === slug);
  if (!page) return undefined;
  const id = pageId(page);
  return { fr: hrefForId(id, "fr") ?? "/", en: hrefForId(id, "en") ?? "/en" };
}
