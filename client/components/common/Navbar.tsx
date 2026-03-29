"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "./Button";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroPresent, setHeroPresent] = useState(true);
  const [mobileScrolled, setMobileScrolled] = useState(false);

  const isHeroOverlay = heroPresent && !isScrolled;
  const baseColor =
    isHeroOverlay || isScrolled
      ? "text-brand-dark/80 hover:text-brand-dark"
      : "text-white hover:text-white";

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero-root]");

    if (!hero) {
      setTimeout(() => {
        setHeroPresent(false);
        setIsScrolled(true);
        setMobileScrolled(true);
      }, 0);
    } else {
      setTimeout(() => {
        setHeroPresent(true);
      }, 0);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hasHero = document.querySelector("[data-hero-root]");
      setHeroPresent(Boolean(hasHero));

      if (!hasHero) {
        setIsScrolled(true);
        setMobileScrolled(true);
        return;
      }

      setIsScrolled(scrollPosition > 50);
      setMobileScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`lg:hidden fixed inset-x-0 top-0 z-200 w-full transition-all duration-300 rounded-b-2xl border-x-0 border-t-0 ${
          mobileScrolled
            ? "border-b border-white/20 bg-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
            : "border-b border-brand-gray-light/40 bg-white shadow-sm"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-[100vw] items-center justify-center px-4 pb-3.5 pt-2">
          <div
            className={`flex w-full justify-center ${mobileScrolled ? "" : "drop-shadow-lg"}`}
          >
            <Logo isScrolled={mobileScrolled} />
          </div>
        </div>
      </header>

      <header
        className="hidden lg:block fixed inset-x-0 top-4 z-200 w-full"
        style={{ pointerEvents: "auto" }}
      >
        <div
          className={`relative z-10 mx-auto w-full max-w-7xl px-4 transition-all duration-300 sm:px-6 ${
            isHeroOverlay ? "pb-2 pt-0" : "pb-4 pt-0"
          }`}
        >
          <nav
            className={`grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-3xl transition-all duration-300 sm:gap-3 ${
              isScrolled
                ? "border border-white/20 bg-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur-md"
                : "border border-brand-gray-light/60 bg-white shadow-sm"
            } px-3 py-3 sm:px-5 lg:px-6`}
          >
            <div
              className="flex min-w-0 flex-wrap items-center justify-end gap-x-3 gap-y-1 pr-1 lg:gap-x-4 xl:gap-x-6"
              style={{ pointerEvents: "auto" }}
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative whitespace-nowrap text-base font-medium lg:text-lg xl:text-xl ${baseColor} transition-all duration-200 hover:-translate-y-0.5`}
                    style={{ pointerEvents: "auto" }}
                  >
                    <span>{link.label}</span>
                    <div
                      className={`absolute -bottom-1 left-0 h-0.5 origin-left transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      } bg-brand-primary`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-center px-1 sm:px-2">
              <Logo isScrolled={isScrolled} />
            </div>

            <div
              className="flex min-w-0 justify-start pl-1"
              style={{ pointerEvents: "auto" }}
            >
              <Button
                link="/contact"
                type={isScrolled ? "primary" : "secondary"}
                size="sm"
                className="shrink-0 uppercase tracking-[0.12em]"
              >
                Claim Assistance
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <div className="h-[56px] sm:h-[60px] lg:h-[88px]" aria-hidden />
    </>
  );
}
