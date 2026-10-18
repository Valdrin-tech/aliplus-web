import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/Button";
import { localePage, type LocaleParams } from "@/i18n/page-params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.concept.title, description: t.meta.pages.concept.description };
}

export default async function ConceptPage({ params }: { params: LocaleParams }) {
  const { t } = await localePage(params);
  const c = t.concept;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} description={c.description} />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem]">
          <Image src="/treated-cereals-pile.jpg" alt={c.imageAlt} fill className="object-cover" sizes="100vw" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <WordReveal as="h2" className="font-display text-3xl font-medium text-dark" text={c.livingTitle} step={0.038} />
            <WordReveal className="mt-4 leading-relaxed text-muted" text={c.livingP1} delay={0.1} step={0.022} />
            <WordReveal className="mt-4 leading-relaxed text-muted" text={c.livingP2} delay={0.16} step={0.022} />
          </div>
          <div className="rounded-[1.5rem] bg-dark p-8 text-cream lg:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-cream/50">{c.presentationEyebrow}</p>
            <WordReveal className="mt-4 font-display text-2xl" text={c.presentationTitle} delay={0.08} step={0.032} />
            <p className="mt-4 text-sm text-cream/70">{c.presentationBody}</p>
            <Button href="/contact" variant="accent" className="mt-8">
              {t.common.bookAppointment}
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <WordReveal as="h2" className="font-display text-3xl font-medium text-dark" text={c.principlesTitle} step={0.038} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.5rem] border border-dark/8 bg-surface p-8">
                <WordReveal as="h3" className="font-display text-xl font-medium" text={pillar.title} step={0.04} />
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-accent">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-dark/8 bg-surface p-10 lg:p-14">
          <WordReveal as="h2" className="font-display text-3xl font-medium text-dark" text={c.formulaTitle} step={0.038} />
          <WordReveal className="mt-4 max-w-2xl text-muted" text={c.formulaBody} delay={0.12} step={0.022} />
          <ul className="mt-8 flex flex-wrap gap-3">
            {c.formulaComponents.map((item) => (
              <li key={item} className="rounded-full border border-forest/20 bg-surface px-4 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
