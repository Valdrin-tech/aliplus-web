import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { productLines } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fiches produits",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Nutritionnelle, minérale, végétale"
        description="Trois gammes complémentaires pour construire une stratégie nutrition cohérente sur l’exploitation."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <ul className="space-y-6">
          {productLines.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="card-surface group flex flex-col gap-6 rounded-[2rem] p-10 transition hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-olive">
                    {p.category}
                  </p>
                  <h2 className="mt-2 font-display text-4xl font-medium text-dark">
                    {p.name}
                  </h2>
                  <p className="mt-4 max-w-xl text-muted">{p.excerpt}</p>
                </div>
                <span className="text-sm font-medium text-accent group-hover:underline">
                  Fiche produit →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
