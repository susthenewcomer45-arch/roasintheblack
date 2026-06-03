import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "ROAS in the Black is a free break-even ROAS calculator built for marketers, ecommerce brands, and business owners who need to know their number before spending another dollar on ads.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            About
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            ROAS in the Black
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A free tool built for marketers, ecommerce brands, and business
            owners who want to know their exact break-even ROAS before spending
            another dollar on ads.
          </p>
        </header>

        <div className="border-t border-zinc-800 pt-6 space-y-8 text-zinc-400 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              No sign-up. No upsell. Just the math.
            </h2>
            <p>
              Most advertising tools want you to connect your ad accounts, pay a
              monthly fee, or sit through a demo before you can get to the one
              number that actually matters. We thought that was backwards.
            </p>
            <p>
              ROAS in the Black does one thing: it takes your cost structure and
              tells you the minimum Return on Ad Spend you need to cover your
              costs. Enter your COGS, fulfillment, and other variable costs, and
              you get your break-even ROAS instantly. No account required.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              What is break-even ROAS?
            </h2>
            <p>
              Break-even ROAS is the exact ROAS at which your ad-driven revenue
              covers all your variable costs — cost of goods, fulfillment,
              platform fees, returns, and anything else that scales with each
              sale. Below this number, every order you drive through paid ads
              loses money. Above it, you&apos;re generating real profit.
            </p>
            <p>
              The formula is:{" "}
              <span className="text-zinc-300 font-mono text-sm">
                Break-Even ROAS = 1 ÷ Gross Margin
              </span>
              . If your total variable costs are 60% of revenue, your gross
              margin is 40%, and your break-even ROAS is 2.5x. Any campaign
              running below that is spending money to lose money — no matter
              what the dashboard says.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Why it matters before you scale
            </h2>
            <p>
              Scaling ad spend without knowing your break-even ROAS is one of
              the most common — and costly — mistakes in performance marketing.
              Campaigns that look profitable on the platform report are often
              running below break-even once you account for the full cost
              structure. The more you spend, the more you lose.
            </p>
            <p>
              Knowing your number changes how you bid, how you evaluate
              creative performance, and how you set target ROAS goals in Google
              Ads or Meta Ads Manager. It turns &quot;is this campaign good?&quot; from
              a gut call into a math problem with a definitive answer.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              Ready to find your number?{" "}
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
