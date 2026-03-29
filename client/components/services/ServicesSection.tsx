import { Icon } from "@iconify/react";
import type { ReactNode } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Service } from "@/data/services";

type ServicesSectionProps = {
  services: Service[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

type ServiceCardItem = {
  title: string;
  icon: string;
};

/* ─── Data ──────────────────────────────────────────────────── */

const financialAdvisoryServices: ServiceCardItem[] = [
  { title: "Business & Personal Financial Advisory", icon: "mdi:briefcase-outline" },
  { title: "Complete Protection Planning",           icon: "mdi:shield-star-outline" },
  { title: "Smart Financial Growth Strategy",        icon: "mdi:trending-up" },
];

const lifePersonalInsuranceServices: ServiceCardItem[] = [
  { title: "Life Insurance",    icon: "mdi:heart-pulse" },
  { title: "Health Insurance",  icon: "mdi:hospital-box-outline" },
  { title: "General Insurance", icon: "mdi:bank-outline" },
];

const generalInsuranceServices: ServiceCardItem[] = [
  { title: "Motor Insurance (Car & Bike)",          icon: "mdi:car-outline" },
  { title: "Home Insurance",                         icon: "mdi:home-outline" },
  { title: "Shop & Business Insurance",              icon: "mdi:office-building-outline" },
  { title: "Mutual Fund Investments",                icon: "mdi:chart-line" },
  { title: "Financial Planning & Wealth Management", icon: "mdi:wallet-outline" },
  { title: "Marine Insurance",                       icon: "mdi:anchor" },
  { title: "Travel Insurance",                       icon: "mdi:airplane" },
  { title: "Tax Planning Services",                  icon: "mdi:file-document-edit-outline" },
  { title: "General Insurance Solutions",            icon: "mdi:shield-check-outline" },
];

/* ─── Card ───────────────────────────────────────────────────── */

function ServiceCard({ title, icon }: ServiceCardItem) {
  return (
    <article className="group flex items-center gap-4 rounded-xl border border-[#e8deda] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(59,29,28,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-[#c5a9a5] hover:shadow-[0_6px_20px_rgba(59,29,28,0.12)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#3b1d1c] text-white transition duration-200 group-hover:bg-[#5a2a29]">
        <Icon icon={icon} className="h-5 w-5" aria-hidden />
      </div>
      <h4 className="text-sm sm:text-base font-semibold leading-snug text-[#3b1d1c]">
        {title}
      </h4>
    </article>
  );
}

/* ─── Grid ───────────────────────────────────────────────────── */

function ServiceCardsGrid({ items }: { items: ServiceCardItem[] }) {
  return (
    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <ServiceCard key={s.title} {...s} />
      ))}
    </div>
  );
}

/* ─── Group wrapper ──────────────────────────────────────────── */

function ServiceGroup({
  number,
  heading,
  description,
  children,
}: {
  number: string;
  heading: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#ede4e0] bg-[#faf6f4] overflow-hidden">
      {/* group header */}
      <div className="flex items-start gap-4 border-b border-[#ede4e0] bg-white px-6 py-5 sm:px-7 sm:py-6">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3b1d1c] text-sm font-bold text-white">
          {number}
        </span>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#3b1d1c] leading-tight">
            {heading}
          </h3>
          <p className="mt-1 text-sm text-[#7c6463]">{description}</p>
        </div>
      </div>
      {/* cards */}
      <div className="px-5 py-5 sm:px-7 sm:py-6">{children}</div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */

export function ServicesSection({
  services: _services,
  eyebrow = "Services",
  title = "Explore Our Service Offerings",
  description = "50+ Years of Trusted Experience • Family-Run Legacy with Strong Values • One-Stop Solution for All Insurance & Financial Needs • In-House Experts – Chartered Accountant, Lawyer & Certified Financial Planner • Personalized Advice Tailored to Your Needs • Transparent & Honest Guidance • Strong Customer Relationships Built on Trust",
}: ServicesSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#e8ddda] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-10 xl:px-14 lg:py-12">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            <div className="mt-6 border-t border-[#e9e0dd]" />

            <div className="mt-8 space-y-6">
              <ServiceGroup
                number="01"
                heading="Financial Advisory & Growth Services"
                description="Additional services to help you plan, manage, and grow your finances with confidence."
              >
                <ServiceCardsGrid items={financialAdvisoryServices} />
              </ServiceGroup>

              <ServiceGroup
                number="02"
                heading="Life & Personal Insurance"
                description="Essential personal coverage plans for life, health, and all-round protection."
              >
                <ServiceCardsGrid items={lifePersonalInsuranceServices} />
              </ServiceGroup>

              <ServiceGroup
                number="03"
                heading="General Insurance (Non-Life)"
                description="Protection for your assets, property, travel, and business needs."
              >
                <ServiceCardsGrid items={generalInsuranceServices} />
              </ServiceGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
