import Link from "next/link";

const roles = [
  "Senior Product Designer",
  "Full-Stack Engineer",
  "Growth Strategist",
  "Platform Engineer",
];

export default function CareersPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ marginBottom: 32 }}><Link href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</Link></div>
        <p style={{ margin: 0, color: "#ff3d9a", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Careers</p>
        <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: -2 }}>Build what matters next.</h1>
        <p style={{ color: "#9aa0ac", fontSize: 18, lineHeight: 1.8, maxWidth: 700 }}>
          We’re assembling a team that values craft, clear thinking, and the ability to turn complexity into elegant experiences.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginTop: 36 }}>
          {roles.map((role) => (
            <div key={role} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", padding: 22 }}>
              <div style={{ color: "#4de4ef", fontSize: 12, textTransform: "uppercase", letterSpacing: 1.6, marginBottom: 12 }}>Open role</div>
              <h2 style={{ margin: 0, fontSize: 24, letterSpacing: -1 }}>{role}</h2>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <a href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(105deg, #ff752e, #ff3d9a)", color: "#fff", padding: "14px 22px", borderRadius: 999, fontWeight: 800, textDecoration: "none" }}>Apply now</a>
        </div>
      </div>
    </main>
  );
}
