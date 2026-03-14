"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Nav />
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,92,246,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-4">The story</p>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-[#f0f0f5] tracking-tight mb-6">
            Murphy Was Built Because<br /><span className="text-[#7b5cf6]">the Industry Needed It.</span>
          </h1>
          <p className="text-xl text-[#8a8a9a]">Not in a lab. Not by a team that&apos;s never been on a stage. By a band leader who&apos;s run 400+ shows and watched the engineering gap get worse every year.</p>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-[#0f0f14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f0f0f5] mb-8">The Story</h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#8a8a9a]">
            <p>Joe Pascual has spent 15 years building technology platforms — and 15 years performing live. He&apos;s the band leader of Phoenix 5, a national-touring act that&apos;s played 400+ shows across venues of every size, shape, and technical configuration.</p>
            <p>He&apos;s been the guy at front of house with 20 minutes to soundcheck a full band in a room he&apos;s never heard. He&apos;s watched shows fall apart because the house engineer didn&apos;t know the rig. He&apos;s brought in engineers who were brilliant in their home market and lost in someone else&apos;s room.</p>
            <p>Murphy is the tool he always wished existed.</p>
          </div>
          <blockquote className="mt-10 pl-6 border-l-4 border-[#7b5cf6]">
            <p className="text-xl text-[#f0f0f5] italic mb-3">&quot;I built the software. I lived the problem. That&apos;s not common — and it&apos;s why Murphy works the way it does.&quot;</p>
            <cite className="text-sm text-[#6b7280]">— Joe Pascual, Founder & CEO</cite>
          </blockquote>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#f0f0f5] mb-12">What Makes Murphy Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Real-World Tested", body: "Murphy wasn't built in a studio. It was built during real shows, on real stages, with real feedback from real engineers." },
              { title: "Domain Expertise Built In", body: "Murphy's training data comes from hundreds of live performances — not simulations. The AI understands how a live show actually sounds." },
              { title: "Co-Developed with a Pro", body: "Every decision gets the engineer test: \"Would I actually use this on a real gig?\" If the answer is no, it doesn't ship." },
            ].map(({ title, body }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-8 border border-white/10 bg-[var(--color-surface)]">
                <h3 className="font-bold text-lg text-[#f0f0f5] mb-3">{title}</h3>
                <p className="text-sm text-[#8a8a9a]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 bg-[#0f0f14] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f0f0f5] mb-6">The Bigger Picture</h2>
          <p className="text-lg leading-relaxed text-[#8a8a9a]">Murphy is more than a tool. It&apos;s a solution to a structural problem — the growing gap between demand for live events and the supply of skilled engineers. Murphy doesn&apos;t replace engineers. Murphy makes every engineer more capable, every operator more confident, and every show more consistent.</p>
        </div>
      </section>

      <section className="py-24 px-6 text-center border-t border-white/10">
        <h2 className="text-4xl font-bold text-[#f0f0f5] mb-8">Want to Be Part of It?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_24px_rgba(123,92,246,0.35)]">Hire Murphy →</Link>
          <Link href="/investors" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/20 text-[#f0f0f5] font-semibold text-base hover:bg-white/10 transition-colors">Investor Info</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
