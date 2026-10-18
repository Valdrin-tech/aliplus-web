"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  AdvisorIcon,
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

gsap.registerPlugin(ScrollTrigger, SplitText);

type LenisLike = {
  on?: (event: string, handler: () => void) => unknown;
  off?: (event: string, handler: () => void) => unknown;
};
type IconType = ComponentType<{ size?: number }>;

// Built from the Aliplus Kosova booklet "Ushqyerja e kafshëve" (animal feeding guide).
// Icons and media live here; every string comes from the dictionary in the same order.

const factIcons: IconType[] = [LeafIcon, ScaleIcon, DropletIcon, CalendarIcon];
const journeyIcons: IconType[] = [ScaleIcon, MixerIcon, AdvisorIcon, ShieldIcon];
const processIcons: IconType[] = [MixerIcon, BarnIcon, SiloIcon, TroughIcon];
const rationIcons: IconType[] = [WheatIcon, SiloIcon, BaleIcon, MineralIcon];
const herdIcons: IconType[] = [CowIcon, SheepIcon, GoatIcon];
const whoIcons: IconType[] = [WheatIcon, MilkIcon, BaleIcon];
const careIcons: IconType[] = [SunIcon, AdvisorIcon, LeafIcon];

// INRA figures (day 0 / day 14–120); row labels come from the dictionary.
const inraValues = [
  { a: "89", b: "83" },
  { a: "12", b: "17.55" },
  { a: "39.9", b: "52.5" },
  { a: "1.17", b: "1.17" },
  { a: "81", b: "117" },
  { a: "109", b: "116" },
];

const formatMedia = [
  { kind: "bag", src: "/aliplus-bag-cutout.png", w: 583, h: 1046 },
  { kind: "pallet", src: "/aliplus-pallet-cutout.png", w: 551, h: 800 },
  { kind: "big", src: "/aliplus-bigbag-cutout.png", w: 690, h: 800 },
] as const;

