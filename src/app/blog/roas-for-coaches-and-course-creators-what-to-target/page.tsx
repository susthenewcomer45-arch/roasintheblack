// Auto-generated 2026-08-11 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'ROAS for Coaches and Course Creators: What to Target | ROAS in the Black',
  description: 'Learn what ROAS to target as a coach or course creator. Calculate break-even ROAS and scale profitably with data-driven ad spend decisions.',
  alternates: { canonical: 'https://roasintheblack.com/blog/roas-for-coaches-and-course-creators-what-to-target' },
  openGraph: {
    title: 'ROAS for Coaches and Course Creators: What to Target | ROAS in the Black',
    description: 'Learn what ROAS to target as a coach or course creator. Calculate break-even ROAS and scale profitably with data-driven ad spend decisions.',
    url: 'https://roasintheblack.com/blog/roas-for-coaches-and-course-creators-what-to-target',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "If you're a coach or course creator running paid ads, you've probably heard the term ROAS thrown around constantly. Return on Ad Spend sounds simple: for every dollar you spend on ads, how many dollars come back? But the reality is messier. A 4:1 ROAS might be fantastic for one business and a disaster for another. The difference comes down to your cost structure, margins, and what happens after the sale. Before you optimize toward any ROAS target, you need to know what number actually keeps your business alive and growing.",
      "Most coaches and course creators operate with higher margins than ecommerce brands, which means you can afford to spend less aggressively on ads and still stay profitable. But many still overspend chasing vanity metrics or underspend because they don't understand their true break-even point. This post walks through how to set the right ROAS target for your business, why the math matters, and how to make smarter decisions about where your ad budget goes."
    ]
  },
  {
    "heading": "Why ROAS Alone Doesn't Tell the Whole Story",
    "paragraphs": [
      "ROAS measures revenue attributed to your ads divided by the amount you spent on those ads. If you spent $1,000 on Facebook ads and generated $4,000 in attributed revenue, your ROAS is 4:1 or 4x. Sounds straightforward until you realize that revenue and profit are not the same thing.",
      "A coaching program with a $2,000 price tag and 70% margins looks completely different from a $2,000 course with 90% margins. Both might hit a 3:1 ROAS, but one is far more sustainable. Similarly, a client who buys your $500 course and never engages is worth less than a client who buys your $500 course and becomes a repeat customer or refers five friends. ROAS captures the first transaction only, not the lifetime value of the customer or the operational costs that come with serving them."
    ]
  },
  {
    "heading": "Calculating Your Break-Even ROAS",
    "paragraphs": [
      "Break-even ROAS is the minimum return you need from your ads to cover your ad spend and nothing else. To find it, divide 100 by your profit margin percentage. If your profit margin is 50%, your break-even ROAS is 100÷50 = 2:1. If your margin is 70%, break-even is 100÷70 = 1.43:1.",
      "Let's work through a real example. Say you're selling a $1,000 group coaching program. Your cost of goods sold and delivery costs total $200. That leaves $800 gross profit, or an 80% margin. Your break-even ROAS is 100÷80 = 1.25:1. This means if you spend $1,000 on ads and generate $1,250 in revenue, you've covered your ad costs and operational expenses with zero profit. Any ROAS above 1.25:1 is profit. Now, you shouldn't stop there and run ads at break-even—you need buffer room for payment processing fees, customer service time, refunds, and attribution inaccuracy. A safer target for this example might be 2:1 or 2.5:1, which gives you real profit and accounts for real-world inefficiencies."
    ]
  },
  {
    "heading": "What ROAS Should You Actually Target?",
    "paragraphs": [
      "The answer depends on your stage, risk tolerance, and confidence in attribution. Early-stage coaches and course creators should aim for 2:1 to 3:1 ROAS minimum. This accounts for the fact that your attribution model is probably imperfect—not all conversions get credited to ads, some conversions happen offline or through multiple channels, and some customers come back later without triggering a new ad click.",
      "Established creators with consistent revenue and lower customer acquisition costs can sometimes sustain campaigns at 1.5:1 to 2:1 ROAS, especially if they have strong customer lifetime value data. But higher ROAS targets (3:1 to 5:1) are worth pursuing if your margins support it or if you're reinvesting profits back into scaling faster. The key is knowing your actual margin, not guessing. Too many creators optimize toward a 4:1 ROAS benchmark they read online, only to discover they're barely breaking even once refunds and support costs are factored in."
    ]
  },
  {
    "heading": "Scaling Ad Spend Without Abandoning Profitability",
    "paragraphs": [
      "Once you've identified your target ROAS, the next move is testing whether you can maintain it at higher spend levels. Doubling your ad budget doesn't automatically mean you'll hit the same ROAS. Audience saturation, higher CPCs, and audience fatigue typically push ROAS down as you scale. Plan for a 10 to 30 percent decline in ROAS as you increase daily or weekly spend.",
      "If your target is 2.5:1 at $500 daily spend, expect closer to 2:1 at $1,000 daily spend. Build that degradation into your scaling plan. Increase spend incrementally—by 20 to 25 percent every week or two—and pause before ROAS falls below your true break-even point. Monitor this in real time through your ad platform, but also back it up with your own spreadsheets. Ad platform attribution is useful but imperfect, especially for courses and coaching where the sale might happen days after the initial click."
    ]
  },
  {
    "heading": "Use a Calculator to Remove Guesswork",
    "paragraphs": [
      "The math above is straightforward, but running the numbers manually every time you review campaign performance gets tedious. A break-even ROAS calculator removes the guesswork and lets you instantly see what target makes sense for your margin and cost structure. By plugging in your numbers once, you can run multiple scenarios: what if margins improve, what if customer service costs change, what if you lower your ad spend by 30 percent?",
      "Tools like the free calculator at roasintheblack.com are built specifically for this. Input your profit margin, and the calculator shows your break-even ROAS and recommended target ranges based on industry benchmarks. You can then use that number as your north star when making decisions about which campaigns to scale, pause, or shut down. Data-driven decisions beat gut feelings every time, especially when ad platforms are constantly changing their algorithms and attribution windows."
    ]
  }
]

const postDate = '2026-08-11'
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
            ROAS for Coaches and Course Creators: What to Target
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn what ROAS to target as a coach or course creator. Calculate break-even ROAS and scale profitably with data-driven ad spend decisions.</p>
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

        <RelatedArticles currentSlug="roas-for-coaches-and-course-creators-what-to-target" />

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
