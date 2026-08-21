import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { configuredAdminEmail, verifyPassword } from "@/lib/auth-core";

const sessionCookie = "questdrium_master_session";
const sessionDuration = 60 * 60 * 8;

function secret() {
  const value = process.env.SESSION_SECRET ?? "a9d5015a7f4d7e46af46b3d1f6c5f4f0754b7abb0dc4e9d091b2b595d8350d8";
  if (value.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters long.");
  return value;
}

export { configuredAdminEmail, verifyPassword };

export function createPasswordHash(password: string) {
  const salt = randomBytes(16).toString("hex");
  return `${salt}:${scryptSync(password, salt, 64).toString("hex")}`;
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function createSession() {
  const value = `${randomBytes(24).toString("hex")}.${Date.now() + sessionDuration * 1000}`;
  return `${value}.${sign(value)}`;
}

export function isValidSession(value?: string) {
  if (!value) return false;
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [id, expires, signature] = parts;
  if (Number(expires) < Date.now()) return false;
  const expected = sign(`${id}.${expires}`);
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function isAuthenticated() {
  return isValidSession((await cookies()).get(sessionCookie)?.value);
}

export async function setSession(value: string) {
  (await cookies()).set(sessionCookie, value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: sessionDuration });
}

export async function clearSession() {
  (await cookies()).delete(sessionCookie);
}
