"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { WordReveal } from "@/components/motion/WordReveal";

const toc = [
  { id: "on-the-farm", label: "On the farm" },
  { id: "prepare", label: "Prepare the mix" },
  { id: "how-to-use", label: "How to use" },
  { id: "ration", label: "Build the ration" },
  { id: "feed", label: "Feed" },
  { id: "concept", label: "The concept" },
  { id: "expect", label: "What to expect" },
  { id: "faq", label: "Quick answers" },
] as const;

const farmCards = [
  {
    title: "All ruminants",
    body: (
      <>
        The same Aliplus mix suits <strong>cattle, sheep and goats</strong> — calves from{" "}
        <strong>30 days</strong>, heifers, dairy cows, suckler cows, growing cattle, young bulls
        and finishing animals — with <strong>amounts adjusted</strong> to each group.
      </>
    ),
  },
  {
    title: "Farm cereals",
    body: (
      <>
        <strong>Wheat, barley, maize, triticale, oats, rye, peas</strong> and other starch or
        cellulose-based farm grains. One <strong>22 kg</strong> bag treats{" "}
        <strong>one ton</strong>.
      </>
    ),
  },
  {
    title: "Your equipment",
    body: (
      <>
        Mix, store and feed with the <strong>mixer and routines</strong> you already have.{" "}
        <strong>No new feeding system.</strong>
      </>
    ),
  },
] as const;

const packs = [
  { label: "22 kg bag", detail: "Treats 1 ton of cereals" },
  { label: "Pallet · 50 bags", detail: "Treats 50 tons of cereals" },
  { label: "Big bag · 1100 kg", detail: "Treats 50 tons of cereals" },
] as const;

