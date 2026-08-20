import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { acceptedAssetTypes, maxAssetBytes, saveLocalAsset } from "@/lib/asset-store";

export async function POST(request: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File) || !acceptedAssetTypes.has(file.type) || file.size > maxAssetBytes) return NextResponse.json({ error: "Use a PNG, JPG, WEBP, SVG, or ICO file under 5 MB." }, { status: 400 });
  return NextResponse.json({ url: await saveLocalAsset(file) });
}
