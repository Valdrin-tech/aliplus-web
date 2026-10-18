"use client";

import { useState } from "react";
import { useT } from "@/i18n/LocaleProvider";

type Props = { limit?: number };

export function FaqAccordion({ limit }: Props) {
  const faqItems = useT().faq.items;
  const items = limit ? faqItems.slice(0, limit) : faqItems;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-olive/25 bg-surface"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-medium text-text">{item.q}</span>
              <span
                className={`mt-1 shrink-0 font-semibold text-accent transition ${open ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            {open && (
              <div className="border-t border-olive/15 bg-surface px-6 pb-5 pt-2 text-sm leading-relaxed text-muted">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
