"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { useState } from "react";

// Media and links per card; the copy comes from the dictionary in the same order.
const media = [
  { tone: "olive", href: "/usage-guide", image: "/cattle-feeding-trough.jpg" },
  { tone: "moss", href: "/usage-guide", image: "/cattle-barn-resting.jpg" },
  { tone: "pine", href: "/contact", image: "/farm-bull-feeding.jpg" },
] as const;

// Deterministic rough-paper outline (objectBoundingBox units) for the photo.
function roughPath() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647 - 0.5;
  };
  const corners: [number, number][] = [
    [0.012, 0.03],
    [0.975, 0.0],
    [1.0, 0.87],
    [0.06, 1.0],
  ];
  const r = 0.035;
  const steps = 46;
  const parts: string[] = [];

  for (let c = 0; c < 4; c++) {
    const [ax, ay] = corners[c];
    const [bx, by] = corners[(c + 1) % 4];
    const len = Math.hypot(bx - ax, by - ay);
    const ux = (bx - ax) / len;
    const uy = (by - ay) / len;
    const start: [number, number] = [ax + ux * r, ay + uy * r];
    const end: [number, number] = [bx - ux * r, by - uy * r];

    if (c === 0) parts.push(`M${start[0].toFixed(4)},${start[1].toFixed(4)}`);
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const jitter = rand() * 0.007;
      const x = start[0] + (end[0] - start[0]) * t - uy * jitter;
      const y = start[1] + (end[1] - start[1]) * t + ux * jitter;
      parts.push(`L${x.toFixed(4)},${y.toFixed(4)}`);
    }
    parts.push(`L${end[0].toFixed(4)},${end[1].toFixed(4)}`);

    const [nx, ny] = corners[(c + 2) % 4];
    const nlen = Math.hypot(nx - bx, ny - by);
    const after: [number, number] = [bx + ((nx - bx) / nlen) * r, by + ((ny - by) / nlen) * r];
    parts.push(`Q${bx},${by} ${after[0].toFixed(4)},${after[1].toFixed(4)}`);
  }

  return `${parts.join(" ")} Z`;
}

const ROUGH_PATH = roughPath();

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 1.5v17M1.5 10h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M1.5 10h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FieldProvenCards() {
  const t = useT();
  const items = t.home.fieldProven.items.map((item, i) => ({ ...item, ...media[i] }));
  const [open, setOpen] = useState(0);

  return (
    <div className="fp-acc">
      <svg width="0" height="0" className="fp-acc__defs" aria-hidden>
        <defs>
          <clipPath id="fp-acc-rough" clipPathUnits="objectBoundingBox">
            <path d={ROUGH_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div className="fp-acc__list">
        {items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `fp-acc-panel-${i}`;
          return (
            <div
              key={item.title}
              className={`fp-acc__card fp-acc__card--${item.tone}${isOpen ? " is-open" : ""}`}
              style={{ zIndex: i + 1 }}
            >
              <h3 className="fp-acc__heading">
                <button
                  type="button"
                  className="fp-acc__toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(i)}
                >
                  <span className="fp-acc__title">{item.title}</span>
                  <span className="fp-acc__icon">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
                </button>
              </h3>

              <div id={panelId} className="fp-acc__panel" role="region" aria-hidden={!isOpen}>
                <div className="fp-acc__panel-inner">
                  <p className="fp-acc__body">{item.body}</p>
                  <ul className="fp-acc__facts">
                    {item.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                  <Link href={item.href} className="fp-acc__cta" tabIndex={isOpen ? undefined : -1}>
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fp-acc__media">
        {items.map((item, i) => (
          <div
            key={item.image}
            className={`fp-acc__photo${open === i ? " is-active" : ""}`}
            aria-hidden={open === i ? undefined : true}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 899px) 100vw, 46vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
