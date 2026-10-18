"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import { CinematicHero } from "@/components/layout/CinematicHero";
import { WordReveal } from "@/components/motion/WordReveal";
import {
  AdvisorIcon,
  ArrowRightIcon,
  BagIcon,
  BaleIcon,
  BarnIcon,
  CalendarIcon,
  CowIcon,
  DropletIcon,
  FloraIcon,
  GoatIcon,
  LeafIcon,
  MeatIcon,
  MilkIcon,
  MineralIcon,
  MixerIcon,
  PlusIcon,
  ScaleIcon,
  SheepIcon,
  ShieldIcon,
  SiloIcon,
  SunIcon,
  TroughIcon,
  WheatIcon,
} from "@/components/guide/FarmIcons";

type IconType = ComponentType<{ size?: number }>;

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

const glance: { icon: IconType; value: string; unit: string; label: string }[] = [
  { icon: BagIcon, value: "22", unit: "kg", label: "Aliplus per ton of cereals" },
  { icon: DropletIcon, value: "24", unit: "%", label: "Target moisture at mixing" },
  { icon: CalendarIcon, value: "14", unit: "days", label: "Maturation before feeding" },
  { icon: CowIcon, value: "1", unit: "formula", label: "Cattle, sheep and goats" },
];

const farmCards: { icons: IconType[]; title: string; body: ReactNode }[] = [
  {
    icons: [CowIcon, SheepIcon, GoatIcon],
    title: "All ruminants",
    body: (
      <>
        The same mix suits <strong>cattle, sheep and goats</strong> — from calves at{" "}
        <strong>30 days</strong> to dairy, suckler and finishing animals, with amounts adjusted to
        each group.
      </>
    ),
  },
  {
    icons: [WheatIcon],
    title: "Farm cereals",
    body: (
      <>
        <strong>Wheat, barley, maize, triticale, oats, rye, peas</strong> and other starch or
        cellulose-based grains. One <strong>22 kg</strong> bag treats <strong>one ton</strong>.
      </>
    ),
  },
  {
    icons: [MixerIcon],
    title: "Your equipment",
    body: (
      <>
        Mix, store and feed with the <strong>mixer and routines</strong> you already have.{" "}
        <strong>No new feeding system.</strong>
      </>
    ),
  },
];

const packs = [
  { kind: "bag" as const, src: "/aliplus-bag-cutout.png", w: 583, h: 1046, label: "22 kg bag", meta: "Treats 1 ton", note: "One bag, one ton of your own cereals." },
  { kind: "pallet" as const, src: "/aliplus-pallet-cutout.png", w: 551, h: 800, label: "Pallet · 50 bags", meta: "Treats 50 tons", note: "A season of rations on one pallet." },
  { kind: "big" as const, src: "/aliplus-bigbag-cutout.png", w: 690, h: 800, label: "Big bag · 1100 kg", meta: "Treats 50 tons", note: "Fifty tons in one lift." },
];

const steps: { icon: IconType; n: string; when: string; title: string; body: ReactNode }[] = [
  {
    icon: MixerIcon,
    n: "01",
    when: "Day 0",
    title: "Mix",
    body: (
      <>
        Grind or crush local cereals, then mix <strong>22 kg of Aliplus per ton</strong>. Adjust
        water to about <strong>24% moisture</strong> and blend evenly.
      </>
    ),
  },
  {
    icon: CalendarIcon,
    n: "02",
    when: "Days 1–14",
    title: "Mature",
    body: (
      <>
        Leave the mix for <strong>14 days</strong>. Natural processes in the grain need that time so
        protein and energy values can rise.
      </>
    ),
  },
  {
    icon: TroughIcon,
    n: "03",
    when: "Day 14 onward",
    title: "Feed",
    body: (
      <>
        Take from the pile for <strong>daily or weekly rations</strong>. Fibre —{" "}
        <strong>straw or hay</strong> — stays essential beside the treated grain.
      </>
    ),
  },
];

