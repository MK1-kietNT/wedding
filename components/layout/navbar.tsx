"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COUPLE_PROFILE } from "@/data/wedding";
import { EDITORIAL_EASE, NAVIGATION_ITEMS } from "@/constants/wedding";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
  onNavigate: (href: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    onNavigate(href);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-editorial",
        scrolled
          ? "border-b border-burgundy/10 bg-ivory/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary navigation"
        className="editorial-container flex h-16 items-center justify-between sm:h-20"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          }}
          className={cn(
            "font-editorial text-xl tracking-[0.18em] transition-colors duration-300 sm:text-2xl",
            scrolled ? "text-burgundy" : "text-ivory"
          )}
        >
          {COUPLE_PROFILE.monogram}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={cn(
                    "relative inline-flex min-h-[44px] items-center text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                    scrolled
                      ? isActive
                        ? "text-burgundy"
                        : "text-charcoal-muted hover:text-burgundy"
                      : isActive
                        ? "text-ivory"
                        : "text-ivory/80 hover:text-ivory"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
                      className={cn(
                        "absolute bottom-2 left-0 right-0 h-px",
                        scrolled ? "bg-burgundy" : "bg-gold"
                      )}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
            scrolled
              ? "text-burgundy hover:bg-burgundy/5"
              : "text-ivory hover:bg-ivory/10"
          )}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
            className="overflow-hidden border-b border-burgundy/10 bg-ivory/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="editorial-container flex flex-col py-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      className={cn(
                        "flex min-h-[44px] items-center justify-between border-b border-burgundy/5 py-2 text-xs uppercase tracking-[0.22em] transition-colors",
                        isActive ? "font-semibold text-burgundy" : "text-charcoal-muted"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

