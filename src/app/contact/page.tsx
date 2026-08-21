export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 96px" }}>
        <p style={{ margin: 0, color: "#4de4ef", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Contact</p>
        <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: -2 }}>Let’s build something remarkable.</h1>
        <p style={{ color: "#9aa0ac", fontSize: 18, lineHeight: 1.8, maxWidth: 680 }}>
          Share your goals, timeline, and vision. We’ll help shape the right product strategy and execution path for your next milestone.
        </p>

        <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          <a href="mailto:hello@questdrium.tech" style={{ display: "block", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 22, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", color: "#fff", textDecoration: "none" }}>
            <div style={{ fontSize: 12, color: "#ff3d9a", letterSpacing: 1.6, marginBottom: 10, textTransform: "uppercase" }}>Email</div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>hello@questdrium.tech</div>
          </a>
          <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 22, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))" }}>
            <div style={{ fontSize: 12, color: "#4de4ef", letterSpacing: 1.6, marginBottom: 10, textTransform: "uppercase" }}>Response time</div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>Within 1 business day</div>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <a href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</a>
        </div>
      </div>
    </main>
  );
}
