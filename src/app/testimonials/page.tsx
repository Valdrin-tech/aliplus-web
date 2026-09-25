import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { testimonials } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Témoignages",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Éleveurs"
        title="Témoignages lait, viande et consommateurs"
        description="Retours d’exploitations qui ont adopté l’aliplusage — performance, santé et simplicité au quotidien."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="card-surface rounded-[1.75rem] p-10"
            >
              <WordReveal
                className="font-display text-2xl leading-snug text-dark"
                text={`“${t.quote}”`}
                step={0.028}
              />
              <footer className="mt-8 text-sm">
                <span className="font-medium">{t.author}</span>
                <span className="text-muted"> · {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-16 text-center text-muted">
          Visitez la ferme pilote pour échanger avec d’autres éleveurs.
        </p>
        <div className="mt-6 text-center">
          <Button href="/contact" variant="primary">
            Demander une visite
          </Button>
        </div>
      </section>
    </>
  );
}
