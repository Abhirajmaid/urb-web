"use client";
import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ClientCaseStudyCard } from "./ClientCaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export function ClientCaseStudiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollPrev(container.scrollLeft > 0);
      setCanScrollNext(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );

      // Calculate active index based on scroll position
      const firstCard = container.firstElementChild as HTMLElement;
      if (firstCard) {
        const gap = 24;
        const cardWidth = firstCard.offsetWidth;
        const scrollPosition = container.scrollLeft;
        const newActiveIndex = Math.round(scrollPosition / (cardWidth + gap));
        const clampedIndex = Math.max(
          0,
          Math.min(newActiveIndex, caseStudies.length - 1)
        );
        setActiveIndex(clampedIndex);
      }
    }
  };

  useEffect(() => {
    updateScrollState();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  const scroll = (direction: "prev" | "next") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const firstCardElement = container.firstElementChild as HTMLElement;

    if (!firstCardElement) return;

    const gap = 24; // gap-6
    const cardWidth = firstCardElement.offsetWidth;
    const scrollAmount = cardWidth + gap;

    const newScrollLeft =
      direction === "next"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });

    setTimeout(() => updateScrollState(), 350);
  };

  return (
    <section className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-12 lg:pb-20 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
            {/* Header */}
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <SectionHeader
                eyebrow="CLIENT CASE STUDIES"
                title="Our Success Stories"
                description="Discover how we've helped individuals, families, and businesses protect what matters most. From quick claim settlements to tailored coverage, see how URB Insurance delivers peace of mind."
                align="center"
                eyebrowClassName="text-primary"
                titleClassName="text-brand-dark"
                descriptionClassName="text-brand-dark/70 max-w-3xl mx-auto"
              />
              <div className="mt-6 flex justify-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#4e0708] transition hover:text-[#3b1d1c]"
                >
                  View All Case Studies
                  <Icon icon="mdi:arrow-right" className="size-4" />
                </Link>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-2 sm:-mx-4 px-2 sm:px-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  scrollPaddingLeft: "16px",
                  scrollPaddingRight: "16px",
                }}
                onScroll={updateScrollState}
              >
                {caseStudies.map((caseStudy, index) => (
                  <div
                    key={index}
                    className="shrink-0 snap-start w-[85%] sm:w-[75%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)] case-study-card-wrapper"
                    data-case-index={index}
                  >
                    <div className="h-full min-h-[420px]">
                      <ClientCaseStudyCard {...caseStudy} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => scroll("prev")}
                  disabled={!canScrollPrev}
                  aria-label="Previous case study"
                  className="flex size-10 items-center justify-center rounded-full bg-[#ebe2df] text-[#4b2f2f] transition-all hover:bg-[#3b1d1c] hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Icon icon="mdi:chevron-left" className="text-xl" />
                </button>

                <div className="flex items-center gap-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (scrollContainerRef.current) {
                          const card = scrollContainerRef.current.children[
                            index
                          ] as HTMLElement;
                          card?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center",
                          });
                        }
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-8 bg-[#4e0708]"
                          : "w-4 bg-[#c9b8b6] hover:bg-[#a89593]"
                      }`}
                      aria-label={`Go to case study ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scroll("next")}
                  disabled={!canScrollNext}
                  aria-label="Next case study"
                  className="flex size-10 items-center justify-center rounded-full bg-[#ebe2df] text-[#4b2f2f] transition-all hover:bg-[#3b1d1c] hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Icon icon="mdi:chevron-right" className="text-xl" />
                </button>
              </div>
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
