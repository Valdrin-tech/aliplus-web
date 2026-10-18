import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { localePage, type LocaleParams } from "@/i18n/page-params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.faq.title };
}

export default async function FaqPage({ params }: { params: LocaleParams }) {
  const { t } = await localePage(params);
  const f = t.faq;
  return (
    <>
      <PageHero eyebrow={f.eyebrow} title={f.title} description={f.description} />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FaqAccordion />
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-forest to-accent-deep p-8 text-center text-cream">
          <WordReveal className="font-display text-xl" text={f.question} step={0.038} />
          <Button href="/contact" variant="accent" className="mt-6">
            {t.common.talkAdvisor}
          </Button>
        </div>
      </section>
    </>
  );
}
