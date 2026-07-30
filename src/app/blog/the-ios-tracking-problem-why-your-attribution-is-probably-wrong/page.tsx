// Auto-generated 2026-07-27 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'The iOS Tracking Problem: Why Your Attribution Is Probably Wrong | ROAS in the Black',
  description: 'iOS privacy changes have made ad attribution unreliable. Learn why your reported conversions may not reflect what\'s actually driving sales.',
  alternates: { canonical: 'https://roasintheblack.com/blog/the-ios-tracking-problem-why-your-attribution-is-probably-wrong' },
  openGraph: {
    title: 'The iOS Tracking Problem: Why Your Attribution Is Probably Wrong | ROAS in the Black',
    description: 'iOS privacy changes have made ad attribution unreliable. Learn why your reported conversions may not reflect what\'s actually driving sales.',
    url: 'https://roasintheblack.com/blog/the-ios-tracking-problem-why-your-attribution-is-probably-wrong',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "If you've noticed your ad platforms reporting numbers that don't quite match your store's actual sales data, you're not imagining it. Since Apple's App Tracking Transparency changes, ad platforms have lost significant visibility into what happens after someone clicks an ad on an iOS device. The result is attribution data that's often modeled and estimated rather than directly observed.",
      "Understanding what changed helps explain why so many marketers describe feeling like they're 'guessing' at their real numbers."
    ]
  },
  {
    "heading": "What Actually Changed",
    "paragraphs": [
      "Before these privacy changes, ad platforms could track a user's full journey from ad click to purchase with a high degree of precision. Now, a large share of iOS users opt out of tracking, which means platforms lose direct visibility into conversions from those users and instead rely on statistical modeling to estimate what likely happened.",
      "This modeled data gets blended into your reported conversions and ROAS without any clear label distinguishing it from directly observed conversions, making it difficult to know how much of your reported performance is measured versus estimated."
    ]
  },
  {
    "heading": "How This Skews Your Decisions",
    "paragraphs": [
      "Modeled conversions tend to smooth out performance in ways that don't always reflect reality. A campaign might report stable ROAS on the dashboard while actual incremental sales are declining, because the model is filling gaps with estimates based on historical patterns rather than what's truly happening right now.",
      "This is part of why some campaigns appear to perform consistently well on-platform for weeks, then suddenly show a real-world revenue drop that the reported numbers never predicted."
    ]
  },
  {
    "heading": "How to Get a More Reliable Picture",
    "paragraphs": [
      "Cross-check platform-reported revenue against your actual store or CRM analytics regularly — the gap between the two tells you how much to trust platform attribution at any given time. Where possible, implement server-side or enhanced conversion tracking, which tends to be more resilient to these tracking limitations than browser-based tracking alone.",
      "For bigger scaling decisions, some marketers run simple incrementality tests — pausing a campaign or geography temporarily to see the real impact on total sales — rather than trusting attributed ROAS alone."
    ]
  },
  {
    "paragraphs": [
      "Once you have a clearer picture of your real revenue, use the free calculator at roasintheblack.com to check that performance against your actual break-even ROAS based on your true cost structure."
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
            The iOS Tracking Problem: Why Your Attribution Is Probably Wrong
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">iOS privacy changes have made ad attribution unreliable. Learn why your reported conversions may not reflect what\'s actually driving sales.</p>
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

        <RelatedArticles currentSlug="the-ios-tracking-problem-why-your-attribution-is-probably-wrong" />

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
