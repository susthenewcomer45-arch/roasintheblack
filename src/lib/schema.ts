export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ROASintheBlack",
    "url": "https://roasintheblack.com",
    "description": "Free break-even ROAS calculator for marketers and ecommerce brands.",
  }
}

export function generateSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Break-Even ROAS Calculator",
    "url": "https://roasintheblack.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free break-even ROAS calculator. Enter your cost percentages and instantly see the minimum ROAS your ad campaigns need to stay profitable."
  }
}
