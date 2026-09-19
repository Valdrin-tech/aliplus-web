import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  productDetails,
  type ProductSlug,
} from "@/lib/product-details";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  // `aliplus` has its own dedicated route at /products/aliplus
  return Object.keys(productDetails)
    .filter((slug) => slug !== "aliplus")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productDetails[slug as ProductSlug];
  if (!product) return { title: "Produit" };
  return { title: product.name, description: product.intro };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productDetails[slug as ProductSlug];
  if (!product) notFound();

  return (
    <>
      <div className="relative min-h-[420px] bg-dark">
        <Image
          src={product.image}
          alt=""
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-10 lg:pt-36">
          <p className="text-xs uppercase tracking-[0.24em] text-cream/55">
            {product.category}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium text-cream md:text-5xl lg:text-6xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75">{product.intro}</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {product.sections.map((section, i) => (
            <article
              key={section.title}
              className="rounded-[1.5rem] border border-dark/8 bg-surface p-8"
            >
              <span className="font-display text-4xl text-soft">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 font-display text-xl font-medium text-dark">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button href="/calculator" variant="accent">
            Estimer ma ration
          </Button>
          <Button href="/contact" variant="secondary">
            Demander une fiche PDF
          </Button>
        </div>
      </section>
    </>
  );
}
