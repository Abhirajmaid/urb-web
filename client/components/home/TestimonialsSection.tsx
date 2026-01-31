"use client";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { StructuredData, createReviewSchema } from "@/components/seo/StructuredData";
import { SectionHeader } from "@/components/common/SectionHeader";

const testimonials = [
  {
    name: "Alex Walker",
    quote:
      "The quality of work and professionalism displayed by URB Insurance exceeded all our expectations.",
  },
  {
    name: "Jennifer Lawrence",
    quote:
      "The quality of work and professionalism displayed by URB Insurance exceeded all our expectations.",
  },
  {
    name: "Steve Smith",
    quote:
      "The quality of work and professionalism displayed by URB Insurance exceeded all our expectations.",
  },
  {
    name: "Priya Verma",
    quote:
      "URB Insurance guided us end-to-end and made everything clear and stress-free.",
  },
  {
    name: "Michael Brown",
    quote:
      "Fast, transparent claim support and great advice whenever we needed it.",
  },
  {
    name: "Sara Lee",
    quote:
      "Flexible plans and responsive support made choosing URB an easy decision.",
  },
  {
    name: "David Kim",
    quote:
      "Professional, reliable, and always available—exactly what we were looking for.",
  },
  {
    name: "Nina Rodriguez",
    quote:
      "Their team simplified every detail and delivered outstanding service.",
  },
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Generate review schema for testimonials
  const reviewSchema = createReviewSchema(
    testimonials.map((testimonial) => ({
      author: testimonial.name,
      rating: 5, // Default 5-star rating
      reviewBody: testimonial.quote,
      datePublished: "2024-01-01", // You can update this with actual dates
    }))
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout | null = null;

    const scroll = () => {
      const firstCardWrapper = container.firstElementChild as HTMLElement;
      if (!firstCardWrapper) return;

      const cardWidth = firstCardWrapper.offsetWidth;
      const gap = window.innerWidth < 640 ? 16 : 24;
      const scrollAmount = cardWidth + gap;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const startAutoScroll = () => {
      if (window.innerWidth < 768) return;
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(scroll, 2500);
    };

    const stopAutoScroll = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    startAutoScroll();

    if (window.innerWidth >= 768) {
      container.addEventListener("mouseenter", stopAutoScroll);
      container.addEventListener("mouseleave", startAutoScroll);
    }

    const handleResize = () => {
      stopAutoScroll();
      if (window.innerWidth >= 768) {
        startAutoScroll();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark">
      <StructuredData data={reviewSchema} />
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[600px] sm:min-h-[650px] lg:min-h-0">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
            <SectionHeader
              eyebrow="Testimonials"
              title="Trusted by many"
              description="Choose the Right Insurance for Your Needs"
              align="center"
            />

            <div
              ref={scrollContainerRef}
            className="mt-8 sm:mt-10 flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollPaddingLeft: "24px",
              scrollPaddingRight: "24px",
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 snap-start w-[85%] sm:w-[60%] lg:w-[calc((100%-48px)/3)]"
              >
                <div className="flex h-full flex-col items-center justify-start rounded-[28px] border border-[#e9e0dd] bg-white px-6 sm:px-6 lg:px-6 py-8 sm:py-8 lg:py-8 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] min-h-[280px] sm:min-h-[300px] lg:min-h-0">
                  <div className="mb-6 sm:mb-6 lg:mb-6 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#624240] text-white">
                    <Icon icon="mdi:account" className="h-8 w-8 sm:h-8 sm:w-8 lg:h-7 lg:w-7" aria-hidden />
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#2c1f4a]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-5 sm:mt-4 text-base sm:text-base lg:text-sm leading-relaxed text-[#7c6463]">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
