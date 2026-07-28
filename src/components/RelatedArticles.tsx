import Link from "next/link";
import generatedPostsRaw from "@/lib/generated-posts.json";

interface Post {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  date?: string;
}

const generatedPosts = generatedPostsRaw as Post[];

// Mirrors the hand-written editorial posts in src/app/blog/page.tsx
const editorialPosts: Post[] = [
  {
    slug: "what-is-roas",
    title: "What Is ROAS? A Plain English Guide for Business Owners",
    description:
      "ROAS explained without jargon — what it measures, how to read it, and the mistakes that silently drain ad budgets every day.",
    readTime: "8 min read",
  },
  {
    slug: "break-even-roas-formula",
    title: "The Break-Even ROAS Formula: How to Calculate It and Why It Saves Money",
    description:
      "Step-by-step formula with real examples. Know the exact ROAS your campaigns must hit before you spend another dollar.",
    readTime: "7 min read",
  },
  {
    slug: "good-roas-by-industry",
    title: "What Is a Good ROAS? Industry Benchmarks for 2026",
    description:
      "Ecommerce, lead gen, SaaS, and local business ROAS benchmarks — plus why a “good” ROAS is always relative to your margins.",
    readTime: "7 min read",
  },
  {
    slug: "roas-vs-roi",
    title: "ROAS vs ROI: What’s the Difference and Which One Should You Track?",
    description:
      "Two metrics, two different jobs. Here’s when to use ROAS, when to use ROI, and how to avoid the confusion that leads to bad decisions.",
    readTime: "6 min read",
  },
];

const allPosts: Post[] = [...generatedPosts, ...editorialPosts];

function pickRelated(currentSlug: string, count: number): Post[] {
  const candidates = allPosts.filter((post) => post.slug !== currentSlug);
  const shuffled = [...candidates];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = pickRelated(currentSlug, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 pt-8 border-t border-zinc-800">
      <h2 className="text-xl font-semibold text-zinc-100 mb-4">
        Related Articles
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors flex flex-col"
          >
            <div className="text-xs text-zinc-500 mb-2">{post.readTime}</div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-2 leading-snug">
              {post.title}
            </h3>
            <span className="mt-auto text-xs font-medium text-amber-500">
              Read Article →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
