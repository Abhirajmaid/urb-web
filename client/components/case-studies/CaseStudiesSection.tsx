import { ClientCaseStudyCard } from "@/components/home/ClientCaseStudyCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-16 text-brand-dark"
      id="case-studies-grid"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <SectionHeader
            eyebrow="SUCCESS STORIES"
            title="Client Case Studies"
            description="Discover how we've helped individuals, families, and businesses protect what matters most. From quick claim settlements to tailored coverage, see how URB Insurance delivers peace of mind."
            align="center"
            eyebrowClassName="text-primary"
            titleClassName="text-brand-dark"
            descriptionClassName="text-brand-dark/70 max-w-3xl mx-auto"
          />
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <ClientCaseStudyCard
              key={`${caseStudy.clientName}-${index}`}
              {...caseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
