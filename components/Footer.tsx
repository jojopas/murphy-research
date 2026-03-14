import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/murphy-avatar.png" alt="Murphy" className="w-7 h-7 rounded-full object-cover" />
          <span className="font-bold text-[#f0f0f5]">Murphy</span>
          <span className="text-sm text-[#8a8a9a] ml-1">by Murphy Research LLC</span>
        </Link>
        <div className="flex gap-6 text-sm text-[#8a8a9a]">
          {[
            ["/products", "Products"],
            ["/how-it-works", "How It Works"],
            ["/about", "About"],
            ["/investors", "Investors"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-[#f0f0f5] transition-colors">{label}</Link>
          ))}
        </div>
        <p className="text-sm text-[#8a8a9a]">AI you can trust. Sound you can hear.</p>
      </div>
    </footer>
  );
}
