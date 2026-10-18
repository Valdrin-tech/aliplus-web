import Image from "next/image";
import Link from "next/link";
import { animalCategories } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function AnimalCategories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading
        eyebrow="Espèces & filières"
        title="Nutrition adaptée à chaque élevage"
        description="Lait, viande, allaitement, ovins et caprins — une même philosophie : santé ruménale, performance et coûts maîtrisés."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
        {animalCategories.map((cat, i) => (
          <article
            key={cat.id}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-dark/8 bg-surface ${
              i === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
            }`}
          >
            <div
              className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10] lg:aspect-auto lg:min-h-[480px]" : "aspect-[16/10]"}`}
            >
              <Image
                src={cat.image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
              <h3 className="font-display text-2xl font-medium md:text-3xl">
                {cat.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-cream/80">
                {cat.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        <Link href="/contact" className="font-medium text-accent hover:underline">
          Demandez une estimation
        </Link>{" "}
        selon votre cheptel.
      </p>
      </div>
    </section>
  );
}
