"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { site } from "@/lib/content";
import { useT } from "@/i18n/LocaleProvider";
import { ContactCanvas } from "@/components/contact/ContactCanvas";

gsap.registerPlugin(SplitText);

// Contact scene: a generated olive backdrop (orbs and drifting grain that
// react to the pointer); the copy and the form rise in after the page settles.
export function ContactScene({ children }: { children: ReactNode }) {
  const t = useT();
  const c = t.contact;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-static");
      return;
    }

    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });

      // Backdrop fades up under everything.
      tl.fromTo(".contact-sheet__canvas", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.6, ease: "power2.out" }, 0);

      // Copy: kicker slides in, title letters rise, lines and details follow.
      tl.fromTo(".contact-sheet__kicker", { autoAlpha: 0, x: -14 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0.6);
      root.querySelectorAll(".contact-sheet__title-line").forEach((line, i) => {
        const s = new SplitText(line, { type: "words,chars", mask: "chars" });
        splits.push(s);
        tl.fromTo(
          s.chars,
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.035 },
          0.75 + i * 0.16,
        );
      });
      const lead = root.querySelector(".contact-sheet__lead");
      if (lead) {
        const s = new SplitText(lead, { type: "lines", mask: "lines" });
        splits.push(s);
        tl.fromTo(s.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }, 1.3);
      }
      tl.fromTo(
        ".contact-sheet__meta > *",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
        1.55,
      );
      tl.fromTo(".contact-sheet__rule", { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power3.inOut" }, 1.45);

      // Form panel glides up; its fields follow one after another.
      tl.fromTo(
        ".contact-sheet__panel",
        { autoAlpha: 0, y: 48 },
        { autoAlpha: 1, y: 0, duration: 1.2, ease: "power4.out" },
        0.9,
      );
      tl.fromTo(
        ".sheet-form > *",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.07, clearProps: "transform" },
        1.3,
      );

    }, root);

    return () => {
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <section ref={rootRef} className="contact-sheet" data-header-surface="dark">
      <ContactCanvas />
      <div className="contact-sheet__veil" aria-hidden />

      <div className="contact-sheet__inner">
        <div className="contact-sheet__copy">
          <p className="contact-sheet__kicker">
            <span className="contact-sheet__kicker-dot" aria-hidden />
            {c.kicker}
          </p>
          <h1 className="contact-sheet__title" aria-label={c.titleAria}>
            {c.titleLines.map((line) => (
              <span key={line} className="contact-sheet__title-line" aria-hidden>
                {line}
              </span>
            ))}
          </h1>
          <p className="contact-sheet__lead">
            {c.lead}
          </p>
          <div className="contact-sheet__rule" aria-hidden />
          <div className="contact-sheet__meta">
            <div className="contact-sheet__meta-item">
              <span className="contact-sheet__meta-label">{c.email}</span>
              <a className="contact-sheet__email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className="contact-sheet__meta-item">
              <span className="contact-sheet__meta-label">{c.phone}</span>
              <a className="contact-sheet__phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </div>
            <div className="contact-sheet__meta-item">
              <span className="contact-sheet__meta-label">{c.address}</span>
              <p className="contact-sheet__place">
                {site.address.line1}
                <br />
                {site.address.city}
                <br />
                {site.address.country}
              </p>
            </div>
          </div>
        </div>

        <div className="contact-sheet__panel">{children}</div>
      </div>
    </section>
  );
}
