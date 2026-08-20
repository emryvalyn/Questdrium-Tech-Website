import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getSiteContent, saveSiteContent } from "@/lib/content-store";

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getSiteContent());
}

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const payload = await request.json();
  await saveSiteContent(payload);
  return NextResponse.json({ ok: true });
}
