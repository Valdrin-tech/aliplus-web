import Image from "next/image";
import Link from "next/link";

export function FeatureSpotlight() {
  return (
    <section className="relative bg-white">
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
        <defs>
          <filter id="paper-edge-guide" x="-5%" y="-5%" width="110%" height="110%">
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

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 lg:gap-x-16 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <p className="font-stamp text-sm uppercase tracking-[0.06em] text-olive">
            Usage Guide
          </p>
          <h2 className="mt-3 font-stamp text-[2rem] uppercase leading-[1.05] tracking-[-0.02em] text-dark sm:text-[2.5rem] lg:text-[2.75rem]">
            Mix Aliplus with your cereals — start feeding the Aliplus way
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text sm:text-lg">
            Fourteen farm-ready components in one formula — urea, plant
            extracts, oligoelements and clay. Mix{" "}
            <strong className="font-semibold text-pine">
              22&nbsp;kg Aliplus per ton of cereals
            </strong>
            , adjust moisture to ~24%, mature for 14 days, then feed. Healthier
            rumens, stronger performance, better margins from the grain you
            already grow.
          </p>
          <Link href="/usage-guide" className="hero-pill hero-pill--green mt-8">
            Open Usage Guide
          </Link>
        </div>

        <figure
          className="vintage-photo vintage-photo--guide relative mx-auto mt-6 w-full max-w-[540px] md:ml-auto md:mt-10"
          style={{ ["--float-rot" as string]: "1.4deg" }}
        >
          <div className="vintage-photo__paper" aria-hidden />
          <div className="vintage-photo__print">
            <Image
              src="/guide-feeding.jpg"
              alt="Cattle feeding on an Aliplus ration at the trough"
              fill
              className="object-cover object-[center_45%]"
              sizes="(max-width: 768px) 100vw, 540px"
            />
            <div className="vintage-photo__vignette" aria-hidden />
          </div>
          <figcaption className="vintage-photo__caption">
            Feeding the Aliplus way
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
