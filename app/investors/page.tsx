import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Investors() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <Link href="/" className="flex items-center gap-2"><img src="/murphy-avatar.png" alt="Murphy" className="w-8 h-8 rounded-full object-cover" /><span className="font-bold text-xl tracking-tight">Murphy</span></Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/investors" className="text-white">Investors</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="/contact"><Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">Hire Murphy</Button></Link>
      </nav>

      <section className="text-center px-6 pt-24 pb-16">
        <TrendingUp className="w-10 h-10 mx-auto mb-6" style={{ color: "#7b5cf6" }} />
        <h1 className="text-5xl md:text-6xl font-black mb-6">Murphy Is Building the<br /><span style={{ color: "#7b5cf6" }}>Data Moat for Live Sound.</span></h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
          400+ real shows. A growing waitlist of engineers and venues. A founding team that built the software AND lived the problem.
        </p>
      </section>

      {/* Why Now */}
      <section className="px-6 py-20 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Now</h2>
          <p className="text-lg leading-relaxed" style={{ color: "#9ca3af" }}>
            Live entertainment is one of the world&apos;s most resilient industries — and one of its most underserved by technology. The professional audio equipment market exceeds $20 billion annually. The number of live events grows every year. The supply of skilled engineers does not.
          </p>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#9ca3af" }}>
            Murphy is positioned at exactly the right intersection: AI-native, hardware-accelerated, and built on a data layer that can only be created through real deployments.
          </p>
        </div>
      </section>

      {/* Business Model */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Business Model</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { channel: "Hardware", desc: "Murphy Bridge + Murphy Pro units", price: "$999–$1,499" },
            { channel: "Software", desc: "Monthly AI features and venue intelligence", price: "$20–$50/mo" },
            { channel: "Enterprise", desc: "Venue and production company licensing", price: "Custom" },
          ].map(({ channel, desc, price }) => (
            <div key={channel} className="rounded-2xl p-8 border text-center" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
              <h3 className="font-bold text-lg mb-2">{channel}</h3>
              <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>{desc}</p>
              <p className="font-black text-xl" style={{ color: "#7b5cf6" }}>{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Raise */}
      <section className="px-6 py-20 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">The Raise</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Raising", value: "$500K–$1.5M", sub: "Seed Round" },
              { label: "Pre-Money Valuation", value: "$8M", sub: "" },
              { label: "Investor Equity", value: "~11%", sub: "" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="rounded-2xl p-6 border" style={{ background: "#0a0a0f", borderColor: "#1f2937" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#6b7280" }}>{label}</p>
                <p className="text-3xl font-black mb-1" style={{ color: "#7b5cf6" }}>{value}</p>
                {sub && <p className="text-sm" style={{ color: "#9ca3af" }}>{sub}</p>}
              </div>
            ))}
          </div>
          <p style={{ color: "#9ca3af" }}>
            Current stage: Prototype built and real-world tested, waitlist in progress, engineer and venue outreach underway.
          </p>
        </div>
      </section>

      {/* Exit Paths */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Strategic Exit Paths</h2>
        <p className="mb-8" style={{ color: "#9ca3af" }}>Murphy&apos;s natural acquirers are companies for whom Murphy&apos;s data layer represents significant strategic value:</p>
        <div className="flex flex-wrap gap-3 mb-10">
          {["Yamaha Corporation", "Music Tribe (Behringer / Midas)", "Allen & Heath", "Avid Technology", "L-Acoustics", "d&b audiotechnik"].map((co) => (
            <span key={co} className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: "#1f2937", color: "#9ca3af", background: "#0f0f1a" }}>{co}</span>
          ))}
        </div>
        <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#7b5cf6" }}>
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#7b5cf6" }}>18–36 Month Target</p>
          <p style={{ color: "#9ca3af" }}>
            500–1,000 active engineers · 1,000+ venues in database · $2M–$5M ARR → $40M–$100M valuation
          </p>
        </div>
      </section>

      {/* Deck CTA */}
      <section className="px-6 py-24 text-center border-t" style={{ borderColor: "#1f2937", background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)" }}>
        <h2 className="text-4xl font-black mb-6">Request the Investor Deck</h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
          Schedule a call with Joe or request the full deck to learn more about the opportunity.
        </p>
        <Link href="/contact">
          <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="text-lg px-10 cursor-pointer hover:opacity-90">
            Request Deck <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>

      <footer className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#1f2937" }}>
        <div className="flex items-center gap-2"><span className="text-xl">🐾</span><span className="font-bold">Murphy</span><span className="text-sm ml-2" style={{ color: "#6b7280" }}>by Murphy Research LLC</span></div>
        <p className="text-sm" style={{ color: "#6b7280" }}>AI you can trust. Sound you can hear.</p>
      </footer>
    </main>
  );
}
