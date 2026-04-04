import { ClientCaseStudyCard } from "@/components/home/ClientCaseStudyCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark"
      id="case-studies-grid"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-primary/5 via-transparent to-transparent" />

          <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-10 lg:px-10 xl:px-14 lg:py-12">
            <div className="mb-6 sm:mb-8">
              <SectionHeader
                eyebrow="CLIENT CASE STUDIES"
                title="Our Success Stories"
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
        </div>
      </div>
    </section>
  );
}
