"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function InvestorLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/investors/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/investors");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#0a0a0f" }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/murphy-logo.jpg" alt="Murphy AI" className="h-12 w-auto object-contain" />
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#7b5cf6]/15 mb-5 mx-auto">
            <Lock className="w-5 h-5 text-[#7b5cf6]" />
          </div>
          <h1 className="text-xl font-bold text-center text-[#f0f0f5] mb-1">Investor Access</h1>
          <p className="text-sm text-center text-[#8a8a9a] mb-6">
            This section is password protected.<br />Enter your access code to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access code"
              autoFocus
              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border text-[#f0f0f5] placeholder-[#6b7280] text-sm outline-none focus:border-[#7b5cf6] transition-colors"
              style={{ borderColor: error ? "#ef4444" : "rgba(255,255,255,0.1)" }}
            />
            {error && (
              <p className="text-xs text-red-400 text-center">Incorrect access code. Try again.</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 rounded-lg bg-[#7b5cf6] text-white font-semibold text-sm hover:bg-[#6d4fe0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying…" : "Continue →"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#6b7280] mt-6">
          Need access?{" "}
          <a href="mailto:hello@murphyresearch.ai" className="text-[#7b5cf6] hover:opacity-80 transition-opacity">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
