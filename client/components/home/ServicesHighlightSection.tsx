import { Icon } from "@iconify/react";
import Button from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

const services = [
  { title: "Life Insurance", icon: "mdi:stethoscope" },
  { title: "Travel Insurance", icon: "mdi:map-marker-outline" },
  { title: "Home Insurance", icon: "mdi:home-outline" },
  { title: "Fire Insurance", icon: "mdi:thermometer" },
  { title: "Jewellery Insurance", icon: "mdi:diamond-stone" },
  { title: "Motor Insurance", icon: "mdi:car-outline" },
];

export function ServicesHighlightSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-brand-primary/5 via-transparent to-transparent px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[600px] sm:min-h-[650px] lg:min-h-0">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
            <SectionHeader
              eyebrow="Services"
              title="Explore Our Service Offerings"
              description="Choose the Right Insurance for Your Needs"
            />

            <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-[#ebe2df] p-6 sm:p-6 lg:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 min-h-[200px] sm:min-h-[220px] lg:min-h-0 flex flex-col justify-center"
                >
                  <div className="mx-auto mb-5 sm:mb-4 flex h-16 w-16 sm:h-16 sm:w-16 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                    <Icon
                      icon={service.icon}
                      className="h-7 w-7 sm:h-7 sm:w-7 lg:h-6 lg:w-6"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-lg font-semibold text-[#4b2f2f]">
                    {service.title}
                  </h3>
                  <p className="mt-3 sm:mt-2 text-base sm:text-base lg:text-sm text-[#7c6463]">
                    Service Description
                  </p>
                  <button className="mt-5 sm:mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 sm:px-6 sm:py-2 lg:px-5 lg:py-1.5 text-sm sm:text-sm lg:text-xs font-semibold text-[#6f4d4c] shadow">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex justify-center">
              <Button
                link="/services"
                type="primary"
                size="sm"
                className="gap-3 self-start pl-3 text-sm shadow-[0_20px_40px_rgba(14,14,14,0.18)] hover:-translate-y-0.5 hover:shadow-[0_30px_50px_rgba(14,14,14,0.22)]"
              >
                Explore more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
