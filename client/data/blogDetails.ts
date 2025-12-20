import { BlogPost, blogs } from "./blogs";

const blogsBySlug = blogs.reduce<Record<string, BlogPost>>((acc, blog) => {
  acc[blog.slug] = blog;
  return acc;
}, {});

type SectionImage = {
  src: string;
  alt: string;
  caption?: string;
};

type SectionInsight = {
  label: string;
  content: string;
};

export type BlogContentSection = {
  heading: string;
  paragraphs: string[];
  image?: SectionImage;
  insight?: SectionInsight;
};

export type BlogDetail = BlogPost & {
  heroKicker: string;
  category: string;
  summary: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  keyPoints: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  highlightStats: {
    label: string;
    value: string;
    description: string;
  }[];
  sections: BlogContentSection[];
};

export const blogDetails: Record<string, BlogDetail> = {
  "comprehensive-life-insurance-guide": {
    ...blogsBySlug["comprehensive-life-insurance-guide"]!,
    heroKicker: "Financial security",
    category: "Life insurance",
    summary:
      "Life insurance is the foundation of financial planning, providing your loved ones with security and peace of mind. Understanding policy types, coverage options, and benefits helps you make informed decisions for your family's future.",
    readingTime: "7 min read",
    author: {
      name: "Rajesh Kumar",
      role: "Senior Insurance Advisor",
    },
    keyPoints: [
      "Term life insurance offers affordable coverage for specific periods, ideal for young families.",
      "Whole life insurance builds cash value over time while providing lifelong protection.",
      "LIC and mutual fund insurance combine investment growth with life coverage benefits.",
    ],
    quote: {
      text: "Life insurance isn't about you—it's about ensuring your family's dreams continue even when you're not there to provide for them.",
      author: "Rajesh Kumar",
      role: "Senior Insurance Advisor",
    },
    highlightStats: [
      {
        label: "Policy holders",
        value: "2.5M+",
        description: "Families protected through our comprehensive life insurance plans.",
      },
      {
        label: "Claim settlement",
        value: "98.5%",
        description: "Average claim settlement ratio ensuring timely financial support.",
      },
      {
        label: "Customer satisfaction",
        value: "94%",
        description: "Policyholders reporting high satisfaction with coverage and service.",
      },
    ],
    sections: [
      {
        heading: "Understanding life insurance fundamentals",
        paragraphs: [
          "Life insurance serves as a financial safety net, ensuring your family's financial stability in your absence. Whether you're starting a family, building a career, or planning for retirement, the right life insurance policy provides essential protection.",
          "Term life insurance offers high coverage at affordable premiums for specific periods—typically 10, 20, or 30 years. It's perfect for covering mortgages, children's education, or income replacement during your working years.",
        ],
        image: {
          src: "/showcase.jpg",
          alt: "Family financial security and protection",
          caption: "Life insurance provides peace of mind for families at every stage of life.",
        },
      },
      {
        heading: "Whole life and investment-linked policies",
        paragraphs: [
          "Whole life insurance provides permanent coverage that lasts your entire lifetime, while building cash value you can borrow against or withdraw. It's ideal for estate planning and long-term wealth accumulation.",
          "LIC insurance and mutual fund insurance combine life coverage with investment opportunities, allowing your premiums to grow while maintaining protection. These policies offer flexibility to adjust coverage and investment allocations as your needs change.",
        ],
        insight: {
          label: "Expert tip",
          content: "Review your life insurance coverage annually, especially after major life events like marriage, children, or career changes.",
        },
      },
      {
        heading: "Choosing the right coverage amount",
        paragraphs: [
          "Determining adequate coverage involves calculating your family's financial needs: outstanding debts, future education costs, living expenses, and final expenses. A common rule is 10-15 times your annual income, but individual circumstances vary.",
          "Consider factors like your spouse's income, existing savings, children's ages, and long-term financial goals. Our advisors help you assess your unique situation to recommend the optimal coverage amount and policy type.",
        ],
      },
    ],
  },
  "motor-insurance-essentials": {
    ...blogsBySlug["motor-insurance-essentials"]!,
    heroKicker: "Vehicle protection",
    category: "Motor insurance",
    summary:
      "Motor insurance is mandatory and essential for every vehicle owner. From comprehensive coverage to third-party policies, understanding your options ensures your vehicle and finances are protected against accidents, theft, and damages.",
    readingTime: "6 min read",
    author: {
      name: "Priya Sharma",
      role: "Motor Insurance Specialist",
    },
    keyPoints: [
      "Comprehensive motor insurance covers own damage, third-party liability, and theft protection.",
      "Third-party insurance is legally required and covers damages to others, not your vehicle.",
      "No-claim bonuses reward safe driving with premium discounts up to 50% over time.",
    ],
    quote: {
      text: "Motor insurance isn't just a legal requirement—it's your financial shield against unexpected accidents and liabilities on the road.",
      author: "Priya Sharma",
      role: "Motor Insurance Specialist",
    },
    highlightStats: [
      {
        label: "Vehicles insured",
        value: "850K+",
        description: "Cars, bikes, and commercial vehicles protected under our policies.",
      },
      {
        label: "Claim processing",
        value: "24-48 hrs",
        description: "Average time for claim approval and settlement processing.",
      },
      {
        label: "Network garages",
        value: "5,000+",
        description: "Authorized service centers across India for cashless repairs.",
      },
    ],
    sections: [
      {
        heading: "Types of motor insurance coverage",
        paragraphs: [
          "Comprehensive motor insurance provides complete protection covering own damage, third-party liability, personal accident, and theft. It's the most extensive coverage, protecting both your vehicle and others on the road.",
          "Third-party insurance is the minimum legal requirement, covering damages to other people and property but not your own vehicle. While more affordable, it offers limited protection and is typically chosen for older vehicles with lower market value.",
        ],
      },
      {
        heading: "Understanding add-on covers",
        paragraphs: [
          "Enhance your motor insurance with valuable add-ons like zero depreciation, engine protection, roadside assistance, and consumables cover. These additions provide extra protection beyond standard policies.",
          "Zero depreciation cover ensures you receive full claim amount without deducting depreciation, while engine protection covers expensive engine repairs. Roadside assistance provides 24/7 support for breakdowns, flat tires, and emergency fuel delivery.",
        ],
        image: {
          src: "/yashrajhero.jpg",
          alt: "Vehicle insurance and protection",
        },
      },
      {
        heading: "Claim process and documentation",
        paragraphs: [
          "Filing a motor insurance claim requires immediate notification, police report (for accidents), photos of damage, and vehicle documents. Our streamlined process ensures quick assessment and settlement.",
          "Cashless claims at network garages eliminate out-of-pocket expenses, while reimbursement claims allow repairs at your preferred garage. We guide you through every step to ensure smooth claim processing.",
        ],
        insight: {
          label: "Quick guide",
          content: "Keep your insurance documents, vehicle registration, and driver's license accessible. Take photos immediately after any incident for faster claim processing.",
        },
      },
    ],
  },
  "home-property-insurance-protection": {
    ...blogsBySlug["home-property-insurance-protection"]!,
    heroKicker: "Asset protection",
    category: "Property insurance",
    summary:
      "Your home and property represent significant investments that deserve comprehensive protection. Home and property insurance safeguard your assets against fire, natural disasters, theft, and structural damages, ensuring financial security for your most valuable possessions.",
    readingTime: "8 min read",
    author: {
      name: "Amit Patel",
      role: "Property Insurance Expert",
    },
    keyPoints: [
      "Home insurance covers structure, contents, and third-party liability for residential properties.",
      "Property insurance extends to commercial buildings, offices, and rental properties.",
      "Fire and burglary coverage are essential components protecting against common risks.",
    ],
    quote: {
      text: "Your home is more than bricks and mortar—it's your sanctuary. Property insurance ensures that sanctuary remains protected against life's uncertainties.",
      author: "Amit Patel",
      role: "Property Insurance Expert",
    },
    highlightStats: [
      {
        label: "Properties insured",
        value: "1.2M+",
        description: "Homes and commercial properties protected across India.",
      },
      {
        label: "Coverage range",
        value: "₹50L-₹50Cr",
        description: "Flexible sum insured options for properties of all sizes.",
      },
      {
        label: "Claim settlement",
        value: "97%",
        description: "High claim approval rate ensuring timely property restoration.",
      },
    ],
    sections: [
      {
        heading: "Comprehensive home insurance coverage",
        paragraphs: [
          "Home insurance provides multi-layered protection covering the structure, contents, and third-party liability. Structure coverage protects walls, roof, and permanent fixtures, while contents coverage safeguards furniture, appliances, and personal belongings.",
          "Third-party liability covers legal expenses if someone is injured on your property. Additional covers include alternative accommodation during repairs, loss of rent, and protection against natural disasters like floods, earthquakes, and cyclones.",
        ],
      },
      {
        heading: "Commercial property insurance benefits",
        paragraphs: [
          "Property insurance for commercial spaces covers office buildings, retail stores, warehouses, and rental properties. It protects against fire, structural damage, business interruption, and liability claims.",
          "Commercial policies can be customized with add-ons like machinery breakdown, loss of profits, and employee liability coverage. This ensures your business operations continue smoothly even after unexpected events.",
        ],
        image: {
          src: "/yashrajhero1.jpg",
          alt: "Home and property protection coverage",
        },
      },
      {
        heading: "Fire and burglary protection essentials",
        paragraphs: [
          "Fire insurance is crucial for protecting against fire-related damages, explosions, and lightning strikes. It covers repair costs, debris removal, and temporary accommodation expenses.",
          "Burglary insurance protects against theft, break-ins, and vandalism. It covers stolen items, damage to property during break-ins, and replacement costs. Combined with fire insurance, these policies provide comprehensive property protection.",
        ],
        insight: {
          label: "Protection checklist",
          content: "Document your property with photos, keep receipts for valuable items, and review your sum insured annually to account for inflation and property appreciation.",
        },
      },
    ],
  },
  "travel-insurance-complete-guide": {
    ...blogsBySlug["travel-insurance-complete-guide"]!,
    heroKicker: "Travel protection",
    category: "Travel insurance",
    summary:
      "Travel insurance is your essential companion for every journey, protecting against medical emergencies, trip cancellations, lost baggage, and unexpected travel disruptions. Whether traveling domestically or internationally, comprehensive coverage ensures peace of mind.",
    readingTime: "5 min read",
    author: {
      name: "Sneha Reddy",
      role: "Travel Insurance Consultant",
    },
    keyPoints: [
      "Travel insurance covers medical emergencies, trip cancellations, baggage loss, and flight delays.",
      "International travel requires higher coverage limits for medical expenses abroad.",
      "Pre-existing conditions and adventure activities may need specialized coverage options.",
    ],
    quote: {
      text: "Travel insurance transforms unexpected emergencies into manageable situations, allowing you to focus on enjoying your journey rather than worrying about what could go wrong.",
      author: "Sneha Reddy",
      role: "Travel Insurance Consultant",
    },
    highlightStats: [
      {
        label: "Travelers protected",
        value: "500K+",
        description: "Annual travelers covered through our comprehensive travel insurance plans.",
      },
      {
        label: "Medical coverage",
        value: "Up to $1M",
        description: "Maximum medical expense coverage for international travel emergencies.",
      },
      {
        label: "Claim processing",
        value: "72 hrs",
        description: "Average time for travel insurance claim approval and settlement.",
      },
    ],
    sections: [
      {
        heading: "Essential travel insurance coverage",
        paragraphs: [
          "Travel insurance provides comprehensive protection covering medical emergencies, trip cancellations, lost or delayed baggage, flight delays, and personal liability. Medical coverage is especially critical for international travel, where healthcare costs can be exorbitant.",
          "Trip cancellation and interruption coverage reimburses non-refundable expenses if you must cancel or cut short your trip due to covered reasons like illness, family emergencies, or natural disasters. This protection ensures your travel investment isn't lost.",
        ],
        image: {
          src: "/showcase.jpg",
          alt: "Travel protection and insurance coverage",
          caption: "Travel with confidence knowing you're protected against unexpected events.",
        },
      },
      {
        heading: "International vs domestic travel coverage",
        paragraphs: [
          "International travel insurance requires higher coverage limits, especially for medical expenses which can reach hundreds of thousands of dollars in countries like the USA. Emergency medical evacuation, repatriation, and 24/7 assistance services are essential.",
          "Domestic travel insurance focuses on trip cancellations, baggage protection, and flight delays. While medical coverage is typically lower, it still provides valuable protection for travel-related emergencies within your home country.",
        ],
        insight: {
          label: "Travel tip",
          content: "Purchase travel insurance immediately after booking your trip to maximize coverage for pre-departure cancellations and ensure protection from the earliest possible date.",
        },
      },
      {
        heading: "Specialized coverage options",
        paragraphs: [
          "Adventure travel insurance covers high-risk activities like skiing, scuba diving, and mountain climbing. Pre-existing medical condition coverage requires disclosure and may involve additional premiums but ensures protection for known health issues.",
          "Business travel insurance extends coverage for work-related trips, including equipment protection, business interruption, and extended stays. Family plans provide cost-effective coverage for multiple travelers under a single policy.",
        ],
      },
    ],
  },
  "jewellery-precious-items-insurance": {
    ...blogsBySlug["jewellery-precious-items-insurance"]!,
    heroKicker: "Valuables protection",
    category: "Jewellery insurance",
    summary:
      "Jewellery, gold, diamonds, and precious items hold both sentimental and financial value. Specialized insurance coverage protects these valuables against theft, loss, damage, and mysterious disappearance, ensuring your treasured possessions are safeguarded.",
    readingTime: "6 min read",
    author: {
      name: "Kavita Mehta",
      role: "Valuables Insurance Specialist",
    },
    keyPoints: [
      "Jewellery insurance covers gold, diamonds, precious stones, and fine jewelry against theft and loss.",
      "Valuation certificates and appraisals are essential for accurate coverage and claim settlement.",
      "Coverage extends to items worn daily, stored in safes, and displayed in homes or businesses.",
    ],
    quote: {
      text: "Your jewellery represents generations of memories and significant financial investment. Specialized insurance ensures these treasures remain protected for future generations.",
      author: "Kavita Mehta",
      role: "Valuables Insurance Specialist",
    },
    highlightStats: [
      {
        label: "Items insured",
        value: "250K+",
        description: "Pieces of jewellery and precious items protected under our policies.",
      },
      {
        label: "Coverage value",
        value: "₹500Cr+",
        description: "Total value of insured jewellery and precious items portfolio.",
      },
      {
        label: "Claim approval",
        value: "96%",
        description: "High claim settlement rate for documented and appraised items.",
      },
    ],
    sections: [
      {
        heading: "Understanding jewellery insurance coverage",
        paragraphs: [
          "Jewellery insurance provides comprehensive protection for gold, diamonds, precious stones, and fine jewelry against theft, loss, damage, and mysterious disappearance. Coverage applies whether items are worn, stored in safes, or displayed at home.",
          "Policies cover individual pieces, collections, and even items in transit. Specialized coverage for antique jewellery accounts for historical value, while modern pieces are insured at current market rates based on professional appraisals.",
        ],
      },
      {
        heading: "Gold and diamond insurance specifics",
        paragraphs: [
          "Gold insurance covers gold jewelry, coins, and bullion, with coverage based on current gold rates and making charges. Diamond insurance requires certification from recognized gemological laboratories like GIA or IGI for accurate valuation.",
          "Coverage includes loose diamonds, diamond jewelry, and diamond-studded items. Policies account for market fluctuations and provide replacement value coverage, ensuring you can replace lost or stolen items with equivalent quality pieces.",
        ],
        image: {
          src: "/yashrajhero.jpg",
          alt: "Jewellery and precious items protection",
        },
      },
      {
        heading: "Valuation and documentation requirements",
        paragraphs: [
          "Professional valuation certificates from certified appraisers are essential for accurate coverage. These documents detail item descriptions, carat weights, stone quality, and current market values, ensuring proper claim settlement.",
          "Maintain purchase receipts, photographs, and updated appraisals. Regular re-valuations account for market appreciation and ensure your coverage remains adequate. Our experts guide you through the valuation process to maximize protection.",
        ],
        insight: {
          label: "Protection strategy",
          content: "Store jewellery in bank lockers or certified home safes. Document all pieces with detailed photos and keep appraisals updated every 2-3 years to reflect current market values.",
        },
      },
    ],
  },
  "fire-burglary-insurance-coverage": {
    ...blogsBySlug["fire-burglary-insurance-coverage"]!,
    heroKicker: "Risk protection",
    category: "Fire & burglary insurance",
    summary:
      "Fire and burglary insurance provide essential protection against two of the most common property risks. These policies safeguard your home, business, and belongings against fire-related damages and theft, ensuring financial recovery from unexpected losses.",
    readingTime: "7 min read",
    author: {
      name: "Vikram Singh",
      role: "Risk Management Advisor",
    },
    keyPoints: [
      "Fire insurance covers damages from fire, explosions, lightning, and related perils.",
      "Burglary insurance protects against theft, break-ins, and vandalism of property and contents.",
      "Combined fire and burglary policies offer comprehensive protection at competitive rates.",
    ],
    quote: {
      text: "Fire and burglary risks are unpredictable, but your protection doesn't have to be. Comprehensive insurance ensures you can rebuild and recover from life's unexpected challenges.",
      author: "Vikram Singh",
      role: "Risk Management Advisor",
    },
    highlightStats: [
      {
        label: "Properties protected",
        value: "800K+",
        description: "Homes and businesses covered under fire and burglary insurance.",
      },
      {
        label: "Average claim",
        value: "₹2.5L",
        description: "Average claim amount for fire and burglary incidents.",
      },
      {
        label: "Response time",
        value: "<24 hrs",
        description: "Average time for claim assessment and initial settlement processing.",
      },
    ],
    sections: [
      {
        heading: "Comprehensive fire insurance protection",
        paragraphs: [
          "Fire insurance covers damages caused by fire, explosions, lightning strikes, and related perils. It protects building structures, contents, machinery, and stock against fire-related losses, ensuring financial recovery for repair and replacement.",
          "Coverage extends to fire damage, smoke damage, water damage from firefighting efforts, and debris removal. Additional perils like earthquakes, floods, and storms can be included through add-on covers for complete protection.",
        ],
      },
      {
        heading: "Burglary insurance coverage details",
        paragraphs: [
          "Burglary insurance protects against theft, break-ins, housebreaking, and vandalism. It covers stolen cash, jewelry, electronics, furniture, and other valuables, along with damage to property during break-in attempts.",
          "Coverage applies to items at home, in transit, and even in bank lockers. Policies include forced entry damage, replacement costs, and temporary accommodation expenses if your home becomes uninhabitable after a burglary.",
        ],
        image: {
          src: "/yashrajhero1.jpg",
          alt: "Fire and burglary protection coverage",
        },
      },
      {
        heading: "Combined protection strategies",
        paragraphs: [
          "Combined fire and burglary insurance policies offer comprehensive protection at competitive rates. These integrated policies simplify coverage management and ensure seamless claim processing for multiple perils under a single policy.",
          "Risk mitigation measures like fire alarms, security systems, and safes can reduce premiums while enhancing protection. Our advisors help you assess risks and recommend appropriate coverage limits and security measures.",
        ],
        insight: {
          label: "Safety first",
          content: "Install smoke detectors, fire extinguishers, and security systems. These safety measures protect your property and may qualify for premium discounts while ensuring faster claim processing.",
        },
      },
    ],
  },
};


