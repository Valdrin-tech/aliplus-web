"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    kicker: "01 · Drithërat",
    title: "Local grains",
    body: "Wheat, barley, maize and the other cereals already in the barn become the base of the ration — not a leftover beside bought-in feed.",
    image: "/home-barn.jpg",
    alt: "Farm cereals and cattle in the barn",
    kind: "photo" as const,
    caption: "Cereals already in the barn",
    note: "The base of the ration",
  },
  {
    kicker: "02 · Aliplus",
    title: "The treatment",
    body: "The product is the rate: 22 kg of Aliplus per ton of farm cereals. Fourteen natural components, designed with biologists and produced in France.",
    image: "/hero-aliplus-bag.png",
    alt: "Aliplus bag ready for the mix",
    kind: "product" as const,
    caption: "22 kg / ton of cereals",
    note: "Fourteen natural components",
  },
  {
    kicker: "03 · Ushqyerja",
    title: "Mixing",
    body: "Mix, store and feed with the equipment you already have. Adjust water to about 24% moisture. No new feeding system. No new building.",
    image: "/imgs/how-mix-cow.png",
    alt: "Mixing farm cereals with Aliplus",
    kind: "draw" as const,
    caption: "Your mixer. 24% moisture.",
    note: "No new building",
  },
  {
    kicker: "04 · Rumeni",
    title: "Maturation",
    body: "Leave the blend for 14 days. The wait is part of the work. Protein and energy values rise before the mix is fed.",
    image: "/imgs/how-mature-cow.png",
    alt: "The mix left to mature",
    kind: "draw" as const,
    caption: "14 days before feeding",
    note: "The wait is the work",
  },
  {
    kicker: "05 · Fermeri",
    title: "Feeding",
    body: "A 10-day transition from the previous ration is recommended. Then feed cattle, sheep and goats with the mixer you already use.",
    image: "/imgs/how-feed-cow.png",
    alt: "Feeding the matured Aliplus mix",
    kind: "draw" as const,
    caption: "Cattle, sheep and goats",
    note: "10-day transition",
  },
] as const;

const figures = [
  { n: "14", label: "Natural components", hint: "Designed with biologists" },
  { n: "22 kg", label: "Per ton of cereals", hint: "The product is the rate" },
  { n: "14 days", label: "Before feeding", hint: "The wait is part of the work" },
] as const;

const cycleCards = [
  {
    n: "1",
    title: "Grain",
    kicker: "01 · Drithërat",
    heading: "The cereals already in the barn.",
    body: "Wheat, barley, maize, triticale, oats, rye, spelt and peas — ground or crushed — become the base of the ration. One 22 kg bag treats one ton.",
    points: ["Wheat, barley, maize and other farm grains", "Ground or crushed", "One 22 kg bag treats one ton"],
  },
  {
    n: "2",
    title: "Mix",
    kicker: "02 · Aliplus",
    heading: "Mix at 22 kg per ton.",
    body: "Grind or crush the grain, then mix 22 kg of Aliplus per ton. Adjust water to about 24% moisture. Mix with the equipment you already have — no new feeding system.",
    points: ["22 kg Aliplus per ton", "About 24% moisture", "Your mixer — no new system"],
  },
  {
    n: "3",
    title: "Mature",
    kicker: "03 · Rumeni",
    heading: "Leave the mix for 14 days.",
    body: "Natural processes in the grain need that time so protein and energy values can rise. Store indoors, without plastic cover, for months or up to a year.",
    points: ["14 days before feeding", "Protein and energy rise", "Indoors, without plastic cover"],
  },
  {
    n: "4",
    title: "Feed",
    kicker: "04 · Fermeri",
    heading: "Then feed the herd you have.",
    body: "Cattle, sheep and goats — from calves at 30 days. A 10-day transition from the previous ration is recommended. Fibre — straw or hay — stays essential beside the treated grain.",
    points: ["Cattle, sheep and goats", "10-day transition recommended", "Fibre — straw or hay — stays essential"],
  },
] as const;

const cycleRing = ["Farm", "Mixer", "Rumen", "Herd"] as const;

