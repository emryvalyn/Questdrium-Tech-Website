import Link from "next/link";
import { getSiteContent } from "@/lib/content-store";

export default async function JobsPage() {
  const content = await getSiteContent();

  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ marginBottom: 32 }}><Link href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</Link></div>
        <p style={{ margin: 0, color: "#ff3d9a", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Careers</p>
        <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: -2 }}>Work on ambitious products.</h1>
        <p style={{ color: "#9aa0ac", fontSize: 18, lineHeight: 1.8, maxWidth: 760 }}>
          We build digital products with clear strategy, strong craft, and disciplined execution. Join us to shape products that matter.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 30 }}>
          {content.jobs.map((job) => (
            <article key={job.id} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 22, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
                <div>
                  <p style={{ margin: 0, color: "#4de4ef", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.6 }}>{job.location} · {job.employmentType}</p>
                  <h2 style={{ margin: "10px 0 0", fontSize: 30, letterSpacing: -1 }}>{job.title}</h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#ffb36a", fontWeight: 800 }}>{job.salary}</div>
                  <Link href={`/jobs/${job.slug}`} style={{ display: "inline-block", marginTop: 10, color: "#fff", textDecoration: "none", background: "linear-gradient(105deg, #ff752e, #ff3d9a)", padding: "10px 18px", borderRadius: 999, fontWeight: 800 }}>
                    View role
                  </Link>
                </div>
              </div>
              <p style={{ color: "#d8deed", marginTop: 18, lineHeight: 1.7 }}>{job.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
