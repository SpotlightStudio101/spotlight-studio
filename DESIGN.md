---
name: Quentin Mouledous — Filmmaker
description: A screening-room world for a multi-genre filmmaker's portfolio and booking site.
colors:
  void: "#0a0a09"
  void-deep: "#050504"
  ink: "#f3f1ea"
  ash: "#948f84"
  ash-dim: "#5c584f"
  jade: "#45b892"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 13vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Barlow, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  wordmark:
    fontFamily: "Jost, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
  mono:
    fontFamily: "IBM Plex Mono, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sharp: "0px"
  pill: "9999px"
spacing:
  section-y-sm: "7rem"
  section-y-lg: "10rem"
  container-x: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.void-deep}"
    typography: "{typography.display}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  menu-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "44px"
---

# Design System: Quentin Mouledous — Filmmaker

## Overview

**Creative North Star: "The Projection Booth"**

The site is built as a screening room, not a brochure: near-total darkness, one beam of light, and footage that plays itself before a single word of pitch is made. It was grounded directly in two references the client pinned — dannygevirtz.com/dannysprojects (a full-bleed, self-playing 3×3 film grid) and theartofdocumentary.com (a black-ground, amber-accented persuasion page with a pinned scroll passage and a full-screen takeover menu) — translated to Quentin's own positioning: work built from genuinely understanding a client before a camera is ever raised. The accent itself moved on from that reference's amber to a jade green, explored later as its own direction and kept.

Confirmed visual rejections: no kicker or eyebrow label above any heading (the heading opens the section on its own); no card-and-icon page structure; no gradient text; no neon glow — the accent is a muted jade, not a signal color.

**Key Characteristics:**
- Near-black ground throughout, lit only by a drifting jade beam and film grain
- One accent color, spent only on the primary action and current-state emphasis
- Full-bleed, edge-to-edge media wherever footage or its placeholder appears — never inside a card
- A single authored motion signature (media developing into clarity) reserved for media, never for typography
- Navigation lives entirely inside a full-screen black takeover — the header itself is never a persistent link row; the page-end footer's own short link list is a separate, page-end convenience, not a competing nav bar

## Colors

A near-monochrome black world lit by a single accent; every other value is a step of ash or ink, never a second hue.

