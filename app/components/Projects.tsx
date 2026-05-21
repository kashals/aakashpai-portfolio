"use client";

import { useRef } from "react";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);
import SectionMarker from "./ui/SectionMarker";
import { PROJECTS, type Project } from "../data/portfolio";

function ProjectCard({
  project,
  i,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div
      ref={container}
      className="h-screen flex justify-center sticky top-0"
      style={{ paddingTop: "140px" }}
    >
      <div className="container w-full flex justify-center h-fit">
        <motion.div
          style={{
            scale,
            top: `calc(${i * 30}px)`,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: i > 0 ? "0 -20px 40px rgba(0,0,0,0.4)" : "none",
          }}
          className="flex flex-col md:flex-row w-full max-w-5xl relative origin-top overflow-hidden"
        >
          {/* Text Content */}
          <div className="flex-1" style={{ padding: "48px" }}>
            <h3
              className="text-2xl font-semibold tracking-tight"
              style={{ color: "var(--text)", marginBottom: "16px" }}
            >
              {project.name}
            </h3>
            <p className="text-sm leading-8" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2" style={{ marginTop: "40px" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs tracking-wide"
                  style={{
                    padding: "8px 14px",
                    border: "1px solid var(--border-2)",
                    color: "var(--dim)",
                    background: "var(--surface-2)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div
              className="flex items-center gap-8"
              style={{ marginTop: "48px" }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase hover-text transition-colors"
                style={{ color: "var(--muted)" }}
              >
                <SiGithub size={16} />
                Source
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase hover-text transition-colors"
                  style={{ color: "var(--muted)" }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Image Content (if available) */}
          {project.image && (
            <div
              className="hidden md:block relative w-[45%] h-auto overflow-hidden"
              style={{ borderLeft: "1px solid var(--border)" }}
            >
              <motion.div
                className="w-full h-full relative min-h-[400px]"
                style={{ scale: imageScale }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section
        id="projects"
        ref={container}
        className="relative z-10 section-divider"
        style={{ paddingBottom: "10vh" }}
      >
        <div className="container" style={{ paddingTop: "96px" }}>
          <SectionMarker index="03" label="WORK" />
        </div>

        <div className="relative w-full" style={{ marginTop: "-40px" }}>
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - (PROJECTS.length - i) * 0.03;
            return (
              <ProjectCard
                key={project.name}
                project={project}
                i={i}
                progress={scrollYProgress}
                range={[i * (1 / PROJECTS.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        {/* GitHub Activity Section */}
        <div className="container w-full max-w-5xl mx-auto flex flex-col mt-24 relative z-10">
          <h3 className="text-xl font-semibold tracking-tight mb-8" style={{ color: "var(--text)" }}>
            GitHub Activity
          </h3>
          <div className="p-8 w-full overflow-x-auto flex justify-center rounded-lg" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <GitHubCalendar 
              username="Kashfmh" 
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
            />
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
