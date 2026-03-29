"use client";

import Button from "./Button";
import { SectionHeader } from "./SectionHeader";
import { Icon } from "@iconify/react";

export function ServiceCTASection() {
  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 text-brand-dark">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(78,7,8,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-brand-primary/[0.06] blur-3xl sm:h-56 sm:w-56"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-32 w-32 -translate-y-1/2 rounded-full bg-[#3b1d1c]/[0.05] blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-[#e9e0dd] bg-white/95 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] backdrop-blur-sm">
          <div
            className="h-px bg-[linear-gradient(90deg,transparent,#e8b4b4,transparent)]"
            aria-hidden
          />
          <div
            className="h-1 bg-[linear-gradient(90deg,#faf7f5_0%,#4e0708_50%,#faf7f5_100%)]"
            aria-hidden
          />

          <div className="relative px-6 py-9 sm:px-10 sm:py-11 lg:px-12 lg:py-12">
            <div className="mx-auto max-w-xl text-center">
              <SectionHeader
                eyebrow="Get protected"
                title="Ready to secure your future?"
                description="With high claim settlement rates, expert advisors, and policies crafted for real-life needs, URB gives you unmatched protection and long-term security."
                align="center"
                eyebrowClassName="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm"
                titleClassName="text-[#3b1d1c] text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight"
                descriptionClassName="text-[#6f5655] max-w-lg mx-auto leading-relaxed"
              />
            </div>

            <div className="mx-auto mt-8 max-w-lg sm:mt-9 sm:max-w-xl">
              <div className="rounded-2xl border border-[#d9ccc8] bg-[#ebe2df] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_-12px_rgba(59,29,28,0.12)] sm:px-10 sm:py-9">
                <div className="flex flex-col items-center gap-5">
                  <Button
                    link="/contact"
                    type="primary"
                    size="md"
                    className="gap-3 pl-4 pr-3 text-sm sm:text-base shadow-[0_16px_36px_rgba(78,7,8,0.28)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(78,7,8,0.32)]"
                  >
                    Connect us
                  </Button>
                  <p className="flex items-center gap-2 text-center text-xs text-[#6f5655] sm:text-sm">
                    <Icon
                      icon="mdi:shield-check-outline"
                      className="size-4 shrink-0 text-brand-primary"
                      aria-hidden
                    />
                    <span>Free consultation — no obligation</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="h-1 bg-[linear-gradient(90deg,#faf7f5_0%,#4e0708_50%,#faf7f5_100%)]"
            aria-hidden
          />
          <div
            className="h-px bg-[linear-gradient(90deg,transparent,#e8b4b4,transparent)]"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
