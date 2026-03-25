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
        className={`lg:hidden fixed top-0 left-0 right-0 z-200 transition-all duration-300 ${
          mobileScrolled
            ? "bg-white/15 backdrop-blur-md border-b border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            : "bg-white"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div className="relative z-10 px-4 pt-0 pb-3.5 flex items-center justify-center">
          <div className={mobileScrolled ? "" : "drop-shadow-lg"}>
            <Logo isScrolled={mobileScrolled} />
          </div>
        </div>
      </header>

      <header
        className={`hidden lg:block fixed z-200 transition-all duration-300 ${
          isScrolled ? "top-0 left-4 right-4" : "top-0 left-0 right-0"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <div
          className={`mx-auto max-w-7xl relative z-10 transition-all duration-300 ${
            isHeroOverlay ? "px-6 pt-0 pb-2" : "px-6 pt-0 pb-4"
          }`}
        >
          <nav
            className={`flex items-center justify-between rounded-3xl transition-all duration-300 ${
              isScrolled
                ? "bg-white/15 backdrop-blur-md border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
                : "bg-white border border-brand-gray-light/60 shadow-sm"
            } px-6 py-3`}
          >
            <Logo isScrolled={isScrolled} />

            <div
              className="hidden lg:flex items-center space-x-8 relative z-10"
              style={{ pointerEvents: "auto" }}
            >
              <nav
                className="flex items-center space-x-8"
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
                      className={`group font-medium text-xl ${baseColor} transition-all duration-200 hover:-translate-y-0.5 relative flex items-center space-x-1`}
                      style={{ pointerEvents: "auto" }}
                    >
                      <span>{link.label}</span>
                      <div
                        className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 origin-left ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        } bg-brand-primary`}
                      />
                    </Link>
                  );
                })}
              </nav>
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
