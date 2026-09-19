"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const REVEAL_SELECTOR = "main section, main > div, footer";

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
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );

    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    // Reset classes when navigating between pages
    nodes.forEach((el) => {
      el.classList.remove("is-inview");
      el.classList.add("reveal-section");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const vh = window.innerHeight;
    nodes.forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index * 0.03, 0.18)}s`);
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.88) {
        // Keep first viewport content visible without waiting
        requestAnimationFrame(() => el.classList.add("is-inview"));
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return children;
}
