import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { FooterHero } from "@/components/layout/FooterHero";
import { PageTurnTransition } from "@/components/layout/PageTurnTransition";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/LocaleProvider";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const t = getDictionary(locale);
  return {
    title: {
      default: t.meta.defaultTitle,
      template: `%s · ${t.meta.siteName}`,
    },
    description: t.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const locale = resolveLocale((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <LocaleProvider locale={locale} dictionary={dictionary}>
          <SmoothScrollProvider>
            <PageTurnTransition />
            <Header />
            <FooterHero>
              <main className="site-main relative z-10 flex-1">{children}</main>
            </FooterHero>
          </SmoothScrollProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
