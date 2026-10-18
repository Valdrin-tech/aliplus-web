"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type LenisLike = {
  on?: (event: string, handler: () => void) => unknown;
  off?: (event: string, handler: () => void) => unknown;
  scrollTo?: (target: number, opts?: { duration?: number }) => void;
};

// Four panels tell the product story in order: bag → inside → on the farm → in the trough.
// Media per panel; the copy comes from the dictionary in the same order.
const slideMedia = [
  { src: "/hero-aliplus-bag.png", position: "78% 55%", unoptimized: true, contain: false },
  { src: "/aliplus-granules.jpg", position: "50% 50%", unoptimized: false, contain: false },
  { src: "/aliplus-hands-cutout.png", position: "50% 50%", unoptimized: true, contain: true },
  { src: "/cattle-feeding-trough.jpg", position: "50% 60%", unoptimized: false, contain: false },
];
const SLIDE_COUNT = slideMedia.length;

const formatKinds = ["bag", "pallet", "big"] as const;

export function AliplusStory() {
  const t = useT();
  const a = t.aliplus;
  const slides = a.slides.map((slide, i) => ({ ...slide, ...slideMedia[i], n: String(i + 1).padStart(2, "0") }));
  const formats = a.formats.map((f, i) => ({ ...f, kind: formatKinds[i] ?? "bag" }));
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Tab click: scroll the pinned section to that panel's position.
  const goToSlide = (index: number) => {
    const section = rootRef.current?.querySelector<HTMLElement>(".al-swipe");
    if (!section) return;
    let target: number;
    if (window.matchMedia("(min-width: 900px)").matches) {
      // Pinned: each panel owns an equal share of the section's scroll.
      const top = section.getBoundingClientRect().top + window.scrollY;
      const perSlide = (section.offsetHeight - window.innerHeight) / (SLIDE_COUNT - 1);
      target = top + perSlide * index;
    } else {
      // Phone rail: slide the track sideways to the panel.
      const track = section.querySelector<HTMLElement>(".al-swipe__track");
      const panel = section.querySelectorAll<HTMLElement>(".al-panel")[index];
      if (!track || !panel) return;
      const gutter = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      track.scrollTo({ left: panel.offsetLeft - gutter, behavior: "smooth" });
      return;
    }
    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    if (lenis?.scrollTo) lenis.scrollTo(target, { duration: 1.2 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  };

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
    const cleanups: Array<() => void> = [];
    const split = (el: Element, vars: SplitText.Vars) => {
      const s = new SplitText(el, vars);
      splits.push(s);
      return s;
    };

    const ctx = gsap.context(() => {
      // ── Hero: olive curtain lifts, the bag rises and settles, text follows.
      const intro = gsap.timeline({ delay: 0.2 });
      intro.fromTo(".al-hero__curtain", { yPercent: 0 }, { yPercent: -100, duration: 1.3, ease: "power4.inOut" }, 0);
      intro.fromTo(
        ".al-hero__bag",
        { y: 90, rotateY: -28, rotateX: 6, autoAlpha: 0 },
        { y: 0, rotateY: -12, rotateX: 4, autoAlpha: 1, duration: 1.8, ease: "power4.out" },
        0.5,
      );
      intro.fromTo(".al-hero__floor", { scaleX: 0.4, autoAlpha: 0 }, { scaleX: 1, autoAlpha: 1, duration: 1.4, ease: "power3.out" }, 0.9);
      intro.fromTo(".al-hero__kicker", { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0.7);
      const heroTitle = root.querySelector(".al-hero__title");
      if (heroTitle) {
        const s = split(heroTitle, { type: "words,chars", mask: "chars" });
        intro.fromTo(s.chars, { yPercent: 110 }, { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: 0.05 }, 0.8);
      }
      intro.fromTo(".al-hero__sub", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, 1.25);
      const heroBody = root.querySelector(".al-hero__body");
      if (heroBody) {
        const s = split(heroBody, { type: "lines", mask: "lines" });
        intro.fromTo(s.lines, { yPercent: 100 }, { yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.08 }, 1.4);
      }
      intro.fromTo(
        ".al-hero__actions > *, .al-hero__strip > *",
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", stagger: 0.08 },
        1.7,
      );

      // Idle float, and a soft tilt that follows the pointer (fine pointers only).
      gsap.to(".al-hero__bag", { y: -14, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2.4 });
      const stage = root.querySelector<HTMLElement>(".al-hero__stage");
      if (stage && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const tiltX = gsap.quickTo(".al-hero__bag", "rotateX", { duration: 0.9, ease: "power3.out" });
        const tiltY = gsap.quickTo(".al-hero__bag", "rotateY", { duration: 0.9, ease: "power3.out" });
        const onMove = (e: PointerEvent) => {
          const r = stage.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          tiltY(-12 + px * 16);
          tiltX(4 - py * 10);
        };
        const onLeave = () => {
          tiltY(-12);
          tiltX(4);
        };
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          stage.removeEventListener("pointermove", onMove);
          stage.removeEventListener("pointerleave", onLeave);
        });
      }
      gsap.to(".al-hero__stage", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ".al-hero", start: "top top", end: "bottom top", scrub: true },
      });

      // ── Text entrances: lines rise out of a mask; headings rise letter by letter.
      root.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
        const s = split(el, { type: "lines", mask: "lines" });
        gsap.fromTo(
          s.lines,
          { yPercent: 100 },
          { yPercent: 0, duration: 1.1, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: el, start: "top 88%" } },
        );
      });
      root.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } },
        );
      });

      // ── Swipe: the section pins; the track slides sideways with the scroll,
      //    one screen of scroll per panel. Desktop only — phones stack the panels.
      const section = root.querySelector<HTMLElement>(".al-swipe");
      const track = root.querySelector<HTMLElement>(".al-swipe__track");
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        if (!section || !track) return;
        const distance = () => track.scrollWidth - track.clientWidth;
        gsap.fromTo(
          track,
          { x: 0 },
          {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const index = Math.min(SLIDE_COUNT - 1, Math.round(self.progress * (SLIDE_COUNT - 1)));
                setActive((prev) => (prev === index ? prev : index));
              },
            },
          },
        );
        // Each panel's photo drifts a little slower than the track for depth.
        root.querySelectorAll<HTMLElement>(".al-panel__img").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -6 },
            {
              xPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: section, start: "top top", end: "bottom bottom", scrub: true },
            },
          );
        });
      });
      mm.add("(max-width: 899px)", () => {
        // Phone rail: the panel nearest the middle of the rail owns the active tab.
        if (!track) return;
        const panels = gsap.utils.toArray<HTMLElement>(".al-panel");
        const sync = () => {
          const mid = track.scrollLeft + track.clientWidth / 2;
          let index = 0;
          let best = Number.POSITIVE_INFINITY;
          panels.forEach((el, i) => {
            const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
            if (d < best) {
              best = d;
              index = i;
            }
          });
          setActive((prev) => (prev === index ? prev : index));
        };
        track.addEventListener("scroll", sync, { passive: true });
        sync();
        return () => track.removeEventListener("scroll", sync);
      });
      cleanups.push(() => mm.revert());

      // ── Formats: cards rise one after another.
      gsap.fromTo(
        ".al-format",
        { y: 60, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".al-formats__grid", start: "top 85%" } },
      );
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    void document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      lenis?.off?.("scroll", onLenisScroll);
      cleanups.forEach((fn) => fn());
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <div ref={rootRef} className="co-page al">
      {/* 1 · Hero */}
      <section className="al-hero" data-header-surface="light">
        <div className="al-hero__grid">
          <div className="al-hero__content">
            <p className="al-hero__kicker">
              <span className="al-hero__kicker-n">{a.kickerN}</span>
              {a.kicker}
            </p>
            <h1 className="al-hero__title">{a.title}</h1>
            <p className="al-hero__sub">{a.sub}</p>
            <p className="al-hero__body">{a.body}</p>
            <div className="al-hero__actions">
              <Link href="/contact" className="ghost-fill-btn">
                {t.common.requestSample}
              </Link>
              <Link href="/usage-guide" className="ghost-line-btn">
                {t.common.usageGuide}
              </Link>
            </div>
          </div>

          <div className="al-hero__stage" aria-hidden>
            <div className="al-hero__halo" />
            <div className="al-hero__floor" />
            <div className="al-hero__bag">
              <Image
                src="/aliplus-bag-cutout.png"
                alt=""
                width={583}
                height={1046}
                priority
                unoptimized
                className="al-hero__bag-img"
                sizes="(max-width: 899px) 70vw, 32vw"
              />
            </div>
          </div>
        </div>

        <dl className="al-hero__strip">
          <div>
            <dt>{a.strip.rate}</dt>
            <dd>{a.strip.rateValue}</dd>
          </div>
          <div>
            <dt>{a.strip.inside}</dt>
            <dd>{a.strip.insideValue}</dd>
          </div>
          <div>
            <dt>{a.strip.wait}</dt>
            <dd>{a.strip.waitValue}</dd>
          </div>
          <div>
            <dt>{a.strip.herd}</dt>
            <dd>{a.strip.herdValue}</dd>
          </div>
          <div className="al-hero__scroll">
            <dt>{a.strip.scroll}</dt>
            <dd>
              <span className="al-hero__scroll-line" />
            </dd>
          </div>
        </dl>
        <div className="al-hero__curtain" aria-hidden />
      </section>

      {/* 2 · Intro */}
      <section className="al-intro" data-header-surface="light">
        <div className="al-intro__grid">
          <div>
            <p className="al-eyebrow" data-fade>
              {a.introEyebrow}
            </p>
            <h2 className="al-statement" data-lines>
              {a.introStatement}
            </h2>
          </div>
          <div className="al-intro__copy al-copy">
            <p data-lines>{a.introP1}</p>
            <p data-lines>
              <span className="al-copy__lead">{a.introLead}</span> {a.introP2}
            </p>
          </div>
        </div>
      </section>

      {/* 3 · Swipe (pinned horizontal panels, after lujoliving.com/about) */}
      <section className="al-swipe" data-header-surface="light">
        <div className="al-swipe__pin">
          <div className="al-swipe__bar" role="tablist" aria-label={a.swipeAria}>
            {slides.map((s, i) => (
              <button
                key={s.n}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`al-swipe__tab${i === active ? " is-active" : ""}`}
                onClick={() => goToSlide(i)}
              >
                <span className="al-swipe__tab-dash" aria-hidden />
                <span className="al-swipe__tab-n">{s.n}</span>
                {s.tab}
              </button>
            ))}
          </div>

          <div className="al-swipe__track">
            {slides.map((s, i) => (
              <article key={s.n} className={`al-panel${i % 2 ? " al-panel--flip" : ""}`} aria-label={s.tab}>
                <div className={`al-panel__media${s.contain ? " al-panel__media--contain" : ""}`}>
                  <div className="al-panel__img">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      unoptimized={s.unoptimized}
                      sizes="(max-width: 899px) 100vw, 48vw"
                      className={s.contain ? "object-contain" : "object-cover"}
                      style={{ objectPosition: s.position }}
                    />
                  </div>
                </div>
                <div className="al-panel__content">
                  <div className="al-panel__text">
                    <p className="al-panel__kicker">
                      <span>{s.n}</span>
                      {s.tab}
                    </p>
                    <h3 className="al-panel__title">
                      {s.title.split("\n").map((line, k) => (
                        <span key={k}>{line}</span>
                      ))}
                    </h3>
                    <p className="al-panel__body al-copy">{s.body}</p>
                    <p className="al-panel__fact">{s.fact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Formats */}
      <section className="al-formats" data-header-surface="light">
        <div className="al-formats__head">
          <p className="al-formats__eyebrow" data-fade>
            {a.formatsEyebrow}
          </p>
          <h2 className="al-formats__title" data-lines>
            {a.formatsTitle1}
            <br />
            {a.formatsTitle2}
          </h2>
        </div>
        <div className="al-formats__grid">
          {formats.map((f) => (
            <article key={f.name} className={`al-format al-format--${f.kind}`}>
              <div className="al-format__product" aria-hidden>
                {f.kind === "pallet" ? (
                  <Image
                    src="/aliplus-pallet-cutout.png"
                    alt=""
                    width={551}
                    height={800}
                    unoptimized
                    className="al-format__pallet"
                  />
                ) : f.kind === "big" ? (
                  <Image
                    src="/aliplus-bigbag-cutout.png"
                    alt=""
                    width={690}
                    height={800}
                    unoptimized
                    className="al-format__bigbag"
                  />
                ) : (
                  <Image
                    src="/aliplus-bag-cutout.png"
                    alt=""
                    width={583}
                    height={1046}
                    unoptimized
                    className="al-format__bag"
                  />
                )}
              </div>
              <div className="al-format__card">
                <span className="al-format__meta">{f.meta}</span>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5 · CTA */}
      <section className="home-cta al-cta" data-header-surface="dark">
        <div className="home-cta__copy">
          <h2 className="home-cta__title" data-lines>
            {a.ctaTitle}
          </h2>
          <p className="home-cta__lead" data-lines>
            {a.ctaLead}
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
            <Image src="/cattle-feeding-trough.jpg" alt="" fill className="object-cover object-[50%_55%]" sizes="280px" />
          </div>
          <div className="home-cta__shot home-cta__shot--c">
            <Image src="/farm-bull-feeding.jpg" alt="" fill className="object-cover object-[40%_45%]" sizes="180px" />
          </div>
        </div>
      </section>
    </div>
  );
}
