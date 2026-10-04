"use client";

import { SiGithub } from "react-icons/si";
import dynamic from "next/dynamic";
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);
import SectionMarker from "./ui/SectionMarker";
import { FeyCards } from "@/components/ui/fey-cards";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section section-divider">
      <div className="container">
        <SectionMarker index="03" label="WORK" />

        {/* Fey Cards Interactive Showcase Deck */}
        <FeyCards
          projects={PROJECTS}
          heading="Engineered for scale. Built to perform."
          className="mt-4"
        />

        {/* Explicit Spacer guaranteeing generous breathing room */}
        <div style={{ height: "140px", width: "100%" }} aria-hidden="true" />

        {/* GitHub Activity Section */}
        <div style={{ paddingTop: "48px", borderTop: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              GitHub Activity
            </h3>
            <a
              href="https://github.com/kashals"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover-text transition-colors"
              style={{ color: "var(--muted)" }}
            >
              <SiGithub size={16} />
              View Profile
            </a>
          </div>
          <div
            className="p-8 w-full overflow-x-auto flex justify-center rounded-lg"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <GitHubCalendar
              username="kashals"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
