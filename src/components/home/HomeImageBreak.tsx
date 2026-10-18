"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useT } from "@/i18n/LocaleProvider";

export function HomeImageBreak() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    let active = false;
    let current = 0;

    const update = () => {
      if (!active) return;

      const rect = section.getBoundingClientRect();
      const range = window.innerHeight + rect.height;
      const target =
        range > 0
          ? Math.min(1, Math.max(0, (window.innerHeight - rect.top) / range))
          : 0;

      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.001) current = target;

      media.style.transform = `translate3d(0, ${(-20 * current).toFixed(3)}vh, 0)`;
      frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(update);
        }
      },
      { threshold: 0 },
    );

    io.observe(section);
    return () => {
      active = false;
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-image-break"
      aria-label={t.home.imageBreak.aria}
    >
      <div ref={mediaRef} className="home-image-break__media">
        <Image
          src="/cattle-feeding-trough.jpg"
          alt={t.home.imageBreak.alt}
          fill
          sizes="100vw"
          className="home-image-break__img"
        />
      </div>
    </section>
  );
}
