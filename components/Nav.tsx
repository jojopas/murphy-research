"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Log In", href: "/login" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <img src="/murphy-logo.jpg" alt="Murphy AI" className="h-8 w-auto object-contain" />
          <span className="font-bold text-lg tracking-tight text-[#f0f0f5]">Murphy</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-[#8a8a9a]">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={`transition-colors duration-150 hover:text-[#f0f0f5] ${path === href ? "text-[#f0f0f5] font-medium" : ""}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-[#7b5cf6] text-white font-semibold text-sm hover:bg-[#6d4fe0] transition-colors shadow-[0_0_20px_rgba(123,92,246,0.30)]"
          >
            Hire Murphy
          </Link>
          <button className="lg:hidden text-[#f0f0f5] p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="py-2 text-sm text-[#8a8a9a] hover:text-[#f0f0f5] transition-colors" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-sm hover:bg-[#6d4fe0] transition-colors" onClick={() => setOpen(false)}>
            Hire Murphy
          </Link>
        </div>
      )}
    </header>
  );
}
