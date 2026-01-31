"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export function ConnectMarquee() {
  const items = Array.from({ length: 12 });

  return (
    <section
      aria-live="off"
      className="relative bg-brand-primary text-white -mt-px overflow-hidden"
    >
      <Link
        href="/contact"
        className="group relative block w-full h-[72px] sm:h-[88px] lg:h-[60px] overflow-hidden focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
      >
        {/* Fade edges - narrower on mobile for more visible content */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 sm:w-10 lg:w-16 bg-linear-to-r from-brand-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 sm:w-10 lg:w-16 bg-linear-to-l from-brand-primary to-transparent" />

        <div className="flex h-full w-max animate-marquee items-center py-3 group-hover:[animation-play-state:paused]">
          {[items, items].map((iteration, outerIdx) => (
            <div
              key={outerIdx}
              className="flex shrink-0 items-center gap-6 sm:gap-10 lg:gap-12 pr-6 sm:pr-10 lg:pr-12"
            >
              {iteration.map((_, idx) => (
                <span
                  key={`${outerIdx}-${idx}`}
                  className="flex shrink-0 items-center gap-3 sm:gap-5 lg:gap-3 whitespace-nowrap text-xl sm:text-2xl lg:text-2xl font-black uppercase tracking-[0.12em] sm:tracking-[0.16em] lg:tracking-[0.2em] transition group-hover:-translate-y-px"
                >
                  Connect with us
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    className="size-5 sm:size-6 lg:size-6 shrink-0"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}
