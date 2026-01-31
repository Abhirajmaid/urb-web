import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    title: "Trusted Claim Support",
    description:
      "We ensure quick, transparent, and smooth claim processing so you're never alone during critical moments.",
    icon: "mdi:shield-check-outline",
  },
  {
    title: "Flexible & Affordable Plans",
    description:
      "Choose from customizable insurance plans designed to match your lifestyle, needs, and budget perfectly.",
    icon: "mdi:wallet-outline",
  },
  {
    title: "Expert Guidance",
    description:
      "Our advisors simplify insurance for you, explaining every detail clearly.",
    icon: "mdi:account-tie-outline",
  },
  {
    title: "24/7 Customer Assistance",
    description:
      "Round-the-clock support for policy queries, claims, renewals, and emergencies — anytime, anywhere.",
    icon: "mdi:headset",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[600px] sm:min-h-[650px] lg:min-h-0">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
            <SectionHeader
              title="Why Choose Us ?"
              description="With high claim settlement rates, expert advisors, and policies crafted for real-life needs, URB gives you unmatched protection and long-term security."
              align="center"
            />

          <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 sm:gap-4 lg:gap-4 rounded-3xl bg-[#ebe2df] px-5 py-5 sm:px-6 sm:py-5 lg:px-6 lg:py-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] min-h-[140px] sm:min-h-[150px] lg:min-h-0"
              >
                <div className="mt-1 flex h-14 w-14 sm:h-14 sm:w-14 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#d7cbc7] text-[#6f4d4c] flex-shrink-0">
                  <Icon icon={reason.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 sm:mt-1 text-base sm:text-base lg:text-sm text-[#7c6463]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

