import { SectionHeader } from "@/components/common/SectionHeader";

type PurposePillar = {
  number: string;
  title: string;
  description: string;
};

type PurposeSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  pillars: PurposePillar[];
};

export function PurposeSection({
  eyebrow = "OUR PURPOSE",
  title = "Our purpose",
  description = "Dedicated to protecting your future with comprehensive insurance solutions and exceptional service.",
  pillars,
}: PurposeSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[600px] sm:min-h-[650px] lg:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side: Heading and Description */}
          <div>
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              eyebrowClassName="text-primary"
              titleClassName="text-brand-dark"
              descriptionClassName="text-brand-dark/70"
            />
          </div>

          {/* Right Side: Numbered Items */}
          <div className="space-y-0">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`border-b border-brand-gray-light/50 py-6 sm:py-8 lg:py-8 ${
                  index === pillars.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="flex gap-5 sm:gap-6 lg:gap-6">
                  <span className="text-2xl sm:text-2xl lg:text-xl font-light text-brand-primary flex-shrink-0">
                    {pillar.number}
                  </span>
                  <div className="flex-1 space-y-2 sm:space-y-2">
                    <h3 className="text-lg sm:text-lg lg:text-base font-semibold text-brand-dark">
                      {pillar.title}
                    </h3>
                    <p className="text-base sm:text-base lg:text-sm leading-relaxed text-brand-dark/70">
                      {pillar.description}
                    </p>
                  </div>
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

