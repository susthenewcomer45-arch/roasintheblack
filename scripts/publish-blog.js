#!/usr/bin/env node
'use strict'

require('dotenv').config({ path: '.env.local' })

const { google } = require('googleapis')
const Anthropic = require('@anthropic-ai/sdk')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SHEET_ID = process.env.GOOGLE_SHEET_ID
const CREDENTIALS_FILE = 'service-account-key.json'
const GENERATED_POSTS_PATH = path.join('src', 'lib', 'generated-posts.json')

// ---------------------------------------------------------------------------
// Google Sheets helpers
// ---------------------------------------------------------------------------

function getCredentials() {
  // In CI: full JSON is stored as a secret env var
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
  }
  // Locally: read from the key file in the project root
  if (fs.existsSync(CREDENTIALS_FILE)) {
    return JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf8'))
  }
  throw new Error(
    'No Google credentials found. Set GOOGLE_SERVICE_ACCOUNT_JSON env var ' +
    `or place the key file at ${CREDENTIALS_FILE}.`
  )
}

async function getSheets() {
  const credentials = getCredentials()
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({ version: 'v4', auth })
}

// Returns { title, row } for the first row where Column A has a title and
// Column B is empty, or null if nothing is unpublished.
async function getNextUnpublishedRow(sheets) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'Sheet1!A:B',
  })
  const rows = res.data.values || []
  for (let i = 0; i < rows.length; i++) {
    const title = (rows[i] && rows[i][0] ? rows[i][0] : '').trim()
    const status = (rows[i] && rows[i][1] ? rows[i][1] : '').trim()
    if (title && !status) {
      return { title, row: i + 1 } // Sheet rows are 1-indexed
    }
  }
  return null
}

async function markPublished(sheets, row) {
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `Sheet1!B${row}`,
    valueInputOption: 'RAW',
    requestBody: { values: [['Published']] },
  })
}

// ---------------------------------------------------------------------------
// Claude content generation
// ---------------------------------------------------------------------------

async function generatePost(title) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const prompt = `Write an 800-word SEO blog post for roasintheblack.com about ROAS, ad spend, and digital marketing.

Title: "${title}"

Site context: roasintheblack.com is a free break-even ROAS calculator for marketers, ecommerce brands, and business owners. The tool helps advertisers calculate the exact ROAS they need to cover costs and run profitable ad campaigns. Tone: direct, analytical, educational — written for performance marketers and business owners who run paid ads on Google, Meta, TikTok, or other platforms.

Return ONLY valid JSON — no markdown fences, no commentary — in this exact structure:
{
  "description": "SEO meta description, under 155 characters",
  "readTime": "8 min read",
  "sections": [
    {
      "paragraphs": ["intro paragraph 1", "intro paragraph 2"]
    },
    {
      "heading": "Section Heading",
      "paragraphs": ["paragraph 1", "paragraph 2"]
    }
  ]
}

Rules:
- First section must have NO heading field (intro only, 2 paragraphs)
- 5-6 sections total
- ~800 words across all paragraph strings
- Each paragraph is plain text (no HTML, no markdown)
- Naturally mention the break-even ROAS calculator at roasintheblack.com in the conclusion
- Include at least one section with concrete numbers or a worked example
- Do not use the words "crucial", "leverage", or "unlock"`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  })

  const raw = message.content[0].text.trim()
  // Strip markdown code fences if the model added them
  const cleaned = raw
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/, '')
    .trim()

  let parsed
  try {
    parsed = JSON.parse(cleaned)
  } catch (err) {
    throw new Error(`Claude returned invalid JSON:\n${cleaned}\n\nParse error: ${err.message}`)
  }
  return parsed
}

// ---------------------------------------------------------------------------
// TSX file generation
// ---------------------------------------------------------------------------

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

// Escape characters that would break a JS single-quoted string literal
function escJS(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
}

