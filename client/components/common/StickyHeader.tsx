"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import Button from "./Button";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroPresent, setHeroPresent] = useState(true); // Start as true to prevent flash
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
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
      // Close mobile menu on scroll
      if (isMobileMenuOpen && scrollPosition > 50) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Header - Logo and Hamburger */}
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

        {/* Logo and Hamburger Container */}
        <div className="relative z-10 px-4 py-3.5 flex items-center justify-between">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-20 p-2 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <Icon
                icon="mdi:close"
                className={`h-6 w-6 transition-colors ${
                  mobileScrolled ? "text-brand-dark" : "text-white"
                }`}
              />
            ) : (
              <Icon
                icon="mdi:menu"
                className={`h-6 w-6 transition-colors ${
                  mobileScrolled ? "text-brand-dark" : "text-white"
                }`}
              />
            )}
          </button>

        {/* Logo Container - Centered */}
          <div className="absolute left-1/2 -translate-x-1/2">
          <div className={mobileScrolled ? "" : "drop-shadow-lg"}>
            <Logo isScrolled={mobileScrolled} />
            </div>
          </div>

          {/* Spacer for right side balance */}
          <div className="w-10" />
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-[90] top-[56px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div
              className={`fixed top-[56px] left-0 right-0 bg-white z-[95] shadow-lg border-b border-dark/10 transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <nav className="px-4 py-6">
                <ul className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(link.href);

                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            isActive
                              ? "bg-brand-primary/10 text-brand-primary"
                              : "text-brand-dark hover:bg-gray-50"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Claim Assistance Button */}
                <div className="mt-6 px-4">
                  <Button
                    link="/contact"
                    type="primary"
                    size="sm"
                    className="w-full justify-center uppercase tracking-[0.12em] !bg-[#3b1d1c]"
                  >
                    Claim Assistance
                  </Button>
                </div>
              </nav>
            </div>
          </>
        )}
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
