"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] md:pt-[80px] overflow-hidden bg-[#f4f0ee] px-2 sm:px-3 lg:px-4">
      <div className="w-full mx-auto">
        <div className="relative z-0 rounded-2xl overflow-hidden min-h-[80vh]">
          <Image
            src="/images/hero.jpg"
            alt="Insurance protection"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex items-center px-4 sm:px-6 lg:px-10 xl:px-14 pt-[88px] pb-16 sm:pb-20 lg:pb-24 max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-7xl leading-[60px] font-semibold text-white">
                Insurance that protects what matters most.
              </h1>
              <p className="mt-4 sm:mt-5 text-sm md:text-lg leading-relaxed text-white/90">
                Reliable insurance solutions to secure your health, home,
                vehicle, and future, all in one trusted platform.
              </p>
              <div className="mt-6 sm:mt-8 hidden lg:block w-fit">
                <Button
                  link="/contact"
                  type="primary"
                  size="sm"
                  className="gap-3 pl-3 text-sm shadow-[0_20px_40px_rgba(14,14,14,0.18)] hover:-translate-y-0.5 hover:shadow-[0_30px_50px_rgba(14,14,14,0.22)]"
                >
                  Get a Quote
                </Button>
              </div>
              <div className="mt-6 sm:mt-8 lg:hidden flex justify-start w-full">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 bg-[#4e0708] hover:bg-[#5a0a0b] text-white rounded-full px-6 py-4 pr-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="text-base font-medium">Get a Quote</span>
                  <span className="flex items-center justify-center w-9 h-9 bg-white rounded-full shrink-0">
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
        </div>
      </div>
    </section>
  );
}
