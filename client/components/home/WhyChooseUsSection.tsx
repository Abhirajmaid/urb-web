import { Icon } from "@iconify/react";

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
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 xl:px-14">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-[#4b2f2f] sm:text-4xl">
              Why Choose Us ?
            </h2>
            <p className="text-sm leading-relaxed text-[#6f5655] max-w-2xl mx-auto">
              With high claim settlement rates, expert advisors, and policies
              crafted for real-life needs, URB gives you unmatched protection
              and long-term security.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex items-start gap-4 rounded-3xl bg-[#ebe2df] px-6 py-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
              >
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7cbc7] text-[#6f4d4c]">
                  <Icon icon={reason.icon} className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#4b2f2f]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#7c6463]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

