import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { CaseStudiesSection } from "@/components/case-studies/CaseStudiesSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore real success stories from URB Insurance clients. From families and businesses to jewellery and corporate coverage—see how we deliver quick claims, tailored protection, and peace of mind.",
  keywords: [
    "insurance case studies",
    "client success stories",
    "insurance claims",
    "family insurance",
    "jewellery insurance",
    "corporate insurance",
    "motor insurance",
    "URB Insurance reviews",
  ],
  openGraph: {
    title: "Case Studies - URB Insurance",
    description:
      "Real success stories from URB Insurance clients. See how we deliver quick claims, tailored coverage, and peace of mind.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - URB Insurance",
    description: "Client success stories and real insurance outcomes.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-[#031B4E]">
      <PageHeader
        title="Client Case Studies"
        description="Discover how we've helped individuals, families, and businesses protect what matters most. From quick claim settlements to tailored coverage, URB Insurance delivers peace of mind."
        backgroundImage="/images/pageheader.jpg"
        backgroundImageAlt="Client case studies"
        showButton={true}
      />

      <CaseStudiesSection />

      <div className="bg-white">
        <ServiceCTASection />
      </div>

      <Footer />
    </main>
  );
}
