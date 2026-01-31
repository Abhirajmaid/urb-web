import { BlogCard } from "./BlogCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { blogs } from "@/data/blogs";

export function BlogsSection() {
  return (
    <section
      id="blogs-grid"
      className="relative isolate overflow-hidden bg-[#f4f0ee] px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 text-brand-dark"
    >
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] min-h-[800px] sm:min-h-[900px] lg:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-10 xl:px-14 lg:py-20">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <SectionHeader
              eyebrow="BLOG AND ARTICLE"
              title="Latest Articles"
              description="Explore our insights on insurance, coverage options, risk management, and financial protection strategies"
              eyebrowClassName="text-brand-primary"
              titleClassName="text-brand-dark"
              descriptionClassName="text-brand-dark/70"
            />
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug || blog.href} {...blog} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

