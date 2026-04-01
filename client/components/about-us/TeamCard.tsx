import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio?: string;
  badge?: string;
  variant?: "founding" | "team";
  className?: string;
};

export function TeamCard({
  name,
  role,
  imageSrc,
  imageAlt,
  bio,
  badge,
  variant = "team",
  className,
}: TeamCardProps) {
  const isFounding = variant === "founding";
  const cardBaseClasses =
    "group relative overflow-hidden rounded-xl sm:rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(var(--color-dark-rgb),0.08)]";
  const cardVariantClasses = isFounding
    ? "border-[#d7b26b]/50 bg-[#2a1010] p-6 sm:p-8 min-h-[430px]"
    : "border-brand-gray-light/50 bg-white p-6 sm:p-7 min-h-[280px]";

  return (
    <article
      className={`${cardBaseClasses} ${cardVariantClasses} ${className ?? ""}`}
    >
      <div
        className={`absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full blur-2xl ${
          isFounding ? "bg-[#d7b26b]/20" : "bg-brand-primary/5"
        }`}
      />

      <div
        className={`relative mx-auto mb-5 overflow-hidden rounded-full bg-brand-secondary shadow-lg ${
          isFounding
            ? "h-32 w-32 border-4 border-[#d7b26b] sm:h-40 sm:w-40"
            : "h-32 w-32 border-2 border-brand-primary/20"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="relative space-y-3 text-center">
        <div>
          <h3
            className={`font-semibold ${
              isFounding ? "text-2xl !text-white" : "text-xl text-brand-dark"
            }`}
          >
            {name}
          </h3>
          <p
            className={`mt-2 font-medium tracking-wide ${
              isFounding
                ? "text-sm uppercase !text-[#f2ddae]"
                : "text-sm uppercase text-brand-primary"
            }`}
          >
            {role}
          </p>
        </div>

        {isFounding && badge && (
          <div className="inline-flex rounded-full border border-[#d7b26b]/60 bg-[#d7b26b]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide !text-[#f7e6bd]">
            {badge}
          </div>
        )}

        {bio && (
          <p
            className={`leading-relaxed ${
              isFounding ? "text-sm !text-white/85" : "text-sm text-brand-dark/70"
            }`}
          >
            {bio}
          </p>
        )}
      </div>
    </article>
  );
}


