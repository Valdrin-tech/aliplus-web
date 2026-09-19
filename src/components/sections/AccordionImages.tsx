"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type AccordionItem = {
  title: string;
  body: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  tone: "green" | "purple" | "dark";
};

type Props = {
  eyebrow?: string;
  title?: string;
  items: AccordionItem[];
};

const tones: Record<AccordionItem["tone"], string> = {
  green: "bg-forest",
  purple: "bg-accent",
  dark: "bg-pine",
};

function PlusIcon() {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" aria-hidden>
      <path
        d="M11.625 1.375V8.875H19.125C19.7344 8.875 20.25 9.39062 20.25 10C20.25 10.6562 19.7344 11.125 19.125 11.125H11.625V18.625C11.625 19.2812 11.1094 19.75 10.5 19.75C9.84375 19.75 9.375 19.2812 9.375 18.625V11.125H1.875C1.21875 11.125 0.75 10.6562 0.75 10C0.75 9.39062 1.21875 8.875 1.875 8.875H9.375V1.375C9.375 0.765625 9.84375 0.25 10.5 0.25C11.1094 0.25 11.625 0.765625 11.625 1.375Z"
        fill="white"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" aria-hidden>
      <path
        d="M20.25 2C20.25 2.65625 19.7344 3.125 19.125 3.125H1.875C1.21875 3.125 0.75 2.65625 0.75 2C0.75 1.39062 1.21875 0.875 1.875 0.875H19.125C19.7344 0.875 20.25 1.39062 20.25 2Z"
        fill="white"
      />
    </svg>
  );
}

function AccordionPhoto({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <figure className="accordion-photo">
      <div className="accordion-photo__frame">
        <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
      </div>
    </figure>
  );
}

export function AccordionImages({ eyebrow, title, items }: Props) {
  const [open, setOpen] = useState(0);

  return (
    <section className="accordion-images relative container-pfl my-16 lg:my-24">
      {(eyebrow || title) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && <p className="pfl-subheading">{eyebrow}</p>}
          {title && <h2 className="pfl-h2 text-dark">{title}</h2>}
        </div>
      )}

      <div className="flex items-stretch gap-6 sm:mb-0 md:gap-8">
        <div className="w-full md:w-1/2">
          {items.map((item, i) => {
            const isOpen = open === i;
            const isLast = i === items.length - 1;
            return (
              <div
                key={item.title}
                className={`accordion-images__card ${tones[item.tone]} ${isOpen ? "is-open" : ""}`}
                style={{ zIndex: i + 1 }}
              >
                <button
                  type="button"
                  className={`accordion-images__toggle ${isOpen ? "is-open" : ""} ${isLast && !isOpen ? "is-last" : ""}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(i)}
                >
                  <span className="accordion-images__title">{item.title}</span>
                  <span className="accordion-images__icon">
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                <div
                  className={`accordion-images__body ${isOpen ? "is-open" : ""}`}
                >
                  <p className="text-[1.05rem] leading-relaxed text-white">
                    {item.body}
                  </p>
                  <div className="my-8 last:mb-0">
                    <Link href={item.href} className="pfl-btn pfl-btn--inverted">
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative hidden min-h-full self-stretch md:block md:w-1/2">
          {items.map((item, i) => (
            <div
              key={item.image}
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                zIndex: open === i ? 4 : 1,
                opacity: open === i ? 1 : 0,
              }}
            >
              <AccordionPhoto
                src={item.image}
                alt={item.imageAlt}
                sizes="(max-width: 1024px) 50vw, 560px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full md:hidden">
        <AccordionPhoto
          src={items[open].image}
          alt={items[open].imageAlt}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
