import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Radio, TrendingUp, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: "#1f2937" }}>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl tracking-tight">Murphy</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9ca3af" }}>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <Link href="/contact">
          <Button style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 cursor-pointer">
            Hire Murphy
          </Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20">
        <div className="mb-8 text-9xl select-none">🐶</div>
        {/* TODO: Replace with Murphy avatar image */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none">
          Meet Murphy.
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: "#7b5cf6" }}>
          Man&apos;s best friend. Now at the console.
        </p>
        <p className="text-xl max-w-2xl mb-3" style={{ color: "#9ca3af" }}>
          Murphy is your AI production companion — configuring your console, balancing your mix, and learning every venue it plays.
        </p>
        <p className="text-base mb-10" style={{ color: "#f59e0b" }}>
          Built on 400+ real shows. Always listening. Never complaining.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="hover:opacity-90 text-lg px-8 cursor-pointer">
              Hire Murphy <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" style={{ borderColor: "#1f2937", color: "#e5e7eb", background: "transparent" }} className="hover:opacity-80 text-lg px-8 cursor-pointer">
              See How It Works
            </Button>
          </Link>
        </div>
      </section>

      {/* Problem Strip */}
      <section className="border-y py-12 px-6" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-black mb-2" style={{ color: "#7b5cf6" }}>Millions</p>
            <p style={{ color: "#9ca3af" }}>of live events. Not enough skilled engineers to cover them.</p>
          </div>
          <div>
            <p className="text-3xl font-black mb-2" style={{ color: "#7b5cf6" }}>20 min</p>
            <p style={{ color: "#9ca3af" }}>average soundcheck. No room for error.</p>
          </div>
          <div>
            <AlertCircle className="w-8 h-8 mx-auto mb-2" style={{ color: "#f59e0b" }} />
            <p style={{ color: "#9ca3af" }}>One bad mix is all it takes to lose a crowd, a client, or a booking.</p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm" style={{ color: "#6b7280" }}>Murphy was built because the industry needed it.</p>
      </section>

      {/* Segment Cards */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Who Works with Murphy?</h2>
        <p className="text-center mb-12" style={{ color: "#9ca3af" }}>Same dog. Three different jobs.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
            <div className="text-3xl mb-4">🎚️</div>
            <h3 className="text-xl font-bold mb-1">FOH Engineers</h3>
            <p className="text-sm font-semibold mb-4" style={{ color: "#7b5cf6" }}>Your Mix. Supercharged.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6 text-sm">
              Murphy is your co-pilot at the console — faster setup, smarter starting points, real-time AI backing your every call. You stay in control. Murphy makes you faster.
            </p>
            <Link href="/products" className="text-sm font-semibold hover:opacity-80" style={{ color: "#7b5cf6" }}>
              Murphy for Engineers →
            </Link>
          </div>
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
            <div className="text-3xl mb-4">🎸</div>
            <h3 className="text-xl font-bold mb-1">Bands & Touring Acts</h3>
            <p className="text-sm font-semibold mb-4" style={{ color: "#7b5cf6" }}>Bring Your Sound Everywhere.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6 text-sm">
              Tired of house engineers who don&apos;t know your show? Murphy knows your inputs, your preferences, your mix — and travels with you. Every stage sounds like home.
            </p>
            <Link href="/products" className="text-sm font-semibold hover:opacity-80" style={{ color: "#7b5cf6" }}>
              Murphy for Bands →
            </Link>
          </div>
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#1f2937" }}>
            <div className="text-3xl mb-4">🏟️</div>
            <h3 className="text-xl font-bold mb-1">Venues</h3>
            <p className="text-sm font-semibold mb-4" style={{ color: "#7b5cf6" }}>Great Sound. Every Night.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6 text-sm">
              Engineer shortage? Staff turnover? Murphy installs in your house system and makes every operator capable from day one. Consistent sound. Every show. No excuses.
            </p>
            <Link href="/products" className="text-sm font-semibold hover:opacity-80" style={{ color: "#7b5cf6" }}>
              Murphy for Venues →
            </Link>
          </div>
        </div>
      </section>

      {/* How Murphy Works */}
      <section className="px-6 py-20 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Murphy Doesn&apos;t Guess. He Listens.</h2>
          <p className="text-center mb-16" style={{ color: "#9ca3af" }}>
            Murphy sits between your console and the room. And never stops listening.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plug In", body: "Murphy connects to your existing digital console via OSC. No new hardware required. No rewiring. Just Murphy, doing his job." },
              { step: "02", title: "Murphy Listens", body: "Real-time analysis of every channel — gain staging, frequency balance, mix relationships. Murphy hears what you hear. And a lot you don't." },
              { step: "03", title: "Murphy Acts", body: "Mix adjustments, console configuration, monitor suggestions — Murphy moves fast so you don't have to. You approve. Murphy executes." },
              { step: "04", title: "Murphy Learns", body: "Every show adds to Murphy's knowledge. Every venue. Every room. Every mix. Murphy gets smarter every night he works." },
            ].map(({ step, title, body }) => (
              <div key={step} className="text-center">
                <p className="text-4xl font-black mb-3" style={{ color: "#7b5cf6" }}>{step}</p>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm" style={{ color: "#9ca3af" }}>{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" style={{ borderColor: "#7b5cf6", color: "#7b5cf6", background: "transparent" }} className="hover:opacity-80 cursor-pointer">
                See the full signal flow →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Two Versions. One Murphy.</h2>
        <p className="text-center mb-12" style={{ color: "#9ca3af" }}>Built for every stage, every budget.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#7b5cf6" }}>
            <div className="flex items-center gap-3 mb-4">
              <Radio className="w-5 h-5" style={{ color: "#7b5cf6" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7b5cf6" }}>On the Road</span>
            </div>
            <h3 className="text-2xl font-black mb-1">Murphy Bridge</h3>
            <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>Powered by Raspberry Pi</p>
            <p className="text-sm font-semibold mb-4" style={{ color: "#7b5cf6" }}>The AI engineer in your gear bag.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6 text-sm">
              Portable production intelligence for engineers and touring acts who need AI-assisted mixing on every stage.
            </p>
            <p className="font-bold mb-4">From $999</p>
            <Link href="/contact">
              <Button style={{ background: "#7b5cf6", color: "#fff" }} className="w-full cursor-pointer hover:opacity-90">
                Join Waitlist →
              </Button>
            </Link>
          </div>
          <div className="rounded-2xl p-8 border" style={{ background: "#0f0f1a", borderColor: "#f59e0b" }}>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5" style={{ color: "#f59e0b" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f59e0b" }}>In the House</span>
            </div>
            <h3 className="text-2xl font-black mb-1">Murphy Pro</h3>
            <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>Powered by Mac Mini M4</p>
            <p className="text-sm font-semibold mb-4" style={{ color: "#f59e0b" }}>Production intelligence built for the big room.</p>
            <p style={{ color: "#9ca3af" }} className="mb-6 text-sm">
              The full-power system for venues, touring productions, and engineers who demand the best.
            </p>
            <p className="font-bold mb-4">From $1,499</p>
            <Link href="/contact">
              <Button style={{ background: "#f59e0b", color: "#0a0a0f" }} className="w-full cursor-pointer hover:opacity-90">
                Join Waitlist →
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/products" className="text-sm font-semibold hover:opacity-80" style={{ color: "#7b5cf6" }}>
            Compare full specs →
          </Link>
        </div>
      </section>

      {/* Console Integrations */}
      <section className="px-6 py-12 border-t text-center" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "#6b7280" }}>Works with the consoles on your stage</p>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold" style={{ color: "#9ca3af" }}>
          <span>Behringer X32</span>
          <span style={{ color: "#374151" }}>•</span>
          <span>Midas M32</span>
          <span style={{ color: "#374151" }}>•</span>
          <span>Yamaha Digital Series</span>
          <span style={{ color: "#374151" }}>•</span>
          <span>Allen & Heath</span>
        </div>
        <p className="mt-4 text-xs" style={{ color: "#6b7280" }}>More integrations coming. Murphy is always learning new tricks.</p>
      </section>

      {/* Data flywheel */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <TrendingUp className="w-8 h-8 mx-auto mb-6" style={{ color: "#7b5cf6" }} />
        <h2 className="text-3xl font-bold mb-4">Murphy Gets Smarter Every Show He Works.</h2>
        <p className="text-lg mb-4" style={{ color: "#9ca3af" }}>
          Every performance builds his knowledge — venue acoustics, microphone behavior, feedback zones, mix decisions. The more Murphy works, the better he gets. No AI built in a lab can replicate what Murphy learns on a real stage.
        </p>
        <p className="text-sm" style={{ color: "#f59e0b" }}>400+ shows in. Just getting started.</p>
      </section>

      {/* Founder */}
      <section className="px-6 py-16 border-t" style={{ borderColor: "#1f2937", background: "#0f0f1a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Built by Someone Who Lived the Problem.</h2>
          <p style={{ color: "#9ca3af" }} className="mb-4">
            Joe Pascual has led Phoenix 5 through 400+ shows across venues of every size. He&apos;s been the guy watching a soundcheck fall apart with no time to fix it. Murphy is the tool he always wished existed — built with a professional FOH engineer and tested on real stages, not in a lab.
          </p>
          <Link href="/about" className="text-sm font-semibold hover:opacity-80" style={{ color: "#7b5cf6" }}>
            The full story →
          </Link>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 100%)" }}>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Murphy is Almost Ready for His Next Gig.</h2>
        <p className="text-lg mb-3 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
          Join the early access list. Be first in line when Murphy ships.
        </p>
        <p className="text-sm mb-10" style={{ color: "#6b7280" }}>Engineers, bands, and venues — all welcome.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" style={{ background: "#7b5cf6", color: "#fff" }} className="text-lg px-10 cursor-pointer hover:opacity-90">
              Hire Murphy → <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/investors">
            <Button size="lg" variant="outline" style={{ borderColor: "#1f2937", color: "#e5e7eb", background: "transparent" }} className="text-lg px-10 cursor-pointer hover:opacity-80">
              Investor Inquiries
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-xs" style={{ color: "#6b7280" }}>No spam. Just Murphy updates.</p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#1f2937" }}>
        <div className="flex items-center gap-2">
          <span className="text-xl">🐾</span>
          <span className="font-bold">Murphy</span>
          <span className="text-sm ml-2" style={{ color: "#6b7280" }}>by Murphy Research LLC</span>
        </div>
        <div className="flex gap-6 text-sm" style={{ color: "#6b7280" }}>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p className="text-sm" style={{ color: "#6b7280" }}>AI you can trust. Sound you can hear.</p>
      </footer>

    </main>
  );
}
