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
        <div className="h-20 md:h-[140px] w-full" aria-hidden="true" />

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
          {/* Bento Grid: 1 col on mobile, 2 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {/* Stats card */}
            <div
              className="rounded-xl overflow-hidden flex items-center justify-center"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src="https://github-stats-extended.vercel.app/api?username=kashals&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&bg_color=151518&title_color=e8e8ea&text_color=e8e8ea&icon_color=64646f"
                alt="Aakash's GitHub Stats"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Top languages donut */}
            <div
              className="rounded-xl overflow-hidden flex items-center justify-center"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src="https://github-stats-extended.vercel.app/api/top-langs?username=kashals&layout=donut&langs_count=4&hide_border=true&bg_color=151518&title_color=e8e8ea&text_color=e8e8ea"
                alt="Aakash's Top Languages"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Contribution calendar — full width bottom cell */}
            <div
              className="col-span-1 md:col-span-2 rounded-xl overflow-x-auto flex justify-start md:justify-center p-4 sm:p-6 md:p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="min-w-[660px] md:min-w-0">
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
      </div>
    </section>
  );
}
