"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/layout/BrandLogos";

const TURN_MS = 1200;

type Phase = "idle" | "active";

export function PageTurnTransition() {
  const pathname = usePathname();
  const firstRender = useRef(true);
  const timerRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [turnKey, setTurnKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (reducedMotion) return;

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setTurnKey((k) => k + 1);
    setPhase("active");

    timerRef.current = window.setTimeout(() => {
      setPhase("idle");
      timerRef.current = null;
    }, TURN_MS);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [pathname, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className={`page-fade ${phase === "active" ? "is-active" : "is-idle"}`}
      role="presentation"
      aria-hidden="true"
    >
      {phase === "active" && (
        <div key={turnKey} className="page-fade__stage">
          <div className="page-fade__veil" />
          <div className="page-fade__rule" />
          <div className="page-fade__brand">
            <BrandMark size="lg" />
          </div>
        </div>
      )}
    </div>
  );
}
