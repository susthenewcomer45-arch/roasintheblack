import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "ROAS vs ROI: What's the Difference and Which One Should You Track?",
  description:
    "ROAS and ROI measure different things and answer different questions. Here's when to use each, why confusing them leads to bad decisions, and how they work together.",
};

export default function ROASvsROIPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <Link href="/blog" className="hover:text-zinc-400 transition-colors">
              Blog
            </Link>
            <span>·</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            ROAS vs ROI: What&apos;s the Difference and Which One Should You Track?
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Both metrics measure advertising effectiveness, but they answer
            different questions. Using the wrong one leads to decisions that look
            right on paper and fail in practice.
          </p>
        </header>

        <AdSlot slot="blog-roas-vs-roi" className="h-24 sm:h-20" />

        <div className="border-t border-zinc-800 pt-6 space-y-5 text-zinc-400 leading-relaxed">
          <h2 className="text-xl font-semibold text-zinc-200">
            The Core Difference
          </h2>
          <p>
            ROAS and ROI are often used interchangeably, but they measure
            fundamentally different things. ROAS measures the revenue efficiency
            of your ad spend. ROI measures the profit efficiency of your total
            investment. The distinction matters enormously when making budget
            decisions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="text-amber-500 font-semibold mb-3">ROAS</div>
              <p className="text-zinc-300 font-mono text-sm mb-3">Revenue ÷ Ad Spend</p>
              <ul className="text-zinc-500 text-sm space-y-1.5">
                <li>• Measures revenue per ad dollar</li>
                <li>• Ignores product costs</li>
                <li>• Used by media buyers &amp; platforms</li>
                <li>• Answers: &quot;How much did ads generate?&quot;</li>
              </ul>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="text-green-400 font-semibold mb-3">ROI</div>
              <p className="text-zinc-300 font-mono text-sm mb-3">(Profit − Investment) ÷ Investment</p>
              <ul className="text-zinc-500 text-sm space-y-1.5">
                <li>• Measures profit per dollar invested</li>
                <li>• Includes all costs</li>
                <li>• Used by finance &amp; leadership</li>
                <li>• Answers: &quot;Did we make money?&quot;</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            A Clear Example: Same Campaign, Different Metrics
          </h2>
          <p>
            Say you spend $3,000 on ads. Those ads drive $12,000 in revenue.
            Your products cost $7,000 total to source, fulfill, and deliver.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-3">
            <div className="flex justify-between text-zinc-400"><span>Ad Spend</span><span className="font-mono">$3,000</span></div>
            <div className="flex justify-between text-zinc-400"><span>Revenue</span><span className="font-mono">$12,000</span></div>
            <div className="flex justify-between text-zinc-400"><span>Variable Costs (COGS + fulfillment)</span><span className="font-mono">$7,000</span></div>
            <div className="flex justify-between text-zinc-400 border-t border-zinc-700 pt-3"><span>Profit</span><span className="font-mono">$2,000</span></div>
            <div className="border-t border-zinc-700 pt-3 space-y-2">
              <div className="flex justify-between text-zinc-200 font-medium">
                <span>ROAS</span>
                <span className="font-mono text-amber-500">4x ($12,000 ÷ $3,000)</span>
              </div>
              <div className="flex justify-between text-zinc-200 font-medium">
                <span>ROI</span>
                <span className="font-mono text-green-400">67% ($2,000 ÷ $3,000)</span>
              </div>
            </div>
          </div>
          <p>
            ROAS says you generated $4 per ad dollar. ROI says you made 67 cents
            of profit per dollar invested in ads. Both are correct — they&apos;re just
            measuring different things. The ROAS is the ad efficiency metric; ROI
            is the actual profitability verdict.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Where Each Metric Belongs
          </h2>
          <p>
            <strong className="text-zinc-300">Use ROAS</strong> for day-to-day
            campaign management. It&apos;s fast, platform-native, and easy to compare
            across campaigns. Use it to identify which ad groups, audiences, and
            creatives are generating the most revenue per dollar spent — and to
            set tROAS targets in Google and Meta.
          </p>
          <p>
            <strong className="text-zinc-300">Use ROI</strong> for strategic
            budget decisions. When you&apos;re deciding whether to increase overall ad
            budget, compare advertising to other investment options (hiring,
            inventory, product development), or report results to investors or
            leadership, ROI gives the full picture.
          </p>
          <p>
            The mistake most advertisers make is using ROAS as a proxy for
            profitability. It isn&apos;t. A high ROAS campaign on a low-margin product
            can still lose money. This is exactly why break-even ROAS exists —
            it&apos;s the bridge between ROAS (a revenue metric) and actual
            profitability (what ROI measures).
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            The Framework: Use Both Together
          </h2>
          <p>
            The most effective advertisers don&apos;t choose between ROAS and ROI —
            they use them together at different altitudes:
          </p>
          <ol className="list-none space-y-3">
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold text-sm mt-0.5">1.</span>
              <div>
                <div className="text-zinc-300 font-medium text-sm">Calculate break-even ROAS</div>
                <div className="text-zinc-500 text-sm">Derived from your variable cost structure. This becomes your daily campaign floor.</div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold text-sm mt-0.5">2.</span>
              <div>
                <div className="text-zinc-300 font-medium text-sm">Set tROAS above break-even</div>
                <div className="text-zinc-500 text-sm">Add your target profit margin to set a tROAS that ensures campaigns contribute to profit.</div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold text-sm mt-0.5">3.</span>
              <div>
                <div className="text-zinc-300 font-medium text-sm">Track ROI monthly for budget decisions</div>
                <div className="text-zinc-500 text-sm">Use total profit ÷ total ad investment to determine whether to scale spend up, down, or reallocate.</div>
              </div>
            </li>
          </ol>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            The Short Answer
          </h2>
          <p>
            Track ROAS daily to manage campaigns. Track ROI monthly to manage your
            business. Use break-even ROAS as the bridge between the two — it
            converts your cost structure into a ROAS threshold that guarantees
            every dollar of ad spend above it is actually profitable.
          </p>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-6">
            <Link href="/" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              Calculate your break-even ROAS →
            </Link>
            <Link href="/blog/what-is-roas" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              What is ROAS? Plain English guide →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
