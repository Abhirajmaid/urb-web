"use client";

import Button from "./Button";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export function ServiceCTASection() {
  const { openModal } = useEnquiryModal();
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 xl:px-14">
          <div className="text-center text-[#4b2f2f]">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to Secure Your Future ?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6f5655] max-w-[60%] mx-auto">
              With high claim settlement rates, expert advisors, and policies
              crafted for real-life needs, URB gives you unmatched protection
              and long-term security.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-[60%] mx-auto rounded-2xl bg-[#ebe2df] px-6 py-6 flex items-center justify-center">
              <Button
                onClick={openModal}
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
    </section>
  );
}
