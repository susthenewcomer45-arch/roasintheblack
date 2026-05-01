import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";

export const metadata: Metadata = {
  title: "What Is ROAS? A Plain English Guide for Business Owners",
  description:
    "ROAS explained without jargon — what it measures, how to read it, and the costly mistakes that silently drain ad budgets every day.",
};

export default function WhatIsROASBlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <Link href="/blog" className="hover:text-zinc-400 transition-colors">
              Blog
            </Link>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            What Is ROAS? A Plain English Guide for Business Owners
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            If you run paid ads and don&apos;t know your ROAS, you&apos;re flying blind.
            Here&apos;s what it means, how to read it, and the mistakes that cost
            businesses thousands every month.
          </p>
        </header>

        <AdSlot slot="blog-what-is-roas" className="h-24 sm:h-20" />

        <div className="border-t border-zinc-800 pt-6 space-y-5 text-zinc-400 leading-relaxed">
          <h2 className="text-xl font-semibold text-zinc-200">
            The Simple Definition
          </h2>
          <p>
            ROAS stands for Return on Ad Spend. It&apos;s the ratio of revenue earned
            to money spent on advertising. If you spent $2,000 on ads last month
            and those ads drove $8,000 in revenue, your ROAS is 4x — you earned
            $4 for every $1 you spent.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <p className="text-center font-mono text-zinc-200">
              ROAS = Revenue from Ads ÷ Ad Spend
            </p>
            <p className="text-center text-zinc-500 text-sm mt-2">
              $8,000 ÷ $2,000 = <strong className="text-amber-500">4x ROAS</strong>
            </p>
          </div>
          <p>
            That&apos;s the whole formula. The complexity — and where most business
            owners go wrong — is in knowing what a 4x ROAS actually means for
            their specific business. And that depends entirely on your costs.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Why ROAS Matters More Than Ad Spend or Revenue Alone
          </h2>
          <p>
            Imagine two business owners. Both spend $5,000/month on ads. Business
            A generates $20,000 in revenue (4x ROAS). Business B generates
            $10,000 (2x ROAS). At a glance, Business A looks like the winner.
          </p>
          <p>
            But what if Business A sells physical products with 75% total variable
            costs — meaning every $100 in revenue costs $75 to deliver? Their
            break-even ROAS is 4x. They&apos;re barely covering costs. Business B
            sells digital products with 30% variable costs. Their break-even ROAS
            is 1.43x. At 2x ROAS, they&apos;re printing profit.
          </p>
          <p>
            Raw ROAS without context is meaningless. The number that matters is
            whether your ROAS clears your{" "}
            <Link
              href="/blog/break-even-roas-formula"
              className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
            >
              break-even threshold
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            How to Read Your ROAS Number
          </h2>
          <p>
            Here&apos;s a framework for interpreting ROAS once you know your break-even
            point:
          </p>
          <ul className="list-none space-y-3">
            <li className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <span className="text-red-400 font-semibold">Below break-even ROAS</span>
              <p className="text-zinc-500 text-sm mt-1">
                Every sale from these campaigns is losing money. Stop scaling,
                diagnose immediately.
              </p>
            </li>
            <li className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <span className="text-amber-400 font-semibold">At break-even ROAS</span>
              <p className="text-zinc-500 text-sm mt-1">
                Covering costs but not profitable. Useful for customer acquisition
                if LTV justifies it, otherwise optimize.
              </p>
            </li>
            <li className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <span className="text-green-400 font-semibold">Above break-even ROAS</span>
              <p className="text-zinc-500 text-sm mt-1">
                Profitable. The higher above break-even, the more margin per sale.
                Consider scaling.
              </p>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            Where Business Owners Misread ROAS
          </h2>
          <p>
            The most common mistake: seeing a ROAS above 1x and assuming the
            campaign is profitable. A 2x ROAS means you brought in $2 for every
            $1 spent — but if your product costs $1.50 to make, fulfill, and
            deliver per dollar of revenue, you actually lost $0.50 per dollar of
            ad spend at that ROAS.
          </p>
          <p>
            The second mistake: trusting platform-reported ROAS without questioning
            the attribution window. Meta&apos;s default 7-day click, 1-day view window
            credits conversions that would have happened anyway — people who were
            already planning to buy, or who converted through a different channel.
            Tighten your attribution window to 1-day click and your reported ROAS
            will drop — not because performance got worse, but because you&apos;re
            measuring more accurately.
          </p>
          <p>
            Third mistake: comparing ROAS across campaigns with different
            objectives. A prospecting campaign targeting cold audiences should
            never be expected to hit the same ROAS as a retargeting campaign
            showing ads to people who already visited your site. Blending these
            into one number hides what&apos;s actually working.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            ROAS as a Decision-Making Tool
          </h2>
          <p>
            Once you know your break-even ROAS, you can use it to make clear,
            unemotional decisions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            <li>
              Ad group running below break-even for 14+ days? Pause it, rework the
              creative or audience, restart.
            </li>
            <li>
              Campaign consistently 30% above break-even? Increase budget — it&apos;s
              working.
            </li>
            <li>
              New product launch? Set a tROAS target 20% above break-even and let
              the algorithm optimize toward profit.
            </li>
          </ul>
          <p>
            ROAS becomes your financial compass for every paid media decision.
            Without it, you&apos;re just guessing — and guessing gets expensive fast.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-2">
            The One Number to Calculate First
          </h2>
          <p>
            Before analyzing any campaign, calculate your break-even ROAS. Add up
            your cost of goods, fulfillment, shipping, and any other variable costs
            as a percentage of revenue. Subtract from 100% to get your gross
            margin. Divide 1 by that margin. That&apos;s your floor.
          </p>
          <p>
            Every campaign above that number is contributing to profit. Every
            campaign below it is costing you money — regardless of how the
            dashboard looks.
          </p>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-6">
            <Link href="/" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              Calculate your break-even ROAS →
            </Link>
            <Link href="/blog/break-even-roas-formula" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
              The break-even formula explained →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
