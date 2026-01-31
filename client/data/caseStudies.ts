export type CaseStudy = {
  clientLogo: string;
  clientLogoAlt: string;
  clientName: string;
  projectTitle: string;
  description: string;
  projectLocation: string;
  category: string;
  images: Array<{ src: string; alt: string }>;
};

export const caseStudies: CaseStudy[] = [
  {
    clientLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    clientLogoAlt: "Family Protection",
    clientName: "The Sharma Family",
    projectTitle: "Comprehensive Family Coverage",
    description:
      "Secured life insurance, health coverage, and home insurance for their entire family. When a medical emergency arose, URB's quick claim settlement provided financial relief within 48 hours. They now enjoy complete peace of mind knowing their future is protected.",
    projectLocation: "Mumbai",
    category: "Family",
    images: [
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Family protection",
      },
      {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
        alt: "Financial security",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        alt: "Peace of mind",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        alt: "Family security",
      },
    ],
  },
  {
    clientLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    clientLogoAlt: "Jewellery Insurance",
    clientName: "Rajesh Jewellers",
    projectTitle: "Jewellery & Valuables Protection",
    description:
      "A family-owned jewellery business needed comprehensive coverage for their inventory worth crores. URB designed a tailored jewellery insurance plan covering theft, loss, and damage. When a burglary occurred, the claim was settled promptly with full transparency.",
    projectLocation: "Delhi",
    category: "Jewellery",
    images: [
      {
        src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        alt: "Jewellery protection",
      },
      {
        src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        alt: "Valuables coverage",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        alt: "Business protection",
      },
      {
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80",
        alt: "Secure coverage",
      },
    ],
  },
  {
    clientLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    clientLogoAlt: "Corporate Client",
    clientName: "TechFlow Solutions Pvt Ltd",
    projectTitle: "Corporate Insurance Package",
    description:
      "A growing IT company needed group health, liability, and property insurance for 150+ employees. URB provided a bundled solution that reduced costs by 20% while ensuring comprehensive coverage. Their employees now benefit from cashless hospitalization and family floater plans.",
    projectLocation: "Bangalore",
    category: "Corporate",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        alt: "Corporate office",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        alt: "Team protection",
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
        alt: "Business coverage",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
        alt: "Group insurance",
      },
    ],
  },
  {
    clientLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    clientLogoAlt: "Motor Insurance",
    clientName: "Priya Mehta",
    projectTitle: "Motor & Travel Insurance",
    description:
      "After a minor car accident, Priya appreciated URB's hassle-free motor claim process. She later added travel insurance for her family's international trip—when luggage was delayed, URB reimbursed essential purchases within 5 days. She recommends URB to everyone.",
    projectLocation: "Pune",
    category: "Motor & Travel",
    images: [
      {
        src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        alt: "Motor protection",
      },
      {
        src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
        alt: "Travel safety",
      },
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        alt: "Comprehensive coverage",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        alt: "Peace of mind",
      },
    ],
  },
];
