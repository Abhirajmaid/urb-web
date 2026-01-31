import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { BlogsSection } from "@/components/blogs/BlogsSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore insights, industry news, insurance tips, and coverage updates from URB Insurance. Stay informed about the latest trends in insurance and risk management.",
  keywords: [
    "insurance blog",
    "insurance tips",
    "insurance news",
    "insurance insights",
    "risk management",
    "insurance trends",
    "coverage updates",
  ],
  openGraph: {
    title: "Blogs - URB Insurance",
    description:
      "Explore insights, industry news, insurance tips, and coverage updates from URB Insurance.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - URB Insurance",
    description: "Explore insurance insights, tips, and industry news.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="text-[#031B4E]">
      <PageHeader
        title="Insurance Insights & Updates"
        description="Explore our insights on insurance, coverage options, risk management, and financial protection strategies. Stay informed about the latest trends in insurance."
        backgroundImage="/images/blogsimage.jpg"
        backgroundImageAlt="Insurance blog insights"
      />

      <BlogsSection />

      <div className="bg-white">
        <ServiceCTASection />
      </div>
      <Footer />
    </main>
  );
}
