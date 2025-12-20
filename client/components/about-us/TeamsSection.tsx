import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamCard } from "./TeamCard";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio?: string;
  email?: string;
  linkedin?: string;
};

type TeamsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  teamMembers?: TeamMember[];
};

const defaultTeamMembers: TeamMember[] = [
  {
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    imageSrc: "https://i.pravatar.cc/300?img=12",
    imageAlt: "Rajesh Kumar - CEO",
    bio: "Leading URB Insurance with over 20 years of experience in insurance, risk management, and financial protection.",
    email: "rajesh@urbinsurance.com",
    linkedin: "https://linkedin.com/in/rajesh-kumar",
  },
  {
    name: "Priya Sharma",
    role: "Chief Operating Officer",
    imageSrc: "https://i.pravatar.cc/300?img=47",
    imageAlt: "Priya Sharma - COO",
    bio: "Expert in insurance operations and customer service, ensuring seamless policy management and exceptional client experience.",
    email: "priya@urbinsurance.com",
    linkedin: "https://linkedin.com/in/priya-sharma",
  },
  {
    name: "Amit Patel",
    role: "Head of Underwriting",
    imageSrc: "https://i.pravatar.cc/300?img=33",
    imageAlt: "Amit Patel - Head of Underwriting",
    bio: "Insurance underwriting specialist with expertise in risk assessment, policy design, and coverage optimization.",
    email: "amit@urbinsurance.com",
    linkedin: "https://linkedin.com/in/amit-patel",
  },
  {
    name: "Sneha Reddy",
    role: "Head of Claims",
    imageSrc: "https://i.pravatar.cc/300?img=20",
    imageAlt: "Sneha Reddy - Head of Claims",
    bio: "Dedicated to ensuring fast, fair, and transparent claim settlements, maintaining our 98% claim approval rate.",
    email: "sneha@urbinsurance.com",
    linkedin: "https://linkedin.com/in/sneha-reddy",
  },
  {
    name: "Vikram Singh",
    role: "Head of Sales & Distribution",
    imageSrc: "https://i.pravatar.cc/300?img=51",
    imageAlt: "Vikram Singh - Head of Sales & Distribution",
    bio: "Specialist in insurance sales and distribution channels, helping customers find the right coverage solutions.",
    email: "vikram@urbinsurance.com",
    linkedin: "https://linkedin.com/in/vikram-singh",
  },
  {
    name: "Anjali Mehta",
    role: "Head of Customer Relations",
    imageSrc: "https://i.pravatar.cc/300?img=28",
    imageAlt: "Anjali Mehta - Head of Customer Relations",
    bio: "Expert in customer relationship management and service excellence, ensuring client satisfaction and retention.",
    email: "anjali@urbinsurance.com",
    linkedin: "https://linkedin.com/in/anjali-mehta",
  },
];

export function TeamsSection({
  eyebrow = "OUR TEAM",
  title = "Meet Our Expert Team",
  description = "The talented professionals behind URB Insurance, dedicated to protecting your future with comprehensive coverage and exceptional service.",
  teamMembers = defaultTeamMembers,
}: TeamsSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-20 pt-20 pb-10 text-brand-dark">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 xl:px-14">
        <div className="mb-12 sm:mb-16">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
            eyebrowClassName="text-primary"
            titleClassName="text-brand-dark"
            descriptionClassName="text-brand-dark/70 max-w-2xl mx-auto"
          />
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
