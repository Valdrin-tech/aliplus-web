import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white border border-forest " +
    "shadow-[0_2px_0_0_theme(colors.dark),0_10px_24px_-10px_rgba(74,140,28,0.55)] " +
    "hover:-translate-y-0.5 hover:bg-[#3f7a18] " +
    "hover:shadow-[0_3px_0_0_theme(colors.dark),0_16px_32px_-12px_rgba(74,140,28,0.5)] " +
    "active:translate-y-0 " +
    "active:shadow-[0_1px_0_0_theme(colors.dark),0_4px_10px_-6px_rgba(74,140,28,0.35)]",

  secondary:
    "bg-surface text-forest border border-olive/40 " +
    "shadow-[0_4px_16px_-8px_rgba(193,28,132,0.12)] " +
    "hover:-translate-y-0.5 " +
    "hover:border-accent/35 " +
    "hover:bg-soft-pink/40 " +
    "hover:shadow-[0_10px_24px_-10px_rgba(193,28,132,0.18)] " +
    "active:translate-y-0 " +
    "active:shadow-[0_3px_10px_-7px_rgba(193,28,132,0.12)]",

  ghost:
    "bg-transparent text-forest border border-transparent " +
    "hover:bg-soft " +
    "hover:border-olive/30 " +
    "hover:-translate-y-0.5 " +
    "active:translate-y-0",

  accent:
    "bg-accent text-white border border-accent " +
    "shadow-[0_2px_0_0_theme(colors.accent-deep),0_10px_24px_-10px_rgba(193,28,132,0.55)] " +
    "hover:-translate-y-0.5 hover:bg-accent-deep " +
    "hover:shadow-[0_3px_0_0_theme(colors.accent-deep),0_16px_32px_-12px_rgba(193,28,132,0.5)] " +
    "active:translate-y-0 " +
    "active:shadow-[0_1px_0_0_theme(colors.accent-deep),0_4px_10px_-6px_rgba(193,28,132,0.35)]",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  href?: string;
};

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2.5
    overflow-hidden
    rounded-full
    px-6
    py-3
    text-sm
    font-medium
    tracking-wide
    transition-all
    duration-300
    ease-[cubic-bezier(0.22,1,0.36,1)]
    select-none
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent/35
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:shadow-none
    disabled:translate-y-0
    ${variants[variant]}
    ${className}
  `;

  const content = (
    <>
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-[130%]
          skew-x-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-700
          ease-out
          group-hover:translate-x-[130%]
        "
      />

      <span className="relative z-10 flex items-center gap-2.5">
        <span>{children}</span>

        <span
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-white/15
            transition-all
            duration-300
            group-hover:bg-white/25
            group-hover:scale-105
          "
        >
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              ease-out
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
