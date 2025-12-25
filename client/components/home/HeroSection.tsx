"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";
import { Icon } from "@iconify/react";

export function HeroSection() {
  const { openModal } = useEnquiryModal();

  return (
    <section className="bg-[#3b1d1c] lg:bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-0 pb-0 min-h-screen flex items-start -mt-[56px] pt-[90px] pb-12 lg:pb-12">
      <div className="w-full">
        {/* Mobile: Light beige card, Desktop: White card */}
        <div className="w-full rounded-2xl border border-[#e9e0dd] bg-[#f4f0ee] lg:bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] min-h-[85vh] lg:min-h-0">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 lg:px-10 xl:px-14 lg:pt-6 lg:pb-16 h-full">
            <div className="flex flex-col justify-between h-full min-h-[calc(85vh-3rem)] sm:min-h-[calc(85vh-4rem)] lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:min-h-0 lg:h-auto">
              {/* Text Content - Mobile: Top, Desktop: Left */}
              <div className="flex flex-col justify-start space-y-4 sm:space-y-5 text-[#4b2f2f] order-1 flex-shrink-0">
                <h1 className="text-2xl sm:text-3xl font-semibold leading-tight lg:text-5xl">
                Insurance that protects what matters most.
              </h1>
                <p className="text-sm sm:text-base leading-relaxed text-[#6f5655]">
                Reliable insurance solutions to secure your health, home, vehicle,
                and future, all in one trusted platform.
              </p>

                {/* Desktop Button - Only visible on desktop */}
                <div className="hidden lg:block w-fit">
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

              {/* Image Section - Mobile: Below text, Desktop: Right side */}
              <div className="relative flex-1 min-h-[320px] sm:min-h-[380px] lg:h-[500px] order-2 lg:flex-none">
                {/* Dark Brown Container - Desktop only, positioned at ear level */}
              <div 
                  className="hidden lg:block absolute top-[20%] left-16 right-16 bottom-0 rounded-2xl z-0 overflow-hidden"
                style={{
                  background: 'linear-gradient(to top, rgba(59, 29, 28, 0) 0%, rgba(59, 29, 28, 0.3) 30%, rgba(59, 29, 28, 0.6) 60%, rgba(59, 29, 28, 0.9) 100%)'
                }}
              />

                {/* Man Image - Centered vertically on mobile and desktop */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="relative h-full w-full flex items-center">
                  <Image
                    src="/images/heroman.png"
                    alt="Professional insurance advisor"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>

                {/* Logo Badge - Desktop: At lip level, Mobile: Top left */}
                <div className="absolute top-4 left-4 lg:top-[38%] lg:left-4 z-20 bg-white rounded-lg px-3 py-2 shadow-lg lg:-translate-y-1/2">
                  <div className="h-6 w-6 sm:h-8 sm:w-8">
                  <Image
                    src="/URB-logo.png"
                    alt="URB Logo"
                    width={32}
                    height={32}
                      className="object-contain w-full h-full"
                  />
                  </div>
                </div>

                {/* "Find perfect plan for you" Button - Mobile: Attached to bottom of image, Desktop: Bottom overlay */}
                <div className="absolute bottom-16 sm:bottom-20 lg:bottom-0 left-1/2 -translate-x-1/2 lg:translate-y-1/2 z-20 w-full max-w-sm px-4 lg:max-w-xs lg:px-0">
                  <button className="w-full rounded-xl bg-white px-6 py-4 text-base font-semibold text-[#4b2f2f] shadow-lg transition hover:bg-white/90 sm:px-8 sm:py-5 sm:text-lg lg:px-4 lg:py-2.5 lg:text-xs text-center">
                    Find perfect plan for you
                  </button>
                </div>
              </div>

              {/* Mobile "Get a Quote" Button - Separate element below image */}
              <div className="lg:hidden flex justify-center order-3 w-full px-4">
                <button
                  onClick={openModal}
                  className="w-full max-w-xs flex items-center justify-center gap-3 bg-[#4e0708] hover:bg-[#5a0a0b] text-white rounded-full px-6 py-4 pr-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="text-base font-medium">Get a Quote</span>
                  <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full flex-shrink-0">
                    <Icon 
                      icon="solar:arrow-right-up-linear" 
                      width={18} 
                      height={18}
                      className="text-[#4e0708]"
                    />
                  </span>
                </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
