"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";
import { BrandLogos } from "@/components/layout/BrandLogos";

function GuideIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 4.75h7.5L19 9.25V19.25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4.75V9.25H19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean) {
  return ["site-nav-link", active ? "is-active" : ""].join(" ");
}

export function Header() {
  const pathname = usePathname();
  // Pages with a full-bleed hero that sits underneath the fixed header
  const isHome =
    pathname === "/" ||
    pathname === "/products/aliplus" ||
    pathname === "/usage-guide" ||
    pathname === "/calculator" ||
    pathname === "/contact";
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(96);
  const supportActive = isActive(pathname, nav.support.href);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isHome) return;
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.offsetHeight + 12);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [mobileOpen, compact, pathname, isHome]);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setCompact((prev) => {
        const next = y > 50;
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

  return (
    <>
      <div
        aria-hidden
        className="header-spacer"
        style={{ height: isHome ? 0 : headerHeight }}
      />

      <header
        ref={headerRef}
        className={`site-header ${compact ? "is-compact" : ""}`}
      >
        <div className="site-header__bar">
          <div className="site-header__inner">
            <div className="justify-self-start">
              <BrandLogos compact={compact} />
            </div>

            <nav
              className="hidden items-center justify-center gap-x-5 xl:gap-x-7 lg:flex"
              aria-label="Main"
            >
              {nav.primary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(isActive(pathname, item.href))}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-3 justify-self-end">
              <Link
                href={nav.support.href}
                className={`header-join-btn hidden sm:inline-flex ${
                  supportActive ? "is-active" : ""
                }`}
              >
                <GuideIcon className="shrink-0" />
                <span>{nav.support.label}</span>
              </Link>

              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-forest lg:hidden"
                aria-expanded={mobileOpen}
                aria-label="Menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <div className="flex flex-col gap-1.5">
                  <span
                    className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="border-t border-dark/6 px-4 py-5 lg:hidden">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {nav.primary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`${navLinkClass(isActive(pathname, item.href))} py-3 text-base`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={nav.support.href}
                  onClick={() => setMobileOpen(false)}
                  className="header-join-btn mt-4 w-full justify-center"
                >
                  <GuideIcon className="shrink-0" />
                  <span>{nav.support.label}</span>
                </Link>
              </nav>
            </div>
          )}
        </div>

        <span className="sr-only">{site.legalName}</span>
      </header>
    </>
  );
}
