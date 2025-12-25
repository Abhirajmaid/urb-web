import Image from "next/image";
import { Icon } from "@iconify/react";

type TeamCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  className?: string;
};

export function TeamCard({
  name,
  role,
  imageSrc,
  imageAlt,
  bio,
  email,
  linkedin,
  className,
}: TeamCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-brand-gray-light/50 bg-white p-6 sm:p-8 lg:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(var(--color-dark-rgb),0.08)] min-h-[320px] sm:min-h-[350px] lg:min-h-0 ${
        className ?? ""
      }`}
    >
      {/* Subtle circular pattern in upper-right */}
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-brand-primary/5 blur-2xl" />

      {/* Profile Image */}
      <div className="relative mb-6 sm:mb-6 lg:mb-6 h-36 w-36 sm:h-40 sm:w-40 lg:h-40 lg:w-40 mx-auto overflow-hidden rounded-full border-2 border-brand-primary/20 bg-brand-secondary shadow-lg">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative space-y-4 sm:space-y-3 lg:space-y-3 text-center">
        <div>
          <h3 className="text-xl sm:text-xl lg:text-lg font-semibold text-brand-dark">
            {name}
          </h3>
          <p className="mt-2 sm:mt-1 text-base sm:text-base lg:text-sm font-medium text-brand-primary uppercase tracking-wide">
            {role}
          </p>
        </div>

        {bio && (
          <p className="text-base sm:text-base lg:text-sm leading-relaxed text-brand-dark/70">
            {bio}
          </p>
        )}

        {/* Social Links */}
        {(email || linkedin) && (
          <div className="flex items-center justify-center gap-4 sm:gap-3 lg:gap-3 pt-3 sm:pt-2 lg:pt-2">
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
                className="flex h-10 w-10 sm:h-9 sm:w-9 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                <Icon icon="mdi:email" className="text-xl sm:text-lg lg:text-lg" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
                className="flex h-10 w-10 sm:h-9 sm:w-9 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                <Icon icon="mdi:linkedin" className="text-xl sm:text-lg lg:text-lg" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}


