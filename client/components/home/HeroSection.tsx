"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export function HeroSection() {
  const { openModal } = useEnquiryModal();

  return (
    <section className="bg-[#f4f0ee] px-20 pt-0 pb-0 min-h-screen flex items-start -mt-[56px] pt-[90px] pb-12">
      <div className="w-full">
        <div className="w-full rounded-2xl border border-[#e9e0dd] bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-3 pb-8 sm:pt-4 sm:pb-12 lg:px-10 xl:px-14 lg:pt-6 lg:pb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8">
            {/* Left Column - Text Content */}
            <div className="space-y-4 text-[#4b2f2f]">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Insurance that protects what matters most.
              </h1>
              <p className="text-sm leading-relaxed text-[#6f5655]">
                Reliable insurance solutions to secure your health, home, vehicle,
                and future, all in one trusted platform.
              </p>

              {/* CTA Button */}
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

            {/* Right Column - Image with 3D Effect */}
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              {/* Dark Brown Container - Background with opacity gradient, positioned at ear level, narrower */}
              <div 
                className="absolute top-[20%] left-16 right-16 bottom-0 rounded-2xl z-0 overflow-hidden"
                style={{
                  background: 'linear-gradient(to top, rgba(59, 29, 28, 0) 0%, rgba(59, 29, 28, 0.3) 30%, rgba(59, 29, 28, 0.6) 60%, rgba(59, 29, 28, 0.9) 100%)'
                }}
              />

              {/* Man Image - Front layer, centered */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/heroman.png"
                    alt="Professional insurance advisor"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>

              {/* White Badge with Logo - At lip level, 50% inside brown container, 50% outside */}
              <div className="absolute top-[38%] left-4 z-20 bg-white rounded-lg px-3 py-2 shadow-lg -translate-y-1/2">
                <div className="h-8 w-8">
                  <Image
                    src="/URB-logo.png"
                    alt="URB Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* White Button Container - 50% inside brown container (bottom edge), 50% outside */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-3/5 max-w-xs">
                <button className="w-full rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-[#4b2f2f] shadow-lg transition hover:bg-white/90 sm:text-sm sm:px-6 sm:py-3">
                  Find perfect plan for you
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
