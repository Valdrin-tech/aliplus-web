export const locales = ["sq", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sq";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = {
  sq: "Shqip",
  en: "English",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** First path segment if it is a locale, e.g. "/en/company" → "en". */
export function localeFromPath(pathname: string): Locale | null {
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? seg : null;
}

/** "/en/company" → "/company", "/en" → "/", "/company" → "/company". */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (!isLocale(seg)) return pathname || "/";
  const rest = pathname.slice(seg.length + 1);
  return rest || "/";
}

/** Prefix an internal href with the locale: ("en", "/company") → "/en/company". */
export function withLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (localeFromPath(href)) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

/** Pick the best locale from an Accept-Language header. */
export function negotiateLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale;
  const tags = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of tags) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}
