---
name: Spotlight Films — Video Production Studio
description: A studio-agency portfolio site for a Paris video production practice, built on a near-black ground and one light-blue accent.
colors:
  void: "#0d0d0d"
  void-deep: "#000000"
  ink: "#f5f1ea"
  ash: "#b8b2a8"
  ash-dim: "#857e72"
  jade: "#3b9bff"
typography:
  display:
    fontFamily: "Kanit, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 13vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Bai Jamjuree, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  wordmark:
    fontFamily: "Kanit, Helvetica Neue, sans-serif"
    fontSize: "clamp(1rem, 3vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  mono:
    fontFamily: "IBM Plex Mono, Courier New, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sharp: "0px"
  control: "6px"
  card: "1.5rem"
  pill: "9999px"
spacing:
  section-y-sm: "4rem"
  section-y-lg: "8rem"
  container-x: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.jade}"
    textColor: "{colors.void-deep}"
    typography: "{typography.display}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  service-card:
    backgroundColor: "{colors.void-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  menu-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "44px"
---

# Design System: Spotlight Films — Video Production Studio

## Overview

**Creative North Star: "Studio Agency"**

This is a full replacement of the previous "Projection Booth" world. The client asked for heavy structural and material inspiration from lusantprod.com, a video-production agency site — near-black ground, one saturated accent, bold italic display type, image-forward cards — translated into this site's own content, never its copy, photography, or exact hex values (the codebase records the accent deliberately shifted off the reference's `#FF7300` to `#FF5A1F` for that reason). The accent was later swapped again, independent of the Lusant redesign, from that tangerine to a light blue (`#3B9BFF`) at the client's direct request — same near-black ground and one-hue-only role, different hue. The result reads less like a screening room and more like an agency reel: a floating glass nav that stays present while you scroll, italic display headlines, and full-bleed photographic service cards with rounded corners standing in for what were previously plain full-bleed media or bare text sections.

Some incumbent invariants survive the replacement because the new code still honors them: the site is still flat (no `box-shadow` anywhere in the codebase), still spends its one accent color sparingly against a near-black ground, and still treats missing footage/photography/testimonials as an honestly-labeled placeholder rather than a fabrication. Others do not survive: the old two-radius (sharp-or-pill only) rule is contradicted by shipped `rounded-md` form controls and `rounded-3xl` photo cards, and the old no-kicker/no-eyebrow rule is contradicted by a pill eyebrow badge shipped above the homepage H1 (see Do's and Don'ts — this is recorded as a defect the build carries, not a new system rule).

**Key Characteristics:**
- Near-black ground (`void`/`void-deep`) lit by one saturated light-blue accent, spent narrowly (primary CTAs, current-nav-state, focus, underline accents)
- A persistent floating glass nav (`.pill-nav`) rather than a header that scrolls away
- Bold italic Kanit display type for anything the page asserts; Bai Jamjuree for anything it explains
- A three-step radius vocabulary — sharp structural elements, small-radius form controls, large-radius photo cards, and fully-rounded interactive pills — not a strict two-state system
- Full-bleed photographic service cards (`.service-card`) with a bottom scrim and hover zoom, a new card language this world introduces that the previous system explicitly refused

## Colors

A near-monochrome black world lit by a single accent; every other value is a step of ash or ink.

### Primary
- **Signal Blue** (`#3b9bff`, CSS var `--color-jade` — the variable name is inherited from the previous system and now holds an unrelated hue): the one accent. Used for primary CTAs (`.cta-sweep` buttons), the current/hover link state in nav and footer, the `.underline-accent` heading rule, focus rings, and selection color. Verified contrast: void-deep text on jade is 7.32:1 (AA); white text on jade falls to 2.87:1 and is never used — buttons stay dark-text-on-accent for this reason.

### Neutral
- **Void** (`#0d0d0d`): the page ground — `body`/`html` background.
- **Void Deep** (`#000000`): the darkest value — placeholder-plate backgrounds, dark-glass nav tint base, takeover-menu background, and the text color sitting on jade.
- **Print Warm White / Ink** (`#f5f1ea`): primary text and headline color; contrast 17.26:1 on void.
- **Ash** (`#b8b2a8`): secondary text — body copy, labels, inactive nav/footer links; contrast 9.23:1 on void.
- **Ash Dim** (`#857e72`): hairline dividers, section borders, placeholder captions; contrast 4.84:1 on void (AA floor for text use).

