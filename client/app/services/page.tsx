import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { ConnectMarquee } from "@/components/common/ConnectMarquee";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { Footer } from "@/components/common/Footer";
import { FAQSection } from "@/components/common/FAQSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "URB Insurance provides a comprehensive range of insurance, investment, and financial advisory services for complete protection and smart financial growth.",
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
      "Life, health, motor, home, business, marine, travel, and general insurance with mutual funds and financial planning under one roof.",
    images: ["/service.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - URB Insurance",
    description:
      "Complete insurance and financial services for protection and growth.",
    images: ["/service.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#031B4E]">
      <PageHeader
        title="Our Services"
        description="No matter what you want to secure - your life, health, home, vehicle, or business - URB Insurance ensures complete protection and smart financial growth. We provide a comprehensive range of insurance and financial services, including mutual funds, wealth management, tax planning, and advisory. We don't just sell policies - we build long-term financial security for you and your family."
        backgroundImage="/service.jpg"
        backgroundImageAlt="Insurance services"
      />
      <ConnectMarquee />
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
