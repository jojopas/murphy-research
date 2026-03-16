import { NextRequest, NextResponse } from "next/server";

const INVESTOR_PASSWORD = process.env.INVESTOR_PASSWORD || "murphy2026";
const COOKIE_NAME = "murphy_investor_auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== INVESTOR_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, INVESTOR_PASSWORD, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
