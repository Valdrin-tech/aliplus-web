import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { WordReveal } from "@/components/motion/WordReveal";
import { TornEdge } from "@/components/ui/TornEdge";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aliplus Kosova — ration advice, product questions, and on-farm support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-pasture hero-scene relative isolate overflow-hidden">
        <Image
          src="/hero-facility.jpg"
          alt="Aliplus Kosova facility"
          fill
          priority
          className="hero-scene__media object-cover object-[center_48%]"
          sizes="100vw"
        />
        <div
          className="hero-scene__veil absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[100svh] min-h-[100dvh] items-center justify-center px-5 pb-32 pt-36 sm:pb-36">
          <div className="hero-content hero-scene__copy text-center">
            <WordReveal
              as="h1"
              className="hero-stamp hero-stamp--base text-[2.4rem] sm:text-[3.75rem] lg:text-[5.25rem]"
              text="Make an Enquiry"
              slow
              delay={0.32}
            />
            <WordReveal
              className="mx-auto mt-6 max-w-[640px] text-lg leading-snug text-white sm:text-xl"
              text="Whatever your query, we will try and answer it. Maybe you want advice on a ration, a question about the product, a farm visit, or something else. We monitor all enquiries and aim to get back to you within a few days."
              slow
              delay={0.7}
            />
          </div>
        </div>

        <div
          className="hero-torn pointer-events-none absolute inset-x-0 bottom-0 z-20"
          aria-hidden
        >
          <TornEdge flat />
        </div>
      </section>

      <section className="bg-white">
        <div className="contact-panel grid items-center gap-8 p-8 md:m-14 md:grid-cols-2 md:gap-12 md:px-24 md:py-24 lg:px-36">
          <div className="text-center md:max-w-[420px] md:text-start lg:w-[calc(100%-4rem)]">
            <WordReveal
              className="pfl-subheading text-olive!"
              text="Whatever you need, we will try to find the answer."
              step={0.04}
            />
            <WordReveal
              as="h2"
              className="pfl-h3 text-pine"
              text="Contact us"
              delay={0.08}
              step={0.038}
            />
            <WordReveal
              className="mt-2 text-base leading-relaxed text-text sm:text-[1.05rem]"
              text="Give us as much detail as you can about your question or message, and we will find the right person in our team to answer. We receive a lot of questions and messages, so give us a few days to get back to you. If it's specific to rations or the product, select the right team to message under the Contact menu."
              delay={0.16}
              step={0.022}
            />
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
