import { SectionHeader } from "@/components/common/SectionHeader";

const missionVisionPurpose = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To be the partner families and businesses turn to with confidence—earning trust through honesty, continuity, and advice that puts your long-term interests first, generation after generation.",
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "Founded on 5th February 1976, URB Insurance began as a small LIC initiative by our grandfather. Over five decades, it has grown into a full-service insurance and financial advisory firm — built on trust, family values, and an unwavering commitment to our clients.",
  },
  {
    number: "03",
    title: "Our Purpose",
    description:
      "To give you one place for insurance, investments, and planning—life, health, motor, business, and beyond—with our in-house Chartered Accountant, Lawyer, and CFP working together so your choices stay clear, compliant, and suited to your goals.",
  },
];

export function MissionVisionSection() {
  return (
    <section className="relative isolate mt-4 overflow-hidden text-brand-dark px-4 py-10 sm:mt-4 sm:px-6 sm:py-10 lg:px-20 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(var(--color-dark-rgb),0.08)]">
          {/* Top left gradient with primary color */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10 lg:px-10 xl:px-14 lg:py-12">
            <div className="mb-6 mt-2 sm:mb-8 sm:mt-4">
              <SectionHeader
                eyebrow="OUR FOUNDATION"
                title="Mission, Vision & Purpose"
                description="The core principles that guide our work and define our commitment to excellence."
                align="center"
                verticalSpacing="space-y-4 sm:space-y-5"
                eyebrowClassName="text-primary"
                titleClassName="text-brand-dark text-[1.9rem] leading-tight sm:text-4xl"
                descriptionClassName="text-brand-dark/75 text-base sm:text-lg max-w-2xl mx-auto"
              />
            </div>

            <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
              {missionVisionPurpose.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-brand-gray-light/50 bg-white p-7 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(var(--color-dark-rgb),0.08)]"
                >
                  {/* Subtle circular pattern in upper-right */}
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-brand-primary/5 blur-2xl" />

                  {/* Number */}
                  <div className="mb-5">
                    <span className="text-4xl sm:text-5xl font-light text-brand-primary">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3.5">
                    <h3 className="text-2xl sm:text-2xl font-semibold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-base leading-relaxed text-brand-dark/80">
                      {item.description}
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
