import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murphy AI — Every Engineer Needs a Good Dog",
  description: "Murphy is your AI production companion — always at the console, always listening, never complaining. Built on 400+ real shows.",
  icons: { icon: "/murphy-avatar.png", apple: "/murphy-avatar.png" },
  openGraph: {
    title: "Murphy AI — Every Engineer Needs a Good Dog",
    description: "AI production intelligence for live events. Built on 400+ real shows. Ready to work yours.",
    siteName: "Murphy AI",
    images: [{ url: "/murphy-avatar.png", width: 512, height: 512, alt: "Murphy AI" }],
  },
  twitter: {
    card: "summary",
    title: "Murphy AI — Every Engineer Needs a Good Dog",
    description: "AI production intelligence for live events.",
    images: ["/murphy-avatar.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
