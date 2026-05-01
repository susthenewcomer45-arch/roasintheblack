import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "The Break-Even ROAS Formula: How to Calculate It and Why It Saves Money",
  description:
    "Step-by-step break-even ROAS formula with worked examples for ecommerce, dropshipping, and service businesses. Know your floor before you spend.",
};

export default function BreakEvenFormulaRoasBlogPage() {
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
            The Break-Even ROAS Formula: How to Calculate It and Why It Saves Money
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Most businesses spending on ads don&apos;t know the one number that
            determines whether they&apos;re profitable or not. Here&apos;s the formula,
            step by step, with real examples.
          </p>
        </header>

        <AdSlot slot="blog-break-even-formula" className="h-24 sm:h-20" />

        <div className="border-t border-zinc-800 pt-6 space-y-5 text-zinc-400 leading-relaxed">
          <h2 className="text-xl font-semibold text-zinc-200">
            What Break-Even ROAS Actually Means
          </h2>
          <p>
            Break-even ROAS is the return on ad spend at which your ad revenue
            exactly covers all your variable costs — not a dollar of profit, but
            not a dollar of loss either. It&apos;s your floor. Any ROAS below it
            means every dollar you spend on ads is losing money. Any ROAS above
            it means you&apos;re contributing to profit.
          </p>
          <p>
            Knowing this number changes how you evaluate every campaign, every
            ad group, and every creative test. It removes the guesswork and
            replaces it with a binary: above the line, or below it.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            The Formula
          </h2>
          <p>
            The formula comes directly from the break-even condition: revenue
            minus all variable costs minus ad spend equals zero.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3 font-mono text-sm">
            <p className="text-zinc-400">Profit = Revenue − Variable Costs − Ad Spend</p>
            <p className="text-zinc-400">At break-even: Profit = 0</p>
            <p className="text-zinc-400">Revenue = Ad Spend × ROAS</p>
            <div className="border-t border-zinc-700 pt-3">
              <p className="text-zinc-200 font-semibold">
                Break-Even ROAS = 1 ÷ Gross Margin
              </p>
              <p className="text-zinc-500 text-xs mt-1">
                Where Gross Margin = 1 − (Total Variable Costs ÷ Revenue)
              </p>
            </div>
          </div>
          <p>
            &quot;Total variable costs&quot; means every cost that scales with each
            transaction — cost of goods, fulfillment, shipping, payment
            processing fees, return reserves. Fixed costs like salaries and
            rent are real, but they don&apos;t factor into this calculation because
            they don&apos;t change per unit sold.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Step-by-Step: Calculate Yours in 3 Steps
          </h2>
          <ol className="list-none space-y-4">
            <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="text-amber-500 font-semibold text-sm mb-2">Step 1 — Add up all variable costs as % of revenue</div>
              <p className="text-zinc-400 text-sm">
                List every cost tied to a transaction. Express each as a
                percentage of your average sale price: COGS, shipping,
                fulfillment, payment processing, estimated returns.
              </p>
            </li>
            <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="text-amber-500 font-semibold text-sm mb-2">Step 2 — Subtract from 100% to get gross margin</div>
              <p className="text-zinc-400 text-sm">
                If total variable costs = 58%, your gross margin = 42%. This
                is the portion of each revenue dollar left over before
                accounting for ad spend and fixed costs.
              </p>
            </li>
            <li className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="text-amber-500 font-semibold text-sm mb-2">Step 3 — Divide 1 by your gross margin</div>
              <p className="text-zinc-400 text-sm">
                1 ÷ 0.42 = 2.38x. That&apos;s your break-even ROAS. Every campaign
                above 2.38x contributes to profit. Every campaign below it
                is a guaranteed loss.
              </p>
            </li>
          </ol>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Three Real-World Examples
          </h2>

          <h3 className="text-base font-semibold text-zinc-300">Example 1: Mid-Margin Ecommerce Brand</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
            <div className="flex justify-between text-zinc-400"><span>COGS</span><span className="font-mono">42%</span></div>
            <div className="flex justify-between text-zinc-400"><span>Shipping &amp; fulfillment</span><span className="font-mono">9%</span></div>
            <div className="flex justify-between text-zinc-400"><span>Payment processing</span><span className="font-mono">3%</span></div>
            <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-700 pt-2"><span>Total variable costs</span><span className="font-mono">54%</span></div>
            <div className="flex justify-between text-zinc-300 font-medium"><span>Gross margin</span><span className="font-mono">46%</span></div>
            <div className="flex justify-between text-amber-500 font-bold border-t border-zinc-700 pt-2"><span>Break-Even ROAS</span><span className="font-mono">2.17x</span></div>
          </div>
          <p>A campaign delivering 2.5x ROAS is profitable. One delivering 1.9x is burning money.</p>

          <h3 className="text-base font-semibold text-zinc-300 mt-2">Example 2: High-Volume Dropshipper</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
            <div className="flex justify-between text-zinc-400"><span>COGS (supplier cost)</span><span className="font-mono">62%</span></div>
            <div className="flex justify-between text-zinc-400"><span>Shipping</span><span className="font-mono">11%</span></div>
            <div className="flex justify-between text-zinc-400"><span>Returns &amp; chargebacks</span><span className="font-mono">5%</span></div>
            <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-700 pt-2"><span>Total variable costs</span><span className="font-mono">78%</span></div>
            <div className="flex justify-between text-zinc-300 font-medium"><span>Gross margin</span><span className="font-mono">22%</span></div>
            <div className="flex justify-between text-amber-500 font-bold border-t border-zinc-700 pt-2"><span>Break-Even ROAS</span><span className="font-mono">4.55x</span></div>
          </div>
          <p>A ROAS of 4x — which sounds great — is actually losing money here. This is the trap thin-margin businesses fall into.</p>

          <h3 className="text-base font-semibold text-zinc-300 mt-2">Example 3: Service Business (Lead Gen)</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
            <div className="flex justify-between text-zinc-400"><span>Service delivery cost</span><span className="font-mono">25%</span></div>
            <div className="flex justify-between text-zinc-400"><span>Software &amp; tools (variable)</span><span className="font-mono">5%</span></div>
            <div className="flex justify-between text-zinc-400"><span>Payment processing</span><span className="font-mono">2%</span></div>
            <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-700 pt-2"><span>Total variable costs</span><span className="font-mono">32%</span></div>
            <div className="flex justify-between text-zinc-300 font-medium"><span>Gross margin</span><span className="font-mono">68%</span></div>
            <div className="flex justify-between text-amber-500 font-bold border-t border-zinc-700 pt-2"><span>Break-Even ROAS</span><span className="font-mono">1.47x</span></div>
          </div>
          <p>High-margin service businesses can be profitable at ROAS levels that would destroy a product business.</p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            From Break-Even to Target ROAS
          </h2>
          <p>
            Break-even is the floor. To build in a profit target, extend the
            formula:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 font-mono text-sm">
            <p className="text-zinc-200">Target ROAS = 1 ÷ (Gross Margin − Profit Target %)</p>
            <p className="text-zinc-500 text-xs mt-2">Example: 46% margin, 15% profit target → 1 ÷ 0.31 = 3.23x tROAS</p>
          </div>
          <p>
            Set this as your tROAS in Google or Meta and the algorithm will
            automatically adjust bids to hit that efficiency — entering only the
            auctions where conversion value justifies the cost.
          </p>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-6">
            <Link href="/" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              Calculate your break-even ROAS now →
            </Link>
            <Link href="/blog/good-roas-by-industry" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              Industry benchmarks for 2026 →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
