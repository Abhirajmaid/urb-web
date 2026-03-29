import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Footer } from "@/components/common/Footer";
import { PartnersSection } from "@/components/common/PartnersSection";
import { PurposeSection } from "@/components/about-us/PurposeSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { StorySection } from "@/components/about-us/StorySection";
import { TeamsSection } from "@/components/about-us/TeamsSection";
import { purposePillars, storyHighlights } from "@/data/aboutUs";
import { SITE_IMAGES } from "@/data/siteImages";
import {
  OfficeGallerySection,
  WorkspaceSplitSection,
} from "@/components/common/OfficeVisualSections";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "URB Insurance is a trusted insurance and financial services name since 5th February 1976, offering complete protection and planning with multi-generational values of trust, commitment, and excellence.",
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
      "URB Insurance: over 50 years of trusted insurance, investment, and financial guidance backed by expert in-house professionals.",
    images: ["/aboutus.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - URB Insurance",
    description:
      "URB Insurance helps protect, grow, and secure your future with expert and well-structured financial decisions.",
    images: ["/aboutus.jpg"],
  },
  alternates: {
    canonical: "https://www.urbinsurance.co.in/AboutPage",
  },
};

export default function AboutUsPage() {
  return (
    <main className="text-[#031B4E]">
      <PageHeader
        title="A Legacy Of Trust Since 5th February 1976"
        description="URB Insurance began as a small initiative by our grandfather and has grown into a strong multi-generational business. Today, we provide complete insurance, investment, and financial solutions under one roof to help protect, grow, and secure your future."
        backgroundImage="/aboutus.jpg"
        backgroundImageAlt="About URB Insurance"
        showButton={true}
      />
      {/* 
      <AboutIntroSection
        title="Experience innovative architecture that transforms your"
        highlightedText="vision into reality."
      /> */}

      <PurposeSection pillars={purposePillars} />

      <WorkspaceSplitSection
        eyebrow="OUR WORKSPACE"
        title="Where trusted advice meets real conversations"
        description="Our office is built for clarity—private discussions, structured reviews, and the calm focus your financial and insurance decisions deserve."
        imageSrc={SITE_IMAGES.office[0]}
        imageAlt="URB Insurance office interior—consultation and client service space"
        bullets={[
          "Dedicated space for policy reviews and claim guidance",
          "Document-led sessions so you always know what you are signing",
          "A team-first environment aligned with long-term client relationships",
        ]}
      />

      <StorySection highlights={storyHighlights} />

      <OfficeGallerySection
        eyebrow="INSIDE OUR OFFICE"
        title="A setting designed for confidence"
        description="From reception to advisory areas, every corner is arranged to feel approachable, professional, and worthy of the trust you place in us."
        images={[
          {
            src: SITE_IMAGES.office[1],
            alt: "URB Insurance reception and welcome area",
          },
          {
            src: SITE_IMAGES.office[2],
            alt: "Meeting space for insurance and financial planning discussions",
          },
          {
            src: SITE_IMAGES.office[3],
            alt: "Office workspace supporting URB client operations",
          },
        ]}
      />

      <TeamsSection />
      <PartnersSection />

      <ServiceCTASection />

      <Footer />
    </main>
  );
}
