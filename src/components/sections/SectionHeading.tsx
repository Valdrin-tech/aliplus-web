import { WordReveal } from "@/components/motion/WordReveal";

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
        <WordReveal
          className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent"
          text={eyebrow}
          step={0.05}
        />
      )}
      <WordReveal
        as="h2"
        className={`font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem] ${titleColor}`}
        text={title}
        delay={0.06}
        step={0.038}
      />
      {description && (
        <WordReveal
          className={`mt-5 text-lg leading-relaxed ${descColor}`}
          text={description}
          delay={0.16}
          step={0.024}
        />
      )}
    </div>
  );
}
