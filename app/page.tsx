"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const consoles = ["Behringer X32", "Midas M32", "Yamaha Digital Series", "Allen & Heath", "dLive", "SQ Series"];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-24 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(123,92,246,0.18)_0%,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={scaleIn}>
            <img
              src="/murphy-avatar.png"
              alt="Murphy AI"
              className="w-36 h-36 mx-auto rounded-full object-cover mb-8"
              style={{ boxShadow: "0 0 80px rgba(123,92,246,0.5), 0 0 120px rgba(123,92,246,0.2)" }}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#7b5cf6]/20 text-[#f0f0f5] border border-[#7b5cf6]/40 mb-6 tracking-wide">
              The World&apos;s First AI-Assisted FOH Mixer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(44px,9vw,88px)] font-black leading-[1.02] tracking-[-0.04em] text-[#f0f0f5] mb-5"
          >
            Meet Murphy.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(20px,3vw,30px)] font-semibold mb-6 tracking-tight"
            style={{ color: "#7b5cf6" }}
          >
            Man&apos;s best friend. Now at the console.
          </motion.p>

          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-[#8a8a9a] max-w-2xl mx-auto mb-3 leading-relaxed">
            Murphy is your AI production companion — configuring your console, balancing your mix, and learning every venue it plays.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base font-medium mb-10" style={{ color: "#f59e0b" }}>
            Built on 400+ real shows. Always listening. Never complaining.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-4 rounded-xl bg-[#7b5cf6] text-white font-bold text-base hover:bg-[#6d4fe0] transition-all duration-200"
              style={{ boxShadow: "0 0 28px rgba(123,92,246,0.45)" }}
            >
              Hire Murphy →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-9 py-4 rounded-xl border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/8 transition-colors duration-200"
            >
              See How It Works
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Bold claim banner ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-y border-white/10 py-8 px-6 text-center"
        style={{ background: "linear-gradient(90deg, #0a0a0f 0%, #0f0a1f 50%, #0a0a0f 100%)" }}
      >
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7b5cf6]">
          Live sound has a new brain — and he&apos;s a very good boy.
        </p>
      </motion.section>

      {/* ── Problem strip ── */}
      <section className="border-b border-white/10 py-16 px-6 bg-[#0f0f14]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center"
        >
          {[
            { stat: "Millions", sub: "of live events. Not enough skilled engineers to cover them." },
            { stat: "20 min", sub: "average soundcheck. No room for error." },
            { stat: "1 bad mix", sub: "is all it takes to lose a crowd, a client, or a booking." },
          ].map(({ stat, sub }) => (
            <motion.div key={stat} variants={fadeUp}>
              <p className="text-4xl font-black text-[#7b5cf6] mb-2">{stat}</p>
              <p className="text-[#8a8a9a] text-sm leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10 text-xs text-[#6b7280] tracking-wide"
        >
          Murphy was built because the industry needed it.
        </motion.p>
      </section>

      {/* ── Segment cards ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">Who works with Murphy</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight">
              Same dog. Three different jobs.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { emoji: "🎚️", title: "FOH Engineers", tag: "Your Mix. Supercharged.", body: "Murphy is your co-pilot at the console — faster setup, smarter starting points, real-time AI backing your every call. You stay in control. Murphy makes you faster.", cta: "Murphy for Engineers →" },
              { emoji: "🎸", title: "Bands & Touring Acts", tag: "Bring Your Sound Everywhere.", body: "Tired of house engineers who don't know your show? Murphy knows your inputs, your preferences, your mix — and travels with you. Every stage sounds like home.", cta: "Murphy for Bands →" },
              { emoji: "🏟️", title: "Venues", tag: "Great Sound. Every Night.", body: "Engineer shortage? Staff turnover? Murphy installs in your house system and makes every operator capable from day one. Consistent sound. Every show. No excuses.", cta: "Murphy for Venues →" },
            ].map(({ emoji, title, tag, body, cta }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl p-8 border border-white/10 hover:border-[#7b5cf6]/40 transition-colors duration-300 group"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="text-4xl mb-5">{emoji}</div>
                <h3 className="text-xl font-bold text-[#f0f0f5] mb-1">{title}</h3>
                <p className="text-sm font-semibold text-[#7b5cf6] mb-4">{tag}</p>
                <p className="text-[#8a8a9a] text-sm mb-6 leading-relaxed">{body}</p>
                <Link href="/products" className="text-sm font-semibold text-[#7b5cf6] group-hover:opacity-80 transition-opacity">{cta}</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-28 px-6 bg-[#0f0f14] border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">Signal flow</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight mb-4">
              Murphy Doesn&apos;t Guess. He Listens.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#8a8a9a] max-w-xl mx-auto">
              Murphy sits between your console and the room — and never stops listening.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { n: "01", t: "Plug In", b: "Connects to your existing digital console via OSC. No rewiring. No new hardware." },
              { n: "02", t: "Murphy Listens", b: "Real-time analysis of every channel — gain staging, frequency balance, mix relationships." },
              { n: "03", t: "Murphy Acts", b: "Mix adjustments and console configuration — Murphy moves fast so you don't have to." },
              { n: "04", t: "Murphy Learns", b: "Every show makes Murphy smarter. Every venue. Every room. Every mix." },
            ].map(({ n, t, b }) => (
              <motion.div key={n} variants={fadeUp} className="text-center">
                <p className="text-5xl font-black text-[#7b5cf6] mb-3 opacity-90">{n}</p>
                <h3 className="font-bold text-[#f0f0f5] text-lg mb-2">{t}</h3>
                <p className="text-sm text-[#8a8a9a] leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link href="/how-it-works" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#7b5cf6]/40 text-[#7b5cf6] font-semibold text-sm hover:border-[#7b5cf6] hover:bg-[#7b5cf6]/10 transition-all duration-200">
              See the full signal flow →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">The hardware</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight">
              Two Versions. One Murphy.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { tag: "On the Road", tagColor: "#7b5cf6", border: "rgba(123,92,246,0.5)", name: "Murphy Bridge", platform: "Powered by Raspberry Pi", tagline: "The AI engineer in your gear bag.", body: "Portable production intelligence for engineers and touring acts who need AI-assisted mixing on every stage.", price: "From $999", btnBg: "#7b5cf6", btnGlow: "rgba(123,92,246,0.4)", btnText: "white" },
              { tag: "In the House", tagColor: "#f59e0b", border: "rgba(245,158,11,0.5)", name: "Murphy Pro", platform: "Powered by Mac Mini M4", tagline: "Production intelligence built for the big room.", body: "The full-power system for venues, touring productions, and engineers who demand the best.", price: "From $1,499", btnBg: "#f59e0b", btnGlow: "rgba(245,158,11,0.4)", btnText: "#0a0a0f" },
            ].map(({ tag, tagColor, border, name, platform, tagline, body, price, btnBg, btnGlow, btnText }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="rounded-2xl p-10"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${border}` }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: tagColor }}>{tag}</p>
                <h3 className="text-3xl font-black text-[#f0f0f5] mb-1">{name}</h3>
                <p className="text-sm text-[#8a8a9a] mb-1">{platform}</p>
                <p className="text-sm font-semibold mb-6" style={{ color: tagColor }}>{tagline}</p>
                <p className="text-[#8a8a9a] mb-8 text-sm leading-relaxed">{body}</p>
                <p className="text-2xl font-black text-[#f0f0f5] mb-6">{price}</p>
                <Link href="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90" style={{ background: btnBg, color: btnText, boxShadow: `0 0 20px ${btnGlow}` }}>
                  Join Waitlist →
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center mt-8">
            <Link href="/products" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">Compare full specs →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Console marquee ── */}
      <section className="border-y border-white/10 py-8 overflow-hidden bg-[#0f0f14]">
        <p className="text-center text-xs text-[#8a8a9a] uppercase tracking-widest mb-5">Works with the consoles on your stage</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
            {[...consoles, ...consoles, ...consoles, ...consoles].map((c, i) => (
              <span key={i} className="flex-shrink-0 text-sm font-semibold text-[#8a8a9a] hover:text-[#f0f0f5] transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data flywheel ── */}
      <section className="py-28 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">The data moat</motion.p>
          <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
            Murphy Gets Smarter Every Show He Works.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#8a8a9a] leading-relaxed mb-4">
            Every performance builds his knowledge — venue acoustics, microphone behavior, feedback zones, mix decisions. The more Murphy works, the better he gets. No AI built in a lab can replicate what Murphy learns on a real stage.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base font-bold" style={{ color: "#f59e0b" }}>
            400+ shows in. Just getting started.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Founder ── */}
      <section className="py-24 px-6 border-t border-white/10 bg-[#0f0f14]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto rounded-2xl p-10 border border-white/10 text-center"
          style={{ background: "rgba(123,92,246,0.06)" }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-6">Built by someone who lived the problem</p>
          <blockquote className="text-xl text-[#f0f0f5] italic mb-6 leading-relaxed">
            &quot;I built the software. I lived the problem. That&apos;s not common — and it&apos;s why Murphy works the way it does.&quot;
          </blockquote>
          <p className="text-sm text-[#8a8a9a] mb-1">Joe Pascual, Founder & CEO</p>
          <p className="text-xs text-[#6b7280] mb-8">400+ shows across venues of every size, shape, and technical configuration.</p>
          <Link href="/about" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">The full story →</Link>
        </motion.div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section className="py-28 px-6 text-center" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0d0820 50%, #0a0a0f 100%)" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,60px)] font-black text-[#f0f0f5] tracking-tight mb-4">
            Murphy Is Almost Ready for His Next Gig.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#8a8a9a] text-lg mb-2">
            Join the early access list. Be first in line when Murphy ships.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm text-[#6b7280] mb-10">Engineers, bands, and venues — all welcome.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-9 py-4 rounded-xl bg-[#7b5cf6] text-white font-bold text-base hover:bg-[#6d4fe0] transition-all duration-200" style={{ boxShadow: "0 0 28px rgba(123,92,246,0.4)" }}>
              Hire Murphy →
            </Link>
            <Link href="/investors" className="inline-flex items-center justify-center px-9 py-4 rounded-xl border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/8 transition-colors duration-200">
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
