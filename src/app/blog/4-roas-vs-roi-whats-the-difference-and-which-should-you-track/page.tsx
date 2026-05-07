// Auto-generated 2026-05-07 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '4. ROAS vs ROI: What\'s the Difference and Which Should You Track? | ROAS in the Black',
  description: 'Learn the difference between ROAS and ROI, which metric matters most for paid ads, and how to calculate break-even performance.',
  alternates: { canonical: 'https://roasintheblack.com/blog/4-roas-vs-roi-whats-the-difference-and-which-should-you-track' },
  openGraph: {
    title: '4. ROAS vs ROI: What\'s the Difference and Which Should You Track? | ROAS in the Black',
    description: 'Learn the difference between ROAS and ROI, which metric matters most for paid ads, and how to calculate break-even performance.',
    url: 'https://roasintheblack.com/blog/4-roas-vs-roi-whats-the-difference-and-which-should-you-track',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "ROAS and ROI are two of the most important metrics in digital marketing, yet many advertisers treat them as interchangeable. They're not. Understanding the difference between Return on Ad Spend and Return on Investment is critical if you want to run profitable campaigns and make data-driven decisions about where to allocate your budget.",
      "In this post, we'll break down what each metric means, how they're calculated, where they diverge, and which one should take priority when you're managing paid advertising across Google, Meta, TikTok, or other platforms."
    ]
  },
  {
    "heading": "What Is ROAS?",
    "paragraphs": [
      "ROAS stands for Return on Ad Spend. It's a straightforward metric that measures how much revenue you generate for every dollar you spend on ads. If you spend $1,000 on Facebook ads and generate $5,000 in revenue, your ROAS is 5:1 (or simply \"5x\").",
      "The formula is simple: ROAS = Revenue / Ad Spend. ROAS tells you specifically how hard your ad dollars are working. It's the metric that most performance marketers obsess over because it's direct, measurable, and tied directly to advertising activity. A 3:1 ROAS means you're getting $3 back for every $1 spent on ads—before accounting for anything else."
    ]
  },
  {
    "heading": "What Is ROI?",
    "paragraphs": [
      "ROI stands for Return on Investment. It's a broader metric that measures the profitability of an entire investment or campaign by factoring in all costs, not just ad spend. ROI accounts for ad spend, production costs, software fees, labor, inventory costs, shipping, refunds, and any other expense related to generating that revenue.",
      "The formula is: ROI = (Net Profit / Total Investment) × 100. So if your net profit (after all costs) is $4,000 and your total investment (including ad spend, fulfillment, and overhead) is $10,000, your ROI is 40%. ROI gives you the true business picture—it tells you how much money you actually made from the campaign."
    ]
  },
  {
    "heading": "ROAS vs ROI: A Real Example",
    "paragraphs": [
      "Let's walk through a concrete scenario. You're an ecommerce brand running a paid social campaign. You spend $2,000 on ads and generate $10,000 in revenue. Your ROAS is 5:1—that looks fantastic. But here's what happens when you calculate ROI:",
      "Of that $10,000 revenue: You spent $2,000 on ads. Your product cost of goods sold (COGS) totals $3,000. You paid $1,500 for fulfillment and shipping. You spent $500 on email software and marketing tools. Your net profit is $2,500. Your total investment is $2,000 + $3,000 + $1,500 + $500 = $7,000. Your ROI is ($2,500 / $7,000) × 100 = 35.7%. Your ROAS of 5:1 looks incredible, but your actual return on total investment tells a different story. This is why both metrics matter."
    ]
  },
  {
    "heading": "Which Metric Should You Track?",
    "paragraphs": [
      "The answer: both, but with different applications. Track ROAS daily to monitor ad performance and optimize your campaigns in real time. It's your frontline metric. If your ROAS is trending downward, you know something's wrong with your ads, audience, or creative—and you need to act fast. ROAS gives you immediate feedback on ad efficiency.",
      "Track ROI monthly or quarterly to assess true business profitability. ROI tells you whether the campaign is actually profitable when you account for everything. A 5:1 ROAS might excite you, but if your ROI is negative, you're losing money overall. ROI is your long-term health metric. Use ROAS to optimize. Use ROI to decide."
    ]
  },
  {
    "heading": "Finding Your Break-Even ROAS",
    "paragraphs": [
      "Here's where things get practical. Every business has a break-even ROAS—the minimum return on ad spend required to cover all your costs and avoid losing money. If your break-even ROAS is 2:1 but you're only hitting 1.8:1, you're unprofitable. If you're hitting 3:1, you have room to scale.",
      "Calculating your break-even ROAS requires knowing your COGS, fulfillment costs, platform fees, and other variable costs. It's not always obvious. That's why having a tool to calculate this—like the break-even ROAS calculator at roasintheblack.com—removes the guesswork. Input your costs once, and you'll immediately see the exact ROAS target you need to hit. From there, you can confidently decide whether to scale ad spend, pause underperforming campaigns, or optimize existing ones. Knowing your break-even number is the foundation of profitable advertising."
    ]
  }
]

const postDate = '2026-05-07'
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
            4. ROAS vs ROI: What\'s the Difference and Which Should You Track?
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn the difference between ROAS and ROI, which metric matters most for paid ads, and how to calculate break-even performance.</p>
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
