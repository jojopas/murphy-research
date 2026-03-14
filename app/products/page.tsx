"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <>
      <Nav />
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">The hardware</p>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
            Two Versions. <span className="text-[#7b5cf6]">One Murphy.</span>
          </h1>
          <p className="text-xl text-[#8a8a9a]">Whether you&apos;re a touring engineer with a gig bag or a venue building a permanent install, there&apos;s a Murphy built for your production.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            { tag: "On the Road", tagColor: "#7b5cf6", borderColor: "#7b5cf6", name: "Murphy Bridge", platform: "Powered by Raspberry Pi", tagline: "The AI engineer in your gear bag.", body: "Portable production intelligence for engineers and touring acts who need AI-assisted mixing on every stage.", targets: ["FOH engineers who work multiple venues", "Touring bands who need consistent sound city to city", "Small to mid-size venues getting started with AI mixing"], price: "From $999", btnBg: "#7b5cf6", btnText: "white" },
            { tag: "In the House", tagColor: "#f59e0b", borderColor: "#f59e0b", name: "Murphy Pro", platform: "Powered by Mac Mini M4", tagline: "Production intelligence built for the big room.", body: "Murphy Pro is the full-power system — rack-ready, built for venues, touring productions, and engineers who demand the best.", targets: ["Professional venues and permanent installs", "Touring productions with complex technical riders", "Productions that need full Phase 1–4 capabilities"], price: "From $1,499", btnBg: "#f59e0b", btnText: "#0a0a0f" },
          ].map(({ tag, tagColor, borderColor, name, platform, tagline, body, targets, price, btnBg, btnText }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-10 border bg-[var(--color-surface)]" style={{ borderColor }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: tagColor }}>{tag}</p>
              <h2 className="text-3xl font-black text-[#f0f0f5] mb-1">{name}</h2>
              <p className="text-sm text-[#8a8a9a] mb-1">{platform}</p>
              <p className="text-sm font-semibold mb-6" style={{ color: tagColor }}>{tagline}</p>
              <p className="text-[#8a8a9a] mb-6 text-sm">{body}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#6b7280] mb-3">Built for</p>
              <ul className="mb-8 space-y-2">
                {targets.map((t) => <li key={t} className="text-sm text-[#8a8a9a]">• {t}</li>)}
              </ul>
              <p className="text-2xl font-black text-[#f0f0f5] mb-6">{price}</p>
              <Link href="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90" style={{ background: btnBg, color: btnText }}>
                Join Waitlist →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-white/10 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#f0f0f5] mb-12">Full Comparison</h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a0a0f]">
                  <th className="text-left p-4 font-semibold text-[#6b7280]">Feature</th>
                  <th className="p-4 font-bold text-center text-[#7b5cf6]">Murphy Bridge</th>
                  <th className="p-4 font-bold text-center text-[#f59e0b]">Murphy Pro</th>
                </tr>
              </thead>
              <tbody>
                {([
                  ["Platform", "Raspberry Pi", "Mac Mini M4"],
                  ["Console Integration", true, true],
                  ["Real-Time Analysis", true, true],
                  ["Auto Console Config", true, true],
                  ["Monitor Mixing", "Basic", "Advanced"],
                  ["Venue Intelligence", true, true],
                  ["Production Analytics", false, true],
                  ["Show History", false, true],
                  ["Rack Mount", false, true],
                  ["Price", "From $999", "From $1,499"],
                ] as [string, boolean | string, boolean | string][]).map(([feature, bridge, pro], i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="p-4 text-[#8a8a9a]">{feature}</td>
                    <td className="p-4 text-center">{bridge === true ? <Check className="w-4 h-4 mx-auto text-[#22c55e]" /> : bridge === false ? <X className="w-4 h-4 mx-auto text-white/20" /> : <span className="text-[#f0f0f5]">{bridge}</span>}</td>
                    <td className="p-4 text-center">{pro === true ? <Check className="w-4 h-4 mx-auto text-[#22c55e]" /> : pro === false ? <X className="w-4 h-4 mx-auto text-white/20" /> : <span className="text-[#f0f0f5]">{pro}</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-4xl font-bold text-[#f0f0f5] mb-4">Not Sure Which Murphy?</h2>
        <p className="text-[#8a8a9a] mb-10">Get in touch and we&apos;ll help you find the right fit.</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.35)]">
          Talk to the Team →
        </Link>
      </section>
      <Footer />
    </>
  );
}
