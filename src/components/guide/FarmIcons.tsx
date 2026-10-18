import type { ReactNode, SVGProps } from "react";

// Aliplus farm icon set — 24px grid, 1.5 stroke, round caps/joins, currentColor.

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

export function CowIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.4 7.2c-.8-.8-1.1-1.9-.8-3M15.6 7.2c.8-.8 1.1-1.9.8-3" />
      <path d="M7.9 8.7 4.3 8.1c-.6-.1-1 .6-.6 1l1.3 1.5c.4.5 1.1.7 1.7.6l1.3-.2M16.1 8.7l3.6-.6c.6-.1 1 .6.6 1L19 10.6c-.4.5-1.1.7-1.7.6l-1.3-.2" />
      <path d="M8.2 13.4 8 8.4C8 7.1 9.1 6 10.4 6h3.2C14.9 6 16 7.1 16 8.4l-.2 5" />
      <path d="M7.8 13.4h8.4c.9 0 1.6.7 1.6 1.6v1.4a3.6 3.6 0 0 1-3.6 3.6H9.8a3.6 3.6 0 0 1-3.6-3.6V15c0-.9.7-1.6 1.6-1.6Z" />
      <path d="M10 16.6h.01M14 16.6h.01" strokeWidth={2} />
      <path d="M10.2 10.4h.01M13.8 10.4h.01" strokeWidth={2} />
    </Icon>
  );
}

export function SheepIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.2 9.6a2.1 2.1 0 0 1 1.3-3.4A2.5 2.5 0 0 1 12 4.8a2.5 2.5 0 0 1 3.5 1.4 2.1 2.1 0 0 1 1.3 3.4" />
      <path d="M9 9.2h6v5.3c0 2.3-1.3 4.7-3 4.7s-3-2.4-3-4.7V9.2Z" />
      <path d="M9 10.3 5.6 9.7c-.5-.1-.9.4-.6.8l1 1.3c.4.5 1.1.8 1.8.7l1.2-.2M15 10.3l3.4-.6c.5-.1.9.4.6.8l-1 1.3c-.4.5-1.1.8-1.8.7l-1.2-.2" />
      <path d="M10.8 12.2h.01M13.2 12.2h.01" strokeWidth={2} />
      <path d="M11.2 16.4h1.6" />
    </Icon>
  );
}

export function GoatIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10 7.6C9 5.7 7.4 4.5 5.5 4.1M14 7.6c1-1.9 2.6-3.1 4.5-3.5" />
      <path d="M9.5 8h5l-.4 7.2c-.1 1.6-1 2.8-2.1 2.8s-2-1.2-2.1-2.8L9.5 8Z" />
      <path d="M9.6 9.5 5.4 10.3c-.5.1-.5.8 0 .9l4.3.5M14.4 9.5l4.2.8c.5.1.5.8 0 .9l-4.3.5" />
      <path d="M11.2 18c0 1.2.4 2.2.8 3 .4-.8.8-1.8.8-3" />
      <path d="M11 11.2h.01M13 11.2h.01" strokeWidth={2} />
    </Icon>
  );
}

export function WheatIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21V8.5" />
      <path d="M12 18c-2.3 0-3.7-1.4-3.7-3.5 2.3 0 3.7 1.4 3.7 3.5ZM12 18c2.3 0 3.7-1.4 3.7-3.5-2.3 0-3.7 1.4-3.7 3.5Z" />
      <path d="M12 13.5c-2.3 0-3.7-1.4-3.7-3.5 2.3 0 3.7 1.4 3.7 3.5ZM12 13.5c2.3 0 3.7-1.4 3.7-3.5-2.3 0-3.7 1.4-3.7 3.5Z" />
      <path d="M12 9c-1.3-1-1.6-2.8-.6-4.6.3.2.6.5.6.5s.3-.3.6-.5c1 1.8.7 3.6-.6 4.6Z" />
    </Icon>
  );
}

export function MixerIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 7.5h17l-1.6 8H5.1l-1.6-8Z" />
      <path d="M6.8 11.4c1.2-1.2 2.4-1.2 3.6 0s2.4 1.2 3.6 0 2.4-1.2 3.6 0" />
      <circle cx="8" cy="18" r="1.8" />
      <circle cx="16" cy="18" r="1.8" />
      <path d="M4.3 11.5H2" />
    </Icon>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 4h10l-.7 2.4c1.9 1.6 3 4.3 3 7.4 0 3.8-1.7 6.2-4.5 6.2H8.2c-2.8 0-4.5-2.4-4.5-6.2 0-3.1 1.1-5.8 3-7.4L7 4Z" />
      <path d="M6.8 6.4h10.4" />
      <path d="M12 17v-4.2M12 14.4c-1.7 0-2.7-1-2.7-2.6 1.7 0 2.7 1 2.7 2.6ZM12 13.4c1.5 0 2.4-.9 2.4-2.4-1.5 0-2.4.9-2.4 2.4Z" />
    </Icon>
  );
}

