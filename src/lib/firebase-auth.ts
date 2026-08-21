const defaultApiKey = "AIzaSyBo66b9Mrm7--wscVZfQVVHdBgZI-UfrVo";
const identityToolkitUrl = "https://identitytoolkit.googleapis.com/v1/accounts";

type FirebaseAuthResponse = {
  idToken: string;
  localId: string;
  email: string;
};

function apiKey() {
  return process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? defaultApiKey;
}

export function firebaseAuthConfigured() {
  return Boolean(apiKey());
}

async function request(endpoint: string, body: Record<string, string>) {
  const response = await fetch(`${identityToolkitUrl}:${endpoint}?key=${apiKey()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => null) as FirebaseAuthResponse | { error?: { message?: string } } | null;
  if (!response.ok || !payload || !("idToken" in payload)) {
    throw new Error("Firebase authentication rejected the credentials.");
  }
  return payload;
}

export function signInWithFirebase(email: string, password: string) {
  return request("signInWithPassword", { email, password, returnSecureToken: "true" });
}

export function createFirebaseUser(email: string, password: string) {
  return request("signUp", { email, password, returnSecureToken: "true" });
}
