import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FooterHero } from "@/components/layout/FooterHero";
import { PageTurnTransition } from "@/components/layout/PageTurnTransition";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Natural nutrition for ruminants`,
    template: `%s · ${site.name}`,
  },
  description:
    "Aliplus — a farm-ready feed concept for cattle, sheep and goats. Mix with your own cereals for healthier rumens, stronger rations and better farm performance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScrollProvider>
          <PageTurnTransition />
          <Header />
          <FooterHero>
            <main className="site-main relative z-10 flex-1">{children}</main>
          </FooterHero>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
