"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "motion/react";
import SectionMarker from "./ui/SectionMarker";
import { TECH } from "../data/portfolio";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiStreamlit,
  SiNodedotjs, SiSupabase, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiDocker, SiGooglecloud, SiN8N, SiGo,
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
  Go: SiGo,
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

const treeContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const categoryNodeVariants: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
};

const skillLeafVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.24,
      ease: "easeOut",
    },
  },
};

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.18 });

  const totalSkills = TECH.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="stack" className="section section-divider">
      <div className="container">
        <SectionMarker index="02" label="STACK" />

        <div
          ref={containerRef}
          className="font-mono text-sm leading-relaxed overflow-x-auto rounded-xl"
          style={{
            padding: "40px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          {/* prompt line with subtle terminal header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border)] text-xs text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-2)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-2)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-2)]" />
              <span className="ml-2 font-mono text-[11px] text-[var(--dim)]">skills-tree.sh</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[var(--dim)]">POSIX TREE</span>
          </div>

          {/* CLI Invocation */}
          <div style={{ marginBottom: "20px" }}>
            <span style={{ color: "var(--t-prompt)" }}>guest@aakash:~/skills$</span>
            <span style={{ color: "var(--text)", marginLeft: "8px" }}>tree --dirsfirst .</span>
          </div>

          {/* Root node */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ color: "var(--text)", fontWeight: 600 }}
          >
            .
          </motion.div>

          {/* Animated Tree Branches */}
          <motion.div
            variants={treeContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            {TECH.map((cat, i) => {
              const isLastCat = i === TECH.length - 1;

              return (
                <motion.div key={cat.label} variants={categoryNodeVariants} className="flex flex-col">
                  {/* Category Node */}
                  <div className="flex items-center mt-2.5">
                    <span style={{ color: "var(--dim)", whiteSpace: "pre" }}>
                      {isLastCat ? "└── " : "├── "}
                    </span>
                    <span
                      className="px-1.5 py-0.5 rounded text-xs tracking-wider uppercase font-semibold transition-colors"
                      style={{
                        color: "var(--text)",
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {cat.label}
                    </span>
                    <span className="text-[10px] text-[var(--dim)] ml-2">
                      ({cat.items.length})
                    </span>
                  </div>

                  {/* Tech Items Sprouting from Category Branch */}
                  {cat.items.map((tech, j) => {
                    const isLastItem = j === cat.items.length - 1;
                    const prefix = isLastCat ? "    " : "│   ";
                    const pointer = isLastItem ? "└── " : "├── ";
                    const Icon = ICON_MAP[tech];

                    return (
                      <motion.div
                        key={tech}
                        variants={skillLeafVariants}
                        className="flex items-center group"
                      >
                        <span style={{ color: "var(--dim)", whiteSpace: "pre" }}>
                          {prefix}{pointer}
                        </span>
                        <div className="flex items-center gap-2.5 px-2.5 py-1 my-0.5 transition-all duration-200 hover:bg-[var(--surface-2)] hover:translate-x-1 rounded-md cursor-default">
                          {Icon && (
                            <Icon
                              size={14}
                              className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors shrink-0"
                            />
                          )}
                          <span className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors text-xs font-mono">
                            {tech}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tree Summary Line */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: 1.25, duration: 0.35 }}
            className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)]"
          >
            <span>
              {TECH.length} directories, {totalSkills} skills
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
