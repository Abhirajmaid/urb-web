import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { StickyHeader } from "@/components/common/StickyHeader";
import { BottomNavbar } from "@/components/common/BottomNavbar";
import { EnquiryModalProvider } from "@/contexts/EnquiryModalContext";
import {
  StructuredData,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/StructuredData";

const dmSans = DM_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "URB Insurance - Leading Insurance Company",
    template: "%s | URB Insurance",
  },
  description:
    "URB Insurance is a premier insurance company specializing in comprehensive insurance solutions, risk management, and innovative coverage options. Protect your future with our expert insurance services.",
  keywords: [
    "insurance company",
    "insurance services",
    "risk management",
    "insurance coverage",
    "insurance solutions",
    "commercial insurance",
    "personal insurance",
    "insurance policies",
    "URB Insurance",
    "insurance providers",
    "insurance brokers",
    "insurance management",
  ],
  authors: [{ name: "URB Insurance" }],
  creator: "URB Insurance",
  publisher: "URB Insurance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urbinsurance.com",
    siteName: "URB Insurance",
    title: "URB Insurance - Leading Insurance Company",
    description:
      "Premier insurance company specializing in comprehensive insurance solutions, risk management, and innovative coverage options.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "URB Insurance - Insurance Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URB Insurance - Leading Insurance Company",
    description:
      "Premier insurance company specializing in comprehensive insurance solutions and innovative coverage options.",
    images: ["/images/hero.jpg"],
    creator: "@urbinsurance",
  },
  alternates: {
    canonical: "https://urbinsurance.com",
  },
  category: "Insurance",
  metadataBase: new URL("https://urbinsurance.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/URB-logo.png" />
        <meta name="theme-color" content="#4e0708" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${dmSans.variable} antialiased pb-20 lg:pb-0`}>
        <EnquiryModalProvider>
          <StickyHeader />
          {children}
          <BottomNavbar />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