export function PalletIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="9.5" width="7.5" height="4.5" rx="1.2" />
      <rect x="12.5" y="9.5" width="7.5" height="4.5" rx="1.2" />
      <rect x="8.2" y="4.5" width="7.6" height="4.5" rx="1.2" />
      <path d="M3 15.5h18M3 19.5h18M4.5 15.5v4M12 15.5v4M19.5 15.5v4" />
    </Icon>
  );
}

export function BigBagIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5.5 8.5h13V19a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V8.5Z" />
      <path d="M7.5 8.5V6.6a1.6 1.6 0 0 1 3.2 0v1.9M13.3 8.5V6.6a1.6 1.6 0 0 1 3.2 0v1.9" />
      <path d="M9 13h6M9 16h4" />
    </Icon>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5s6 6.4 6 10.6a6 6 0 0 1-12 0c0-4.2 6-10.6 6-10.6Z" />
      <path d="M9 15.2c1 .8 2 .8 3 0s2-.8 3 0" />
    </Icon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M8.5 3.5v4M15.5 3.5v4M4 10h16" />
      <path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 16.8h.01M12 16.8h.01" strokeWidth={2} />
      <path d="m14.8 16.6 1 1 2-2" />
    </Icon>
  );
}

export function TroughIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 10.5h18l-1.8 6.1a2 2 0 0 1-1.9 1.4H6.7a2 2 0 0 1-1.9-1.4L3 10.5Z" />
      <path d="M5.8 10.5c1.4-2 2.9-2.6 4.4-1.7 1.2-1.4 3-1.4 4.2 0 1.4-.8 2.7-.3 3.8 1.7" />
      <path d="M7 18v2.5M17 18v2.5" />
    </Icon>
  );
}

export function BarnIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 10.2 12 4l8.5 6.2V20h-17v-9.8Z" />
      <path d="M8.8 20v-6.2h6.4V20M8.8 13.8l6.4 6.2M15.2 13.8 8.8 20" />
      <path d="M10.6 9.4h2.8" />
    </Icon>
  );
}

export function BaleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12.5" r="7" />
      <circle cx="12" cy="12.5" r="4" />
      <circle cx="12" cy="12.5" r="1.2" />
      <path d="M3 20.5h18" />
    </Icon>
  );
}

export function SiloIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 9a5 5 0 0 1 10 0v11.5H7V9Z" />
      <path d="M7 12h10M7 15.8h10M3 20.5h18" />
    </Icon>
  );
}

export function MineralIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m12 3.5 7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8L12 3.5Z" />
      <path d="m12 8.2 3.6 2v3.6L12 15.8l-3.6-2v-3.6l3.6-2Z" />
    </Icon>
  );
}

export function FloraIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <ellipse cx="9.4" cy="10" rx="2" ry="1.3" transform="rotate(-30 9.4 10)" />
      <ellipse cx="14.6" cy="14.2" rx="2" ry="1.3" transform="rotate(25 14.6 14.2)" />
      <path d="M14.8 9h.01M9 14.8h.01M12 12.2h.01" strokeWidth={2} />
    </Icon>
  );
}

export function MilkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.5 3.5h5v2.2l1.6 2.4c.6.9.9 1.9.9 3V19a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19v-7.9c0-1.1.3-2.1.9-3l1.6-2.4V3.5Z" />
      <path d="M7 13c1.7 1 3.3 1 5 0s3.3-1 5 0" />
    </Icon>
  );
}

export function MeatIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15.5 5.3c2.7 1 4.2 3.6 3.7 6.4-.6 3.5-4.3 6.6-8.6 7.4-3.6.7-6.6-.6-7-3-.3-1.8.9-3 2.6-3.5 1.6-.4 2.4-1.5 2.6-3.1.4-3.3 3.6-5.3 6.7-4.2Z" />
      <circle cx="15" cy="10.5" r="1.7" />
    </Icon>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v16M8 20h8M5 7h14" />
      <path d="M5 7 2.6 12.5a2.4 2.4 0 0 0 4.8 0L5 7ZM19 7l-2.4 5.5a2.4 2.4 0 0 0 4.8 0L19 7Z" />
    </Icon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 19c0-8 5.5-13.5 14-14 .2 8.5-5.5 14-14 14Z" />
      <path d="m5 19 8-8" />
    </Icon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 19 6v5.5c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3.8" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </Icon>
  );
}

export function AdvisorIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 5.5a2.5 2.5 0 0 1 0 5M17.5 14.6c1.8.5 3 2 3 4.4" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Icon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}