const practice = [
  {
    n: "01",
    title: "Mix",
    image: "/imgs/how-mix-cow.png",
    alt: "Dairy cow beside an Aliplus feed bag",
    body: (
      <>
        <p>
          Grind or crush local cereals, then mix <strong>22 kg of Aliplus per ton</strong>. Adjust
          water to about <strong>24% moisture</strong>. The blend is then ready to store.
        </p>
        <p>
          <strong>Distribution of rations:</strong> by mixing bowl or by your other usual means.
          Mix everything together evenly. Given the high productivity obtained in milk and
          fattening with the Aliplus concept, it will be necessary to adapt the{" "}
          <strong>CMV supplements</strong> by taking advice from Aliplus Kosova.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Mature",
    image: "/imgs/how-mature-cow.png",
    alt: "Dairy cow beside a clock while the mix matures",
    body: (
      <p>
        Leave the mix for <strong>14 days</strong> before feeding. Natural processes in the grain
        need that time so protein and energy values can rise.
      </p>
    ),
  },
  {
    n: "03",
    title: "Feed",
    image: "/imgs/how-feed-cow.png",
    alt: "Dairy cow eating from a feed trough",
    body: (
      <p>
        Take from the pile for <strong>daily or weekly rations</strong>.{" "}
        <strong>Fibre — straw or hay</strong> — stays essential beside the treated grain for
        every ruminant on the farm.
      </p>
    ),
  },
] as const;

const useCards = [
  {
    image: "/guide-farm-means.jpg",
    alt: "Farm mixer preparing an Aliplus ration",
    kicker: "With the mixer you have",
    title: "Homogeneous mix",
    body: "Blend treated cereals with fibre and the rest of the ration. Adapt mineral supplements with advice from Aliplus Kosova.",
  },
  {
    image: "/guide-feeding.jpg",
    alt: "Cattle feeding on an Aliplus ration",
    kicker: "Dry rations",
    title: "Up to once a week",
    body: "A dry ration can be offered less often — less labour — when production and distribution allow.",
  },
  {
    image: "/guide-ruminants.jpg",
    alt: "Ruminants on the farm",
    kicker: "Moist rations",
    title: "Daily as needed",
    body: "Moist rations are fed daily. The same base mix covers the herd, with amounts set for each group.",
  },
] as const;

const faqs = [
  {
    q: "What is the mix rate?",
    a: "Use only 22 kg of Aliplus per ton of cereals. That rate is the product — do not concentrate or dilute the formula.",
  },
  {
    q: "How long does the mix need to mature?",
    a: "14 days before feeding. The blend needs that time so protein and energy values can rise.",
  },
  {
    q: "Which animals can eat it?",
    a: "Cattle, sheep and goats — from calves at 30 days through dairy and beef. Adjust amounts, not the formula.",
  },
  {
    q: "Which cereals work?",
    a: "Wheat, barley, maize, triticale, oats, rye, spelt, peas, cereal mixes and starch or cellulose-based by-products — ground or crushed.",
  },
  {
    q: "Do I need new equipment?",
    a: "No. Mix and feed with the mixer and routines already on the farm. Aliplus Kosova can also connect you with a local treatment service.",
  },
  {
    q: "How should I store it?",
    a: "Indoors, without plastic cover, for months or up to a year. A 10-day transition from the previous ration is recommended, not required.",
  },
] as const;

function Diamond() {
  return (
    <svg className="usage-nav__icon" viewBox="0 0 8 8" aria-hidden>
      <rect x="2.15" y="2.15" width="3.7" height="3.7" transform="rotate(45 4 4)" />
    </svg>
  );
}

function UsageHowTo() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(true);

  const select = (index: number) => {
    if (index === active) return;
    setShown(false);
    window.setTimeout(() => {
      setActive(index);
      setShown(true);
    }, 100);
  };

  const step = practice[active];

  return (
    <div className="usage-how">
      <div className="usage-how__menu" role="tablist" aria-label="How to use">
        {practice.map((item, index) => (
          <button
            key={item.n}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`usage-how__tab${index === active ? " is-current" : ""}`}
            onClick={() => select(index)}
          >
            <span className="usage-how__n">{item.n}</span>
            <span className="usage-how__tab-title">{item.title}</span>
          </button>
        ))}
      </div>
      <div className="usage-how__stage">
        <div className={`usage-how__pane${shown ? " is-in" : ""}`}>
          <div className="usage-how__visual">
            <Image
              src={step.image}
              alt={step.alt}
              width={840}
              height={630}
              className="usage-how__art"
              sizes="(max-width: 991px) 90vw, 42em"
              priority={false}
            />
          </div>
          <div className="usage-how__copy">
            <h3 className="usage-how__title">{step.title}</h3>
            {step.body}
          </div>
        </div>
      </div>
    </div>
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

function UsageNav({ active }: { active: string }) {
  return (
    <nav className="usage-nav" aria-label="Usage Guide">
      <p className="usage-nav__title">Usage Guide</p>
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

function UsageFaq() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="usage-faq">
      {faqs.map((item) => {
        const isOpen = open === item.q;
        return (
          <div key={item.q} className={`usage-faq__item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="usage-faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : item.q)}
            >
              <span>{item.q}</span>
              <span className="usage-faq__plus" aria-hidden />
            </button>
            <div className="usage-faq__a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Copy({ children }: { children: ReactNode }) {
  return <div className="usage-copy">{children}</div>;
}

export function UsageGuideScience() {
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
          src="/guide-hero.jpg"
          alt="Wheat field at last light"
          fill
          priority
          className="usage-hero__media hero-scene__media"
          sizes="100vw"
        />
        <div className="usage-hero__veil hero-scene__veil" aria-hidden />
        <div className="usage-hero__copy hero-scene__copy">
          <p className="usage-hero__crumbs">
            <span>Guide</span>
            <i />
            <span>Usage Guide</span>
          </p>
          <WordReveal as="h1" className="usage-hero__title" text="Usage Guide" slow delay={0.28} />
        </div>
      </section>

      <section className="usage-body">
        <div className="usage-body__wrap">
          <UsageNav active={active} />

          <div className="usage-area">
            <div className="usage-intro">
              <WordReveal
                as="h2"
                className="usage-h2"
                text="Prepare Aliplus on the farm with cereals you already grow, store it correctly, and feed a high-performance ration with the equipment you already have."
              />
            </div>

            <div className="usage-rule" />

            <div id="on-the-farm" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="On the farm" />
                <p className="usage-lead">
                  Fourteen natural components, mixed at <strong>22 kg per ton</strong> of farm
                  cereals and matured for <strong>14 days</strong>. One formula across the herd —
                  cattle, sheep and goats — without a new feeding system.
                </p>
              </div>
              <div className="usage-cards">
                {farmCards.map((card) => (
                  <article key={card.title} className="usage-card">
                    <WordReveal as="h3" className="usage-h3" text={card.title} />
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="usage-rule" />

            <div id="prepare" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Prepare the mix" />
                <Copy>
                  <p>
                    Aliplus is <strong>simple to apply</strong> on the farm. The cereals available
                    locally — wheat, barley, oats, maize (wet or dry), triticale, rye, spelt, peas,
                    cereal mixes or cereal by-products — are <strong>ground or crushed</strong>, then
                    mixed with Aliplus at <strong>1 ton of grain per 22 kg bag</strong>.
                  </p>
                  <p>
                    Then <strong>adjust the water</strong> to reach about <strong>24% moisture</strong>.
                    The mix is ready for storage. You can treat the grain yourself, or Aliplus Kosova
                    can connect you with a trusted local service.
                  </p>
                </Copy>
              </div>
              <div className="usage-packs">
                {packs.map((pack) => (
                  <article key={pack.label} className="usage-pack">
                    <WordReveal as="h3" className="usage-h3" text={pack.label} />
                    <p>{pack.detail}</p>
                  </article>
                ))}
              </div>
              <p className="usage-note">
                <strong>Note.</strong> Treated cereals can be prepared with your own equipment or
                treated on the farm by an external service.
              </p>
            </div>

            <div className="usage-rule" />

            <div id="how-to-use" className="usage-block usage-block--how">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="How to use" />
                <p className="usage-lead">
                  Three steps sit between the bag and the trough. <strong>Mix</strong> on the
                  farm, wait <strong>14 days</strong>, then <strong>feed</strong> with the
                  cereals already in the barn.
                </p>
              </div>
              <UsageHowTo />
              <p className="usage-note">
                <strong>Storage.</strong> Prepare months ahead, even a year. Keep the mix{" "}
                <strong>indoors without plastic cover</strong>. A{" "}
                <strong>10-day transition</strong> from the previous ration is recommended.
              </p>
            </div>

            <div className="usage-rule" />

            <div id="ration" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Build the ration" />
                <Copy>
                  <p>
                    When you first use this concept on the farm, Aliplus advisors help you{" "}
                    <strong>optimise the ration</strong>. According to your production and local
                    resources, rations are built from{" "}
                    <strong>Aliplus-treated cereals (from 4 kg to 15 kg and more)</strong> and may
                    also include <strong>silages</strong> — maize, maize cobs, grass, lucerne and
                    similar forages.
                  </p>
                  <p>
                    <strong>Fibre</strong> is managed in the usual way with coarse forage —{" "}
                    <strong>straw or hay</strong>. It is essential for rumen flora. Mix it through
                    the ration, partly through, or offer it separately. Mineral supplements (
                    <strong>CMV</strong>) should be adjusted with advice from Aliplus Kosova.
                  </p>
                  <p>
                    Your Aliplus ration suits <strong>all your ruminants</strong>: calves from{" "}
                    <strong>30 days</strong>, heifers, dairy cows, suckler cows, growing cattle,
                    young bulls and finishing animals. You can distribute{" "}
                    <strong>the same rations</strong>, with amounts adapted to each group.
                  </p>
                </Copy>
              </div>
              <div className="usage-split">
                <aside className="usage-panel">
                  <p>
                    Prepare rations with a <strong>feed mixer</strong> or your usual equipment.
                    Blend every ingredient until the mix is <strong>homogeneous</strong>. Take
                    advice from Aliplus Kosova farmers when you set the first ration.
                  </p>
                  <p>
                    Fibre can be <strong>fully or partly mixed</strong> into the ration, or given
                    on the side. The base stays the same across the herd.
                  </p>
                </aside>
                <figure className="usage-photo">
                  <Image
                    src="/float-sheep.jpg"
                    alt="Cattle on pasture — an Aliplus ration"
                    fill
                    className="object-cover object-[center_45%]"
                    sizes="(max-width: 991px) 100vw, 39em"
                  />
                </figure>
              </div>
            </div>

            <div className="usage-rule" />

            <div id="feed" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="Feed" />
                <Copy>
                  <p>
                    Distribution uses a <strong>feed mixer</strong> or the tools you already have.
                    Mix the whole contents until they are <strong>homogeneous</strong>. Because
                    milk and finishing results can rise with the Aliplus concept,{" "}
                    <strong>CMV supplements</strong> should be adapted with advice from Aliplus
                    Kosova.
                  </p>
                  <p>
                    <strong>Note.</strong> Depending on ration type, production and how you
                    distribute, animals can be fed up to <strong>once a week</strong> on a{" "}
                    <strong>dry ration</strong> — less labour — or <strong>every day</strong> on a{" "}
                    <strong>moist ration</strong>.
                  </p>
                </Copy>
              </div>
              <aside className="usage-panel">
                <p>
                  Grain treated with Aliplus is the <strong>ideal feed for every rumen</strong>.
                  Nutrient values are high and balanced (<strong>UF, PDIN, PDIE</strong>). Through
                  its <strong>prebiotic</strong> qualities it supports the flora and fauna of the
                  animal — a healthier, more natural feed for ruminants.
                </p>
              </aside>
              <div className="usage-uses">
                {useCards.map((card) => (
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

            <div id="concept" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="The concept" />
                <p className="usage-lead">
                  Aliplus does not replace nutrition. It helps animals use more of the cereals
                  already on the farm — in the <strong>grain</strong>, in the{" "}
                  <strong>ration</strong>, and in the <strong>rumen</strong>.
                </p>
              </div>
              <div className="usage-concept">
                <article className="usage-concept__col">
                  <WordReveal
                    as="h3"
                    className="usage-h3"
                    text="Treated cereals — premium feed for cattle"
                  />
                  <Copy>
                    <p>
                      <strong>Optimising the grain</strong> — partial hydrolysis of starch and
                      cellulose, plus nitrogen from Aliplus — helps animals express their{" "}
                      <strong>full natural potential</strong>.
                    </p>
                    <p>
                      <strong>Anti-acidosis</strong> support lets the ration carry{" "}
                      <strong>larger amounts of treated cereals</strong> more safely — typically{" "}
                      <strong>3 to 8 kg</strong> in dairy and finishing, and more when the farm
                      allows.
                    </p>
                    <p>
                      Other components work on{" "}
                      <strong>rumination, salivation, calmness and digestion</strong>. By
                      respecting the animal’s metabolism, energy goes into{" "}
                      <strong>producing more, and producing better</strong>.
                    </p>
                  </Copy>
                </article>
                <article className="usage-concept__col">
                  <WordReveal
                    as="h3"
                    className="usage-h3"
                    text="The principle — feeding the rumen bacteria"
                  />
                  <Copy>
                    <p>
                      With high, balanced values (<strong>UF, PDIN, PDIE</strong>), grain treated
                      with Aliplus is the <strong>ideal feed for every rumen</strong>.
                    </p>
                    <p>
                      The <strong>prebiotic / probiotic</strong> effect of Aliplus in the grain
                      then supports a <strong>much stronger development of rumen bacteria</strong>{" "}
                      — the flora and fauna of the rumen.
                    </p>
                    <p>
                      That development rests on the treated cereals and on{" "}
                      <strong>fibre (straw, hay)</strong>, which gives the microbes physical
                      support. The ruminant is the mammal that can multiply these bacteria. They
                      become the most <strong>economical, ecological and natural</strong> feed
                      the animal has.
                    </p>
                  </Copy>
                </article>
              </div>
              <Image
                src="/imgs/guide-cow.svg"
                alt=""
                width={280}
                height={158}
                className="usage-cow"
                aria-hidden
              />
            </div>

            <div className="usage-rule" />

            <div id="expect" className="usage-block">
              <div className="usage-heading">
                <WordReveal as="h2" className="usage-h2" text="What to expect" />
                <p className="usage-lead">
                  The <strong>fourteen components</strong> work together in the grain, the ration
                  and the rumen — protein use, energy, and steadier flora.
                </p>
              </div>
              <div className="usage-cards">
                <article className="usage-card">
                  <WordReveal as="h3" className="usage-h3" text="In the ration" />
                  <p>
                    Treated cereals carry balanced <strong>energy and protein</strong> values.
                    Prebiotic support helps the rumen use more of what is already there.
                  </p>
                </article>
                <article className="usage-card">
                  <WordReveal as="h3" className="usage-h3" text="In milk" />
                  <p>
                    Farms report <strong>steadier quality</strong> and fewer losses when the rumen
                    works more evenly — a feeding result, not a veterinary claim.
                  </p>
                </article>
                <article className="usage-card">
                  <WordReveal as="h3" className="usage-h3" text="In meat" />
                  <p>
                    The aim is more from the same farm grain:{" "}
                    <strong>conversion, finish and carcass quality</strong> without a new feeding
                    system.
                  </p>
                </article>
              </div>
            </div>

            <div className="usage-rule" />

            <div id="faq" className="usage-block usage-block--faq">
              <WordReveal as="h2" className="usage-h2" text="Quick answers" />
              <UsageFaq />
            </div>
          </div>
        </div>
      </section>

      <section className="usage-close">
        <div className="usage-close__copy">
          <WordReveal as="h2" className="usage-close__title" text="Start with your own cereals." />
          <p className="usage-close__lead">
            Estimate the first mix at <strong>22 kg per ton</strong>, or talk to the team about a
            farm transition.
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
