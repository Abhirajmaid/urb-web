export type BlogPost = {
  slug: string;
  href: string;
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
};

export const blogs: BlogPost[] = [
  {
    slug: "comprehensive-life-insurance-guide",
    href: "/blogs/comprehensive-life-insurance-guide",
    title: "Comprehensive Life Insurance Guide: Protecting Your Family's Future",
    date: "October 4, 2024",
    excerpt: "Discover how life insurance provides financial security and peace of mind for your loved ones. Learn about different policy types, coverage options, and choosing the right plan.",
    imageSrc: "/showcase.jpg",
    imageAlt: "Family protection and financial security",
    tag: "Feature blog",
  },
  {
    slug: "motor-insurance-essentials",
    href: "/blogs/motor-insurance-essentials",
    title: "Motor Insurance Essentials: Everything You Need to Know About Vehicle Coverage",
    date: "October 4, 2024",
    excerpt: "A complete guide to motor insurance policies, coverage types, claim processes, and how to get the best protection for your vehicle at competitive rates.",
    imageSrc: "/yashrajhero.jpg",
    imageAlt: "Vehicle insurance and protection",
    tag: "Feature blog",
  },
  {
    slug: "home-property-insurance-protection",
    href: "/blogs/home-property-insurance-protection",
    title: "Home & Property Insurance: Comprehensive Protection for Your Assets",
    date: "October 4, 2024",
    excerpt: "Understanding home and property insurance policies, coverage options, and how to safeguard your most valuable assets against unexpected risks and damages.",
    imageSrc: "/yashrajhero1.jpg",
    imageAlt: "Home and property protection",
    tag: "Feature blog",
  },
  {
    slug: "travel-insurance-complete-guide",
    href: "/blogs/travel-insurance-complete-guide",
    title: "Travel Insurance Complete Guide: Stay Protected on Every Journey",
    date: "October 4, 2024",
    excerpt: "Learn why travel insurance is essential for every trip. Explore coverage options, claim procedures, and how to choose the right policy for your travel needs.",
    imageSrc: "/showcase.jpg",
    imageAlt: "Travel protection and insurance",
    tag: "Feature blog",
  },
  {
    slug: "jewellery-precious-items-insurance",
    href: "/blogs/jewellery-precious-items-insurance",
    title: "Jewellery & Precious Items Insurance: Protecting Your Valuables",
    date: "October 4, 2024",
    excerpt: "Discover specialized insurance coverage for jewellery, gold, diamonds, and precious items. Learn how to properly insure and protect your valuable possessions.",
    imageSrc: "/yashrajhero.jpg",
    imageAlt: "Jewellery and precious items protection",
    tag: "Feature blog",
  },
  {
    slug: "fire-burglary-insurance-coverage",
    href: "/blogs/fire-burglary-insurance-coverage",
    title: "Fire & Burglary Insurance: Essential Protection for Your Property",
    date: "October 4, 2024",
    excerpt: "Understanding fire and burglary insurance policies, coverage benefits, and how these essential protections safeguard your property and belongings.",
    imageSrc: "/yashrajhero1.jpg",
    imageAlt: "Fire and burglary protection coverage",
    tag: "Feature blog",
  },
];

