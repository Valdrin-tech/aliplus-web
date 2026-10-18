import type { Metadata } from "next";
import { Link } from "@/i18n/Link";
import { PageHero } from "@/components/layout/PageHero";
import { WordReveal } from "@/components/motion/WordReveal";
import { localePage, type LocaleParams } from "@/i18n/page-params";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { t } = await localePage(params);
  return { title: t.meta.pages.products.title };
}

export default async function ProductsPage({ params }: { params: LocaleParams }) {
  const { t } = await localePage(params);
  const c = t.catalog;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} description={c.description} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <ul className="space-y-6">
          {c.lines.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="card-surface group flex flex-col gap-6 rounded-[2rem] p-10 transition hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-olive">{p.category}</p>
                  <WordReveal
                    as="h2"
                    className="mt-2 font-display text-4xl font-medium text-dark"
                    text={p.name}
                    step={0.038}
                  />
                  <WordReveal className="mt-4 max-w-xl text-muted" text={p.excerpt} delay={0.1} step={0.024} />
                </div>
                <span className="text-sm font-medium text-accent group-hover:underline">{c.more}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
