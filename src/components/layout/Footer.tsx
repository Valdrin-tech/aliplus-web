"use client";

import Image from "next/image";
import { Link } from "@/i18n/Link";
import { useT } from "@/i18n/LocaleProvider";
import { site } from "@/lib/content";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

export function Footer() {
  const t = useT();
  const columns = [
    { heading: t.footer.products, links: [{ label: "Aliplus", href: "/products/aliplus" }] },
    { heading: t.footer.guide, links: [{ label: t.nav.usageGuide, href: "/usage-guide" }] },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <Link href="/" className="site-footer__logo" aria-label={t.nav.brandHome}>
            <Image
              src="/logo-aliplus.png"
              alt="Aliplus"
              width={962}
              height={582}
              className="site-footer__logo-img"
            />
          </Link>
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
              {t.footer.promptLine1}
              <br />
              {t.footer.promptLine2}
            </p>
            <a className="site-footer__phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
              {site.phone}
            </a>
            <a className="site-footer__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a
              className="site-footer__place"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.openMap}
            >
              <span className="site-footer__pin" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s6.5-5.6 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.4 6.5 11 6.5 11Z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              <span className="site-footer__place-text">
                <span className="site-footer__place-label">{t.footer.location}</span>
                <span className="site-footer__place-name">{site.locationName}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {site.legalName}.
          </p>
          <nav className="site-footer__legal" aria-label={t.footer.legal}>
            <Link href="/faq">{t.footer.privacy}</Link>
            <Link href="/faq">{t.footer.terms}</Link>
            <LanguageSwitch className="lang-switch--footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
