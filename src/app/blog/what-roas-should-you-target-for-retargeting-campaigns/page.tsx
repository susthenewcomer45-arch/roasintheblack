// Auto-generated 2026-07-23 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What ROAS Should You Target for Retargeting Campaigns? | ROAS in the Black',
  description: 'Learn what ROAS targets work best for retargeting campaigns. Calculate break-even ROAS and optimize ad spend across platforms.',
  alternates: { canonical: 'https://roasintheblack.com/blog/what-roas-should-you-target-for-retargeting-campaigns' },
  openGraph: {
    title: 'What ROAS Should You Target for Retargeting Campaigns? | ROAS in the Black',
    description: 'Learn what ROAS targets work best for retargeting campaigns. Calculate break-even ROAS and optimize ad spend across platforms.',
    url: 'https://roasintheblack.com/blog/what-roas-should-you-target-for-retargeting-campaigns',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "Retargeting campaigns are some of the highest-performing ad efforts you can run, but only if you set realistic and data-driven ROAS targets. Too many marketers chase industry benchmarks without accounting for their own cost structure, margins, and business model. The result? They either leave money on the table or drain budgets on campaigns that look good on paper but destroy profitability.",
      "The question isn't what ROAS should you target in general—it's what ROAS do you need to hit to actually make money. That number is different for every brand, and it starts with understanding your break-even point. Once you know that baseline, you can build a retargeting strategy that scales with confidence instead of guesswork."
    ]
  },
  {
    "heading": "Why Retargeting ROAS Differs From Cold Traffic",
    "paragraphs": [
      "Retargeting audiences have already shown intent. They've visited your site, added items to cart, or engaged with your content. This familiarity means conversion rates are higher and cost per acquisition is lower compared to prospecting campaigns.",
      "Because of this warm-audience advantage, your ROAS targets for retargeting should be lower than for cold traffic. If your cold-traffic prospecting campaigns target 3:1 ROAS, your retargeting campaigns might sustainably hit 1.5:1 or 2:1. The lower target isn't a failure—it reflects the economics of the audience you're reaching and the diminishing returns as you push spend deeper into the funnel.",
      "This is where many brands get confused. They see lower ROAS on retargeting and assume something's broken. In reality, retargeting is often where the highest-margin revenue lives because acquisition costs are so much lower than cold campaigns."
    ]
  },
  {
    "heading": "Calculate Your Break-Even ROAS First",
    "paragraphs": [
      "Before you pick a target ROAS for retargeting, you need to know your break-even point. This is the minimum ROAS required to cover your ad spend and product costs with zero profit. Let's work through an example.",
      "Say you're selling a product with a 50% profit margin. Your cost of goods sold and fulfillment total 50% of revenue. You also have operating costs—payroll, software, overhead—that consume 20% of revenue. That leaves 30% profit margin available for ad spend and marketing. If you want to spend 10% of revenue on ads and still hit a 20% net profit margin, your break-even ROAS is 1.43:1. Here's why: You need to generate 1.43 dollars in revenue for every dollar spent on ads just to break even after COGS and operational expenses. Anything above 1.43:1 is profit.",
      "For retargeting specifically, this break-even number becomes your floor. You should never intentionally run retargeting campaigns below break-even. Your target ROAS should sit 20 to 50 percent above that break-even threshold, depending on how aggressive you want to be."
    ]
  },
  {
    "heading": "Typical Retargeting ROAS Ranges by Platform",
    "paragraphs": [
      "Meta (Facebook and Instagram) retargeting typically delivers 2:1 to 4:1 ROAS for ecommerce brands. Google Shopping and Search retargeting often hit 3:1 to 5:1 because the intent signal is stronger—users are actively searching for related products. TikTok retargeting is still maturing, but brands are seeing 1.5:1 to 3:1 depending on audience size and creative quality.",
      "These ranges assume you have warm audiences of at least 500 to 1,000 people, proper audience segmentation, and creative that resonates with past visitors. If your retargeting ROAS consistently falls below these ranges, examine your audience setup, bidding strategy, and ad creative before deciding retargeting doesn't work for your business.",
      "The platform matters, but so does the audience segment. Website visitors who abandoned carts often have higher conversion rates than general site visitors. Dynamic product ads outperform static ads. Email list retargeting outperforms cold website retargeting. Segment aggressively and assign different ROAS targets to each."
    ]
  },
  {
    "heading": "Setting Realistic Targets Based on Your Margins",
    "paragraphs": [
      "A healthy retargeting ROAS target balances profitability with scale. If your break-even ROAS is 1.2:1 and you want a 30% profit margin on ad spend, target 1.7:1 to 2:1. If your break-even is 1.5:1, target 2.2:1 to 2.8:1. The gap between break-even and target depends on how much risk you're comfortable taking and how confident you are in your data.",
      "For brands with higher margins (40% profit margin or more), you can target lower ROAS numbers because the absolute profit per transaction is larger. For brands with thin margins, you need higher ROAS targets because every transaction contributes less to fixed costs and profit. This is why a 2:1 ROAS might be excellent for a luxury brand but inadequate for a grocery business.",
      "Also consider seasonality and growth phase. During peak seasons or when testing new audiences, you might accept lower ROAS temporarily. During slow periods, tighten targets to preserve cash flow. Startups often run retargeting closer to break-even to maximize growth, while mature brands maintain higher targets for stability."
    ]
  },
  {
    "heading": "Stop Guessing—Use Data to Set Targets",
    "paragraphs": [
      "Setting ROAS targets shouldn't involve copying benchmarks from other brands or blindly following platform recommendations. Your target is a function of your economics, not industry averages. Use tools like the break-even ROAS calculator at roasintheblack.com to plug in your actual margins, COGS, and operational costs. The calculator shows exactly what ROAS you need to cover expenses and hit your profit goals. From there, assign platform-specific and audience-segment-specific targets based on historical performance.",
      "Once you know your numbers, retargeting stops being a guessing game. You'll know when a campaign is genuinely profitable versus when it's just burning budget. You'll scale confidently because you understand the math. That's the foundation of sustainable performance marketing."
    ]
  }
]

const postDate = '2026-07-23'
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
            What ROAS Should You Target for Retargeting Campaigns?
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Learn what ROAS targets work best for retargeting campaigns. Calculate break-even ROAS and optimize ad spend across platforms.</p>
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
