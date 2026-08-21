import { promises as fs } from "node:fs";
import path from "node:path";
import { firebaseCollections, firestore } from "@/lib/firebase-admin";

export type ManagedProject = {
  id: string;
  name: string;
  type: string;
  status: string;
  image: string;
  shortDescription: string;
  summary: string;
};

export type JobListing = {
  id: string;
  slug: string;
  title: string;
  location: string;
  employmentType: string;
  salary: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  status: "open" | "closed";
  featured: boolean;
  postedAt: string;
  deadline: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  tag: string;
  startingPrice: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  aiCredits: string;
  timeline: string;
};

export type SiteContent = {
  brandName: string;
  tagline: string;
  logoUrl: string;
  faviconUrl: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton: string;
  secondaryLink: string;
  projects: ManagedProject[];
  pricing: PricingPlan[];
  jobs: JobListing[];
};

export const defaultSiteContent: SiteContent = {
  brandName: "Questdrium",
  tagline: "NEXT-GEN TECHNOLOGIES",
  logoUrl: "",
  faviconUrl: "",
  heroTitle: "Building next-gen solutions for a",
  heroAccent: "smarter tomorrow.",
  heroDescription: "We turn ambitious ideas into powerful, human-centered digital experiences that move businesses and people forward.",
  primaryButton: "Explore our work",
  primaryLink: "/projects",
  secondaryButton: "Learn more",
  secondaryLink: "/about",
  projects: [
    {
      id: "spaceforge",
      name: "SpaceForge",
      type: "Interactive game",
      status: "LIVE",
      image: "",
      shortDescription: "A multiplayer competitive experience engineered to sustain momentum and community retention.",
      summary: "Built around live engagement loops, progression systems, and high-performing UX flows."
    },
    {
      id: "gozuos",
      name: "Gozuos",
      type: "Travel platform",
      status: "LIVE",
      image: "",
      shortDescription: "A destination-first booking experience optimized for trust, clarity, and conversion.",
      summary: "Features itinerary planning, responsive booking journeys, and conversion-driven travel experiences."
    },
    {
      id: "chatiom",
      name: "Chatiom",
      type: "Social intelligence",
      status: "BETA",
      image: "",
      shortDescription: "An AI-assisted social analysis workspace that transforms raw data into strategic insight.",
      summary: "Combines messaging intelligence, segmentation, and guided reporting to reveal customer behavior."
    },
    {
      id: "ivr-system",
      name: "IVR System",
      type: "Voice operations",
      status: "LIVE",
      image: "",
      shortDescription: "A voice-first automation layer designed to streamline handling and reduce friction.",
      summary: "Optimizes workflows for routing, real-time triage, and high-volume customer support."
    },
    {
      id: "windows-apps",
      name: "Windows Apps",
      type: "Desktop tools",
      status: "LIVE",
      image: "",
      shortDescription: "Operational productivity software built for internal teams that need speed and reliability.",
      summary: "Turns fragmented internal tasks into reliable, action-oriented desktop experiences."
    }
  ],
  pricing: [
    {
      id: "prototype",
      name: "Prototype Sprint",
      tag: "Fast validation",
      startingPrice: "$2,500",
      description: "For founders validating a clear concept or testing UX with real market feedback before full buildout.",
      idealFor: "Idea validation",
      deliverables: ["UX flow and clickable prototype", "Product strategy workshop", "Tech feasibility review"],
      aiCredits: "Included: 25 ai workflow credits and 1 design review cycle",
      timeline: "2-4 weeks"
    },
    {
      id: "mvp",
      name: "MVP Build",
      tag: "Launch-ready",
      startingPrice: "$7,500",
      description: "For startups and teams shipping a narrowly scoped product that needs to prove traction quickly and reliably.",
      idealFor: "Early traction",
      deliverables: ["Core product build", "API integration layer", "Deployment and QA coverage"],
      aiCredits: "Included: 150 ai workflow credits and AI-assisted QA budget",
      timeline: "6-10 weeks"
    },
    {
      id: "growth",
      name: "Growth Platform",
      tag: "Scale and optimize",
      startingPrice: "$15,000",
      description: "For established teams upgrading product depth, automation, and internal operations with a measurable ROI model.",
      idealFor: "Operational scale",
      deliverables: ["Feature expansion", "Automation layer", "Analytics and optimization"],
      aiCredits: "Included: 500 ai workflow credits and optimization automation budget",
      timeline: "8-14 weeks"
    },
    {
      id: "retainer",
      name: "Product Retainer",
      tag: "Ongoing support",
      startingPrice: "$3,200/mo",
      description: "For teams that need steady product enhancement, support, and deployment operations with ongoing technical care.",
      idealFor: "Continuous product work",
      deliverables: ["Monthly roadmap delivery", "Priority bug fixes", "AI-assisted product iteration"],
      aiCredits: "Included: monthly AI tool and model credits for engineering and research workflows",
      timeline: "Rolling monthly"
    }
  ],
  jobs: [
    {
      id: "product-strategist",
      slug: "product-strategist",
      title: "Product Strategist",
      location: "Remote / Hybrid",
      employmentType: "Full-time",
      salary: "$110k - $150k",
      summary: "Shape product direction, roadmap clarity, and early-stage validation for ambitious digital businesses.",
      description: "You will combine business discovery, user insight, and product prioritization to guide a roadmap that balances customer value with delivery realism.",
      responsibilities: ["Lead discovery workshops with stakeholders and founders.", "Translate customer needs into product priorities and milestones.", "Align roadmap decisions with delivery capacity, AI tooling overhead, and operational constraints."],
      requirements: ["3+ years in product strategy, consulting, or digital product leadership.", "Experience with SaaS, B2B tools, or service-based product delivery.", "Comfort communicating trade-offs in plain language to technical and non-technical teams."],
      perks: ["Remote-first flexibility", "Performance bonus structure", "Access to product and AI tooling budgets"],
      status: "open",
      featured: true,
      postedAt: "2026-08-01",
      deadline: "2026-09-01"
    },
    {
      id: "full-stack-engineer",
      slug: "full-stack-engineer",
      title: "Full-Stack Engineer",
      location: "Remote",
      employmentType: "Full-time",
      salary: "$120k - $170k",
      summary: "Build and ship end-to-end product experiences using modern frontend, API, and AI-assisted engineering workflows.",
      description: "You will build product features in a codebase that blends polished UI work, backend services, and AI-enhanced workflow support without exposing internal tooling to end users.",
      responsibilities: ["Develop web applications using modern frameworks and API patterns.", "Own feature delivery across frontend, backend, deployments, and QA.", "Help maintain a disciplined approach to AI-driven tooling, model credits, and performance constraints."],
      requirements: ["Strong experience with TypeScript, React, and backend APIs.", "Comfort with cloud deployment and CI/CD operations.", "Ability to reason about quality, speed, and operational trade-offs."],
      perks: ["Quarterly learning stipend", "Flexible schedule", "AI tooling support and development budget"],
      status: "open",
      featured: true,
      postedAt: "2026-08-10",
      deadline: "2026-08-30"
    }
  ]
};

