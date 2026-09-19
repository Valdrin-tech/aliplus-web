type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <div className="relative overflow-hidden border-b border-olive/20 bg-gradient-to-br from-surface via-soft/40 to-soft-pink/50">
      <div
        className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-olive/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
