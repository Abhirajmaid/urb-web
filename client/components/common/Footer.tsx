import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const insuranceLinks = [
  "Life Insurance",
  "Marine Insurance",
  "Burglary Insurance",
  "Fire Insurance",
  "Home Insurance",
  "Property Insurance",
  "Travel Insurance",
  "Liability Insurance",
  "Motor Insurance",
  "Jewellery Insurance",
  "Diamond Insurance",
  "Gold Insurance",
  "Lic insurance",
  "mutual fund Insurance",
  "GIC general Insurance",
];

const socialLinks = [
  { label: "Facebook", icon: "mdi:facebook", href: "#" },
  { label: "Instagram", icon: "mdi:instagram", href: "#" },
  { label: "YouTube", icon: "mdi:youtube", href: "#" },
  { label: "Twitter", icon: "mdi:twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#f4f0ee] text-white">
      {/* Floating dark maroon container */}
      <div className="px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10">
        <div className="mx-auto">
          <div className="bg-[#3b1d1c] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[600px] sm:min-h-[650px] lg:min-h-0">
            <div className="relative z-10 mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
              <div className="flex flex-col gap-10 sm:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
                {/* Left section */}
                <div className="space-y-6 sm:space-y-6 lg:space-y-6 max-w-xl">
                  <Logo />
                  <p className="max-w-md text-base sm:text-base lg:text-sm leading-relaxed text-white/80">
                    Expert team for insurance. Protecting your future with
                    comprehensive coverage, personalized service, and a
                    commitment to your peace of mind.
                  </p>

                  <div className="space-y-4 sm:space-y-3 lg:space-y-3">
                    <p className="text-lg sm:text-base lg:text-base font-semibold text-white">
                      Connect With US
                    </p>
                    <div className="flex items-center gap-4 sm:gap-4 lg:gap-4">
                      {socialLinks.map((social) => (
                        <Link
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="group flex h-12 w-12 sm:h-11 sm:w-11 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-white/60 bg-transparent transition hover:bg-white/10"
                        >
                          <Icon
                            icon={social.icon}
                            width={22}
                            height={22}
                            className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-white group-hover:text-white"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right section */}
                <div className="space-y-6 sm:space-y-6 lg:space-y-6 lg:self-start lg:w-1/2">
                  <p className="text-lg sm:text-base lg:text-base font-semibold text-white">
                    Navigation
                  </p>
                  <div className="flex flex-wrap items-center gap-5 sm:gap-6 lg:gap-6 text-base sm:text-base lg:text-sm text-white/80 mb-8 sm:mb-8 lg:mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-4 sm:space-y-3 lg:space-y-3">
                    <p className="text-lg sm:text-base lg:text-base font-semibold text-white">
                      Insurance
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-base sm:text-base lg:text-sm text-white/80">
                      {insuranceLinks.map((label) => (
                        <p key={label} className="hover:text-white transition">
                          {label}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright notice outside the dark container */}
      <div className="bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-14">
          <p className="text-center text-base sm:text-base lg:text-sm text-[#6f5655]">
            © 2025 URB — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
