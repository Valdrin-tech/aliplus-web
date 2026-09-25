"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const REVEAL_SELECTOR = "main section, main .hero-scene, main .page-hero, main > div";

const SCENE_SELECTOR = [
  "main h1",
  "main h2",
  "main h3",
  "main h4",
  "main h5",
  "main h6",
  "main p",
  "main li",
  "main .ghost-fill-btn",
  "main .ghost-line-btn",
  "main .cine-hero__cta",
  "main .hero-pill",
  "main .pfl-btn",
  "main .cine-hero__rule",
  "main .approach-hero__rule",
  "main .how-step__bar",
  "main .approach-chapter__circle",
  "main .what-is__photo",
  "main .what-is__orbit",
  "main .approach-chapter__photo",
  "main .integrate__media",
  "main .format-card__photo",
  "main .home-cta__shot",
  "main .diff-pillar",
  "main .how-step",
  "main .format-card",
  "main .proven-card",
  "main .guide-panel",
  "main .usage-card",
  "main .usage-pack",
  "main .usage-step",
  "main .usage-practice__item",
  "main .usage-how",
  "main .company-figure",
  "main .company-step",
  "main .company-invite",
  "main .company-break",
  "main .usage-panel",
  "main .usage-concept__col",
  "main .usage-use",
  "main .usage-faq__item",
  "main .vintage-photo",
  "main figure",
  "main .contact-panel",
  "main .product-stamp",
].join(",");

const SKIP_CLOSEST = "header, footer, .site-footer, nav, .footer-hero__pin";

const OWN_MOTION =
  ".approach-chapter__circle, .ghost-fill-btn, .ghost-line-btn, .cine-hero__cta, .hero-pill, .pfl-btn, .cine-hero__rule, .approach-hero__rule, .how-step__bar, .home-cta__shot, .word-reveal";

function kindOf(el: HTMLElement) {
  if (el.classList.contains("word-reveal")) return "soft";
  if (
    el.matches(
      ".approach-chapter__circle, .what-is__orbit, .what-is__photo, .how-step__dot",
    )
  ) {
    return "circle";
  }
  if (el.matches(".cine-hero__rule, .approach-hero__rule, .how-step__bar")) {
    return "line";
  }
  if (
    el.matches(
      ".ghost-fill-btn, .ghost-line-btn, .cine-hero__cta, .hero-pill, .pfl-btn",
    )
  ) {
    return "action";
  }
  if (
    el.matches(
      ".approach-chapter__photo, .integrate__media, .format-card__photo, .home-cta__shot, figure, .vintage-photo",
    )
  ) {
    return "media";
  }
  if (el.matches("h1, h2, h3, h4, h5, h6")) return "heading";
  if (el.matches("p, li")) return "copy";
  return "block";
}

function isVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 0;
  return rect.bottom > 32 && rect.top < vh - 24;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.35,
      autoRaf: false,
    });

    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      if ((window as Window & { __lenis?: Lenis }).__lenis === lenis) {
        delete (window as Window & { __lenis?: Lenis }).__lenis;
      }
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    ).filter((el) => !el.closest(SKIP_CLOSEST));

    const rawItems = Array.from(
      document.querySelectorAll<HTMLElement>(SCENE_SELECTOR),
    ).filter((el) => !el.closest(SKIP_CLOSEST));

    const itemSet = new Set<HTMLElement>(rawItems);
    const items = rawItems.filter((el) => {
      if (el.matches(OWN_MOTION)) return true;
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        if (itemSet.has(parent) && !parent.matches(OWN_MOTION)) return false;
        parent = parent.parentElement;
      }
      return true;
    });

    if (reduced) {
      sections.forEach((el) => el.classList.add("is-inview"));
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    sections.forEach((el) => {
      el.classList.add("reveal-section");
      el.classList.remove("is-inview");
    });

    const groups = new Map<HTMLElement | null, number>();

    items.forEach((el) => {
      const parent = el.parentElement;
      const index = groups.get(parent) ?? 0;
      groups.set(parent, index + 1);
      const extra = el.matches(".approach-chapter__circle")
        ? index * 0.14
        : el.matches(".home-cta__shot")
          ? index * 0.1
          : Math.min(index * 0.07, 0.42);
      const kind = kindOf(el);
      el.classList.add("scene-item", `scene-item--${kind}`);
      el.classList.remove("is-in");
      el.style.setProperty("--scene-delay", `${extra}s`);
    });

    const revealSection = (el: HTMLElement) => {
      el.classList.add("is-inview");
      sectionObserver?.unobserve(el);
    };

    const revealItem = (el: HTMLElement) => {
      el.classList.add("is-in");
      itemObserver?.unobserve(el);
      pending.delete(el);
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            revealSection(entry.target as HTMLElement);
          }
        });
      },
      { threshold: [0, 0.01, 0.08], rootMargin: "14% 0px 10% 0px" },
    );

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            revealItem(entry.target as HTMLElement);
          }
        });
      },
      { threshold: [0, 0.08, 0.2], rootMargin: "10% 0px 8% 0px" },
    );

    const pending = new Set<HTMLElement>();

    sections.forEach((el) => {
      const isHero = el.classList.contains("hero-scene");
      if (isHero || isVisible(el)) {
        const show = () => revealSection(el);
        if (isHero) {
          requestAnimationFrame(() => requestAnimationFrame(show));
        } else {
          requestAnimationFrame(show);
        }
      } else {
        sectionObserver.observe(el);
      }
    });

    items.forEach((el) => {
      if (isVisible(el)) {
        const show = () => revealItem(el);
        if (el.closest(".hero-scene")) {
          requestAnimationFrame(() => requestAnimationFrame(show));
        } else {
          requestAnimationFrame(show);
        }
      } else {
        pending.add(el);
        itemObserver.observe(el);
      }
    });

    const flushVisible = () => {
      pending.forEach((el) => {
        if (isVisible(el)) revealItem(el);
      });
    };

    window.addEventListener("scroll", flushVisible, { passive: true });
    const offLenis = lenis?.on("scroll", flushVisible);

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
      window.removeEventListener("scroll", flushVisible);
      offLenis?.();
      items.forEach((el) => {
        el.classList.remove(
          "scene-item",
          "scene-item--soft",
          "scene-item--heading",
          "scene-item--copy",
          "scene-item--action",
          "scene-item--line",
          "scene-item--circle",
          "scene-item--media",
          "scene-item--block",
          "is-in",
        );
        el.style.removeProperty("--scene-delay");
      });
    };
  }, [pathname]);

  return children;
}
