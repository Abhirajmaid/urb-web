"use client";
import { useState } from "react";
import { FAQItem } from "./FAQItem";
import { SectionHeader } from "./SectionHeader";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark"
    >
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 xl:px-14">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <SectionHeader
              eyebrow="Frequently Asked Questions"
              title="Your questions, answered with clarity."
              description="To help you make informed decisions, we've compiled answers to some of the most commonly asked questions."
              align="center"
              eyebrowClassName="text-primary text-xs sm:text-sm"
              titleClassName="text-brand-dark text-2xl sm:text-3xl lg:text-4xl"
              descriptionClassName="text-brand-dark/70 max-w-2xl text-sm sm:text-base"
            />
            <div className="rounded-xl sm:rounded-2xl border border-brand-gray-light/50 bg-white p-4 sm:p-6 lg:p-8 shadow-[0_4px_20px_rgba(var(--color-dark-rgb),0.08)]">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? -1 : index))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
