"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type LenisLike = {
  on?: (event: string, handler: () => void) => () => void;
};

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  step?: number;
  slow?: boolean;
};

function isInView(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || 0;
  return rect.bottom > 24 && rect.top < vh - 24;
}

export function WordReveal({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  step,
  slow = false,
}: Props) {
  const pace = step ?? (slow ? 0.055 : 0.032);
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      setDone(true);
      return;
    }

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setActive(true);
    };

    if (isInView(node)) {
      requestAnimationFrame(reveal);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting || entry.intersectionRatio > 0)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: [0, 0.01, 0.12], rootMargin: "18% 0px 18% 0px" },
    );
    observer.observe(node);

    const onScroll = () => {
      if (isInView(node)) reveal();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    const offLenis = lenis?.on?.("scroll", onScroll);

    const fallback = window.setTimeout(() => {
      if (isInView(node)) reveal();
    }, 480);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      offLenis?.();
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const words = text.split(/\s+/).filter(Boolean).length;
    const ms = (delay + words * pace + (slow ? 1.7 : 0.95)) * 1000;
    const timer = window.setTimeout(() => setDone(true), ms);
    return () => window.clearTimeout(timer);
  }, [active, delay, pace, slow, text]);

  const tokens = text.split(/(\s+)/);
  const wordCount = tokens.filter((part) => part.trim()).length;
  const classes = [
    className,
    "word-reveal",
    slow && "word-reveal--slow",
    active && "is-in",
    done && "is-done",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} aria-label={text}>
      {tokens.map((token, index) => {
        if (!token.trim()) {
          if (token.includes("\n")) {
            return <br key={`br-${index}`} />;
          }
          return null;
        }
        const wordIndex = tokens.slice(0, index).filter((part) => part.trim()).length;
        return (
          <span key={`${token}-${index}`} className="word-reveal__mask">
            <span
              className={`word-reveal__word${active ? " is-in" : ""}`}
              style={{ transitionDelay: `${delay + wordIndex * pace}s` }}
            >
              {token}
              {wordIndex < wordCount - 1 ? " " : ""}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
