import { getSiteContent } from "@/lib/content-store";
import Link from "next/link";

export default async function PricingPage() {
  const content = await getSiteContent();
  const plans = content.pricing;

  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ marginBottom: 32 }}><Link href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</Link></div>
        <p style={{ margin: 0, color: "#4de4ef", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Pricing</p>
        <h1 style={{ margin: "12px 0 18px", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", letterSpacing: -2 }}>Product pricing built for<br />real delivery realities.</h1>
        <p style={{ maxWidth: 760, color: "#9aa0ac", fontSize: 18, lineHeight: 1.8 }}>
          Our pricing accounts for design, engineering, QA, deployment, AI tooling credits, model usage, and ongoing support so each engagement stays viable and high quality.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: 34 }}>
          {plans.map((plan) => (
            <article key={plan.id} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#4de4ef", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5 }}>{plan.tag}</span>
                <span style={{ color: "#ffb36a", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5 }}>Starting at</span>
              </div>
              <h2 style={{ margin: "18px 0 10px", fontSize: 30, letterSpacing: -1 }}>{plan.name}</h2>
              <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -2 }}>{plan.startingPrice}</div>
              <p style={{ color: "#9aa0ac", marginTop: 12, lineHeight: 1.7 }}>{plan.description}</p>
              <div style={{ marginTop: 18, color: "#edf2ff", fontWeight: 700 }}>Ideal for: {plan.idealFor}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gap: 8 }}>
                {plan.deliverables.map((deliverable) => (
                  <li key={`${plan.id}-${deliverable}`} style={{ color: "#d9deea", paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 9, width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(135deg, #ff752e, #ff3d9a)" }} />
                    {deliverable}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.12)", color: "#b7c0d7" }}>
                <strong style={{ display: "block", color: "#fff", marginBottom: 6 }}>AI + tooling budget</strong>
                {plan.aiCredits}
              </div>
              <div style={{ marginTop: 12, color: "#b7c0d7" }}>
                <strong style={{ color: "#fff" }}>Timeline:</strong> {plan.timeline}
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 42, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 22, background: "linear-gradient(145deg, rgba(74, 115, 255, 0.1), rgba(255, 118, 64, 0.06))" }}>
          <h2 style={{ margin: 0, fontSize: 28, letterSpacing: -1 }}>What’s included in every build</h2>
          <ul style={{ margin: "18px 0 0", display: "grid", gap: 10, color: "#dfe7ff", listStyle: "none", padding: 0 }}>
            <li>Strategy, scoping, and milestone planning</li>
            <li>UI/UX design and frontend build</li>
            <li>API integration and backend architecture</li>
            <li>QA, deployment, analytics, and support coverage</li>
            <li>AI workflow and model credit budgeting included in delivery estimates</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
