import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ROAS in the Black. Learn how we collect, use, and protect your information, including our use of Google AdSense for advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Last updated: June 2026
          </p>
        </header>

        <div className="border-t border-zinc-800 pt-6 space-y-8 text-zinc-400 leading-relaxed">

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              What Information We Collect
            </h2>
            <p>
              ROAS in the Black does not require you to create an account or
              provide any personal information to use the calculator. We do not
              collect your name, email address, or any other identifying
              information directly.
            </p>
            <p>
              Like most websites, we automatically receive certain technical
              data when you visit — including your IP address, browser type,
              operating system, referring URL, and pages viewed. This data is
              collected by our analytics and advertising providers, not stored
              by us directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              How We Use Information
            </h2>
            <p>
              The technical data described above is used solely to understand
              how visitors use the site so we can improve it, and to serve
              relevant advertising through Google AdSense. We do not sell,
              rent, or share your personal information with third parties for
              their own marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Google AdSense and Cookies
            </h2>
            <p>
              This site uses Google AdSense (publisher ID:{" "}
              <span className="text-zinc-300 font-mono text-sm">
                ca-pub-4437016471828719
              </span>
              ) to display advertisements. Google AdSense uses cookies and web
              beacons to serve ads based on your prior visits to this site and
              other sites on the internet.
            </p>
            <p>
              Google&apos;s use of advertising cookies enables it and its partners
              to serve ads based on your visit to our site and other sites on
              the Internet. You may opt out of personalized advertising by
              visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
              >
                Google Ads Settings
              </a>
              .
            </p>
            <p>
              For more information on how Google uses data when you use
              our site, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
              >
                Google&apos;s Privacy &amp; Terms
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Third Party Links
            </h2>
            <p>
              This site may contain links to external websites. We are not
              responsible for the privacy practices or content of those sites.
              We encourage you to review the privacy policy of any site you
              visit through a link on our pages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Data Retention
            </h2>
            <p>
              We do not store any personal data on our own servers. Any data
              collected by third-party services such as Google Analytics or
              Google AdSense is retained according to those services&apos; own
              retention policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Your Rights
            </h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, or delete personal information held about you, or to
              object to or restrict certain processing. Since we do not directly
              collect or store personal data, most requests of this nature
              should be directed to Google or other third-party service
              providers whose tools appear on this site.
            </p>
            <p>
              For California residents (CCPA) and EU/EEA residents (GDPR): you
              may opt out of the sale or processing of personal data for
              advertising purposes using the Google Ads Settings link above.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-200">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please reach out
              at{" "}
              <a
                href="mailto:privacy@roasintheblack.com"
                className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
              >
                privacy@roasintheblack.com
              </a>
              .
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}
