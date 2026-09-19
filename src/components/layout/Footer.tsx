import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { TornEdge } from "@/components/ui/TornEdge";

const columns = [
  {
    heading: "Contact",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "General FAQs", href: "/faq" },
      { label: "Company", href: "/company" },
    ],
  },
  {
    heading: "Aliplus",
    links: [
      { label: "Aliplus feed", href: "/products/aliplus" },
      { label: "Alimaya minerals", href: "/products/alimaya" },
      { label: "Aliplantes", href: "/products/aliplantes" },
      { label: "Usage Guide", href: "/usage-guide" },
      { label: "Ration calculator", href: "/calculator" },
    ],
  },
  {
    heading: "Terms",
    links: [
      { label: "Privacy and Cookie Policy", href: "/faq" },
      { label: "Terms and Conditions", href: "/faq" },
      { label: "Help", href: "/faq" },
    ],
  },
];

function ChevronRight() {
  return (
    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" aria-hidden>
      <path
        d="M1.5 1.5 7 7l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-0 mt-16 bg-pine text-white lg:mt-24">
      {/* White torn edge: tall on the left, short on the right (like PfL) */}
      <TornEdge reverse />

      <div className="bg-[url(/imgs/bg-graphic-footer.svg)] bg-contain bg-left-bottom bg-no-repeat pb-32 pt-10 sm:pt-16">
        <div className="container-pfl">
          {/* Top row: newsletter + link columns */}
          <div className="mb-16 flex flex-col justify-between text-center lg:flex-row lg:text-left">
            <section className="mb-10 lg:mb-0 lg:max-w-[430px]">
              <p className="pfl-h2 mb-6 text-white">Stay updated</p>
              <div className="mx-auto max-w-[430px]">
                <form className="relative" action="/contact" method="get">
                  <div className="relative w-full">
                    <input
                      className="footer-input mb-4"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      aria-label="Email address"
                    />
                    <button
                      type="submit"
                      className="absolute right-[2px] top-[2px] flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest transition-colors hover:bg-olive hover:text-white"
                      aria-label="Subscribe"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </form>
              </div>
              <p>
                <small className="block text-[0.8rem] leading-relaxed text-white">
                  Subscribe to our free newsletter for feeding advice, product
                  news and stories from farms in Kosova working with Aliplus.
                </small>
              </p>
            </section>

            <section className="flex flex-col justify-between gap-10 lg:max-w-[50%] lg:flex-row lg:gap-24">
              {columns.map((col) => (
                <div key={col.heading}>
                  <p className="font-stamp mb-4 text-sm uppercase tracking-[0.06em] text-white/70 lg:hidden">
                    {col.heading}
                  </p>
                  <nav className="flex flex-col" aria-label={col.heading}>
                    {col.links.map((l) => (
                      <Link
                        key={`${col.heading}-${l.label}`}
                        href={l.href}
                        className="mb-4 text-white transition-opacity hover:opacity-70"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </section>
          </div>

          {/* Green CTA band */}
          <section className="mb-16 flex flex-col justify-between rounded-[20px] bg-forest p-8 md:flex-row md:items-center">
            <div className="mb-5 flex flex-col items-center gap-5 md:mb-0 md:flex-row md:gap-8">
              <p className="pfl-h3 mb-0! text-white">Join us today</p>
              <Link href="/contact" className="pfl-btn pfl-btn--inverted">
                Talk to an advisor
              </Link>
            </div>
            <Link
              href="/"
              className="mx-auto flex items-center gap-2 rounded-full bg-white px-4 py-2 md:mx-0"
              aria-label={`${site.name} ${site.region} — Home`}
            >
              <Image
                src="/logo-aliplus.png"
                alt="Aliplus"
                width={280}
                height={110}
                className="h-9 w-auto"
              />
              <span className="font-display text-xl font-semibold tracking-tight text-forest">
                {site.region}
              </span>
            </Link>
          </section>

          {/* Bottom row */}
          <section className="flex flex-col items-center justify-between gap-5 md:flex-row md:items-start md:gap-0">
            <ul className="flex gap-8 text-white/90">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
            <p>
              <small className="text-white">
                © {new Date().getFullYear()} {site.legalName}. All rights
                reserved
              </small>
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}
