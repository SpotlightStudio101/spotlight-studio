export type FilmGenre = "commercial" | "documentary" | "narrative";

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

// Placeholder entries — swap each one for a real clip as films are finished.
// Nothing here is a real client or credit; genre spread only demonstrates range.
export const films: FilmEntry[] = [
  {
    slug: "commercial-01",
    genre: "commercial",
    index: "01",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
    // Demo only — aerial coastline footage ("Explore breathtaking aerial views of rocky
    // cliffs and the serene coastline at sunset" by Cesar Casanova, Pexels License). The
    // full film linked via vimeoId is still Blender Foundation's "Big Buck Bunny" (CC-BY 3.0)
    // standing in until a real cut exists. Swap previewClip/vimeoId for real ones and remove isDemo.
    previewClip: {
      mp4: "https://videos.pexels.com/video-files/16755467/16755467-sd_640_360_24fps.mp4",
    },
    vimeoId: "1084537",
    isDemo: true,
  },
  {
    slug: "documentary-01",
    genre: "documentary",
    index: "01",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
    // Demo only — a talking-head podcast-interview shot ("Professional female podcaster in
    // studio setting" by Mihaela Claudia Puscas, Pexels License; ~9s, matching the loop
    // length of the other preview tiles — the earlier 37s clip technically looped but was
    // long enough to look frozen next to the others). The full film linked via vimeoId is
    // still Blender Foundation's "Big Buck Bunny" (CC-BY 3.0) standing in until a real cut
    // exists. Swap previewClip/vimeoId for real ones and remove isDemo.
    previewClip: {
      mp4: "https://videos.pexels.com/video-files/37266306/15787420_640_360_25fps.mp4",
    },
    vimeoId: "1084537",
    isDemo: true,
  },
  {
    slug: "narrative-01",
    genre: "narrative",
    index: "01",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
    // Demo only — aerial misty-hills footage ("Aerial shot of misty hills and forests
    // enveloped in fog and haze" by Julien Goettelmann, Pexels License). The full film
    // linked via vimeoId is still Blender Foundation's "Big Buck Bunny" (CC-BY 3.0) standing
    // in until a real cut exists. Swap previewClip/vimeoId for real ones and remove isDemo.
    previewClip: {
      mp4: "https://videos.pexels.com/video-files/26081666/11929581_640_360_60fps.mp4",
    },
    vimeoId: "1084537",
    isDemo: true,
  },
  {
    slug: "documentary-02",
    genre: "documentary",
    index: "02",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "commercial-02",
    genre: "commercial",
    index: "02",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "narrative-02",
    genre: "narrative",
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
    slug: "narrative-03",
    genre: "narrative",
    index: "03",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
  {
    slug: "documentary-03",
    genre: "documentary",
    index: "03",
    credits: [{ roleKey: "directedBy", name: "Quentin Mouledous" }],
  },
];

export function getFilm(slug: string): FilmEntry | undefined {
  return films.find((f) => f.slug === slug);
}
