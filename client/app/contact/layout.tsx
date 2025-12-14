import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with URB Insurance for your insurance needs. Ready to protect your future? Let's discuss your insurance requirements and explore how we can help safeguard what matters most.",
  openGraph: {
    title: "Contact Us - URB Insurance",
    description:
      "Get in touch with URB Insurance for your insurance needs. Let's discuss your insurance requirements.",
    images: ["/images/projecthero2.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


