"use client";

import { WordReveal } from "@/components/motion/WordReveal";
import { useT } from "@/i18n/LocaleProvider";

const icons = ["spark", "flow", "up"] as const;

function PillarIcon({ name }: { name: (typeof icons)[number] }) {
  if (name === "spark") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M12 3.2v17.6M4.8 12h14.4M6.6 6.6l10.8 10.8M17.4 6.6 6.6 17.4" />
      </svg>
    );
  }
  if (name === "flow") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 16V9.5A4.5 4.5 0 0 1 9.5 5H20" />
        <path d="m16.5 2 4 3-4 3" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20V5" />
      <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
    </svg>
  );
}

export function ImpactCards() {
  const t = useT();
  const pillars = t.home.difference.pillars.map((p, i) => ({ ...p, icon: icons[i] ?? "up" }));
  return (
    <section className="diff-section">
      <div className="diff-section__inner">
        <header className="diff-section__intro">
          <WordReveal
            as="h2"
            className="diff-section__title"
            text={t.home.difference.title}
            step={0.038}
          />
          <WordReveal
            className="diff-section__lead"
            text={t.home.difference.lead}
            delay={0.12}
            step={0.024}
          />
        </header>

        <div className="diff-section__grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="diff-pillar">
              <span className="diff-pillar__icon">
                <PillarIcon name={pillar.icon} />
              </span>
              <WordReveal
                as="h3"
                className="diff-pillar__title"
                text={pillar.title}
                delay={0.08}
                step={0.04}
              />
              <WordReveal
                className="diff-pillar__body"
                text={pillar.body}
                delay={0.16}
                step={0.022}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
