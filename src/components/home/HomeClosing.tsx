import Image from "next/image";
import Link from "next/link";
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

const integratePoints = [
  { icon: "mix" as const, label: "Mixes with wheat, barley, maize and other farm cereals" },
  { icon: "drop" as const, label: "22 kg per ton — no new feeding system required" },
  { icon: "shield" as const, label: "Stable through mixing, storage and daily feeding" },
  { icon: "layers" as const, label: "Fits existing rations for cattle, sheep and goats" },
  { icon: "spark" as const, label: "Advisor support for transition and fine-tuning" },
];

function IntegrateIcon({ name }: { name: (typeof integratePoints)[number]["icon"] }) {
  if (name === "mix") return <MixIcon />;
  if (name === "drop") return <DropIcon />;
  if (name === "shield") return <ShieldIcon />;
  if (name === "layers") return <LayersIcon />;
  return <SparkIcon />;
}

export function HomeClosing() {
  return (
    <>
      <section className="field-proven">
        <div className="field-proven__inner">
          <header className="field-proven__head">
            <div>
              <WordReveal
                as="h2"
                className="field-proven__title"
                text="Field-Proven."
                step={0.038}
              />
              <WordReveal
                className="field-proven__sub"
                text="Across herds, cereals & farms."
                delay={0.1}
                step={0.04}
              />
            </div>
            <Link href="/products/aliplus" className="ghost-line-btn field-proven__cta">
              See the product
            </Link>
          </header>

          <FieldProvenCards />
          <WordReveal
            className="field-proven__foot"
            text="Fourteen natural components, mixed at 22 kg per ton and matured for 14 days — used by farms feeding Aliplus every day."
            delay={0.12}
            step={0.022}
          />
        </div>
      </section>

      <section className="integrate">
        <div className="integrate__wrap">
          <div className="integrate__copy">
            <div className="integrate__heading">
              <WordReveal
                as="h2"
                className="integrate__title"
                text={"Effortless to\nintegrate"}
                step={0.038}
              />
              <WordReveal
                className="integrate__lead"
                text="Aliplus is designed to slip into existing routines without disruption. It does not replace nutrition — it helps animals use more of the cereals already on the farm."
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
              → Refer to the <Link href="/usage-guide">Usage Guide</Link> or{" "}
              <Link href="/contact">consult</Link> the Aliplus livestock
              nutrition team.
            </p>
          </div>
          <div className="integrate__media">
            <Image
              src="/guide-grains.jpg"
              alt="Cereals ready to mix with Aliplus"
              fill
              className="object-cover object-center"
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="formats">
        <div className="formats__inner">
          <div className="formats__intro">
            <WordReveal
              as="h2"
              className="formats__title"
              text="Formats & access"
              step={0.038}
            />
            <WordReveal
              className="formats__lead"
              text="Start with a first mix on the cereals you already grow, then move to a full-farm ration. Advisors in Kosova help you plan the transition."
              delay={0.12}
              step={0.024}
            />
            <div className="formats__actions">
              <Link href="/contact" className="ghost-fill-btn">
                · Request a sample ·
              </Link>
              <Link href="/contact" className="ghost-line-btn">
                · Talk to our team ·
              </Link>
            </div>
          </div>

          <article className="format-card">
            <div className="format-card__top">
              <WordReveal as="h3" text="Starter mix" step={0.04} />
              <WordReveal text="Coverage — first trials" delay={0.08} step={0.03} />
            </div>
            <WordReveal
              className="format-card__meta"
              text="Ideal to begin on one group or one cereal"
              delay={0.12}
              step={0.024}
            />
            <div className="format-card__photo">
              <Image
                src="/aliplus-wheat.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 899px) 90vw, 28vw"
              />
            </div>
          </article>

          <article className="format-card">
            <div className="format-card__top">
              <WordReveal as="h3" text="Full farm" step={0.04} />
              <WordReveal text="Coverage — whole herd" delay={0.08} step={0.03} />
            </div>
            <WordReveal
              className="format-card__meta"
              text="Ideal for mid- to large-scale operations"
              delay={0.12}
              step={0.024}
            />
            <div className="format-card__photo">
              <Image
                src="/float-cereals.jpg"
                alt=""
                fill
                className="object-cover object-center"
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
            text="Feed is your biggest cost. Aliplus turns it into your biggest advantage."
            step={0.038}
          />
          <WordReveal
            className="home-cta__lead"
            text="Already used by farms across the region. Ready for your operation."
            delay={0.16}
            step={0.028}
          />
          <div className="home-cta__actions">
            <Link href="/products/aliplus" className="ghost-fill-btn ghost-fill-btn--light">
              · See the product ·
            </Link>
            <Link href="/contact" className="ghost-line-btn ghost-line-btn--light">
              · Talk to our team ·
            </Link>
          </div>
        </div>
        <div className="home-cta__mosaic" aria-hidden>
          <div className="home-cta__shot home-cta__shot--a">
            <Image src="/aliplus-wheat-ears.jpg" alt="" fill className="object-cover" sizes="200px" />
          </div>
          <div className="home-cta__shot home-cta__shot--b">
            <Image src="/hero-cows.jpg" alt="" fill className="object-cover object-[center_70%]" sizes="280px" />
          </div>
          <div className="home-cta__shot home-cta__shot--c">
            <Image src="/guide-feeding.jpg" alt="" fill className="object-cover" sizes="180px" />
          </div>
        </div>
      </section>
    </>
  );
}
