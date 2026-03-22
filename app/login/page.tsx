"use client";

import { Suspense, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import Nav from "@/components/Nav";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";
  const callbackError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    callbackError ? "Authentication failed. Please try again." : null
  );
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  };

  return (
    <div className="w-full max-w-sm space-y-8">
      <div className="text-center">
        <img src="/murphy-logo.jpg" alt="Murphy" className="w-16 h-16 mx-auto rounded-full object-cover mb-4" style={{ boxShadow: "0 0 40px rgba(123,92,246,0.25)" }} />
        <h1 className="text-3xl font-bold mb-2 text-[#f0f0f5]">Welcome Back</h1>
        <p className="text-sm text-[#8a8a9a]">
          Log in to access your Murphy dashboard
        </p>
      </div>

      {error && (
        <div className="rounded-lg px-4 py-3 text-sm bg-red-900/20 text-red-300 border border-red-900/40">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
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
            placeholder="Enter your password"
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
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Log In"}
        </button>
      </form>

      <p className="text-center text-sm text-[#8a8a9a]">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-[#7b5cf6] hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default function Login() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16 flex flex-col items-center justify-center px-6">
        <Suspense fallback={
          <div className="flex items-center justify-center pt-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#7b5cf6]" />
          </div>
        }>
          <LoginForm />
        </Suspense>
      </main>
    </>
  );
}
