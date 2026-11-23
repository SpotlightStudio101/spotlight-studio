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
  /** Real title shown instead of the "Untitled — genre 01" placeholder. */
  title?: string;
  /** Self-hosted full film (.mp4 under /public, max 25 MiB on Cloudflare Pages). youtubeId/vimeoId win if set. */
  videoFile?: { mp4: string; poster?: string };
  /** Vimeo video id — set this once a real clip exists. Leave undefined for the placeholder plate. */
  vimeoId?: string;
  /** YouTube video id — same role as vimeoId, for clips hosted there instead. */
  youtubeId?: string;
  /**
   * A short (~2s) muted looping clip for the grid tile — a trimmed .mp4/.webm file, not the
   * full film (only the detail page plays that, via vimeoId/youtubeId). Point this at a real
   * short export once one exists; the tile falls back to the CSS placeholder without it.
   */
  /** Still image for the grid tile when there is no preview clip (e.g. the YouTube thumbnail). */
  thumbnail?: string;
  previewClip?: { webm?: string; mov?: string; mp4?: string };
  /** True only for licensed demo content standing in for a real film — never set this for real entries. */
  isDemo?: boolean;
  /** Short description per language: shown on the film page and used for search engines. */
  description?: { fr: string; en: string };
  /** ISO date the film went online (YouTube upload), for search-engine video markup. */
  uploadDate?: string;
  /** Length in seconds, for search-engine video markup. */
  durationSeconds?: number;
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
    title: "Ambassade d'Arménie en France",
    description: {
      fr: "Film pour l'Ambassade d'Arménie en France, à l'occasion des 35 ans de l'indépendance arménienne : discours, chœur et invités, filmés en 4K.",
      en: "Film for the Embassy of Armenia in France, for the 35th anniversary of Armenian independence: speeches, choir and guests, shot in 4K.",
    },
    uploadDate: "2026-10-09",
    durationSeconds: 123,
    previewClip: { mp4: "/video/films/event-01-tile.mp4" },
    youtubeId: "WqMKLFY-fVM",
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
    title: "Grégoire Jokic — Point Éphémère",
    description: {
      fr: "Film du concert de Grégoire Jokic au Point Éphémère, à Paris : un pianiste et chanteur sous des lumières bleues et rouges, filmé en 4K.",
      en: "Film of Grégoire Jokic's concert at Point Éphémère in Paris: a pianist and singer under blue and red lights, shot in 4K.",
    },
    uploadDate: "2026-10-30",
    durationSeconds: 162,
    previewClip: { mp4: "/video/films/event-02-tile.mp4" },
    youtubeId: "dZTWSdI3cR4",
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
