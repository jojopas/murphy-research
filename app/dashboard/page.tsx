"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Copy, Check, LogOut, QrCode, RefreshCw, Loader2, Globe } from "lucide-react";
import type { User, Session } from "@supabase/supabase-js";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const accessToken = session?.access_token ?? "";

  const copyToken = useCallback(async () => {
    if (!accessToken) return;
    await navigator.clipboard.writeText(accessToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [accessToken]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const refreshToken = async () => {
    const { data } = await supabase.auth.refreshSession();
    if (data.session) {
      setSession(data.session);
    }
  };

  useEffect(() => {
    if (!showQr || !accessToken || !qrCanvasRef.current) return;

    const canvas = qrCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 280;
    canvas.width = size;
    canvas.height = size;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(accessToken)}&bgcolor=0a0a0f&color=f0f0f5&format=png`;
    img.onload = () => ctx.drawImage(img, 0, 0, size, size);
    img.onerror = () => {
      ctx.fillStyle = "#0f0f1a";
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = "#8a8a9a";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("QR generation failed.", size / 2, size / 2 - 10);
      ctx.fillText("Copy the token manually.", size / 2, size / 2 + 10);
    };
  }, [showQr, accessToken]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#7b5cf6]" />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Dashboard nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/murphy-logo.jpg" alt="Murphy" className="h-8 w-auto object-contain" />
            <span className="font-bold text-lg tracking-tight text-[#f0f0f5]">Murphy</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm hidden md:inline text-[#8a8a9a]">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-[#f0f0f5] transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Log Out</span>
            </button>
          </div>
        </nav>
      </header>

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-24 space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[#f0f0f5]">Your Dashboard</h1>
          <p className="text-[#8a8a9a]">
            Pair your Murphy field unit using the token or QR code below.
          </p>
        </div>

        {/* User info */}
        <div className="rounded-xl p-6 space-y-4 bg-white/[0.06] border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold bg-[#7b5cf6]/20 text-[#7b5cf6]">
              {(user?.user_metadata?.full_name || user?.email || "?").charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-medium text-[#f0f0f5]">
                {user?.user_metadata?.full_name || "Murphy User"}
              </p>
              <p className="text-sm text-[#8a8a9a]">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Pairing Token */}
        <div className="rounded-xl p-6 space-y-4 bg-white/[0.06] border border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#f0f0f5]">Pairing Token</h2>
            <button
              onClick={refreshToken}
              className="flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-[#f0f0f5] transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          <p className="text-sm text-[#8a8a9a]">
            Open Murphy on your iPad at the console, then scan the QR code or paste this token to pair.
          </p>

          {/* Token display */}
          <div className="relative">
            <div className="rounded-lg p-4 font-mono text-xs break-all select-all bg-white/[0.04] border border-white/10 max-h-[120px] overflow-auto text-[#f0f0f5]">
              {accessToken || "No active session"}
            </div>
            <button
              onClick={copyToken}
              className="absolute top-2 right-2 p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-[#8a8a9a]" />}
            </button>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              onClick={() => setShowQr(!showQr)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-sm text-[#f0f0f5] hover:bg-white/[0.06] transition-colors"
            >
              <QrCode className="w-4 h-4" />
              {showQr ? "Hide QR Code" : "Show QR Code"}
            </button>

            {showQr && (
              <div className="rounded-xl p-4 bg-white/[0.04] border border-white/10">
                <canvas ref={qrCanvasRef} className="rounded-lg" />
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-xl p-6 space-y-3 bg-white/[0.06] border border-white/10">
          <h2 className="text-lg font-semibold text-[#f0f0f5]">How to Pair</h2>
          <ol className="space-y-2 text-sm text-[#8a8a9a]">
            <li className="flex gap-3">
              <span className="font-bold text-[#7b5cf6]">1.</span>
              Connect your iPad to the same network as your Murphy field unit.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#7b5cf6]">2.</span>
              Open Murphy UI in Safari (usually <span className="font-mono text-[#f0f0f5]">http://192.168.1.50:8000</span>).
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#7b5cf6]">3.</span>
              Tap &quot;Scan QR Code&quot; or &quot;Enter Token Manually&quot; on the pairing screen.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#7b5cf6]">4.</span>
              Scan the QR code above, or copy-paste your token.
            </li>
          </ol>
          <div className="flex items-center gap-2 pt-2 text-xs text-[#8a8a9a]">
            <Globe className="w-3.5 h-3.5" />
            Token is valid for 1 hour. Use Refresh to get a new one if it expires.
          </div>
        </div>
      </div>
    </main>
  );
}
