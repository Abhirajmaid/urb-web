import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
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
      <PageHeader
        title="Our Services"
        description="We offer a complete range of insurance solutions for individuals, families, and businesses. From life and motor to jewellery, property, travel, and liability coverage—everything under one roof. Our goal is to provide reliable protection, financial security, and peace of mind for every need."
        backgroundImage="/images/servicesimage.jpg"
        backgroundImageAlt="Insurance services"
      />
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
