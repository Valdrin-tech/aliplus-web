import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RationCalculator } from "@/components/calculator/RationCalculator";
import { WordReveal } from "@/components/motion/WordReveal";
import { TornEdge } from "@/components/ui/TornEdge";

export const metadata: Metadata = {
  title: "Ration Calculator",
  description:
    "Estimate the Aliplus quantity for your herd — pick animal type and headcount, then request a tailored recommendation.",
};

export default function CalculatorPage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="hero-pasture hero-scene relative isolate overflow-hidden">
        <Image
          src="/guide-grains.jpg"
          alt="Farm cereals ready for an Aliplus ration"
          fill
          priority
          className="hero-scene__media object-cover object-[center_45%]"
          sizes="100vw"
        />
        <div
          className="hero-scene__veil absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/30 to-dark/60"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[min(78svh,720px)] items-center justify-center px-5 pb-28 pt-36">
          <div className="hero-content hero-scene__copy text-center">
            <WordReveal className="pfl-subheading text-white/85!" text="Tool" slow delay={0.2} />
            <WordReveal
              as="h1"
              className="hero-stamp hero-stamp--base text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem]"
              text="Calculator"
              slow
              delay={0.32}
            />
            <WordReveal
              className="mx-auto mt-6 max-w-[680px] text-xl leading-snug text-white sm:text-2xl"
              text="Estimate the Aliplus quantity for your herd — then get a tailored recommendation from our team."
              slow
              delay={0.7}
            />
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <a href="#calculator" className="hero-pill hero-pill--green">
                Start estimating
              </a>
              <Link href="/usage-guide" className="hero-pill hero-pill--pink">
                Usage Guide
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-torn pointer-events-none absolute inset-x-0 bottom-0 z-20"
          aria-hidden
        >
          <TornEdge />
        </div>
      </section>

      {/* 2 · Intro + calculator */}
      <section id="calculator" className="scroll-mt-28 bg-white">
        <div className="container-pfl my-16 lg:my-24">
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p className="pfl-subheading">Your herd</p>
            <WordReveal
              as="h2"
              className="pfl-h2 text-forest"
              text="Estimate your Aliplus ration"
              step={0.038}
            />
            <WordReveal
              className="pfl-lead"
              text="Select animal type and herd size for an indicative projection. Leave your details and we will follow up with a recommendation adapted to your cereals and production goals."
              delay={0.12}
              step={0.024}
            />
          </div>

          <RationCalculator />
        </div>
      </section>

      {/* 3 · Closing CTA */}
      <section className="bg-white">
        <div className="container-pfl mb-16 lg:mb-24">
          <div className="guide-panel mx-auto max-w-3xl rounded-[28px] px-6 py-12 text-center sm:px-10 lg:px-14 lg:py-16">
            <p className="pfl-subheading">Next step</p>
            <WordReveal
              as="h2"
              className="pfl-h2 text-dark"
              text="Prefer to talk it through?"
              step={0.038}
            />
            <WordReveal
              className="pfl-lead"
              text="Our farmers help you plan the transition, pack formats, and on-farm mixing — so the ration fits how you already work."
              delay={0.12}
              step={0.024}
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="hero-pill hero-pill--green">
                Contact Aliplus Kosova
              </Link>
              <Link
                href="/products/aliplus"
                className="hero-pill hero-pill--pink"
              >
                Discover Aliplus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
