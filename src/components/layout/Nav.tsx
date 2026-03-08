"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";
import { domainSummaries } from "@/lib/domains";
import { greeting } from "@/lib/data";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lockedScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const { body, documentElement } = document;
    const originalBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    const originalHtmlOverflow = documentElement.style.overflow;

    lockedScrollY.current = window.scrollY;
    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${lockedScrollY.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      documentElement.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyStyles.overflow;
      body.style.position = originalBodyStyles.position;
      body.style.top = originalBodyStyles.top;
      body.style.left = originalBodyStyles.left;
      body.style.right = originalBodyStyles.right;
      body.style.width = originalBodyStyles.width;
      window.scrollTo(0, lockedScrollY.current);
    };
  }, [menuOpen]);

  const navClassName = clsx(
    "fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8",
    scrolled
      ? "bg-obsidian/78 backdrop-blur-xl supports-[backdrop-filter]:bg-obsidian/62"
      : "bg-transparent",
  );
  const mobileCtaClassName =
    "rounded-2xl border border-border-subtle bg-surface/50 px-4 py-3 text-center text-sm text-text-primary transition hover:border-accent-amber/25 hover:bg-surface/70";

  return (
    <header className={navClassName}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border-subtle/80 bg-obsidian/70 px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-md sm:px-5">
        <Link href="/" className="min-w-0">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-accent-amber">Cosmobean</p>
          <p className="truncate text-sm text-text-secondary">{greeting.title}</p>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm transition",
                isActive(pathname, item.href)
                  ? "bg-surface text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/domains"
              className={clsx(
                "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition",
                pathname === "/domains" || pathname.startsWith("/domains/")
                  ? "bg-surface text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              Domains
              <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="pointer-events-none absolute right-0 top-full mt-3 w-[28rem] rounded-[1.75rem] border border-border-subtle bg-card/95 p-4 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid gap-2 sm:grid-cols-2">
                {domainSummaries.map((domain) => (
                  <Link
                    key={domain.slug}
                    href={`/domains/${domain.slug}`}
                    className="rounded-2xl border border-transparent bg-surface/55 p-3 transition hover:border-accent-amber/25 hover:text-text-primary"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent-copper">
                      {domain.slug}
                    </p>
                    <p className="mt-2 text-sm text-text-primary">{domain.title}</p>
                    <p className="mt-1 text-xs leading-6 text-text-secondary">{domain.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/resume"
            className="rounded-full border border-border-subtle px-4 py-2 text-sm text-text-secondary transition hover:border-accent-amber/35 hover:text-text-primary"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-accent-amber/30 bg-gradient-to-r from-accent-amber/15 via-accent-copper/10 to-accent-amber/15 px-4 py-2 text-sm text-text-primary transition hover:border-accent-amber/45"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-text-primary lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mx-auto mt-3 max-h-[calc(100svh-7.5rem)] max-w-7xl overflow-y-auto overscroll-contain rounded-[2rem] border border-border-subtle bg-card/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.26)] backdrop-blur-xl [touch-action:pan-y] lg:hidden"
          >
            <div className="grid gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "rounded-2xl px-4 py-3 text-sm transition",
                    isActive(pathname, item.href)
                      ? "bg-surface text-text-primary"
                      : "text-text-secondary hover:bg-surface/70 hover:text-text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/domains"
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "rounded-2xl px-4 py-3 text-sm transition",
                  pathname === "/domains" || pathname.startsWith("/domains/")
                    ? "bg-surface text-text-primary"
                    : "text-text-secondary hover:bg-surface/70 hover:text-text-primary",
                )}
              >
                All domains
              </Link>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {domainSummaries.map((domain) => (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-border-subtle bg-surface/50 px-4 py-3"
                >
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-copper">{domain.slug}</p>
                  <p className="mt-2 text-sm text-text-primary">{domain.title}</p>
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className={mobileCtaClassName}
              >
                Resume
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={mobileCtaClassName}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
