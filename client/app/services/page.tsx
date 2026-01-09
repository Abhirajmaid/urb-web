import type { Metadata } from "next";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ConnectWithUsButtons } from "@/components/services/ConnectWithUsButtons";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { Footer } from "@/components/common/Footer";
import { FAQSection } from "@/components/common/FAQSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive insurance services designed to protect your future with precision and excellence. From personal insurance to commercial coverage, URB Insurance delivers exceptional results.",
  keywords: [
    "insurance services",
    "health insurance",
    "auto insurance",
    "home insurance",
    "life insurance",
    "commercial insurance",
    "business insurance",
    "personal insurance",
    "insurance coverage",
  ],
  openGraph: {
    title: "Our Services - URB Insurance",
    description:
      "Comprehensive insurance services designed to protect your future. From personal insurance to commercial coverage, we deliver exceptional results.",
    images: ["/images/projecthero2.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - URB Insurance",
    description:
      "Comprehensive insurance services from personal to commercial coverage.",
    images: ["/images/projecthero2.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#031B4E]">
      <ServicesHeroSection />
      <ConnectWithUsButtons />
      <ServicesSection services={services} />
      <div className="bg-white">
        <FAQSection />
      </div>

      <div className="bg-white">
        <ServiceCTASection />
      </div>

      <Footer />
    </main>
  );
}
