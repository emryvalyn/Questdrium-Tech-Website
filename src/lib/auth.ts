import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const sessionCookie = "questdrium_master_session";
const sessionDuration = 60 * 60 * 8;

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters long.");
  return value;
}

export function verifyPassword(password: string) {
  const stored = process.env.ADMIN_PASSWORD_HASH;
  if (!stored) return false;
  const [salt, expected] = stored.split(":");
  if (!salt || !expected) return false;
  const actual = scryptSync(password, salt, 64).toString("hex");
  return actual.length === expected.length && timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
}

export function configuredAdminEmail() {
  return process.env.ADMIN_EMAIL?.trim().toLowerCase() ?? "";
}

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
