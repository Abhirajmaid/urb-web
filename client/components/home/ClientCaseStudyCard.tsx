import Image from "next/image";
import { Icon } from "@iconify/react";

type ClientCaseStudyCardProps = {
  clientLogo?: string;
  clientLogoAlt?: string;
  clientName: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  projectTitle?: string;
  projectLocation?: string;
  category?: string;
  className?: string;
};

export function ClientCaseStudyCard({
  clientName,
  description,
  images,
  projectTitle,
  projectLocation,
  category,
  className,
}: ClientCaseStudyCardProps) {
  const featuredImage = images[0];

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ${
        className ?? ""
      }`}
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#ebe2df]">
        {featuredImage && (
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        {category && (
          <span className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3b1d1c] shadow-sm backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3">
          <h3 className="text-lg font-semibold leading-tight text-[#4b2f2f]">
            {clientName}
          </h3>
          {projectTitle && (
            <p className="mt-1 text-sm font-medium text-[#8a6a6a]">
              {projectTitle}
            </p>
          )}
        </div>

        <p className="flex-1 text-sm sm:text-[15px] leading-relaxed text-[#6f5655]">
          {description}
        </p>

        {projectLocation && (
          <div className="mt-5 flex items-center gap-2 border-t border-[#e9e0dd] pt-4 text-sm text-[#6f5655]">
            <Icon icon="solar:map-point-bold" className="size-4 shrink-0 text-[#8a6a6a]" />
            <span>{projectLocation}</span>
          </div>
        )}
      </div>
    </div>
  );
}
