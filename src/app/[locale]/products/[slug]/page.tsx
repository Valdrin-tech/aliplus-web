import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WordReveal } from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/Button";
import { locales } from "@/i18n/config";
import { localePage } from "@/i18n/page-params";

type Props = { params: Promise<{ locale: string; slug: string }> };

const images: Record<string, string> = {
  alimaya: "/bull-resting.jpg",
  aliplantes: "/cattle-barn-resting.jpg",
};

export async function generateStaticParams() {
  // `aliplus` has its own dedicated route at /products/aliplus
  return locales.flatMap((locale) => Object.keys(images).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { t } = await localePage(params);
  const product = t.productDetails[slug];
  if (!product) return { title: t.meta.pages.product.title };
  return { title: product.name, description: product.intro };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const { t } = await localePage(params);
  const product = t.productDetails[slug];
  if (!product) notFound();

  return (
    <>
      <div className="hero-scene relative min-h-[420px] overflow-hidden bg-dark">
        <Image
          src={images[slug]}
          alt=""
          fill
          className="hero-scene__media object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="hero-scene__veil absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="hero-scene__copy relative mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-10 lg:pt-36">
          <p className="text-xs uppercase tracking-[0.24em] text-cream/55">{product.category}</p>
          <WordReveal
            as="h1"
            className="mt-4 max-w-2xl font-display text-4xl font-medium text-cream md:text-5xl lg:text-6xl"
            text={product.name}
            slow
            delay={0.32}
          />
          <WordReveal className="mt-6 max-w-xl text-lg text-cream/75" text={product.intro} slow delay={0.7} />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {product.sections.map((section, i) => (
            <article key={section.title} className="rounded-[1.5rem] border border-dark/8 bg-surface p-8">
              <span className="font-display text-4xl text-soft">{String(i + 1).padStart(2, "0")}</span>
              <WordReveal
                as="h2"
                className="mt-4 font-display text-xl font-medium text-dark"
                text={section.title}
                step={0.04}
              />
              <WordReveal
                className="mt-3 text-sm leading-relaxed text-muted"
                text={section.body}
                delay={0.1}
                step={0.022}
              />
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button href="/contact" variant="accent">
            {t.common.estimate}
          </Button>
          <Button href="/contact" variant="secondary">
            {t.common.pdf}
          </Button>
        </div>
      </section>
    </>
  );
}
