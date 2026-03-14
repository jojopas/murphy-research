"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.12)_0%,transparent_70%)]" />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">Signal flow</motion.p>
          <motion.h1 variants={fadeUp} className="text-[clamp(36px,6vw,64px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
            Murphy Doesn&apos;t Guess.<br /><span className="text-[#7b5cf6]">He Listens.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-[#8a8a9a]">
            Most mixing problems come from time pressure and unfamiliar rooms. Murphy solves both — by analyzing your signals in real time and acting on what he hears.
          </motion.p>
        </motion.div>
      </section>

      {/* Signal Flow */}
      <section className="py-20 px-6 border-y border-white/10 bg-[#0f0f14]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#f0f0f5] mb-4">From stage to PA, Murphy is everywhere the signal goes.</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold my-10">
            {["Stage Inputs", "→", "Digital Console", "→", "Murphy AI Engine", "→", "PA System"].map((item, i) => (
              <span key={i} className={item === "Murphy AI Engine" ? "text-[#7b5cf6]" : item === "→" ? "text-white/20" : "text-[#f0f0f5]"}>{item}</span>
            ))}
          </div>
          <p className="text-center text-xs text-[#6b7280] mb-10">↑ Continuous feedback loop ↑</p>
          <div className="grid md:grid-cols-2 gap-4">
            {["Individual channel gain and frequency balance", "Stereo mix output and room response", "Monitor sends and IEM mixes", "Real-time feedback detection"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl p-4 border border-white/10 bg-[var(--color-surface)]">
                <span className="text-[#7b5cf6] text-lg">◆</span>
                <span className="text-sm text-[#8a8a9a]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Console Config */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[clamp(24px,4vw,40px)] font-bold text-[#f0f0f5] mb-6">
            Upload a Stage Plot. Murphy Builds Your Scene.
          </motion.h2>
          <p className="text-[#8a8a9a]">Hand Murphy an input list or stage plot and he&apos;ll auto-generate your console scene — channel names, starting EQ, gain structure, monitor send suggestions, and microphone preset profiles. What used to take an hour takes minutes.</p>
        </div>
      </section>

      {/* Phase Roadmap */}
      <section className="py-24 px-6 border-t border-white/10 bg-[#0f0f14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">The roadmap</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-[#f0f0f5] tracking-tight">Where Murphy Is Going</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { phase: "Phase 1", title: "FOH Intelligence", status: "Available Now", color: "#22c55e", body: "Real-time signal analysis, AI-assisted mix adjustments, and automatic console configuration. Murphy is live on stage." },
              { phase: "Phase 2", title: "Show Setup Automation", status: "Coming Soon", color: "#f59e0b", body: "Full scene generation from stage plots. Input list ingestion. Auto EQ starting points. Murphy does the setup so you can focus on the show." },
              { phase: "Phase 3", title: "Venue Intelligence Network", status: "Roadmap", color: "#7b5cf6", body: "Murphy builds a living database of every venue he works. Acoustic profiles, feedback frequencies, PA behavior. Walk in — he already knows the room." },
              { phase: "Phase 4", title: "Production Operating System", status: "Vision", color: "#6b7280", body: "Murphy expands beyond FOH — DMX lighting, show automation, monitor mixing, production analytics. The AI OS for your entire production." },
            ].map(({ phase, title, status, color, body }, i) => (
              <motion.div key={phase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-8 border border-white/10 bg-[var(--color-surface)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">{phase}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${color}20`, color }}>{status}</span>
                </div>
                <h3 className="text-xl font-bold text-[#f0f0f5] mb-3">{title}</h3>
                <p className="text-sm text-[#8a8a9a]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#f0f0f5] mb-12">Console Integrations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Behringer X32 / Midas M32", desc: "Murphy's home console. Full bidirectional control via OSC — faders, EQ, gates, compression, bus sends, scene recall." },
              { name: "Yamaha Digital Series", desc: "Full OSC integration across the CL, QL, and TF series. Murphy fits right into Yamaha's ecosystem." },
              { name: "Allen & Heath", desc: "dLive, Avantis, and SQ series supported. Murphy speaks their language." },
            ].map(({ name, desc }) => (
              <div key={name} className="rounded-2xl p-6 border border-white/10 bg-[var(--color-surface)]">
                <h3 className="font-bold text-[#f0f0f5] mb-3">{name}</h3>
                <p className="text-sm text-[#8a8a9a]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/10 bg-[#0f0f14]">
        <h2 className="text-4xl font-bold text-[#f0f0f5] mb-6">Ready to Put Murphy to Work?</h2>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.35)]">
          Hire Murphy →
        </Link>
      </section>

      <Footer />
    </>
  );
}
