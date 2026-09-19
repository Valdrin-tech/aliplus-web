import { Button } from "@/components/ui/Button";

export function LeadMagnet() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="card-surface grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
        <div className="flex flex-col justify-center p-10 lg:p-14">
          <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Livre blanc
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium text-dark md:text-4xl">
            Comment un éleveur a augmenté son chiffre d’affaires avec Aliplus
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Étude de cas, chiffres clés et méthode de transition — ressource
            gratuite pour préparer votre projection.
          </p>
          <Button href="/contact" variant="accent" className="mt-8 w-fit">
            Télécharger gratuitement
          </Button>
        </div>
        <div className="relative min-h-[280px] bg-gradient-to-br from-accent via-accent-deep to-forest lg:min-h-full">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, #9ccc65 0%, transparent 50%), radial-gradient(circle at 75% 70%, #c11c84 0%, transparent 45%)",
            }}
          />
          <div className="relative flex h-full flex-col justify-end p-10 text-cream lg:p-14">
            <p className="font-display text-6xl font-medium text-olive opacity-95">
              +
            </p>
            <p className="mt-2 max-w-xs text-sm text-cream/80">
              Rentabilité, autonomie alimentaire et santé animale — les trois
              leviers du concept.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
