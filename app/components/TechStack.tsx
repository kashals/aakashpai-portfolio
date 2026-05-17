import SectionMarker from "./ui/SectionMarker";
import { TECH } from "../data/portfolio";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiStreamlit,
  SiNodedotjs, SiSupabase, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiDocker, SiGooglecloud, SiN8N,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

// map tech name -> icon
const ICON_MAP: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Streamlit: SiStreamlit,
  "Node.js": SiNodedotjs,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Git: SiGit,
  Docker: SiDocker,
  "Google Cloud Run": SiGooglecloud,
  n8n: SiN8N,
};

export default function TechStack() {
  return (
    <section id="stack" className="relative z-10 py-24">
      <div className="container">
        <SectionMarker index="02" label="STACK" />

        <div style={{ border: "1px solid var(--border)" }}>
          {TECH.map((cat, ci) => (
            <div
              key={cat.label}
              className="grid md:grid-cols-[160px_1fr]"
              style={{
                borderBottom:
                  ci < TECH.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* category label */}
              <div
                className="px-6 py-5 flex items-start"
                style={{ borderRight: "1px solid var(--border)" }}
              >
                <span
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {cat.label}
                </span>
              </div>

              {/* items */}
              <div className="px-6 py-5 flex flex-wrap gap-6">
                {cat.items.map((tech) => {
                  const Icon = ICON_MAP[tech];
                  return (
                    <div key={tech} className="flex items-center gap-2">
                      {Icon && (
                        <Icon size={14} style={{ color: "var(--muted)" }} />
                      )}
                      <span
                        className="text-xs tracking-wide"
                        style={{ color: "var(--text)" }}
                      >
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
