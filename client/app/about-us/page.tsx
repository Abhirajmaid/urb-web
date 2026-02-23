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
    "At URB, our mission is to provide simple, unbiased and effective wealth creation and insurance solutions. Established in 1976, we combine professional advice, technology and transparency to help clients reach their financial goals.",
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
      "URB Insurance: wealth creation, insurance advisory, and personalised financial planning since 1976.",
    images: ["/images/about.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - URB Insurance",
    description:
      "URB Insurance: personalised financial and insurance services, certified advisors and client dashboards for easy access.",
    images: ["/images/about.jpg"],
  },
  alternates: {
    canonical: "https://www.urbinsurance.co.in/AboutPage",
  },
};

export default function AboutUsPage() {
  return (
    <main className="text-[#031B4E]">
      <PageHeader
        title="To Build An Affordable Wealth Creation Platform For Clients Across Industries"
        description="At URB, we provide simple, unbiased and actionable advice in wealth creation, financial planning and insurance. Certified by NSE and AMFI, we combine technology and personal counsel to help clients achieve their financial goals."
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
