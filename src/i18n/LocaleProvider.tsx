"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { LOCALE_COOKIE, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Ctx = { locale: Locale; t: Dictionary };

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  // Remember the language being read so the next visit to "/" lands on it.
  useEffect(() => {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, t: dictionary }}>{children}</LocaleContext.Provider>;
}

function useCtx(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("LocaleProvider is missing above this component.");
  return ctx;
}

/** The active locale ("sq" | "en"). */
export function useLocale(): Locale {
  return useCtx().locale;
}

/** The active dictionary — all site copy for the current language. */
export function useT(): Dictionary {
  return useCtx().t;
}
