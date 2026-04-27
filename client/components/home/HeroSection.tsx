"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import { Icon } from "@iconify/react";

const stats = [
  { value: "50+", label: "years trusted services" },
  { value: "98%", label: "claim settlement rate" },
  { value: "100K+", label: "customers protected" },
  { value: "100+", label: "corporate clients" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-white px-2 sm:px-3 lg:px-4"
      data-hero-root
    >
      <div className="w-full mx-auto flex-1 flex flex-col min-h-0">
        <div className="relative mt-2 sm:mt-3 lg:mt-8 flex-1 w-full rounded-2xl overflow-hidden min-h-[min(92vh,920px)] sm:min-h-[min(94vh,960px)]">
          <Image
            src="/images/clock%20urb.png"
            alt="URB insurance clock display"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-right sm:object-[76%_center] lg:object-center"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-between">
            <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-10 xl:px-14 pt-6 sm:pt-8 max-w-7xl mx-auto w-full">
              <div className="max-w-2xl">
                <h1 className="text-[3rem] sm:text-5xl md:text-7xl leading-[1.05] md:leading-[60px] font-semibold text-[#f5f5f5] [text-shadow:0_2px_10px_rgba(0,0,0,0.65)]">
                  Insurance that protects what matters most.
                </h1>
                <div className="mt-2 sm:mt-3 hidden lg:block w-fit">
                  <Button
                    link="/contact"
                    type="primary"
                    size="md"
                    className="gap-3 pl-5 py-1.5 text-base font-medium shadow-[0_20px_40px_rgba(14,14,14,0.18)] hover:-translate-y-0.5 hover:shadow-[0_30px_50px_rgba(14,14,14,0.22)]"
                  >
                    Connect us
                  </Button>
                </div>
                <div className="mt-2 sm:mt-3 lg:hidden flex justify-start w-full">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3 bg-[#4e0708] hover:bg-[#5a0a0b] text-white rounded-full px-5 py-3.5 pr-3.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <span className="text-base font-medium">Connect us</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        width={18}
                        height={18}
                        className="text-[#4e0708]"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="shrink-0 px-4 sm:px-6 lg:px-10 xl:px-14 pb-4 sm:pb-6 lg:pb-8 max-w-7xl mx-auto w-full">
              <div className="rounded-2xl bg-gray-900/30 backdrop-blur-md p-2 sm:rounded-none sm:bg-transparent sm:backdrop-blur-0 sm:p-0">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="px-3 py-3 text-center sm:px-5 sm:py-6"
                  >
                    <div className="text-4xl sm:text-4xl lg:text-5xl font-semibold text-[#f5f5f5] [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] [-webkit-text-stroke:1px_rgba(0,0,0,0.55)] sm:[-webkit-text-stroke:0px_transparent] mb-2 sm:mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm sm:text-sm text-[#f0f0f0] [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] [-webkit-text-stroke:0.6px_rgba(0,0,0,0.55)] sm:[-webkit-text-stroke:0px_transparent] leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
