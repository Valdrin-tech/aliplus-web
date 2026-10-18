"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "@/i18n/Link";
import { stripLocale } from "@/i18n/config";
import { useT } from "@/i18n/LocaleProvider";
import { site } from "@/lib/content";
import { BrandLogos } from "@/components/layout/BrandLogos";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";

const OVER_HERO = new Set([
  "/",
  "/products/aliplus",
  "/company",
  "/usage-guide",
  "/contact",
]);

const LIGHT_OVERLAY = new Set<string>();

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const t = useT();
  const fullPath = usePathname();
  // Locale-free path ("/en/company" → "/company") for route matching.
  const pathname = stripLocale(fullPath ?? "/");
  const overHero = OVER_HERO.has(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSettled, setMenuSettled] = useState(false);
  const [compact, setCompact] = useState(false);
  // Phones: scrolling down leaves only the menu button; scrolling up brings the rest back.
  const [tucked, setTucked] = useState(false);
  const lastY = useRef(0);
  const [headerHeight, setHeaderHeight] = useState(88);

  const menuItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.aliplus, href: "/products/aliplus" },
    { label: t.nav.company, href: "/company" },
    { label: t.nav.usageGuide, href: "/usage-guide" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const [onLight, setOnLight] = useState(LIGHT_OVERLAY.has(pathname));
  const overlay = overHero || menuOpen;
  const lightBar = overlay && onLight && !menuOpen;
  const tone = menuOpen
    ? "light"
    : lightBar
      ? "color"
      : overlay && !compact
        ? "light"
        : overlay && compact
          ? "muted"
          : "color";

  useEffect(() => {
    setMenuOpen(false);
  }, [fullPath]);

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
  }, [compact, fullPath, overHero, menuOpen]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setCompact((prev) => {
        const next = y > 40;
        return prev === next ? prev : next;
      });
      const delta = y - lastY.current;
      if (y <= 72) setTucked(false);
      else if (delta > 6) setTucked(true);
      else if (delta < -6) setTucked(false);
      lastY.current = y;
      // Pages can tag full-width sections with data-header-surface="light" | "dark";
      // the bar switches to dark text while a light section sits under it.
      const surfaces = document.querySelectorAll<HTMLElement>("[data-header-surface]");
      if (surfaces.length) {
        const probe = 40;
        const under = Array.from(surfaces).find((el) => {
          const rect = el.getBoundingClientRect();
          return rect.top <= probe && rect.bottom > probe;
        });
        setOnLight(under?.dataset.headerSurface === "light");
      } else if (LIGHT_OVERLAY.has(pathname)) {
        const intro = document.querySelector(".co-hero__copy");
        const bottom = intro?.getBoundingClientRect().bottom ?? 0;
        setOnLight(bottom > 96);
      } else {
        setOnLight(false);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const lenis = (window as Window & { __lenis?: { on?: (e: string, fn: () => void) => () => void } }).__lenis;
    const offLenis = lenis?.on?.("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      offLenis?.();
    };
  }, [pathname, fullPath]);

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
          lightBar ? "is-on-light" : "",
          compact && !menuOpen ? "is-compact" : "",
          menuOpen ? "is-menu-open" : "",
          tucked && !menuOpen ? "is-tucked" : "",
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
              <span>{menuOpen ? t.nav.close : t.nav.menu}</span>
            </button>

            <div className="site-header__brand">
              <BrandLogos compact={compact && !menuOpen} tone={tone} />
            </div>

            <div className="site-header__end">
              <Link
                href="/usage-guide"
                className={`site-header-link ${isActive(pathname, "/usage-guide") ? "is-active" : ""}`}
              >
                {t.nav.usageGuide}
              </Link>
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`site-menu-dismiss ${menuOpen ? "is-open" : ""}`}
        aria-label={t.nav.closeMenu}
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
        <nav className="site-menu__nav" aria-label={t.nav.siteNav}>
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
          <LanguageSwitch />
        </div>
      </div>
    </>
  );
}
