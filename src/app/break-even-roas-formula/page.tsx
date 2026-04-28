import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";

export const metadata: Metadata = {
  title: "Break-Even ROAS Formula: How to Calculate It (With Examples)",
  description:
    "Learn the exact break-even ROAS formula, see step-by-step worked examples for different business models, and discover how to use this number to set profitable ad targets.",
};

export default function BreakEvenFormulaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <AdSlot slot="break-even-formula-top" className="h-24 sm:h-20 mb-10" />

      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            Formula Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            Break-Even ROAS Formula: How to Calculate It
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            The break-even ROAS formula tells you the exact return on ad spend
            required to cover all variable costs. Here&apos;s how to calculate it
            and apply it to real campaign decisions.
          </p>
        </header>

        <div className="border-t border-zinc-800 pt-6 space-y-5 text-zinc-400 leading-relaxed">
          <h2 className="text-xl font-semibold text-zinc-200">
            The Formula
          </h2>
          <p>
            Break-even ROAS is derived by finding the point where your
            advertising revenue exactly covers all variable costs — leaving zero
            profit but also zero loss. Starting from the definition of profit:
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3 font-mono text-sm">
            <p className="text-zinc-400">Profit = Revenue − Variable Costs − Ad Spend</p>
            <p className="text-zinc-400">At break-even, Profit = 0</p>
            <p className="text-zinc-400">Revenue = Ad Spend × ROAS</p>
            <p className="text-zinc-300 border-t border-zinc-800 pt-3">
              Break-Even ROAS = 1 ÷ (1 − Total Variable Cost %)
            </p>
            <p className="text-zinc-500 text-xs">
              Equivalently: 1 ÷ Gross Margin (as a decimal)
            </p>
          </div>

          <p>
            &quot;Total Variable Cost %&quot; is the sum of all costs that scale with each
            transaction, expressed as a percentage of revenue. This typically
            includes cost of goods sold (COGS), shipping and fulfillment costs,
            payment processing fees, and any variable platform or transaction
            fees.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            Step-by-Step Worked Examples
          </h2>

          <h3 className="text-base font-semibold text-zinc-300">
            Example 1: Ecommerce Brand (Moderate Margins)
          </h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2 text-sm">
            <div className="flex justify-between text-zinc-400">
              <span>Product cost (COGS)</span>
              <span className="font-mono">38%</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Fulfillment &amp; shipping</span>
              <span className="font-mono">10%</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Payment processing</span>
              <span className="font-mono">3%</span>
            </div>
            <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-800 pt-2">
              <span>Total variable costs</span>
              <span className="font-mono">51%</span>
            </div>
            <div className="flex justify-between text-amber-500 font-semibold border-t border-zinc-800 pt-2">
              <span>Break-Even ROAS</span>
              <span className="font-mono">1 ÷ 0.49 = 2.04x</span>
            </div>
          </div>
          <p>
            This brand needs to generate $2.04 in revenue for every $1 of ad
            spend just to cover costs. Any ROAS above 2.04x is profitable; below
            that, each ad dollar is a net loss.
          </p>

          <h3 className="text-base font-semibold text-zinc-300 mt-4">
            Example 2: Dropshipper (Thin Margins)
          </h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-2 text-sm">
            <div className="flex justify-between text-zinc-400">
              <span>Product cost (COGS)</span>
              <span className="font-mono">65%</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Fulfillment &amp; shipping</span>
              <span className="font-mono">12%</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Returns &amp; chargebacks</span>
              <span className="font-mono">4%</span>
            </div>
            <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-800 pt-2">
              <span>Total variable costs</span>
              <span className="font-mono">81%</span>
            </div>
            <div className="flex justify-between text-amber-500 font-semibold border-t border-zinc-800 pt-2">
              <span>Break-Even ROAS</span>
              <span className="font-mono">1 ÷ 0.19 = 5.26x</span>
            </div>
          </div>
          <p>
            Thin-margin dropshippers face a brutal ROAS requirement. A 5.26x
            break-even ROAS is genuinely hard to sustain at scale. This
            illustrates why business model and margin structure matter far more
            than platform optimization tricks.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            From Break-Even to Target ROAS
          </h2>
          <p>
            Break-even ROAS is the floor, not the target. Once you know it, add
            your desired profit margin to arrive at a true Target ROAS (tROAS)
            for bidding:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 font-mono text-sm space-y-2">
            <p className="text-zinc-400">
              Target ROAS = 1 ÷ (Gross Margin − Desired Profit Margin)
            </p>
            <p className="text-zinc-500 text-xs">
              Example: 49% gross margin, 15% profit target → 1 ÷ 0.34 = 2.94x
              tROAS
            </p>
          </div>
          <p>
            Submit this tROAS to Google or Meta and the algorithm will
            automatically optimize bids to hit that efficiency target, only
            entering auctions where the predicted conversion value justifies the
            cost.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-6">
            What the Formula Doesn&apos;t Include
          </h2>
          <p>
            The break-even ROAS formula covers variable costs only — the costs
            that change with each unit sold. It does not include fixed overhead
            like salaries, software subscriptions, warehouse rent, or creative
            production costs. Those are real costs that reduce overall business
            profitability, but they&apos;re not tied to individual transactions.
          </p>
          <p>
            For a full-picture profitability analysis, you&apos;d need to factor in
            fixed costs against your total contribution margin. But for the
            purpose of setting ad spend targets and evaluating campaign
            performance, the variable-cost break-even ROAS is the right tool for
            the job.
          </p>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-6">
            <p className="text-zinc-500 text-sm">
              Calculate your own break-even ROAS:{" "}
              <Link
                href="/"
                className="text-amber-500 hover:text-amber-400 font-medium"
              >
                Free Calculator →
              </Link>
            </p>
            <p className="text-zinc-500 text-sm">
              New to ROAS?{" "}
              <Link
                href="/what-is-roas"
                className="text-amber-500 hover:text-amber-400 font-medium"
              >
                Start with the basics →
              </Link>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
