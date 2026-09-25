import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { conceptPillars, formulaComponents, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Concept Aliplus",
  description:
    "Nutrition vivante, sensiculture et aliplusage — comprendre la formule et les principes de fonctionnement.",
};

export default function ConceptPage() {
  return (
    <>
      <PageHero
        eyebrow="Concept"
        title="Aliplus, bio-dynamiseur créé par un éleveur"
        description="Lancé en 2013, Aliplus combine 14 composants naturels pour optimiser les rations, le microbiote et la valorisation des céréales locales — avec moins d’acidose et moins de correcteurs azotés."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem]">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2400&auto=format&fit=crop"
            alt="Paysage agricole et cultures"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <WordReveal
              as="h2"
              className="font-display text-3xl font-medium text-dark"
              text="Sensiculture & nutrition vivante"
              step={0.038}
            />
            <WordReveal
              className="mt-4 leading-relaxed text-muted"
              text="Aliplus place les cycles vertueux entre animaux, sols et plantes au centre de la pratique d’élevage. Production locale, circuits courts et goût authentique — pour des filières laitières et viande responsables."
              delay={0.1}
              step={0.022}
            />
            <WordReveal
              className="mt-4 leading-relaxed text-muted"
              text="Depuis 2019, l’écosystème s’étend vers la vente directe — restaurant néo-paysan et boutiques de ferme — toujours au service des producteurs français."
              delay={0.16}
              step={0.022}
            />
          </div>
          <div className="rounded-[1.5rem] bg-dark p-8 text-cream lg:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-cream/50">
              Présentation
            </p>
            <WordReveal
              className="mt-4 font-display text-2xl"
              text="Par Samuel Michaud — éleveur & créateur d’Aliplus"
              delay={0.08}
              step={0.032}
            />
            <p className="mt-4 text-sm text-cream/70">
              Audio et vidéos de terrain disponibles sur demande lors d’une visite
              à la ferme pilote ({site.address.city}).
            </p>
            <Button href="/contact" variant="accent" className="mt-8">
              Prendre rendez-vous
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <WordReveal
            as="h2"
            className="font-display text-3xl font-medium text-dark"
            text="Principes de fonctionnement"
            step={0.038}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {conceptPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.5rem] border border-dark/8 bg-surface p-8"
              >
                <WordReveal
                  as="h3"
                  className="font-display text-xl font-medium"
                  text={pillar.title}
                  step={0.04}
                />
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

        <div className="mt-20 rounded-[2rem] border border-dark/8 bg-soft/50 p-10 lg:p-14">
          <WordReveal
            as="h2"
            className="font-display text-3xl font-medium text-dark"
            text="La formule en 14 composants"
            step={0.038}
          />
          <WordReveal
            className="mt-4 max-w-2xl text-muted"
            text="Aliplus hydrolyse partiellement l’amidon et la cellulose, stabilise la céréale aliplusée et augmente la valeur nutritionnelle (acides aminés, protéine, PDI)."
            delay={0.12}
            step={0.022}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {formulaComponents.map((c) => (
              <li
                key={c}
                className="rounded-full border border-forest/20 bg-surface px-4 py-2 text-sm"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
