import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Radio, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl tracking-tight" style={{ color: "#e5e7eb" }}>Murphy</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <a href="/products" className="hover:text-white transition-colors">Products</a>
          <a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">
          Hire Murphy
        </Button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20">
        <div className="mb-8 text-8xl">🐶</div>
        {/* TODO: Replace emoji with Murphy avatar image */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none">
          Every Engineer Needs<br />
          <span style={{ color: "#7b5cf6" }}>a Good Dog.</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-4" style={{ color: "#9ca3af" }}>
          Murphy is your AI production companion — always at the console, always listening, never complaining.
        </p>
        <p className="text-base mb-10" style={{ color: "#f59e0b" }}>
          Built on 400+ real shows. Ready to work yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 text-lg px-8 cursor-pointer">
            Hire Murphy <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" style={{ borderColor: "#1f2937", color: "#e5e7eb", background: "transparent" }} className="hover:opacity-80 text-lg px-8 cursor-pointer">
            See How It Works
          </Button>
        </div>
      </section>

      {/* Tagline divider */}
      <div className="text-center py-8 border-y" style={{ borderColor: "#1f2937" }}>
        <p className="text-sm tracking-widest uppercase" style={{ color: "#9ca3af" }}>
          AI you can trust. Sound you can hear.
        </p>
      </div>

      {/* Segment cards */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Who Works with Murphy?</h2>
        <p className="text-center mb-12" style={{ color: "#9ca3af" }}>Same dog. Three different jobs.</p>
        <div className="grid md:grid-cols-3 gap-6">

          {/* FOH Engineers */}
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
            <div className="text-3xl mb-4">🎚️</div>
            <h3 className="text-xl font-bold mb-3">FOH Engineers</h3>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              Rushed soundcheck. Unfamiliar room. Flying blind on a rig you've never touched. Murphy has your back — faster setup, better starting point, smarter every night.
            </p>
            <a href="#" className="text-sm font-semibold" style={{ color: "#7b5cf6" }}>
              Murphy as your co-pilot →
            </a>
          </div>

          {/* Bands */}
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
            <div className="text-3xl mb-4">🎸</div>
            <h3 className="text-xl font-bold mb-3">Bands & Touring Acts</h3>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              House engineers who don't know your show. Inconsistent sound city to city. Murphy knows your inputs, your preferences, your show — and brings your mix with you.
            </p>
            <a href="#" className="text-sm font-semibold" style={{ color: "#7b5cf6" }}>
              Bring Murphy on tour →
            </a>
          </div>

          {/* Venues */}
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
            <div className="text-3xl mb-4">🏟️</div>
            <h3 className="text-xl font-bold mb-3">Venues</h3>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              Engineer shortage. Training costs. Inconsistent guest experience. Murphy Bridge lives in-house — your staff becomes capable overnight. Every show sounds professional.
            </p>
            <a href="#" className="text-sm font-semibold" style={{ color: "#7b5cf6" }}>
              Install Murphy at your venue →
            </a>
          </div>
        </div>
      </section>

      {/* Product line */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Pick Your Murphy</h2>
        <p className="text-center mb-12" style={{ color: "#9ca3af" }}>Two configurations. One brain.</p>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Bridge */}
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#7b5cf6" }}>
            <div className="flex items-center gap-3 mb-4">
              <Radio className="w-6 h-6" style={{ color: "#7b5cf6" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7b5cf6" }}>On the Road</span>
            </div>
            <h3 className="text-2xl font-black mb-2">Murphy Bridge</h3>
            <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>Powered by Raspberry Pi</p>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              Portable. Affordable. Packs in your gig bag. Murphy Bridge plugs into any setup and gives you AI-assisted production intelligence wherever the tour takes you.
            </p>
            <Button style={{ background: "#7b5cf6", color: "#fff" }} className="w-full cursor-pointer hover:opacity-90">
              Hire Murphy Bridge
            </Button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#f59e0b" }}>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6" style={{ color: "#f59e0b" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f59e0b" }}>In the House</span>
            </div>
            <h3 className="text-2xl font-black mb-2">Murphy Pro</h3>
            <p className="text-sm mb-4" style={{ color: "#9ca3af" }}>Powered by Mac Mini</p>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              Full power. Permanent install. Murphy Pro is built for venues and touring rigs that demand the highest level of production intelligence, every single night.
            </p>
            <Button style={{ background: "#f59e0b", color: "#0a0a0f" }} className="w-full cursor-pointer hover:opacity-90">
              Hire Murphy Pro
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="px-6 py-20 text-center border-t" style={{ borderColor: "#1f2937" }}>
        <TrendingUp className="w-8 h-8 mx-auto mb-6" style={{ color: "#7b5cf6" }} />
        <h2 className="text-3xl font-bold mb-4">Built on Real Shows</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8" style={{ color: "#9ca3af" }}>
          Murphy wasn't built in a lab. It was built on stage — 400+ live events across real venues, real consoles, and real crowds. Every show makes Murphy smarter.
        </p>
        <p className="text-sm" style={{ color: "#6b7280" }}>
          Built by an engineer who lived the problem. Now solving it for everyone.
        </p>
      </section>

      {/* Waitlist CTA */}
      <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)" }}>
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready to Hire Murphy?
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
          Join the waitlist. Be first on the crew list when Murphy ships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="text-lg px-10 cursor-pointer hover:opacity-90">
            Join the Waitlist <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" style={{ borderColor: "#1f2937", color: "#e5e7eb", background: "transparent" }} className="text-lg px-10 cursor-pointer hover:opacity-80">
            Investor Inquiries
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#1f2937" }}>
        <div className="flex items-center gap-2">
          <span className="text-xl">🐾</span>
          <span className="font-bold" style={{ color: "#e5e7eb" }}>Murphy</span>
          <span className="text-sm ml-2" style={{ color: "#6b7280" }}>by Murphy Research LLC</span>
        </div>
        <p className="text-sm" style={{ color: "#6b7280" }}>
          AI you can trust. Sound you can hear.
        </p>
      </footer>

    </main>
  );
}
