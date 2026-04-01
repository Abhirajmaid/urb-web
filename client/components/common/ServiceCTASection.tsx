"use client";

import Button from "./Button";

export function ServiceCTASection() {
  return (
    <section className="bg-brand-primary px-4 py-10 sm:px-6 sm:py-14 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to secure your future?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-white/90 sm:mt-4 sm:max-w-3xl sm:px-0 sm:text-base">
          With high claim settlement rates, expert advisors, and policies
          crafted for real-life needs, URB gives you unmatched protection and
          long-term security.
        </p>

        <div className="mt-6 flex justify-center sm:mt-8 pb-2">
          <Button
            link="/contact"
            type="secondary"
            size="md"
            className="pl-5 pr-1.5 py-1.5 text-sm font-medium shadow-[0_8px_26px_rgba(0,0,0,0.2)] sm:pl-6 sm:text-base"
          >
            Connect us
          </Button>
        </div>
      </div>
    </section>
  );
}
