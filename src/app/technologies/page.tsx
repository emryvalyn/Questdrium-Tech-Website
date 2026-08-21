const stack = [
  { name: "React", accent: "#61dafb" },
  { name: "Next.js", accent: "#ffffff" },
  { name: "Node.js", accent: "#7ed957" },
  { name: "TypeScript", accent: "#3178c6" },
  { name: "Python", accent: "#3776ab" },
  { name: "AWS", accent: "#ff9900" },
  { name: "Docker", accent: "#2496ed" },
  { name: "Postgres", accent: "#336791" },
  { name: "MongoDB", accent: "#13aa52" },
  { name: "Redis", accent: "#d82c20" },
  { name: "Tailwind", accent: "#06b6d4" },
  { name: "Figma", accent: "#f24e1e" },
];

export default function TechnologiesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 96px" }}>
        <p style={{ margin: 0, color: "#ff3d9a", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Technology stack</p>
        <h1 style={{ margin: "14px 0 18px", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: -2 }}>Powered by modern<br />technologies.</h1>
        <p style={{ maxWidth: 700, color: "#9aa0ac", fontSize: 17, lineHeight: 1.7 }}>
          We use a deliberately chosen stack built for speed, clarity, and long-term reliability across product, platform, and internal operations.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 18, marginTop: 40 }}>
          {stack.map((item) => (
            <div key={item.name} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", padding: 20, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, display: "grid", placeItems: "center", background: item.accent, color: "#0b0d13", fontWeight: 900, fontSize: 11 }}>{item.name.slice(0, 2).toUpperCase()}</span>
              <span style={{ color: "#edf2ff", fontWeight: 700 }}>{item.name}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ color: "#9aa0ac", fontSize: 15 }}>Built for resilient product delivery.</div>
          <a href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</a>
        </div>
      </div>
    </main>
  );
}
