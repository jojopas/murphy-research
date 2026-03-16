"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Check, SlidersHorizontal, Music2, Building2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const consoles = ["Behringer X32", "Midas M32", "Yamaha CL/QL/TF", "Allen & Heath dLive", "Allen & Heath SQ", "Midas Heritage"];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Cinematic Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="/murphy-hero-bg.png"
            alt="Murphy AI — engineer at the console"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlays for text legibility */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/70 via-transparent to-transparent" />
        </div>

        {/* Content — bottom-left aligned */}
        <motion.div
          variants={stagger} initial="hidden" animate="visible"
          className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-40"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20 mb-6 tracking-widest uppercase backdrop-blur-sm">
              The World&apos;s First AI FOH Engineer
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[clamp(52px,9vw,110px)] font-black leading-[0.95] tracking-[-0.04em] text-white mb-6 max-w-4xl">
            Meet Murphy.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[clamp(18px,2vw,26px)] font-semibold text-[#c4b5fd] mb-4 max-w-xl">
            Man&apos;s best friend. Now at the console.
          </motion.p>

          <motion.p variants={fadeUp} className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            AI production intelligence that configures your console, balances your mix, and learns every venue it plays. Built on 400+ real shows.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#7b5cf6] text-white font-bold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_30px_rgba(123,92,246,0.50)]">
              Hire Murphy →
            </Link>
            <Link href="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors backdrop-blur-sm">
              See How It Works
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Two-column product intro ── */}
      <section className="relative flex items-center px-6 py-24 overflow-hidden bg-[#0a0a0f]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,rgba(123,92,246,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7b5cf6]/15 text-[#c4b5fd] border border-[#7b5cf6]/30 mb-6 tracking-wide uppercase">
                AI Production Intelligence
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-[clamp(36px,5vw,64px)] font-black leading-[1.01] tracking-[-0.04em] text-[#f0f0f5] mb-5">
              Your Console.<br />Murphy&apos;s Brain.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#8a8a9a] mb-3 leading-relaxed max-w-lg">
              Murphy is your AI production companion — configuring your console, balancing your mix, and learning every venue it plays.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm font-medium text-[#f59e0b] mb-10">
              Built on 400+ real shows. Always listening. Never complaining.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.40)]">
                Hire Murphy →
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/8 transition-colors">
                See How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — hardware photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.15)_0%,transparent_70%)] blur-2xl" />
            <img
              src="/murphy-hero.png"
              alt="Murphy — AI production intelligence hardware on a mixing console"
              className="relative z-10 w-full max-w-lg rounded-2xl object-cover shadow-[0_0_80px_rgba(123,92,246,0.25)]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-white/10 py-16 px-6 bg-[#0f0f14]">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
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
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-10 text-xs text-[#6b7280] tracking-widest uppercase">
          Murphy was built because the industry needed it.
        </motion.p>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-16">
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">Who works with Murphy</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight max-w-xl">
              Same dog. Three different jobs.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "foh", title: "FOH Engineers", tag: "Your Mix. Supercharged.", body: "Murphy is your co-pilot at the console — faster setup, smarter starting points, real-time AI backing your every call. You stay in control. Murphy makes you faster.", href: "/products" },
              { icon: "bands", title: "Bands & Touring Acts", tag: "Bring Your Sound Everywhere.", body: "Tired of house engineers who don't know your show? Murphy knows your inputs, your preferences, your mix — and travels with you. Every stage sounds like home.", href: "/products" },
              { icon: "venues", title: "Venues", tag: "Great Sound. Every Night.", body: "Engineer shortage? Staff turnover? Murphy installs in your house system and makes every operator capable from day one. Consistent sound. Every show. No excuses.", href: "/products" },
            ].map(({ icon, title, tag, body, href }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl p-8 border border-white/10 bg-white/[0.03] hover:border-[#7b5cf6]/40 hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-10 h-10 mb-5 rounded-lg flex items-center justify-center" style={{background:"rgba(123,92,246,0.15)"}}>{icon === "foh" ? <SlidersHorizontal className="w-5 h-5 text-[#7b5cf6]" /> : icon === "bands" ? <Music2 className="w-5 h-5 text-[#7b5cf6]" /> : <Building2 className="w-5 h-5 text-[#7b5cf6]" />}</div>
                <h3 className="text-xl font-bold text-[#f0f0f5] mb-1">{title}</h3>
                <p className="text-sm font-semibold text-[#7b5cf6] mb-4">{tag}</p>
                <p className="text-[#8a8a9a] text-sm leading-relaxed mb-6">{body}</p>
                <Link href={href} className="text-sm font-semibold text-[#7b5cf6] group-hover:opacity-80 transition-opacity">Learn more →</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-28 px-6 bg-[#0f0f14] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">Signal flow</motion.p>
              <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
                Murphy Doesn&apos;t Guess.<br />He Listens.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8a8a9a] text-lg leading-relaxed mb-8">
                Murphy sits between your console and the room — analyzing every channel in real time, acting on what he hears, and getting smarter with every show.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/how-it-works" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#7b5cf6]/40 text-[#7b5cf6] font-semibold text-sm hover:border-[#7b5cf6] hover:bg-[#7b5cf6]/10 transition-all duration-200">
                  See the full signal flow →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-2 gap-4">
              {[
                { n: "01", t: "Plug In", b: "OSC connection to your existing console. No rewiring." },
                { n: "02", t: "Listens", b: "Real-time analysis — gain, frequency, mix relationships." },
                { n: "03", t: "Acts", b: "Adjustments and config — fast, precise, on your approval." },
                { n: "04", t: "Learns", b: "Every show builds Murphy's knowledge. Every venue, forever." },
              ].map(({ n, t, b }) => (
                <motion.div key={n} variants={fadeUp} className="rounded-xl p-5 border border-white/10 bg-white/[0.03]">
                  <p className="text-2xl font-black text-[#7b5cf6] mb-2 opacity-80">{n}</p>
                  <h4 className="font-bold text-[#f0f0f5] mb-1">{t}</h4>
                  <p className="text-xs text-[#8a8a9a] leading-relaxed">{b}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-16">
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">The hardware</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight max-w-xl">
              Two versions. One Murphy.
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              { tag: "On the Road", tagColor: "#7b5cf6", border: "rgba(123,92,246,0.4)", glowColor: "rgba(123,92,246,0.08)", name: "Murphy Bridge", img: "/murphy-bridge.png", platform: "Powered by Raspberry Pi", tagline: "The AI engineer in your gear bag.", body: "Portable production intelligence for engineers and touring acts who need AI-assisted mixing on every stage.", features: ["Full OSC console integration", "Real-time channel analysis", "Auto console configuration", "Show learning engine"], price: "From $999", btnBg: "#7b5cf6", btnText: "white" },
              { tag: "In the House", tagColor: "#f59e0b", border: "rgba(245,158,11,0.4)", glowColor: "rgba(245,158,11,0.06)", name: "Murphy Pro", img: "/murphy-pro.png", platform: "Powered by Mac Mini M4", tagline: "Production intelligence built for the big room.", body: "The full-power system — rack-ready, built for venues, touring productions, and engineers who demand the best.", features: ["Everything in Murphy Bridge", "Advanced monitor mixing", "Production analytics", "Full show history + venue database"], price: "From $1,499", btnBg: "#f59e0b", btnText: "#0a0a0f" },
            ].map(({ tag, tagColor, border, glowColor, name, img, platform, tagline, body, features, price, btnBg, btnText }) => (
              <motion.div key={name} variants={fadeUp} className="rounded-2xl overflow-hidden border" style={{ borderColor: border, background: glowColor }}>
                {img && <div className="w-full h-52 overflow-hidden"><img src={img} alt={name} className="w-full h-full object-cover object-center" /></div>}
                <div className="p-10">
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: tagColor }}>{tag}</p>
                <h3 className="text-3xl font-black text-[#f0f0f5] mb-1">{name}</h3>
                <p className="text-sm text-[#8a8a9a] mb-1">{platform}</p>
                <p className="text-sm font-semibold mb-6" style={{ color: tagColor }}>{tagline}</p>
                <p className="text-[#8a8a9a] mb-6 text-sm leading-relaxed">{body}</p>
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#8a8a9a]">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#22c55e]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-black text-[#f0f0f5] mb-6">{price}</p>
                <Link href="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90" style={{ background: btnBg, color: btnText }}>
                  Join Waitlist →
                </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/products" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">Compare full specs →</Link>
          </div>
        </div>
      </section>

      {/* ── Integrations marquee ── */}
      <section className="border-y border-white/10 py-8 overflow-hidden bg-[#0f0f14]">
        <p className="text-center text-xs text-[#8a8a9a] uppercase tracking-widest mb-5">Works with the consoles on your stage</p>
        <div className="flex overflow-hidden">
          <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
            {[...consoles, ...consoles, ...consoles].map((c, i) => (
              <span key={i} className="flex-shrink-0 text-sm font-semibold text-[#8a8a9a]">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data flywheel ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-3">The data moat</motion.p>
              <motion.h2 variants={fadeUp} className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
                Murphy Gets Smarter Every Show He Works.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8a8a9a] text-lg leading-relaxed mb-4">
                Every performance builds his knowledge — venue acoustics, microphone behavior, feedback zones, mix decisions. The more Murphy works, the better he gets. No AI built in a lab can replicate what Murphy learns on a real stage.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base font-bold text-[#f59e0b]">
                400+ shows in. Just getting started.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-10 border border-white/10 bg-white/[0.03]"
            >
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-6">Built by someone who lived the problem</p>
              <blockquote className="text-lg text-[#f0f0f5] italic mb-5 leading-relaxed">
                &quot;I built the software. I lived the problem. That&apos;s not common — and it&apos;s why Murphy works the way it does.&quot;
              </blockquote>
              <p className="text-sm text-[#8a8a9a] mb-1">Joe Pascual — Founder & CEO</p>
              <p className="text-xs text-[#6b7280] mb-6">400+ shows. Every size venue. Every technical configuration.</p>
              <Link href="/about" className="text-sm font-semibold text-[#7b5cf6] hover:opacity-80 transition-opacity">The full story →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 border-t border-white/10" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0d0820 50%, #0a0a0f 100%)" }}>
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(32px,5vw,60px)] font-black text-[#f0f0f5] tracking-tight mb-4">
            Murphy Is Almost Ready for His Next Gig.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#8a8a9a] text-lg mb-2">
            Join the early access list. Be first in line when Murphy ships.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm text-[#6b7280] mb-10">Engineers, bands, and venues — all welcome.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.40)]">
              Hire Murphy →
            </Link>
            <Link href="/investors" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/8 transition-colors">
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
