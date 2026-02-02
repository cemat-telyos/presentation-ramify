import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Simple hash function for the token (not cryptographically secure, but good enough for this use case)
function generateToken(password: string): string {
  let hash = 0;
  const str = password + "ramify-secret-salt-2024";
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36) + Date.now().toString(36);
}

export async function POST(request: Request) {
  const { password } = await request.json();
  
  // Get password from environment variable, fallback to a default for testing
  const correctPassword = process.env.SITE_PASSWORD || "ramify2024";

  if (password === correctPassword) {
    const token = generateToken(password);
    
    const cookieStore = await cookies();
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
