import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 lg:px-10">
        {stats.map((item, i) => (
          <div key={item.label} className="text-center md:text-left">
            <p
              className={`font-display text-4xl font-medium tracking-tight md:text-5xl ${
                i % 2 === 0 ? "text-forest" : "text-accent"
              }`}
            >
              {item.value}
              {item.suffix}
            </p>
            <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
