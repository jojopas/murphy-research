import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

const INVESTOR_PASSWORD = process.env.INVESTOR_PASSWORD || "murphy2026";
const COOKIE_NAME = "murphy_investor_auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Investor password gate (existing) ---
  if (pathname.startsWith("/investors")) {
    if (pathname === "/investors/login" || pathname === "/investors/auth") {
      return NextResponse.next();
    }
    const cookie = request.cookies.get(COOKIE_NAME);
    if (cookie?.value === INVESTOR_PASSWORD) {
      return NextResponse.next();
    }
    const loginUrl = new URL("/investors/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // --- Supabase auth gate (login/signup/dashboard) ---
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (pathname.startsWith("/dashboard") && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (user && (pathname === "/login" || pathname === "/signup")) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/investors/:path*", "/dashboard/:path*", "/login", "/signup"],
};
