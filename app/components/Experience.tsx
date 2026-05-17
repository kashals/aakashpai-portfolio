import SectionMarker from "./ui/SectionMarker";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="container">
        <SectionMarker index="04" label="EXPERIENCE" />

        {/* experience entries */}
        <div className="mb-16">
          {EXPERIENCE.map((entry, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-8"
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "24px",
                paddingBottom: "24px",
                borderBottom:
                  i === EXPERIENCE.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* left — meta */}
              <div>
                <p
                  className="text-xs tracking-wide uppercase mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {entry.company}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  {entry.role}
                </p>
                <p
                  className="text-xs mt-2 tracking-wide"
                  style={{ color: "var(--dim)" }}
                >
                  {entry.dates}
                </p>
              </div>

              {/* right — bullets */}
              <ul className="space-y-3">
                {entry.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-xs leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    <span style={{ color: "var(--dim)" }}>—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* education */}
        <SectionMarker index="05" label="EDUCATION" />
        <div>
          {EDUCATION.map((entry, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] gap-8"
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderBottom:
                  i === EDUCATION.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div>
                <p
                  className="text-xs tracking-wide uppercase mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {entry.institution}
                </p>
                <p
                  className="text-xs mt-2 tracking-wide"
                  style={{ color: "var(--dim)" }}
                >
                  {entry.period}
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {entry.qualification}
                </p>
                <span
                  className="inline-block mt-2 text-xs tracking-widest uppercase"
                  style={{
                    color:
                      entry.status === "In Progress"
                        ? "var(--t-ok)"
                        : "var(--dim)",
                  }}
                >
                  {entry.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
