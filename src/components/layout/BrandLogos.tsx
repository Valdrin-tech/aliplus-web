import Image from "next/image";
import { Link } from "@/i18n/Link";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  tone?: "color" | "light" | "muted";
};

const sizeMap = {
  sm: {
    logo: "h-11 sm:h-[3.25rem]",
    kosova: "text-[1.35rem] sm:text-[1.6rem]",
    gap: "gap-1 sm:gap-1.5",
  },
  md: {
    logo: "h-16 sm:h-20",
    kosova: "text-[2.1rem] sm:text-[2.5rem]",
    gap: "gap-1.5",
  },
  lg: {
    logo: "h-[4.5rem] sm:h-24",
    kosova: "text-[2.6rem] sm:text-[3.25rem]",
    gap: "gap-2",
  },
} as const;

export function BrandMark({
  size = "sm",
  className = "",
  tone = "color",
}: BrandMarkProps) {
  const s = sizeMap[size];
  const kosovaColor =
    tone === "light"
      ? "text-white"
      : tone === "muted"
        ? "text-[#d3d3d3]"
        : "text-forest";

  return (
    <div
      className={`flex items-center ${s.gap} ${className}`}
      aria-label="Aliplus Kosova"
    >
      <Image
        src="/logo-aliplus.png"
        alt="Aliplus"
        width={962}
        height={582}
        className={`brand-mark__logo ${s.logo} w-auto shrink-0`}
        priority
      />
      <span
        className={`brand-mark__kosova font-display font-normal tracking-tight ${s.kosova} ${kosovaColor}`}
        style={
          tone === "light"
            ? { textShadow: "0 1px 12px rgb(0 0 0 / 0.35)" }
            : undefined
        }
      >
        Kosova
      </span>
    </div>
  );
}

export function BrandLogos({
  compact = false,
  tone = "color",
}: {
  compact?: boolean;
  tone?: "color" | "light" | "muted";
}) {
  return (
    <Link
      href="/"
      className={`group brand-logos transition-opacity hover:opacity-95 ${compact ? "is-compact" : ""}`}
      aria-label="Aliplus Kosova"
    >
      <BrandMark size="sm" tone={tone} />
    </Link>
  );
}
