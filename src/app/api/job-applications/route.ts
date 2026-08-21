import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { firebaseCollections, firestore, storage } from "@/lib/firebase-admin";
import { isAuthenticated } from "@/lib/auth";

const filePath = path.join(process.cwd(), "src", "data", "job-applications.json");

async function readApplications() {
  const database = firestore();
  if (database) {
    const snapshot = await database.collection(firebaseCollections.jobApplications).orderBy("submittedAt", "desc").get();
    return snapshot.docs.map((document) => document.data() as Record<string, unknown>);
  }
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as Record<string, unknown>[];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const jobId = String(formData.get("jobId") ?? "");
  const jobTitle = String(formData.get("jobTitle") ?? "");
  const portfolio = String(formData.get("portfolio") ?? "");
  const coverLetter = String(formData.get("coverLetter") ?? "");
  const resume = formData.get("resume");
  const applications = await readApplications();

  let resumeUrl = "";
  if (resume instanceof File && resume.size > 0) {
    const ext = resume.name.split(".").pop() || "pdf";
    const filename = `${randomUUID()}.${ext}`;
    const bucket = storage()?.bucket(process.env.FIREBASE_STORAGE_BUCKET);
    if (bucket) {
      const remoteFile = bucket.file(`applications/${filename}`);
      await remoteFile.save(Buffer.from(await resume.arrayBuffer()), { metadata: { contentType: resume.type, cacheControl: "private,max-age=3600" } });
      [resumeUrl] = await remoteFile.getSignedUrl({ action: "read", expires: "01-01-2500" });
    } else {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "applications");
      await fs.mkdir(uploadDir, { recursive: true });
      await fs.writeFile(path.join(uploadDir, filename), Buffer.from(await resume.arrayBuffer()));
      resumeUrl = `/uploads/applications/${filename}`;
    }
  }

  const payload = {
    id: randomUUID(),
    name,
    email,
    jobId,
    jobTitle,
    portfolio,
    coverLetter,
    resumeUrl,
    submittedAt: new Date().toISOString(),
  };

  const database = firestore();
  if (database) {
    await database.collection(firebaseCollections.jobApplications).doc(payload.id).set(payload);
  } else {
    applications.push(payload);
    await fs.writeFile(filePath, `${JSON.stringify(applications, null, 2)}\n`, "utf8");
  }

  return NextResponse.redirect(new URL("/jobs", process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"));
}

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const applications = await readApplications();
  return NextResponse.json(applications);
}
