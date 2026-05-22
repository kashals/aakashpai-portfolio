"use client";

import { useState, useEffect, useRef } from "react";
import TerminalWindow from "./ui/TerminalWindow";
import { STATS, TERMINAL_SEQ } from "../data/portfolio";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

import CountUp from "./ui/CountUp";

const PROMPT = "guest@aakash:~$";

// line types rendered in terminal
type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "gap" };

// use data from portfolio.ts
const SEQ = TERMINAL_SEQ;

const CHAR_MS = 42;
const OUT_MS = 75;
const CMD_PAUSE = 220;

export default function Hero() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  // refs so timeout callbacks don't see stale state
  const linesRef = useRef<Line[]>([]);
  const seqIdx = useRef(0);
  const charIdx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const push = (line: Line) => {
      linesRef.current = [...linesRef.current, line];
      setLines([...linesRef.current]);
    };

    const tick = () => {
      const i = seqIdx.current;
      if (i >= SEQ.length) {
        setTyping(null);
        setDone(true);
        return;
      }

      const step = SEQ[i];

      if (step.type === "gap") {
        push({ kind: "gap" });
        seqIdx.current++;
        charIdx.current = 0;
        timer.current = setTimeout(tick, OUT_MS);
        return;
      }

      if (step.type === "out") {
        push({ kind: "out", text: step.text });
        seqIdx.current++;
        charIdx.current = 0;
        timer.current = setTimeout(tick, OUT_MS);
        return;
      }

      // cmd — type char by char
      const c = charIdx.current;
      if (c === 0) {
        setTyping("");
        charIdx.current = 1;
        timer.current = setTimeout(tick, CHAR_MS);
        return;
      }

      const partial = step.text.slice(0, c);
      setTyping(partial);

      if (c < step.text.length) {
        charIdx.current++;
        timer.current = setTimeout(tick, CHAR_MS);
      } else {
        // done typing — commit line
        setTyping(null);
        push({ kind: "cmd", text: step.text });
        seqIdx.current++;
        charIdx.current = 0;
        timer.current = setTimeout(tick, CMD_PAUSE);
      }
    };

    timer.current = setTimeout(tick, 700);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  return (
    <section className="section-hero relative z-10">
      <div className="container">
        
        {/* Centered Identity & CTAs */}
        <div className="flex flex-col items-center text-center hero-cta-block">
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            style={{ color: "var(--text)" }}
          >
            AAKASH PAI.
          </h1>
          <p 
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Full-Stack Engineer & CS Student at Sunway University. I build robust, scalable, and dynamic digital experiences.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8" style={{ marginTop: "24px" }}>
            <a 
              href="#contact" 
              className="btn-contact"
            >
              <span>Contact Me</span>
              <div className="btn-contact-icons">
                <FaWhatsapp size={22} className="icon" />
                <FaLinkedin size={22} className="icon" />
                <FaGithub size={22} className="icon" />
              </div>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-medium tracking-wide btn-hero btn-hero-secondary rounded-md"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Terminal Window Below */}
        <div className="w-full max-w-4xl mx-auto relative text-left mb-16 md:mb-[96px]" style={{ marginTop: "64px" }}>
          <TerminalWindow title={`bash — ${PROMPT.split("$")[0].trim()}`}>
              <div>
                {lines.map((line, i) => {
                  if (line.kind === "gap") {
                    return <div key={i} className="h-3" />;
                  }
                  if (line.kind === "cmd") {
                    return (
                      <div key={i} className="flex gap-3">
                        <span style={{ color: "var(--t-prompt)" }}>{PROMPT}</span>
                        <span style={{ color: "var(--text)" }}>{line.text}</span>
                      </div>
                    );
                  }
                  // out
                  const isOk = line.text.startsWith("[OK]");
                  return (
                    <div
                      key={i}
                      style={{ color: isOk ? "var(--t-ok)" : "var(--t-output)" }}
                    >
                      {line.text}
                    </div>
                  );
                })}

                {/* currently typing */}
                {typing !== null && (
                  <div className="flex gap-3">
                    <span style={{ color: "var(--t-prompt)" }}>{PROMPT}</span>
                    <span style={{ color: "var(--text)" }}>
                      {typing}
                      <span className="cursor-block" />
                    </span>
                  </div>
                )}

                {/* idle prompt when done */}
                {done && (
                  <div className="flex gap-3 mt-1">
                    <span style={{ color: "var(--t-prompt)" }}>{PROMPT}</span>
                    <span className="cursor-block" />
                  </div>
                )}
              </div>
            </TerminalWindow>
          </div>


        {/* stat row — separate blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: "48px" }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "24px 32px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <div
                className="text-2xl font-semibold tracking-tight"
                style={{ color: "var(--text)", marginBottom: "8px" }}
              >
                <CountUp value={s.val} />
              </div>
              <div
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
