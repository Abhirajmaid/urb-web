import { Icon } from "@iconify/react";
import { Service } from "@/data/services";
import type { InsuranceServiceCard } from "@/data/insuranceServiceCards";
import {
  financialAdvisoryServices,
  generalInsuranceServices,
  lifePersonalInsuranceServices,
} from "@/data/insuranceServiceCards";

type ServicesSectionProps = {
  services: Service[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

function ServiceOfferingCard({ title, icon, description }: InsuranceServiceCard) {
  return (
    <article className="flex h-full min-h-[132px] min-w-0 flex-row items-start gap-4 rounded-lg border border-[#eeeeee] bg-white px-5 py-5 sm:min-h-[140px] sm:gap-5 sm:px-6 sm:py-6">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg bg-[#4e0708] text-white shadow-sm sm:h-14 sm:w-14">
        <Icon icon={icon} className="h-[1.375rem] w-[1.375rem] sm:h-7 sm:w-7" aria-hidden />
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <h4 className="text-[15px] font-semibold leading-snug tracking-tight text-[#4e0708] sm:text-[17px] sm:leading-snug">
          {title}
        </h4>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#5c5652] sm:mt-2.5 sm:text-[15px] sm:leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

function CategoryBlock({
  number,
  heading,
  subtitle,
  items,
}: {
  number: string;
  heading: string;
  subtitle: string;
  items: InsuranceServiceCard[];
}) {
  return (
    <section className="shrink-0 overflow-hidden rounded-xl border border-[#e8e4e0] border-l-4 border-l-[#4e0708] bg-white shadow-[0_2px_14px_rgba(78,7,8,0.06)]">
      <div className="px-6 py-7 sm:px-8 sm:py-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-11 sm:flex-row sm:items-center lg:mb-12">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4e0708] text-sm font-bold tabular-nums text-white ring-2 ring-[#e8af3c] ring-offset-2 ring-offset-white sm:h-[52px] sm:w-[52px] sm:text-[0.9375rem]">
            {number}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-xl font-bold leading-tight text-[#4e0708] sm:text-[22px]">
              {heading}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#6d6762] sm:mt-3.5 sm:text-base">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 ">
          {items.map((item) => (
            <ServiceOfferingCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const DEFAULT_SUBTEXT =
  "50+ Years of Trusted Experience • Family-Run Legacy • One-Stop Insurance & Financial Solution • In-House CA, Lawyer & CFP • Transparent & Honest Guidance";

export function ServicesSection({
  services: _services,
  eyebrow = "SERVICES",
  title = "Explore Our Service Offerings",
  description = DEFAULT_SUBTEXT,
}: ServicesSectionProps) {
  return (
    <section className="relative isolate overflow-x-hidden bg-[#F5F3F0] text-brand-dark">
      <div className="h-1.5 w-full bg-[#4e0708]" aria-hidden />
      <div className="px-4 pb-12 pt-14 sm:px-6 sm:pb-14 sm:pt-16 lg:px-20 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4e0708] sm:text-[0.8125rem]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[#4e0708] sm:mt-5 sm:text-3xl lg:text-[2.125rem] lg:leading-snug">
            {title}
          </h2>
          <div className="mx-auto mt-6 max-w-5xl border-t border-[#cfc7bf] pt-6 sm:mt-7 sm:pt-7">
            <p className="text-center text-sm leading-relaxed text-[#6d6762] sm:text-[15px] sm:leading-relaxed">
              {description}
            </p>
          </div>
        </header>

        <div className="mt-12 flex flex-col gap-12 sm:mt-14 sm:gap-4">
          <CategoryBlock
            number="01"
            heading="Financial Advisory & Growth Services"
            subtitle="Additional services to help you plan, manage, and grow your finances with confidence."
            items={financialAdvisoryServices}
          />
          <CategoryBlock
            number="02"
            heading="Life & Personal Insurance"
            subtitle="Essential personal coverage plans for life, health, and all-round protection."
            items={lifePersonalInsuranceServices}
          />
          <CategoryBlock
            number="03"
            heading="General Insurance (Non-Life)"
            subtitle="Protection for your assets, property, travel, business, and community premises — including specialist cover for temples and sacred sites."
            items={generalInsuranceServices}
          />
        </div>
        </div>
      </div>
    </section>
  );
}
