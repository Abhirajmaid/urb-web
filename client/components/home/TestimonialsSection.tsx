"use client";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import {
  StructuredData,
  createReviewSchema,
} from "@/components/seo/StructuredData";
import { SectionHeader } from "@/components/common/SectionHeader";

const testimonials = [
  {
    name: "Rajesh Mehta, Jeweller",
    quote:
      "As a third-generation jeweller, trust is everything for us. We have successfully passed over 100 claims with complete ease and professionalism. The entire process has always been smooth and dependable.",
  },
  {
    name: "Kunal Shah, Jeweller",
    quote:
      "In our line of work, claim settlement matters the most. Every claim we've had has been handled efficiently and without delays.",
  },
  {
    name: "Dhaval Doshi, Jeweller",
    quote:
      "We've faced multiple claim situations over the years, and each one was managed seamlessly with proper guidance throughout.",
  },
  {
    name: "Nitin Zaveri, Jeweller",
    quote:
      "The understanding of jewellery insurance and claim handling is truly exceptional. It gives us complete peace of mind.",
  },
  {
    name: "Harsh Jain, Jeweller",
    quote:
      "Having a reliable support system for claims is crucial in our business. Over 100 claims have been passed smoothly for us and our network.",
  },
  {
    name: "Neha Agarwal, Entrepreneur",
    quote:
      "During a recent medical emergency, our Mediclaim process was handled with utmost care and efficiency. Truly dependable service.",
  },
  {
    name: "Dr. Rohan Mehta, Healthcare Professional",
    quote:
      "The Mediclaim support is extremely well-managed. From documentation to final settlement, everything was taken care of seamlessly.",
  },
  {
    name: "Pooja Shah, Business Owner",
    quote:
      "The health insurance claim experience was completely hassle-free. The team was proactive and supportive throughout.",
  },
  {
    name: "Amit Jain, Chartered Accountant",
    quote:
      "We trust them for all our family Mediclaim policies. Their responsiveness and clarity set them apart.",
  },
  {
    name: "Sneha Doshi, Consultant",
    quote:
      "In times of need, they truly stand by you. The Mediclaim service reflects professionalism and genuine care.",
  },
  {
    name: "Vikram Patel, Business Owner",
    quote:
      "All our insurance needs are managed under one roof, making everything extremely convenient and well-organized.",
  },
  {
    name: "Ritesh Shah, Entrepreneur",
    quote:
      "From motor to business insurance, everything has been handled with clarity and expertise.",
  },
  {
    name: "Ankit Mehta, Investor",
    quote:
      "The presence of in-house experts like a Chartered Accountant and Financial Planner adds immense value.",
  },
  {
    name: "Kavita Jain, Homemaker",
    quote:
      "Our family's insurance portfolio has been managed with transparency and long-term vision.",
  },
  {
    name: "Sandeep Agarwal, Businessman",
    quote:
      "Every policy is explained in detail, making decision-making simple and confident.",
  },
  {
    name: "Rahul Doshi, Entrepreneur",
    quote:
      "Investment guidance has been structured and aligned with long-term goals.",
  },
  {
    name: "Manish Zaveri, Trader",
    quote:
      "What truly stands out is the commitment during claim settlements. Support is always there when needed.",
  },
  {
    name: "Priya Shah, Boutique Owner",
    quote:
      "Professional approach, deep knowledge, and a very smooth overall experience.",
  },
  {
    name: "Sanjay Mehta, Industrialist",
    quote:
      "We've been associated for years, and the trust has only grown stronger over time.",
  },
  {
    name: "Nishita Jain, Interior Designer",
    quote:
      "A complete financial solution with a very refined and reliable approach.",
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
    <section className="relative isolate overflow-hidden bg-linear-to-br from-brand-primary/5 via-transparent to-transparent px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark">
      <StructuredData data={reviewSchema} />
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-10 lg:px-10 xl:px-14 lg:py-12">
            <SectionHeader
              eyebrow="Testimonials"
              title="Trusted by many"
              description="All Your Insurance & Financial Needs, Under One Roof."
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
                      <Icon
                        icon="mdi:account"
                        className="h-8 w-8 sm:h-8 sm:w-8 lg:h-7 lg:w-7"
                        aria-hidden
                      />
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
