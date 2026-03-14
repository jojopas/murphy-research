"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/investors", label: "Investors" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/murphy-avatar.png" alt="Murphy" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-bold text-lg tracking-tight text-[#f0f0f5]">Murphy</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${path === href ? "text-[#f0f0f5] font-medium" : "text-[#8a8a9a] hover:text-[#f0f0f5]"}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#7b5cf6] text-white font-semibold text-sm hover:bg-[#6d4fe0] transition-colors shadow-[0_0_20px_rgba(123,92,246,0.35)]"
        >
          Hire Murphy
        </Link>
      </div>
    </nav>
  );
}
