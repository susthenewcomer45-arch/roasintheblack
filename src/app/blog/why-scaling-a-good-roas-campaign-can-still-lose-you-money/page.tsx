// Auto-generated 2026-07-27 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Why Scaling a "Good" ROAS Campaign Can Still Lose You Money | ROAS in the Black',
  description: 'A campaign that looks profitable at low spend can quietly become unprofitable as you scale. Here\'s why, and how to catch it early.',
  alternates: { canonical: 'https://roasintheblack.com/blog/why-scaling-a-good-roas-campaign-can-still-lose-you-money' },
  openGraph: {
    title: 'Why Scaling a "Good" ROAS Campaign Can Still Lose You Money | ROAS in the Black',
    description: 'A campaign that looks profitable at low spend can quietly become unprofitable as you scale. Here\'s why, and how to catch it early.',
    url: 'https://roasintheblack.com/blog/why-scaling-a-good-roas-campaign-can-still-lose-you-money',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "It's one of the most common and expensive patterns in paid advertising: a campaign performs well at modest spend, so the budget gets increased. The platform continues reporting a similar or only slightly lower ROAS. But overall profit quietly shrinks or disappears entirely. This happens more often than most marketers expect, and it's rarely obvious from the dashboard alone.",
      "Understanding why this happens helps you scale more safely and catch problems before they become expensive."
    ]
  },
  {
    "heading": "Why ROAS Can Hold While Profit Falls",
    "paragraphs": [
      "As you increase ad spend, you typically have to reach a wider, less targeted audience, which tends to raise your cost per impression and cost per click over time. Even if the platform's reported ROAS stays roughly stable, this rising cost pressure combined with audience saturation can mean each additional dollar of spend is generating less real, incremental revenue than the dollars before it.",
      "Scaled campaigns can also see rising return rates or lower average order values as they reach a broader, less pre-qualified audience — factors that don't show up in the platform's ROAS number at all."
    ]
  },
  {
    "heading": "The Incrementality Problem",
    "paragraphs": [
      "A significant portion of 'attributed' sales at higher spend levels may have happened anyway, without the ad — this is especially true for retargeting and branded search campaigns, which often show excellent ROAS but frequently capture demand that already existed rather than creating new demand.",
      "As budgets scale, more spend often shifts toward these lower-incrementality channels, meaning the reported ROAS looks strong while the real, additional revenue generated is much smaller than the number suggests."
    ]
  },
  {
    "heading": "How to Scale More Safely",
    "paragraphs": [
      "Watch contribution profit and blended MER as you increase budget, not just platform ROAS. If profit growth starts lagging behind spend growth, that's an early signal worth investigating before scaling further. Simple incrementality checks — like geo holdouts or temporary pauses — can reveal how much of your reported performance is real, additional revenue versus demand that would have converted anyway.",
      "Set your internal ROAS targets meaningfully above your calculated break-even point, leaving room to absorb the natural efficiency loss that comes with scaling."
    ]
  },
  {
    "paragraphs": [
      "Before your next scaling decision, use the free calculator at roasintheblack.com to confirm your real break-even ROAS, so you have a clear line to watch for as spend increases."
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
            Why Scaling a "Good" ROAS Campaign Can Still Lose You Money
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">A campaign that looks profitable at low spend can quietly become unprofitable as you scale. Here\'s why, and how to catch it early.</p>
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

        <RelatedArticles currentSlug="why-scaling-a-good-roas-campaign-can-still-lose-you-money" />

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
