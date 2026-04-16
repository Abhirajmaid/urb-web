import Image from "next/image";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamCard } from "./TeamCard";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio?: string;
  badge?: string;
};

type TeamsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  teamMembers?: TeamMember[];
};

const foundingMembers: TeamMember[] = [
  {
    name: "Ritesh Jain",
    role: "Owner, URB Insurance",
    imageSrc: "/images/ritesh.jpeg",
    imageAlt: "Ritesh Jain",
    badge: "👑 Visionary Leader",
    bio: "The backbone of URB Insurance — a tycoon who builds businesses and shapes people. His leadership reflects power, precision, and purpose, holding the entire team together while standing strong through every challenge. Ritesh Jain defines what it means to lead from the front.",
  },
  {
    name: "Ugamraj Jain",
    role: "Founder, URB Insurance",
    imageSrc: "/images/ugamraj.jpeg",
    imageAlt: "Ugamraj Jain",
    badge: "🏛️ Founding Vision",
    bio: "The founding force behind URB Insurance with over 50 years in the industry — his vision, integrity, and client relationships built the trusted foundation and values that define us today.",
  },
  {
    name: "Bharat Punmiya",
    role: "A Pillar of Expertise at URB Insurance",
    imageSrc: "/images/bharat.jpeg",
    imageAlt: "Bharat Punmiya",
    badge: "🏛️ Core Leadership",
    bio: "A cornerstone of URB Insurance — deep industry insight and clarity in every client conversation, simplifying complex insurance into strategies clients can trust.",
  },
  {
    name: "Tanvi Ritesh Jain",
    role: "BBI Graduate | Certified Financial Planner (CFP) Specialist",
    imageSrc: "/images/ritul.jpeg",
    imageAlt: "Tanvi Ritesh Jain",
    badge: "✨ Insurance & Finance Expert",
    bio: "A certified financial planning specialist with deep insurance expertise, Tanvi brings precision and purpose to every client solution — dedicated to building secure futures with excellence.",
  },
  {
    name: "Kalpesh Chajjed",
    role: "Operations Head, URB Insurance",
    imageSrc: "/images/kalpesh.jpeg",
    imageAlt: "Kalpesh Chajjed",
    badge: "⚙️ Operations Leadership",
    bio: "As the Operations Head at URB Insurance, Kalpesh Chajjed ensures the seamless functioning of day-to-day operations. With strong leadership and an eye for detail, he plays a key role in maintaining efficiency, streamlining processes, and supporting the team’s overall performance.",
  },
  {
    name: "Ujjwal Punmiya",
    role: "Chartered Accountant & Lawyer",
    imageSrc: "/images/ujjawal.jpeg",
    imageAlt: "Ujjwal Punmiya",
    badge: "⚖️ Financial & Legal Expert",
    bio: "Chartered Accountant and Lawyer — financial rigor and legal precision for compliance, accuracy, and sound decision-making across URB Insurance.",
  },
  {
    name: "Bhavika Punmiya",
    role: "Mutual Fund Operations Head",
    imageSrc: "/images/bhavika.png",
    imageAlt: "Bhavika Punmiya",
    badge: "📈 Mutual Fund Operations",
    bio: "Bhavika Punmiya leads mutual fund operations with care, accuracy, and consistency. She helps keep investment processes smooth and well-coordinated, ensuring clients and internal teams receive timely support, reliable execution, and day-to-day operational clarity.",
  },
];

const defaultTeamMembers: TeamMember[] = [
  {
    name: "Ankita",
    role: "Motor & Miscellaneous Insurance Head",
    imageSrc: "/images/team1.jpeg",
    imageAlt: "Ankita",
  },
  {
    name: "Netra",
    role: "Claims Head",
    imageSrc: "/images/team 2.jpeg",
    imageAlt: "Netra",
  },
  {
    name: "Amar",
    role: "Marketing, Sales & Collection Executive",
    imageSrc: "/images/team1.jpeg",
    imageAlt: "Amar",
  },
  {
    name: "Sachin",
    role: "Collection Executive",
    imageSrc: "/images/team 2.jpeg",
    imageAlt: "Sachin",
  },
  {
    name: "Abhishek",
    role: "Collection Executive",
    imageSrc: "/images/team1.jpeg",
    imageAlt: "Abhishek",
  },
  {
    name: "Suvarna",
    role: "Operations Executive",
    imageSrc: "/images/team 2.jpeg",
    imageAlt: "Suvarna",
  },
  {
    name: "Ruchika",
    role: "Operations Executive",
    imageSrc: "/images/team1.jpeg",
    imageAlt: "Ruchika",
  },
  {
    name: "Tushar",
    role: "Operations Executive",
    imageSrc: "/images/team 2.jpeg",
    imageAlt: "Tushar",
  },
  {
    name: "Sonal",
    role: "Operations Executive",
    imageSrc: "/images/team1.jpeg",
    imageAlt: "Sonal",
  },
];

export function TeamsSection({
  eyebrow = "OUR TEAM",
  title = "Meet the People Behind URB",
  description = "URB Insurance is built on legacy, leadership, and a team that puts your protection first — every single day.",
  teamMembers = defaultTeamMembers,
}: TeamsSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-10 xl:px-14 lg:py-12">
        <div className="mb-6 sm:mb-8">
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

        <div className="space-y-8">
          <div>
            <p className="mb-5 text-center text-md font-semibold uppercase tracking-[0.28em] text-brand-primary">
              Founding Team
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {foundingMembers.map((member) => (
                <TeamCard key={member.name} {...member} variant="founding" />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-center text-md font-semibold uppercase tracking-[0.28em] text-brand-primary">
              Our Employees
            </p>
            <div className="mb-6 rounded-2xl border border-[#d7b26b]/40 bg-white p-3 shadow-sm sm:p-4">
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f8f5f2] sm:aspect-[16/10]">
                  <Image
                    src="/images/team1.jpeg"
                    alt="URB team image 1"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-brand-dark/15 bg-[#f8f5f2] sm:aspect-[16/10]">
                  <Image
                    src="/images/team%202.jpeg"
                    alt="URB team image 2"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teamMembers.map((member) => (
                  <article
                    key={member.name}
                    className="rounded-xl border border-brand-gray-light/60 bg-white px-4 py-3 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-brand-dark">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-brand-primary">
                      {member.role}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
