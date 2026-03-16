import { NextRequest, NextResponse } from "next/server";

const INVESTOR_PASSWORD = process.env.INVESTOR_PASSWORD || "murphy2026";
const COOKIE_NAME = "murphy_investor_auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /investors
  if (!pathname.startsWith("/investors")) {
    return NextResponse.next();
  }

  // Allow the login page and auth API through
  if (pathname === "/investors/login" || pathname === "/investors/auth") {
    return NextResponse.next();
  }

  // Check for valid auth cookie
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === INVESTOR_PASSWORD) {
    return NextResponse.next();
  }

  // Not authenticated — redirect to login
  const loginUrl = new URL("/investors/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/investors/:path*"],
};
