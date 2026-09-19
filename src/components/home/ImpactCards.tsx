"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TornEdge } from "@/components/ui/TornEdge";

type Card = {
  title: string;
  body: string;
  cta: string;
  href: string;
  bg: string;
  graphic: string;
};

const cards: Card[] = [
  {
    title: "Discover Aliplus",
    body: "Fourteen natural components — urea, plant extracts, oligoelements and clay — in one bio-dynamiser. Mixed at 22 kg per ton of cereals, Aliplus raises protein and energy values, supports rumen flora with a prebiotic/probiotic effect, and lets you feed energetic rations without acidosis risk. Healthier animals, stronger rations and better margins from grain you already grow.",
    cta: "See the product",
    href: "/products/aliplus",
    bg: "bg-accent",
    graphic: "/imgs/card-graphic-wheat.svg",
  },
  {
    title: "Calculate your ration",
    body: "Enter your herd size, production stage and available cereals. Our calculator gives you the recommended Aliplus rate and a daily ration you can start with today. Adjust step by step as animals adapt, then lock in a stable mix for the season.",
    cta: "Open the calculator",
    href: "/calculator",
    bg: "bg-pine",
    graphic: "/imgs/card-graphic-leaf.svg",
  },
  {
    title: "Talk to an advisor",
    body: "Every farm is different. Our advisors in Kosova help you plan the transition, monitor the first weeks and fine-tune the ration as your animals adapt. From first mix to full Aliplusage, you get practical support when you need it.",
    cta: "Contact us",
    href: "/contact",
    bg: "bg-moss",
    graphic: "/imgs/card-graphic-drops.svg",
  },
];

function ArrowIcon({ dir }: { dir: "up" | "down" | "right" }) {
  const rotate =
    dir === "up" ? "-rotate-90" : dir === "down" ? "rotate-90" : "";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`shrink-0 ${rotate}`}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardBody({ body }: { body: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(true);

  const updateEdges = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const canScroll = el.scrollHeight > el.clientHeight + 2;
    setAtTop(!canScroll || el.scrollTop <= 2);
    setAtBottom(
      !canScroll || el.scrollTop + el.clientHeight >= el.scrollHeight - 2,
    );
  };

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [body]);

  const scrollByLine = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ top: dir * 56, behavior: "smooth" });
  };

  return (
    <div className="impact-card-body">
      <div
        ref={scrollerRef}
        onScroll={updateEdges}
        className="impact-card-body__scroller"
      >
        <p className="text-white">{body}</p>
      </div>

      <div className="impact-card-body__arrows">
        <button
          type="button"
          className="impact-read-arrow"
          aria-label="Scroll text up"
          disabled={atTop}
          onClick={() => scrollByLine(-1)}
        >
          <ArrowIcon dir="up" />
        </button>
        <button
          type="button"
          className="impact-read-arrow"
          aria-label="Scroll text down"
          disabled={atBottom}
          onClick={() => scrollByLine(1)}
        >
          <ArrowIcon dir="down" />
        </button>
      </div>
    </div>
  );
}

export function ImpactCards() {
  return (
    <section className="impact-section bg-forest bg-[url(/imgs/bg-graphic-three-column.svg)] bg-left bg-no-repeat">
      <TornEdge flip />

      <div className="container-pfl pb-16 lg:pb-24">
        <h2 className="pfl-h2 mb-8 text-center text-white lg:mb-16">
          Other ways to get started
        </h2>

        <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-stretch">
          {cards.map((card) => (
            <div
              key={card.href}
              className={`group flex h-80 w-full max-w-96 flex-col justify-between rounded-[20px] p-8 transition-[width] duration-[750ms] lg:w-1/3 lg:hover:w-[45%] lg:hover:max-w-none ${card.bg}`}
              style={{
                backgroundImage: `url(${card.graphic})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="flex min-h-0 flex-1 flex-col text-center">
                <h3 className="pfl-h3 impact-card-title shrink-0 text-white">
                  {card.title}
                </h3>
                <CardBody body={card.body} />
              </div>

              <Link href={card.href} className="impact-card-cta mt-4 self-end">
                <span className="impact-card-cta__label">{card.cta}</span>
                <ArrowIcon dir="right" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <TornEdge />
    </section>
  );
}
