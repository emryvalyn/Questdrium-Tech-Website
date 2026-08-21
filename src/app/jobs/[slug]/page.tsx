import { notFound } from "next/navigation";
import Link from "next/link";
import { getSiteContent } from "@/lib/content-store";

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = await getSiteContent();
  const job = content.jobs.find((item) => item.slug === slug);

  if (!job) return notFound();

  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ marginBottom: 32 }}><Link href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</Link></div>
        <p style={{ margin: 0, color: "#4de4ef", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>{job.location} · {job.employmentType}</p>
        <h1 style={{ margin: "12px 0 8px", fontSize: "clamp(2.5rem, 5vw, 4.2rem)", letterSpacing: -2 }}>{job.title}</h1>
        <div style={{ color: "#ffb36a", fontWeight: 800, fontSize: 22 }}>{job.salary}</div>
        <p style={{ color: "#d8deed", fontSize: 18, lineHeight: 1.8, marginTop: 18 }}>{job.summary}</p>

        <form action="/api/job-applications" method="POST" encType="multipart/form-data" style={{ marginTop: 36, display: "grid", gap: 18, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 24 }}>
          <input type="hidden" name="jobId" value={job.id} />
          <input type="hidden" name="jobTitle" value={job.title} />

          <div style={{ display: "grid", gap: 10 }}>
            <label htmlFor="name" style={{ color: "#edf2ff", fontWeight: 700 }}>Full name</label>
            <input id="name" name="name" required style={{ padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.2)", color: "#fff" }} />
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <label htmlFor="email" style={{ color: "#edf2ff", fontWeight: 700 }}>Email</label>
            <input id="email" type="email" name="email" required style={{ padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.2)", color: "#fff" }} />
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <label htmlFor="portfolio" style={{ color: "#edf2ff", fontWeight: 700 }}>Portfolio or LinkedIn</label>
            <input id="portfolio" name="portfolio" style={{ padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.2)", color: "#fff" }} />
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <label htmlFor="resume" style={{ color: "#edf2ff", fontWeight: 700 }}>Resume (PDF/DOC)</label>
            <input id="resume" type="file" name="resume" accept=".pdf,.doc,.docx" style={{ padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.2)", color: "#fff" }} />
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <label htmlFor="coverLetter" style={{ color: "#edf2ff", fontWeight: 700 }}>Message</label>
            <textarea id="coverLetter" name="coverLetter" rows={6} style={{ padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.2)", color: "#fff" }} />
          </div>

          <button type="submit" style={{ width: "fit-content", border: 0, borderRadius: 999, background: "linear-gradient(105deg, #ff752e, #ff3d9a)", color: "#fff", fontWeight: 800, padding: "14px 22px", cursor: "pointer" }}>
            Submit application
          </button>
        </form>
      </div>
    </main>
  );
}