### Named Rules
**The One Accent Rule.** Signal Blue is the only hue in the system besides ink/ash/void. It marks exactly one thing per view — a primary action, the current state, or an accent underline — never a decorative field or a second color introduced alongside it.

## Typography

**Display Font:** Kanit (with Arial Narrow, sans-serif)
**Body Font:** Bai Jamjuree (with Helvetica Neue, sans-serif)
**Wordmark Font:** Kanit (with Helvetica Neue, sans-serif) — shares the display family, unlike the previous system's separate Jost signature mark
**Mono Font:** IBM Plex Mono (with Courier New, monospace) — unchanged from the previous system; footer only

**Character:** A bold, slightly condensed italic grotesk for anything the page asserts — headlines, CTAs, nav labels — paired with a rounder, more neutral sibling for anything it explains. Kanit's italic is used deliberately on hero and section headlines for agency-reel energy; body copy stays upright.

### Hierarchy
- **Wordmark** (700, ~text-base–xl, uppercase, italic, Kanit): the studio name mark, centered in the floating pill nav on every page.
- **Display** (700, clamp(2.5rem, 13vw, 6rem), leading 0.9, tracking -0.03em, uppercase, often italic): hero and closing-CTA headlines.
- **Headline** (700, text-4xl–6xl, leading-none, uppercase, sometimes italic): section openers.
- **Body** (400, text-sm–xl, Ash): paragraph copy.
- **Label** (400–600, text-xs–sm, uppercase, tracking -0.02em to -0.03em, Ash / Ash Dim, sometimes Mono): genre tags, form field captions, disclaimers, footer text.

### Named Rules
**The Assert/Explain Split.** Kanit (bold, often italic, uppercase) is reserved for anything the page asserts — headlines, labels, CTAs. Bai Jamjuree is reserved for anything it explains — paragraph copy. No component mixes the two roles on the same text run.

## Layout

Content sits in a centered column (max-w-3xl to max-w-6xl depending on section) with 1.5rem side padding on mobile (`px-6`), 2.5rem at md (`px-10`). Section vertical rhythm runs roughly 4rem (`py-16`/`py-20`) to 8rem (`py-24`/`py-32`) depending on section weight, separated by a 1px `border-ash-dim/20` hairline rather than a background change. The floating nav is fixed and inset from the viewport edge (`px-4 pt-4` mobile, `px-8 pt-6` md) rather than flush to the top, so page content scrolls beneath a persistent glass pill instead of behind a header that disappears.

Responsive collapse: service-card and step grids run 3 columns → 2 (sm) → 1 (mobile); the films preview grid runs 3 → 1.

## Elevation & Depth

