export type FilmGenre = "commercial" | "event";

export interface FilmCredit {
  /** Key into filmData.roles in the translation dictionary — never raw display text. */
  roleKey: "directedBy";
  name: string;
}

export interface FilmEntry {
  slug: string;
  genre: FilmGenre;
  /** Number shown after the genre in the placeholder title, e.g. "01". */
  index: string;
  credits: FilmCredit[];
  /** Vimeo video id — set this once a real clip exists. Leave undefined for the placeholder plate. */
  vimeoId?: string;
  /** YouTube video id — same role as vimeoId, for clips hosted there instead. */
  youtubeId?: string;
  /**
   * A short (~2s) muted looping clip for the grid tile — a trimmed .mp4/.webm file, not the
   * full film (only the detail page plays that, via vimeoId/youtubeId). Point this at a real
   * short export once one exists; the tile falls back to the CSS placeholder without it.
   */
  previewClip?: { webm?: string; mov?: string; mp4?: string };
  /** True only for licensed demo content standing in for a real film — never set this for real entries. */
  isDemo?: boolean;
}

// Placeholder entries — empty on purpose. Add `previewClip` (short looping tile clip) and
// `vimeoId` / `youtubeId` (full film) to an entry once its footage exists.
// Flip to true to bring the (currently empty) "commercial" section back on the site.
export const showCommercial = false;

export const films: FilmEntry[] = [
  {
    slug: "commercial-01",
    genre: "commercial",
    index: "01",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "event-01",
    genre: "event",
    index: "01",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "commercial-02",
    genre: "commercial",
    index: "02",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "event-02",
    genre: "event",
    index: "02",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "commercial-03",
    genre: "commercial",
    index: "03",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "event-03",
    genre: "event",
    index: "03",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
];

export function getFilm(slug: string): FilmEntry | undefined {
  return films.find((f) => f.slug === slug);
}
