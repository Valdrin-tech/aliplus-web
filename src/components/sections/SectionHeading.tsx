type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = dark ? "text-cream" : "text-dark";
  const descColor = dark ? "text-cream/70" : "text-muted";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
