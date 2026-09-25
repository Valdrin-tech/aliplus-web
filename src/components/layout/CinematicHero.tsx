import Image from "next/image";
import Link from "next/link";
import { WordReveal } from "@/components/motion/WordReveal";

type Props = {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imageQuality?: number;
  unoptimized?: boolean;
  eyebrow: string;
  title: string;
  tagline: string;
  body: string;
  cta: { href: string; label: string };
  note?: string;
};

export function CinematicHero({
  image,
  imageAlt,
  imagePosition = "center",
  imageQuality = 95,
  unoptimized = false,
  eyebrow,
  title,
  tagline,
  body,
  cta,
  note,
}: Props) {
  return (
    <section className="cine-hero hero-scene relative">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        loading="eager"
        quality={imageQuality}
        unoptimized={unoptimized}
        className="cine-hero__photo hero-scene__media"
        style={{ objectPosition: imagePosition }}
        sizes="100vw"
      />
      <div className="cine-hero__veil hero-scene__veil" aria-hidden />

      <div className="cine-hero__inner">
        <div className="cine-hero__copy hero-scene__copy">
          <div className="cine-hero__top">
            <WordReveal className="cine-hero__eyebrow" text={eyebrow} slow delay={0.2} />
            <WordReveal
              as="h1"
              className="cine-hero__title"
              text={title}
              slow
              delay={0.32}
            />
            <div className="cine-hero__rule" aria-hidden />
          </div>

          <div className="cine-hero__lower">
            <WordReveal
              as="h2"
              className="cine-hero__tagline"
              text={tagline}
              slow
              delay={0.55}
            />
            <WordReveal
              className="cine-hero__body"
              text={body}
              slow
              delay={0.75}
            />
            <Link href={cta.href} className="cine-hero__cta">
              <span aria-hidden>·</span>
              {cta.label}
              <span aria-hidden>·</span>
            </Link>
            {note && (
              <WordReveal
                className="cine-hero__note"
                text={note}
                slow
                delay={1.05}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
