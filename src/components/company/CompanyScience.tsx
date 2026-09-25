"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { WordReveal } from "@/components/motion/WordReveal";
import { site } from "@/lib/content";

const toc = [
  { id: "the-promise", label: "The promise" },
  { id: "the-figures", label: "The figures" },
  { id: "why-farms-switch", label: "Why farms switch" },
  { id: "first-season", label: "Your first season" },
  { id: "who-its-for", label: "Who it is for" },
  { id: "who-we-are", label: "Who we are" },
] as const;

const promise = [
  {
    title: "Your grain",
    body: (
      <>
        Wheat, barley, maize and the other cereals already in the barn become the{" "}
        <strong>base of the ration</strong> — not a leftover beside bought-in feed.
      </>
    ),
  },
  {
    title: "Your mixer",
    body: (
      <>
        Mix, store and feed with the <strong>equipment you already have</strong>. No new feeding
        system. No new building.
      </>
    ),
  },
  {
    title: "Your herd",
    body: (
      <>
        One formula for <strong>cattle, sheep and goats</strong>. Amounts change with the group —
        calves from 30 days through dairy and finishing.
      </>
    ),
  },
] as const;

const figures = [
  { n: "14", label: "Natural components", detail: "One synergistic formula, designed with biologists and produced in France." },
  { n: "22 kg", label: "Per ton of cereals", detail: "That rate is the product. Do not concentrate or dilute the mix." },
  { n: "14 days", label: "Before feeding", detail: "The blend needs that time so protein and energy values can rise." },
] as const;

const startSteps = [
  {
    n: "01",
    title: "A farm conversation",
    body: (
      <>
        Tell us what you grow, what you feed, and which animals you keep. We help you{" "}
        <strong>set the first ration</strong> — not a catalogue order.
      </>
    ),
  },
  {
    n: "02",
    title: "The first mix",
    body: (
      <>
        Treat farm cereals at <strong>22 kg per ton</strong>, adjust water to about{" "}
        <strong>24% moisture</strong>, and leave the blend for <strong>14 days</strong>.
      </>
    ),
  },
  {
    n: "03",
    title: "A quiet transition",
    body: (
      <>
        A <strong>10-day transition</strong> from the previous ration is recommended. Then feed
        with the mixer you already use.
      </>
    ),
  },
] as const;

const audience = [
  {
    image: "/float-cattle.jpg",
    alt: "Cattle on an Aliplus farm",
    kicker: "Dairy and beef",
    title: "Cattle",
    body: "Heifers, dairy cows, suckler cows, growing cattle and finishing animals — one base mix.",
  },
  {
    image: "/float-sheep.jpg",
    alt: "Sheep on pasture",
    kicker: "Small ruminants",
    title: "Sheep and goats",
    body: "The same Aliplus mix, with amounts adapted. Fibre stays essential beside the grain.",
  },
  {
    image: "/float-cereals.jpg",
    alt: "Farm cereals ready for the mix",
    kicker: "What you already grow",
    title: "Farm cereals",
    body: "Wheat, barley, maize, triticale, oats, rye, peas and starch or cellulose-based grains.",
  },
] as const;

