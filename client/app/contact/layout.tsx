import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with URB Insurance for your insurance needs. Ready to protect your future? Let's discuss your insurance requirements and explore how we can help safeguard what matters most.",
  keywords: [
    "contact insurance company",
    "insurance quote",
    "insurance consultation",
    "URB Insurance contact",
    "insurance help",
    "get insurance quote",
  ],
  openGraph: {
    title: "Contact Us - URB Insurance",
    description:
      "Get in touch with URB Insurance for your insurance needs. Let's discuss your insurance requirements.",
    images: ["/images/servicesimage.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - URB Insurance",
    description: "Get in touch with URB Insurance for your insurance needs.",
    images: ["/images/servicesimage.jpg"],
  },
  alternates: {
    canonical: "https://urbinsurance.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


