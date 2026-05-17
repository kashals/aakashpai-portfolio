"use client";

import { useState, useEffect, useRef } from "react";
import TerminalWindow from "./ui/TerminalWindow";
import { STATS, TERMINAL_SEQ } from "../data/portfolio";

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
    <section className="relative z-10 pt-36 pb-0">
      <div className="container">
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

        {/* stat row — attached to bottom of terminal */}
        <div
          className="grid grid-cols-3"
          style={{ border: "1px solid var(--border)", borderTop: "none" }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="px-6 py-5"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                className="text-2xl font-semibold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {s.val}
              </div>
              <div
                className="text-xs tracking-[0.15em] uppercase mt-1"
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
