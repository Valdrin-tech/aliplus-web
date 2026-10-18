import Image from "next/image";
import type { CSSProperties } from "react";
import { Link } from "@/i18n/Link";
import { WordReveal } from "@/components/motion/WordReveal";

type Props = {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imageQuality?: number;
  unoptimized?: boolean;
  crumbs: [string, string];
  title: string;
  tagline: string;
  body: string;
  cta: { href: string; label: string };
  note?: string;
};

export function CinematicHero({
  image,
  imageAlt,
  imagePosition = "100% 0%",
  imageQuality = 95,
  unoptimized = false,
  crumbs,
  title,
  tagline,
  body,
  cta,
  note,
}: Props) {
  return (
    <section className="home-hero hero-scene">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        loading="eager"
        quality={imageQuality}
        unoptimized={unoptimized}
        className="home-hero__img hero-scene__media"
        style={{ "--hero-pos": imagePosition } as CSSProperties}
        sizes="100vw"
      />
      <div className="home-hero__veil hero-scene__veil" aria-hidden />

      <div className="home-hero__content hero-scene__copy">
        <div className="home-hero__heading">
          <div className="home-hero__crumbs">
            <WordReveal as="span" className="home-hero__crumb" text={crumbs[0]} slow delay={0.18} />
            <span className="home-hero__dot" aria-hidden />
            <WordReveal as="span" className="home-hero__crumb" text={crumbs[1]} slow delay={0.22} />
          </div>
          <WordReveal
            as="h1"
            className="home-hero__title"
            text={title}
            slow
            delay={0.32}
          />
        </div>

        <div className="home-hero__description">
          <div className="home-hero__lead">
            <WordReveal
              as="h2"
              className="home-hero__tagline"
              text={tagline}
              slow
              delay={0.55}
            />
            <WordReveal
              className="home-hero__body"
              text={body}
              slow
              delay={0.72}
            />
          </div>
          <div className="home-hero__actions">
            <Link href={cta.href} className="ghost-fill-btn ghost-fill-btn--light">
              {cta.label}
            </Link>
            {note ? (
              <WordReveal
                className="home-hero__note"
                text={note}
                slow
                delay={1.05}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
