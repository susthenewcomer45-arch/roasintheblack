// Auto-generated 2026-07-15 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Calculate ROAS for a Service-Based Business | ROAS in the Black',
  description: 'Learn how to calculate ROAS for service-based businesses. Master the metrics that determine profitable ad spend and break-even benchmarks.',
  alternates: { canonical: 'https://roasintheblack.com/blog/how-to-calculate-roas-for-a-servicebased-business' },
  openGraph: {
    title: 'How to Calculate ROAS for a Service-Based Business | ROAS in the Black',
    description: 'Learn how to calculate ROAS for service-based businesses. Master the metrics that determine profitable ad spend and break-even benchmarks.',
    url: 'https://roasintheblack.com/blog/how-to-calculate-roas-for-a-servicebased-business',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "Return on Ad Spend (ROAS) is the single most important metric for any marketer running paid campaigns. Whether you're spending $500 a month on Google Ads or $50,000 on Meta, knowing your ROAS tells you whether your campaigns are actually making money or burning cash. For service-based businesses—agencies, consultants, SaaS companies, and professional services—calculating ROAS accurately is even more complex because your revenue cycle is longer and your customer lifetime value is harder to predict than an ecommerce store selling a $50 product.",
      "The difference between a profitable service business and one that wastes money on ads often comes down to one question: do you know the minimum ROAS you need to break even? Most marketers don't. They run campaigns, watch impressions and clicks pile up, celebrate low cost-per-lead metrics, and wonder why their business isn't growing. This guide walks you through the exact calculation process for service businesses and shows you how to set benchmarks that actually matter."
    ]
  },
  {
    "heading": "What Is ROAS and Why Service Businesses Need It",
    "paragraphs": [
      "ROAS is straightforward in definition but often misunderstood in application. It's the revenue generated from ad campaigns divided by the amount spent on those campaigns. A ROAS of 3:1 means you earned $3 for every dollar spent on ads. A ROAS of 1:1 means you broke even. Anything below 1:1 is a loss.",
      "Service businesses face a unique challenge: revenue doesn't arrive the moment a lead converts. A consulting firm might spend $200 to acquire a lead, close that lead 60 days later for a $10,000 project, and not recognize the revenue for another 30 days after completion. This delayed revenue recognition makes it hard to calculate accurate ROAS in real time. You need to work backward from your economics and define what ROAS target actually sustains your business, rather than waiting months to see what your true ROAS was."
    ]
  },
  {
    "heading": "Breaking Down the Components of Service Business ROAS",
    "paragraphs": [
      "To calculate the ROAS you need, start with your business fundamentals. You need four numbers: your average project value, your close rate (percentage of leads that become customers), your average customer acquisition cost (ad spend divided by leads generated), and your total operating costs (including payroll, software, overhead, and profit margin).",
      "Let's work through a real example. Say you're a digital marketing agency with a $5,000 average project value. Your sales team closes 20 percent of inbound leads. You're spending $10,000 per month on ads and generating 100 leads. That's a cost per lead of $100. If 20 leads close, you've generated $100,000 in revenue against $10,000 in ad spend—a 10:1 ROAS. But here's where most agencies stop thinking too early: that 10:1 ROAS might still be unprofitable if your operating costs are $60,000 per month and you're keeping no profit. You need to know your break-even ROAS before you scale ad spend."
    ]
  },
  {
    "heading": "Calculating Your Break-Even ROAS Target",
    "paragraphs": [
      "Your break-even ROAS is the minimum return you need from ads to cover all costs and make profit. Here's the formula: (Total Operating Costs + Desired Profit) divided by Ad Spend Budgeted = Target ROAS. If your business costs $60,000 per month to run and you want to make $20,000 profit, and you plan to spend $15,000 on ads, then your break-even ROAS is ($60,000 + $20,000) / $15,000 = 5.33:1. Any ROAS below 5.33:1 means you're not hitting your profit target.",
      "This calculation forces you to be honest about what ads need to deliver. Many service businesses discover they need a 4:1 or 5:1 ROAS minimum, not the 2:1 many assume is standard. That gap between assumption and reality is where profitability is found or lost."
    ]
  },
  {
    "heading": "How to Track ROAS Accurately Over Time",
    "paragraphs": [
      "Tracking ROAS for service businesses requires discipline and proper setup. Tag every ad campaign with a unique URL parameter or lead source code so you can attribute leads back to the ad channel they came from. Use your CRM to record the revenue associated with each lead, even if it closes months later. Monthly ROAS will be noisy and unreliable; look at rolling 90-day ROAS instead to smooth out the natural variance in close rates and project sizes.",
      "Don't just track ROAS from your ad platform's native metrics. Facebook and Google will count conversions and attribute revenue based on their tracking windows and attribution models, which often overstate performance. Build your own dashboard that connects lead data to actual revenue collected, and refresh it monthly. This real ROAS is the number that matters for business decisions."
    ]
  },
  {
    "heading": "Using Break-Even ROAS to Scale Sustainably",
    "paragraphs": [
      "Once you know your break-even ROAS, you can scale with confidence. If you're running a 6:1 ROAS and your break-even is 4:1, you have a 2:1 buffer for algorithm changes, seasonality, and market shifts. You can increase ad spend by 50 percent and still be profitable, as long as your ROAS doesn't drop more than 33 percent. This calculation removes the guesswork from scaling decisions.",
      "The tools you use matter. Spreadsheets work, but they're error-prone and slow to update. The break-even ROAS calculator at roasintheblack.com lets you plug in your numbers once and instantly see the minimum ROAS you need to hit your profit goals. You can model different spending levels, close rates, and project values without rebuilding formulas. For service businesses juggling multiple campaigns and variable economics, this kind of clarity saves money and accelerates growth. Calculate your break-even ROAS today and stop guessing on your ad budgets."
    ]
  }
]

const postDate = '2026-07-15'
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
            How to Calculate ROAS for a Service-Based Business
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn how to calculate ROAS for service-based businesses. Master the metrics that determine profitable ad spend and break-even benchmarks.</p>
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
