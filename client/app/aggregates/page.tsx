import type { Metadata } from "next";
import { CommonHeroSection } from "@/components/common/CommonHeroSection";
import { ConnectMarquee } from "@/components/common/ConnectMarquee";
import { AggregatesContent } from "@/components/aggregates/AggregatesContent";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Aggregates - Ready Mix Concrete (RMC)",
  description:
    "Discover URB Insurance's comprehensive insurance solutions. Explore our range of coverage options, locations, and comprehensive insurance services for all your protection needs.",
  keywords: [
    "insurance aggregates",
    "insurance services",
    "comprehensive insurance",
    "insurance coverage options",
    "insurance locations",
    "insurance solutions",
  ],
  openGraph: {
    title: "Aggregates - Insurance Services | URB Insurance",
    description:
      "Discover URB Insurance's comprehensive insurance solutions and coverage options.",
    images: ["/images/projecthero2.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aggregates - Insurance Services | URB Insurance",
    description:
      "Comprehensive insurance solutions and coverage options.",
    images: ["/images/projecthero2.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/aggregates",
  },
};

export default function AggregatesPage() {
  return (
    <main className="bg-white text-[#031B4E]">
      <CommonHeroSection
        id="aggregates"
        backgroundImage="/images/servicesimage.jpg"
        backgroundImageAlt="Aggregates and RMC hero background"
        title="Aggregates"
        flipHorizontal={true}
        description="Quality-assured Ready Mix Concrete (RMC) solutions from strategically located plants. Delivering strength, durability, and consistency for your construction projects."
        showGradientOverlay={false}
        scrollIndicatorText="Scroll to explore"
        backgroundColor="bg-brand-dark"
        objectPosition="top"
        maxContentWidth="max-w-4xl"
      />
      <ConnectMarquee />
      <AggregatesContent />
      <div className="bg-white">
        <ServiceCTASection />
      </div>
      <Footer />
    </main>
  );
}
