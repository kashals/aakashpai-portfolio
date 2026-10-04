"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import {
  SiGithub,
  SiTypescript,
  SiNextdotjs,
  SiSupabase,
  SiStripe,
  SiRedis,
  SiTailwindcss,
  SiPython,
  SiStreamlit,
  SiGooglegemini,
  SiGooglecloud,
  SiDocker,
  SiPandas,
  SiGo,
  SiSpringboot,
  SiApachekafka,
  SiPostgresql,
  SiVuedotjs,
  SiNodedotjs,
  SiSqlite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { cn } from "@/lib/utils";
import type { Project } from "@/app/data/portfolio";

function getTechIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("typescript")) return SiTypescript;
  if (lower.includes("next.js") || lower.includes("next")) return SiNextdotjs;
  if (lower.includes("supabase")) return SiSupabase;
  if (lower.includes("stripe")) return SiStripe;
  if (lower.includes("redis")) return SiRedis;
  if (lower.includes("tailwind")) return SiTailwindcss;
  if (lower.includes("python")) return SiPython;
  if (lower.includes("streamlit")) return SiStreamlit;
  if (lower.includes("gemini")) return SiGooglegemini;
  if (lower.includes("google cloud") || lower.includes("cloud run")) return SiGooglecloud;
  if (lower.includes("docker")) return SiDocker;
  if (lower.includes("pandas")) return SiPandas;
  if (lower === "go" || lower.includes("golang")) return SiGo;
  if (lower.includes("java 21") || lower.includes("java")) return FaJava;
  if (lower.includes("spring")) return SiSpringboot;
  if (lower.includes("kafka")) return SiApachekafka;
  if (lower.includes("postgres")) return SiPostgresql;
  if (lower.includes("vue")) return SiVuedotjs;
  if (lower.includes("node")) return SiNodedotjs;
  if (lower.includes("sqlite")) return SiSqlite;
  return null;
}

export interface HeroCard {
  activeSrc: string;
  left: string;
  showIdleSwap?: boolean;
  cardClass?: string;
  project?: Project;
}

