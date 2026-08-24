// Auto-generated 2026-08-24 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'What to Do When Your ROAS Is Good But Sales Are Flat | ROAS in the Black',
  description: 'Your ROAS looks good but sales are flat? Learn why metrics can deceive and how to align profitability with real revenue growth.',
  alternates: { canonical: 'https://roasintheblack.com/blog/what-to-do-when-your-roas-is-good-but-sales-are-flat' },
  openGraph: {
    title: 'What to Do When Your ROAS Is Good But Sales Are Flat | ROAS in the Black',
    description: 'Your ROAS looks good but sales are flat? Learn why metrics can deceive and how to align profitability with real revenue growth.',
    url: 'https://roasintheblack.com/blog/what-to-do-when-your-roas-is-good-but-sales-are-flat',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "You're staring at your ad dashboard and the numbers look solid. Your return on ad spend sits at 4:1, well above where it was last quarter. Your campaigns are scaling, impressions are climbing, and your cost per acquisition has dropped. Yet when you check your bank account, revenue growth has stalled. Your sales numbers are flat despite healthy ROAS metrics. This contradiction frustrates thousands of performance marketers every month, and it reveals a critical gap between how we measure success and what actually matters to the business.",
      "The gap between good ROAS and flat sales happens more often than most marketers admit. It signals that you're optimizing for the wrong metrics, or you're measuring the right ones in isolation without understanding the bigger picture of your business health. Understanding this disconnect is essential if you want to move beyond vanity metrics and build campaigns that genuinely move your bottom line forward."
    ]
  },
  {
    "heading": "ROAS Tells You Only Half the Story",
    "paragraphs": [
      "Return on ad spend is a useful metric, but it measures efficiency in a vacuum. A 4:1 ROAS means you're generating four dollars in revenue for every dollar spent on ads. That sounds profitable until you subtract your cost of goods sold, fulfillment, customer service, and overhead. If your gross margin is 40 percent and you're spending aggressively to acquire customers, that 4:1 ROAS might actually deliver a loss per order once all costs are factored in.",
      "The real problem is that ROAS doesn't account for the cost structure of your business. Two brands with identical 4:1 ROAS can have completely different profit profiles. One might be sitting comfortably above break-even while the other bleeds money on every sale. This is why comparing your ROAS to industry benchmarks or competitor metrics is often misleading. Their cost structure is not your cost structure. Their margin profile is not yours. Your campaigns need to be optimized against your specific break-even ROAS, not against generic performance targets."
    ]
  },
  {
    "heading": "The Volume-Margin Trap",
    "paragraphs": [
      "Here's a concrete scenario: you're running Facebook and Google campaigns and you've scaled monthly ad spend from ten thousand dollars to twenty-five thousand dollars. Your ROAS held steady at 4:1, which feels like a win. At ten thousand dollars spend, you generated forty thousand dollars in revenue. At twenty-five thousand dollars spend, you generated one hundred thousand dollars in revenue. But sales didn't actually increase the way that top-line number suggests.",
      "What likely happened is your cost per acquisition rose significantly. To reach new audiences and scale volume, you bid higher on keywords and broadened your audience targeting. You captured easier sales at lower CAC first, then had to spend more to acquire marginal customers. Your ROAS remained stable because the platform's algorithm adjusted bids to maintain efficiency, but the customers you acquired in month two are simply less profitable than the customers you acquired in month one. You're selling more units but at lower unit margins. That's the volume-margin trap, and it's invisible in ROAS alone."
    ]
  },
  {
    "heading": "How to Align ROAS With Actual Profitability",
    "paragraphs": [
      "Start by calculating your true break-even ROAS. This isn't a hypothetical exercise. It requires you to map every cost: product cost, platform fees, payment processing, customer acquisition cost for other channels, operational overhead allocated to this campaign, and your target profit margin. If your gross margin is 50 percent and your total operating costs per order are 20 percent of revenue, your break-even ROAS is roughly 1.4:1 (you need enough revenue to cover 100 percent of costs plus recovery of your ad spend). Anything above 1.4:1 is profit, but you need to know this number before you interpret campaign performance.",
      "Once you know your break-even ROAS, every campaign decision becomes clearer. You can expand aggressively into campaigns that hit 5:1 or 6:1 because you have real margin to work with. You can pause or restructure campaigns that deliver 2:1 or 2.5:1 because you know they're eroding profitability. You can test new channels, audience segments, and creatives with confidence because you're measuring success against your actual business model, not an arbitrary industry benchmark."
    ]
  },
  {
    "heading": "What Flat Sales Really Means",
    "paragraphs": [
      "If your ROAS is good but sales are flat, consider these explanations. First, you may be cannibalizing organic traffic or other paid channels. As you scale ad spend on one channel, users who would have converted anyway now come through paid ads. Your total customer count stays the same but you're now paying for traffic you once got free. Second, your customer lifetime value may be declining as you shift to lower-intent audiences. You're acquiring more customers per campaign but they spend less over time. Third, you may be measuring sales in units rather than profit, and your unit economics have deteriorated even though top-line revenue appears stable."
    ]
  },
  {
    "heading": "Take Control of Your Metrics",
    "paragraphs": [
      "The path forward starts with moving beyond ROAS as your primary success metric. Track contribution margin per customer acquired. Monitor cohort profitability by acquisition month or channel. Calculate your payback period—how many days or weeks until a customer generates enough profit to cover their acquisition cost. These metrics give you real visibility into whether your campaigns are building a sustainable business.",
      "Use tools like the break-even ROAS calculator at roasintheblack.com to define exactly what ROAS you need to hit given your margin structure. Input your costs, your target profit, and your gross margin, then get a precise number to optimize toward. Stop chasing industry averages. Stop celebrating ROAS numbers that don't translate to real profit. Start building campaigns against your actual break-even point, and watch your flat sales problem resolve itself into genuine, sustainable growth."
    ]
  }
]

const postDate = '2026-08-24'
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
            What to Do When Your ROAS Is Good But Sales Are Flat
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Your ROAS looks good but sales are flat? Learn why metrics can deceive and how to align profitability with real revenue growth.</p>
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

        <RelatedArticles currentSlug="what-to-do-when-your-roas-is-good-but-sales-are-flat" />

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
