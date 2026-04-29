import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roasintheblack.com"),
  title: {
    default: "ROAS in the Black — Break-Even ROAS Calculator",
    template: "%s | ROAS in the Black",
  },
  description:
    "Calculate your break-even ROAS instantly. Free tool for marketers and ecommerce brands to know the exact ROAS needed to cover costs and stay profitable.",
  openGraph: {
    siteName: "ROAS in the Black",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4437016471828719"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-amber-500 font-bold text-lg tracking-tight group-hover:text-amber-400 transition-colors">
                ROAS<span className="text-zinc-400 font-normal">in the</span>Black
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm text-zinc-400">
              <Link href="/" className="hover:text-zinc-100 transition-colors">
                Calculator
              </Link>
              <Link
                href="/what-is-roas"
                className="hover:text-zinc-100 transition-colors"
              >
                What is ROAS?
              </Link>
              <Link
                href="/break-even-roas-formula"
                className="hover:text-zinc-100 transition-colors"
              >
                Formula
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-800 mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-center text-zinc-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} ROASintheBlack.com — Free
              Break-Even ROAS Calculator
            </p>
            <p className="mt-2 text-zinc-600">
              For informational purposes only. Always validate with your actual
              financials.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
