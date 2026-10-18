import { WordReveal } from "@/components/motion/WordReveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <div className="hero-scene page-hero relative overflow-hidden border-b border-olive/20 bg-surface">
      <div className="hero-scene__copy relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        {eyebrow && (
          <WordReveal
            className="text-xs font-semibold uppercase tracking-[0.24em] text-accent"
            text={eyebrow}
            slow
            delay={0.2}
          />
        )}
        <WordReveal
          as="h1"
          className="mt-3 max-w-3xl font-display text-[40px] font-normal leading-[1.05] tracking-tight text-dark md:text-[40px] lg:text-[86px] lg:leading-[82px]"
          text={title}
          slow
          delay={0.32}
        />
        {description && (
          <WordReveal
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            text={description}
            slow
            delay={0.7}
          />
        )}
      </div>
    </div>
  );
}
