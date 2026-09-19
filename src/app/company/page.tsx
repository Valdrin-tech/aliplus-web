import type { Metadata } from "next";
import Link from "next/link";
import { EditorialStory } from "@/components/sections/EditorialStory";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description: `About ${site.legalName} — natural ruminant nutrition.`,
};

export default function CompanyPage() {
  return (
    <>
      {/* Intro — white editorial, centered, pink title + green text */}
      <section className="bg-white">
        <div className="container-pfl my-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="pfl-subheading">Company</p>
            <h1 className="pfl-h2">
              <span className="text-accent">Aliplus</span>{" "}
              <span className="text-forest">Kosova</span>
            </h1>
            <div className="pfl-content">
              <h5 className="pfl-h5 text-forest">
                We bring the <span className="text-accent">Aliplus</span>{" "}
                concept to <span className="text-forest">Kosovo</span>.
              </h5>
              <p className="pfl-lead text-forest">
                Farm-level nutrition that valorizes local grains, supports
                animal health, and improves herd economics — for cattle, sheep
                and goats across the country.
              </p>
              <p className="pfl-lead text-forest">
                Aliplus is a unique blend of fourteen natural components,
                designed by a farmer with biologists and produced in France.
                Our team in Kosova supports breeders with ration planning,
                transition guidance, and on-farm implementation.
              </p>
            </div>
            <p className="mt-6 text-base text-text">
              <em>Aliplus on the farm</em>
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products/aliplus"
                className="hero-pill hero-pill--green"
              >
                Discover Aliplus
              </Link>
              <Link href="/contact" className="hero-pill hero-pill--pink">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EditorialStory
        first={{
          eyebrow: "Why Aliplus?",
          title: "The backbone of Kosova's livestock farming",
          blocks: [
            { type: "statement", text: "Imagine the farms of Kosova." },
            {
              type: "lead",
              text: "If small mixed farms, family herds and home-grown cereals are part of the picture, you're imagining the everyday reality for most of the country's livestock producers.",
            },
            {
              type: "statement",
              text: "Cereals grown on the farm are the biggest nutritional asset a breeder has. Yet most rations are still built on bought-in concentrates, while the grain in the barn is undervalued.",
            },
            {
              type: "lead",
              text: "How that grain is used influences everything — from milk and growth to rumen health, veterinary costs and the margin left at the end of the season.",
            },
            {
              type: "statement",
              text: "Feed it properly, and we build a viable, autonomous livestock system for every farm.",
            },
          ],
          cta: { label: "How Aliplus works", href: "/usage-guide" },
        }}
        firstImage={{
          src: "/company-facility.jpg",
          alt: "Aliplus Kosova SH.P.K. facility and warehouse",
          caption: "Aliplus Kosova SH.P.K.",
          objectPosition: "center",
        }}
        secondImage={{
          src: "/company-barn.jpg",
          alt: "Cattle in an open-sided barn on an Aliplus farm",
          caption: "On-farm feeding with Aliplus",
          aspect: "landscape",
          frame: "vintage",
          objectPosition: "center",
        }}
        second={{
          blocks: [
            { type: "statement", text: "This is where Aliplus comes in." },
            {
              type: "statement",
              text: "Right now, concentrates are often seen as the only way to feed a productive herd.",
            },
            {
              type: "statement",
              text: "We offer an alternative way to build a ration.",
            },
            {
              type: "lead",
              text: "Aliplus is a bio-dynamiser of fourteen natural, synergistic components, created by a farmer with biologists and produced in France. Mixed with your own cereals, it turns farm grain into a complete, premium feed — supporting rumen function, intake and performance in cattle, sheep and goats.",
            },
            {
              type: "statement",
              text: "It becomes the biggest lever a farm has to cut feed costs while producing more.",
            },
          ],
          cta: { label: "Discover the product", href: "/products/aliplus" },
        }}
      />
    </>
  );
}
