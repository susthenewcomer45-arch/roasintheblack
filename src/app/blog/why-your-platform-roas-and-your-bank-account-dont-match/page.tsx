// Auto-generated 2026-07-27 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Why Your Platform ROAS and Your Bank Account Don\'t Match | ROAS in the Black',
  description: 'Platform-reported ROAS ignores your real costs. Learn why a 3-4x ROAS can still mean you\'re losing money.',
  alternates: { canonical: 'https://roasintheblack.com/blog/why-your-platform-roas-and-your-bank-account-dont-match' },
  openGraph: {
    title: 'Why Your Platform ROAS and Your Bank Account Don\'t Match | ROAS in the Black',
    description: 'Platform-reported ROAS ignores your real costs. Learn why a 3-4x ROAS can still mean you\'re losing money.',
    url: 'https://roasintheblack.com/blog/why-your-platform-roas-and-your-bank-account-dont-match',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "You open your ad dashboard and see a healthy 3.5x ROAS. Everything looks great. Then you check your actual bank account and the numbers don't add up. This disconnect is one of the most common frustrations among marketers and store owners — and it comes down to one simple fact: platform-reported ROAS only measures attributed revenue against ad spend. It ignores almost everything else that determines whether you actually made money.",
      "Understanding what ROAS leaves out is the first step to making decisions based on real profitability instead of a misleading dashboard number."
    ]
  },
  {
    "heading": "What Platform ROAS Actually Measures",
    "paragraphs": [
      "ROAS as shown by Meta, Google, or TikTok is calculated as attributed revenue divided by ad spend. That's it. It does not subtract the cost of goods sold, shipping and fulfillment costs, payment processing fees, returns and refunds, discounts, or general overhead. A 3.5x ROAS simply means the platform attributed 3.5 dollars of revenue for every dollar spent on ads — nothing about actual profit is included in that number.",
      "This is why two businesses can report the identical ROAS on the same platform and one is genuinely profitable while the other is losing money on every single sale."
    ]
  },
  {
    "heading": "The Math That Actually Matters",
    "paragraphs": [
      "The number that determines whether a given ROAS is profitable is your contribution margin — what's left after variable costs are subtracted from revenue. A simple rule many operators use: break-even ROAS is roughly equal to 1 divided by your contribution margin percentage. At a 20% margin, you need close to 5x ROAS just to break even. At a 40-50% margin, 2-2.5x might already be profitable.",
      "This is why low-margin models like many dropshipping and thin-margin ecommerce operations routinely lose money at ROAS numbers that look impressive on a dashboard, while higher-margin businesses can be comfortably profitable at ROAS levels that would look mediocre by comparison."
    ]
  },
  {
    "heading": "What to Track Instead",
    "paragraphs": [
      "Before scaling any campaign, calculate your true contribution margin per order or per SKU, including returns reserve and processing fees. Many experienced operators also track blended MER — total revenue across all channels divided by total ad spend — as a reality check that ignores platform attribution entirely.",
      "Know your break-even ROAS cold before you look at what the platform is reporting. That single number tells you whether a 'good-looking' ROAS is actually good for your business."
    ]
  },
  {
    "paragraphs": [
      "The free calculator at roasintheblack.com does this math for you instantly — enter your actual cost percentages and see the exact break-even ROAS your business needs before you scale another campaign."
    ]
  }
]

const postDate = '2026-07-27'
const readTime = '8 min read'

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
            Why Your Platform ROAS and Your Bank Account Don\'t Match
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Platform-reported ROAS ignores your real costs. Learn why a 3-4x ROAS can still mean you\'re losing money.</p>
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

        <RelatedArticles currentSlug="why-your-platform-roas-and-your-bank-account-dont-match" />

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
