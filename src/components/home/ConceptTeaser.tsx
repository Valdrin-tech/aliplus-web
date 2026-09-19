import Image from "next/image";
import { conceptPillars, formulaComponents } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ConceptTeaser() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="editorial-grid items-center gap-12">
        <div className="col-span-12 lg:col-span-5">
          <SectionHeading
            eyebrow="Aliplusage"
            title="Comment ajouter Aliplus à vos céréales ?"
            description="Un processus simple à la ferme : mélange, stockage stable, ration progressive. Vous produisez un aliment premium à partir de vos ressources."
          />
          <ol className="mt-10 space-y-6 border-l border-olive/30 pl-6">
            {[
              "Analyse de votre contexte et de vos céréales disponibles",
              "Dosage Aliplus et plan de transition sur plusieurs semaines",
              "Suivi performance, santé et ajustements avec un conseiller",
            ].map((step, i) => (
              <li key={step} className="relative text-muted">
                <span
                  className={`absolute -left-[1.65rem] flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium text-white ${
                    i === 1 ? "bg-accent" : "bg-forest"
                  }`}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <Button href="/concept" variant="primary" className="mt-10">
            Plonger dans le concept
          </Button>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2400&auto=format&fit=crop"
              alt="Champs et agriculture durable"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {conceptPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-olive/25 bg-surface p-6"
              >
                <h3 className="font-display text-lg font-medium text-dark">
                  {pillar.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {pillar.points.slice(0, 2).map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-olive">·</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-[2rem] bg-gradient-to-br from-dark via-[#2a4018] to-[#4a1a36] p-10 text-cream lg:p-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-olive">
              La formule
            </p>
            <p className="mt-3 font-display text-3xl font-medium md:text-4xl">
              Synergie de composants naturels
            </p>
          </div>
          <ul className="flex flex-wrap gap-3 lg:max-w-xl lg:justify-end">
            {formulaComponents.map((c) => (
              <li
                key={c}
                className="rounded-full border border-olive/35 bg-white/5 px-4 py-2 text-sm text-cream/90"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
