import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage, type Storage } from "firebase-admin/storage";

function serviceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return undefined;
  try {
    const parsed = JSON.parse(raw) as { project_id: string; client_email: string; private_key: string };
    return { projectId: parsed.project_id, clientEmail: parsed.client_email, privateKey: parsed.private_key };
  } catch {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON must contain valid service-account JSON.");
  }
}

export function firebaseConfigured() {
  return Boolean(process.env.FIREBASE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_APPLICATION_CREDENTIALS);
}

function app() {
  if (!firebaseConfigured()) return null;
  if (getApps().length > 0) return getApps()[0];
  const credentials = serviceAccount();
  return initializeApp(credentials ? { credential: cert(credentials), projectId: process.env.FIREBASE_PROJECT_ID } : { projectId: process.env.FIREBASE_PROJECT_ID });
}

export function firestore(): Firestore | null {
  const firebaseApp = app();
  return firebaseApp ? getFirestore(firebaseApp) : null;
}

export function storage(): Storage | null {
  const firebaseApp = app();
  return firebaseApp ? getStorage(firebaseApp) : null;
}

export const firebaseCollections = {
  siteContent: "siteContent",
  jobApplications: "jobApplications",
};
