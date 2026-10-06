"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { WordReveal } from "@/components/motion/WordReveal";

type LenisLike = {
  on?: (event: string, handler: () => void) => unknown;
  off?: (event: string, handler: () => void) => unknown;
};

const heroTitle =
  "We're here to get more from every ration — and from cereals already on the farm.";

const heroBody =
  "Fourteen natural components, mixed at 22 kg per ton of farm cereals and matured for 14 days. Aliplus does not replace nutrition — it helps animals use more of what is already there.";

const chapters = [
  {
    n: "01",
    title: "We started with the farm cereal",
    tone: "olive" as const,
    flip: false,
    image: "/aliplus-field.jpg",
    imageAlt: "Wheat field at last light",
    kicker: "Kosova Aliplus",
    role: "Manufacturer of feed for cattle, goats, and sheep",
    bodies: [
      "Kosova Aliplus is the creator of a natural, cost-effective nutritional concept developed by a livestock farmer working alongside biologists. It features a unique formula of 14 natural ingredients that optimizes ruminant metabolism. With Aliplus, farmers gain autonomy over their animals' nutrition. Manufactured in France and used on thousands of farms, Aliplus boosts both farm profitability and animal health and well-being.",
      "For years, Kosova Aliplus has been innovating in animal nutrition with supplements for cattle and sheep — including products for cows, calves, bulls, and young bulls. Developed in France, Aliplus stands out for its unique formulation, which is ideal for optimizing health and production while remaining environmentally friendly.",
    ],
  },
  {
    n: "02",
    title: "Where the ration meets the rumen",
    tone: "cream" as const,
    flip: true,
    image: "/home-barn.jpg",
    imageAlt: "Cattle in an open barn",
    bodies: [
      "Aliplus is rethinking animal nutrition by offering an economical, eco-friendly solution that adds value to local grains. This approach enables the on-farm production of high-quality feed at a lower cost, thereby fostering protein self-sufficiency.",
      "Aliplus’s unique 14-ingredient formula cuts feed costs, lowers operating expenses, improves animal health, and boosts production — all of which helps increase farm profitability.",
      "Aliplus is mixed with grains available on the farm; it enhances their nutritional value (amino acids, protein, PDI) and partially hydrolyzes the starch and cellulose. The resulting Aliplus-treated grain is stable, easy to store, and durable.",
    ],
  },
  {
    n: "03",
    title: "We don't guess the rate",
    tone: "cream" as const,
    flip: false,
    image: "/guide-grains.jpg",
    imageAlt: "Farm cereals ready to mix",
    circles: [
      { src: "/guide-grains.jpg", alt: "Cereals" },
      { src: "/guide-feeding.jpg", alt: "Feeding" },
      { src: "/hero-cows.jpg", alt: "Cattle" },
    ],
    columns: [
      "Use only 22 kg per ton of cereals. Adjust moisture to about 24% and let the mix mature for 14 days so the formula can work.",
      "Not a complete feed, not a veterinary medicine, and not a replacement for good husbandry. The rate is the product.",
    ],
  },
  {
    n: "04",
    title: "Built for real farms",
    tone: "olive" as const,
    flip: true,
    image: "/guide-feeding.jpg",
    imageAlt: "Cattle feeding on an Aliplus ration",
    body: "Works in existing mixers and rations for cattle, sheep and goats. No new feeding system. Mix, mature, then feed with the cereals already on the farm.",
  },
  {
    n: "05",
    title: "Building trust, not hype",
    tone: "cream" as const,
    flip: false,
    image: "/aliplus-wheat-ears.jpg",
    imageAlt: "Wheat ears in the field",
    body: "Fourteen components. One formula. Used by farms feeding Aliplus every day. Advisors in Kosova help you plan the first mix and stay with the results.",
  },
];

