import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import SectionMarker from "./ui/SectionMarker";
import { PROJECTS, type Project } from "../data/portfolio";

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className="flex flex-col justify-between p-6 h-full"
      style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <div>
        <h3
          className={`font-semibold tracking-tight mb-3 ${large ? "text-base" : "text-sm"}`}
          style={{ color: "var(--text)" }}
        >
          {project.name}
        </h3>
        <p
          className="text-xs leading-7"
          style={{ color: "var(--muted)" }}
        >
          {project.description}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs tracking-wide px-2 py-1"
              style={{
                border: "1px solid var(--border-2)",
                color: "var(--dim)",
                background: "var(--surface-2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* links */}
      <div className="flex items-center gap-4 mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs tracking-wide uppercase transition-colors duration-150 hover:text-[color:var(--text)]"
          style={{ color: "var(--muted)" }}
        >
          <SiGithub size={12} />
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-wide uppercase transition-colors duration-150 hover:text-[color:var(--text)]"
            style={{ color: "var(--muted)" }}
          >
            <ExternalLink size={12} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="container">
        <SectionMarker index="03" label="WORK" />

        {/* featured — 2 col bento */}
        <p
          className="text-xs tracking-[0.15em] uppercase mb-4"
          style={{ color: "var(--dim)" }}
        >
          01&nbsp;&nbsp;//&nbsp;&nbsp;PRODUCTION
        </p>
        <div className="grid md:grid-cols-2 gap-px mb-px" style={{ background: "var(--border)" }}>
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} large />
          ))}
        </div>

        {/* rest — smaller */}
        {rest.length > 0 && (
          <>
            <p
              className="text-xs tracking-[0.15em] uppercase mt-8 mb-4"
              style={{ color: "var(--dim)" }}
            >
              02&nbsp;&nbsp;//&nbsp;&nbsp;OTHER
            </p>
            <div
              className="grid md:grid-cols-3 gap-px"
              style={{ background: "var(--border)" }}
            >
              {rest.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
