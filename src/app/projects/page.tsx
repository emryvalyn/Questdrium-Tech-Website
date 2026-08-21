import { getSiteContent } from "@/lib/content-store";

export default async function ProjectsPage() {
  const content = await getSiteContent();
  const projectCards = content.projects;
  return (
    <main style={{ minHeight: "100vh", background: "#08090d", color: "#f5f7fb", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginBottom: 40, flexWrap: "wrap" }}>
          <div>
            <p style={{ margin: 0, color: "#4de4ef", textTransform: "uppercase", letterSpacing: 2, fontSize: 12, fontWeight: 800 }}>Our projects</p>
            <h1 style={{ margin: "12px 0 0", fontSize: "clamp(2.7rem, 5vw, 4.6rem)", letterSpacing: -2 }}>Innovative products.<br />Real impact.</h1>
          </div>
          <a href="/" style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "12px 20px", textDecoration: "none" }}>Back home</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {projectCards.map((project) => (
            <article key={project.name} style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 22, boxShadow: "inset 0 1px rgba(255,255,255,0.12)" }}>
              <div style={{ height: 180, borderRadius: 18, background: "linear-gradient(135deg, #171b2e, #090b12)", display: "grid", placeItems: "center", marginBottom: 18, border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: 52, fontWeight: 900, color: "#ffb36a" }}>{project.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <p style={{ margin: 0, color: "#4de4ef", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5 }}>{project.type}</p>
              <h2 style={{ margin: "12px 0 12px", fontSize: 28, letterSpacing: -1 }}>{project.name}</h2>
              <p style={{ margin: 0, color: "#9aa0ac", lineHeight: 1.7 }}>{project.shortDescription}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gap: 8 }}>
                {[project.status, project.summary].map((metric) => (
                  <li key={`${project.id}-${metric}`} style={{ color: "#edf2ff", fontSize: 13, paddingLeft: 14, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 7, width: 6, height: 6, borderRadius: "50%", background: "linear-gradient(135deg, #ff752e, #ff3d9a)" }} />
                    {metric}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