const ration: { icon: IconType; name: string; amount: string; note: string }[] = [
  {
    icon: WheatIcon,
    name: "Aliplus-treated cereals",
    amount: "4 – 15 kg +",
    note: "The energy and protein base, set to production and local resources.",
  },
  {
    icon: SiloIcon,
    name: "Silages",
    amount: "Optional",
    note: "Maize, maize cobs, grass, lucerne and similar forages.",
  },
  {
    icon: BaleIcon,
    name: "Fibre — straw or hay",
    amount: "Essential",
    note: "Physical support for rumen flora. Mixed in, partly mixed, or offered on the side.",
  },
  {
    icon: MineralIcon,
    name: "Mineral supplements (CMV)",
    amount: "Adjusted",
    note: "Adapted with advice from Aliplus Kosova as production rises.",
  },
];

const groups = [
  "Calves from 30 days",
  "Heifers",
  "Dairy cows",
  "Suckler cows",
  "Growing cattle",
  "Young bulls",
  "Finishing animals",
  "Sheep & goats",
];

const flow: { icon: IconType; title: string; body: string }[] = [
  {
    icon: WheatIcon,
    title: "In the grain",
    body: "Partial hydrolysis of starch and cellulose, plus nitrogen from Aliplus.",
  },
  {
    icon: TroughIcon,
    title: "In the ration",
    body: "High, balanced UF, PDIN and PDIE values — safer at larger cereal amounts.",
  },
  {
    icon: FloraIcon,
    title: "In the rumen",
    body: "Prebiotic and probiotic support for a stronger population of rumen bacteria.",
  },
];

