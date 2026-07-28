import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Generation ROAS Benchmarks | ROAS in the Black",
  description:
    "Typical gross margins, break-even ROAS, and target ROAS ranges for lead generation businesses — plus the most common profitability mistake.",
  alternates: {
    canonical: "https://roasintheblack.com/benchmarks/lead-generation",
  },
  openGraph: {
    title: "Lead Generation ROAS Benchmarks | ROAS in the Black",
    description:
      "Typical gross margins, break-even ROAS, and target ROAS ranges for lead generation businesses — plus the most common profitability mistake.",
    url: "https://roasintheblack.com/benchmarks/lead-generation",
  },
};

export default function LeadGenerationBenchmarksPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            ROAS Benchmarks
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            Lead Generation ROAS Benchmarks
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            What a profitable ROAS actually looks like for lead generation
            businesses, based on typical margins and cost structures.
          </p>
        </header>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <div className="flex justify-between text-zinc-400">
            <span>Typical Gross Margin</span>
            <span className="font-mono text-zinc-200">60% – 80%</span>
          </div>
          <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-700 pt-2">
            <span>Break-Even ROAS</span>
            <span className="font-mono">1.2x – 1.6x</span>
          </div>
          <div className="flex justify-between text-amber-500 font-bold border-t border-zinc-700 pt-2">
            <span>Target ROAS Range</span>
            <span className="font-mono">4.0x – 8.0x+</span>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 space-y-8 text-zinc-400 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Why This Number
            </h2>
            <p>
              Costs are driven by human capital rather than physical
              inventory. A single closed deal can be worth thousands of
              dollars, so relatively small ad spend can yield a large revenue
              multiplier upon conversion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Common Mistake
            </h2>
            <p>
              Treating Cost Per Lead as the final metric without tracking
              lead-to-close rate — cheap, low-intent leads inflate short-term
              success but drain budget and waste sales team time.
            </p>
          </section>

          <div className="mt-8 bg-zinc-900 border border-amber-500/30 rounded-xl p-6 text-center">
            <p className="font-semibold text-zinc-100 text-lg mb-2">
              Know Your Break-Even ROAS Before You Spend Another Dollar
            </p>
            <p className="text-zinc-400 text-sm mb-5">
              Enter your COGS, fulfillment costs, and other expenses. Get your
              break-even ROAS instantly — free, no sign-up.
            </p>
            <Link
              href="/"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Calculate My Break-Even ROAS →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
