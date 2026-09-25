"use client";

import { useEffect, useRef } from "react";
import { Footer } from "@/components/layout/Footer";

export function FooterHero({
  children,
}: {
  children?: React.ReactNode;
}) {
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pinRef.current;
    if (!el) return;

    const apply = () => {
      document.documentElement.style.setProperty(
        "--footer-height",
        `${el.offsetHeight}px`,
      );
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="footer-hero">
      {children}
      <div className="footer-hero__pin" ref={pinRef}>
        <Footer />
      </div>
    </div>
  );
}
