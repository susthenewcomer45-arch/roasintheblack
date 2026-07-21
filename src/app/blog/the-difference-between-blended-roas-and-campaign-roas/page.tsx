// Auto-generated 2026-07-21 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Difference Between Blended ROAS and Campaign ROAS | ROAS in the Black',
  description: 'Learn the difference between blended ROAS and campaign ROAS. Understand how to calculate profitable ad spend across multiple channels.',
  alternates: { canonical: 'https://roasintheblack.com/blog/the-difference-between-blended-roas-and-campaign-roas' },
  openGraph: {
    title: 'The Difference Between Blended ROAS and Campaign ROAS | ROAS in the Black',
    description: 'Learn the difference between blended ROAS and campaign ROAS. Understand how to calculate profitable ad spend across multiple channels.',
    url: 'https://roasintheblack.com/blog/the-difference-between-blended-roas-and-campaign-roas',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "If you run paid ads across Google, Meta, TikTok, or any combination of platforms, you've likely heard the term ROAS thrown around in marketing meetings and performance reviews. But many advertisers operate with incomplete or misleading ROAS data because they're conflating two very different measurements: blended ROAS and campaign ROAS. Understanding the distinction between these metrics isn't just academic—it directly impacts your budget allocation decisions and your ability to scale profitably.",
      "The gap between blended and campaign ROAS often creates blind spots in campaign management. An advertiser might believe they're running a healthy 3:1 ROAS overall, only to discover that one platform is underwater while another is carrying the entire operation. This misalignment leads to waste, misplaced optimization efforts, and missed opportunities to cut underperforming channels. Getting precise about which metric you're measuring and why is the first step toward smarter ad spend decisions."
    ]
  },
  {
    "heading": "What Is Campaign ROAS?",
    "paragraphs": [
      "Campaign ROAS is the straightforward measure of revenue generated divided by the ad spend for a specific campaign, channel, or time period. If you spend 1,000 dollars on a Google Search campaign and generate 4,000 dollars in revenue, your campaign ROAS is 4:1. This metric is tied to a single source of traffic and tells you exactly how efficient that particular lever is performing.",
      "Campaign ROAS is the most granular view of your advertising efficiency. It's what you see when you pull a report from Google Ads or Meta Ads Manager. It isolates the performance of one campaign or ad set and removes the noise from other channels. For performance marketers, this is essential because it allows you to identify which specific tactics, audiences, and creatives are generating positive unit economics."
    ]
  },
  {
    "heading": "What Is Blended ROAS?",
    "paragraphs": [
      "Blended ROAS is the aggregate return across all advertising channels and campaigns combined. It's your total revenue attributed to paid advertising divided by your total ad spend across every platform. If you spent 10,000 dollars across Google, Meta, TikTok, and Amazon combined last month and generated 35,000 dollars in attributed revenue, your blended ROAS is 3.5:1.",
      "Blended ROAS gives you a high-level view of your overall advertising health and profitability. It's the metric most useful for board presentations, budget justification, and understanding whether your advertising operation is in the black or red. However, blended ROAS can mask significant performance variations between individual channels. A strong ROAS on one platform can subsidize weak performance on another, making it harder to spot optimization opportunities."
    ]
  },
  {
    "heading": "A Worked Example: Where Blended and Campaign ROAS Diverge",
    "paragraphs": [
      "Imagine you're running paid ads for an ecommerce store across three channels. In August, you spend 5,000 dollars on Google Search and generate 20,000 dollars in revenue (4:1 ROAS). You spend 3,000 dollars on Meta and generate 9,000 dollars in revenue (3:1 ROAS). You spend 2,000 dollars on TikTok and generate 2,400 dollars in revenue (1.2:1 ROAS). Your total spend is 10,000 dollars, and total revenue is 31,400 dollars. Your blended ROAS is 3.14:1, which looks respectable.",
      "But here's the problem: TikTok is barely profitable and consuming 2,000 dollars in budget that could be reallocated to Google or Meta. If you only looked at blended ROAS, you might think everything was fine and continue spending equally across all three platforms. When you examine campaign ROAS for each channel individually, you see that TikTok is dragging down your overall efficiency. You can then make an informed decision: pause TikTok, optimize it further, or shift that 2,000 dollars to Google Search where you're seeing 4:1 returns. Campaign ROAS revealed the opportunity; blended ROAS hid it."
    ]
  },
  {
    "heading": "Why You Need Both Metrics",
    "paragraphs": [
      "The most sophisticated advertisers track both blended and campaign ROAS because each tells a different story. Campaign ROAS keeps you accountable to individual channel performance and helps you optimize spend allocation. Blended ROAS tells you whether your overall advertising operation is profitable and sustainable. Ignoring campaign ROAS invites waste; ignoring blended ROAS leaves you blind to your true profitability.",
      "Many business owners also need to know their break-even ROAS before they can properly evaluate either metric. What ROAS do you actually need to achieve to cover your ad spend and operational costs while hitting profit targets? That number varies based on your margins, overhead, and business model. Without knowing your break-even threshold, even strong-looking ROAS numbers might not translate to actual bottom-line profit."
    ]
  },
  {
    "heading": "How to Use Both Metrics for Better Budget Decisions",
    "paragraphs": [
      "Start by calculating your required break-even ROAS based on your business model and cost structure. Then track campaign ROAS for each channel to identify which ones are above that threshold and which are below. Use this data to rebalance your spend toward higher-performing channels and away from those underperforming their targets. Monitor your blended ROAS to ensure your overall operation stays profitable even as you optimize individual campaigns.",
      "Tools like the break-even ROAS calculator at roasintheblack.com can help you determine exactly what ROAS you need before you start allocating budget. Once you know your target, comparing it against both your campaign ROAS and blended ROAS gives you a complete picture of where optimization efforts will have the biggest impact. The goal isn't to chase the highest ROAS number—it's to run profitable, scalable campaigns across channels that deliver predictable returns above your break-even threshold."
    ]
  }
]

const postDate = '2026-07-21'
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
            The Difference Between Blended ROAS and Campaign ROAS
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn the difference between blended ROAS and campaign ROAS. Understand how to calculate profitable ad spend across multiple channels.</p>
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
