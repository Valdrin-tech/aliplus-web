import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, localeFromPath, negotiateLocale } from "@/i18n/config";

// Every page lives under /sq/... or /en/.... A request without a locale prefix
// is sent to the visitor's preferred language (cookie first, then the browser).
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (localeFromPath(pathname)) return NextResponse.next();

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookie) ? cookie : negotiateLocale(request.headers.get("accept-language")) || defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, fonts…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
