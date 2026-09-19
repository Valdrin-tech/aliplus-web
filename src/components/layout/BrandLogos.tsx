import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: {
    logo: "h-12 sm:h-14",
    kosova: "text-[1.65rem] sm:text-[1.9rem]",
    underline: "h-[3px]",
    gap: "gap-1 sm:gap-1.5",
  },
  md: {
    logo: "h-16 sm:h-20",
    kosova: "text-[2.1rem] sm:text-[2.5rem]",
    underline: "h-[3.5px]",
    gap: "gap-1.5",
  },
  lg: {
    logo: "h-[4.5rem] sm:h-24",
    kosova: "text-[2.6rem] sm:text-[3.25rem]",
    underline: "h-1",
    gap: "gap-2",
  },
} as const;

export function BrandMark({ size = "sm", className = "" }: BrandMarkProps) {
  const s = sizeMap[size];

  return (
    <div
      className={`flex items-center ${s.gap} ${className}`}
      aria-label="Aliplus Kosova"
    >
      <Image
        src="/logo-aliplus.png"
        alt="Aliplus"
        width={280}
        height={110}
        className={`brand-mark__logo ${s.logo} w-auto shrink-0`}
        priority
      />
      <span className="brand-mark__kosova relative -ml-0.5 flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight text-forest ${s.kosova}`}
          style={{
            textShadow: "0 1px 0 color-mix(in srgb, #c11c84 18%, transparent)",
          }}
        >
          Kosova
        </span>
        <span
          aria-hidden
          className={`mt-1 w-full rounded-full bg-gradient-to-r from-accent via-olive to-lime ${s.underline}`}
        />
      </span>
    </div>
  );
}

export function BrandLogos({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`group brand-logos transition-opacity hover:opacity-95 ${compact ? "is-compact" : ""}`}
      aria-label="Aliplus Kosova — Accueil"
    >
      <BrandMark size="sm" />
    </Link>
  );
}
