import Link from "next/link";
import { productLines } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ProductLines() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gammes"
            title="Trois piliers complémentaires"
            description="Nutrition Aliplus, minéraux Alimaya et programme végétal Aliplantes — orchestrés avec vos conseillers éleveurs."
          />
          <Link
            href="/products"
            className="shrink-0 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Voir toutes les gammes →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {productLines.map((p, idx) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="card-surface group flex flex-col rounded-[1.5rem] p-8 transition hover:-translate-y-1 hover:border-accent/25"
            >
              <span
                className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                  idx === 0 ? "text-accent" : "text-forest"
                }`}
              >
                {p.category}
              </span>
              <h3 className="mt-4 font-display text-3xl font-medium text-dark">
                {p.name}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {p.excerpt}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-olive/30 bg-soft px-3 py-1 text-xs text-forest"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <span
                className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${
                  idx === 0 ? "text-accent" : "text-forest"
                }`}
              >
                Explorer
                <span aria-hidden className="transition group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
