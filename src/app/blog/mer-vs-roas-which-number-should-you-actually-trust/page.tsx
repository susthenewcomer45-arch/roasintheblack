// Auto-generated 2026-07-27 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'MER vs. ROAS: Which Number Should You Actually Trust? | ROAS in the Black',
  description: 'Platform ROAS and blended MER often tell different stories. Learn which metric gives you a more reliable picture of ad performance.',
  alternates: { canonical: 'https://roasintheblack.com/blog/mer-vs-roas-which-number-should-you-actually-trust' },
  openGraph: {
    title: 'MER vs. ROAS: Which Number Should You Actually Trust? | ROAS in the Black',
    description: 'Platform ROAS and blended MER often tell different stories. Learn which metric gives you a more reliable picture of ad performance.',
    url: 'https://roasintheblack.com/blog/mer-vs-roas-which-number-should-you-actually-trust',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "If you run ads across more than one platform, you've likely noticed that adding up each platform's reported ROAS gives you a number that doesn't match your actual total revenue. This is an extremely common point of confusion, and it's one of the reasons more marketers are shifting toward MER — Marketing Efficiency Ratio — as their primary decision-making metric instead of platform-reported ROAS.",
      "Understanding the difference helps you avoid decisions based on inflated or double-counted numbers."
    ]
  },
  {
    "heading": "Why Platform ROAS Gets Inflated",
    "paragraphs": [
      "Each ad platform tracks and attributes conversions independently, using its own tracking window and attribution model. This means the same purchase can be counted as a conversion by Meta and by Google simultaneously, if a customer interacted with ads on both platforms before buying. Add up the ROAS reported by every platform you advertise on, and you'll often get a number well above your actual total revenue.",
      "View-through conversions compound this further — some platforms count a conversion any time someone saw an ad and later purchased, even without clicking, inflating the attributed number well beyond what actually drove the sale."
    ]
  },
  {
    "heading": "What MER Actually Measures",
    "paragraphs": [
      "Blended MER is calculated simply: total revenue across your entire business, divided by total ad spend across every platform combined. It ignores platform attribution entirely and instead answers a much more useful question — for every dollar spent on advertising in total, how much total revenue came in the door.",
      "Because MER doesn't rely on any single platform's tracking or attribution model, it's far more resistant to the inflation and double-counting that makes individual platform ROAS numbers unreliable."
    ]
  },
  {
    "heading": "Using Both Numbers Correctly",
    "paragraphs": [
      "Platform ROAS still has a place — it helps you compare relative performance between campaigns within the same platform. But it should never be the number you use to decide whether your business is actually profitable. MER, checked against your real revenue and cost data, is the more trustworthy signal for that decision.",
      "Many experienced marketers treat platform ROAS as a directional pulse check and treat MER as the primary metric before making any scaling decision."
    ]
  },
  {
    "paragraphs": [
      "Use the free calculator at roasintheblack.com to find your break-even ROAS based on your real cost structure, then compare that number against your blended MER to see where you actually stand."
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
            MER vs. ROAS: Which Number Should You Actually Trust?
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Platform ROAS and blended MER often tell different stories. Learn which metric gives you a more reliable picture of ad performance.</p>
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

        <RelatedArticles currentSlug="mer-vs-roas-which-number-should-you-actually-trust" />

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
