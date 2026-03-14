"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-[#f0f0f5] tracking-tight mb-6">Let&apos;s Talk.</h1>
          <p className="text-xl text-[#8a8a9a]">Whether you&apos;re an engineer, a venue, a band, or an investor — Murphy&apos;s always ready for a new conversation.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { emoji: "🐾", title: "Hire Murphy (Early Access)", desc: "Join the waitlist and be first when Murphy ships.", cta: "Join Waitlist →", href: "mailto:hello@murphyresearch.ai?subject=Murphy Early Access", color: "#7b5cf6" },
            { emoji: "📈", title: "Investor Inquiries", desc: "Request the full investor deck or schedule a call with Joe.", cta: "Request Deck →", href: "mailto:hello@murphyresearch.ai?subject=Investor Inquiry", color: "#7b5cf6" },
            { emoji: "📰", title: "Press & Media", desc: "Writing about Murphy? We'd love to talk.", cta: "press@murphyresearch.ai", href: "mailto:press@murphyresearch.ai", color: "#f59e0b" },
            { emoji: "💬", title: "Everything Else", desc: "Questions, partnerships, curious minds — all welcome.", cta: "hello@murphyresearch.ai", href: "mailto:hello@murphyresearch.ai", color: "#f59e0b" },
          ].map(({ emoji, title, desc, cta, href, color }, i) => (
            <motion.a key={title} href={href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="block rounded-2xl p-8 border border-white/10 bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] transition-colors">
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-xl font-bold text-[#f0f0f5] mb-2">{title}</h3>
              <p className="text-sm text-[#8a8a9a] mb-6">{desc}</p>
              <span className="text-sm font-semibold" style={{ color }}>{cta}</span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-[#0f0f14]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#f0f0f5] mb-8">Or just drop your email</h2>
          <div className="flex gap-3">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-[var(--color-surface)] text-[#f0f0f5] text-sm placeholder:text-[#6b7280] focus:outline-none focus:border-[#7b5cf6]/50" />
            <Link href="mailto:hello@murphyresearch.ai" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#7b5cf6] text-white font-semibold text-sm hover:bg-[#6d4fe0] transition-colors whitespace-nowrap">
              Hire Murphy →
            </Link>
          </div>
          <p className="text-xs text-[#6b7280] mt-4">No spam. Just Murphy updates.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
