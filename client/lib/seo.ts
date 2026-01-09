/**
 * SEO Utilities for URB Insurance
 * Provides helper functions for generating SEO metadata
 */

export const siteConfig = {
  name: "URB Insurance",
  title: "URB Insurance - Leading Insurance Company",
  description:
    "Premier insurance company specializing in comprehensive insurance solutions, risk management, and innovative coverage options.",
  url: "https://urbinsurance.com",
  ogImage: "https://urbinsurance.com/images/hero.jpg",
  logo: "https://urbinsurance.com/URB-logo.png",
  twitterHandle: "@urbinsurance",
  email: "info@urbinsurance.com",
  phone: "+1-XXX-XXX-XXXX",
  address: {
    street: "Insurance Plaza, Financial District",
    city: "City",
    state: "State",
    zip: "12345",
    country: "United States",
  },
};

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generate page title with site name
 */
export function generatePageTitle(title: string): string {
  if (title === "Home") return siteConfig.title;
  return `${title} | ${siteConfig.name}`;
}

/**
 * Truncate description to optimal length for meta tags
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

/**
 * Generate keywords array from string
 */
export function generateKeywords(keywords: string[]): string {
  return keywords.join(", ");
}

/**
 * Calculate reading time for blog posts
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generate Open Graph metadata
 */
export function generateOGMetadata(config: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}) {
  return {
    title: config.title,
    description: config.description,
    url: config.url,
    type: config.type || "website",
    images: [
      {
        url: config.image || siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
    siteName: siteConfig.name,
  };
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterMetadata(config: {
  title: string;
  description: string;
  image?: string;
}) {
  return {
    card: "summary_large_image" as const,
    title: config.title,
    description: config.description,
    images: [config.image || siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  };
}

/**
 * SEO best practices checker
 */
export function validateSEO(config: {
  title: string;
  description: string;
  keywords?: string[];
}) {
  const issues: string[] = [];

  // Title validation
  if (config.title.length < 30) {
    issues.push("Title is too short (recommended: 30-60 characters)");
  }
  if (config.title.length > 60) {
    issues.push("Title is too long (recommended: 30-60 characters)");
  }

  // Description validation
  if (config.description.length < 120) {
    issues.push("Description is too short (recommended: 120-160 characters)");
  }
  if (config.description.length > 160) {
    issues.push("Description is too long (recommended: 120-160 characters)");
  }

  // Keywords validation
  if (config.keywords && config.keywords.length < 5) {
    issues.push("Consider adding more keywords (recommended: 5-10)");
  }
  if (config.keywords && config.keywords.length > 15) {
    issues.push("Too many keywords (recommended: 5-10)");
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}
