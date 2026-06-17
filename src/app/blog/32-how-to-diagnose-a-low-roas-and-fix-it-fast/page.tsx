// Auto-generated 2026-06-17 — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '32. How to Diagnose a Low ROAS and Fix It Fast | ROAS in the Black',
  description: 'Low ROAS killing your ad campaigns? Learn how to diagnose the problem and implement fixes that actually work. Real strategies for performance marketers.',
  alternates: { canonical: 'https://roasintheblack.com/blog/32-how-to-diagnose-a-low-roas-and-fix-it-fast' },
  openGraph: {
    title: '32. How to Diagnose a Low ROAS and Fix It Fast | ROAS in the Black',
    description: 'Low ROAS killing your ad campaigns? Learn how to diagnose the problem and implement fixes that actually work. Real strategies for performance marketers.',
    url: 'https://roasintheblack.com/blog/32-how-to-diagnose-a-low-roas-and-fix-it-fast',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = [
  {
    "paragraphs": [
      "A low return on ad spend (ROAS) is the slow burn that kills profitable businesses. You're running campaigns, traffic is coming in, but the numbers don't add up. Your cost per acquisition is climbing while revenue per customer stays flat. The worst part? You don't know if the problem is your targeting, your creative, your offer, or something deeper in your funnel.",
      "The good news is that low ROAS is almost always diagnostic. It rarely happens by accident, and it rarely fixes itself by accident either. In this guide, we'll walk through how to identify exactly where your campaigns are breaking down and what changes actually move the needle. We'll use real numbers so you can see how small improvements compound into serious profitability."
    ]
  },
  {
    "heading": "What Counts as Low ROAS?",
    "paragraphs": [
      "Before you can fix low ROAS, you need to know what you're actually aiming for. This is where most advertisers go wrong. They compare themselves to industry benchmarks or vanity metrics instead of calculating their true break-even point.",
      "Here's the reality: your break-even ROAS depends on your business model, profit margin, and operational costs. A SaaS company with 70% gross margins needs a different ROAS than an ecommerce brand operating on 25% margins. A brand selling high-ticket services has completely different requirements than one selling consumable products.",
      "Let's work through an example. Say you're an ecommerce brand with a 40% gross profit margin (after COGS). You also have fixed costs—customer support, fulfillment, software subscriptions—that eat another 15% of revenue. That means your true available profit margin is 25%. To break even on ad spend alone, you need a ROAS of 4.0x. Anything below that is losing money. Anything above it is profit. If you're currently at 2.5x ROAS, you're not just underperforming—you're actively burning cash on every sale."
    ]
  },
  {
    "heading": "Start with Attribution and Data Quality",
    "paragraphs": [
      "The fastest way to misdiagnose low ROAS is to blame creative or targeting when your real problem is attribution. If you're not tracking conversions accurately, you're working with garbage data. Garbage in, garbage out.",
      "Audit your conversion tracking first. Is your pixel firing on every actual purchase? Are you double-counting conversions? Are you attributing sales to ads that had nothing to do with them? On Meta and Google, check your conversion value settings—are they pulling the right revenue numbers from your backend? A single misconfigured conversion event can make your ROAS look 30% worse than it actually is.",
      "Once your tracking is clean, segment your data by campaign, ad set, and creative. Low ROAS usually isn't uniform. One campaign might be at 6x while another limps along at 1.5x. Your job is to find the specific leak, not blame the entire system."
    ]
  },
  {
    "heading": "Diagnose the Three Main Failure Points",
    "paragraphs": [
      "Low ROAS comes from three places: wrong audience, wrong message, or wrong offer. Sometimes it's a mix of all three.",
      "Wrong audience means you're reaching people who don't want or need what you're selling. Your targeting is too broad, or you're bidding on keywords that don't match intent. Fix: tighten your audience targeting. Remove broad match keywords. Exclude irrelevant placements. Test lookalike audiences built only from your best customers, not your entire customer base.",
      "Wrong message means your creative and copy don't resonate with the people who do need your product. They click but don't convert. Your ad promised something the landing page didn't deliver, or your value prop doesn't translate to your audience. Fix: test new creative angles. Run video ads if you've only tested static. Test benefit-led copy instead of feature-led copy. Match your ad promise exactly to your landing page experience.",
      "Wrong offer means your product, price, or incentive isn't competitive enough to justify the ad spend. Your competitors offer better value or have stronger brand recognition. Fix: test discount strategies or bundle offers. Improve your product positioning. Run a competitive analysis on what similar brands are promoting."
    ]
  },
  {
    "heading": "The Spend-Down and Performance Audit",
    "paragraphs": [
      "One practical way to diagnose low ROAS fast is to pause your lowest-performing 20% of spend and reallocate it to your top performers. This forces you to identify your best-working channels and campaigns immediately.",
      "Create a spreadsheet ranking every campaign by ROAS from best to worst. Calculate how much daily spend each one gets and what the actual profit is at your break-even threshold. You might discover that 60% of your spend is going to campaigns barely hitting break-even, while 20% of spend is generating 3x ROAS. That's a clear signal to shift resources. Cut the lowest 20%, increase bids on the top 20%, and let the middle 60% run while you test new angles."
    ]
  },
  {
    "heading": "Know Your Break-Even Number Before You Start",
    "paragraphs": [
      "This is why we built the break-even ROAS calculator at roasintheblack.com. Too many advertisers guess at what 'good' ROAS looks like instead of calculating it. You plug in your gross profit margin, fixed costs as a percentage of revenue, and any other overhead specific to your business. The calculator shows you exactly what ROAS you need to break even—not what some industry benchmark says you should hit.",
      "Once you know that number, every campaign decision becomes clear. You know which campaigns are profitable, which are breakeven, and which ones are hemorrhaging money. You can make confident scaling decisions instead of hoping your ROAS gets better. That clarity turns low ROAS from a mystery into a solvable problem."
    ]
  }
]

const postDate = '2026-06-17'
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
            32. How to Diagnose a Low ROAS and Fix It Fast
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">Low ROAS killing your ad campaigns? Learn how to diagnose the problem and implement fixes that actually work. Real strategies for performance marketers.</p>
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
