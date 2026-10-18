import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";

export type LocaleParams = Promise<{ locale: string }>;

/** Resolve a page's `params` to its locale and dictionary. */
export async function localePage(params: LocaleParams): Promise<{ locale: Locale; t: Dictionary }> {
  const raw = (await params).locale;
  const locale = isLocale(raw) ? raw : defaultLocale;
  return { locale, t: getDictionary(locale) };
}
