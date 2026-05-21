import SectionMarker from "./ui/SectionMarker";
import { ABOUT } from "../data/portfolio";

const INFO = [
  { label: "LOCATION", val: ABOUT.location },
  { label: "STATUS", val: ABOUT.status },
  { label: "UNIVERSITY", val: ABOUT.university },
  { label: "FOCUS", val: "Full-Stack + AI/ML" },
];

export default function About() {
  return (
    <section id="about" className="section section-divider">
      <div className="container">
        <SectionMarker index="01" label="ABOUT" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 md:gap-16 items-start">
          {/* bio */}
          <div>
            <h2
              style={{ fontSize: "1.3rem", fontWeight: 600, lineHeight: 1.45, letterSpacing: "-0.01em", color: "var(--text)", marginBottom: "20px" }}
            >
              Building production-grade systems
              <br />
              at the intersection of web and AI.
            </h2>
            <p
              style={{ fontSize: "0.78rem", lineHeight: 2, color: "var(--muted)", maxWidth: "520px", marginTop: "16px" }}
            >
              {ABOUT.bio}
            </p>
          </div>

          {/* info grid */}
          <div className="grid grid-cols-2 gap-4">
            {INFO.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "24px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ color: "var(--muted)", marginBottom: "8px" }}
                >
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: "var(--text)" }}>
                  {item.val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
