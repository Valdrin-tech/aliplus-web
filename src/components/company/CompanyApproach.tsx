"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type LenisLike = {
  on?: (event: string, handler: () => void) => unknown;
  off?: (event: string, handler: () => void) => unknown;
};

// Scroll scenes mirror farmminerals.com/approach: random letter fade on headings
// ([data-chars]), masked word rise on copy ([data-words]), scrubbed photo parallax
// ([data-parallax]), staggered circle slide-in, and a growing hero rule.
export function CompanyApproach() {
  const t = useT();
  const c = t.company;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-static");
      return;
    }

    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    const onLenisScroll = () => ScrollTrigger.update();
    lenis?.on?.("scroll", onLenisScroll);

    const splits: SplitText[] = [];

    const ctx = gsap.context(() => {
      // Hero — plays on load.
      const heroTitle = root.querySelector<HTMLElement>(".co-ap-hero__title");
      const heroBody = root.querySelector<HTMLElement>(".co-ap-hero__body");
      const heroIntro = gsap.timeline({ delay: 0.35 });

      heroIntro.fromTo(
        ".co-ap-hero__media img",
        { scale: 1.14 },
        { scale: 1, duration: 2.4, ease: "power3.out" },
        0,
      );
      heroIntro.fromTo(
        ".co-ap-hero__eyebrow",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6, ease: "power2.out" },
        0.1,
      );
      if (heroTitle) {
        const split = new SplitText(heroTitle, { type: "words,chars" });
        splits.push(split);
        heroIntro.fromTo(
          split.chars,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4, ease: "power2.out", stagger: { each: 0.02, from: "random" } },
          0.2,
        );
      }
      heroIntro.fromTo(
        ".co-ap-hero__rule",
        { scaleX: 0.07 },
        { scaleX: 1, duration: 1.6, ease: "power3.inOut" },
        0.3,
      );
      if (heroBody) {
        const split = new SplitText(heroBody, { type: "lines,words", mask: "words" });
        splits.push(split);
        heroIntro.fromTo(
          split.words,
          { yPercent: 100, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", stagger: 0.012 },
          0.9,
        );
      }

      // Slow, video-like drift on the hero photo while it is on screen.
      gsap.to(".co-ap-hero__media img", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: ".co-ap-hero", start: "top top", end: "bottom top", scrub: true },
      });

      // Headings — random letter fade when the block reaches 90% of the viewport.
      root.querySelectorAll<HTMLElement>("[data-chars]").forEach((el) => {
        const split = new SplitText(el, { type: "words,chars" });
        splits.push(split);
        gsap.fromTo(
          split.chars,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: { each: 0.02, from: "random" },
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          },
        );
      });

      // Copy — words rise out of a mask.
      root.querySelectorAll<HTMLElement>("[data-words]").forEach((el) => {
        const split = new SplitText(el, { type: "lines,words", mask: "words" });
        splits.push(split);
        gsap.fromTo(
          split.words,
          { yPercent: 100, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.01,
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          },
        );
      });

      // Section rules draw in from the left.
      root.querySelectorAll<HTMLElement>("[data-rule]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          },
        );
      });

      // Photos — scrubbed parallax across the section's pass through the viewport.
      root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 16;
        gsap.fromTo(
          el,
          { yPercent: 0 },
          {
            yPercent: -amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // 03 — circles slide in from the left, one after another.
      gsap.fromTo(
        ".co-ap-s3__circle",
        { x: "-3em", autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: { trigger: ".co-ap-s3__circles", start: "top 85%" },
        },
      );

      // 04 — spec card rises in.
      gsap.fromTo(
        ".co-ap-spec",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".co-ap-spec", start: "top 90%" },
        },
      );

      // 05 — stat chips pop in over the photo.
      gsap.fromTo(
        ".co-ap-stat",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: { trigger: ".co-ap-s5__media", start: "top 70%" },
        },
      );

      // CTA mosaic — tiles open from the bottom.
      gsap.fromTo(
        ".co-ap-cta .home-cta__shot",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.12,
          scrollTrigger: { trigger: ".co-ap-cta", start: "top 75%" },
        },
      );
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    const fontsReady = document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      void fontsReady;
      window.removeEventListener("load", refresh);
      lenis?.off?.("scroll", onLenisScroll);
      ctx.revert();
      splits.forEach((split) => split.revert());
    };
  }, []);

  return (
    <div ref={rootRef} className="co-page co-ap">
      {/* Hero */}
      <section className="co-ap-hero" data-header-surface="dark">
        <div className="co-ap-hero__media">
          <Image
            src="/aliplus-kosova-site.jpg"
            alt={c.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "72% 62%" }}
          />
        </div>
        <div className="co-ap-hero__veil" aria-hidden />
        <div className="co-ap-hero__content">
          <div className="co-ap-hero__heading">
            <p className="co-ap-hero__eyebrow">{c.heroEyebrow}</p>
            <h1 className="co-ap-hero__title">{c.heroTitle}</h1>
          </div>
          <div className="co-ap-hero__rule" aria-hidden />
          <p className="co-ap-hero__body">{c.heroBody}</p>
        </div>
      </section>

      {/* 01 — photo left, olive panel right */}
      <section className="co-ap-s1" data-header-surface="dark">
        <div className="co-ap-s1__photo">
          <p className="co-ap-num co-ap-num--light co-ap-s1__num" data-chars>
            01
          </p>
          <div className="co-ap-parallax" data-parallax="16">
            <Image
              src="/cattle-trough-row.jpg"
              alt={c.s1.alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "45% 60%" }}
            />
          </div>
        </div>
        <div className="co-ap-s1__panel">
          <div className="co-ap-s1__heading">
            <h2 className="co-ap-h2" data-chars>
              {c.s1.title}
            </h2>
            <div className="co-ap-rule co-ap-rule--light" data-rule />
          </div>
          <div className="co-ap-copy co-ap-copy--light co-ap-s1__copy">
            <p data-words>{c.s1.p1}</p>
            <p data-words>{c.s1.p2}</p>
          </div>
        </div>
      </section>

      {/* 02 — cream copy left, photo right */}
      <section className="co-ap-s2" data-header-surface="light">
        <div className="co-ap-s2__content">
          <div className="co-ap-s2__heading-wrap">
            <div className="co-ap-s2__heading">
              <p className="co-ap-num" data-chars>
                02
              </p>
              <h2 className="co-ap-h2 co-ap-h2--green" data-chars>
                {c.s2.title}
              </h2>
            </div>
            <div className="co-ap-rule" data-rule />
          </div>
          <div className="co-ap-copy co-ap-s2__copy">
            <p data-words>{c.s2.p1}</p>
            <p data-words>{c.s2.p2}</p>
            <p data-words>{c.s2.p3}</p>
          </div>
        </div>
        <div className="co-ap-s2__photo">
          <div className="co-ap-parallax" data-parallax="16">
            <Image
              src="/treated-cereals-pile.jpg"
              alt={c.s2.alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
          </div>
        </div>
      </section>

      {/* 03 — circles + two columns */}
      <section className="co-ap-s3" data-header-surface="light">
        <div className="co-ap-s3__heading">
          <p className="co-ap-num" data-chars>
            03
          </p>
          <h2 className="co-ap-h2 co-ap-h2--green" data-chars>
            {c.s3.title}
          </h2>
        </div>
        <div className="co-ap-s3__content">
          <div className="co-ap-s3__circles">
            {[
              { src: "/aliplus-processing-pile.jpg", alt: c.s3.alts[0], pos: "50% 58%" },
              { src: "/aliplus-granules-close.jpg", alt: c.s3.alts[1], pos: "50% 50%" },
              { src: "/bull-resting.jpg", alt: c.s3.alts[2], pos: "50% 45%" },
            ].map((img) => (
              <div key={img.src} className="co-ap-s3__circle">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 767px) 40vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: img.pos }}
                />
              </div>
            ))}
          </div>
          <div className="co-ap-s3__texts">
            <p className="co-ap-copy" data-words>
              {c.s3.p1}
            </p>
            <p className="co-ap-copy" data-words>
              {c.s3.p2}
            </p>
          </div>
        </div>
      </section>

      {/* 04 — blurred green field, spec card, two columns */}
      <section className="co-ap-s4" data-header-surface="dark">
        <div className="co-ap-s4__bg" data-parallax="12" aria-hidden>
          <Image src="/cattle-barn-resting.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="co-ap-s4__inner">
          <div className="co-ap-s4__heading">
            <p className="co-ap-num co-ap-num--light" data-chars>
              04
            </p>
            <h2 className="co-ap-h2" data-chars>
              {c.s4.title}
            </h2>
            <div className="co-ap-rule co-ap-rule--light co-ap-s4__rule" data-rule />
          </div>
          <div className="co-ap-s4__content">
            <div className="co-ap-spec">
              <div className="co-ap-spec__row">
                <p>
                  {c.s4.specLine1}
                  <br />
                  {c.s4.specLine2}
                </p>
                <p className="is-end">
                  {c.s4.rate}
                  <strong>{c.s4.rateValue}</strong>
                </p>
              </div>
              <div className="co-ap-spec__core">
                <Image src="/logo-aliplus.png" alt="" width={150} height={90} className="co-ap-spec__logo" />
              </div>
              <div className="co-ap-spec__row">
                <p>
                  {c.s4.components}
                  <strong>{c.s4.componentsValue}</strong>
                </p>
                <p className="is-end">
                  {c.s4.maturation}
                  <strong>{c.s4.maturationValue}</strong>
                </p>
              </div>
            </div>
            <div className="co-ap-s4__texts">
              <div className="co-ap-copy co-ap-copy--light co-ap-copy--sm">
                <p data-words>{c.s4.p1}</p>
                <p data-words>{c.s4.p2}</p>
              </div>
              <div className="co-ap-copy co-ap-copy--light co-ap-copy--sm">
                <p data-words>{c.s4.p3}</p>
                <p data-words>{c.s4.p4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — photo with stats left, cream copy right */}
      <section className="co-ap-s5" data-header-surface="light">
        <div className="co-ap-s5__media">
          <div className="co-ap-parallax" data-parallax="10">
            <Image
              src="/hero-aliplus-bag.png"
              alt={c.s5.alt}
              fill
              unoptimized
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "78% 60%" }}
            />
          </div>
          <div className="co-ap-s5__ring" aria-hidden />
          {(["a", "b", "c", "d"] as const).map((k, i) => (
            <div key={k} className={`co-ap-stat co-ap-stat--${k}${k === "b" || k === "c" ? " co-ap-stat--glass" : ""}`}>
              <strong>{c.s5.stats[i].value}</strong>
              <span>{c.s5.stats[i].label}</span>
            </div>
          ))}
        </div>
        <div className="co-ap-s5__content">
          <div className="co-ap-s2__heading-wrap">
            <div className="co-ap-s5__heading">
              <p className="co-ap-num" data-chars>
                05
              </p>
              <h2 className="co-ap-h2 co-ap-h2--green" data-chars>
                {c.s5.title}
              </h2>
            </div>
            <div className="co-ap-rule" data-rule />
          </div>
          <div className="co-ap-copy co-ap-s5__copy">
            <p data-words>{c.s5.p}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta co-ap-cta" data-header-surface="dark">
        <div className="home-cta__copy">
          <h2 className="home-cta__title" data-chars>
            {c.cta.title}
          </h2>
          <p className="home-cta__lead" data-words>
            {c.cta.lead}
          </p>
          <div className="home-cta__actions">
            <Link href="/contact" className="ghost-fill-btn ghost-fill-btn--light">
              {t.common.requestSample}
            </Link>
            <Link href="/contact" className="ghost-line-btn ghost-line-btn--light">
              {t.common.talkToTeam}
            </Link>
          </div>
        </div>
        <div className="home-cta__mosaic" aria-hidden>
          <div className="home-cta__shot home-cta__shot--a">
            <Image src="/treated-cereals-pile.jpg" alt="" fill className="object-cover" sizes="200px" />
          </div>
          <div className="home-cta__shot home-cta__shot--b">
            <Image src="/aliplus-kosova-site.jpg" alt="" fill className="object-cover object-[70%_55%]" sizes="280px" />
          </div>
          <div className="home-cta__shot home-cta__shot--c">
            <Image src="/farm-bull-feeding.jpg" alt="" fill className="object-cover object-[40%_45%]" sizes="180px" />
          </div>
        </div>
      </section>
    </div>
  );
}
