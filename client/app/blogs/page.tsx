import type { Metadata } from "next";
import { BlogsHeroSection } from "@/components/blogs/BlogsHeroSection";
import { BlogsSection } from "@/components/blogs/BlogsSection";
import { ServiceCTASection } from "@/components/common/ServiceCTASection";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore insights, industry news, insurance tips, and coverage updates from URB Insurance. Stay informed about the latest trends in insurance and risk management.",
  openGraph: {
    title: "Blogs - URB Insurance",
    description:
      "Explore insights, industry news, insurance tips, and coverage updates from URB Insurance.",
  },
};

export default function BlogsPage() {
  return (
    <main className="text-[#031B4E]">
      <BlogsHeroSection />

      <BlogsSection />

      <div className="bg-white">
        <ServiceCTASection />
      </div>
      <Footer />
    </main>
  );
}
