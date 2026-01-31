"use client";

import Button from "./Button";
import { SectionHeader } from "./SectionHeader";

export function ServiceCTASection() {
  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-12 lg:pb-20 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[400px] sm:min-h-[450px] lg:min-h-0">
          <div className="absolute inset-0 rounded-2xl" />

          <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
            <SectionHeader
              title="Ready to Secure Your Future ?"
              description="With high claim settlement rates, expert advisors, and policies crafted for real-life needs, URB gives you unmatched protection and long-term security."
              align="center"
              descriptionClassName="max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] mx-auto"
            />

            <div className="mt-8 sm:mt-8 lg:mt-8 flex justify-center">
              <div className="w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] mx-auto rounded-2xl bg-[#ebe2df] px-6 sm:px-6 lg:px-6 py-8 sm:py-8 lg:py-6 flex items-center justify-center">
                <Button
                  link="/contact"
                  type="primary"
                  size="sm"
                  className="gap-3 pl-3 text-sm shadow-[0_20px_40px_rgba(14,14,14,0.18)] hover:-translate-y-0.5 hover:shadow-[0_30px_50px_rgba(14,14,14,0.22)]"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
