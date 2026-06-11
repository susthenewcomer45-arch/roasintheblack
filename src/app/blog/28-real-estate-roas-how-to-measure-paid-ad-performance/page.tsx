// Auto-generated 2026-06-11 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '28. Real Estate ROAS: How to Measure Paid Ad Performance | ROAS in the Black',
  description: 'Learn how to measure paid ad performance in real estate. Calculate the ROAS you need to break even and run profitable campaigns.',
  alternates: { canonical: 'https://roasintheblack.com/blog/28-real-estate-roas-how-to-measure-paid-ad-performance' },
  openGraph: {
    title: '28. Real Estate ROAS: How to Measure Paid Ad Performance | ROAS in the Black',
    description: 'Learn how to measure paid ad performance in real estate. Calculate the ROAS you need to break even and run profitable campaigns.',
    url: 'https://roasintheblack.com/blog/28-real-estate-roas-how-to-measure-paid-ad-performance',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "Real estate agents and brokers spend thousands of dollars every month on paid advertising across Google, Meta, TikTok, and other platforms. Yet many of them have no clear picture of whether those ads are actually making money. They know their ad spend, they see clicks and impressions, but when it comes to understanding return on ad spend (ROAS), the picture gets murky fast. This confusion costs real estate businesses millions in wasted budget every year.",
      "ROAS is the metric that connects spending to earning. It's the ratio of revenue generated from ads divided by the cost of running those ads. For real estate professionals, mastering ROAS isn't optional—it's the difference between scaling a profitable advertising operation and throwing money at channels that don't convert. This guide walks you through measuring ROAS, understanding what your number needs to be, and building ad campaigns that actually generate leads and closings."
    ]
  },
  {
    "heading": "What ROAS Means for Real Estate Marketers",
    "paragraphs": [
      "ROAS is expressed as a ratio or percentage. A ROAS of 3:1 means you earn three dollars for every dollar spent on ads. A ROAS of 200% means the same thing, just expressed differently. For real estate, ROAS calculation can feel complicated because commissions don't arrive the same day as ad clicks. But the principle remains straightforward: track your ad spend, track the revenue from clients acquired through those ads, and divide revenue by cost.",
      "The challenge in real estate is attribution. A buyer might click your Facebook ad, visit your website, then call you three weeks later after seeing a Google search result. Which channel gets credit? The answer matters because it affects how you allocate budget. Smart real estate marketers use UTM parameters, CRM integrations, and call tracking to assign revenue back to the right ad platform. Without this tracking infrastructure, you're flying blind."
    ]
  },
  {
    "heading": "Real Estate ROAS: A Worked Example",
    "paragraphs": [
      "Let's say you're a residential real estate agent running Google Search and Meta ads across your market. In one month, you spend $3,000 on Google and $2,000 on Meta—$5,000 total ad spend. You acquire 12 leads from Google and 8 leads from Meta. Four of the Google leads close at an average commission of $8,000. Two of the Meta leads close at $8,000 each. Total revenue: $32,000. Your ROAS is $32,000 divided by $5,000, which equals 6.4:1 or 640%.",
      "But here's where most real estate marketers stop being analytical. They see 6.4:1 and think 'that's great, we're profitable.' Maybe they are. Or maybe those closing rates and timelines are outliers. Or maybe the revenue attribution is wrong. A more rigorous approach asks: what's the minimum ROAS I need to break even? What's the minimum ROAS I need to hit my profit target? Once you know these numbers, you can evaluate each channel separately, kill underperformers, and double down on winners."
    ]
  },
  {
    "heading": "How to Calculate Your Break-Even ROAS",
    "paragraphs": [
      "Break-even ROAS is the minimum return you need to cover your ad spend and operational costs. It's different from total ROAS because it accounts for the cost of servicing leads and operating your business. Say your ad spend is $5,000 in a month, but you also have payroll, software, and admin costs tied to lead management. If those costs add another $3,000, your total cost to acquire leads is $8,000. If you want to break even—not profit, just break even—you need $8,000 in revenue back.",
      "For many real estate agents, break-even ROAS ranges from 2:1 to 4:1 depending on commission rates, deal size, and operational efficiency. A high-ticket luxury market with $20,000 commissions per deal can afford a much lower ROAS than a volume-based market chasing $2,000 commissions. Knowing your break-even number stops you from scaling ads that look good on paper but don't actually cover costs. It also gives you a clear profit target: anything above break-even is margin."
    ]
  },
  {
    "heading": "Measuring ROAS Across Channels and Time",
    "paragraphs": [
      "The real estate sales cycle doesn't fit neatly into a calendar month. A lead acquired in January might close in April or May. This creates lag between ad spend and revenue recognition. Most real estate ROAS calculations use a trailing 90-day or 120-day window to account for this delay. This means your February ad spend gets matched against closings from February, March, and April. It's less precise than daily attribution, but it's realistic.",
      "Track ROAS separately by channel and by ad account. Google Ads ROAS might look different from Meta because their audiences, intent levels, and conversion rates differ. Google Search captures high-intent buyers actively looking for agents. Meta reaches broader audiences with awareness and consideration content. One might deliver 5:1 ROAS while the other delivers 2.5:1. Both can be worth running if they clear your break-even threshold, but you need to know the difference to allocate budget wisely."
    ]
  },
  {
    "heading": "Taking Action on Your ROAS Data",
    "paragraphs": [
      "Once you're measuring ROAS, the next step is optimization. If a channel is delivering below your break-even number, you have options: improve targeting and ad creative to boost conversion rates, lower your cost-per-click through better keyword strategy or audience refinement, or pause the channel entirely. Real estate agents often make the mistake of accepting low-performing channels because they're 'still getting leads.' But leads that don't convert or don't justify their cost are expensive noise.",
      "Use the break-even ROAS calculator at roasintheblack.com to determine your exact target based on your commission structure, deal frequency, and business model. Input your ad spend, your average deal value, and your target profit margin. The tool calculates the ROAS you need to hit. Then measure actual performance against that benchmark. If you're hitting your number, scale. If you're missing it, diagnose why and fix it. This discipline separates real estate marketers who grow sustainably from those who spend without thinking."
    ]
  }
]

const postDate = '2026-06-11'
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
            28. Real Estate ROAS: How to Measure Paid Ad Performance
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn how to measure paid ad performance in real estate. Calculate the ROAS you need to break even and run profitable campaigns.</p>
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