export function AliplusApproach() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = root.querySelector<HTMLElement>(".approach-hero");
    const heroImg = root.querySelector<HTMLElement>(".approach-hero__img");
    const chapterEls = Array.from(root.querySelectorAll<HTMLElement>(".approach-chapter"));

    const apply = () => {
      const vh = window.innerHeight || 1;

      if (hero && heroImg) {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
        heroImg.style.transform = `translate3d(0, ${progress * 12}%, 0) scale(${1.12 - progress * 0.08})`;
      }

      chapterEls.forEach((chapter) => {
        const rect = chapter.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
        const img = chapter.querySelector<HTMLElement>(".approach-chapter__img");
        const copy = chapter.querySelector<HTMLElement>(".approach-chapter__copy");
        const stack = chapter.querySelector<HTMLElement>(".approach-chapter__stack");

        if (img) {
          img.style.transform = `translate3d(0, ${8 - progress * 16}%, 0) scale(${1.18 - progress * 0.14})`;
        }
        if (copy) {
          copy.style.transform = `translate3d(0, ${40 - progress * 58}px, 0)`;
        }
        if (stack) {
          stack.style.transform = `translate3d(0, ${32 - progress * 48}px, 0)`;
        }
        chapter.querySelectorAll<HTMLElement>(".approach-chapter__circle-img").forEach((circleImg) => {
          circleImg.style.transform = `translate3d(0, ${6 - progress * 12}%, 0) scale(${1.16 - progress * 0.12})`;
        });
      });
    };

    apply();
    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    lenis?.on?.("scroll", apply);
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    const later = window.setTimeout(apply, 400);

    return () => {
      window.clearTimeout(later);
      lenis?.off?.("scroll", apply);
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <div className="aliplus-approach" ref={rootRef}>
      <section className="approach-hero hero-scene">
        <div className="approach-hero__media">
          <Image
            src="/aliplus-field.jpg"
            alt="Wheat field at sunset"
            fill
            priority
            className="approach-hero__img hero-scene__media"
            sizes="100vw"
          />
        </div>
        <div className="approach-hero__content hero-scene__copy">
          <div className="approach-hero__heading">
            <WordReveal
              className="approach-hero__eyebrow"
              text="Aliplus"
              slow
              delay={0.2}
            />
            <WordReveal
              as="h1"
              className="approach-hero__title"
              text={heroTitle}
              slow
              delay={0.35}
            />
          </div>
          <div className="approach-hero__rule" aria-hidden />
          <div className="approach-hero__desc">
            <WordReveal
              className="approach-hero__body"
              text={heroBody}
              slow
              delay={0.85}
            />
          </div>
        </div>
      </section>

      {chapters.map((chapter) => {
        if (chapter.circles) {
          return (
            <section
              key={chapter.n}
              className={`approach-chapter approach-chapter--${chapter.tone} approach-chapter--circles`}
            >
              <div className="approach-chapter__head">
                <div className="approach-chapter__title-wrap">
                  <WordReveal
                    as="h2"
                    className="approach-chapter__title"
                    text={chapter.title}
                    delay={0.08}
                  />
                  <span className="approach-chapter__rule" aria-hidden />
                </div>
              </div>
              <div className="approach-chapter__stack">
                <div className="approach-chapter__circles">
                  {chapter.circles.map((photo) => (
                    <div key={photo.alt} className="approach-chapter__circle">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover approach-chapter__circle-img"
                        sizes="22.7em"
                      />
                    </div>
                  ))}
                </div>
                <div className="approach-chapter__cols">
                  {chapter.columns?.map((col) => (
                    <WordReveal
                      key={col}
                      className="approach-chapter__body"
                      text={col}
                      delay={0.12}
                      step={0.02}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section
            key={chapter.n}
            className={`approach-chapter approach-chapter--${chapter.tone}${chapter.flip ? " is-flip" : ""}`}
          >
            <div className="approach-chapter__photo">
              <Image
                src={chapter.image}
                alt={chapter.imageAlt}
                fill
                className="approach-chapter__img"
                sizes="50vw"
              />
            </div>
            <div className="approach-chapter__copy">
              <div className="approach-chapter__heading">
                <WordReveal
                  as="h2"
                  className="approach-chapter__title"
                  text={chapter.title}
                  delay={0.08}
                />
                <span className="approach-chapter__rule" aria-hidden />
              </div>
              <div className="approach-chapter__text">
                {"kicker" in chapter && chapter.kicker ? (
                  <WordReveal
                    className="approach-chapter__kicker"
                    text={chapter.kicker}
                    delay={0.12}
                    step={0.04}
                  />
                ) : null}
                {"role" in chapter && chapter.role ? (
                  <WordReveal
                    className="approach-chapter__role"
                    text={chapter.role}
                    delay={0.16}
                    step={0.028}
                  />
                ) : null}
                {("bodies" in chapter && chapter.bodies
                  ? chapter.bodies
                  : "body" in chapter && chapter.body
                    ? [chapter.body]
                    : []
                ).map((para, i) => (
                  <WordReveal
                    key={para.slice(0, 32)}
                    className="approach-chapter__body"
                    text={para}
                    delay={0.2 + i * 0.1}
                    step={0.014}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="approach-close">
        <div className="approach-close__copy">
          <WordReveal
            as="h2"
            className="approach-close__title"
            text="See the difference on your own cereals."
          />
          <WordReveal
            className="approach-close__lead"
            text="Start with a first mix at 22 kg per ton, mature for 14 days, then feed. Advisors help you plan the transition."
            delay={0.2}
          />
          <div className="approach-close__actions">
            <Link href="/usage-guide" className="ghost-fill-btn ghost-fill-btn--light">
              Open the Usage Guide
            </Link>
            <Link href="/contact" className="ghost-line-btn ghost-line-btn--light">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
