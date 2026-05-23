// central data file — update content here only

export const ABOUT = {
  name: "Aakash Pai",
  location: "Kuala Lumpur, Malaysia",
  status: "Open to opportunities",
  university: "Sunway University",
  degree: "BSc (Hons) Computer Science",
  graduation: "Sep 2027",
  bio: "BSc (Hons) Computer Science student at Sunway University with a strong foundation in full-stack web development. I build production-grade applications with Next.js, React, and Supabase — from e-commerce platforms to B2B workflow automation engines. Currently expanding into Python, data science, and machine learning.",
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
      "Production-grade e-commerce platform for a local bakery. Server-authoritative Stripe payments, Cloudflare Turnstile bot protection, Upstash Redis rate limiting, atomic stock deduction via Supabase RPC, and a role-gated admin dashboard with real-time revenue analytics.",
    tech: ["TypeScript", "Next.js 15", "Supabase", "Stripe", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/kashals/sugar-and-icing",
    live: "https://sugarandicing.vercel.app/",
    image: "/project_pictures/sai.png",
    featured: true,
  },
  {
    name: "LinkOps Engine",
    description:
      "Containerized enterprise decision-support system on Google Cloud Run. Processes pitch decks via Gemini 2.5 Flash async batch queues, mapping venture constraints against live relational data. Includes an XAI chat interface for real-time AI decision auditing.",
    tech: ["Python", "Streamlit", "Gemini API", "Google Cloud Run", "Docker", "Pandas"],
    github: "https://github.com/kashals/linkops",
    live: "https://linkops-engine-909093874855.asia-southeast1.run.app",
    image: "/project_pictures/linkops.png",
    featured: true,
  },
  {
    name: "Distributed Rate Limiter Gateway",
    description:
      "Zero-framework distributed API gateway in pure Go enforcing global per-user rate limits across horizontally scaled replicas. Centralized Redis state mutated via atomic Lua scripts eliminates race conditions and double-counting. Ships two pluggable throttling algorithms — Token Bucket (lazy refill, HSET state) and Sliding Window Log (microsecond-precision sorted sets). Full JWT auth pipeline (HS256/RS256), reverse proxy with header mutation (strips Authorization, injects X-User-ID), and graceful SIGTERM shutdown with in-flight request draining.",
    tech: ["Go", "Redis", "Lua Scripting", "JWT", "net/http", "Docker"],
    github: "https://github.com/kashals/distributed-rate-limiter-gateway",
    live: null,
    image: "/project_pictures/drlg.png",
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
    dates: "Apr 2025 — Aug 2025",
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
    period: "Sep 2025 — Sep 2027",
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
