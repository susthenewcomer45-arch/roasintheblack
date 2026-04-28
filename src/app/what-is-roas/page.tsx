import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";

export const metadata: Metadata = {
  title: "What Is ROAS? Return on Ad Spend Explained",
  description:
    "ROAS (Return on Ad Spend) measures how much revenue your ads generate per dollar spent. Learn how to calculate it, benchmark it, and use it to make better ad spend decisions.",
};

export default function WhatIsROASPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <AdSlot slot="what-is-roas-top" className="h-24 sm:h-20 mb-10" />

      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            What Is ROAS? Return on Ad Spend Explained
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            ROAS is the fundamental metric for measuring paid advertising
            efficiency. Here&apos;s everything you need to know — from the basic
            formula to common pitfalls that distort the number.
          </p>
        </header>

        <div className="border-t border-zinc-800 pt-6 space-y-5 text-zinc-400 leading-relaxed">
          <h2 className="text-xl font-semibold text-zinc-200">
            The ROAS Definition
          </h2>
          <p>
            Return on Ad Spend (ROAS) is a marketing metric that measures the
            revenue generated for every dollar spent on advertising. The formula
            is straightforward:
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 my-4">
            <p className="text-center text-zinc-200 font-mono text-lg">
              ROAS = Revenue from Ads ÷ Ad Spend
            </p>
            <p className="text-center text-zinc-500 text-sm mt-2">
              Example: $15,000 revenue ÷ $5,000 ad spend = <strong className="text-amber-500">3x ROAS</strong>
            </p>
          </div>

          <p>
            A 3x ROAS means you earned $3 in revenue for every $1 spent on
            advertising. A 1x ROAS means you broke even on spend alone (before
            accounting for any product costs). Anything below 1x means your ads
            are spending more than they&apos;re bringing in — a guaranteed way to
            drain your budget.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            ROAS vs. ROI: What&apos;s the Difference?
          </h2>
          <p>
            ROAS and ROI (Return on Investment) are frequently confused, but they
            measure different things. ROAS only divides revenue by ad spend —
            it doesn&apos;t account for any other costs. ROI, by contrast, factors in
            the full cost of running the business: cost of goods, fulfillment,
            overhead, and ad spend combined.
          </p>
          <p>
            A campaign with a 4x ROAS might still lose money if your product
            margins are thin. A company selling $50 items with $45 in variable
            costs per unit needs a much higher ROAS to be profitable than a
            software company with near-zero variable costs. This is exactly why
            understanding your{" "}
            <Link
              href="/break-even-roas-formula"
              className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
            >
              break-even ROAS
            </Link>{" "}
            is essential before evaluating any campaign result.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            How Platforms Report ROAS
          </h2>
          <p>
            Every major ad platform — Google Ads, Meta Ads Manager, TikTok Ads,
            Microsoft Advertising — reports ROAS natively. In Google Ads it&apos;s
            labeled &quot;Conv. value / cost.&quot; In Meta, it appears as &quot;Purchase
            ROAS.&quot; The underlying math is identical; only the attribution
            windows and conversion counting methods differ.
          </p>
          <p>
            Attribution is where reported ROAS gets unreliable. A 7-day click,
            1-day view attribution window on Meta will always produce higher
            reported ROAS than a 1-day click window — not because your ads are
            performing better, but because you&apos;re crediting more conversions to
            the platform. Always compare ROAS figures using the same attribution
            settings to avoid misleading yourself.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            What Is a &quot;Good&quot; ROAS?
          </h2>
          <p>
            There is no universal &quot;good&quot; ROAS. The right ROAS depends entirely
            on your cost structure. A dropshipper with 70% COGS needs a minimum
            4x–5x ROAS just to break even on ad spend. A DTC brand with 40%
            COGS might be profitable at 2x. A SaaS company with 10% variable
            costs might be wildly profitable at 1.5x.
          </p>
          <p>
            Industry benchmarks (e.g., &quot;4x is the standard for ecommerce&quot;) are
            dangerous shortcuts. Use our{" "}
            <Link
              href="/"
              className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
            >
              break-even ROAS calculator
            </Link>{" "}
            to find your specific number based on your actual margins.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            ROAS as a Bidding Strategy
          </h2>
          <p>
            Both Google and Meta allow you to set a Target ROAS (tROAS) as your
            bidding strategy. When you input a tROAS, the platform&apos;s algorithm
            automatically adjusts bids to hit that revenue-per-spend ratio
            across your campaigns. This is one of the most powerful tools
            available to performance marketers — but only if you set the right
            target.
          </p>
          <p>
            Set tROAS too high and the algorithm becomes overly conservative,
            limiting spend to only the highest-intent users and starving your
            campaigns of scale. Set it too low and you&apos;ll scale profitably on
            paper but lose money on every sale. The sweet spot is a tROAS that
            sits comfortably above your break-even threshold while leaving room
            for the algorithm to find volume.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            Common ROAS Mistakes to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>
              <strong className="text-zinc-300">Ignoring blended ROAS.</strong>{" "}
              Platform-reported ROAS only counts ad-attributed revenue. Blended
              ROAS (total revenue ÷ total ad spend) gives you the true picture
              of advertising efficiency across all channels.
            </li>
            <li>
              <strong className="text-zinc-300">
                Optimizing ROAS without knowing break-even.
              </strong>{" "}
              Chasing a 5x ROAS target without knowing your break-even is 2.5x
              means leaving profitable volume on the table.
            </li>
            <li>
              <strong className="text-zinc-300">
                Conflating new customer ROAS with retention ROAS.
              </strong>{" "}
              Acquiring new customers almost always carries a lower ROAS than
              remarketing to existing buyers. Blending these distorts your
              picture of customer acquisition efficiency.
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              Ready to calculate your break-even ROAS?{" "}
              <Link
                href="/"
                className="text-amber-500 hover:text-amber-400 font-medium"
              >
                Use the free calculator →
              </Link>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
