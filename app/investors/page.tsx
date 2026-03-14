"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Investors() {
  return (
    <>
      <Nav />
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl">
          <TrendingUp className="w-10 h-10 mx-auto mb-6 text-[#7b5cf6]" />
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">Investor overview</p>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
            Murphy Is Building the<br /><span className="text-[#7b5cf6]">Data Moat for Live Sound.</span>
          </h1>
          <p className="text-xl text-[#8a8a9a]">400+ real shows. A growing waitlist of engineers and venues. A founding team that built the software AND lived the problem.</p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f0f0f5] mb-6">Why Now</h2>
          <p className="text-lg leading-relaxed text-[#8a8a9a] mb-4">Live entertainment is one of the world&apos;s most resilient industries — and one of its most underserved by technology. The professional audio equipment market exceeds $20 billion annually. The number of live events grows every year. The supply of skilled engineers does not.</p>
          <p className="text-lg leading-relaxed text-[#8a8a9a]">Murphy is positioned at exactly the right intersection: AI-native, hardware-accelerated, and built on a data layer that can only be created through real deployments.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#f0f0f5] mb-12">Business Model</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { channel: "Hardware", desc: "Murphy Bridge + Murphy Pro units", price: "$999–$1,499" },
              { channel: "Software", desc: "Monthly AI features and venue intelligence", price: "$20–$50/mo" },
              { channel: "Enterprise", desc: "Venue and production company licensing", price: "Custom" },
            ].map(({ channel, desc, price }, i) => (
              <motion.div key={channel} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-8 border border-white/10 bg-[var(--color-surface)] text-center">
                <h3 className="font-bold text-lg text-[#f0f0f5] mb-2">{channel}</h3>
                <p className="text-sm text-[#8a8a9a] mb-4">{desc}</p>
                <p className="font-black text-2xl text-[#7b5cf6]">{price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f0f0f5] mb-10">The Raise</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Raising", value: "$500K–$1.5M", sub: "Seed Round" },
              { label: "Pre-Money Valuation", value: "$8M", sub: "" },
              { label: "Investor Equity", value: "~11%", sub: "" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="rounded-2xl p-6 border border-white/10 bg-[#0a0a0f]">
                <p className="text-xs uppercase tracking-widest text-[#6b7280] mb-2">{label}</p>
                <p className="text-3xl font-black text-[#7b5cf6] mb-1">{value}</p>
                {sub && <p className="text-sm text-[#8a8a9a]">{sub}</p>}
              </div>
            ))}
          </div>
          <p className="text-[#8a8a9a]">Current stage: Prototype built and real-world tested, waitlist in progress, engineer and venue outreach underway.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f0f0f5] mb-4">Strategic Exit Paths</h2>
          <p className="text-[#8a8a9a] mb-8">Murphy&apos;s natural acquirers are companies for whom Murphy&apos;s data layer represents significant strategic value:</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Yamaha Corporation", "Music Tribe (Behringer / Midas)", "Allen & Heath", "Avid Technology", "L-Acoustics", "d&b audiotechnik"].map((co) => (
              <span key={co} className="px-4 py-2 rounded-full text-sm font-semibold border border-white/10 text-[#8a8a9a] bg-[var(--color-surface)]">{co}</span>
            ))}
          </div>
          <div className="rounded-2xl p-8 border border-[#7b5cf6]/40 bg-[#7b5cf6]/5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#7b5cf6] mb-3">18–36 Month Target</p>
            <p className="text-[#8a8a9a]">500–1,000 active engineers · 1,000+ venues in database · $2M–$5M ARR → $40M–$100M valuation</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/10 bg-[#0f0f14]">
        <h2 className="text-4xl font-bold text-[#f0f0f5] mb-4">Request the Investor Deck</h2>
        <p className="text-[#8a8a9a] mb-10 max-w-xl mx-auto">Schedule a call with Joe or request the full deck to learn more about the opportunity.</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.35)]">
          Request Deck →
        </Link>
      </section>
      <Footer />
    </>
  );
}
