import type { Metadata } from "next";
import ROASCalculator from "./components/ROASCalculator";
import AdSlot from "./components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Break-Even ROAS Calculator — Free Tool for Marketers",
  description:
    "Calculate the exact break-even ROAS for your ads in seconds. Enter your COGS, fulfillment costs, and other expenses to instantly see the minimum ROAS you need to stay profitable.",
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <AdSlot slot="homepage-top" className="h-24 sm:h-20" />

      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
          Break-Even ROAS Calculator
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Find the minimum Return on Ad Spend needed to cover your costs.
          Adjust your inputs — results update instantly.
        </p>
      </section>

      <ROASCalculator />

      <section className="prose prose-invert prose-zinc max-w-none">
        <h2 className="text-xl font-semibold text-zinc-200 mb-4">
          What Is Break-Even ROAS and Why Does It Matter?
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Return on Ad Spend (ROAS) measures how much revenue you generate for
          every dollar spent on advertising. A ROAS of 3x means you earned $3
          for every $1 of ad spend. But raw ROAS numbers only tell part of the
          story — what really matters is whether your ROAS is <em>above</em>{" "}
          or <em>below</em> your break-even point.
        </p>

        <p className="text-zinc-400 leading-relaxed mt-4">
          Your <strong className="text-zinc-300">break-even ROAS</strong> is
          the exact threshold where your advertising revenue covers all your
          variable costs — including the cost of goods sold (COGS), fulfillment,
          shipping, platform fees, and any other expenses tied to each
          transaction. Below this number, every sale you drive through paid ads
          actually loses you money. Above it, you&apos;re generating real profit.
        </p>

        <p className="text-zinc-400 leading-relaxed mt-4">
          The formula is elegantly simple:{" "}
          <strong className="text-zinc-300">
            Break-Even ROAS = 1 ÷ Gross Margin
          </strong>
          . If your gross margin (revenue minus all variable costs) is 30%, your
          break-even ROAS is 1 ÷ 0.30 = <strong className="text-zinc-300">3.33x</strong>.
          Any campaign delivering below that is destroying value, even if the
          absolute ROAS looks impressive on a dashboard.
        </p>

        <p className="text-zinc-400 leading-relaxed mt-4">
          This matters most when scaling. A campaign running at 2.8x ROAS with
          a 3.33x break-even point loses more money with every additional dollar
          you pour into it. Marketers who don&apos;t know their break-even threshold
          frequently scale losing campaigns under the assumption that &quot;more spend
          equals more revenue.&quot; Technically true — but also more losses.
        </p>

        <p className="text-zinc-400 leading-relaxed mt-4">
          Knowing your break-even ROAS also reframes how you bid, how you
          evaluate creative performance, and how you set target ROAS (tROAS)
          goals in platforms like Google Ads and Meta Ads Manager. Rather than
          chasing an arbitrary benchmark, you anchor every decision to a
          financially meaningful number derived from your own cost structure.
          Add a desired profit margin on top and you have your target ROAS — the
          minimum ROAS you need to not just survive, but actually grow.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/what-is-roas"
            className="text-amber-500 hover:text-amber-400 text-sm font-medium transition-colors"
          >
            Learn more: What is ROAS? →
          </Link>
          <Link
            href="/break-even-roas-formula"
            className="text-amber-500 hover:text-amber-400 text-sm font-medium transition-colors"
          >
            Deep dive: The Break-Even ROAS Formula →
          </Link>
        </div>
      </section>

      <AdSlot slot="homepage-bottom" className="h-24 sm:h-20" />
    </div>
  );
}
