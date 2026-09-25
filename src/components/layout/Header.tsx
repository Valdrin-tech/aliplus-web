"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, site } from "@/lib/content";
import { BrandLogos } from "@/components/layout/BrandLogos";

const OVER_HERO = new Set([
  "/",
  "/products/aliplus",
  "/company",
  "/usage-guide",
  "/calculator",
  "/contact",
]);

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Aliplus", href: "/products/aliplus" },
  { label: "Company", href: "/company" },
  { label: "Usage Guide", href: "/usage-guide" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const overHero = OVER_HERO.has(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSettled, setMenuSettled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(88);

  const overlay = overHero || menuOpen;
  const tone =
    menuOpen || (overlay && !compact)
      ? "light"
      : overlay && compact
        ? "muted"
        : "color";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      setMenuSettled(false);
      return;
    }
    const timer = window.setTimeout(() => setMenuSettled(true), 900);
    return () => window.clearTimeout(timer);
  }, [menuOpen]);

  useEffect(() => {
    if (overHero) return;
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [compact, pathname, overHero, menuOpen]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setCompact((prev) => {
        const next = y > 40;
        return prev === next ? prev : next;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <div
        aria-hidden
        className="header-spacer"
        style={{ height: overHero ? 0 : headerHeight }}
      />

      <header
        ref={headerRef}
        className={[
          "site-header",
          overlay ? "is-overlay" : "",
          compact && !menuOpen ? "is-compact" : "",
          menuOpen ? "is-menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="site-header__bar">
          <div className="site-header__inner">
            <button
              type="button"
              className="site-menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="site-menu-toggle__icon" aria-hidden>
                {menuOpen ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 1l12 12M13 1 1 13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path
                      d="M1 1h8M1 6h14M7 11h8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
              <span>{menuOpen ? "Close" : "Menu"}</span>
            </button>

            <div className="site-header__brand">
              <BrandLogos compact={compact && !menuOpen} tone={tone} />
            </div>

            <div className="site-header__end">
              <Link
                href={nav.support.href}
                className={`site-header-link ${isActive(pathname, nav.support.href) ? "is-active" : ""}`}
              >
                {nav.support.label}
              </Link>
              <Link
                href="/contact"
                className={`site-header-link ${isActive(pathname, "/contact") ? "is-active" : ""}`}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`site-menu-dismiss ${menuOpen ? "is-open" : ""}`}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="site-menu"
        className={`site-menu ${menuOpen ? "is-open" : ""} ${menuSettled ? "is-settled" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav className="site-menu__nav" aria-label="Site">
          {menuItems.map((item, i) => (
            <div
              key={item.href}
              className="site-menu__item"
              style={{ "--i": i } as CSSProperties}
            >
              <Link
                href={item.href}
                className={`site-menu__link ${isActive(pathname, item.href) ? "is-active" : ""}`}
                onClick={() => {
                  if (isActive(pathname, item.href)) setMenuOpen(false);
                }}
              >
                <span className="site-menu__mark" aria-hidden>
                  ×
                </span>
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="site-menu__foot">
          <div className="site-menu__foot-copy">
            <p className="site-menu__kicker">{site.legalName}</p>
            <a className="site-menu__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
