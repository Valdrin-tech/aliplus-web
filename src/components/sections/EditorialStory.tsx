import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { WordReveal } from "@/components/motion/WordReveal";

type Block =
  | { type: "statement"; text: string }
  | { type: "lead"; text: string };

type TextColumn = {
  eyebrow?: string;
  title?: string;
  blocks: Block[];
  cta?: { label: string; href: string };
};

type ImageColumn = {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
  aspect?: "square" | "landscape";
  frame?: "mask" | "vintage";
};

export type EditorialStoryProps = {
  first: TextColumn;
  firstImage: ImageColumn;
  secondImage: ImageColumn;
  second: TextColumn;
};

function Content({ column }: { column: TextColumn }) {
  return (
    <div>
      {column.eyebrow && (
        <WordReveal className="pfl-subheading" text={column.eyebrow} step={0.05} />
      )}
      {column.title && (
        <WordReveal
          as="h2"
          className="pfl-h2 text-dark"
          text={column.title}
          delay={0.06}
          step={0.038}
        />
      )}
      <div className="pfl-content">
        {column.blocks.map((b, i) =>
          b.type === "statement" ? (
            <WordReveal
              key={i}
              as="h5"
              className="pfl-h5"
              text={b.text}
              delay={0.08 + i * 0.04}
              step={0.028}
            />
          ) : (
            <WordReveal
              key={i}
              className="pfl-lead"
              text={b.text}
              delay={0.12 + i * 0.04}
              step={0.022}
            />
          ),
        )}
      </div>
      {column.cta && (
        <Link href={column.cta.href} className="hero-pill hero-pill--green mt-8">
          {column.cta.label}
        </Link>
      )}
    </div>
  );
}

function VintageFramedImage({ image }: { image: ImageColumn }) {
  return (
    <figure
      className="vintage-photo vintage-photo--guide relative mx-auto w-full max-w-[520px] lg:mx-0"
      style={{ ["--float-rot" as string]: "-1.6deg" }}
    >
      <div className="vintage-photo__paper" aria-hidden />
      <div className="vintage-photo__print">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          style={{ objectPosition: image.objectPosition ?? "center" }}
          sizes="(max-width: 1024px) 100vw, 520px"
        />
        <div className="vintage-photo__vignette" aria-hidden />
      </div>
      <figcaption className="vintage-photo__caption">{image.caption}</figcaption>
    </figure>
  );
}

function FramedImage({ image }: { image: ImageColumn }) {
  if (image.frame === "vintage") {
    return <VintageFramedImage image={image} />;
  }

  const aspect =
    image.aspect === "landscape" ? "aspect-[4/3]" : "aspect-square";

  return (
    <div>
      <div className={`relative ${aspect} max-w-[500px] overflow-hidden`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          style={{ objectPosition: image.objectPosition ?? "center" }}
          sizes="(max-width: 1024px) 100vw, 500px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[url(/imgs/border-business-edge.png)] bg-cover bg-center"
          aria-hidden
        />
      </div>
      <p className="mt-6 max-w-[48rem] text-base text-text">
        <em>{image.caption}</em>
      </p>
    </div>
  );
}

function Cell({ children }: { children: ReactNode }) {
  return <div className="col-span-4 md:col-span-2 lg:col-span-6">{children}</div>;
}

/**
 * Two-row editorial block mirroring pastureforlife.org's "Why pasture?" section:
 * text | framed image, then framed image | text.
 */
export function EditorialStory({
  first,
  firstImage,
  secondImage,
  second,
}: EditorialStoryProps) {
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
      <div className="container-pfl my-16">
        <div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
          <Cell>
            <Content column={first} />
          </Cell>
          <Cell>
            <FramedImage image={firstImage} />
          </Cell>
          <Cell>
            <FramedImage image={secondImage} />
          </Cell>
          <Cell>
            <Content column={second} />
          </Cell>
        </div>
      </div>
    </section>
  );
}
