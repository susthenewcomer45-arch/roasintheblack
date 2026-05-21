// Auto-generated 2026-05-21 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '14. How to Compare ROAS Across Different Ad Platforms | ROAS in the Black',
  description: 'Learn how to compare ROAS across Google, Meta, TikTok, and other ad platforms. Account for platform differences and optimize ad spend.',
  alternates: { canonical: 'https://roasintheblack.com/blog/14-how-to-compare-roas-across-different-ad-platforms' },
  openGraph: {
    title: '14. How to Compare ROAS Across Different Ad Platforms | ROAS in the Black',
    description: 'Learn how to compare ROAS across Google, Meta, TikTok, and other ad platforms. Account for platform differences and optimize ad spend.',
    url: 'https://roasintheblack.com/blog/14-how-to-compare-roas-across-different-ad-platforms',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "Return on ad spend, or ROAS, tells you how many dollars you earn for every dollar you spend on ads. A 3:1 ROAS means you made $3 for every $1 spent. On the surface, comparing ROAS across platforms sounds simple: higher is better. But when you're running campaigns on Google Ads, Meta, TikTok, and Pinterest simultaneously, direct comparison becomes misleading. Each platform has different cost structures, audience behaviors, and conversion mechanics that distort raw ROAS numbers.",
      "The challenge isn't just mathematical—it's strategic. A 2.5:1 ROAS on Google Shopping might actually be more profitable than a 4:1 ROAS on TikTok when you factor in platform fees, attribution windows, and operational costs. Before you reallocate your entire budget to whatever platform shows the highest ROAS, you need a framework to compare them fairly. This post walks you through that framework and shows you how to make smarter budget decisions across your ad portfolio."
    ]
  },
  {
    "heading": "Why Raw ROAS Numbers Are Deceiving",
    "paragraphs": [
      "Platform differences create apples-to-oranges comparisons. Google Search captures high-intent traffic ready to convert immediately, while TikTok reaches cold audiences early in the awareness stage. Google's last-click attribution gives full credit to the final touchpoint, while Meta's conversion window spans 28 days, capturing delayed conversions that Google misses. A user might click a TikTok ad, leave the platform, return a week later through Google Search, then buy. Google claims the conversion; TikTok doesn't get credited.",
      "Cost structures vary too. Google charges per click; Meta and TikTok charge per impression and click. Facebook pixel data relies on tracking consent, which has eroded post-iOS 14. Google Ads charges higher CPCs in competitive verticals. These structural differences mean a 2:1 ROAS on one platform might require the same operational effort and margin as a 3.5:1 ROAS on another. Raw ROAS alone doesn't tell you which platform is actually more efficient or profitable for your business."
    ]
  },
  {
    "heading": "Adjust for Attribution and Conversion Windows",
    "paragraphs": [
      "Start by standardizing how you measure conversions across platforms. Google Ads uses a 30-day click window by default. Meta measures conversions for 7 days after click or 28 days after impression. TikTok's conversion window is 3 days after click or 10 days after impression. If you compare a Facebook conversion (28-day window) against a TikTok conversion (3-day window), Facebook will naturally show higher ROAS because it captures additional assisted conversions that TikTok misses.",
      "The fix: align attribution windows across all platforms to your longest natural purchase cycle or use a consistent 7-day post-click window for all platforms. This creates an apples-to-apples comparison. If your average customer takes 10 days to convert, use a 10-day window for all platforms. Document this choice and stick with it quarterly so you can track trends accurately. Many advertisers set a 7-day click attribution window as a compromise—it's measurable, conservative, and consistent across Google, Meta, and TikTok."
    ]
  },
  {
    "heading": "Account for Platform-Specific Costs and Fees",
    "paragraphs": [
      "ROAS measures revenue against ad spend, but ad spend isn't your only cost. Some platforms charge additional fees. Meta takes a transaction fee on e-commerce conversions tracked through Shop. Google takes a percentage on product listings. Payment processors charge 2.9% plus $0.30 per transaction. If you use software to automate bidding, manage creative, or track attribution across platforms, those subscriptions reduce your true profit margin.",
      "Here's a concrete example: You spent $1,000 on Meta ads and generated $3,000 in revenue. Your raw ROAS is 3:1. But subtract 3% processor fees ($90), 2% platform transaction fees ($60), and $100 in attribution software. Your actual profit is $3,000 minus $1,000 minus $250 in costs equals $1,750. Your true operational ROAS is 1.75:1, not 3:1. Now compare this to Google Shopping, where a $1,000 spend generates $2,500 revenue with the same cost structure. True operational ROAS is 1.5:1. Meta still wins, but the margin is narrower than raw ROAS suggests."
    ]
  },
  {
    "heading": "Create a Comparison Matrix",
    "paragraphs": [
      "Build a spreadsheet to compare platforms side by side. Create columns for platform, ad spend, reported revenue, raw ROAS, conversion window, platform fees, processor fees, adjusted revenue, and true ROAS. Include CAC (customer acquisition cost) and LTV (lifetime value) if you have that data. This matrix becomes your decision-making tool. Update it monthly or quarterly to spot trends. You might find that Google's raw ROAS is lower but its true ROAS is higher due to lower fees and better audience quality.",
      "Use this matrix to identify which platform deserves budget growth and which should be scaled back. If Google Ads shows 2:1 raw ROAS but has a 7-day attribution window while Meta shows 3:1 raw ROAS with a 28-day window, and both have similar cost structures, a standardized comparison might show they're actually equally efficient. That's valuable insight—it tells you to scale both platforms rather than consolidating budget into Meta."
    ]
  },
  {
    "heading": "Know Your Break-Even ROAS for Each Platform",
    "paragraphs": [
      "The most important number is your break-even ROAS. This is the minimum ROAS you need to cover all costs—product, overhead, fulfillment, and platform fees—without losing money. Break-even ROAS differs by platform because costs differ. If your break-even ROAS is 2:1 overall but Google ads have higher CPCs, your break-even on Google might be 2.3:1. On TikTok, it might be 1.8:1.",
      "Use a tool like the break-even ROAS calculator at roasintheblack.com to determine your exact break-even point for each platform. Input your product cost, operational expenses, platform fees, and target profit margin. The calculator shows you the minimum ROAS you need per platform to stay profitable. This transforms comparison from guesswork into science. Any platform performing above your break-even ROAS is profitable; anything below is a loss. This clarity eliminates the bias toward high raw ROAS numbers and focuses your attention on true profitability. Build your budget allocation strategy around which platforms exceed their platform-specific break-even ROAS by the widest margin."
    ]
  }
]

const postDate = '2026-05-21'
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
            14. How to Compare ROAS Across Different Ad Platforms
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn how to compare ROAS across Google, Meta, TikTok, and other ad platforms. Account for platform differences and optimize ad spend.</p>
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