/** Render "**bold**" runs in dictionary text as <strong>. */
function rich(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

function Tile({ icon: IconC, size = 24, tone = "olive" }: { icon: IconType; size?: number; tone?: "olive" | "soft" }) {
  return (
    <span className={`ug-tile ug-tile--${tone}`}>
      <IconC size={size} />
    </span>
  );
}

function Head({ n, title, lead }: { n: string; title: string; lead?: string }) {
  return (
    <header className="ug-head">
      <p className="ug-eyebrow" data-fade>
        <span>{n}</span>
        {title}
      </p>
      <h2 className="ug-h2" data-lines>
        {title}
      </h2>
      {lead ? (
        <p className="ug-lead" data-lines>
          {lead}
        </p>
      ) : null}
    </header>
  );
}

function Faq() {
  const faqs = useT().guide.faqs;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="ug-faq">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`ug-faq__item${isOpen ? " is-open" : ""}`}>
            <h3 className="ug-faq__h">
              <button type="button" className="ug-faq__q" aria-expanded={isOpen} aria-controls={`ug-faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{item.q}</span>
                <span className="ug-faq__icon">
                  <PlusIcon size={16} />
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

export function UsageGuide() {
  const t = useT();
  const g = t.guide;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
    const onLenisScroll = () => ScrollTrigger.update();
    lenis?.on?.("scroll", onLenisScroll);
    const splits: SplitText[] = [];
    const split = (el: Element, vars: SplitText.Vars) => {
      const s = new SplitText(el, vars);
      splits.push(s);
      return s;
    };

    const ctx = gsap.context(() => {
      // Intro plays on load: label, title letters, lead lines, facts.
      const intro = gsap.timeline({ delay: 0.3 });
      intro.fromTo(".ug-intro .ug-eyebrow", { autoAlpha: 0, x: -12 }, { autoAlpha: 1, x: 0, duration: 0.7, ease: "power3.out" }, 0);
      root.querySelectorAll(".ug-title__line").forEach((line, i) => {
        const s = split(line, { type: "words,chars", mask: "chars" });
        intro.fromTo(s.chars, { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.035 }, 0.15 + i * 0.16);
      });
      const lead = root.querySelector(".ug-intro__lead");
      if (lead) {
        const s = split(lead, { type: "lines", mask: "lines" });
        intro.fromTo(s.lines, { yPercent: 100 }, { yPercent: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }, 0.7);
      }
      intro.fromTo(".ug-fact", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, 1);

      // Section entrances on scroll.
      root.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
        if (el.closest(".ug-intro")) return;
        const s = split(el, { type: "lines", mask: "lines" });
        gsap.fromTo(s.lines, { yPercent: 100 }, { yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.07, scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      root.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
        if (el.closest(".ug-intro")) return;
        gsap.fromTo(el, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
      });
      root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(
          group.children,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: group, start: "top 85%" } },
        );
      });

      // Process: the olive node fills in and the dashed rail draws as each step arrives.
      root.querySelectorAll<HTMLElement>(".ug-process__step").forEach((step) => {
        gsap.fromTo(step.querySelector(".ug-process__node"), { scale: 0.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.7, ease: "back.out(1.7)", scrollTrigger: { trigger: step, start: "top 80%" } });
        gsap.fromTo(step.querySelector(".ug-process__rail"), { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: step, start: "top 70%", end: "bottom 70%", scrub: true } });
      });

      // Numbers count up when their table arrives.
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count ?? "0");
        const decimals = (el.dataset.count ?? "").split(".")[1]?.length ?? 0;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals);
          },
        });
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    void document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      lenis?.off?.("scroll", onLenisScroll);
      ctx.revert();
      splits.forEach((s) => s.revert());
    };
  }, []);

  return (
    <div ref={rootRef} className="co-page ug">
      {/* Intro — text only */}
      <section className="ug-intro" data-header-surface="light">
        <p className="ug-eyebrow">
          <span>{g.eyebrow}</span>
          {g.eyebrowTitle}
        </p>
        <h1 className="ug-title">
          {g.titleLines.map((line, i) => (
            <span key={line} className={`ug-title__line${i === g.titleLines.length - 1 ? " ug-title__line--soft" : ""}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="ug-intro__lead">{g.lead}</p>
        <dl className="ug-facts">
          {g.facts.map((f, i) => (
            <div key={f.label} className="ug-fact">
              <Tile icon={factIcons[i]} size={26} />
              <div>
                <dt>{f.label}</dt>
                <dd>
                  {f.value}
                  {f.unit ? <span>{f.unit}</span> : null}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      <div className="ug-wrap">
        {/* 01 · Journey */}
        <section className="ug-block" data-header-surface="light">
          <Head n="01" title={g.sections.journey.title} lead={g.sections.journey.lead} />
          <ol className="ug-journey" data-stagger>
            {g.journey.map((j, i) => (
              <li key={j.title} className="ug-journey__item">
                <Tile icon={journeyIcons[i]} size={26} />
                <p className="ug-journey__n">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="ug-h3">{j.title}</h3>
                <p>{j.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 02 · Who it is for */}
        <section className="ug-block" data-header-surface="light">
          <Head n="02" title={g.sections.who.title} lead={g.sections.who.lead} />
          <div className="ug-who">
            <ul className="ug-herd" data-stagger>
              {g.herd.map((label, i) => (
                <li key={label}>
                  <Tile icon={herdIcons[i]} size={24} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <div className="ug-who__cols" data-stagger>
              {g.who.map((card, i) => (
                <article key={card.title} className="ug-card">
                  <Tile icon={whoIcons[i]} size={24} tone="soft" />
                  <h3 className="ug-h3">{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 · The process */}
        <section className="ug-block" data-header-surface="light">
          <Head n="03" title={g.sections.process.title} lead={g.sections.process.lead} />
          <ol className="ug-process">
            {g.process.map((p, i) => (
              <li key={p.title} className="ug-process__step">
                <div className="ug-process__side">
                  <div className="ug-process__node">
                    {(() => {
                      const StepIcon = processIcons[i];
                      return <StepIcon size={26} />;
                    })()}
                  </div>
                  <span className="ug-process__rail" aria-hidden />
                </div>
                <div className="ug-process__body">
                  <p className="ug-process__when" data-fade>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {p.when}
                  </p>
                  <h3 className="ug-process__title" data-lines>
                    {p.title}
                  </h3>
                  <p className="ug-process__text" data-lines>
                    {rich(p.body)}
                  </p>
                  {p.note ? (
                    <div className="ug-note" data-fade>
                      <Tile icon={AdvisorIcon} size={18} tone="soft" />
                      <p>{p.note}</p>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 04 · The ration */}
        <section className="ug-block" data-header-surface="light">
          <Head n="04" title={g.sections.ration.title} lead={g.sections.ration.lead} />
          <ul className="ug-ration" data-stagger>
            {g.ration.map((r, i) => (
              <li key={r.name} className="ug-ration__row">
                <Tile icon={rationIcons[i]} size={22} tone="soft" />
                <div>
                  <p className="ug-ration__name">{r.name}</p>
                  <p className="ug-ration__note">{r.note}</p>
                </div>
                <span className="ug-ration__amount">{r.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 05 · Formats */}
        <section className="ug-block" data-header-surface="light">
          <Head n="05" title={g.sections.formats.title} lead={g.sections.formats.lead} />
          <div className="ug-packs" data-stagger>
            {g.formats.map((f, i) => (
              <article key={f.label} className={`ug-pack ug-pack--${formatMedia[i].kind}`}>
                <Image src={formatMedia[i].src} alt="" width={formatMedia[i].w} height={formatMedia[i].h} unoptimized className="ug-pack__shot" />
                <div className="ug-pack__card">
                  <span className="ug-pack__meta">{f.meta}</span>
                  <p className="ug-pack__label">{f.label}</p>
                  <p className="ug-pack__note">{f.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 06 · Why it works */}
        <section className="ug-block" data-header-surface="light">
          <Head n="06" title={g.sections.why.title} lead={g.sections.why.lead} />
          <div className="ug-why">
            <article className="ug-why__card ug-why__card--dark">
              <Tile icon={LeafIcon} size={24} />
              <h3 className="ug-h3">{g.keyPointsTitle}</h3>
              <ol data-stagger>
                {g.pillars.map((p, i) => (
                  <li key={p}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {p}
                  </li>
                ))}
              </ol>
            </article>
            <article className="ug-why__card">
              <Tile icon={FloraIcon} size={24} />
              <h3 className="ug-h3">{g.objectivesTitle}</h3>
              <ul className="ug-chips" data-stagger>
                {g.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <p className="ug-why__foot" data-lines>
                {g.whyFoot}
              </p>
            </article>
          </div>
        </section>

        {/* 07 · Results */}
        <section className="ug-block" data-header-surface="light">
          <Head n="07" title={g.sections.results.title} lead={g.sections.results.lead} />
          <div className="ug-results">
            <article className="ug-table" data-fade>
              <header className="ug-table__head">
                <Tile icon={ScaleIcon} size={22} />
                <div>
                  <h3 className="ug-h3">{g.results.inraTitle}</h3>
                  <p>{g.results.inraSub}</p>
                </div>
              </header>
              <div className="ug-table__cols">
                <span />
                <span>{g.results.day0}</span>
                <span>{g.results.day14}</span>
              </div>
              {inraValues.map((r, i) => (
                <div key={g.results.inraRows[i]} className="ug-table__row">
                  <span>{g.results.inraRows[i]}</span>
                  <span>{r.a}</span>
                  <strong data-count={r.b}>{r.b}</strong>
                </div>
              ))}
              <p className="ug-table__foot" data-lines>
                {g.results.inraFoot}
              </p>
            </article>
            <div className="ug-results__side" data-stagger>
              <article className="ug-table ug-table--compact">
                <header className="ug-table__head">
                  <Tile icon={MeatIcon} size={22} />
                  <h3 className="ug-h3">{g.results.beefTitle}</h3>
                </header>
                {g.results.beef.map((r) => (
                  <div key={r.k} className="ug-table__row ug-table__row--2">
                    <span>{r.k}</span>
                    <strong>{r.v}</strong>
                  </div>
                ))}
              </article>
              <article className="ug-table ug-table--compact">
                <header className="ug-table__head">
                  <Tile icon={MilkIcon} size={22} />
                  <h3 className="ug-h3">{g.results.dairyTitle}</h3>
                </header>
                {g.results.dairy.map((r) => (
                  <div key={r.k} className="ug-table__row ug-table__row--2">
                    <span>{r.k}</span>
                    <strong>{r.v}</strong>
                  </div>
                ))}
              </article>
            </div>
          </div>
          <div className="ug-care" data-stagger>
            {g.care.map((card, i) => (
              <article key={card.title} className="ug-card">
                <Tile icon={careIcons[i]} size={24} tone="soft" />
                <h3 className="ug-h3">{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 08 · Quick answers */}
        <section className="ug-block ug-block--last" data-header-surface="light">
          <Head n="08" title={g.sections.faq.title} />
          <Faq />
        </section>
      </div>

      {/* Closing */}
      <section className="ug-close" data-header-surface="dark">
        <div>
          <h2 className="ug-close__title" data-lines>
            {g.close.title}
          </h2>
          <p className="ug-close__lead" data-lines>
            {g.close.lead}
          </p>
        </div>
        <div className="ug-close__actions" data-stagger>
          <Link href="/contact" className="ghost-fill-btn ghost-fill-btn--light">
            {t.common.talkToTeam}
          </Link>
          <Link href="/products/aliplus" className="ghost-line-btn ghost-line-btn--light">
            {t.common.seeProduct}
          </Link>
        </div>
      </section>
    </div>
  );
}
