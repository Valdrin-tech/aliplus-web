import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/Button";
import { localePage, type LocaleParams } from "@/i18n/page-params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.testimonials.title };
}

export default async function TestimonialsPage({ params }: { params: LocaleParams }) {
  const { t } = await localePage(params);
  const s = t.testimonials;
  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} description={s.description} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {s.items.map((item) => (
            <blockquote key={item.author} className="card-surface rounded-[1.75rem] p-10">
              <WordReveal
                className="font-display text-2xl leading-snug text-dark"
                text={`“${item.quote}”`}
                step={0.028}
              />
              <footer className="mt-8 text-sm">
                <span className="font-medium">{item.author}</span>
                <span className="text-muted"> · {item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-16 text-center text-muted">{s.visitPrompt}</p>
        <div className="mt-6 text-center">
          <Button href="/contact" variant="primary">
            {s.visitCta}
          </Button>
        </div>
      </section>
    </>
  );
}
