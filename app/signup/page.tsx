"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Loader2, CheckCircle } from "lucide-react";
import Nav from "@/components/Nav";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16 flex flex-col items-center justify-center px-6 pb-24">
        <div className="w-full max-w-sm space-y-8">
          {success ? (
            <div className="text-center space-y-4 pt-20">
              <CheckCircle className="w-16 h-16 mx-auto text-green-400" />
              <h1 className="text-3xl font-bold text-[#f0f0f5]">Check Your Email</h1>
              <p className="text-[#8a8a9a]">
                We sent a confirmation link to <strong className="text-[#f0f0f5]">{email}</strong>.
                Click the link to activate your account, then log in.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center mt-4 px-6 py-2.5 rounded-lg bg-[#7b5cf6] text-white font-semibold text-sm hover:bg-[#6d4fe0] transition-colors"
              >
                Go to Login
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center pt-12">
                <img src="/murphy-logo.jpg" alt="Murphy" className="w-16 h-16 mx-auto rounded-full object-cover mb-4" style={{ boxShadow: "0 0 40px rgba(123,92,246,0.25)" }} />
                <h1 className="text-3xl font-bold mb-2 text-[#f0f0f5]">Create Your Account</h1>
                <p className="text-sm text-[#8a8a9a]">
                  Sign up to pair your Murphy field unit
                </p>
              </div>

              {error && (
                <div className="rounded-lg px-4 py-3 text-sm bg-red-900/20 text-red-300 border border-red-900/40">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#8a8a9a]">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-lg px-4 py-3 text-base outline-none transition-colors bg-white/[0.06] border border-white/10 text-[#f0f0f5] placeholder:text-[#8a8a9a]/60 focus:border-[#7b5cf6] focus:ring-1 focus:ring-[#7b5cf6]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#8a8a9a]">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg px-4 py-3 text-base outline-none transition-colors bg-white/[0.06] border border-white/10 text-[#f0f0f5] placeholder:text-[#8a8a9a]/60 focus:border-[#7b5cf6] focus:ring-1 focus:ring-[#7b5cf6]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#8a8a9a]">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    required
                    minLength={6}
                    className="w-full rounded-lg px-4 py-3 text-base outline-none transition-colors bg-white/[0.06] border border-white/10 text-[#f0f0f5] placeholder:text-[#8a8a9a]/60 focus:border-[#7b5cf6] focus:ring-1 focus:ring-[#7b5cf6]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-lg bg-[#7b5cf6] text-white font-semibold text-base hover:bg-[#6d4fe0] transition-colors shadow-[0_0_20px_rgba(123,92,246,0.30)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
                </button>
              </form>

              <p className="text-center text-sm text-[#8a8a9a]">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-[#7b5cf6] hover:underline">
                  Log in
                </Link>
              </p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
