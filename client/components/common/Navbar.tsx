"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "./Button";
import { Logo } from "./Logo";
import { mainNavLinks } from "@/data/navigation";

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
        className={`lg:hidden fixed left-0 right-0 top-0 z-200 w-screen max-w-none transition-all duration-300 rounded-b-2xl border-x-0 border-t-0 ${
          mobileScrolled
            ? "border-b border-white/20 bg-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
            : "border-b border-brand-gray-light/40 bg-white shadow-sm"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div className="relative z-10 flex w-full items-center justify-center pb-3.5 pt-2">
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
            className={`relative flex w-full flex-nowrap items-center justify-between gap-4 rounded-3xl transition-all duration-300 ${
              isScrolled
                ? "border border-white/20 bg-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur-md"
                : "border border-brand-gray-light/60 bg-white shadow-sm"
            } px-3 py-3 sm:px-5 lg:px-6`}
          >
            <div className="relative z-20 flex min-w-0 shrink-0 items-center">
              <Logo isScrolled={isScrolled} />
            </div>

            <div
              className="absolute left-1/2 top-1/2 z-10 flex max-w-[min(100%-12rem,48rem)] -translate-x-1/2 -translate-y-1/2 flex-nowrap items-center justify-center gap-6 sm:gap-8 lg:gap-10"
              style={{ pointerEvents: "auto" }}
            >
              {mainNavLinks.map((link) => {
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

            <div
              className="relative z-20 flex min-w-0 shrink-0 items-center"
              style={{ pointerEvents: "auto" }}
            >
              <Button
                link="/contact"
                type={isScrolled ? "primary" : "secondary"}
                size="sm"
                className="shrink-0 uppercase tracking-[0.12em]"
              >
                Contact us
              </Button>
            </div>
          </nav>
        </div>
      </header>
      {/* Match fixed header (~50px content + border); tighter than 56px to remove stray strip before hero on mobile */}
      <div className="h-[52px] lg:h-[88px]" aria-hidden />
    </>
  );
}
