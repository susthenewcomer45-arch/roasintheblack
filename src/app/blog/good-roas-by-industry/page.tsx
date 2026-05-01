import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "What Is a Good ROAS? Industry Benchmarks for 2026",
  description:
    "Ecommerce, lead gen, SaaS, and local business ROAS benchmarks for 2026 — plus why a 'good' ROAS is always relative to your margins, not an industry average.",
};

export default function GoodROASByIndustryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <Link href="/blog" className="hover:text-zinc-400 transition-colors">
              Blog
            </Link>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            What Is a Good ROAS? Industry Benchmarks for 2026
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Everyone wants to know if their ROAS is good. The honest answer: it
            depends on your margins, not your industry. Here are the benchmarks —
            and why they can be misleading.
          </p>
        </header>

        <AdSlot slot="blog-good-roas-industry" className="h-24 sm:h-20" />

        <div className="border-t border-zinc-800 pt-6 space-y-5 text-zinc-400 leading-relaxed">
          <h2 className="text-xl font-semibold text-zinc-200">
            Why &quot;Good&quot; ROAS Is Relative
          </h2>
          <p>
            Before diving into benchmarks, the most important thing to understand:
            a &quot;good&quot; ROAS for your business is one that&apos;s above your break-even
            point. A 3x ROAS might be excellent for a high-margin digital product
            and catastrophic for a thin-margin dropshipper. Industry averages are
            directionally useful but cannot tell you if your specific business is
            profitable.
          </p>
          <p>
            Always calculate your own break-even ROAS first using our{" "}
            <Link href="/" className="text-amber-500 hover:text-amber-400 underline underline-offset-4">
              free calculator
            </Link>
            . Then use industry benchmarks only to sanity-check whether your
            campaigns are competitive, not whether they&apos;re profitable.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Ecommerce ROAS Benchmarks (2026)
          </h2>
          <p>
            Ecommerce is the most ROAS-obsessed vertical, with benchmarks varying
            significantly by category, margin structure, and channel.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-zinc-800 px-5 py-3 text-xs font-medium text-zinc-300 uppercase tracking-wide">
              <span>Category</span>
              <span className="text-center">Avg. ROAS</span>
              <span className="text-right">Typical Margins</span>
            </div>
            {[
              ["Apparel & Fashion", "3x – 5x", "40–60%"],
              ["Home & Garden", "4x – 7x", "35–55%"],
              ["Electronics", "5x – 10x", "10–25%"],
              ["Beauty & Personal Care", "3x – 6x", "50–70%"],
              ["Sports & Outdoors", "4x – 6x", "35–50%"],
              ["Food & Beverage (DTC)", "2x – 4x", "30–50%"],
            ].map(([cat, roas, margin]) => (
              <div key={cat} className="grid grid-cols-3 px-5 py-3 border-t border-zinc-800 text-sm">
                <span className="text-zinc-300">{cat}</span>
                <span className="text-center text-amber-500 font-mono">{roas}</span>
                <span className="text-right text-zinc-500">{margin}</span>
              </div>
            ))}
          </div>
          <p>
            Notice that electronics has the highest average ROAS benchmarks —
            but also the thinnest margins. A 6x ROAS on a product with 15%
            gross margin means you&apos;re still losing money relative to that margin.
            Higher-ROAS industries often have that requirement precisely because
            their margins demand it.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Lead Generation ROAS Benchmarks
          </h2>
          <p>
            Lead gen ROAS is trickier because &quot;revenue&quot; is often lifetime
            customer value, not a one-time transaction. Many lead gen advertisers
            use Cost Per Lead (CPL) or Cost Per Acquisition (CPA) instead of ROAS,
            but for those who do track it:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Home services (plumbing, HVAC, roofing):</strong> 5x – 15x — high job values, competitive CPCs</li>
            <li><strong className="text-zinc-300">Legal services:</strong> 4x – 12x — high LTV offsets expensive clicks</li>
            <li><strong className="text-zinc-300">Financial services:</strong> 3x – 8x — high compliance costs compress margins</li>
            <li><strong className="text-zinc-300">Healthcare / med spa:</strong> 4x – 10x — repeat visits drive LTV</li>
            <li><strong className="text-zinc-300">Real estate:</strong> 3x – 6x — long conversion cycles make attribution difficult</li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            SaaS ROAS Benchmarks
          </h2>
          <p>
            SaaS companies often run paid ads at a deliberate loss in year one,
            banking on lifetime customer value (LTV) to justify the spend. If you
            retain customers for 24 months at $100/month, a $500 acquisition cost
            is profitable even with a sub-1x initial ROAS.
          </p>
          <p>
            When SaaS companies do target positive ROAS, benchmarks typically look like:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">SMB SaaS (monthly plans):</strong> 2x – 4x based on first-year revenue</li>
            <li><strong className="text-zinc-300">Enterprise SaaS:</strong> 1x – 3x, with LTV justifying extended payback periods</li>
            <li><strong className="text-zinc-300">Self-serve / product-led:</strong> 3x – 6x, lower CAC offsets shorter sales cycles</li>
          </ul>
          <p>
            For SaaS, the more relevant calculation is LTV:CAC ratio rather than
            ROAS — but break-even ROAS on the initial contract value is still a
            useful guardrail.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Local Business ROAS Benchmarks
          </h2>
          <p>
            Local businesses advertising on Google Search or Meta often have high
            margins on services but face high CPCs in competitive markets. Typical
            ROAS targets:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li><strong className="text-zinc-300">Restaurants:</strong> 3x – 6x (high frequency, lower ticket size)</li>
            <li><strong className="text-zinc-300">Salons &amp; spas:</strong> 4x – 8x (repeat bookings compound value)</li>
            <li><strong className="text-zinc-300">Auto repair:</strong> 5x – 12x (high job value, strong urgency)</li>
            <li><strong className="text-zinc-300">Dental &amp; medical:</strong> 4x – 10x (long patient LTV)</li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            The Only Benchmark That Really Matters
          </h2>
          <p>
            Industry benchmarks are a starting point, not a strategy. A competitor
            hitting 4x ROAS may have lower costs than you, a higher AOV, a better
            return rate, or more efficient fulfillment. Their break-even is
            different from yours.
          </p>
          <p>
            The only ROAS benchmark that matters for your business is your own
            break-even point. Calculate it, set your target 20–50% above it, and
            use industry data only to identify when something is dramatically out
            of line — not to judge whether you&apos;re profitable.
          </p>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-6">
            <Link href="/" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              Find your break-even ROAS →
            </Link>
            <Link href="/blog/roas-vs-roi" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              ROAS vs ROI: which to track? →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
