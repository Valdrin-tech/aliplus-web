import Link from "next/link";
import { newsItems } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function NewsPreview() {
  return (
    <section
      id="actualites"
      className="bg-white scroll-mt-28 pb-24 pt-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <SectionHeading eyebrow="Agenda" title="Salons & actualités" />
      <ul className="mt-10 divide-y divide-olive/20">
        {newsItems.map((item) => (
          <li key={item.title}>
            <article className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <time className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {item.date}
                </time>
                <h3 className="mt-2 font-display text-2xl font-medium text-dark transition-colors group-hover:text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 text-sm font-semibold text-accent"
              >
                Nous rencontrer →
              </Link>
            </article>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
