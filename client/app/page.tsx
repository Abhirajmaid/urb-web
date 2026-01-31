import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ConnectMarquee } from "@/components/common/ConnectMarquee";
import { FAQSection } from "@/components/common/FAQSection";
import { FeatureBlogsSection } from "@/components/home/FeatureBlogsSection";
import { Footer } from "@/components/common/Footer";
import { MissionVisionSection } from "@/components/home/MissionVisionSection";
import { PartnersSection } from "@/components/common/PartnersSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { ServicesHighlightSection } from "@/components/home/ServicesHighlightSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { ClientCaseStudiesSection } from "@/components/home/ClientCaseStudiesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to URB Insurance - Your trusted partner for comprehensive insurance solutions. Discover our innovative coverage options and exceptional insurance services.",
  keywords: [
    "URB Insurance",
    "insurance company",
    "insurance solutions",
    "health insurance",
    "auto insurance",
    "home insurance",
    "life insurance",
    "insurance coverage",
    "insurance quote",
  ],
  openGraph: {
    title: "URB Insurance - Leading Insurance Company",
    description:
      "Your trusted partner for comprehensive insurance solutions. Discover our innovative coverage options and exceptional insurance services.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URB Insurance - Leading Insurance Company",
    description: "Your trusted partner for comprehensive insurance solutions.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com",
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ShowcaseSection />
      <ConnectMarquee />
      <MissionVisionSection />
      <ServicesHighlightSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <ClientCaseStudiesSection />
      {/* <ProjectsSection /> */}
      <TestimonialsSection />
      {/* <FeatureBlogsSection /> */}
      <ServiceCTASection />
      <Footer />
    </main>
  );
}
