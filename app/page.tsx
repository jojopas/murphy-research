"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const consoles = ["Behringer X32", "Midas M32", "Yamaha Digital Series", "Allen & Heath"];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-24 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.15)_0%,transparent_70%)]" />

        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-4xl mx-auto">
          <motion.div variants={fadeUp}>
            <img src="/murphy-avatar.png" alt="Murphy AI" className="w-32 h-32 mx-auto rounded-full object-cover mb-8 shadow-[0_0_60px_rgba(123,92,246,0.4)]" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#7b5cf6]/20 text-[#f0f0f5] border border-[#7b5cf6]/30 mb-6">
              AI Production Intelligence for Live Events
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.05] tracking-[-0.03em] text-[#f0f0f5] mb-4"
          >
            Meet Murphy.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(20px,3vw,32px)] font-semibold text-[#7b5cf6] mb-6 tracking-tight"
          >
            Man&apos;s best friend. Now at the console.
          </motion.p>
          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-[#8a8a9a] max-w-2xl mx-auto mb-3">
            Murphy is your AI production companion — configuring your console, balancing your mix, and learning every venue it plays.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-[#f59e0b] mb-10 font-medium">
            Built on 400+ real shows. Always listening. Never complaining.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.35)]"
            >
              Hire Murphy →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Problem strip ── */}
      <section className="border-y border-white/10 py-14 px-6 bg-[#0f0f14]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            { stat: "Millions", sub: "of live events. Not enough skilled engineers to cover them." },
            { stat: "20 min", sub: "average soundcheck. No room for error." },
            { stat: "1 bad mix", sub: "is all it takes to lose a crowd, a client, or a booking." },
          ].map(({ stat, sub }) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl font-black text-[#7b5cf6] mb-2">{stat}</p>
              <p className="text-[#8a8a9a] text-sm">{sub}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-10 text-xs text-[#6b7280] tracking-wide">Murphy was built because the industry needed it.</p>
      </section>

      {/* ── Segment cards ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">Who works with Murphy</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight">
              Same dog. Three different jobs.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🎚️", title: "FOH Engineers", tag: "Your Mix. Supercharged.", body: "Murphy is your co-pilot at the console — faster setup, smarter starting points, real-time AI backing your every call. You stay in control. Murphy makes you faster.", cta: "Murphy for Engineers →" },
              { emoji: "🎸", title: "Bands & Touring Acts", tag: "Bring Your Sound Everywhere.", body: "Tired of house engineers who don't know your show? Murphy knows your inputs, your preferences, your mix — and travels with you. Every stage sounds like home.", cta: "Murphy for Bands →" },
              { emoji: "🏟️", title: "Venues", tag: "Great Sound. Every Night.", body: "Engineer shortage? Staff turnover? Murphy installs in your house system and makes every operator capable from day one. Consistent sound. Every show. No excuses.", cta: "Murphy for Venues →" },
            ].map(({ emoji, title, tag, body, cta }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-white/10 bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] transition-colors"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="text-xl font-bold text-[#f0f0f5] mb-1">{title}</h3>
                <p className="text-sm font-semibold text-[#7b5cf6] mb-4">{tag}</p>
                <p className="text-[#8a8a9a] text-sm mb-6">{body}</p>
                <Link href="/products" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">{cta}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-28 px-6 bg-[#0f0f14] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">Signal flow</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight mb-4">
              Murphy Doesn&apos;t Guess. He Listens.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#8a8a9a] max-w-xl mx-auto">
              Murphy sits between your console and the room — and never stops listening.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Plug In", b: "Connects to your existing digital console via OSC. No rewiring. No new hardware." },
              { n: "02", t: "Murphy Listens", b: "Real-time analysis of every channel — gain staging, frequency balance, mix relationships." },
              { n: "03", t: "Murphy Acts", b: "Mix adjustments and console configuration — Murphy moves fast so you don't have to." },
              { n: "04", t: "Murphy Learns", b: "Every show makes Murphy smarter. Every venue. Every room. Every mix." },
            ].map(({ n, t, b }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-black text-[#7b5cf6] mb-3">{n}</p>
                <h3 className="font-bold text-[#f0f0f5] text-lg mb-2">{t}</h3>
                <p className="text-sm text-[#8a8a9a]">{b}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#7b5cf6]/50 text-[#7b5cf6] font-semibold text-sm hover:border-[#7b5cf6] hover:bg-[#7b5cf6]/10 transition-colors">
              See the full signal flow →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">The hardware</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight">
              Two Versions. One Murphy.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "On the Road", tagColor: "#7b5cf6", borderColor: "#7b5cf6", name: "Murphy Bridge", platform: "Powered by Raspberry Pi", tagline: "The AI engineer in your gear bag.", body: "Portable production intelligence for engineers and touring acts who need AI-assisted mixing on every stage.", price: "From $999", btnBg: "#7b5cf6", btnText: "white" },
              { tag: "In the House", tagColor: "#f59e0b", borderColor: "#f59e0b", name: "Murphy Pro", platform: "Powered by Mac Mini M4", tagline: "Production intelligence built for the big room.", body: "The full-power system for venues, touring productions, and engineers who demand the best.", price: "From $1,499", btnBg: "#f59e0b", btnText: "#0a0a0f" },
            ].map(({ tag, tagColor, borderColor, name, platform, tagline, body, price, btnBg, btnText }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-10 border bg-[var(--color-surface)]"
                style={{ borderColor }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: tagColor }}>{tag}</p>
                <h3 className="text-3xl font-black text-[#f0f0f5] mb-1">{name}</h3>
                <p className="text-sm text-[#8a8a9a] mb-1">{platform}</p>
                <p className="text-sm font-semibold mb-6" style={{ color: tagColor }}>{tagline}</p>
                <p className="text-[#8a8a9a] mb-8 text-sm">{body}</p>
                <p className="text-2xl font-black text-[#f0f0f5] mb-6">{price}</p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: btnBg, color: btnText }}
                >
                  Join Waitlist →
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">Compare full specs →</Link>
          </div>
        </div>
      </section>

      {/* ── Console integrations marquee ── */}
      <section className="border-y border-white/10 py-8 overflow-hidden bg-[#0f0f14]">
        <p className="text-center text-xs text-[#8a8a9a] uppercase tracking-widest mb-5">Works with the consoles on your stage</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
            {[...consoles, ...consoles, ...consoles, ...consoles].map((c, i) => (
              <span key={i} className="flex-shrink-0 text-sm font-semibold text-[#8a8a9a]">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-10 border border-white/10 bg-[var(--color-surface)] text-center"
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-6">Built by someone who lived the problem</p>
            <blockquote className="text-xl text-[#f0f0f5] italic mb-6 leading-relaxed">
              &quot;I built the software. I lived the problem. That&apos;s not common — and it&apos;s why Murphy works the way it does.&quot;
            </blockquote>
            <p className="text-sm text-[#8a8a9a] mb-2">Joe Pascual, Founder & CEO</p>
            <p className="text-xs text-[#6b7280]">400+ shows across venues of every size, shape, and technical configuration.</p>
            <div className="mt-8">
              <Link href="/about" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">The full story →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section className="py-28 px-6 text-center bg-[#0f0f14] border-t border-white/10">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,56px)] font-bold text-[#f0f0f5] tracking-tight mb-4">
            Murphy is Almost Ready for His Next Gig.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#8a8a9a] text-lg mb-3">
            Join the early access list. Be first in line when Murphy ships.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm text-[#6b7280] mb-10">Engineers, bands, and venues — all welcome.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.35)]">
              Hire Murphy →
            </Link>
            <Link href="/investors" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/10 transition-colors">
              Investor Inquiries
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-xs text-[#6b7280]">No spam. Just Murphy updates.</motion.p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
