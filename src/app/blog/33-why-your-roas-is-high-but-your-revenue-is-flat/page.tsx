// Auto-generated 2026-06-18 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '33. Why Your ROAS Is High But Your Revenue Is Flat | ROAS in the Black',
  description: 'High ROAS doesn\'t guarantee profit. Learn why your ad spend metrics mask flat revenue and how to fix it.',
  alternates: { canonical: 'https://roasintheblack.com/blog/33-why-your-roas-is-high-but-your-revenue-is-flat' },
  openGraph: {
    title: '33. Why Your ROAS Is High But Your Revenue Is Flat | ROAS in the Black',
    description: 'High ROAS doesn\'t guarantee profit. Learn why your ad spend metrics mask flat revenue and how to fix it.',
    url: 'https://roasintheblack.com/blog/33-why-your-roas-is-high-but-your-revenue-is-flat',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "You're running ads. Your ROAS looks solid—maybe 3:1, 4:1, even 5:1. Your campaigns are converting. Your CTR is climbing. Everything on the dashboard screams success. But when you look at your actual revenue and profit, something doesn't add up. The money isn't flowing the way the metrics suggest it should. This is one of the most common blind spots in digital marketing, and it's costing brands millions in wasted ad spend every year.",
      "The problem is that ROAS measures efficiency, not profitability. A high ROAS is a helpful signal—it means your ads are generating revenue relative to what you're spending on them. But it doesn't tell you whether you're actually making money. It doesn't account for margins, operational costs, or the full picture of your business economics. You can have a phenomenal ROAS and still be losing money on every sale. Understanding this gap is the difference between vanity metrics and real business growth."
    ]
  },
  {
    "heading": "The ROAS Illusion: Why the Numbers Lie",
    "paragraphs": [
      "ROAS is calculated as revenue divided by ad spend. It's simple, which is why everyone uses it. A 3:1 ROAS means for every dollar you spend on ads, you generate three dollars in revenue. On its surface, that sounds profitable. But it completely ignores your cost of goods sold, fulfillment, customer service, returns, refunds, and overhead. If your product has a 40% margin and you're spending 30% of revenue on ads, you're already underwater before you account for anything else.",
      "Here's a real example: You sell a product for $100. Your COGS is $60. Your ad spend to acquire this customer is $20. Your ROAS is 5:1 because you're generating $100 in revenue from a $20 ad spend. Looks great. But your actual profit is $20 per sale ($100 revenue minus $60 COGS minus $20 ad spend). If you're also paying for platform fees, shipping, returns processing, and customer support, that $20 margin evaporates fast. Many brands discover they're operating at break-even or at a loss while celebrating their ROAS."
    ]
  },
  {
    "heading": "The Scale Trap: More Sales, Same Profit",
    "paragraphs": [
      "One of the sneakiest ways ROAS misleads you is during scaling. You increase your ad budget from $5,000 to $50,000 per month. Your ROAS stays stable at 3:1. Revenue jumps from $15,000 to $150,000. You're thrilled. But your absolute profit might actually be lower because your marginal unit economics have shifted. As you scale, your CAC increases. You're bidding higher. You're reaching colder audiences. Your conversion rate drops slightly. Your ROAS holds steady, but you're acquiring customers at a higher cost, leaving less room for profit.",
      "The other issue is that scale often means cash flow stress. You're spending $50,000 upfront on ads before customers pay you. Inventory levels rise. Returns increase as you sell to less qualified buyers. Your cost structure becomes more complex. A flat or declining profit margin across higher volume is a recipe for financial trouble, yet a stable ROAS will never warn you about it."
    ]
  },
  {
    "heading": "What You Should Actually Be Tracking",
    "paragraphs": [
      "Instead of obsessing over ROAS alone, start with break-even ROAS. This is the ROAS you need to hit to cover all your costs—not just ad spend, but COGS, shipping, refunds, payment processing, customer support, and fixed overhead. Once you know your break-even ROAS, you can calculate the minimum ad spend efficiency required to run a profitable business. Many brands discover their break-even ROAS is 2:1 or higher, meaning a 3:1 ROAS that looks healthy is actually just barely profitable.",
      "Next, track profit per customer, not just revenue per customer. Work backwards from your target profit margin. If you want to make $20 profit per order and your product costs $60 to produce and deliver, you need to generate $80 in revenue and spend no more than $0 on ads for that margin—which is impossible. So the real question becomes: given your product cost and operational expenses, what's the maximum you can spend on ads per customer to hit your target profit? That number should drive all your decisions, not ROAS."
    ]
  },
  {
    "heading": "Building a Real Profitability Dashboard",
    "paragraphs": [
      "Your dashboard should include: revenue, ad spend, ROAS, COGS, customer acquisition cost, lifetime value, profit per order, and total profit. Track these weekly or daily, not just monthly. Watch for the spread between ROAS and actual profit widening—that's your signal that something has shifted in your cost structure. Are refunds increasing? Is your AOV dropping while CAC stays constant? Is shipping cost rising? These factors don't show up in ROAS but they destroy profitability.",
      "If you're not sure what your break-even ROAS should be, calculate it. Take your total monthly costs including ad spend, product costs, fulfillment, overhead, and customer acquisition expenses. Divide by your expected revenue. That's your minimum ROAS threshold. Tools like the break-even ROAS calculator at roasintheblack.com make this straightforward—input your margins and expenses, and you'll see exactly what ROAS you need to hit profitability targets. Once you know that number, you can stop chasing vanity metrics and start building a business."
    ]
  },
  {
    "heading": "The Path Forward",
    "paragraphs": [
      "High ROAS is not the goal. Profitable growth is. You need ROAS that's healthy relative to your costs, not impressive relative to industry benchmarks. A 2:1 ROAS that generates $50,000 in monthly profit is infinitely better than a 5:1 ROAS that barely breaks even. Stop letting dashboard metrics distract you from the fundamentals. Know your numbers. Understand your true unit economics. Then scale with confidence."
    ]
  }
]

const postDate = '2026-06-18'
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
            33. Why Your ROAS Is High But Your Revenue Is Flat
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">High ROAS doesn\'t guarantee profit. Learn why your ad spend metrics mask flat revenue and how to fix it.</p>
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