function Diamond() {
  return (
    <svg className="usage-nav__icon" viewBox="0 0 8 8" aria-hidden>
      <rect x="2.15" y="2.15" width="3.7" height="3.7" transform="rotate(45 4 4)" />
    </svg>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as Window & { __lenis?: { scrollTo: (t: HTMLElement, o?: { offset?: number; duration?: number }) => void } }).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.15 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function CompanyNav({ active }: { active: string }) {
  return (
    <nav className="usage-nav" aria-label="Company">
      <p className="usage-nav__title">Company</p>
      <div className="usage-nav__list">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`usage-nav__item ${active === item.id ? "is-active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToId(item.id);
            }}
          >
            <Diamond />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function Copy({ children }: { children: ReactNode }) {
  return <div className="usage-copy">{children}</div>;
}

export function CompanyScience() {
  const [active, setActive] = useState<string>(toc[0].id);

  useEffect(() => {
    const nodes = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.08, 0.2, 0.4] },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="usage-science">
      <section className="usage-hero hero-scene">
        <Image
          src="/home-barn.jpg"
          alt="Open barn and cattle at last light"
          fill
          priority
          className="usage-hero__media hero-scene__media"
          sizes="100vw"
        />
        <div className="usage-hero__veil hero-scene__veil" aria-hidden />
        <div className="usage-hero__copy hero-scene__copy">
          <p className="usage-hero__crumbs">
            <span>About</span>
            <i />
            <span>Company</span>
          </p>
          <WordReveal as="h1" className="usage-hero__title" text="Aliplus Kosova" slow delay={0.28} />
        </div>
      </section>

      <section className="usage-body">
        <div className="usage-body__wrap">
          <CompanyNav active={active} />

          <div className="usage-area">
            <div className="usage-intro">
              <WordReveal
                as="h2"
                className="usage-h2"
                text="Your cereals. Your mixer. A ration that works for the whole herd."
              />
            </div>

            <aside className="company-invite">
              <p>
                We are not asking you to buy a new feeding system. We are asking you to look again
                at the <strong>grain already on the farm</strong> — and to let that grain do more
                for milk, growth and the margin at the end of the season.
              </p>
            </aside>

            <div className="usage-rule" />

            <div id="the-promise" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="The promise" />
                <p className="usage-lead">
                  Keep what already works on the farm. Change how the cereals are used.
                </p>
              </div>
              <div className="usage-cards">
                {promise.map((card) => (
                  <article key={card.title} className="usage-card">
                    <WordReveal as="h3" className="usage-h3" text={card.title} />
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="usage-rule" />

            <div id="the-figures" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="The figures that do not move" />
                <p className="usage-lead">
                  Honest numbers only. The product is the rate. The wait is part of the work.
                </p>
              </div>
              <div className="company-figures">
                {figures.map((item) => (
                  <article key={item.n} className="company-figure">
                    <p className="company-figure__n">{item.n}</p>
                    <WordReveal as="h3" className="usage-h3" text={item.label} />
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <figure className="company-break">
        <Image
          src="/company-barn.jpg"
          alt="Cattle in an open-sided barn"
          fill
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <figcaption className="company-break__cap">
          On-farm feeding — the mixer you already have.
        </figcaption>
      </figure>

      <section className="usage-body usage-body--resume">
        <div className="usage-body__wrap">
          <div className="usage-nav" aria-hidden />
          <div className="usage-area">
            <div id="why-farms-switch" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Why farms switch" />
                <Copy>
                  <p>
                    If small mixed farms, family herds and <strong>home-grown cereals</strong> are
                    part of the picture, you are looking at everyday livestock in Kosova.
                  </p>
                  <p>
                    That grain is the <strong>biggest nutritional asset</strong> on the place. Yet
                    many rations still lean on bought-in concentrates, while the cereals in the
                    barn stay undervalued.
                  </p>
                  <p>
                    How the grain is used touches milk, growth, <strong>rumen comfort</strong>,
                    veterinary costs and what is left at the end of the season.
                  </p>
                </Copy>
              </div>
              <div className="usage-split">
                <aside className="usage-panel">
                  <p>
                    Concentrates are often treated as the only way to feed a productive herd. We
                    offer another way: build the ration from the{" "}
                    <strong>cereals already grown</strong>.
                  </p>
                  <p>
                    Mixed with Aliplus, farm grain becomes a{" "}
                    <strong>complete, premium feed</strong> — supporting intake, rumen function
                    and performance, without a new barn system.
                  </p>
                </aside>
                <figure className="usage-photo">
                  <Image
                    src="/aliplus-wheat.jpg"
                    alt="Wheat ready to be treated with Aliplus"
                    fill
                    className="object-cover object-[center_50%]"
                    sizes="(max-width: 991px) 100vw, 39em"
                  />
                </figure>
              </div>
            </div>

            <div className="usage-rule" />

            <div id="first-season" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Your first season" />
                <p className="usage-lead">
                  We start with a conversation, not a pallet. The first mix is set to your
                  cereals, your animals, and the tools already on the farm.
                </p>
              </div>
              <div className="company-steps">
                {startSteps.map((step) => (
                  <article key={step.n} className="company-step">
                    <p className="company-step__n">{step.n}</p>
                    <WordReveal as="h3" className="usage-h3" text={step.title} />
                    <p>{step.body}</p>
                  </article>
                ))}
              </div>
              <p className="usage-note">
                <strong>Then we stay with you.</strong> Advisors help{" "}
                <strong>optimise the ration</strong> and adapt <strong>CMV supplements</strong> as
                milk and finishing results come in. Prepare the mix months ahead — even a year —
                and store it <strong>indoors without plastic cover</strong>.
              </p>
            </div>

            <div className="usage-rule" />

            <div id="who-its-for" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Who it is for" />
                <p className="usage-lead">
                  The same Aliplus mix covers the farm. Only the amounts move.
                </p>
              </div>
              <div className="usage-uses">
                {audience.map((card) => (
                  <article key={card.title} className="usage-use">
                    <div className="usage-use__media">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 991px) 100vw, 33vw"
                      />
                      <div className="usage-use__overlay">
                        <p className="usage-use__kicker">{card.kicker}</p>
                        <WordReveal as="h3" className="usage-use__title" text={card.title} />
                      </div>
                    </div>
                    <p className="usage-use__body">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="usage-rule" />

            <div id="who-we-are" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Who we are" />
                <Copy>
                  <p>
                    <strong>Aliplus Kosova</strong> is the local team for a concept designed in
                    France: <strong>fourteen natural components</strong>, mixed with cereals you
                    already grow, for cattle, sheep and goats.
                  </p>
                  <p>
                    Designed by a farmer with biologists. Produced in France. Implemented here —
                    ration by ration, farm by farm.
                  </p>
                </Copy>
              </div>
              <div className="usage-concept">
                <article className="usage-concept__col">
                  <WordReveal as="h3" className="usage-h3" text="Aliplus Kosova" />
                  <Copy>
                    <p>
                      Local support — first-mix guidance, ration advice and on-farm
                      implementation.
                    </p>
                    <p>
                      <strong>Legal name.</strong> {site.legalName}
                    </p>
                    <p>
                      <strong>Email.</strong>{" "}
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </p>
                  </Copy>
                </article>
                <article className="usage-concept__col">
                  <WordReveal as="h3" className="usage-h3" text="Design and production" />
                  <Copy>
                    <p>
                      Manufactured in France — {site.address.line1}, {site.address.city}.
                    </p>
                    <p>
                      The product is the rate: <strong>22 kg of Aliplus per ton</strong> of farm
                      cereals.
                    </p>
                  </Copy>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usage-close">
        <div className="usage-close__copy">
          <WordReveal as="h2" className="usage-close__title" text="Bring your own cereals." />
          <p className="usage-close__lead">
            Estimate the first mix at <strong>22 kg per ton</strong>, or sit with the team and
            plan a farm transition.
          </p>
          <div className="usage-close__actions">
            <Link href="/calculator" className="ghost-fill-btn ghost-fill-btn--light">
              Open the calculator
            </Link>
            <Link href="/contact" className="ghost-line-btn ghost-line-btn--light">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
