import { ArrowUp, ArrowUpRight, Award, BookOpen, Calendar } from "lucide-react";
import SectionMarker from "./ui/SectionMarker";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section section-divider">
      <div className="container">
        <SectionMarker index="04" label="EXPERIENCE" />

        {/* experience entries */}
        <div style={{ marginBottom: "64px" }}>
          {EXPERIENCE.map((entry, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-8"
              style={{
                padding: "32px",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                marginBottom: "24px",
              }}
            >
              {/* left - meta */}
              <div>
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase hover-text transition-colors group cursor-pointer"
                    style={{ color: "var(--text)", marginBottom: "8px" }}
                  >
                    <span>{entry.company}</span>
                    <ArrowUpRight size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <p
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "var(--text)", marginBottom: "8px" }}
                  >
                    {entry.company}
                  </p>
                )}
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {entry.role}
                </p>
                <p
                  className="text-xs tracking-wide"
                  style={{ color: "var(--dim)", marginTop: "12px" }}
                >
                  {entry.dates}
                </p>
              </div>

              {/* right - bullets */}
              <ul className="space-y-3">
                {entry.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-xs leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    <span style={{ color: "var(--dim)" }}>-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* education */}
        <SectionMarker index="05" label="EDUCATION" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {EDUCATION.map((entry, i) => (
            <div key={i}>
              <div
                className="rounded-2xl transition-all duration-300 hover:border-[var(--muted)]"
                style={{
                  padding: "36px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
              {/* Card Header: Degree & Standing */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-[var(--border)]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px] text-[var(--muted)] tracking-wider uppercase">
                    <span>{i === 0 ? "01 // DEGREE CANDIDACY" : "02 // TECHNICAL FOUNDATION"}</span>
                    {entry.award && (
                      <>
                        <span className="text-[var(--dim)]">•</span>
                        <span>{entry.award}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                    {entry.qualification}
                  </h4>
                  <p className="text-xs sm:text-[13px] mt-1.5" style={{ color: "var(--muted)" }}>
                    {entry.institution}
                  </p>
                </div>

                {/* CGPA Stat Display - Clean Typography (No Box) */}
                <div className="text-left md:text-right shrink-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest block" style={{ color: "var(--muted)" }}>
                    CUMULATIVE GPA
                  </span>
                  <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight mt-0.5" style={{ color: "var(--text)" }}>
                    {entry.cgpa.split("/")[0]?.trim()}
                    <span className="text-xs font-normal ml-1" style={{ color: "var(--dim)" }}>
                      / 4.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Status & Period - Clean Row (No Box) */}
              <div className="flex flex-wrap items-center gap-5 py-4 text-xs font-mono" style={{ color: "var(--muted)" }}>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} style={{ color: "var(--dim)" }} />
                  {entry.period}
                </span>
                <span className="inline-flex items-center gap-2 text-[11px] tracking-wider uppercase font-mono">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: entry.status === "In Progress" ? "var(--t-ok)" : "var(--dim)" }}
                  />
                  <span style={{ color: entry.status === "In Progress" ? "var(--t-ok)" : "var(--muted)" }}>
                    {entry.status}
                  </span>
                </span>
              </div>

              {/* Honors & Accolades (Degree) - Soft Tinted Tiles */}
              {entry.honors && entry.honors.length > 0 && (
                <div className="mt-2 pt-5 border-t border-[var(--border)]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: "var(--muted)" }}>
                    <Award size={13} />
                    ACADEMIC HONORS & MERIT AWARDS
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {entry.honors.map((honor, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-xl transition-colors"
                        style={{ background: "var(--surface-2)" }}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="text-xs sm:text-[13px] font-semibold" style={{ color: "var(--text)" }}>
                            {honor.title}
                          </h5>
                          {honor.tag && (
                            <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                              {honor.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs leading-relaxed mt-1" style={{ color: "var(--muted)" }}>
                          {honor.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coursework Tags (Diploma) - Soft Rounded Chips */}
              {entry.coursework && entry.coursework.length > 0 && (
                <div className="mt-2 pt-5 border-t border-[var(--border)]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3.5 flex items-center gap-2" style={{ color: "var(--muted)" }}>
                    <BookOpen size={13} />
                    CORE ENGINEERING CURRICULUM
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-mono rounded-lg transition-colors hover:text-white"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--text)",
                          opacity: 0.85,
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Upward progression connector: Diploma (02) -> Degree (01) */}
            {i === 0 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  padding: "32px 0",
                }}
                aria-hidden="true"
              >
                <div style={{ flex: 1, maxWidth: "140px", height: "1px", background: "var(--border)" }} />
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--muted)",
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  <ArrowUp size={14} style={{ color: "var(--text)" }} />
                  <span>ACADEMIC PROGRESSION</span>
                </div>
                <div style={{ flex: 1, maxWidth: "140px", height: "1px", background: "var(--border)" }} />
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
