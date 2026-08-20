import { NextResponse } from "next/server";
import { configuredAdminEmail, createSession, setSession, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { email?: string; password?: string } | null;
  const email = body?.email?.trim().toLowerCase() ?? "";
  const password = body?.password ?? "";
  if (!email || !password || email !== configuredAdminEmail() || !verifyPassword(password)) {
    return NextResponse.json({ error: "Invalid master credentials." }, { status: 401 });
  }
  await setSession(createSession());
  return NextResponse.json({ ok: true });
}
