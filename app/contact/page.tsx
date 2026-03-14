import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <Link href="/" className="flex items-center gap-2"><span className="text-2xl">🐾</span><span className="font-bold text-xl tracking-tight">Murphy</span></Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>
        <Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">Hire Murphy</Button>
      </nav>

      <section className="text-center px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Let&apos;s Talk.</h1>
        <p className="text-xl max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
          Whether you&apos;re an engineer, a venue, a band, or an investor — Murphy&apos;s always ready for a new conversation.
        </p>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              emoji: "🐾",
              title: "Hire Murphy (Early Access)",
              desc: "Join the waitlist and be first when Murphy ships.",
              cta: "Join Waitlist →",
              href: "mailto:hello@murphyresearch.ai?subject=Murphy Early Access",
              color: "#7b5cf6",
            },
            {
              emoji: "📈",
              title: "Investor Inquiries",
              desc: "Request the full investor deck or schedule a call with Joe.",
              cta: "Request Deck →",
              href: "mailto:hello@murphyresearch.ai?subject=Investor Inquiry",
              color: "#7b5cf6",
            },
            {
              emoji: "📰",
              title: "Press & Media",
              desc: "Writing about Murphy? We'd love to talk.",
              cta: "press@murphyresearch.ai",
              href: "mailto:press@murphyresearch.ai",
              color: "#f59e0b",
            },
            {
              emoji: "💬",
              title: "Everything Else",
              desc: "Questions, partnerships, curious minds — all welcome.",
              cta: "hello@murphyresearch.ai",
              href: "mailto:hello@murphyresearch.ai",
              color: "#f59e0b",
            },
          ].map(({ emoji, title, desc, cta, href, color }) => (
            <a key={title} href={href} className="block rounded-2xl p-8 border hover:border-current transition-colors" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>{desc}</p>
              <span className="text-sm font-semibold" style={{ color }}>{cta}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Simple email form placeholder */}
      <section className="px-6 py-20 border-t max-w-xl mx-auto" style={{ borderColor: "#1f2937" }}>
        <h2 className="text-2xl font-bold text-center mb-8">Or just drop your email</h2>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-xl border text-sm"
            style={{ background: "#0f0f1a", borderColor: "#1f2937", color: "#e5e7eb" }}
          />
          <Button style={{ background: "#7b5cf6", color: "#fff" }} className="cursor-pointer hover:opacity-90 px-6">
            Hire Murphy →
          </Button>
        </div>
        <p className="text-xs text-center mt-4" style={{ color: "#6b7280" }}>No spam. Just Murphy updates.</p>
      </section>

      <footer className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#1f2937" }}>
        <div className="flex items-center gap-2"><span className="text-xl">🐾</span><span className="font-bold">Murphy</span><span className="text-sm ml-2" style={{ color: "#6b7280" }}>by Murphy Research LLC</span></div>
        <p className="text-sm" style={{ color: "#6b7280" }}>© 2026 Murphy Research LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
