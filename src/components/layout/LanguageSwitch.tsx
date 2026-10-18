"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, locales, localeNames, stripLocale, withLocale } from "@/i18n/config";
import { useLocale, useT } from "@/i18n/LocaleProvider";

// SQ / EN toggle. Links to the same page in the other language and remembers
// the choice in a cookie so the next visit lands on it directly.
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const t = useT();
  const pathname = usePathname();
  const path = stripLocale(pathname ?? "/");

  return (
    <nav className={`lang-switch ${className}`} aria-label={t.nav.language}>
      {locales.map((code) => (
        <NextLink
          key={code}
          href={withLocale(code, path)}
          hrefLang={code}
          lang={code}
          className={`lang-switch__link${code === locale ? " is-active" : ""}`}
          aria-current={code === locale ? "true" : undefined}
          aria-label={localeNames[code]}
          onClick={() => {
            document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=31536000; samesite=lax`;
          }}
        >
          <span>{code}</span>
        </NextLink>
      ))}
    </nav>
  );
}
