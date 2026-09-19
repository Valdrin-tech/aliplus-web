import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { TornEdge } from "@/components/ui/TornEdge";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aliplus Kosova — ration advice, product questions, and on-farm support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-pasture relative isolate overflow-hidden">
        <Image
          src="/hero-facility.jpg"
          alt="Aliplus Kosova facility"
          fill
          priority
          className="object-cover object-[center_48%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/25 to-dark/50"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[100svh] min-h-[100dvh] items-center justify-center px-5 pb-32 pt-36 sm:pb-36">
          <div className="hero-content text-center">
            <h1 className="hero-stamp hero-stamp--base text-[2.4rem] sm:text-[3.75rem] lg:text-[5.25rem]">
              Make an Enquiry
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-lg leading-snug text-white sm:text-xl">
              Whatever your query, we will try and answer it. Maybe you want
              advice on a ration, a question about the product, a farm visit, or
              something else. We monitor all enquiries and aim to get back to
              you within a few days.
            </p>
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
            <p className="pfl-subheading text-olive!">
              Whatever you need, we will try to find the answer.
            </p>
            <h2 className="pfl-h3 text-pine">Contact us</h2>
            <p className="mt-2 text-base leading-relaxed text-text sm:text-[1.05rem]">
              Give us as much detail as you can about your question or message,
              and we will find the right person in our team to answer. We
              receive a lot of questions and messages, so give us a few days to
              get back to you. If it&apos;s specific to rations or the product,
              select the right team to message under the &apos;Contact&apos;
              menu.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
