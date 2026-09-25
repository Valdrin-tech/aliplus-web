import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Questions fréquentes",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="FAQ — utilisation d’Aliplus"
        description="Transition, espèces, lait, coûts et différences vs aliments conventionnels."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <FaqAccordion />
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-forest to-accent-deep p-8 text-center text-cream">
          <WordReveal
            className="font-display text-xl"
            text="Une question spécifique à votre ration ?"
            step={0.038}
          />
          <Button href="/contact" variant="accent" className="mt-6">
            Parler à un conseiller
          </Button>
        </div>
      </section>
    </>
  );
}