type LenisLike = {
  on?: (event: string, handler: () => void) => unknown;
  off?: (event: string, handler: () => void) => unknown;
};

function canHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function CompanyCycle() {
  const [selected, setSelected] = useState<number | null>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? selected;
  const stage = active === null ? null : cycleCards[active];
  const progress = active === null ? 0 : (active + 1) / cycleCards.length;
  const nextTitle =
    selected === null
      ? cycleCards[0].title
      : cycleCards[(selected + 1) % cycleCards.length].title;
  const loadOffset = 100 - progress * 100;
  const headAngle = progress * 360;

  const preview = (index: number | null) => {
    if (canHover()) setHovered(index);
  };

  const choose = (index: number) => {
    setHovered(null);
    setSelected(index);
  };

  const nextStage = () => {
    setHovered(null);
    setSelected((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % cycleCards.length;
    });
  };

  return (
    <section
      className="cine-concept"
      data-cycle={active === null ? "all" : String(active)}
      data-progress={active === null ? "0" : String(active + 1)}
      style={{ ["--cycle-load" as string]: String(loadOffset) } as CSSProperties}
    >
      <div className="cine-concept__bar">
        <p className="cine-kicker cine-kicker--dark">02 · The farm</p>
        <p className="cine-cycle-copy__hint">
          {selected === null
            ? "Click Aliplus to walk the cycle"
            : `${selected + 1} / ${cycleCards.length} · next ${nextTitle}`}
        </p>
      </div>
      <div className="cine-wheel" onPointerLeave={() => preview(null)}>
        <div className="cine-wheel__orbit" aria-hidden>
          <svg className="cine-wheel__progress" viewBox="0 0 100 100">
            <circle className="cine-wheel__track" cx="50" cy="50" r="42" pathLength="100" />
            <circle
              className="cine-wheel__load"
              cx="50"
              cy="50"
              r="42"
              pathLength="100"
            />
            <polygon
              className={`cine-wheel__head${progress > 0 ? " is-on" : ""}`}
              points="50,5 53.6,11.2 46.4,11.2"
              style={{ transform: `rotate(${headAngle}deg)` }}
            />
          </svg>
          {cycleRing.map((label, i) => (
            <span
              key={label}
              className={`cine-wheel__label${active === i ? " is-on" : ""}`}
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-12.1em) rotate(${-i * 90}deg)`,
              }}
            >
              {label}
            </span>
          ))}
        </div>
        <button
          type="button"
          className={`cine-wheel__core${selected === null ? " is-on" : ""}`}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            nextStage();
          }}
          aria-label={`Advance the Aliplus cycle to ${nextTitle}`}
        >
          <strong>Aliplus</strong>
          <span>{stage ? stage.title : "The farm"}</span>
          <em>{stage ? `${Number(active) + 1} / ${cycleCards.length}` : "Start"}</em>
        </button>
        {cycleCards.map((card, i) => (
          <article
            key={card.title}
            role="button"
            tabIndex={0}
            className={`cine-wheel__card cine-wheel__card--${i + 1}${active === i ? " is-on" : ""}`}
            aria-pressed={selected === i}
            onPointerEnter={() => preview(i)}
            onClick={() => choose(i)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                choose(i);
              }
            }}
          >
            <b>{card.n}</b>
            <p className="cine-wheel__card-kicker">{card.kicker}</p>
            <h3>{card.title}</h3>
            <p className="cine-wheel__card-heading">{card.heading}</p>
            <p className="cine-wheel__card-body">{card.body}</p>
            <ul>
              {card.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Link href="/contact" className="ghost-fill-btn cine-concept__cta">
        Talk to our team
      </Link>
    </section>
  );
}

function isMobile() {
  return window.matchMedia("(max-width: 991px)").matches;
}

function markStep(how: Element, index: number) {
  how.setAttribute("data-step", String(index));
  how.querySelectorAll(".cine-spine__dot").forEach((el, i) => {
    el.classList.toggle("is-on", i === index);
  });
  how.querySelectorAll(".cine-how__list li").forEach((el, i) => {
    el.classList.toggle("is-on", i === index);
  });
}

export function CompanyScience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    const onLenisScroll = () => ScrollTrigger.update();
    lenis?.on?.("scroll", onLenisScroll);

    const mobile = isMobile();
    const resultY = mobile ? 12 : 36;
    let syncHowStep: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const heroImg = root.querySelector(".cine-hero__media");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.08, y: 30 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".cine-hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
      const how = root.querySelector(".cine-how");
      if (how && !mobile) {
        markStep(how, 0);
        syncHowStep = () => {
          const spacer = (how.parentElement?.classList.contains("pin-spacer")
            ? how.parentElement
            : how) as HTMLElement;
          const total = Math.max(1, spacer.offsetHeight - window.innerHeight);
          const passed = Math.min(total, Math.max(0, -spacer.getBoundingClientRect().top));
          markStep(
            how,
            Math.min(steps.length - 1, Math.round((passed / total) * (steps.length - 1))),
          );
        };
        ScrollTrigger.create({
          trigger: how,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 4.2)}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: syncHowStep,
        });
        window.addEventListener("scroll", syncHowStep, { passive: true });
        lenis?.on?.("scroll", syncHowStep);
      }

      const resultImg = root.querySelector(".cine-results__media");
      if (resultImg) {
        gsap.fromTo(
          resultImg,
          { scale: 1.08, y: resultY },
          {
            scale: 1,
            y: mobile ? 0 : -20,
            ease: "none",
            scrollTrigger: {
              trigger: ".cine-results",
              start: "top 75%",
              end: "bottom 25%",
              scrub: true,
            },
          },
        );
      }
      const supportImg = root.querySelector(".cine-support__media");
      if (supportImg) {
        gsap.fromTo(
          supportImg,
          { scale: 1.06, y: mobile ? 12 : 24 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".cine-support",
              start: "top 75%",
              end: "bottom 25%",
              scrub: true,
            },
          },
        );
      }
    }, root);

    const revealSel =
      ".cine-concept [data-cine], .cine-results [data-cine], .cine-figure, .cine-support [data-cine], .cine-how-step";
    const revealItems = Array.from(root.querySelectorAll<HTMLElement>(revealSel));
    revealItems.forEach((el, i) => {
      el.style.setProperty("--cine-delay", `${Math.min(i % 4, 3) * 0.13}s`);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -18% 0px" },
    );
    revealItems.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.82) {
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      io.disconnect();
      if (syncHowStep) {
        window.removeEventListener("scroll", syncHowStep);
        lenis?.off?.("scroll", syncHowStep);
      }
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      lenis?.off?.("scroll", onLenisScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div className="cine-page usage-science" ref={rootRef}>
      <section className="cine-hero">
        <div className="cine-hero__media-wrap">
          <div className="cine-hero__media">
            <div className="relative h-full w-full">
              <Image
                src="/home-barn.jpg"
                alt="Open barn and cattle"
                fill
                priority
                className="object-cover object-[center_bottom]"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="cine-hero__veil" aria-hidden />
        </div>
        <div className="cine-hero__copy">
          <p className="cine-kicker" data-cine>
            01 · Farm
          </p>
          <span className="cine-rule cine-rule--light" data-cine aria-hidden />
          <h1 className="cine-hero__title" data-cine>
            Your cereals. Your mixer. A ration for the whole herd.
          </h1>
          <p className="cine-hero__lead" data-cine>
            Aliplus Kosova is the local team for a concept designed in France: fourteen natural
            components, mixed with cereals you already grow, for cattle, sheep and goats.
          </p>
          <Link href="/contact" className="ghost-fill-btn ghost-fill-btn--light" data-cine>
            Talk to our team
          </Link>
        </div>
      </section>

      <CompanyCycle />

      <section className="cine-how" data-step="0">
        <div className="cine-how__scene">
          <div className="cine-spine" aria-hidden>
            {steps.map((item, i) => (
              <span key={item.title} className={`cine-spine__dot${i === 0 ? " is-on" : ""}`} />
            ))}
          </div>
          <div className="cine-how__visual">
            {steps.map((item, i) => (
              <figure key={item.title} className={`cine-plate cine-plate--${item.kind} cine-how__shot`} data-step={i}>
                <p className="cine-plate__ghost">{String(i + 1).padStart(2, "0")}</p>
                <div className="cine-plate__img">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className={item.kind === "draw" ? "object-contain cine-plate__draw" : "object-cover object-[center_bottom]"}
                      sizes="(max-width: 991px) 100vw, 52vw"
                    />
                  </div>
                </div>
                <figcaption className="cine-plate__bar">
                  <span>{item.kicker}</span>
                  <span>{item.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="cine-how__copy">
            <div className="cine-how__panels">
              {steps.map((item) => (
                <div key={item.title} className="cine-how__panel">
                  <p className="cine-kicker cine-kicker--dark">{item.kicker}</p>
                  <h2 className="cine-h2">{item.title}</h2>
                  <p className="cine-p">{item.body}</p>
                </div>
              ))}
            </div>
            <ol className="cine-how__list">
              {steps.map((item, i) => (
                <li key={item.title} className={i === 0 ? "is-on" : ""}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="cine-how-mobile">
          {steps.map((item) => (
            <article key={item.title} className="cine-how-step">
              <figure className={`cine-plate cine-plate--${item.kind}`}>
                <div className="cine-plate__img cine-plate__img--sm">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className={item.kind === "draw" ? "object-contain cine-plate__draw" : "object-cover object-[center_bottom]"}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <figcaption className="cine-plate__bar">
                  <span>{item.kicker}</span>
                  <span>{item.note}</span>
                </figcaption>
              </figure>
              <p className="cine-kicker cine-kicker--dark">{item.kicker}</p>
              <h3 className="cine-h3">{item.title}</h3>
              <p className="cine-p">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cine-results">
        <figure className="cine-plate cine-plate--photo cine-results__frame">
          <div className="cine-results__media">
            <div className="relative h-full w-full">
              <Image
                src="/home-barn.jpg"
                alt="Cattle on an Aliplus farm"
                fill
                className="object-cover object-[center_bottom]"
                sizes="(max-width: 991px) 100vw, 48vw"
              />
            </div>
          </div>
          <figcaption className="cine-plate__bar">
            <span>04 · Rezultatet</span>
            <span>On the farm</span>
          </figcaption>
        </figure>
        <div className="cine-results__copy">
          <p className="cine-kicker cine-kicker--dark" data-cine>
            Rezultatet
          </p>
          <span className="cine-rule" data-cine aria-hidden />
          <h2 className="cine-h2" data-cine>
            The figures that do not move.
          </h2>
          <p className="cine-p" data-cine>
            Honest numbers only. The product is the rate. The wait is part of the work.
          </p>
          <div className="cine-results__figures">
            {figures.map((item) => (
              <article key={item.label} className="cine-figure">
                <p className="cine-figure__n">{item.n}</p>
                <p className="cine-figure__l">{item.label}</p>
                <p className="cine-figure__h">{item.hint}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cine-support">
        <figure className="cine-plate cine-plate--photo cine-support__frame">
          <div className="cine-support__media">
            <div className="relative h-full w-full">
              <Image
                src="/home-barn.jpg"
                alt="On-farm feeding with the mixer you already have"
                fill
                className="object-cover object-[center_bottom]"
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>
          <figcaption className="cine-plate__bar">
            <span>05 · Fermeri</span>
            <span>Long-term support</span>
          </figcaption>
        </figure>
        <div className="cine-support__copy">
          <p className="cine-kicker cine-kicker--dark" data-cine>
            Fermeri
          </p>
          <span className="cine-rule" data-cine aria-hidden />
          <h2 className="cine-support__title" data-cine>
            We start with a conversation, not a pallet.
          </h2>
          <p className="cine-support__lead" data-cine>
            The first mix is set to your cereals, your animals, and the tools already on the farm.
            Advisors stay with you — optimising the ration and adapting CMV supplements as milk
            and finishing results come in.
          </p>
          <div className="cine-support__actions" data-cine>
            <Link href="/contact" className="ghost-fill-btn">
              Talk to our team
            </Link>
            <Link href="/contact" className="ghost-line-btn">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
