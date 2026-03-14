import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <Link href="/" className="flex items-center gap-2"><img src="/murphy-avatar.png" alt="Murphy" className="w-8 h-8 rounded-full object-cover" /><span className="font-bold text-xl tracking-tight">Murphy</span></Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="/contact"><Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">Hire Murphy</Button></Link>
      </nav>

      <section className="text-center px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Murphy Was Built Because<br /><span style={{ color: "#7b5cf6" }}>the Industry Needed It.</span></h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
          Not in a lab. Not by a team that&apos;s never been on a stage. By a band leader who&apos;s run 400+ shows and watched the engineering gap get worse every year.
        </p>
      </section>

      {/* Joe's Story */}
      <section className="px-6 py-20 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Story</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#9ca3af" }}>
            <p>
              Joe Pascual has spent 15 years building technology platforms — and 15 years performing live. He&apos;s the band leader of Phoenix 5, a national-touring act that&apos;s played 400+ shows across venues of every size, shape, and technical configuration.
            </p>
            <p>
              He&apos;s been the guy at front of house with 20 minutes to soundcheck a full band in a room he&apos;s never heard. He&apos;s watched shows fall apart because the house engineer didn&apos;t know the rig. He&apos;s brought in engineers who were brilliant in their home market and lost in someone else&apos;s room.
            </p>
            <p>
              Murphy is the tool he always wished existed.
            </p>
          </div>
          <blockquote className="mt-10 pl-6 border-l-4" style={{ borderColor: "#7b5cf6" }}>
            <p className="text-xl italic mb-3" style={{ color: "#e5e7eb" }}>
              &quot;I built the software. I lived the problem. That&apos;s not common — and it&apos;s why Murphy works the way it does.&quot;
            </p>
            <cite className="text-sm" style={{ color: "#6b7280" }}>— Joe Pascual, Founder & CEO</cite>
          </blockquote>
        </div>
      </section>

      {/* What Makes Murphy Different */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Murphy Different</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Real-World Tested", body: "Murphy wasn't built in a studio. It was built during real shows, on real stages, with real feedback from real engineers." },
            { title: "Domain Expertise Built In", body: "Murphy's training data comes from hundreds of live performances — not simulations. The AI understands how a live show actually sounds." },
            { title: "Co-Developed with a Pro", body: "Every decision gets the engineer test: \"Would I actually use this on a real gig?\" If the answer is no, it doesn't ship." },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
              <h3 className="font-bold text-lg mb-3">{title}</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The bigger picture */}
      <section className="px-6 py-20 border-t text-center" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Bigger Picture</h2>
          <p className="text-lg leading-relaxed" style={{ color: "#9ca3af" }}>
            Murphy is more than a tool. It&apos;s a solution to a structural problem — the growing gap between demand for live events and the supply of skilled engineers. Murphy doesn&apos;t replace engineers. Murphy makes every engineer more capable, every operator more confident, and every show more consistent.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center border-t" style={{ borderColor: "#1f2937", background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)" }}>
        <h2 className="text-4xl font-black mb-6">Want to Be Part of It?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="text-lg px-10 cursor-pointer hover:opacity-90">
              Hire Murphy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/investors">
            <Button size="lg" variant="outline" style={{ borderColor: "#1f2937", color: "#e5e7eb", background: "transparent" }} className="text-lg px-10 cursor-pointer hover:opacity-80">
              Investor Info
            </Button>
          </Link>
        </div>
      </section>

      <footer className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#1f2937" }}>
        <div className="flex items-center gap-2"><span className="text-xl">🐾</span><span className="font-bold">Murphy</span><span className="text-sm ml-2" style={{ color: "#6b7280" }}>by Murphy Research LLC</span></div>
        <p className="text-sm" style={{ color: "#6b7280" }}>AI you can trust. Sound you can hear.</p>
      </footer>
    </main>
  );
}