### Primary
- **Jade Beam** (#45b892): the one accent in the system. Used only for the primary "Book a call" action, the current page in the takeover menu, and the solved state of the homepage's scroll passage. Never used as a background field or decoration.

### Neutral
- **Screening Room Black** (#0a0a09): the page ground, used everywhere as `body`/`html` background.
- **Deep Cut** (#050504): the darkest value — the takeover menu's background and the text color sitting on top of jade (never white-on-jade).
- **Print Warm White** (#f3f1ea): primary text and headline color; a warm off-white, never pure #fff.
- **Grain Gray** (#948f84): secondary text — paragraph copy, labels, inactive menu links.
- **Ash Dim** (#5c584f): hairline dividers, section borders, and the grid's between-tile lines. Always used at low opacity (`/20`), never as a solid stroke.

### Named Rules
**The One Light Rule.** Jade appears at most once per viewport — the single action or single emphasis the visitor should notice. If a second element wants it, that element is wrong, not the rule.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif)
**Body Font:** Barlow (with Helvetica Neue, sans-serif)
**Wordmark Font:** Jost (with Helvetica Neue, sans-serif) — the name mark only
**Mono Font:** IBM Plex Mono (with Courier New, monospace) — the footer only, echoing theartofdocumentary.com's own footer typeface (their Founders Grotesk Mono is a paid font; this is the closest free match)

**Character:** A tall, honest condensed grotesk for anything the page asserts — headlines, CTAs, nav, labels — paired with its own regular-width sibling for anything the page explains. The pairing reads as cinema signage: poster-title confidence up top, legible prose underneath. The personal name mark breaks from this system deliberately: a true geometric sans (circular bowls, triangular apexes — the same Bauhaus-era geometric lineage as Futura), set in caps at normal tracking — a signature distinct from the rest of the type system, chosen to match a brief-pinned reference (Futura PT Medium) with a freely-licensed equivalent rather than a paid font the project can't license.

### Hierarchy
- **Wordmark** (500, text-2xl–4xl, normal tracking, uppercase, Jost): the personal name mark, centered in the header at the top of every page. The one deliberate exception to the display/body system below.
- **Display** (700, clamp(2.5rem, 13vw, 6rem), leading 0.92, tracking -0.04em, uppercase): hero and closing-CTA headlines. The floor of the system's boldness.
- **Headline** (600–700, text-4xl–6xl, leading-none, uppercase): section openers ("A range of work", "How I work", "Let's talk").
- **Title** (600, text-2xl–3xl, leading-none, uppercase, jade): named sub-points inside a section, e.g. each "How I work" step.
- **Body** (400–500, text-base–xl, Grain Gray): paragraph copy, capped around 60ch by its container's max-width.
- **Label** (600, text-xs–sm, uppercase, tracking -0.04em, Grain Gray / Ash Dim): genre tags, "Footage coming soon", menu footer text.

### Named Rules
**The No-Kicker Rule.** No heading anywhere carries a small label above it. The heading is the opener; a kicker is a ban carried over from the craft floor, not a style choice.

## Layout

Content sits in a centered column (max-w-4xl to max-w-6xl) with 1.5rem side padding on mobile, 2.5rem at md. Vertical rhythm is generous and asymmetric: sections run 7rem of padding on mobile up to 10rem at md, and every heading carries more space above it than below — never the reverse. The one deliberate break from the contained column is the Films grid, which runs full-bleed edge-to-edge with no max-width and only a 1px hairline (via a dim background showing through a `gap-px` grid) between tiles.

Responsive collapse: the Films grid steps 3 columns → 2 (sm) → 1 (mobile); every other section is a single stacked column at all widths.

## Elevation & Depth

The system is flat by contract: no `box-shadow` exists anywhere in the codebase. Depth is atmospheric instead — a slowly drifting radial jade glow standing in for a projector beam, a static film-grain overlay on every void surface, and a subtle flickering scanline texture on reel-plate media. The one functional "shadow" equivalent is a gradient scrim behind the header (a void-to-transparent fade, ~7–9rem tall) that keeps the wordmark legible over the hero video beneath it.

### Named Rules
**The No-Shadow Rule.** Depth comes from light and grain, never a drop shadow. If something needs to visually lift, give it beam glow or grain contrast, not `box-shadow`.

### Scroll Feel
The whole site scrolls through Lenis, site-wide (mounted once in the layout, skipped automatically under `prefers-reduced-motion`) — a heavier, eased momentum in place of native scroll snap, the same register as theartofdocumentary.com's own scroll. Alongside the media-only chemical-emergence reveal, headings get a quieter sibling: `[data-reveal="text"]`, a plain opacity/translateY-up entrance (no blur or brightness ramp) for a large standalone statement like the homepage's "you get a story brought to life" line.

## Shapes

Exactly two radius states, nothing between them. Structural elements — grid tiles, section dividers, containers — are sharp (0px). The two interactive pill affordances — the primary CTA button and the circular menu-toggle — are fully rounded (`9999px`). Nothing in the system uses an intermediate radius like `8px` or `rounded-lg`.

### Named Rules
**The Two-Radius Rule.** An element is either sharp or a full pill. A rounded-corner card is neither, and does not belong in this system.

## Components

### Buttons
- **Shape:** fully rounded pill (`rounded-full`)
- **Primary ("Book a call"):** jade background, Deep Cut text, display font uppercase, `px-7 py-4` (`px-8 py-5` on the Contact page's larger instance), a right-pointing arrow icon that translates on hover
- **Hover:** the button scales to 1.03 and the arrow shifts right — the only hover motion on an interactive element besides menu-link color and film-tile play-glyph opacity
- No secondary/ghost variant exists yet; every call to action in the system uses this one primary treatment

### Navigation
- Transparent header in three columns (language switcher left, wordmark centered, single icon button right), positioned at the top of the page — it scrolls away with the content rather than staying pinned, sitting above a pointer-events-none gradient scrim that keeps it legible over the hero media it opens on
- Wordmark: Jost, uppercase, centered — the system's one deliberate typographic exception (see Typography)
- Language switcher (top-left): "EN / FR" — the current language in Print Warm White, the other in Ash Dim, jade on hover. Routes to the same page in the other language, never back to home
- The icon button is two horizontal bars that rotate into an X on open; no hamburger-to-arrow or other variant
- Opening it reveals a full-screen takeover (Deep Cut background): the page list in huge display type (13vw mobile / 6.5vw desktop), the current page in jade and every other link in Print Warm White with a jade hover, and a footer row (tagline left, Instagram right)

### Footer
- Sits at the bottom of every page (mounted once in the layout, after the page's own content) — a quiet echo of the takeover menu's own page list, for anyone who scrolls to the end rather than opening the menu. No border, no background change from the page above it — it's a continuation of the same surface, not a separate block
- Everything in the footer — headings, links, copyright — is set in the Mono font (see Typography), matching theartofdocumentary.com's own footer treatment rather than the rest of the system's Display/Body pairing
- Two link columns on `sm:` and up, right-aligned as a pair: Pages (Home/Films/About/Contact) beside Socials (Instagram), each under its own heading; stacks to one left-aligned column on mobile. The two headings (`font-mono text-sm uppercase text-jade`) are the system's accent color, so they read as the footer's own wayfinding cue; the links themselves stay ash, jade on hover
- Footer links use the `.link-sweep` underline: a 1px `currentColor` rule that grows in from the left on hover and, on mouse-out, exits to the right rather than shrinking back — the same asymmetric sweep theartofdocumentary.com runs on its own footer links (`transform: scaleX()` off a right-anchored origin at rest, left-anchored on hover, `0.3s cubic-bezier(0.25, 1, 0.5, 1)`)
- The copyright line sits opposite the link columns — bottom-left, `self-end` so it lines up with the last link's baseline — same Mono treatment, larger and more open than the rest of the footer's small print (`text-sm`, normal tracking) and Print Warm White (`text-ink`), not jade, so it reads as a footnote rather than another link
- Distinct from the header: this is a page-end convenience, not a second navigation bar competing with the header during normal scrolling — see the Navigation section's own rule below

### Reel plate (signature component)
- The system's stand-in for footage or photography that doesn't exist yet — used for every Films-grid tile and the About portrait slot
- Built from: a Deep Cut base, a slowly drifting and scaling jade radial gradient (9s ease-in-out, standing in for a projector beam), a flickering horizontal scanline texture (4s stepped), and the system-wide film-grain overlay
- Grid tiles add a centered low-opacity play glyph (authored SVG, single stroke weight) and a bottom label row: genre on the left, "Footage coming soon" on the right — an honest empty state, never a silent gray box
- Every reel plate is wrapped in the chemical-emergence reveal (see Do's below) the first time it enters the viewport

### Home hero reel
- The homepage hero plays real full-bleed motion instead of the reel-plate placeholder — currently a demo reel (moody aerial landscape footage, licensed under the Pexels License), muted/autoplay/loop, with a small `text-xs` corner disclaimer naming it as placeholder motion, following the same honesty rule as every other demo entry until real footage replaces it
- Scroll transition: the hero sits in normal document flow (no pinning) — the heading, sub-line and CTA scroll at native 1:1 speed while the reel behind them lags at a 0.2× counter-offset, so text and background visibly dissociate as the visitor scrolls past, the same parallax theartofdocumentary.com runs on its own hero video. Skipped under `prefers-reduced-motion`

### Cards / Containers
Not used. Page structure is full-bleed media plus stacked, undecorated sections — never an icon-plus-heading-plus-text card, per the craft floor's own ban.

### Inputs / Fields
- **Style:** no box, no fill — a bottom-border-only line under a Label-style caption, consistent with the system's refusal of card chrome. Ash Dim border at rest.
- **Focus:** the border-bottom turns jade (the one accent, spent here as the "currently active" signal, same role it plays as the current-page indicator in the nav) in addition to the browser's own jade focus ring — the ring is never suppressed.
- **Layout:** label above field, generous vertical gap, used in the Contact page's message form (name, email, project textarea).

## Do's and Don'ts

### Do:
- **Do** reserve jade for exactly one thing per viewport: the primary action or the current-state signal.
- **Do** use the reel-plate treatment — never a gray box, skeleton, or stock photo — for anything standing in for footage that doesn't exist yet.
- **Do** apply the chemical-emergence reveal (`[data-reveal]`, no value) only to media entering the viewport; a heading may use its quieter sibling, `[data-reveal="text"]` (opacity/translateY, no blur), but never the media treatment itself.
- **Do** keep every clickable pill fully rounded and every structural element sharp — no radius in between.
- **Do** give the header its gradient scrim on every page, so it stays legible over the hero media it opens on.

### Don't:
- **Don't** add a kicker or eyebrow label above a heading, anywhere, for any reason.
- **Don't** add a `box-shadow` to anything. Depth is beam glow and grain, never a drop shadow.
- **Don't** introduce a second accent color alongside jade, even a muted one.
- **Don't** build page structure from same-size icon+heading+text cards.
- **Don't** fabricate a testimonial, client name, or credit in a placeholder slot — an honest "coming soon" label beats a fictional one.
