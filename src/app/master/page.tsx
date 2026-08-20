"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./master.module.css";

export default function MasterLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    if (response.ok) router.push("/master/dashboard");
    else setError("The credentials could not be verified.");
    setBusy(false);
  }

  return <main className={styles.loginPage}><div className={styles.loginGlow} /><section className={styles.loginCard}><a className={styles.logo} href="/">Q<span>。</span> QUESTDRIUM</a><p className={styles.kicker}>Private control room</p><h1>Welcome back,<br /><em>master.</em></h1><p className={styles.muted}>Sign in to manage your brand, content, assets, and live experience.</p><form onSubmit={submit} className={styles.form}><label>Email<input type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>{error && <p className={styles.error}>{error}</p>}<button disabled={busy}>{busy ? "Verifying..." : "Enter dashboard  ↗"}</button></form><p className={styles.security}>Protected by an HTTP-only signed session.</p></section></main>;
}
