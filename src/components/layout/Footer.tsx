import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

const columns = [
  {
    heading: "Products",
    links: [
      { label: "Aliplus", href: "/products/aliplus" },
      { label: "Alimaya", href: "/products/alimaya" },
      { label: "Aliplantes", href: "/products/aliplantes" },
    ],
  },
  {
    heading: "Guide",
    links: [
      { label: "Usage Guide", href: "/usage-guide" },
      { label: "Calculator", href: "/calculator" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__cols">
            {columns.map((col) => (
              <nav key={col.heading} className="site-footer__col" aria-label={col.heading}>
                <p className="site-footer__heading">{col.heading}</p>
                {col.links.map((link) => (
                  <Link key={link.href} href={link.href} className="site-footer__link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <div className="site-footer__contact">
            <p className="site-footer__prompt">
              If you have any questions
              <br />
              feel free to contact us:
            </p>
            <a className="site-footer__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {site.legalName}.
          </p>
          <Link href="/" className="site-footer__logo" aria-label="Aliplus Kosova — Home">
            <Image
              src="/logo-aliplus.png"
              alt="Aliplus"
              width={962}
              height={582}
              className="site-footer__logo-img"
            />
          </Link>
          <nav className="site-footer__legal" aria-label="Legal">
            <Link href="/faq">Privacy Policy</Link>
            <Link href="/faq">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
