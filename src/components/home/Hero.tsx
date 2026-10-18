"use client";

import { CinematicHero } from "@/components/layout/CinematicHero";
import { useT } from "@/i18n/LocaleProvider";

export function Hero() {
  const t = useT();
  const h = t.home.hero;
  return (
    <CinematicHero
      image="/hero-aliplus-bag.png"
      imageAlt={h.imageAlt}
      imagePosition="80% 62%"
      unoptimized
      title={h.title}
      tagline={h.tagline}
      body={h.body}
      cta={{ href: "/usage-guide", label: h.cta }}
      note={h.note}
    />
  );
}
