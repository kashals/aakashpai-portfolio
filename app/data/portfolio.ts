// central data file - update content here only

export const ABOUT = {
  name: "Aakash Pai",
  location: "Kuala Lumpur, Malaysia",
  status: "Open to opportunities",
  university: "Sunway University",
  degree: "BSc (Hons) Computer Science",
  graduation: "Sep 2027",
  bio: "BSc (Hons) Computer Science student at Sunway University with a strong foundation in full-stack web development. I build production-grade applications with Next.js, React, and Supabase, ranging from e-commerce platforms to B2B workflow automation engines. Currently expanding into Python, data science, and machine learning.",
};

export const SOCIALS = {
  github: "https://github.com/kashals",
  linkedin: "https://www.linkedin.com/in/aakash-pai-67aa83326",
  email: "aakashpai2007@gmail.com",
  whatsapp:
    "https://wa.me/601123776040?text=Hi%20Aakash%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out.",
};

export const STATS = [
  { val: "5+", label: "PROJECTS_BUILT" },
  { val: "8", label: "GITHUB_REPOS" },
  { val: "999+", label: "CUPS_OF_COFFEE" },
];

export const TERMINAL_SEQ = [
  { type: "cmd", text: "./initialize_portfolio.sh" },
  { type: "out", text: "[OK] Loading dependencies..." },
  { type: "out", text: "[OK] Mounting environment..." },
  { type: "out", text: "[OK] Bootstrapping UI core..." },
  { type: "gap" },
  { type: "cmd", text: "whoami" },
  { type: "out", text: "> Aakash Pai" },
  { type: "out", text: "> CS Student @ Sunway University, KL" },
  { type: "out", text: "> Full-Stack Engineer  |  Builder" },
  { type: "gap" },
  { type: "cmd", text: "cat status.txt" },
  { type: "out", text: "> Open to internships & new opportunities." },
] as const;

export type TechCategory = { label: string; items: string[] };

export const TECH: TechCategory[] = [
  {
    label: "LANGUAGES",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java", "Go"],
  },
  {
    label: "FRONTEND",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Streamlit"],
  },
  {
    label: "BACKEND",
    items: ["Node.js", "Supabase", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "TOOLS",
    items: ["Git", "Docker", "n8n", "Google Cloud Run"],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  image: string | null;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Sugar & Icing",
    description:
      "Production-grade mobile-first e-commerce platform built for a local bakery with Next.js 15 App Router and strict UI-business logic separation.\n\nAtomic inventory deductions and real-time order updates run on a Supabase PostgreSQL backend with Row Level Security (RLS) and custom database RPCs to eliminate race conditions.\n\nEnforces server-authoritative Stripe payment intents, Upstash Redis rate limiting, and Cloudflare Turnstile bot protection alongside a role-gated admin management portal.",
    tech: ["TypeScript", "Next.js 15", "Supabase", "Stripe", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/kashals/sugar-and-icing",
    live: "https://sugarandicing.vercel.app/",
    image: "/project_pictures/sai.png",
    featured: true,
  },
  {
    name: "LinkOps Engine",
    description:
      "Enterprise human-in-the-loop AI decision engine containerized on Google Cloud Run for startup accelerator matchmaking.\n\nIngests multimodal pitch decks and processes venture criteria via Gemini 2.5 Flash async batch pipelines running against live mentor and partner databases.\n\nFeatures an Explainable AI (XAI) streaming audit chat with strict 3R guardrails, allowing operators to inspect reasoning traces before committing linkages to a verified ledger.",
    tech: ["Python", "Streamlit", "Gemini API", "Google Cloud Run", "Docker", "Pandas"],
    github: "https://github.com/kashals/linkops",
    live: "https://linkops-engine-909093874855.asia-southeast1.run.app",
    image: "/project_pictures/linkops.png",
    featured: true,
  },
  {
    name: "Distributed Rate Limiter Gateway",
    description:
      "Zero-framework distributed API gateway written in pure Go, enforcing global per-user rate limits across horizontally scaled replicas.\n\nCentralized Redis state mutated via atomic Lua scripts prevents race conditions and double-counting across concurrent nodes, supporting both Token Bucket and microsecond Sliding Window Log algorithms.\n\nFeatures a reverse proxy with upstream header transformation, JWT authentication (HS256/RS256), and graceful SIGTERM draining of in-flight connections.",
    tech: ["Go", "Redis", "Lua Scripting", "JWT", "net/http", "Docker"],
    github: "https://github.com/kashals/distributed-rate-limiter-gateway",
    live: null,
    image: "/project_pictures/drlg.png",
    featured: true,
  },
  {
    name: "Order Settlement Engine",
    description:
      "Event-driven distributed settlement engine built with Java 21 and Spring Boot 3, ensuring strong consistency across microservices without distributed locks.\n\nEliminates dual-write failure modes via the Transactional Outbox pattern and PostgreSQL row locks (FOR UPDATE SKIP LOCKED), paired with ON CONFLICT deduplication to safely discard duplicate Kafka deliveries.\n\nExecutes closed-loop saga choreography with compensating state transitions, automated Dead Letter Queue routing with exponential backoff, and scheduled retention pruning.",
    tech: ["Java 21", "Spring Boot 3", "Apache Kafka", "PostgreSQL", "Docker", "Flyway"],
    github: "https://github.com/kashals/order-settlement-engine",
    live: null,
    image: null,
    featured: true,
  },
  {
    name: "SUDU File Management System",
    description:
      "Full-stack workspace and note management system engineered for SUDU.AI with Vue 3 Composition API, Node.js, Express, and Docker Compose.\n\nEnforces action-isolated PIN locking with security question recovery, Helmet HTTP protection, and dual-layer schema validation with Zod and reactive client validators over parameterized SQLite queries.\n\nUtilizes context-keyed Vue TransitionGroup reconciliation to guarantee clean DOM diffing during search, folder filtering, and view mode transitions without artificial delays.",
    tech: ["Vue 3", "TypeScript", "Node.js", "Express", "SQLite", "Tailwind CSS", "Docker"],
    github: "https://github.com/kashals/sudu-file-management-system",
    live: null,
    image: null,
    featured: true,
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  points: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "InQuantum AI",
    role: "Frontend Developer Intern",
    dates: "Apr 2025 - Aug 2025",
    points: [
      "Designed and built UI/UX for xPulse, an internal AI-driven platform.",
      "Completed a frontend assessment: reverse-engineered a full-stack real-time chat application from a visual reference, integrating provided backend APIs to deliver a fully working product.",
      "Worked with n8n for workflow automation and Framer Motion for production-quality animations.",
    ],
  },
];

export type EducationEntry = {
  institution: string;
  qualification: string;
  period: string;
  status: "In Progress" | "Completed";
  cgpa?: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    institution: "Sunway University",
    qualification: "BSc (Hons) Computer Science",
    period: "Sep 2025 - Sep 2027",
    status: "In Progress",
  },
  {
    institution: "Sunway College",
    qualification: "Diploma in Information Technology",
    period: "Aug 2023 — Aug 2025",
    status: "Completed",
    cgpa: "3.83/4.00",
  },
];
