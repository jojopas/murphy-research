import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <Link href="/" className="flex items-center gap-2"><span className="text-2xl">🐾</span><span className="font-bold text-xl tracking-tight">Murphy</span></Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/how-it-works" className="text-white">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="/contact"><Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">Hire Murphy</Button></Link>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Murphy Doesn&apos;t Guess.<br /><span style={{ color: "#7b5cf6" }}>He Listens.</span></h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
          Most mixing problems come from time pressure and unfamiliar rooms. Murphy solves both — by analyzing your signals in real time and acting on what he hears.
        </p>
      </section>

      {/* Signal Flow */}
      <section className="px-6 py-16 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">From stage to PA, Murphy is everywhere the signal goes.</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold my-10" style={{ color: "#9ca3af" }}>
            {["Stage Inputs", "→", "Digital Console", "→", "Murphy AI Engine", "→", "PA System"].map((item, i) => (
              <span key={i} style={{ color: item === "→" ? "#374151" : item === "Murphy AI Engine" ? "#7b5cf6" : "#e5e7eb" }}>{item}</span>
            ))}
          </div>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>↑ Continuous feedback loop ↑</p>
          <div className="grid md:grid-cols-2 gap-4">
            {["Individual channel gain and frequency balance", "Stereo mix output and room response", "Monitor sends and IEM mixes", "Real-time feedback detection"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl p-4 border" style={{ background: "#0a0a0f", borderColor: "#1f2937" }}>
                <span style={{ color: "#7b5cf6" }}>◆</span>
                <span className="text-sm" style={{ color: "#9ca3af" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Console Config */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Upload a Stage Plot. Murphy Builds Your Scene.</h2>
        <p style={{ color: "#9ca3af" }}>
          Hand Murphy an input list or stage plot and he&apos;ll auto-generate your console scene — channel names, starting EQ, gain structure, monitor send suggestions, and microphone preset profiles. What used to take an hour takes minutes.
        </p>
      </section>

      {/* Phase Roadmap */}
      <section className="px-6 py-20 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Where Murphy Is Going</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { phase: "Phase 1", title: "FOH Intelligence", status: "Available Now", statusColor: "#22c55e", body: "Real-time signal analysis, AI-assisted mix adjustments, and automatic console configuration. Murphy is live on stage." },
              { phase: "Phase 2", title: "Show Setup Automation", status: "Coming Soon", statusColor: "#f59e0b", body: "Full scene generation from stage plots. Input list ingestion. Auto EQ starting points. Murphy does the setup so you can focus on the show." },
              { phase: "Phase 3", title: "Venue Intelligence Network", status: "Roadmap", statusColor: "#7b5cf6", body: "Murphy builds a living database of every venue he works. Acoustic profiles, feedback frequencies, PA behavior. Walk into any venue Murphy has worked — he already knows the room." },
              { phase: "Phase 4", title: "Production Operating System", status: "Vision", statusColor: "#6b7280", body: "Murphy expands beyond FOH — DMX lighting, show automation, monitor mixing, production analytics. Murphy becomes the AI operating system for your entire production." },
            ].map(({ phase, title, status, statusColor, body }) => (
              <div key={phase} className="rounded-2xl p-8 border" style={{ background: "#0a0a0f", borderColor: "#1f2937" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b7280" }}>{phase}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${statusColor}20`, color: statusColor }}>{status}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-sm" style={{ color: "#9ca3af" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Console Integrations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Behringer X32 / Midas M32", desc: "Murphy's home console. Full bidirectional control via OSC — faders, EQ, gates, compression, bus sends, scene recall. Murphy knows the X32 like a veteran engineer." },
            { name: "Yamaha Digital Series", desc: "Full OSC integration across the CL, QL, and TF series. Murphy fits right into Yamaha's ecosystem." },
            { name: "Allen & Heath", desc: "dLive, Avantis, and SQ series supported. Murphy speaks their language." },
          ].map(({ name, desc }) => (
            <div key={name} className="rounded-2xl p-6 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
              <h3 className="font-bold mb-3">{name}</h3>
              <p className="text-sm" style={{ color: "#9ca3af" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center border-t" style={{ borderColor: "#1f2937", background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)" }}>
        <h2 className="text-4xl font-black mb-6">Ready to Put Murphy to Work?</h2>
        <Link href="/contact">
          <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="text-lg px-10 cursor-pointer hover:opacity-90">
            Hire Murphy <ArrowRight className="ml-2 w-5 h-5" />
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
