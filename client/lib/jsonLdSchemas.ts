// JSON-LD schema data (no React) — safe for server components and layout <head>.

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "URB Insurance",
  description:
    "URB Insurance — trusted wealth creation and insurance advisory since 1976. We provide personalised financial planning, investment products and insurance solutions with transparency and technology-first access.",
  url: "https://www.urbinsurance.co.in",
  logo: "https://www.urbinsurance.co.in/URB-logo.png",
  image: "https://www.urbinsurance.co.in/images/hero.jpg",
  telephone: "+91-9773113511",
  email: "punmiya.bharat@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-14, Bussa Udyog Bhavan, T.J. Road, Sewree",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400015",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/urbinsurance",
    "https://www.twitter.com/urbinsurance",
    "https://www.linkedin.com/company/urbinsurance",
    "https://www.instagram.com/urbinsurance",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "URB Insurance",
  url: "https://www.urbinsurance.co.in",
  description:
    "URB Insurance — wealth creation, financial planning and insurance advisory. Access client dashboards, certified advisors and transparent reporting.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.urbinsurance.co.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const createBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.name,
  provider: {
    "@type": "InsuranceAgency",
    name: "URB Insurance",
  },
  description: service.description,
  url: service.url,
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
});

export const createFAQSchema = (
  faqs: { question: string; answer: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createReviewSchema = (
  reviews: {
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }[]
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "URB Insurance Services",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  })),
});
