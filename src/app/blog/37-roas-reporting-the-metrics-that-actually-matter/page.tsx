// Auto-generated 2026-06-24 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '37. ROAS Reporting: The Metrics That Actually Matter | ROAS in the Black',
  description: 'Learn which ROAS metrics matter for profitable ad campaigns. Master break-even ROAS, true profitability, and ad spend optimization.',
  alternates: { canonical: 'https://roasintheblack.com/blog/37-roas-reporting-the-metrics-that-actually-matter' },
  openGraph: {
    title: '37. ROAS Reporting: The Metrics That Actually Matter | ROAS in the Black',
    description: 'Learn which ROAS metrics matter for profitable ad campaigns. Master break-even ROAS, true profitability, and ad spend optimization.',
    url: 'https://roasintheblack.com/blog/37-roas-reporting-the-metrics-that-actually-matter',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "ROAS—return on ad spend—is everywhere in performance marketing. But here's the uncomfortable truth: most marketers are tracking the wrong ROAS number. They celebrate a 3:1 ROAS while their campaigns lose money. They cut budgets from winners because they misunderstand what profitability actually means. The noise around ROAS metrics drowns out the signal you need to run a sustainable business.",
      "The difference between vanity metrics and actionable data comes down to one thing: understanding your true break-even ROAS. This number is unique to your business model, your costs, and your margins. Once you know it, you can make confident decisions about scaling, pausing, or optimizing ad spend. Everything else flows from there."
    ]
  },
  {
    "heading": "ROAS vs. Profit: Why Your Dashboard Lies to You",
    "paragraphs": [
      "Most platforms—Google Ads, Meta Ads Manager, TikTok—report ROAS as revenue divided by ad spend. That's useful, but it's incomplete. A $1,000 ad spend generating $3,000 in revenue looks great on the surface. But what if your product costs $1,500 to create and ship? What if you have fulfillment fees, payment processing costs, and overhead to cover? That 3:1 ROAS becomes a loss.",
      "This is where break-even ROAS enters the conversation. Break-even ROAS is the revenue multiplier you need to cover every cost associated with a sale—not just the product cost, but ad spend, COGS, shipping, returns, payment fees, and operational overhead. Your true break-even ROAS is almost always higher than the raw revenue-to-ad-spend ratio platforms report. If your break-even ROAS is 2.5:1 and you're running campaigns at 3:1, you're profitable. If you're at 2.8:1, you're losing money."
    ]
  },
  {
    "heading": "The Math Behind Break-Even ROAS",
    "paragraphs": [
      "Let's work through a concrete example. You sell a product for $50. Your cost of goods sold is $12. Shipping and fulfillment cost $8. Payment processing takes 3 percent of the sale, or $1.50. You have fixed operating costs—rent, salaries, software—that amount to $2 per order when spread across your volume. That's $23.50 in total costs per $50 sale, leaving you $26.50 in gross profit.",
      "Now your ad spend enters the equation. If you want to make a profit, your ad spend can't exceed that $26.50 margin. If you spend $10 per customer acquired, your actual profit per customer is $16.50. To figure out your break-even ROAS, divide your total cost per order by your selling price. Here: $23.50 divided by $50 equals 0.47. That means you need to cover costs with 47 cents of every revenue dollar. Your break-even ROAS is therefore 1.47:1—any revenue above that is profit. Scale ad spend confidently up to that point; go above it and you're burning cash.",
      "Most ecommerce brands discover their break-even ROAS is between 1.5:1 and 3:1, depending on margins and operational costs. SaaS companies often push higher because customer lifetime value extends far beyond the initial transaction. The number isn't universal—it's personal to your business. That's why calculated, data-driven break-even analysis matters more than industry benchmarks."
    ]
  },
  {
    "heading": "Scaling Ad Spend Without Destroying Margins",
    "paragraphs": [
      "Once you know your break-even ROAS, scaling becomes straightforward. If your current campaigns are running above break-even, the path forward is clear: increase ad spend. You have margin to work with. If they're below break-even, the priority is optimization before scaling—tighten creative, refine audience targeting, improve landing page conversion, or pause underperforming placements.",
      "Many marketers reverse this order. They scale first and optimize later, hoping to hit break-even through volume. This almost never works. Scaling amplifies both wins and losses. If you scale a campaign that's already below break-even, you're just losing money faster. The sequence should always be: calculate break-even, confirm you're above it, then scale with confidence. Watch ROAS closely as you increase spend—if it drops below your break-even threshold, pause and optimize before pushing further."
    ]
  },
  {
    "heading": "Beyond ROAS: The Metrics That Predict Growth",
    "paragraphs": [
      "ROAS tells you if a campaign is profitable today. But it doesn't tell you if it will be profitable tomorrow. Customer acquisition cost relative to lifetime value matters. Repeat purchase rate matters. Cohort performance matters. A first-purchase ROAS of 2.5:1 looks weak until you factor in that 40 percent of your customers buy again within 90 days, effectively doubling their value to your business.",
      "Build your reporting around layers. Layer one is break-even ROAS—is this campaign above or below profitability? Layer two is margin per customer. Layer three is cohort lifetime value. Layer four is channel performance over time. Together, these metrics show you not just where you stand, but where you're headed. A campaign with declining ROAS but rising repeat purchase rate might be worth protecting. A campaign with stable ROAS but customer acquisition cost rising faster than average revenue per user might be in trouble."
    ]
  },
  {
    "heading": "Getting Your Break-Even Number Right",
    "paragraphs": [
      "The accuracy of your break-even calculation depends on the accuracy of your cost data. Most businesses undercount operational costs. They forget shipping overages, payment processor fees, customer service labor, returns and refunds, platform fees, and software subscriptions. Sit down with your financial records. Calculate total costs for the last 30 days, divide by the number of orders, and build that into your break-even model. Update it quarterly as your business evolves.",
      "This is where tools designed for this specific purpose save time and prevent costly mistakes. The ROAS calculator at roasintheblack.com lets you input your margins, costs, and campaign data to instantly calculate your break-even ROAS and benchmark it against your current performance. No guessing, no spreadsheet errors, no half-remembered percentages. Plug in your numbers and see exactly where you stand. That clarity turns ROAS reporting from a vanity exercise into a real profit driver."
    ]
  }
]

const postDate = '2026-06-24'
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
            37. ROAS Reporting: The Metrics That Actually Matter
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn which ROAS metrics matter for profitable ad campaigns. Master break-even ROAS, true profitability, and ad spend optimization.</p>
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
