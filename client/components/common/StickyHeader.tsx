"use client";

import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import Button from "./Button";

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroPresent, setHeroPresent] = useState(true); // Start true to avoid flash
  const [mobileScrolled, setMobileScrolled] = useState(false);

  const isHeroOverlay = heroPresent && !isScrolled;

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero-root]");

    if (!hero) {
      // No hero: treat as already scrolled so nav is visible
      // Wrap in setTimeout to avoid synchronous setState within effect
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
      {/* Mobile Header - Logo Only */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-200 bg-transparent"
        style={{ pointerEvents: "auto" }}
      >
        {/* Background on scroll */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            mobileScrolled
              ? "opacity-100 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md"
              : "opacity-0 bg-transparent pointer-events-none"
          }`}
        />

        <div className="relative z-10 px-4 py-3.5 flex items-center justify-center">
          <div className={mobileScrolled ? "" : "drop-shadow-lg"}>
            <Logo isScrolled={mobileScrolled} />
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header
        className={`hidden lg:block fixed z-200 transition-all duration-300 ${
          isScrolled ? "top-6 left-4 right-4" : "top-0 left-0 right-0"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        {/* Initial transparent fill to avoid color flash */}
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        {/* Glass background */}
        <div
          className={`absolute inset-0 backdrop-blur-xl max-w-7xl mx-auto rounded-3xl transition-all duration-500 ${
            isScrolled
              ? "opacity-100 translate-y-0 bg-white/10 backdrop-blur-xl border border-white/12 shadow-2xl shadow-black/12"
              : "opacity-0 -translate-y-2 bg-transparent pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 rounded-3xl bg-linear-to-br from-white/20 to-white/6 transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`mx-auto max-w-7xl relative z-10 transition-all duration-300 ${
            // When the header overlays the hero, reduce top padding so the nav sits directly on the hero.
            isHeroOverlay ? "px-6 py-2" : "px-6 py-4"
          }`}
        >
          <nav className="flex items-center justify-between">
            <Logo isScrolled={isScrolled} />

            <div
              className="hidden lg:flex items-center space-x-8 relative z-10"
              style={{ pointerEvents: "auto" }}
            >
              <Navigation
                variant={isHeroOverlay || isScrolled ? "dark" : "light"}
              />
            </div>

            <Button
              link="/contact"
              type={isScrolled ? "primary" : "secondary"}
              size="sm"
              className="uppercase tracking-[0.12em]"
            >
              Claim Assistance
            </Button>
          </nav>
        </div>
      </header>
      {!heroPresent ? <div className="h-[56px]" aria-hidden /> : null}
    </>
  );
}