function generateTSX(slug, title, date, post) {
  const t = escJS(title)
  const d = escJS(post.description)
  const r = escJS(post.readTime)
  const sectionsLiteral = JSON.stringify(post.sections, null, 2)

  return `// Auto-generated ${date} — do not edit manually
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '${t} | ROAS in the Black',
  description: '${d}',
  alternates: { canonical: 'https://roasintheblack.com/blog/${slug}' },
  openGraph: {
    title: '${t} | ROAS in the Black',
    description: '${d}',
    url: 'https://roasintheblack.com/blog/${slug}',
  },
}

interface Section {
  heading?: string
  paragraphs?: string[]
}

const sections: Section[] = ${sectionsLiteral}

const postDate = '${date}'
const readTime = '${r}'

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
            ${t}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">${d}</p>
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
`
}

// ---------------------------------------------------------------------------
// Manifest update (blog listing reads this to show auto-published posts)
// ---------------------------------------------------------------------------

function updateGeneratedPosts(slug, title, description, date, readTime) {
  let posts = []
  if (fs.existsSync(GENERATED_POSTS_PATH)) {
    try {
      posts = JSON.parse(fs.readFileSync(GENERATED_POSTS_PATH, 'utf8'))
    } catch {
      posts = []
    }
  }
  if (posts.find((p) => p.slug === slug)) {
    console.log(`  ↩ Slug "${slug}" already in manifest — skipping duplicate`)
    return
  }
  posts.unshift({ slug, title, description, date, readTime })
  fs.writeFileSync(GENERATED_POSTS_PATH, JSON.stringify(posts, null, 2) + '\n', 'utf8')
}

// ---------------------------------------------------------------------------
// Git push
// ---------------------------------------------------------------------------

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' })
}

function gitPush(slug, title) {
  run('git config user.email "actions@github.com"')
  run('git config user.name "GitHub Actions"')
  run(`git add "src/app/blog/${slug}/page.tsx" "${GENERATED_POSTS_PATH}"`)
  run(`git commit -m "Auto-publish: ${title.replace(/"/g, '\\"')}"`)
  run('git push')
  console.log('✅ Pushed to GitHub')
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!SHEET_ID) throw new Error('GOOGLE_SHEET_ID is not set')
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not set')

  console.log('📋 Connecting to Google Sheets…')
  const sheets = await getSheets()

  console.log('🔍 Looking for next unpublished title…')
  const next = await getNextUnpublishedRow(sheets)

  if (!next) {
    console.log('✅ No unpublished titles found. Nothing to publish today.')
    return
  }

  const { title, row } = next
  const slug = slugify(title)
  const date = new Date().toISOString().split('T')[0]

  console.log(`📝 Title  : "${title}"`)
  console.log(`   Slug   : /blog/${slug}`)
  console.log(`   Date   : ${date}`)

  console.log('\n🤖 Calling Claude (claude-haiku-4-5) to write post…')
  const post = await generatePost(title)
  console.log(`   Sections : ${post.sections.length}`)
  console.log(`   Read time: ${post.readTime}`)

  console.log('\n💾 Writing src/app/blog/' + slug + '/page.tsx…')
  const postDir = path.join('src', 'app', 'blog', slug)
  fs.mkdirSync(postDir, { recursive: true })
  fs.writeFileSync(path.join(postDir, 'page.tsx'), generateTSX(slug, title, date, post), 'utf8')

  console.log('📊 Updating generated-posts.json…')
  updateGeneratedPosts(slug, title, post.description, date, post.readTime)

  console.log('✅ Marking row ' + row + ' as Published in Sheet…')
  await markPublished(sheets, row)

  console.log('🚀 Pushing to GitHub…')
  gitPush(slug, title)

  console.log(`\n🎉 Published: "${title}" → https://roasintheblack.com/blog/${slug}`)
}

main().catch((err) => {
  console.error('\n❌ Error:', err.message)
  process.exit(1)
})
