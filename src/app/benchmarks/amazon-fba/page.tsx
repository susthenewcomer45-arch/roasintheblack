import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon FBA ROAS Benchmarks | ROAS in the Black",
  description:
    "Typical gross margins, break-even ROAS, and target ROAS ranges for Amazon FBA sellers — plus the most common profitability mistake.",
  alternates: {
    canonical: "https://roasintheblack.com/benchmarks/amazon-fba",
  },
  openGraph: {
    title: "Amazon FBA ROAS Benchmarks | ROAS in the Black",
    description:
      "Typical gross margins, break-even ROAS, and target ROAS ranges for Amazon FBA sellers — plus the most common profitability mistake.",
    url: "https://roasintheblack.com/benchmarks/amazon-fba",
  },
};

export default function AmazonFbaBenchmarksPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            ROAS Benchmarks
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            Amazon FBA ROAS Benchmarks
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            What a profitable ROAS actually looks like for Amazon FBA
            sellers, based on typical margins and cost structures.
          </p>
        </header>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <div className="flex justify-between text-zinc-400">
            <span>Typical Gross Margin</span>
            <span className="font-mono text-zinc-200">
              20% – 35% after marketplace fees
            </span>
          </div>
          <div className="flex justify-between text-zinc-300 font-medium border-t border-zinc-700 pt-2">
            <span>Break-Even ROAS</span>
            <span className="font-mono">2.8x – 5.0x</span>
          </div>
          <div className="flex justify-between text-amber-500 font-bold border-t border-zinc-700 pt-2">
            <span>Target ROAS Range</span>
            <span className="font-mono">3.5x – 6.0x</span>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 space-y-8 text-zinc-400 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Why This Number
            </h2>
            <p>
              FBA sellers face compounding costs — manufacturing, freight,
              Amazon storage fees, fulfillment fees, and referral fees —
              requiring a higher ROAS to find profit compared to standalone
              ecommerce.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Common Mistake
            </h2>
            <p>
              Evaluating ad ROAS in isolation and ignoring its impact on
              organic ranking — ad sales improve organic search placement on
              Amazon, so pausing ads with a mediocre ROAS can cause
              profitable organic sales to collapse as product ranking drops.
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
