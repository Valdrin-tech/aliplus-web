import Image from "next/image";
import Link from "next/link";
import { TornEdge } from "@/components/ui/TornEdge";

const TITLE_LINES = [
  { lead: "Your ", accent: "cereals" },
  { lead: "Our ", accent: "concept" },
  { lead: "Better ", accent: "feed" },
] as const;

function TitleLine({
  lead,
  accent,
  showMark = true,
}: {
  lead: string;
  accent: string;
  showMark?: boolean;
}) {
  return (
    <>
      <span>{lead}</span>
      <span className="hero-stamp__word">{accent}</span>
      <span
        className="hero-stamp__mark"
        style={showMark ? undefined : { visibility: "hidden" }}
      >
        .
      </span>
    </>
  );
}

export function Hero() {
  return (
    <section className="hero-pasture hero-pasture--home relative isolate overflow-hidden">
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
        <defs>
          <filter
            id="hero-distress"
            x="-4%"
            y="-4%"
            width="108%"
            height="108%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.95"
              numOctaves="3"
              seed="7"
              stitchTiles="stitch"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.8"
              xChannelSelector="R"
              yChannelSelector="G"
              result="warped"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.4"
              numOctaves="2"
              seed="3"
              result="fine"
            />
            <feColorMatrix
              in="fine"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 -8 4.6"
              result="speckle"
            />
            <feComposite in="warped" in2="speckle" operator="in" />
          </filter>
        </defs>
      </svg>

      <Image
        src="/hero-facility.jpg"
        alt="Aliplus Kosova SH.P.K. facility"
        fill
        priority
        className="hero-pasture__photo"
        sizes="100vw"
      />

      <div className="hero-pasture__veil" aria-hidden />

      <div className="hero-pasture__inner">
        <div className="hero-content">
          <div className="hero-stamp-wrap">
            {/* Solid base for readability */}
            <h1 className="hero-stamp hero-stamp--base">
              {TITLE_LINES.map((line, i) => (
                <span key={line.accent}>
                  {i > 0 && <br />}
                  <TitleLine lead={line.lead} accent={line.accent} />
                </span>
              ))}
            </h1>
            {/* Distressed ink layer on top */}
            <p className="hero-stamp hero-stamp--distress" aria-hidden>
              {TITLE_LINES.map((line, i) => (
                <span key={line.accent}>
                  {i > 0 && <br />}
                  <TitleLine
                    lead={line.lead}
                    accent={line.accent}
                    showMark={false}
                  />
                </span>
              ))}
            </p>
          </div>

          <p className="hero-lead">
            A smarter way to feed your herd. Aliplus combines with your own
            cereals to create a high-performance feeding concept for dairy and
            beef cattle — supporting rumen health, stronger rations, and better
            farm performance.
          </p>

          <div className="hero-actions">
            <Link href="/usage-guide" className="hero-pill hero-pill--green">
              How it works
            </Link>
            <Link href="/company" className="hero-pill hero-pill--pink">
              About Aliplus
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hero-torn pointer-events-none absolute inset-x-0 bottom-0 z-20"
        aria-hidden
      >
        <TornEdge flat />
      </div>
    </section>
  );
}
