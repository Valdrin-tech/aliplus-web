import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type FloatFrame = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className: string;
  objectPosition?: string;
  rotate?: string;
};

const floats: FloatFrame[] = [
  {
    src: "/hero-cows.jpg",
    alt: "Holstein cows on pasture",
    caption: "Dairy herd, Kosova",
    width: 241,
    height: 299,
    className: "-left-20 top-0",
    objectPosition: "center 35%",
    rotate: "-3.5deg",
  },
  {
    src: "/float-cattle.jpg",
    alt: "Cattle grazing on green hills",
    caption: "Summer grazing",
    width: 274,
    height: 226,
    className: "-top-32 right-0 xl:-right-14",
    objectPosition: "center",
    rotate: "2.5deg",
  },
  {
    src: "/float-cereals.jpg",
    alt: "Cereal harvest in the field",
    caption: "Farm cereals",
    width: 288,
    height: 324,
    className: "-bottom-44 left-0",
    objectPosition: "center",
    rotate: "3deg",
  },
  {
    src: "/float-field.jpg",
    alt: "Rolling green farmland",
    caption: "Open pasture",
    width: 299,
    height: 282,
    className: "-bottom-20 right-0 xl:-right-14 xl:bottom-20",
    objectPosition: "center 40%",
    rotate: "-2deg",
  },
];

function VintagePhoto({
  src,
  alt,
  caption,
  width,
  height,
  className,
  objectPosition = "center",
  rotate = "0deg",
}: FloatFrame) {
  return (
    <figure
      style={
        {
          aspectRatio: `${width} / ${height + 40}`,
          ["--float-w"]: `${width}px`,
          ["--float-rot"]: rotate,
        } as CSSProperties
      }
      className={`vintage-photo relative m-0 h-[140px] w-auto shrink-0 min-[900px]:absolute min-[900px]:h-auto min-[900px]:w-[var(--float-w)] ${className}`}
    >
      {/* Aged paper mat with rough edges */}
      <div className="vintage-photo__paper" aria-hidden />

      {/* The print */}
      <div className="vintage-photo__print">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 900px) 140px, 300px"
        />
        <div className="vintage-photo__vignette" aria-hidden />
      </div>

      <figcaption className="vintage-photo__caption">{caption}</figcaption>
    </figure>
  );
}

export function SystemSpotlight() {
  return (
    <section className="relative z-20 bg-white">
      {/* Rough paper-edge filter for the frames */}
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
        <defs>
          <filter id="paper-edge" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035"
              numOctaves="3"
              seed="11"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="relative z-[1] mx-auto max-w-[1080px] px-5 py-16 min-[900px]:my-16 min-[900px]:py-[10rem] lg:px-[11rem]">
        <div className="pointer-events-none mb-10 flex justify-center gap-5 overflow-auto min-[900px]:absolute min-[900px]:inset-0 min-[900px]:mb-0 min-[900px]:block min-[900px]:overflow-visible">
          {floats.map((f) => (
            <VintagePhoto key={f.src} {...f} />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="font-stamp text-sm uppercase tracking-[0.08em] text-olive">
            Aliplus Kosova
          </p>
          <h2 className="pfl-h2 mt-3 text-dark">
            What <span className="text-accent">Aliplus</span>{" "}
            <span className="relative inline-block">
              does
              <span
                className="pointer-events-none absolute -bottom-1 left-0 right-0 h-4 bg-[url(/imgs/accent-underline.svg)] bg-contain bg-center bg-no-repeat"
                aria-hidden
              />
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text sm:text-lg">
            The fundamental concept is to treat cereals with Aliplus —{" "}
            <strong className="font-semibold text-pine">
              22&nbsp;kg per 1 ton
            </strong>
            . The treated cereal is intended to have:
          </p>
          <ul className="mx-auto mt-6 max-w-lg space-y-2.5 text-left text-base leading-relaxed text-text sm:text-lg">
            {[
              "Increased nutritional value (UF, PDIN, PDIE)",
              "Increased protein value after 14-day maturation",
              "Improved energy contribution without acidosis risk",
              "High and balanced nutritional values",
              "Prebiotic / probiotic support for rumen flora",
              "Stronger development of rumen microorganisms",
              "Better integration into every ruminant ration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="check-dot mt-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/products/aliplus"
            className="hero-pill hero-pill--green mt-8"
          >
            More
          </Link>
        </div>
      </div>
    </section>
  );
}
