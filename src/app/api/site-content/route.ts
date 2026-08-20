import { NextResponse } from "next/server";
import { getSiteContent } from "@/lib/content-store";

export async function GET() {
  return NextResponse.json(await getSiteContent(), { headers: { "Cache-Control": "no-store" } });
}
