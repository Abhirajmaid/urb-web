"use client";

export {
  organizationSchema,
  websiteSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  createServiceSchema,
  createReviewSchema,
} from "@/lib/jsonLdSchemas";

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
