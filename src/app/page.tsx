"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  type: string;
  status: string;
  image: string;
  shortDescription: string;
  summary: string;
};

type SiteResponse = {
  brandName: string;
  tagline: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  projects: Project[];
  pricing: { name: string; startingPrice: string; tag: string }[];
};

const technologies = ["React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Docker", "Postgres", "MongoDB", "Redis", "Tailwind", "Figma"];
const copy = {
  en: { nav: ["Home", "Projects", "Technologies", "About Us", "Careers"], kicker: "Digital products, engineered differently", hero: "Building next-gen solutions for a", accent: "smarter tomorrow.", intro: "We turn ambitious ideas into powerful, human-centered digital experiences that move businesses and people forward.", explore: "Explore our work", learn: "Learn more", trusted: "Trusted by innovators worldwide", projects: "Our projects", projectTitle: "Innovative products.", projectAccent: "Real impact.", all: "View all projects", stack: "Technology stack", stackTitle: "Powered by modern", stackAccent: "technologies.", stackIntro: "The right tools make ambitious ideas possible. We use a considered stack built for speed, scale, and staying power.", why: "Why choose Questdrium?", whyTitle: "We turn ideas into", whyAccent: "powerful digital solutions.", whyText: "From the first sketch to the final launch, we bring clarity, craft, and curiosity to every build.", about: "About us", idea: "Have a bold idea?", cta: "Ready to build something", ctaAccent: "amazing together?", contact: "Get in touch", made: "Made for what’s next" },
  es: { nav: ["Inicio", "Proyectos", "Tecnologías", "Nosotros", "Carreras"], kicker: "Productos digitales, diseñados diferente", hero: "Construimos soluciones de próxima generación para un", accent: "mañana más inteligente.", intro: "Convertimos ideas ambiciosas en experiencias digitales humanas y potentes que hacen avanzar a las empresas y las personas.", explore: "Explora nuestro trabajo", learn: "Conoce más", trusted: "La confianza de innovadores de todo el mundo", projects: "Nuestros proyectos", projectTitle: "Productos innovadores.", projectAccent: "Impacto real.", all: "Ver todos los proyectos", stack: "Tecnologías", stackTitle: "Impulsados por", stackAccent: "tecnologías modernas.", stackIntro: "Las herramientas correctas hacen posibles las grandes ideas. Usamos una base pensada para velocidad, escala y permanencia.", why: "¿Por qué Questdrium?", whyTitle: "Convertimos ideas en", whyAccent: "soluciones digitales potentes.", whyText: "Desde el primer boceto hasta el lanzamiento, aportamos claridad, oficio y curiosidad a cada proyecto.", about: "Conócenos", idea: "¿Tienes una gran idea?", cta: "¿Listo para construir algo", ctaAccent: "increíble juntos?", contact: "Contáctanos", made: "Hecho para lo que sigue" },
};
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [site, setSite] = useState<SiteResponse | null>(null);
  const text = copy[language];
  const navItems = [
    { label: text.nav[0], href: "/" },
    { label: text.nav[1], href: "/projects" },
    { label: text.nav[2], href: "/technologies" },
    { label: text.nav[3], href: "/about" },
    { label: text.nav[4], href: "/careers" },
    { label: "Pricing", href: "/pricing" },
  ];

  useEffect(() => {
    fetch("/api/site-content")
      .then((response) => response.json())
      .then((data) => setSite(data));
  }, []);

  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);

  const projects = site?.projects ?? [];
  return <main>
    <nav className="nav shell" aria-label="Primary navigation"><Link className="brand" href="/" onClick={() => setMenuOpen(false)}><span className="brand-mark">Q</span><span><strong>Questdrium</strong><small>NEXT-GEN TECHNOLOGIES</small></span></Link><div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</div><div className="nav-tools"><button className="language" onClick={() => setLanguage(language === "en" ? "es" : "en")} aria-label="Switch language">{language === "en" ? "ES" : "EN"}</button><Link className="button button-small button-gradient" href="/contact">{language === "en" ? "Contact us" : "Contáctanos"} <Arrow /></Link></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? "×" : "☰"}</button></nav>
    <section className="hero shell" id="home"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> {text.kicker}</p><h1>{text.hero} <em>{text.accent}</em></h1><p className="hero-description">{text.intro}</p><div className="hero-actions"><Link className="button button-gradient" href="/projects">{text.explore} <Arrow /></Link><Link className="button button-outline" href="/about">{text.learn} <span>↓</span></Link></div></div><div className="hero-art"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="q-core">Q</div><div className="core-glow" /><div className="art-caption"><span>QUESTDRIUM / 01</span><strong>Signal in the noise</strong></div></div><div className="proof"><span>{text.trusted}</span><div><b>AWS</b><b>twilio</b><b>stripe</b><b>◉ React</b><b>node</b></div></div></section>
    <section className="section shell" id="projects"><div className="section-heading"><div><p className="eyebrow">{text.projects}</p><h2>{text.projectTitle}<br /><em>{text.projectAccent}</em></h2></div><Link className="text-link" href="/projects">{text.all} <Arrow /></Link></div><div className="project-grid">{projects.slice(0, 4).map((project, index) => <article className="project-card" key={project.id}><div className={`project-visual ${project.id}`}><span className="project-mark">{project.name.slice(0, 2).toUpperCase()}</span><span className={`status ${project.status === "BETA" ? "beta" : ""}`}>{project.status}</span><div className="visual-lines" /></div><div className="project-info"><div><h3>{project.name}</h3><p>{project.type}</p></div><span className="card-arrow">↗</span></div></article>)}</div><div className="pagination"><span className="active" /><span /><span /><span /></div></section>
    <section className="stack-section" id="technologies"><div className="shell centered"><p className="eyebrow pink">{text.stack}</p><h2>{text.stackTitle} <em>{text.stackAccent}</em></h2><p className="section-intro">{text.stackIntro}</p><div className="tech-grid">{technologies.map((technology, index) => <div className="tech-tile" key={technology}><span className={`tech-icon icon-${index}`}>{technology === "TypeScript" ? "TS" : technology.slice(0, 2)}</span><span>{technology}</span></div>)}</div></div></section>
    <section className="section about-section shell" id="about"><div className="about-copy"><p className="eyebrow">{text.why}</p><h2>{text.whyTitle} <em>{text.whyAccent}</em></h2><p>{text.whyText}</p><Link className="button button-gradient" href="/about">{text.about} <Arrow /></Link></div><div className="stats-grid"><div><span>↗</span><strong>20+</strong><p>Projects delivered</p></div><div><span>◎</span><strong>10K+</strong><p>Active users</p></div><div><span>◌</span><strong>99.9%</strong><p>Uptime shipped</p></div><div><span>♡</span><strong>5+</strong><p>Years of innovation</p></div></div></section>
    <section className="cta shell" id="contact"><div className="cta-wave" /><div><p className="eyebrow pink">{text.idea}</p><h2>{text.cta}<br /><em>{text.ctaAccent}</em></h2></div><Link className="button button-gradient" href="/contact">{text.contact} <Arrow /></Link></section>
    <footer className="footer shell"><div className="footer-top"><div className="footer-brand"><Link className="brand" href="/"><span className="brand-mark">Q</span><span><strong>Questdrium</strong><small>NEXT-GEN TECHNOLOGIES</small></span></Link><p>Digital products for a<br />smarter tomorrow.</p></div><div className="footer-links"><div><b>Company</b><Link href="/about">About us</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div><div><b>Services</b><Link href="/pricing">Pricing</Link><Link href="/projects">Projects</Link><Link href="/technologies">Development</Link></div></div></div><div className="footer-bottom"><span>© 2026 Questdrium Technologies. All rights reserved.</span><span>{text.made} <b>✦</b></span></div></footer>
  </main>;
}
