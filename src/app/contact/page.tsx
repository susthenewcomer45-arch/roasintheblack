import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ROAS in the Black. Questions or feedback? Email us at hello@roasintheblack.com.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <article className="space-y-6">
        <header className="space-y-3">
          <div className="text-xs font-medium text-amber-500 uppercase tracking-widest">
            Contact
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            Get in Touch
          </h1>
        </header>

        <div className="border-t border-zinc-800 pt-6 text-zinc-400 leading-relaxed space-y-4">
          <p>
            For questions or feedback, email us at{" "}
            <a
              href="mailto:hello@roasintheblack.com"
              className="text-amber-500 hover:text-amber-400 underline underline-offset-4"
            >
              hello@roasintheblack.com
            </a>
            .
          </p>
          <p>We read every message and will get back to you as soon as we can.</p>
        </div>
      </article>
    </div>
  );
}
