# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro with Tailwind CSS. Chosen for a media-heavy, content-first portfolio site: near-zero JS by default (fast loading for image- and video-heavy pages), content collections to manage film entries as structured, easy-to-extend data, and a straightforward deploy to any static host (e.g. Vercel or Netlify) with a custom domain. Deploy target itself is not yet decided — Vercel or Netlify are the natural defaults for Astro and can be chosen at deploy time without affecting the stack choice.

## Users

Primary users are potential clients — brands, producers, and agencies evaluating the filmmaker before commissioning paid work. They arrive to judge craft and range across genres, then decide whether to reach out. (Festival/industry gatekeepers and collaborators are a secondary audience the user did not prioritize for this phase.)

## Product Purpose

A portfolio and business site for an aspiring filmmaker working across multiple genres (commercial/branded, documentary, narrative). It showcases finished films to prospective clients, explains the filmmaker's background and process, and presents services/offers so visitors can inquire about commissioning work. Success means a client visitor understands the filmmaker's range and craft, then makes contact about a project.

## Positioning

Quentin builds community through his films and works to convey emotion more directly than other filmmakers in his space. His mechanism is the client process itself: before making a film, he enters the client's world to understand it, then accompanies them the whole way — taking counsel, asking what they want and need, and working hand in hand toward a shared vision. The film is the output of a genuinely collaborative, immersive relationship, not a service delivered at arm's length.

## Operating Context

Early-stage build: no films, stills, bio, or credits are ready yet. The site needs to launch with a clear structure that can be filled in as real work becomes available over the next few months, and it needs to stay easy to update independently as new films/projects are completed. The user plans to share multiple reference websites for features and direction they like — that informs the visual world and is handled in a later design step, not here.

## Capabilities and Constraints

- Site structure: Home (also carries the services/offers pitch — no separate Work page), Films (split into "Commercial Work" and "Films/Docs" sub-pages via a nav dropdown under "My work"), About, Contact — reached through a full-screen takeover menu (AOD-style) — plus Terms of Use and Privacy Policy, linked from the footer only
- Business pitch (Home, EN+FR): positioned as "Vidéaste" in French (client-search term; "Réalisateur" reads as a bigger cinema-crew figure to hiring clients) while English stays "Filmmaker." Three sections carry the pitch: a client-type breakdown (Companies / Events / Documentary & interviews), a 4-step process section (Pre-production → Production → Post-production → Delivery) with a scroll-driven progress line and honest equipment chips (Sony FX3, DJI Mavic 3 Classic — registered UAS exploitant — generic "sound recording"), and a "reply within 24h" promise near every contact CTA. Pricing stays 100% quote-based, no price shown, per the user's explicit call
- Local SEO: the 5 city landing pages tried earlier (Lyon/Marseille/Bordeaux/Nice/Cannes) were removed by the user's explicit call — thin-content/trust risk for a solo practitioner without real local presence outweighed the long-tail search benefit. The single Home page now carries the whole local-SEO story: Paris-based, available across the wider Île-de-France, and open to travel nationally/internationally (see the "Vos tournages à Paris et en Île-de-France" section)
- Contact form (own Cloudflare Pages Function + Resend): qualifies leads with a project-type select and an optional budget-range select, alongside the original name/email/message fields
- Films page: edge-to-edge grid of work samples, each autoplaying a muted looping clip on load. No real footage exists yet — ships with clearly-labeled placeholder entries the user swaps in as real films are finished
- Home's primary conversion action is booking a call directly via Calendly — no Calendly account exists yet, so the link ships as a clearly-marked placeholder the user swaps in once created
- Contact page offers two equal paths: book a call (Calendly) or send a message via a real contact form — both are wanted, neither replaces the other
- Video hosting: YouTube (Quentin will post most work there; the Films page should embed YouTube video, not self-hosted files)
- Instagram: @quentinmouledousfilms
- Deploy target: Cloudflare Pages (migrating from Netlify, whose free credit plan capped monthly deploys at ~20). Forms moved from Netlify Forms to a custom `functions/api/send.ts` (validates, then emails via Resend; needs the `RESEND_API_KEY` secret set in Cloudflare Pages)
- Bilingual: English (default) and French. Unprefixed routes are English, `/fr/...` mirrors every route in French. A header switcher (top-left) toggles between them; first-time visitors are auto-routed to French if their browser reports a French locale, English otherwise. The choice is remembered (localStorage) and always wins over auto-detection on later visits
- Secondary offering: short-form/business-oriented work (social cuts, branded content, corporate video) — a real revenue interest short-term, not the long-term focus. Surfaced only as a quiet text callout on Home between the films preview and the closing CTA (plain text, no hero treatment, no nav slot, no portfolio grid of its own) — deliberately kept from competing with Films for attention
- No existing brand assets (logo, testimonials, credits) beyond the personal name below

## Brand Commitments

Supersedes an earlier personal-name branding decision: the site now runs under the studio name **Spotlight Films** (wordmark only, no logomark yet) — the user's explicit, standing call. Quentin remains the sole practitioner; "Spotlight Films" is the public-facing name across nav, footer, and meta, not a claim of a larger team.

## Evidence on Hand

A real credential line: writer, director, cinematographer, editor — based in Philadelphia, working wherever a story calls; focused on small-crew productions, feature films, and narrative-driven branded work. Shown at the top of the About page (above the existing About content, left in place — added, not replaced, per the user's explicit "for now"). Beyond that: no films, stills, portrait, or client credits are ready; those sections start as clearly-labeled placeholders for future work to replace with real material. Do not fabricate testimonials, past clients, or credits.

## Product Principles

- Client-first: every choice should help a hiring client judge craft and range quickly and decide to reach out.
- Show range without diluting identity: cover commercial, documentary, and narrative work without reading as generic or unfocused.
- Built to grow: the films/work section especially must make it easy to add new projects as they're finished over the coming months.
- Evidence over claims: never fabricate testimonials, clients, or credits — placeholders stay honest until real content exists.
