import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ROAS & Advertising Profitability Blog",
  description:
    "Guides on ROAS, break-even calculations, industry benchmarks, and advertising profitability for marketers and business owners.",
};

const posts = [
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
    title: "ROAS vs ROI: What's the Difference and Which One Should You Track?",
    description:
      "Two metrics, two different jobs. Here's when to use ROAS, when to use ROI, and how to avoid the confusion that leads to bad decisions.",
    readTime: "6 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-12 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
          Blog
        </h1>
        <p className="text-zinc-400 text-lg">
          Guides on ROAS, ad profitability, and making every dollar of ad spend
          count.
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
          >
            <div className="text-xs text-zinc-500 mb-2">{post.readTime}</div>
            <h2 className="text-lg font-semibold text-zinc-100 mb-2 leading-snug">
              {post.title}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
            >
              Read Article →
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-800">
        <p className="text-zinc-500 text-sm">
          Ready to calculate your own break-even ROAS?{" "}
          <Link
            href="/"
            className="text-amber-500 hover:text-amber-400 font-medium"
          >
            Use the free calculator →
          </Link>
        </p>
      </div>
    </div>
  );
}
