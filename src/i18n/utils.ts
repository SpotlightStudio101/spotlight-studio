import { defaultLocale, type Locale, type translations } from "./translations";
import type { FilmEntry } from "../data/films";

type Translations = (typeof translations)[Locale];

/** Composes the placeholder film title ("Untitled — Commercial 01") in the given locale. */
export function filmTitle(film: FilmEntry, t: Translations): string {
  return `${t.filmData.untitled} — ${t.filmData.genre[film.genre]} ${film.index}`;
}

/** Given an unprefixed (English) path like "/films", returns the equivalent path for `locale`. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? "/fr" : `/fr${path}`;
}

/** Strips a leading "/fr" prefix, returning the base (English) path. */
export function unlocalizePath(pathname: string): string {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  return pathname;
}

/** Given the current pathname, returns the equivalent path in the other locale. */
export function alternatePath(pathname: string, currentLocale: Locale): string {
  const base = unlocalizePath(pathname);
  const otherLocale: Locale = currentLocale === "en" ? "fr" : "en";
  return localizePath(base, otherLocale);
}
