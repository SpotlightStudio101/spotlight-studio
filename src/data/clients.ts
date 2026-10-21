export interface ClientLogo {
  /** Shown as the image's alt text (and used for nothing else). */
  name: string;
  /** Path under /public, e.g. "/images/clients/acme.svg". Transparent PNG or SVG, any colour: it's rendered white. */
  src: string;
}

// The scrolling logo band under the Home hero. Empty on purpose: while this list is empty the
// band is not rendered at all. Drop each logo file in public/images/clients/ and add a line:
//   { name: "Acme", src: "/images/clients/acme.svg" },
export const clientLogos: ClientLogo[] = [];
