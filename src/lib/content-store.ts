import { promises as fs } from "node:fs";
import path from "node:path";

export type ManagedProject = { name: string; type: string; status: string; image: string };
export type SiteContent = { brandName: string; tagline: string; logoUrl: string; faviconUrl: string; heroTitle: string; heroAccent: string; heroDescription: string; primaryButton: string; primaryLink: string; secondaryButton: string; secondaryLink: string; projects: ManagedProject[] };

const localContentPath = path.join(process.cwd(), "src", "data", "site-content.json");

export async function getSiteContent(): Promise<SiteContent> {
  return JSON.parse(await fs.readFile(localContentPath, "utf8")) as SiteContent;
}

export async function saveSiteContent(content: SiteContent) {
  await fs.writeFile(localContentPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}

// Replace these functions with Firestore reads/writes when FIREBASE_PROJECT_ID is configured.
export const contentBackend = process.env.FIREBASE_PROJECT_ID ? "firebase" : "local";
