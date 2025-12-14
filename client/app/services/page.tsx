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
  openGraph: {
    title: "Our Services - URB Insurance",
    description:
      "Comprehensive architectural and construction services designed to bring your vision to life with precision and excellence.",
    images: ["/images/projecthero2.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="text-[#031B4E]">
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
