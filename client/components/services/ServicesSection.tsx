import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Service } from "@/data/services";

type ServicesSectionProps = {
  services: Service[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

const lifePersonalInsuranceServices = [
  {
    title: "Life Insurance",
    icon: "mdi:stethoscope",
    highlighted: false,
  },
  {
    title: "Health Insurance",
    icon: "mdi:heart",
    highlighted: false,
  },
  {
    title: "General Insurance",
    icon: "mdi:bank",
    highlighted: true,
  },
];

const motorVehicleServices = [
  {
    title: "Motor Insurance (Car & Bike)",
    icon: "mdi:car-outline",
    highlighted: false,
  },
];

const homePropertyServices = [
  {
    title: "Home Insurance",
    icon: "mdi:home-outline",
    highlighted: false,
  },
  {
    title: "Shop & Business Insurance",
    icon: "mdi:office-building-outline",
    highlighted: false,
  },
];

const fireBurglaryServices = [
  {
    title: "Mutual Fund Investments",
    icon: "mdi:fire",
    highlighted: false,
  },
  {
    title: "Financial Planning & Wealth Management",
    icon: "mdi:shield-lock-outline",
    highlighted: false,
  },
];

const marineTransitServices = [
  {
    title: "Marine Insurance",
    icon: "mdi:anchor",
    highlighted: false,
  },
];

const travelServices = [
  {
    title: "Travel Insurance",
    icon: "mdi:airplane",
    highlighted: false,
  },
];

const liabilityServices = [
  {
    title: "Tax Planning Services",
    icon: "mdi:file-document-edit-outline",
    highlighted: false,
  },
];

const jewelleryPreciousServices = [
  {
    title: "Business & Personal Financial Advisory",
    icon: "mdi:diamond-stone",
    highlighted: true,
  },
  {
    title: "Complete Protection Planning",
    icon: "mdi:ring",
    highlighted: false,
  },
  {
    title: "Smart Financial Growth Strategy",
    icon: "mdi:diamond",
    highlighted: false,
  },
];

const generalInsurerServices = [
  {
    title: "General Insurance Solutions",
    icon: "mdi:shield-check-outline",
    highlighted: false,
  },
];

export function ServicesSection({
  services,
  eyebrow = "Services",
  title = "Explore Our Service Offerings",
  description = "50+ Years of Trusted Experience • Family-Run Legacy with Strong Values • One-Stop Solution for All Insurance & Financial Needs • In-House Experts - Chartered Accountant, Lawyer & Certified Financial Planner • Personalized Advice Tailored to Your Needs • Transparent & Honest Guidance • Strong Customer Relationships Built on Trust",
}: ServicesSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[800px] sm:min-h-[900px] lg:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
          {/* Header Section */}
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          {/* Separator Line */}
          <div className="mt-6 border-t border-[#e9e0dd]" />

          {/* Subsection: Jewellery & Precious Items - Featured First */}
          <div className="mt-8 space-y-5 sm:space-y-4">
            <div>
              <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-[#4b2f2f]">
                1. Financial Advisory & Growth Services
              </h3>
              <p className="mt-3 sm:mt-2 text-base sm:text-base lg:text-sm text-[#6f5655]">
                Additional services to help you plan, manage, and grow your finances with confidence.
              </p>
            </div>
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jewelleryPreciousServices.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-3xl p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center ${
                    service.highlighted
                      ? "bg-[#3b1d1c] ring-2 ring-brand-primary/30 ring-offset-2 ring-offset-white"
                      : "bg-[#ebe2df]"
                  }`}
                >
                  <div className={`mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full ${
                    service.highlighted ? "bg-white text-[#3b1d1c]" : "bg-[#3b1d1c] text-white"
                  }`}>
                    <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                  </div>
                  <h4 className={`text-xl sm:text-xl lg:text-lg font-semibold ${
                    service.highlighted ? "text-white" : "text-[#4b2f2f]"
                  }`}>
                    {service.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection: Life & Personal Insurance */}
          <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-4">
            <div>
              <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-[#4b2f2f]">
                2. Life & Personal Insurance
              </h3>
              <p className="mt-3 sm:mt-2 text-base sm:text-base lg:text-sm text-[#6f5655]">
                Essential personal coverage plans for life, health, and all-round protection.
              </p>
            </div>

            {/* Service Cards */}
            <div className="mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lifePersonalInsuranceServices.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-3xl p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center ${
                    service.highlighted
                      ? "bg-[#3b1d1c] ring-2 ring-brand-primary/30 ring-offset-2 ring-offset-white"
                      : "bg-[#ebe2df]"
                  }`}
                >
                  <div className={`mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full ${
                    service.highlighted ? "bg-white text-[#3b1d1c]" : "bg-[#3b1d1c] text-white"
                  }`}>
                    <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                  </div>
                  <h4 className={`text-xl sm:text-xl lg:text-lg font-semibold ${
                    service.highlighted ? "text-white" : "text-[#4b2f2f]"
                  }`}>
                    {service.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection: General Insurance (Non-Life Insurance) */}
          <div className="mt-10 sm:mt-12 space-y-8 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-[#4b2f2f]">
                3. General Insurance (Non-Life)
              </h3>
              <p className="mt-3 sm:mt-2 text-base sm:text-base lg:text-sm text-[#6f5655]">
                Protection for your assets, property, travel, and business needs.
              </p>
            </div>

            {/* A. Motor & Vehicle */}
            <div className="space-y-5 sm:space-y-4">
              <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                A. Motor & Vehicle
              </h4>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {motorVehicleServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                  >
                    <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                    </div>
                    <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* B. Home & Property */}
            <div className="space-y-5 sm:space-y-4">
              <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                B. Home & Property
              </h4>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {homePropertyServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                  >
                    <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                    </div>
                    <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* C. Fire & Burglary */}
            <div className="space-y-5 sm:space-y-4">
              <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                C. Fire & Burglary
              </h4>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fireBurglaryServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                  >
                    <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                    </div>
                    <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {/* D. Marine & Transit */}
              <div className="space-y-5 sm:space-y-4">
                <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                  D. Marine & Transit
                </h4>
                <div className="grid gap-5 sm:gap-6">
                  {marineTransitServices.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                    >
                      <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                        <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                      </div>
                      <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                        {service.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* E. Travel */}
              <div className="space-y-5 sm:space-y-4">
                <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                  E. Travel
                </h4>
                <div className="grid gap-5 sm:gap-6">
                  {travelServices.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                    >
                      <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                        <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                      </div>
                      <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                        {service.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* F. Tax & Advisory */}
              <div className="space-y-5 sm:space-y-4">
                <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                  F. Tax & Advisory
                </h4>
                <div className="grid gap-5 sm:gap-6">
                  {liabilityServices.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                    >
                      <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                        <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                      </div>
                      <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                        {service.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* G. General Insurance Category */}
              <div className="space-y-5 sm:space-y-4">
                <h4 className="text-lg sm:text-lg lg:text-lg font-semibold text-[#4b2f2f]">
                  G. General Insurance Category
                </h4>
                <div className="grid gap-5 sm:gap-6">
                  {generalInsurerServices.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[180px] sm:min-h-[200px] lg:min-h-0 flex flex-col justify-center"
                    >
                      <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                        <Icon icon={service.icon} className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6" aria-hidden />
                      </div>
                      <h4 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                        {service.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
