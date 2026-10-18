"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { FieldProvenCards } from "@/components/home/FieldProvenCards";
import { WordReveal } from "@/components/motion/WordReveal";

function MixIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4.5 17.5h15" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path
        d="M7 17.5V9.2c0-.7.4-1.3 1-1.6l3.4-1.7c.4-.2.8-.2 1.2 0l3.4 1.7c.6.3 1 .9 1 1.6v8.3"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M9.2 11.2h5.6M9.2 14h5.6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.8s5.4 5.8 5.4 9.6A5.4 5.4 0 1 1 6.6 13.4C6.6 9.6 12 3.8 12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.6 18.6 6v5.8c0 4-2.6 6.9-6.6 8.2-4-1.3-6.6-4.2-6.6-8.2V6L12 3.6Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9.2" cy="13.2" r="3.4" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="14.8" cy="10.8" r="3.4" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8.2" cy="14.4" r="2.5" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="15.8" cy="14.4" r="2.5" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="12" cy="8.2" r="2.5" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

const integrateIcons = ["mix", "drop", "shield", "layers", "spark"] as const;

function IntegrateIcon({ name }: { name: (typeof integrateIcons)[number] }) {
  if (name === "mix") return <MixIcon />;
  if (name === "drop") return <DropIcon />;
  if (name === "shield") return <ShieldIcon />;
  if (name === "layers") return <LayersIcon />;
  return <SparkIcon />;
}

export function HomeClosing() {
  const t = useT();
  const fp = t.home.fieldProven;
  const ig = t.home.integrate;
  const fm = t.home.formats;
  const cta = t.home.cta;
  const integratePoints = ig.points.map((label, i) => ({ icon: integrateIcons[i] ?? "spark", label }));
  return (
    <>
      <section className="field-proven">
        <div className="field-proven__inner">
          <header className="field-proven__head">
            <div>
              <WordReveal
                as="h2"
                className="field-proven__title"
                text={fp.title}
                step={0.038}
              />
              <WordReveal
                className="field-proven__sub"
                text={fp.sub}
                delay={0.1}
                step={0.04}
              />
            </div>
            <Link href="/usage-guide" className="ghost-line-btn field-proven__cta">
              {fp.cta}
            </Link>
          </header>

          <FieldProvenCards />
        </div>
      </section>

      <section className="integrate">
        <div className="integrate__wrap">
          <div className="integrate__copy">
            <div className="integrate__heading">
              <WordReveal
                as="h2"
                className="integrate__title"
                text={ig.title}
                step={0.038}
              />
              <WordReveal
                className="integrate__lead"
                text={ig.lead}
                delay={0.12}
                step={0.024}
              />
            </div>
            <ul className="integrate__points">
              {integratePoints.map((point) => (
                <li key={point.label}>
                  <span className="integrate__icon">
                    <IntegrateIcon name={point.icon} />
                  </span>
                  <span>{point.label}</span>
                </li>
              ))}
            </ul>
            <p className="integrate__link">
              {ig.linkBefore} <Link href="/usage-guide">{ig.linkGuide}</Link> {ig.linkOr}{" "}
              <Link href="/contact">{ig.linkConsult}</Link> {ig.linkAfter}
            </p>
          </div>
          <div className="integrate__media">
            <div className="integrate__media-img">
              <Image
                src="/aliplus-granules.jpg"
                alt={ig.mediaAlt}
                fill
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
            <div className="integrate__media-fade" aria-hidden />
            <p className="integrate__media-label">
              <span>Aliplus</span>
              {ig.labelText}
            </p>
          </div>
        </div>
      </section>

      <section className="formats">
        <div className="formats__inner">
          <div className="formats__intro">
            <WordReveal
              as="h2"
              className="formats__title"
              text={fm.title}
              step={0.038}
            />
            <WordReveal
              className="formats__lead"
              text={fm.lead}
              delay={0.12}
              step={0.024}
            />
            <div className="formats__actions">
              <Link href="/contact" className="ghost-fill-btn">
                {t.common.requestSample}
              </Link>
              <Link href="/contact" className="ghost-line-btn">
                {t.common.talkToTeam}
              </Link>
            </div>
          </div>

          <article className="format-card">
            <div className="format-card__top">
              <WordReveal as="h3" text={fm.cards[0].title} step={0.04} />
              <WordReveal text={fm.cards[0].coverage} delay={0.08} step={0.03} />
            </div>
            <WordReveal
              className="format-card__meta"
              text={fm.cards[0].meta}
              delay={0.12}
              step={0.024}
            />
            <div className="format-card__photo">
              <Image
                src="/treated-cereals-pile.jpg"
                alt={fm.cards[0].alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 899px) 90vw, 28vw"
              />
            </div>
          </article>

          <article className="format-card">
            <div className="format-card__top">
              <WordReveal as="h3" text={fm.cards[1].title} step={0.04} />
              <WordReveal text={fm.cards[1].coverage} delay={0.08} step={0.03} />
            </div>
            <WordReveal
              className="format-card__meta"
              text={fm.cards[1].meta}
              delay={0.12}
              step={0.024}
            />
            <div className="format-card__photo">
              <Image
                src="/farm-bull-feeding.jpg"
                alt={fm.cards[1].alt}
                fill
                className="object-cover object-[40%_45%]"
                sizes="(max-width: 899px) 90vw, 28vw"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__copy">
          <WordReveal
            as="h2"
            className="home-cta__title"
            text={cta.title}
            step={0.038}
          />
          <WordReveal
            className="home-cta__lead"
            text={cta.lead}
            delay={0.16}
            step={0.028}
          />
          <div className="home-cta__actions">
            <Link href="/products/aliplus" className="ghost-fill-btn ghost-fill-btn--light">
              {t.common.seeProduct}
            </Link>
            <Link href="/contact" className="ghost-line-btn ghost-line-btn--light">
              {t.common.talkToTeam}
            </Link>
          </div>
        </div>
        <div className="home-cta__mosaic" aria-hidden>
          <div className="home-cta__shot home-cta__shot--a">
            <Image src="/treated-cereals-pile.jpg" alt="" fill className="object-cover" sizes="200px" />
          </div>
          <div className="home-cta__shot home-cta__shot--b">
            <Image src="/aliplus-kosova-site.jpg" alt="" fill className="object-cover object-[70%_55%]" sizes="280px" />
          </div>
          <div className="home-cta__shot home-cta__shot--c">
            <Image src="/farm-bull-feeding.jpg" alt="" fill className="object-cover object-[40%_45%]" sizes="180px" />
          </div>
        </div>
      </section>
    </>
  );
}
