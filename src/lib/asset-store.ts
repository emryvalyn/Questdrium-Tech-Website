import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { storage } from "@/lib/firebase-admin";

export const acceptedAssetTypes = new Set(["image/png", "image/jpeg", "image/webp", "image/svg+xml", "image/x-icon"]);
export const maxAssetBytes = 5 * 1024 * 1024;

export async function saveLocalAsset(file: File) {
  const bucket = storage()?.bucket(process.env.FIREBASE_STORAGE_BUCKET);
  if (bucket) {
    const extension = file.name.split(".").pop()?.toLowerCase() || "bin";
    const filename = `uploads/${randomUUID()}.${extension}`;
    const remoteFile = bucket.file(filename);
    await remoteFile.save(Buffer.from(await file.arrayBuffer()), { metadata: { contentType: file.type, cacheControl: "public,max-age=31536000" } });
    const [url] = await remoteFile.getSignedUrl({ action: "read", expires: "01-01-2500" });
    return url;
  }
  const extension = file.name.split(".").pop()?.toLowerCase() || "bin";
  const filename = `${randomUUID()}.${extension}`;
  const uploadPath = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadPath, { recursive: true });
  await fs.writeFile(path.join(uploadPath, filename), Buffer.from(await file.arrayBuffer()));
  return `/uploads/${filename}`;
}

// Replace this function with Firebase Storage when the hosted backend is enabled.
export const assetBackend = process.env.FIREBASE_STORAGE_BUCKET ? "firebase" : "local";
