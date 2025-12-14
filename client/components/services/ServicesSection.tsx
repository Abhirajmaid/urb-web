import { Icon } from "@iconify/react";
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
  },
  {
    title: "LIC Insurance",
    icon: "mdi:heart",
  },
  {
    title: "Mutual Fund Insurance",
    icon: "mdi:bank",
  },
];

const motorVehicleServices = [
  {
    title: "Motor Insurance",
    icon: "mdi:car-outline",
  },
];

const homePropertyServices = [
  {
    title: "Home Insurance",
    icon: "mdi:home-outline",
  },
  {
    title: "Property Insurance",
    icon: "mdi:office-building-outline",
  },
];

const fireBurglaryServices = [
  {
    title: "Fire Insurance",
    icon: "mdi:fire",
  },
  {
    title: "Burglary Insurance",
    icon: "mdi:shield-lock-outline",
  },
];

const marineTransitServices = [
  {
    title: "Marine Insurance",
    icon: "mdi:anchor",
  },
];

const travelServices = [
  {
    title: "Travel Insurance",
    icon: "mdi:airplane",
  },
];

const liabilityServices = [
  {
    title: "Liability Insurance",
    icon: "mdi:file-document-edit-outline",
  },
];

const jewelleryPreciousServices = [
  {
    title: "Jewellery Insurance",
    icon: "mdi:diamond-stone",
  },
  {
    title: "Gold Insurance",
    icon: "mdi:ring",
  },
  {
    title: "Diamond Insurance",
    icon: "mdi:diamond",
  },
];

const generalInsurerServices = [
  {
    title: "GIC General Insurance",
    icon: "mdi:shield-check-outline",
  },
];

export function ServicesSection({
  services,
  eyebrow = "Services",
  title = "Explore Our Service Offerings",
  description = "Choose the Right Insurance for Your Needs",
}: ServicesSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 xl:px-14">
          {/* Header Section */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#8a6a6a]">{eyebrow}</p>
            <h2 className="text-3xl font-semibold text-[#4b2f2f] sm:text-4xl">
              {title}
            </h2>
            <p className="text-sm text-[#6f5655]">{description}</p>
          </div>

          {/* Separator Line */}
          <div className="mt-6 border-t border-[#e9e0dd]" />

          {/* Subsection: Life & Personal Insurance */}
          <div className="mt-8 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#4b2f2f]">
                1. Life & Personal Insurance
              </h3>
              <p className="mt-2 text-sm text-[#6f5655]">
                These cover individuals and their lives/health/financial protection.
              </p>
            </div>

            {/* Service Cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lifePersonalInsuranceServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                    <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                  </div>
                  <h4 className="text-lg font-semibold text-[#4b2f2f]">
                    {service.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection: General Insurance (Non-Life Insurance) */}
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#4b2f2f]">
                2. General Insurance (Non-Life Insurance)
              </h3>
              <p className="mt-2 text-sm text-[#6f5655]">
                All asset-based and risk-based policies.
              </p>
            </div>

            {/* A. Motor & Vehicle */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                A. Motor & Vehicle
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {motorVehicleServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* B. Home & Property */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                B. Home & Property
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {homePropertyServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* C. Fire & Burglary */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                C. Fire & Burglary
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fireBurglaryServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* D. Marine & Transit */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                D. Marine & Transit
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {marineTransitServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* E. Travel */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                E. Travel
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {travelServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* F. Liability */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                F. Liability
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {liabilityServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* G. Jewellery & Precious Items */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                G. Jewellery & Precious Items
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {jewelleryPreciousServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* H. General Insurer Category */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4b2f2f]">
                H. General Insurer Category
              </h4>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {generalInsurerServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                      <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4b2f2f]">
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
