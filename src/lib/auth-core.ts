import { scryptSync, timingSafeEqual } from "node:crypto";

export const defaultAdminEmail = "admin@questdrium.tech";
export const defaultAdminPassword = "Questdrium2026!";

export function fallbackPasswordHash() {
  const salt = "91eea78b6bd02fbe2e682a7d26c290b1";
  return `${salt}:${scryptSync(defaultAdminPassword, salt, 64).toString("hex")}`;
}

export function verifyPassword(password: string, storedValue?: string) {
  const stored = storedValue ?? process.env.ADMIN_PASSWORD_HASH ?? fallbackPasswordHash();
  const [salt, expected] = stored.split(":");
  if (!salt || !expected) return false;
  const actual = scryptSync(password, salt, 64).toString("hex");
  return actual.length === expected.length && timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
}

export function configuredAdminEmail(value = process.env.ADMIN_EMAIL) {
  return (value ?? defaultAdminEmail).trim().toLowerCase();
}
