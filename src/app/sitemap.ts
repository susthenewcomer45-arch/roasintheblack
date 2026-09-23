import { MetadataRoute } from "next";
import generatedPostsRaw from "@/lib/generated-posts.json";

interface GeneratedPost {
  slug: string;
  date: string;
}

interface EditorialPost {
  slug: string;
  date: string;
}

const generatedPosts = generatedPostsRaw as GeneratedPost[];

// Editorial posts are hand-written and hardcoded in src/app/blog/page.tsx —
// keep this list in sync with the `editorialPosts` array there.
const editorialPosts: EditorialPost[] = [
  { slug: "what-is-roas", date: "2026-04-28" },
  { slug: "break-even-roas-formula", date: "2026-04-28" },
  { slug: "good-roas-by-industry", date: "2026-04-28" },
  { slug: "roas-vs-roi", date: "2026-04-28" },
];

const benchmarkSlugs = [
  "ecommerce",
  "saas",
  "lead-generation",
  "local-services",
  "dropshipping",
  "subscription-boxes",
  "amazon-fba",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roasintheblack.com";

  const blogPostUrls = [...generatedPosts, ...editorialPosts].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const benchmarkUrls = benchmarkSlugs.map((slug) => ({
    url: `${baseUrl}/benchmarks/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/what-is-roas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/break-even-roas-formula`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...benchmarkUrls,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogPostUrls,
  ];
}
