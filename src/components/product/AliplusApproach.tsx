"use client";

import Image from "next/image";
import Link from "next/link";
import { WordReveal } from "@/components/motion/WordReveal";

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
    body: "Aliplus is a farm-ready blend of urea, plant extracts, oligoelements and clay. Mixed on the farm with wheat, barley, maize and other cereals you already grow, then matured, then fed.",
  },
  {
    n: "02",
    title: "Where the ration meets the rumen",
    tone: "cream" as const,
    flip: true,
    image: "/home-barn.jpg",
    imageAlt: "Cattle in an open barn",
    body: "Prebiotic and probiotic support helps rumen flora work more evenly. Protein and energy values can rise after 14 days — steadier uptake, less acidosis risk, and more from the same bite.",
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
  return (
    <div className="aliplus-approach">
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
                <WordReveal
                  as="h2"
                  className="approach-chapter__num"
                  text={chapter.n}
                  step={0.08}
                />
                <div className="approach-chapter__title-wrap">
                  <WordReveal
                    as="h3"
                    className="approach-chapter__title"
                    text={chapter.title}
                    delay={0.08}
                  />
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
                        className="object-cover"
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
                  className="approach-chapter__num"
                  text={chapter.n}
                  step={0.08}
                />
                <WordReveal
                  as="h3"
                  className="approach-chapter__title"
                  text={chapter.title}
                  delay={0.08}
                />
              </div>
              <WordReveal
                className="approach-chapter__body"
                text={chapter.body}
                delay={0.16}
                step={0.022}
              />
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
