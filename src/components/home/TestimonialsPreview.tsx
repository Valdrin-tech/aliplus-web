import Link from "next/link";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function TestimonialsPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Terrain"
            title="Ce que disent les éleveurs"
          />
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Tous les témoignages
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className={`flex flex-col rounded-[1.5rem] border p-8 ${
                i === 1
                  ? "border-accent/20 bg-soft-pink/60 lg:-translate-y-4"
                  : "border-olive/25 bg-surface"
              }`}
            >
              <span
                className={`mb-4 font-display text-4xl leading-none ${
                  i === 1 ? "text-accent" : "text-olive"
                }`}
                aria-hidden
              >
                “
              </span>
              <p className="flex-1 font-display text-xl leading-snug text-dark">
                {t.quote}
              </p>
              <footer className="mt-8 border-t border-olive/20 pt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-forest">{t.author}</span>
                  <span className="text-muted"> — {t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