const localContentPath = path.join(process.cwd(), "src", "data", "site-content.json");

export async function getSiteContent(): Promise<SiteContent> {
  const database = firestore();
  if (database) {
    const snapshot = await database.collection(firebaseCollections.siteContent).doc("main").get();
    if (snapshot.exists) {
      const parsed = snapshot.data() as Partial<SiteContent>;
      return { ...defaultSiteContent, ...parsed, projects: parsed.projects ?? defaultSiteContent.projects, pricing: parsed.pricing ?? defaultSiteContent.pricing, jobs: parsed.jobs ?? defaultSiteContent.jobs };
    }
  }
  try {
    const raw = await fs.readFile(localContentPath, "utf8");
    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return { ...defaultSiteContent, ...parsed, projects: parsed.projects ?? defaultSiteContent.projects, pricing: parsed.pricing ?? defaultSiteContent.pricing, jobs: parsed.jobs ?? defaultSiteContent.jobs };
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const database = firestore();
  if (database) {
    await database.collection(firebaseCollections.siteContent).doc("main").set(content, { merge: true });
    return;
  }
  await fs.writeFile(localContentPath, `${JSON.stringify(content, null, 2)}
`, "utf8");
}

export const contentBackend = process.env.FIREBASE_PROJECT_ID ? "firebase" : "local";
