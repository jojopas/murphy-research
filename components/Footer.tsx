import Link from "next/link";

const footerLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link href="/">
              <img src="/murphy-logo.jpg" alt="Murphy AI" className="h-8 w-auto object-contain mb-2" />
            </Link>
            <p className="text-[#8a8a9a] text-sm">AI you can trust. Sound you can hear.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <Link key={href} href={href} className="text-[#8a8a9a] hover:text-[#f0f0f5] text-sm transition-colors duration-150">{label}</Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#8a8a9a] text-sm">
          <span>&copy; {new Date().getFullYear()} Murphy Research LLC. All rights reserved. · Patent Pending — US App. 64/009,137</span>
          <a href="mailto:hello@murphyresearch.ai" className="hover:text-[#f0f0f5] transition-colors">hello@murphyresearch.ai</a>
        </div>
      </div>
    </footer>
  );
}