export interface SpringConfig {
  type: "spring";
  bounce?: number;
  visualDuration?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export interface FeyCardsProps {
  projects?: Project[];
  cardSpacing?: number;
  spring?: SpringConfig;
  shiftDistance?: number;
  swapDuration?: number;
  entranceStagger?: number;
  imgSrc?: string[];
  mainImg?: string;
  idleImg?: string;
  heading?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const DEFAULT_IMAGES = [
  "https://cdn.inspira-ui.com/images/1.webp",
  "https://cdn.inspira-ui.com/images/2.webp",
  "https://cdn.inspira-ui.com/images/3.webp",
  "https://cdn.inspira-ui.com/images/4.webp",
  "https://cdn.inspira-ui.com/images/5.webp",
];

export function FeyCards({
  projects = [],
  cardSpacing = 32,
  spring = {
    type: "spring",
    visualDuration: 0.5,
    bounce: 0.2,
    stiffness: 280,
    damping: 24,
  },
  shiftDistance = 60,
  swapDuration = 0.5,
  entranceStagger = 0.2,
  imgSrc = DEFAULT_IMAGES,
  mainImg = "https://cdn.inspira-ui.com/images/main.webp",
  idleImg = "https://cdn.inspira-ui.com/images/idle.webp",
  heading,
  children,
  className,
}: FeyCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const cards = useMemo<HeroCard[]>(() => {
    return imgSrc.map((src, index) => {
      const matchedProject = projects[index] || projects[index % (projects.length || 1)];
      if (index === imgSrc.length - 1) {
        return {
          activeSrc: src,
          left: `${(index + 1) * cardSpacing}`,
          showIdleSwap: false,
          cardClass: "transition-opacity duration-300",
          project: matchedProject,
        };
      }

      return {
        activeSrc: src,
        left: `${(index + 1) * cardSpacing}`,
        project: matchedProject,
      };
    });
  }, [imgSrc, cardSpacing, projects]);

  const isHovered = activeIndex !== null;

  const swapStyle = useMemo(
    () => ({
      transitionDuration: `${swapDuration}s`,
    }),
    [swapDuration]
  );

  // Responsive heading class: always WHITE text, scaled nicely for mobile
  const headingClass = [
    "absolute top-1/2 left-1/2 z-50 mx-auto w-fit -translate-x-1/2 -translate-y-1/2",
    "text-center text-lg sm:text-2xl md:text-5xl font-bold tracking-tight whitespace-nowrap",
    "bg-clip-text py-4 transition-all duration-500 pointer-events-none select-none text-white",
  ];

  const toggleActiveIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const displayText = heading || children || "Engineered for scale. Built to perform.";
  const hoveredProject = activeIndex !== null ? cards[activeIndex]?.project : null;

  return (
    <div className={cn("flex w-full flex-col items-center justify-center pt-6 pb-20 md:pt-10 md:pb-28 select-none relative", className)}>
      <div className="relative flex flex-col items-center justify-center w-full max-w-full">
        {/* Layer 1: Masked cutout gradient heading on hover (Always pure white gradient) */}
        <motion.h1
          key="solid"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_80%,white_100%)]",
            headingClass,
            "text-transparent"
          )}
        >
          {displayText}
        </motion.h1>

        {/* Layer 2: Solid heading before hover (Pure white text) */}
        <motion.h1
          key="gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "bg-[linear-gradient(to_right,white,white)]",
            headingClass,
            "text-white"
          )}
        >
          {displayText}
        </motion.h1>

        {/* 3D Fey Cards Stack Stage: Scales on mobile to prevent clipping */}
        <div className="relative flex h-[420px] sm:h-[470px] md:h-[530px] w-full items-center justify-center overflow-visible">
          <div className="relative flex h-[480px] w-96 origin-center scale-[0.76] xs:scale-[0.88] sm:scale-100 transition-transform duration-300 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
            <img
              src={mainImg}
              alt="Hero"
              width={1000}
              height={1000}
              className="absolute inset-y-0 left-0 h-[480px] w-40 object-contain pointer-events-none select-none"
            />

            {cards.map((card, index) => (
              <motion.div
                key={card.activeSrc}
                className={cn("group absolute -bottom-2 z-20 h-[480px] w-40 cursor-pointer select-none", card.cardClass)}
                initial={{ x: -index * cardSpacing }}
                style={{ left: `${card.left}px` }}
                animate={{ x: 0 }}
                transition={{
                  ...spring,
                  delay: (cards.length - 1 - index) * entranceStagger,
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => {
                  toggleActiveIndex(index);
                  if (card.project) setSelectedProject(card.project);
                }}
              >
                <motion.div
                  className="relative h-full w-full"
                  animate={{
                    x: activeIndex !== null && index > activeIndex ? shiftDistance : 0,
                    y: activeIndex === index ? -14 : 0,
                    scale: activeIndex === index ? 1.03 : 1,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={spring}
                >
                  {card.showIdleSwap !== false ? (
                    <>
                      <img
                        src={card.activeSrc}
                        alt="Hero"
                        width={1000}
                        height={1000}
                        style={swapStyle}
                        className={cn(
                          "absolute inset-0 aspect-[9/16] h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100",
                          activeIndex === index && "opacity-100"
                        )}
                      />

                      <img
                        src={idleImg}
                        alt="Hero idle"
                        width={1000}
                        height={1000}
                        style={swapStyle}
                        className={cn(
                          "absolute inset-0 aspect-[9/16] h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-0",
                          activeIndex === index && "opacity-0"
                        )}
                      />

                      <div className="absolute top-8 left-2 z-50 h-full w-4 blur-md" />
                    </>
                  ) : (
                    <img
                      src={card.activeSrc}
                      alt="Hero"
                      width={1000}
                      height={1000}
                      style={swapStyle}
                      className="absolute inset-0 aspect-[9/16] h-full w-full object-contain transition-opacity"
                    />
                  )}

                  {/* Subtle project badge indicator on active card */}
                  {card.project && (
                    <div
                      className={cn(
                        "absolute bottom-4 left-2 right-2 z-30 flex items-center justify-between rounded-lg border border-white/20 bg-black/90 px-3 py-1.5 text-[10px] font-mono text-white opacity-0 backdrop-blur-md transition-opacity duration-300 shadow-lg",
                        activeIndex === index && "opacity-100"
                      )}
                    >
                      <span className="truncate font-semibold text-white">
                        {card.project.name}
                      </span>
                      <ArrowUpRight size={12} className="shrink-0 text-white/80" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover / Active Telemetry Footer Hint */}
        <div className="mt-6 md:mt-8 flex items-center justify-center text-center px-4 text-xs font-mono text-[var(--muted)]">
          {hoveredProject ? (
            <span className="inline-flex items-center gap-2 text-[var(--text)] animate-fadeIn font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--text)] animate-pulse" />
              <span>SELECTED: {hoveredProject.name.toUpperCase()} (CLICK TO INSPECT)</span>
            </span>
          ) : (
            <span className="text-[var(--muted)]">
              HOVER TO SHIFT • CLICK CARD TO EXPAND SPEC
            </span>
          )}
        </div>
      </div>

      {/* Modal / Expanded Project Specification Window */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Expanded Modal Box: 3D Unfolding from the hovered card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.48,
                rotateY: -24,
                rotateX: 14,
                y: 70,
                filter: "blur(6px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.52,
                rotateY: -20,
                rotateX: 10,
                y: 50,
                filter: "blur(4px)",
              }}
              transition={{
                type: "spring",
                stiffness: 340,
                damping: 26,
                mass: 0.75,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 md:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.95),0_0_80px_rgba(255,255,255,0.04)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border)]">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  ARCHITECTURE SPECIFICATION
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Title */}
              <div style={{ marginTop: "24px" }}>
                <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-[var(--text)] leading-snug">
                  {selectedProject.name}
                </h2>
              </div>

              {/* Description */}
              <div style={{ marginTop: "24px" }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]" style={{ marginBottom: "12px" }}>
                  // OVERVIEW
                </p>
                <div className="flex flex-col font-mono text-[12px] sm:text-[13px] text-[var(--text)]/70" style={{ gap: "14px", lineHeight: "1.85" }}>
                  {selectedProject.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginTop: "40px" }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]" style={{ marginBottom: "12px" }}>
                  // STACK
                </p>
                <div className="flex flex-wrap" style={{ gap: "8px" }}>
                  {selectedProject.tech.map((t) => {
                    const TechIcon = getTechIcon(t);
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center font-mono text-[11px] rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)]/75 hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors"
                        style={{ gap: "6px", padding: "6px 10px" }}
                      >
                        {TechIcon && <TechIcon size={12} className="shrink-0 opacity-70" />}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  marginTop: "40px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition-opacity hover:opacity-50"
                    style={{ color: "#aaaaaa", display: "flex", alignItems: "center" }}
                    aria-label="View on GitHub"
                  >
                    <SiGithub size={17} style={{ color: "#aaaaaa" }} />
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer transition-opacity hover:opacity-50"
                      style={{ color: "#aaaaaa", display: "flex", alignItems: "center" }}
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} style={{ color: "#aaaaaa" }} />
                    </a>
                  )}
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]" style={{ textAlign: "right" }}>
                  {selectedProject.live ? "PRODUCTION DEPLOYMENT" : "CORE BACKEND SERVICE"}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
