import { Icon } from "@iconify/react";
import Button from "@/components/common/Button";

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
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 xl:px-14">
          <p className="text-sm font-medium text-[#8a6a6a]">Services</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#4b2f2f] sm:text-4xl">
            Explore Our Service Offerings
          </h2>
          <p className="mt-2 text-sm text-[#6f5655]">
            Choose the Right Insurance for Your Needs
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-[#ebe2df] p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] transition hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b1d1c] text-white">
                  <Icon icon={service.icon} className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-[#4b2f2f]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#7c6463]">Service Description</p>
                <button className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-[#6f4d4c] shadow">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
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
    </section>
  );
}
