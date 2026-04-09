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
      "Secured life insurance, health coverage, and home insurance for their entire family. When a medical emergency arose, URB's quick claim settlement provided financial relief within 48 hours. They now enjoy complete peace of mind knowing their future is protected. A dedicated advisor walks them through renewals each year so coverage stays aligned with life changes, from a new home to growing children.",
    projectLocation: "Mumbai",
    category: "Family",
    images: [
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        alt: "Family protection",
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
      "A family-owned jewellery business needed comprehensive coverage for their inventory worth crores. URB designed a tailored jewellery insurance plan covering theft, loss, and damage. When a burglary occurred, the claim was settled promptly with full transparency. Regular valuations and stock documentation were built into the policy rhythm so sum insured always reflected real exposure during peak festival seasons.",
    projectLocation: "Delhi",
    category: "Jewellery",
    images: [
      {
        src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        alt: "Jewellery protection",
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
      "A growing IT company needed group health, liability, and property insurance for 150+ employees. URB provided a bundled solution that reduced costs by 20% while ensuring comprehensive coverage. Their employees now benefit from cashless hospitalization and family floater plans. HR receives a single dashboard-style renewal pack each year, cutting admin time and keeping new joiners onboarded without coverage gaps.",
    projectLocation: "Bangalore",
    category: "Corporate",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        alt: "Corporate office",
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
      "After a minor car accident, Priya appreciated URB's hassle-free motor claim process. She later added travel insurance for her family's international trip—when luggage was delayed, URB reimbursed essential purchases within 5 days. She recommends URB to everyone. Today her motor and travel policies sit on one renewal timeline with clear WhatsApp updates, so she never misses a deadline.",
    projectLocation: "Pune",
    category: "Motor & Travel",
    images: [
      {
        src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
        alt: "Motor protection",
      },
    ],
  },
  {
    clientLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    clientLogoAlt: "SME business client",
    clientName: "Heritage Textiles Collective",
    projectTitle: "SME Group Health & Property Bundle",
    description:
      "A cooperative of mid-size manufacturers needed affordable group health for staff plus fire and stock cover for shared warehousing. URB structured a single renewal calendar, aligned sum insured with inventory audits, and delivered a cashless hospital network their teams actually use. Members share one point of contact for claims, so disputes at the warehouse gate do not stall production schedules.",
    projectLocation: "Ahmedabad",
    category: "SME",
    images: [
      {
        src: "/images/texttile.jpg",
        alt: "Textile production setup for Heritage Textiles Collective",
      },
    ],
  },
  {
    clientLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80",
    clientLogoAlt: "Medical professional client",
    clientName: "Dr. Meera Iyer",
    projectTitle: "Clinic Liability & Equipment Cover",
    description:
      "An independent physician required professional indemnity, equipment breakdown protection, and cyber safeguards for patient records. URB bundled coverage with clear claim playbooks so the clinic could focus on care—not paperwork—when equipment failed during peak hours. Staff were trained on first-step reporting for cyber incidents, reducing downtime and protecting patient trust.",
    projectLocation: "Chennai",
    category: "Professional",
    images: [
      {
        src: "/images/doc.jpg",
        alt: "Doctor with stethoscope representing Dr. Meera Iyer",
      },
    ],
  },
];
