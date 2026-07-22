// Auto-generated 2026-07-22 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Use ROAS to Decide When to Kill a Campaign | ROAS in the Black',
  description: 'Learn how to use ROAS metrics to decide when to pause or kill underperforming ad campaigns and protect your marketing budget.',
  alternates: { canonical: 'https://roasintheblack.com/blog/how-to-use-roas-to-decide-when-to-kill-a-campaign' },
  openGraph: {
    title: 'How to Use ROAS to Decide When to Kill a Campaign | ROAS in the Black',
    description: 'Learn how to use ROAS metrics to decide when to pause or kill underperforming ad campaigns and protect your marketing budget.',
    url: 'https://roasintheblack.com/blog/how-to-use-roas-to-decide-when-to-kill-a-campaign',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "Every dollar spent on advertising should generate measurable returns. Yet many performance marketers keep campaigns alive long after they've stopped working—burning budget on channels and audiences that consistently underdeliver. The difference between a profitable marketing operation and a bleeding one often comes down to a single decision: knowing when to kill a campaign.",
      "Return on Ad Spend, or ROAS, is the metric that tells you whether a campaign deserves to live or die. But ROAS alone isn't enough. You need to understand your break-even threshold, compare actual performance against that threshold, and then act decisively. This guide walks you through the framework for using ROAS data to make killing campaigns a disciplined, systematic process instead of a reactive scramble."
    ]
  },
  {
    "heading": "Understanding Your Break-Even ROAS",
    "paragraphs": [
      "Before you can decide whether a campaign is worth running, you need to know the minimum ROAS required to cover your costs. Break-even ROAS varies by business model, product margins, and operational structure. A SaaS company with a 70% gross margin will have a very different break-even threshold than an ecommerce brand selling low-margin products.",
      "Break-even ROAS accounts for product cost of goods sold, payment processing fees, customer service overhead, platform fees, and other operational expenses. If your break-even ROAS is 3.0, that means for every dollar you spend on ads, you need to generate at least three dollars in revenue just to cover your costs. Anything below that is a loss. Anything above it is profit.",
      "The mistake most marketers make is assuming a 2.0 or 3.0 ROAS is automatically good. It's not. A 2.5 ROAS might be excellent for your business, or it might be unacceptable depending on your margins and operating costs. That's why calculating your personal break-even number is the first step in building a sustainable ad strategy."
    ]
  },
  {
    "heading": "Using ROAS Data to Identify Campaign Candidates for Killing",
    "paragraphs": [
      "Once you know your break-even ROAS, you have a clear decision line. Campaigns performing below that line are destroying profit, even if they appear to be driving revenue. For example, if your break-even ROAS is 4.0 and a campaign is delivering 3.2 ROAS, you're losing money on every conversion. Scale that across a month of ad spend, and the losses become significant.",
      "The key is consistency and measurement. Look at 7-day, 14-day, and 30-day rolling ROAS figures. Don't kill a campaign based on three days of bad data. But if a campaign has been running for four weeks and consistently underperforms your threshold, that's a clear signal to pause it. Some campaigns have legitimate ramp-up periods, especially new audiences or untested creative. Give them room to optimize—but set a deadline and stick to it.",
      "Sort your campaigns into three categories: performers (above break-even), breakeven (within 0.2 of your threshold), and losers (significantly below). Allocate your budget toward the performers, give breakeven campaigns a window to improve or a test budget to validate, and prepare to kill the losers."
    ]
  },
  {
    "heading": "A Worked Example: Campaign Performance Analysis",
    "paragraphs": [
      "Let's walk through a real scenario. You sell fitness equipment with an average order value of $150. Your product costs 40% of revenue, payment processing is 2.9%, and your operational overhead is 25% of revenue. Your break-even ROAS is 2.0.",
      "You're running four campaigns on Meta: Brand Awareness, Lookalike Audience, Interest-Based, and Retargeting. In the last 30 days, Brand Awareness delivered 3.8 ROAS on $5,000 spend. Lookalike Audience delivered 2.1 ROAS on $8,000 spend. Interest-Based delivered 1.7 ROAS on $6,000 spend. Retargeting delivered 4.2 ROAS on $3,000 spend.",
      "The killing decision is clear. Interest-Based is losing money and should be paused immediately. You're spending $6,000 to generate revenue that doesn't cover your costs. Lookalike is marginally above break-even but within variance—run it another two weeks with a hard pause date if it doesn't hit 2.3. Brand Awareness and Retargeting are both profitable and worth increasing budget. This framework prevents emotion and keeps decisions rooted in math."
    ]
  },
  {
    "heading": "Common Mistakes When Killing Campaigns",
    "paragraphs": [
      "One major mistake is keeping campaigns alive because they drive vanity metrics like impressions, clicks, or raw conversions. A campaign that generates 500 conversions at 1.5 ROAS is worse than a campaign that generates 100 conversions at 5.0 ROAS. Volume without profitability is just wasteful spending.",
      "Another mistake is waiting too long. If you're a month into a campaign and it's still underperforming, kill it. Don't wait for it to 'turn around.' Ad performance trends tend to stabilize after 100-200 conversions. If it's not working by then, it's unlikely to improve without significant changes to creative, audience, or offer.",
      "Finally, don't forget to document why campaigns are killed. Was it poor audience targeting? Weak creative? Too high customer acquisition cost? Use those learnings to inform your next campaign build and avoid repeating the same mistakes."
    ]
  },
  {
    "heading": "Automating ROAS Monitoring for Better Decisions",
    "paragraphs": [
      "Manual ROAS tracking works, but it's slow and error-prone. The best practice is to build a simple dashboard that pulls ROAS data directly from your ad platform. Calculate your break-even threshold once, set it as a reference line, and let the numbers tell you which campaigns need attention.",
      "Tools like our break-even ROAS calculator at roasintheblack.com help you establish that threshold quickly, accounting for all your cost variables in one place. Once you know your target number, monitoring becomes systematic. You can set alerts, schedule weekly reviews, and kill campaigns on a predictable cadence rather than letting underperformers bleed budget month after month.",
      "Killing campaigns isn't failure—it's discipline. The strongest marketing operations are ruthless about cutting losses and concentrating budget on what works. Track ROAS, know your break-even, and pull the trigger when the data says it's time."
    ]
  }
]

const postDate = '2026-07-22'
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
            How to Use ROAS to Decide When to Kill a Campaign
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn how to use ROAS metrics to decide when to pause or kill underperforming ad campaigns and protect your marketing budget.</p>
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