const expect: { icon: IconType; title: string; body: ReactNode }[] = [
  {
    icon: ScaleIcon,
    title: "In the ration",
    body: (
      <>
        Treated cereals carry balanced <strong>energy and protein</strong>. Prebiotic support
        helps the rumen use more of what is already there.
      </>
    ),
  },
  {
    icon: MilkIcon,
    title: "In milk",
    body: (
      <>
        Farms report <strong>steadier quality</strong> and fewer losses when the rumen works more
        evenly — a feeding result, not a veterinary claim.
      </>
    ),
  },
  {
    icon: MeatIcon,
    title: "In meat",
    body: (
      <>
        More from the same farm grain: <strong>conversion, finish and carcass quality</strong>{" "}
        without a new feeding system.
      </>
    ),
  },
];

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

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (
    window as Window & {
      __lenis?: { scrollTo: (t: HTMLElement, o?: { offset?: number; duration?: number }) => void };
    }
  ).__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -96, duration: 1.15 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function GuideNav({ active }: { active: string }) {
  const index = toc.findIndex((item) => item.id === active);
  return (
    <nav className="ug-nav" aria-label="Usage Guide sections">
      <p className="ug-nav__title">In this guide</p>
      <ol className="ug-nav__list">
        {toc.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`ug-nav__item${active === item.id ? " is-active" : ""}${i < index ? " is-done" : ""}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={(event) => {
                event.preventDefault();
                scrollToId(item.id);
              }}
            >
              <span className="ug-nav__n">{String(i + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
      <Link href="/contact" className="ug-nav__cta">
        <AdvisorIcon size={18} />
        Ask an advisor
      </Link>
    </nav>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="ug-faq">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`ug-faq__item${isOpen ? " is-open" : ""}`}>
            <h3 className="ug-faq__h">
              <button
                type="button"
                className="ug-faq__q"
                aria-expanded={isOpen}
                aria-controls={`ug-faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="ug-faq__icon">
                  <PlusIcon size={18} />
                </span>
              </button>
            </h3>
            <div id={`ug-faq-${i}`} className="ug-faq__a" role="region">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SectionHead({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="ug-head">
      <p className="ug-eyebrow">
        <span>{n}</span>
        {title}
      </p>
      <WordReveal as="h2" className="ug-h2" text={title} step={0.038} />
      {children ? <div className="ug-lead">{children}</div> : null}
    </header>
  );
}

function Tile({ icon: IconC, size = 26, tone = "olive" }: { icon: IconType; size?: number; tone?: "olive" | "soft" }) {
  return (
    <span className={`ug-tile ug-tile--${tone}`}>
      <IconC size={size} />
    </span>
  );
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
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.1, 0.3] },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ug">
      <CinematicHero
        image="/guide-hero.jpg"
        imageAlt="Wheat field at last light"
        imagePosition="50% 62%"
        crumbs={["Guide", "Usage Guide"]}
        title={"Usage\nGuide"}
        tagline="Mix. Mature. Feed."
        body="Prepare Aliplus on the farm with cereals you already grow, store it correctly, and feed a high-performance ration with the equipment you already have."
        cta={{ href: "/contact", label: "Talk to our team" }}
        note="One 22 kg bag treats one ton of cereals — ready to feed after 14 days."
      />

      <section className="ug-glance" aria-label="Aliplus at a glance">
        <div className="ug-glance__inner">
          {glance.map((item) => (
            <div key={item.label} className="ug-glance__item">
              <Tile icon={item.icon} size={28} />
              <p className="ug-glance__value">
                {item.value}
                <span>{item.unit}</span>
              </p>
              <p className="ug-glance__label">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ug-body">
        <div className="ug-body__wrap">
          <GuideNav active={active} />

          <div className="ug-content">
            {/* 01 · On the farm */}
            <div id="on-the-farm" className="ug-block">
              <SectionHead n="01" title="On the farm">
                <p>
                  Fourteen natural components, mixed at <strong>22 kg per ton</strong> of farm
                  cereals and matured for <strong>14 days</strong>. One formula across the herd,
                  without a new feeding system.
                </p>
              </SectionHead>
              <div className="ug-cards">
                {farmCards.map((card) => (
                  <article key={card.title} className="ug-card">
                    <div className="ug-card__icons">
                      {card.icons.map((IconC, i) => (
                        <Tile key={i} icon={IconC} tone="soft" />
                      ))}
                    </div>
                    <h3 className="ug-h3">{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* 02 · Prepare */}
            <div id="prepare" className="ug-block">
              <SectionHead n="02" title="Prepare the mix" />
              <div className="ug-split">
                <div className="ug-copy">
                  <p>
                    Aliplus is <strong>simple to apply</strong> on the farm. Local cereals — wheat,
                    barley, oats, maize (wet or dry), triticale, rye, spelt, peas, cereal mixes or
                    by-products — are <strong>ground or crushed</strong>, then mixed at{" "}
                    <strong>one 22 kg bag per ton of grain</strong>.
                  </p>
                  <p>
                    Then <strong>adjust the water</strong> to about <strong>24% moisture</strong>.
                    The mix is ready for storage.
                  </p>
                  <div className="ug-callout">
                    <Tile icon={AdvisorIcon} size={22} tone="soft" />
                    <p>
                      Treat the grain with your own equipment, or Aliplus Kosova can connect you
                      with a <strong>trusted local treatment service</strong>.
                    </p>
                  </div>
                </div>
                <figure className="ug-photo">
                  <Image
                    src="/guide-grains.jpg"
                    alt="Farm cereals ready to mix with Aliplus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 991px) 100vw, 36vw"
                  />
                  <figcaption className="ug-photo__badge">
                    <strong>22 kg</strong>
                    <span>per ton</span>
                  </figcaption>
                </figure>
              </div>

              <h3 className="ug-subhead">Formats</h3>
              <div className="ug-packs">
                {packs.map((pack) => (
                  <article key={pack.label} className={`ug-pack ug-pack--${pack.kind}`}>
                    <Image
                      src={pack.src}
                      alt=""
                      width={pack.w}
                      height={pack.h}
                      unoptimized
                      className="ug-pack__shot"
                    />
                    <div className="ug-pack__card">
                      <span className="ug-pack__meta">{pack.meta}</span>
                      <p className="ug-pack__label">{pack.label}</p>
                      <p className="ug-pack__note">{pack.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* 03 · How to use */}
            <div id="how-to-use" className="ug-block">
              <SectionHead n="03" title="How to use">
                <p>
                  Three steps between the bag and the trough: <strong>mix</strong> on the farm, wait{" "}
                  <strong>14 days</strong>, then <strong>feed</strong>.
                </p>
              </SectionHead>
              <ol className="ug-steps">
                {steps.map((step) => (
                  <li key={step.n} className="ug-step">
                    <div className="ug-step__node">
                      <step.icon size={30} />
                    </div>
                    <p className="ug-step__when">
                      <span>{step.n}</span>
                      {step.when}
                    </p>
                    <h3 className="ug-h3">{step.title}</h3>
                    <p className="ug-step__body">{step.body}</p>
                  </li>
                ))}
              </ol>
              <div className="ug-storage">
                <div className="ug-storage__media">
                  <Image
                    src="/company-barn.jpg"
                    alt="Open-sided farm barn for storing the mix"
                    fill
                    className="object-cover"
                    sizes="(max-width: 991px) 100vw, 28vw"
                  />
                </div>
                <div className="ug-storage__copy">
                  <Tile icon={BarnIcon} size={26} />
                  <h3 className="ug-h3">Storage</h3>
                  <p>
                    Prepare months ahead, even a year. Keep the mix <strong>indoors, without
                    plastic cover</strong>. A <strong>10-day transition</strong> from the previous
                    ration is recommended.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 · Ration */}
            <div id="ration" className="ug-block">
              <SectionHead n="04" title="Build the ration">
                <p>
                  When you first use the concept, Aliplus advisors help you{" "}
                  <strong>optimise the ration</strong> for your production and local resources.
                </p>
              </SectionHead>
              <div className="ug-ration">
                <ul className="ug-ration__list">
                  {ration.map((row) => (
                    <li key={row.name} className="ug-ration__row">
                      <Tile icon={row.icon} size={24} tone="soft" />
                      <div className="ug-ration__text">
                        <p className="ug-ration__name">{row.name}</p>
                        <p className="ug-ration__note">{row.note}</p>
                      </div>
                      <span className="ug-ration__amount">{row.amount}</span>
                    </li>
                  ))}
                </ul>
                <figure className="ug-photo ug-photo--tall">
                  <Image
                    src="/guide-feeding.jpg"
                    alt="Cattle feeding on an Aliplus ration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 991px) 100vw, 32vw"
                  />
                </figure>
              </div>
              <div className="ug-groups">
                <p className="ug-groups__label">One ration base for</p>
                <ul>
                  {groups.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 05 · Feed */}
            <div id="feed" className="ug-block">
              <SectionHead n="05" title="Feed">
                <p>
                  Distribute with a <strong>feed mixer</strong> or the tools you already have, until
                  the ration is <strong>homogeneous</strong>. Because milk and finishing results can
                  rise, adapt <strong>CMV supplements</strong> with advice from Aliplus Kosova.
                </p>
              </SectionHead>
              <div className="ug-compare">
                <article className="ug-compare__card">
                  <div className="ug-compare__top">
                    <Tile icon={CalendarIcon} size={26} />
                    <p className="ug-compare__kicker">Dry ration</p>
                  </div>
                  <p className="ug-compare__value">Up to once a week</p>
                  <p>
                    Offered less often when production and distribution allow —{" "}
                    <strong>less labour</strong> for the same base mix.
                  </p>
                </article>
                <article className="ug-compare__card ug-compare__card--dark">
                  <div className="ug-compare__top">
                    <Tile icon={SunIcon} size={26} />
                    <p className="ug-compare__kicker">Moist ration</p>
                  </div>
                  <p className="ug-compare__value">Every day</p>
                  <p>
                    Fed daily as needed. The same base covers the herd, with amounts set for each
                    group.
                  </p>
                </article>
              </div>
              <blockquote className="ug-quote">
                <LeafIcon size={26} />
                <p>
                  Grain treated with Aliplus is the <strong>ideal feed for every rumen</strong> —
                  high, balanced <strong>UF, PDIN and PDIE</strong> values, with prebiotic support
                  for the animal’s flora and fauna.
                </p>
              </blockquote>
            </div>

            {/* 06 · Concept */}
            <div id="concept" className="ug-block">
              <SectionHead n="06" title="The concept">
                <p>
                  Aliplus does not replace nutrition. It helps animals use more of the cereals
                  already on the farm.
                </p>
              </SectionHead>
              <ol className="ug-flow">
                {flow.map((item, i) => (
                  <li key={item.title} className="ug-flow__item">
                    <Tile icon={item.icon} size={30} />
                    <h3 className="ug-h3">{item.title}</h3>
                    <p>{item.body}</p>
                    {i < flow.length - 1 ? (
                      <span className="ug-flow__arrow" aria-hidden>
                        <ArrowRightIcon size={22} />
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="ug-columns">
                <article>
                  <div className="ug-columns__head">
                    <ShieldIcon size={22} />
                    <h3 className="ug-h3">Treated cereals — premium feed</h3>
                  </div>
                  <p>
                    <strong>Anti-acidosis</strong> support lets the ration carry larger amounts of
                    treated cereals more safely — typically <strong>3 to 8 kg</strong> in dairy and
                    finishing, and more when the farm allows.
                  </p>
                  <p>
                    Other components work on <strong>rumination, salivation, calmness and
                    digestion</strong>. Respecting the animal’s metabolism, energy goes into
                    producing more, and producing better.
                  </p>
                </article>
                <article>
                  <div className="ug-columns__head">
                    <FloraIcon size={22} />
                    <h3 className="ug-h3">Feeding the rumen bacteria</h3>
                  </div>
                  <p>
                    The <strong>prebiotic / probiotic</strong> effect in the grain supports a much
                    stronger development of rumen flora and fauna — built on treated cereals and{" "}
                    <strong>fibre (straw, hay)</strong> for physical support.
                  </p>
                  <p>
                    Ruminants multiply these bacteria, making them the most{" "}
                    <strong>economical, ecological and natural</strong> feed the animal has.
                  </p>
                </article>
              </div>
            </div>

            {/* 07 · Expect */}
            <div id="expect" className="ug-block">
              <SectionHead n="07" title="What to expect">
                <p>
                  The <strong>fourteen components</strong> work together in the grain, the ration
                  and the rumen.
                </p>
              </SectionHead>
              <div className="ug-cards">
                {expect.map((card) => (
                  <article key={card.title} className="ug-card ug-card--line">
                    <Tile icon={card.icon} size={26} />
                    <h3 className="ug-h3">{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* 08 · FAQ */}
            <div id="faq" className="ug-block ug-block--last">
              <SectionHead n="08" title="Quick answers" />
              <Faq />
            </div>
          </div>
        </div>
      </section>

      <section className="ug-close">
        <div className="ug-close__copy">
          <WordReveal as="h2" className="ug-close__title" text="Start with your own cereals." step={0.038} />
          <p className="ug-close__lead">
            Plan the first mix at 22 kg per ton with our advisors, or see the product in detail.
          </p>
          <div className="ug-close__actions">
            <Link href="/contact" className="ug-btn ug-btn--light">
              Talk to our team
            </Link>
            <Link href="/products/aliplus" className="ug-btn ug-btn--line">
              See the product
            </Link>
          </div>
        </div>
        <div className="ug-close__icons" aria-hidden>
          {[WheatIcon, MixerIcon, CalendarIcon, TroughIcon].map((IconC, i) => (
            <span key={i} className="ug-close__icon">
              <IconC size={34} />
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
