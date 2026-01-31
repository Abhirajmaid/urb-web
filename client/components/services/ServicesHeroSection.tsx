"use client";

import Button from "@/components/common/Button";

export function ServicesHeroSection() {
  return (
    <section className="bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-0 pb-12 sm:pb-14 lg:pb-16 min-h-screen flex items-center -mt-[88px] pt-[88px]">
      <div className="w-full mx-auto max-w-7xl">
        <div className="w-full rounded-2xl border border-[#e9e0dd] bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] min-h-[500px] sm:min-h-[550px] lg:min-h-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14 lg:px-10 xl:px-14 w-full">
          <div className="text-center text-[#4b2f2f] space-y-5 sm:space-y-4">
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-base lg:text-sm leading-relaxed text-[#6f5655]">
              We offer a complete range of insurance solutions for individuals,
              families, and businesses.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              From life and motor to jewellery, property, travel, and liability
              coverage—everything under one roof.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Our goal is to provide reliable protection, financial security, and
              peace of mind for every need.
            </p>
          </div>

          <div className="mt-8 sm:mt-8 lg:mt-8 flex justify-center">
            <div className="w-fit">
              <Button
                link="/contact"
                type="primary"
                size="sm"
                className="gap-3 self-start pl-3 text-sm shadow-[0_20px_40px_rgba(14,14,14,0.18)] hover:-translate-y-0.5 hover:shadow-[0_30px_50px_rgba(14,14,14,0.22)]"
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

