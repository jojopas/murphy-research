import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Radio, Check, X } from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <Link href="/" className="flex items-center gap-2"><span className="text-2xl">🐾</span><span className="font-bold text-xl tracking-tight">Murphy</span></Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <Link href="/products" className="text-white">Products</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="/contact"><Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">Hire Murphy</Button></Link>
      </nav>

      <section className="text-center px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Two Versions. <span style={{ color: "#7b5cf6" }}>One Murphy.</span></h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
          Whether you&apos;re a touring engineer with a gig bag or a venue building a permanent install, there&apos;s a Murphy built for your production.
        </p>
      </section>

      {/* Products */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Bridge */}
          <div className="rounded-2xl p-10 border" style={{ background: "#0f0f1a", borderColor: "#7b5cf6" }}>
            <div className="flex items-center gap-3 mb-6">
              <Radio className="w-6 h-6" style={{ color: "#7b5cf6" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7b5cf6" }}>On the Road</span>
            </div>
            <h2 className="text-3xl font-black mb-1">Murphy Bridge</h2>
            <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>Powered by Raspberry Pi</p>
            <p className="text-sm font-semibold mb-6" style={{ color: "#7b5cf6" }}>The AI engineer in your gear bag.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              Murphy Bridge is the portable production intelligence unit — built for engineers and touring acts who need AI-assisted mixing on every stage.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b7280" }}>Built for</p>
            <ul className="mb-8 space-y-2 text-sm" style={{ color: "#9ca3af" }}>
              <li>• FOH engineers who work multiple venues</li>
              <li>• Touring bands who need consistent sound city to city</li>
              <li>• Small to mid-size venues getting started with AI mixing</li>
            </ul>
            <p className="text-2xl font-black mb-6">From $999</p>
            <Link href="/contact">
              <Button style={{ background: "#7b5cf6", color: "#fff" }} className="w-full cursor-pointer hover:opacity-90 text-base">
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-2xl p-10 border" style={{ background: "#0f0f1a", borderColor: "#f59e0b" }}>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6" style={{ color: "#f59e0b" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f59e0b" }}>In the House</span>
            </div>
            <h2 className="text-3xl font-black mb-1">Murphy Pro</h2>
            <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>Powered by Mac Mini M4</p>
            <p className="text-sm font-semibold mb-6" style={{ color: "#f59e0b" }}>Production intelligence built for the big room.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6">
              Murphy Pro is the full-power system — rack-ready, built for venues, touring productions, and engineers who demand the best.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b7280" }}>Built for</p>
            <ul className="mb-8 space-y-2 text-sm" style={{ color: "#9ca3af" }}>
              <li>• Professional venues and permanent installs</li>
              <li>• Touring productions with complex technical riders</li>
              <li>• Productions that need full Phase 1–4 capabilities</li>
            </ul>
            <p className="text-2xl font-black mb-6">From $1,499</p>
            <Link href="/contact">
              <Button style={{ background: "#f59e0b", color: "#0a0a0f" }} className="w-full cursor-pointer hover:opacity-90 text-base">
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Full Comparison</h2>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#1f2937" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#0a0a0f" }}>
                  <th className="text-left p-4 font-semibold" style={{ color: "#6b7280" }}>Feature</th>
                  <th className="p-4 font-bold text-center" style={{ color: "#7b5cf6" }}>Murphy Bridge</th>
                  <th className="p-4 font-bold text-center" style={{ color: "#f59e0b" }}>Murphy Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
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
                ].map(([feature, bridge, pro], i) => (
                  <tr key={i} style={{ borderTop: "1px solid #1f2937" }}>
                    <td className="p-4" style={{ color: "#9ca3af" }}>{feature}</td>
                    <td className="p-4 text-center">
                      {bridge === true ? <Check className="w-4 h-4 mx-auto" style={{ color: "#22c55e" }} /> :
                       bridge === false ? <X className="w-4 h-4 mx-auto" style={{ color: "#374151" }} /> :
                       <span style={{ color: "#e5e7eb" }}>{bridge}</span>}
                    </td>
                    <td className="p-4 text-center">
                      {pro === true ? <Check className="w-4 h-4 mx-auto" style={{ color: "#22c55e" }} /> :
                       pro === false ? <X className="w-4 h-4 mx-auto" style={{ color: "#374151" }} /> :
                       <span style={{ color: "#e5e7eb" }}>{pro}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center border-t" style={{ borderColor: "#1f2937", background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)" }}>
        <h2 className="text-4xl font-black mb-6">Not Sure Which Murphy?</h2>
        <p className="text-lg mb-10" style={{ color: "#9ca3af" }}>Get in touch and we&apos;ll help you find the right fit.</p>
        <Link href="/contact">
          <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="text-lg px-10 cursor-pointer hover:opacity-90">
            Talk to the Team <ArrowRight className="ml-2 w-5 h-5" />
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
