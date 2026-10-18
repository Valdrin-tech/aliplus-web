import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "./en";
import { sq } from "./sq";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, sq };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.sq;
}
