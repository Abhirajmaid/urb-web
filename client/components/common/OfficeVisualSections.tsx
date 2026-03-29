import Image from "next/image";
import { Icon } from "@iconify/react";
import { SectionHeader } from "@/components/common/SectionHeader";

type WorkspaceSplitSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** When true, image appears on the left on large screens */
  imageLeft?: boolean;
  bullets?: string[];
};

export function WorkspaceSplitSection({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft = false,
  bullets,
}: WorkspaceSplitSectionProps) {
  const imageBlock = (
    <div className="relative min-h-[240px] overflow-hidden rounded-2xl sm:min-h-[300px] lg:min-h-[360px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent"
        aria-hidden
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        eyebrowClassName="text-primary"
        titleClassName="text-brand-dark"
        descriptionClassName="text-brand-dark/70"
      />
      {bullets && bullets.length > 0 ? (
        <ul className="mt-6 space-y-3 text-sm text-brand-dark/80 sm:text-base">
          {bullets.map((line) => (
            <li key={line} className="flex gap-3">
              <Icon
                icon="mdi:check-circle-outline"
                className="mt-0.5 size-5 shrink-0 text-brand-primary"
                aria-hidden
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#e8ddda] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />
          <div className="relative z-10 grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10 lg:py-10 xl:px-14">
            {imageLeft ? (
              <>
                {imageBlock}
                {textBlock}
              </>
            ) : (
              <>
                {textBlock}
                {imageBlock}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type GalleryItem = { src: string; alt: string };

type OfficeGallerySectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: [GalleryItem, GalleryItem, GalleryItem];
};

export function OfficeGallerySection({
  eyebrow,
  title,
  description,
  images,
}: OfficeGallerySectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-8 text-center">
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
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e8ddda] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ClientExperienceStripProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: [GalleryItem, GalleryItem];
};

export function ClientExperienceStrip({
  eyebrow,
  title,
  description,
  images,
}: ClientExperienceStripProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 sm:px-6 lg:px-20 py-8 sm:py-10 lg:py-12 text-brand-dark">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              eyebrowClassName="text-primary"
              titleClassName="text-brand-dark"
              descriptionClassName="text-brand-dark/70"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#e8ddda] shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 40vw"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
