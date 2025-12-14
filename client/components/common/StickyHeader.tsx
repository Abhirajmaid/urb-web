"use client";

import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import Button from "./Button";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroPresent, setHeroPresent] = useState(true); // Start as true to prevent flash
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const { openModal } = useEnquiryModal();

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero-root]");

    if (!hero) {
      // Use setTimeout to avoid synchronous setState
      setTimeout(() => {
        setHeroPresent(false);
        setIsScrolled(true);
        // Don't set mobileScrolled to true initially - let scroll handle it
      }, 0);
    } else {
      setTimeout(() => {
        setHeroPresent(true);
      }, 0);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setMobileScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Header - Logo Only */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-[100] bg-transparent"
        style={{ pointerEvents: "auto" }}
      >
        {/* White Background on Scroll */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            mobileScrolled
              ? "opacity-100 bg-white border-b border-dark/10 shadow-md"
              : "opacity-0 bg-transparent pointer-events-none"
          }`}
        />

        {/* Logo Container - Centered */}
        <div className="relative z-10 px-4 py-3.5 flex items-center justify-center">
          <div className={mobileScrolled ? "" : "drop-shadow-lg"}>
            <Logo isScrolled={mobileScrolled} />
          </div>
        </div>
      </header>

      {/* Desktop Header - Always Floating with Glass Morphism */}
      <header
        className="hidden lg:block fixed top-4 left-20 right-20 z-[100] transition-all duration-300"
        style={{ pointerEvents: "auto" }}
      >
        {/* Glass Morphism Background - Always Visible, Totally Transparent */}
        <div className="absolute inset-0 backdrop-blur-md w-full rounded-2xl bg-white/10 border border-white/20 shadow-lg shadow-black/5">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-white/5" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10 px-6 py-2 lg:px-10 xl:px-14">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Logo isScrolled={true} />

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-8 relative z-10"
              style={{ pointerEvents: "auto" }}
            >
              <Navigation variant="dark" />
            </div>

            {/* Claim Assistance Button */}
            <Button
              link="/contact"
              type="primary"
              size="sm"
              className="uppercase tracking-[0.12em] !bg-[#3b1d1c]"
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
