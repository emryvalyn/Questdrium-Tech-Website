import Link from "next/link";

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "10K+", label: "Active users" },
  { value: "99.9%", label: "Uptime shipped" },
  { value: "5+", label: "Years of innovation" },
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ marginBottom: 32 }}><Link href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</Link></div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, color: "#4de4ef", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Why choose Questdrium?</p>
            <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: -2 }}>We turn ideas into<br />powerful digital solutions.</h1>
            <p style={{ color: "#9aa0ac", fontSize: 18, lineHeight: 1.8, maxWidth: 600 }}>
              From product discovery to launch, we combine strategy, design, and engineering to create systems that are useful, memorable, and designed to grow.
            </p>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(105deg, #ff752e, #ff3d9a)", color: "#fff", padding: "14px 22px", borderRadius: 999, fontWeight: 800, textDecoration: "none", marginTop: 14 }}>Get in touch</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(180px, 1fr))", gap: 18 }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: 22 }}>
                <div style={{ fontSize: 12, color: "#ff3d9a", marginBottom: 10 }}>✦</div>
                <div style={{ fontSize: 33, fontWeight: 900, letterSpacing: -1 }}>{stat.value}</div>
                <div style={{ color: "#9aa0ac", marginTop: 8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
