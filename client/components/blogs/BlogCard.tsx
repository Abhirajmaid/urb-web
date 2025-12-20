import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

type BlogCardProps = {
  href: string;
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
};

export function BlogCard({
  href,
  title,
  date,
  excerpt,
  imageSrc,
  imageAlt,
  tag = "Feature blog",
}: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col gap-4 rounded-2xl bg-[#3b1d1c] text-white transition hover:-translate-y-1 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[#3b1d1c]">
          {tag}
        </span>
      </div>
      <div className="flex flex-col gap-3 px-4 pb-4">
        <time className="text-xs uppercase tracking-[0.12em] text-white/70">
          {date}
        </time>
        <h3 className="text-lg font-semibold leading-snug text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/80 line-clamp-2">{excerpt}</p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 px-4 pb-4 text-sm font-medium text-white transition hover:gap-3"
      >
        Read more
        <Icon 
          icon="solar:arrow-right-up-bold" 
          className="text-sm"
          style={{ transform: 'rotate(45deg)' }}
        />
      </Link>
    </article>
  );
}

