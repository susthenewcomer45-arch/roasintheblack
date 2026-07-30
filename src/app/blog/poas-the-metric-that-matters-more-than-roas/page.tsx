// Auto-generated 2026-07-27 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'POAS: The Metric That Matters More Than ROAS | ROAS in the Black',
  description: 'Profit on Ad Spend accounts for what ROAS ignores. Learn how to calculate it and why it\'s a more reliable decision-making metric.',
  alternates: { canonical: 'https://roasintheblack.com/blog/poas-the-metric-that-matters-more-than-roas' },
  openGraph: {
    title: 'POAS: The Metric That Matters More Than ROAS | ROAS in the Black',
    description: 'Profit on Ad Spend accounts for what ROAS ignores. Learn how to calculate it and why it\'s a more reliable decision-making metric.',
    url: 'https://roasintheblack.com/blog/poas-the-metric-that-matters-more-than-roas',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "ROAS tells you how much revenue your ads generated relative to spend. It does not tell you how much profit you made. POAS — Profit on Ad Spend — closes that gap by measuring actual profit generated for every dollar spent on advertising, after accounting for your real costs.",
      "For businesses with thin or variable margins, POAS is often a far more reliable signal than ROAS for deciding whether a campaign is actually worth scaling."
    ]
  },
  {
    "heading": "How POAS Is Calculated",
    "paragraphs": [
      "POAS is calculated as net profit divided by ad spend, where net profit accounts for cost of goods sold, fulfillment and shipping, payment processing fees, and any other variable costs tied to the sale. A campaign generating $10,000 in revenue on $2,000 of ad spend has a 5x ROAS — but if the true cost of goods and fulfillment eats $6,000 of that revenue, the actual profit is only $4,000, putting POAS at 2x, a very different picture than the ROAS number alone suggests.",
      "This distinction matters most for businesses with lower margins, where the gap between ROAS and POAS tends to be largest and most consequential for decision-making."
    ]
  },
  {
    "heading": "Why POAS Catches What ROAS Misses",
    "paragraphs": [
      "Two campaigns can report identical ROAS while having very different POAS, if they're selling products with different margins or if one has a higher return rate than the other. Relying on ROAS alone in these cases can lead to scaling the wrong campaign — the one with worse real profitability but a similar or better surface-level ROAS number.",
      "POAS also naturally adjusts for promotions, discounts, and fee changes that affect your true margin, none of which show up in a platform's ROAS calculation at all."
    ]
  },
  {
    "heading": "Putting POAS Into Practice",
    "paragraphs": [
      "Calculate POAS at the product or SKU level where possible, since margins often vary significantly across a catalog. Use it alongside ROAS rather than replacing it entirely — ROAS is still useful for comparing relative platform or campaign performance, but POAS should be the number that determines whether scaling makes financial sense.",
      "Building POAS into your regular reporting, even as a simple spreadsheet calculation alongside your ad platform's numbers, gives you a much more accurate picture than ROAS can provide on its own."
    ]
  },
  {
    "paragraphs": [
      "The free calculator at roasintheblack.com starts you off with your break-even ROAS based on your real costs — the same foundational number that makes an accurate POAS calculation possible."
    ]
  }
]

const postDate = '2026-07-27'
const readTime = '7 min read'

export default function BlogPost() {
  const formattedDate = new Date(postDate + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <Link href="/blog" className="hover:text-zinc-400 transition-colors">
              Blog
            </Link>
            <span>·</span>
            <time dateTime={postDate}>{formattedDate}</time>
            <span>·</span>
            <span>{readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            POAS: The Metric That Matters More Than ROAS
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Profit on Ad Spend accounts for what ROAS ignores. Learn how to calculate it and why it\'s a more reliable decision-making metric.</p>
        </header>

        <div
          className="flex items-center justify-center border border-dashed border-zinc-700 bg-zinc-900/50 rounded-lg text-zinc-600 text-xs tracking-widest uppercase h-24 sm:h-20"
          aria-label="Advertisement"
        >
          <span>Advertisement</span>
        </div>

        <div className="border-t border-zinc-800 pt-6 space-y-6">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-semibold text-zinc-200 mb-3">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((para, j) => (
                <p key={j} className="text-zinc-400 leading-relaxed mt-3">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

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

        <RelatedArticles currentSlug="poas-the-metric-that-matters-more-than-roas" />

        <div className="flex gap-6 text-sm border-t border-zinc-800 pt-6">
          <Link href="/blog" className="text-amber-500 hover:text-amber-400 font-medium">
            ← Back to Blog
          </Link>
          <Link href="/" className="text-amber-500 hover:text-amber-400 font-medium">
            Calculator →
          </Link>
        </div>
      </article>
    </div>
  )
}
