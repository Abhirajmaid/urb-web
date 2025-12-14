"use client";

import Button from "@/components/common/Button";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export function ServicesHeroSection() {
  const { openModal } = useEnquiryModal();

  return (
    <section className="bg-[#f4f0ee] px-20 pt-0 pb-12 sm:pb-14 lg:pb-16 min-h-screen flex items-center -mt-[88px] pt-[88px]">
      <div className="w-full">
        <div className="w-full rounded-2xl border border-[#e9e0dd] bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-10 xl:px-14">
          <div className="text-center text-[#4b2f2f] space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-sm leading-relaxed text-[#6f5655] sm:text-base">
              We offer a complete range of insurance solutions for individuals,
              families, and businesses.
              <br />
              From life and motor to jewellery, property, travel, and liability
              coverage—everything under one roof.
              <br />
              Our goal is to provide reliable protection, financial security, and
              peace of mind for every need.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-fit">
              <Button
                onClick={openModal}
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

