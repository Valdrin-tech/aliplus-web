import type { Metadata } from "next";
import { Fraunces, Lilita_One, Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTurnTransition } from "@/components/layout/PageTurnTransition";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { site } from "@/lib/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Closest open alternative to YWFT Ultramagnetic Rough (used by pastureforlife.org):
// rounded geometric display sans, single weight; the "rough" edge comes from our SVG filter.
const stamp = Lilita_One({
  variable: "--font-stamp",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${oswald.variable} ${stamp.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SmoothScrollProvider>
          <PageTurnTransition />
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
