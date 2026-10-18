"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { stripLocale } from "@/i18n/config";
import { useT } from "@/i18n/LocaleProvider";

gsap.registerPlugin(SplitText);

// Route transition (after lannino.com): two curved panels sweep up from the
// bottom — lime first, then deep olive carrying the destination's name — hold
// while the next page renders, then sweep on upward to reveal it.

function nameFor(path: string, names: Record<string, string>) {
  const clean = stripLocale(path).replace(/\/+$/, "") || "/";
  if (names[clean]) return names[clean];
  const last = clean.split("/").pop() ?? "";
  return last.replace(/-/g, " ") || "Aliplus";
}

const CAP = "M0 12 C 25 0 75 0 100 12 Z";

export function PageTurnTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useT();
  // Latest route labels for the mount-only click handler below.
  const names = useRef(t.routes);
  useEffect(() => {
    names.current = t.routes;
  }, [t.routes]);
  const rootRef = useRef<HTMLDivElement>(null);
  const covering = useRef(false);
  const reduced = useRef(false);
  const fallback = useRef<number | null>(null);
  const coveredAt = useRef(0);
  const HOLD_MS = 520;
  const [label, setLabel] = useState("");

  // Play the cover; resolves when the screen is fully hidden.
  const cover = (name: string) =>
    new Promise<void>((resolve) => {
      const root = rootRef.current;
      if (!root) return resolve();
      setLabel(name);
      root.classList.add("is-active");
      const lime = root.querySelector(".pt__panel--lime");
      const ink = root.querySelector(".pt__panel--ink");
      const tl = gsap.timeline({ onComplete: resolve });
      tl.fromTo(lime, { yPercent: 118 }, { yPercent: 0, duration: 0.85, ease: "power3.inOut" }, 0);
      tl.fromTo(ink, { yPercent: 118 }, { yPercent: 0, duration: 0.85, ease: "power3.inOut" }, 0.13);
      // Label rises as the ink panel lands.
      requestAnimationFrame(() => {
        const title = root.querySelector(".pt__name");
        const kicker = root.querySelector(".pt__brand");
        if (!title) return;
        const split = new SplitText(title, { type: "chars", mask: "chars" });
        gsap.fromTo(
          kicker,
          { autoAlpha: 0, y: 14, scale: 0.92 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.6)", delay: 0.4 },
        );
        gsap.fromTo(
          split.chars,
          { yPercent: 110, rotate: 4 },
          { yPercent: 0, rotate: 0, duration: 0.9, ease: "power4.out", stagger: 0.035, delay: 0.5 },
        );
        gsap.fromTo(".pt__seed", { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.inOut", delay: 0.6 });
      });
    });

  // Sweep both panels on upward and release the page.
  const reveal = () => {
    const root = rootRef.current;
    if (!root) return;
    const lime = root.querySelector(".pt__panel--lime");
    const ink = root.querySelector(".pt__panel--ink");
    const tl = gsap.timeline({
      onComplete: () => {
        root.classList.remove("is-active");
        gsap.set([lime, ink], { yPercent: 118, y: 0 });
        setLabel("");
      },
    });
    tl.to(".pt__label", { autoAlpha: 0, y: -14, duration: 0.3, ease: "power2.in" }, 0);
    tl.to(ink, { yPercent: -118, duration: 0.9, ease: "power3.inOut" }, 0.08);
    tl.to(lime, { yPercent: -118, duration: 0.9, ease: "power3.inOut" }, 0.2);
  };

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    // Park both panels below the viewport (pure yPercent, no px offset).
    gsap.set(".pt__panel", { yPercent: 118, y: 0 });

    // Intercept same-site link clicks so the cover plays before the route changes.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // hash or same page
      if (/^(mailto|tel):/.test(a.getAttribute("href") ?? "")) return;
      if (covering.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      covering.current = true;
      document.documentElement.classList.add("pt-covered");
      const href = url.pathname + url.search;
      void cover(nameFor(url.pathname, names.current)).then(() => {
        coveredAt.current = performance.now();
        router.push(href);
        // If the route never resolves, don't trap the visitor behind the cover.
        fallback.current = window.setTimeout(() => {
          if (covering.current) {
            covering.current = false;
            document.documentElement.classList.remove("pt-covered");
            reveal();
          }
        }, 6000);
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // New route rendered: reveal. Back/forward (no cover played) gets a quick
  // covered→reveal so the change still reads as a scene.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduced.current) return;
    const root = rootRef.current;
    if (!root) return;
    if (fallback.current) {
      window.clearTimeout(fallback.current);
      fallback.current = null;
    }
    const go = () => {
      covering.current = false;
      document.documentElement.classList.remove("pt-covered");
      reveal();
    };
    if (covering.current) {
      // Let the new page paint under the cover, and keep the name up for a beat.
      const wait = Math.max(160, HOLD_MS - (performance.now() - coveredAt.current));
      requestAnimationFrame(() => requestAnimationFrame(() => window.setTimeout(go, wait)));
    } else {
      setLabel(nameFor(pathname, names.current));
      root.classList.add("is-active");
      gsap.set([root.querySelector(".pt__panel--lime"), root.querySelector(".pt__panel--ink")], { yPercent: 0 });
      window.setTimeout(go, 220);
    }
  }, [pathname]);

  return (
    <div ref={rootRef} className="pt" aria-hidden="true">
      <div className="pt__panel pt__panel--lime">
        <svg className="pt__cap pt__cap--top" viewBox="0 0 100 12" preserveAspectRatio="none">
          <path d={CAP} />
        </svg>
        <svg className="pt__cap pt__cap--bottom" viewBox="0 0 100 12" preserveAspectRatio="none">
          <path d={CAP} />
        </svg>
      </div>
      <div className="pt__panel pt__panel--ink">
        <svg className="pt__cap pt__cap--top" viewBox="0 0 100 12" preserveAspectRatio="none">
          <path d={CAP} />
        </svg>
        <svg className="pt__cap pt__cap--bottom" viewBox="0 0 100 12" preserveAspectRatio="none">
          <path d={CAP} />
        </svg>
        {label ? (
          <div className="pt__label" key={label}>
            <div className="pt__brand">
              <Image
                src="/logo-aliplus.png"
                alt=""
                width={962}
                height={582}
                priority
                className="pt__logo"
              />
              <span className="pt__brand-kosova">Kosova</span>
            </div>
            <p className="pt__name">{label}</p>
            <span className="pt__seed" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
