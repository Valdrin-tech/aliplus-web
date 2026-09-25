"use client";

import { useEffect, useState } from "react";
import { WordReveal } from "@/components/motion/WordReveal";

const proven = [
  {
    title: "Cattle",
    icon: "cow" as const,
    stats: [
      { value: "14", label: "Natural components" },
      { value: "22 kg", label: "Per ton of cereals" },
      { value: "14 days", label: "Maturation" },
    ],
  },
  {
    title: "Sheep & goats",
    icon: "sheep" as const,
    stats: [{ value: "1", label: "Formula across ruminants" }],
  },
  {
    title: "Shared outcomes",
    icon: "chat" as const,
    note: "Healthier rumens, stronger rations, and better margins from grain already grown on the farm.",
  },
];

function CowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.2 9.2c.9-1.8 2.4-2.7 4.8-2.7s3.9.9 4.8 2.7"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M4.8 12.2c0-1.3 1.3-2.2 2.7-2.2h9c1.4 0 2.7.9 2.7 2.2v5.1H4.8v-5.1Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M8 17.3v2.2M16 17.3v2.2" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function SheepIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.5" cy="12.2" r="3.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="8.2" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16.8 8.4c.8-.2 1.7.4 1.7 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 7.5c0-1.4 1.2-2.5 2.6-2.5h5.8c1.4 0 2.6 1.1 2.6 2.5v4.2c0 1.4-1.2 2.5-2.6 2.5H9.2L6 16.8V7.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 11.5h1.9c1.4 0 2.6 1.1 2.6 2.5v3.6L17.2 16h-3.1c-1.4 0-2.6-1.1-2.6-2.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProvenIcon({ name }: { name: (typeof proven)[number]["icon"] }) {
  if (name === "cow") return <CowIcon />;
  if (name === "sheep") return <SheepIcon />;
  return <ChatIcon />;
}

export function FieldProvenCards() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % proven.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="field-proven__stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="field-proven__viewport">
        {proven.map((card, i) => (
          <article
            key={card.title}
            className={`proven-card${i === index ? " is-active" : ""}`}
            aria-hidden={i === index ? undefined : true}
          >
            <div className="proven-card__label">
              <span className="proven-card__icon">
                <ProvenIcon name={card.icon} />
              </span>
              <WordReveal as="h3" text={card.title} step={0.04} />
            </div>
            {card.stats ? (
              <div
                className={`proven-card__stats ${card.stats.length === 1 ? "is-single" : ""}`}
              >
                {card.stats.map((stat) => (
                  <div key={stat.label} className="proven-stat">
                    <div className="proven-stat__tile">
                      <span>{stat.value}</span>
                    </div>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : (
              <WordReveal
                className="proven-card__note"
                text={card.note ?? ""}
                delay={0.1}
                step={0.024}
              />
            )}
          </article>
        ))}
      </div>

      <div className="field-proven__dots" role="tablist" aria-label="Field-proven cards">
        {proven.map((card, i) => (
          <button
            key={card.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`field-proven__dot${i === index ? " is-active" : ""}`}
            aria-label={card.title}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
