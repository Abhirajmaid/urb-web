"use client";

import Image from "next/image";
import Button from "@/components/common/Button";

type PageHeaderProps = {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  showButton?: boolean;
};

export function PageHeader({
  title,
  description,
  backgroundImage,
  backgroundImageAlt,
  showButton = true,
}: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#f4f0ee] px-2 sm:px-3 lg:px-4 pt-[120px] md:pt-[120px] pb-12 sm:pb-14 lg:pb-16"
      data-hero-root
    >
      <div className="mx-auto ">
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[80vh] flex items-center justify-center">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
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
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight text-white">
              {title}
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
              {description}
            </p>
            {showButton && (
              <div className="mt-6 sm:mt-8 flex justify-center">
                <Button
                  link="/contact"
                  type="primary"
                  size="sm"
                  className="gap-3 pl-3 text-sm shadow-[0_20px_40px_rgba(14,14,14,0.18)] hover:-translate-y-0.5 hover:shadow-[0_30px_50px_rgba(14,14,14,0.22)]"
                >
                  Get a Quote
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
