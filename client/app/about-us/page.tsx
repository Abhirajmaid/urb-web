import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Footer } from "@/components/common/Footer";
import { PartnersSection } from "@/components/common/PartnersSection";
import { PurposeSection } from "@/components/about-us/PurposeSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { StorySection } from "@/components/about-us/StorySection";
import { TeamsSection } from "@/components/about-us/TeamsSection";
import { purposePillars, storyHighlights } from "@/data/aboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about URB Insurance - a premier insurance company passionate about providing comprehensive coverage and innovative insurance solutions. Experience exceptional service that protects your future.",
  keywords: [
    "about URB Insurance",
    "insurance company history",
    "insurance mission",
    "insurance vision",
    "insurance team",
    "about insurance agency",
    "insurance company values",
  ],
  openGraph: {
    title: "About Us - URB Insurance",
    description:
      "Learn about URB Insurance - a premier insurance company passionate about providing comprehensive coverage and innovative insurance solutions.",
    images: ["/images/about.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - URB Insurance",
    description:
      "Learn about URB Insurance and our mission to provide exceptional insurance services.",
    images: ["/images/about.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="text-[#031B4E]">
      <PageHeader
        title="Protecting futures, securing peace of mind"
        description="We are passionate about providing comprehensive insurance solutions that protect individuals, families, and businesses with reliable coverage and exceptional service."
        backgroundImage="/images/about.jpg"
        backgroundImageAlt="About URB Insurance"
        showButton={true}
      />
      {/* 
      <AboutIntroSection
        title="Experience innovative architecture that transforms your"
        highlightedText="vision into reality."
      /> */}

      <PurposeSection pillars={purposePillars} />

      <StorySection highlights={storyHighlights} />

      <TeamsSection />
      <PartnersSection />

      <ServiceCTASection />

      <Footer />
    </main>
  );
}
