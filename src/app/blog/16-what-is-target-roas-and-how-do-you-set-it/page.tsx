// Auto-generated 2026-05-25 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '16. What Is Target ROAS and How Do You Set It? | ROAS in the Black',
  description: 'Learn how to set target ROAS for profitable ad campaigns. Calculate break-even ROAS and optimize ad spend across Google, Meta, and TikTok.',
  alternates: { canonical: 'https://roasintheblack.com/blog/16-what-is-target-roas-and-how-do-you-set-it' },
  openGraph: {
    title: '16. What Is Target ROAS and How Do You Set It? | ROAS in the Black',
    description: 'Learn how to set target ROAS for profitable ad campaigns. Calculate break-even ROAS and optimize ad spend across Google, Meta, and TikTok.',
    url: 'https://roasintheblack.com/blog/16-what-is-target-roas-and-how-do-you-set-it',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "Return on ad spend, or ROAS, measures how much revenue you generate for every dollar spent on advertising. If you spend $1,000 and earn $5,000 in revenue, your ROAS is 5:1 or simply 5. But knowing your actual ROAS isn't enough—you need to know your target ROAS, the benchmark that tells you whether your campaigns are actually profitable. Without a target ROAS, you're flying blind, scaling campaigns that might look good on paper but drain your budget in reality.",
      "Setting a target ROAS forces you to work backward from your business fundamentals. It connects your ad spend directly to your margins, operational costs, and growth goals. Most performance marketers skip this step and chase vanity metrics instead. They celebrate a 3:1 ROAS without asking whether 3:1 covers their costs and leaves room for profit. That's a dangerous mistake. This guide shows you how to calculate a realistic target ROAS and use it to manage ad spend across all platforms."
    ]
  },
  {
    "heading": "The Difference Between Actual ROAS and Target ROAS",
    "paragraphs": [
      "Actual ROAS is what you've already achieved. It's historical. If your Google Shopping campaign generated $15,000 in revenue from $3,000 in ad spend last month, your actual ROAS was 5:1. Target ROAS is forward-looking. It's the minimum ROAS you need to hit profitability, accounting for your cost of goods, fulfillment, platform fees, and other overhead.",
      "The gap between these two numbers is where most advertisers get confused. You might hit a 4:1 actual ROAS and think you're winning, but if your target ROAS is 6:1, you're actually losing money on every sale. Conversely, a 3:1 actual ROAS might exceed your target if your margins are high and your cost structure is lean. Actual ROAS tells you performance; target ROAS tells you viability."
    ]
  },
  {
    "heading": "How to Calculate Your Target ROAS",
    "paragraphs": [
      "Start with your gross profit margin. If your average order value is $100 and your cost of goods sold is $40, your gross profit per order is $60, or 60%. Now factor in your operational costs: payment processing fees (typically 2.9% plus $0.30 per transaction), fulfillment and shipping, customer service, returns, and overhead. These variable and fixed costs reduce your true profit pool.",
      "Let's work through an example. Your AOV is $100 with a 60% gross margin ($60 profit per order). Your payment processing fee takes 3% of revenue ($3). Fulfillment costs $8 per order. Returns and chargebacks average 5% of orders. Your remaining profit per order is $60 minus $3 minus $8 minus $5, which equals $44 per order, or a 44% net margin. If you want to keep 30% of revenue as profit and allocate 14% to ad spend, your target ROAS is 7.14:1. Spend $14 per $100 order, keep $30 profit, cover all other costs. At a lower target ROAS, you either cut into your profit margin or can't afford your campaigns at scale.",
      "The math shifts based on your business model. SaaS companies with high margins might target 5:1 ROAS and still be very profitable. Low-margin, high-volume retailers might need 8:1 or higher. The key is doing the math for your specific situation, not copying someone else's benchmarks."
    ]
  },
  {
    "heading": "Why Most Brands Set Their Target ROAS Too Low",
    "paragraphs": [
      "Performance marketers often reverse-engineer a target ROAS from platform-suggested benchmarks or industry gossip. A peer mentions they run profitably at 3:1 ROAS, so you adopt 3:1 as your target. But that peer might have different margins, supplier costs, and overhead. More dangerously, they might not actually be profitable—they might be reinvesting cash flow and calling it growth.",
      "Another common mistake is ignoring long-term customer value. If a customer buys once and never returns, you need a higher first-purchase ROAS to justify the acquisition cost. If repeat purchase rate is 40% and your customer lifetime value is 2.5x their first order, you can afford a lower ROAS on initial acquisition. Many brands underestimate their LTV and set conservative, low target ROAS figures that cap their growth potential. Use actual historical data on repeat purchase behavior, not estimates."
    ]
  },
  {
    "heading": "Using Target ROAS to Optimize Ad Spend",
    "paragraphs": [
      "Once you've calculated your true target ROAS, use it as a guardrail for scaling. If your actual ROAS is above target, you have room to increase budget. If it's below target, pause spending or optimize the campaign before adding more money. Many platforms now offer automated bidding strategies tied to ROAS targets—Google's Target ROAS bidding on Performance Max, Meta's ROAS-based campaign optimization. These tools work best when you've set a realistic target, not a wishful one.",
      "Monitor ROAS at the campaign, ad set, and product level. A blended ROAS of 4:1 might hide the fact that one product is at 8:1 while another is at 2:1. Reallocate budget toward winners and kill underperformers. Also track ROAS by traffic source and device. Mobile might be 3:1 while desktop is 5:1. Adjust bids accordingly. The goal isn't to hit your target ROAS on every single campaign—it's to hit it on average across your portfolio, while pruning the losers."
    ]
  },
  {
    "heading": "Bringing It Together: Calculate, Monitor, Adjust",
    "paragraphs": [
      "Setting a target ROAS is a one-time calculation grounded in your business fundamentals. But achieving that target across channels and seasons requires ongoing discipline. Review your target ROAS every quarter. If your cost of goods, shipping, or operational expenses change, recalculate. If your repeat purchase rate improves, you might lower your target and allocate more budget to acquisition.",
      "Start by calculating your break-even ROAS using your actual margins and costs—not guesses. Our free break-even ROAS calculator at roasintheblack.com walks you through the math and gives you a precise target you can defend to stakeholders and use to make spending decisions. From there, build your ad strategy around hitting that number, not exceeding arbitrary benchmarks. That's how profitable scaling works."
    ]
  }
]

const postDate = '2026-05-25'
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
            16. What Is Target ROAS and How Do You Set It?
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn how to set target ROAS for profitable ad campaigns. Calculate break-even ROAS and optimize ad spend across Google, Meta, and TikTok.</p>
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
