"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    n: "01",
    tag: "Formula",
    title: "Fourteen natural components",
    body: "Urea, plant extracts, oligoelements and clay in one structured blend — built to raise the value of farm cereals.",
    value: "14",
    unit: "components",
  },
  {
    n: "02",
    tag: "Dose",
    title: "22 kg per ton of cereals",
    body: "Mixed straight into the wheat, barley or maize you already grow, in the mixer you already run.",
    value: "22",
    unit: "kg / ton",
  },
  {
    n: "03",
    tag: "Maturation",
    title: "14 days to a stronger ration",
    body: "Adjust moisture to about 24%, let the mix mature, then feed — protein and energy values rise along the way.",
    value: "14",
    unit: "days",
  },
] as const;

export function ProductReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const pinned = () =>
      window.matchMedia("(min-width: 900px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let running = false;
    let enter = 0;
    let progress = 0;
    let lastIndex = -1;

    const update = () => {
      if (!running) return;

      if (!pinned()) {
        section.style.setProperty("--enter", "1");
        section.style.setProperty("--p", "0");
        frame = requestAnimationFrame(update);
        return;
      }

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const range = Math.max(1, section.offsetHeight - vh);
      const enterTarget = Math.min(1, Math.max(0, (vh - rect.top) / vh));
      const progressTarget = Math.min(1, Math.max(0, -rect.top / range));

      enter += (enterTarget - enter) * 0.14;
      progress += (progressTarget - progress) * 0.14;
      if (Math.abs(enterTarget - enter) < 0.0005) enter = enterTarget;
      if (Math.abs(progressTarget - progress) < 0.0005) progress = progressTarget;

      section.style.setProperty("--enter", enter.toFixed(4));
      section.style.setProperty("--p", progress.toFixed(4));

      const index = Math.min(slides.length - 1, Math.floor(progressTarget * slides.length));
      if (index !== lastIndex) {
        lastIndex = index;
        setActive(index);
      }

      frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        cancelAnimationFrame(frame);
        if (running) frame = requestAnimationFrame(update);
      },
      { threshold: 0 },
    );

    io.observe(section);
    return () => {
      running = false;
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const stateOf = (i: number) =>
    i === active ? "is-active" : i < active ? "is-past" : "is-next";

  return (
    <section
      ref={sectionRef}
      className="product-reveal"
      aria-label="Aliplus product overview"
    >
      <div className="product-reveal__sticky">
        <div className="product-reveal__copy">
          <p className="product-reveal__eyebrow">
            <span aria-hidden className="product-reveal__eyebrow-dot" />
            The product
          </p>
          <h2 className="product-reveal__title">
            One bag.
            <br />
            Every ration.
          </h2>

          <div className="product-reveal__slides">
            {slides.map((slide, i) => (
              <article
                key={slide.n}
                className={`product-reveal__slide ${stateOf(i)}`}
                aria-hidden={i === active ? undefined : true}
              >
                <span className="product-reveal__slide-tag">
                  {slide.n} — {slide.tag}
                </span>
                <h3 className="product-reveal__slide-title">{slide.title}</h3>
                <p className="product-reveal__slide-body">{slide.body}</p>
              </article>
            ))}
          </div>

          <div className="product-reveal__foot">
            <ol className="product-reveal__rail" aria-label="Product highlights">
              {slides.map((slide, i) => (
                <li
                  key={slide.n}
                  className={i <= active ? "is-on" : undefined}
                  aria-current={i === active ? "step" : undefined}
                >
                  <span className="sr-only">{slide.tag}</span>
                </li>
              ))}
            </ol>
            <Link href="/products/aliplus" className="ghost-fill-btn">
              · See the product ·
            </Link>
          </div>
        </div>

        <div className="product-reveal__stage">
          <div className="product-reveal__frame">
            <div className="product-reveal__media">
              <Image
                src="/hero-aliplus-bag.png"
                alt="Aliplus feed bag in a pasture"
                fill
                unoptimized
                sizes="(max-width: 899px) 100vw, 46vw"
                className="product-reveal__img"
              />
            </div>
            <div className="product-reveal__chip" aria-hidden>
              {slides.map((slide, i) => (
                <div key={slide.n} className={`product-reveal__chip-row ${stateOf(i)}`}>
                  <span className="product-reveal__chip-value">{slide.value}</span>
                  <span className="product-reveal__chip-unit">{slide.unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
