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
          {/* Bento Grid: stats | langs / calendar full-width */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}>
            {/* Stats card */}
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}>
              <img
                src="https://github-stats-extended.vercel.app/api?username=kashals&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&bg_color=151518&title_color=e8e8ea&text_color=e8e8ea&icon_color=64646f"
                alt="Aakash's GitHub Stats"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Top languages donut */}
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}>
              <img
                src="https://github-stats-extended.vercel.app/api/top-langs?username=kashals&layout=donut&langs_count=4&hide_border=true&bg_color=151518&title_color=e8e8ea&text_color=e8e8ea"
                alt="Aakash's Top Languages"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Contribution calendar — full width bottom cell */}
            <div style={{
              gridColumn: "1 / -1",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "28px 32px",
              overflowX: "auto",
              display: "flex",
              justifyContent: "center",
            }}>
              <GitHubCalendar
                username="kashals"
                colorScheme="dark"
                fontSize={12}
                blockSize={12}
                theme={{
                  dark: [
                    "#151518",
                    "#2c2c31",
                    "#4a4a52",
                    "#888893",
                    "#e8e8ea",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