The system remains flat by contract: no `box-shadow` exists anywhere in the codebase (`.pill-nav`'s dark-glass surface uses `backdrop-filter: blur()` and a translucent border, not a shadow). Depth is conveyed through light, grain, and blur instead: a film-grain overlay (`.grain`), a soft top-down `.spotlight` wash on key moments (hero, closing CTA), the drifting `.reel-plate`/`.still-plate` beam-glow on placeholder media, and the nav's backdrop-blur glass separating it from content scrolling underneath.

### Named Rules
**The No-Shadow Rule.** Depth comes from light, grain, and blur, never a drop shadow. This incumbent rule from the previous world still holds in the shipped code.

## Shapes

A three-step radius vocabulary, not the previous system's strict sharp-or-pill split. Structural elements — page sections, containers, dividers — stay sharp (0px). Photo cards and the testimonial placeholder use a large, soft radius (`rounded-3xl`, ~1.5rem). Form controls (Devis radio-label cards) use a small radius (`rounded-md`, ~6px). Every interactive pill — primary/CTA buttons, the nav shell, the menu toggle, badges, tags, progress dots — is fully rounded (`rounded-full`, 9999px).

### Named Rules
**The Structural-Sharp Rule.** Page-level structure (sections, containers, dividers, hairlines) never carries a radius; radius is reserved for cards, controls, and interactive pills. This is the part of the old two-radius rule that still holds — the strict claim that *only* sharp and pill exist does not.

## Components

### Buttons
- **Shape:** fully rounded pill (`rounded-full`)
- **Primary ("Book a call" / "Get a quote"):** jade background, void-deep text, italic-capable display font uppercase, `px-6–7 py-2.5–4` depending on placement, a right-pointing arrow icon that translates on hover, plus `.cta-sweep`: an ink-colored curtain that rises from the bottom on hover and retracts back down on mouse-out
- **Hover:** scale to ~1.03 (closing-CTA instance) and/or the sweep curtain; the arrow icon shifts right
- No secondary/ghost variant exists; every CTA uses this one primary treatment

### Navigation
- **`.pill-nav`:** a `position: fixed`, inset, fully-rounded floating bar — dark-glass (`color-mix` void-deep at 78% + `blur(14px)` + a faint ink-tinted 1px border) so hero media reads through it. Unlike the previous absolute/scrolls-away header, this one stays visible through the whole page.
- Three-column layout: language switcher (left), wordmark (center), menu-toggle icon button (right)
- Wordmark: Kanit bold italic uppercase — no longer a separate signature typeface from the display system
- Menu toggle: two bars that rotate into an X on open, `rounded-full` hit target with a jade hover tint
- Opening it reveals the same full-screen black takeover menu structurally unchanged from the previous system: huge display-type page links, a dropdown for "My work" (hover-revealed on pointer devices, tap-toggled on touch via `.nav-dropdown`/`.is-open`), current page in jade, a footer row (tagline + socials)

### Cards / Containers
- **`.service-card`** (signature component): full-bleed photo tile, `rounded-3xl`, permanent bottom scrim (`linear-gradient` black-to-transparent) for label legibility over the image, `saturate(0.9)` at rest rising to `saturate(1.05)` and `scale(1.06)` on the image on hover. Used for the client-segments grid; a deliberate new card language this world introduces (the previous system explicitly refused card+icon+text structure — this is a different device, a photo tile, not that pattern).
- The one non-photo card is the testimonials empty-state: `rounded-3xl`, dashed `border-ash-dim/40`, holding a "coming soon" pill badge and honest copy — no fabricated review.

### Inputs / Fields
- **Devis form radio-cards:** `rounded-md` (~6px) bordered label buttons (`border-ash-dim/30` at rest, jade border + jade text when the paired radio is checked) — the system's one small-radius component.
- **Contact form fields:** unchanged bottom-border-only line under a label caption; ash-dim border at rest, jade on focus, browser focus ring never suppressed.

### Reel Plate / Still Plate (signature component, carried over)
- The placeholder-footage treatment: void-deep base, a slowly drifting jade radial-gradient beam (`beam-drift`, 9s), a flickering scanline texture (`flicker`, 4s), plus the site-wide grain overlay. Used wherever real footage/photography doesn't exist yet, paired with an honest "coming soon"-style label — never a silent gray box or a stand-in stock photo passed off as final.
- Note: `ClientSegments`'s service cards use real (disclosed) stock photography instead, with an on-page disclaimer (`t.home.segments.imageDisclaimer`) naming it as temporary — a second, photographic honesty pattern alongside the reel-plate's graphic one.

### Footer
- Unchanged in structure from the previous system: Mono-set link columns (Pages / Socials, plus a French-only Cities column), `.link-sweep` hover underline (asymmetric left-in/right-out sweep), copyright line opposite the columns.

## Do's and Don'ts

### Do:
- **Do** keep the accent to one hue and one purpose per view: primary action, current state, or accent underline.
- **Do** use `.reel-plate`/`.still-plate` — or clearly disclosed temporary stock photography — for anything standing in for footage or client work that doesn't exist yet; label it honestly rather than passing it off as final.
- **Do** keep page-level structure (sections, containers, dividers) sharp; reserve radius for cards, controls, and pills.
- **Do** give the nav its glass/blur treatment on every page so it reads over any content scrolling beneath it.

### Don't:
- **Don't** add a `box-shadow` to anything. Depth is light, grain, and blur, never a drop shadow.
- **Don't** introduce a second accent hue alongside Signal Blue, even a muted one.
- **Don't** fabricate a testimonial, client name, or credit in a placeholder slot — an honest "coming soon" label beats a fictional one.
- **Don't** treat the shipped hero eyebrow badge (a pill label above the H1) as a system device to reuse elsewhere — see the audit note below; it is a carried defect, not a rule.

<!-- Audit note, not part of the portable spec: the homepage hero ships a pill "eyebrow" badge above its H1 (t.home.heroBadge). This reintroduces exactly the device the previous system's no-kicker rule existed to ban, and it is not recorded here as a new system rule — it is a defect this build carries. `.underline-accent` (a rule under a heading's own last word) is the system's actual, reusable heading-emphasis device and is documented above; the eyebrow badge is not. -->
