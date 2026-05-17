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
    <section id="about" className="relative z-10 py-24">
      <div className="container">
        <SectionMarker index="01" label="ABOUT" />

        <div className="grid md:grid-cols-[1fr_300px] gap-12">
          {/* bio */}
          <div>
            <h2
              className="text-2xl font-semibold leading-snug tracking-tight mb-6"
              style={{ color: "var(--text)" }}
            >
              Building production-grade systems
              <br />
              at the intersection of web and AI.
            </h2>
            <p
              className="text-sm leading-8"
              style={{ color: "var(--muted)", maxWidth: "520px" }}
            >
              {ABOUT.bio}
            </p>
          </div>

          {/* info grid */}
          <div style={{ border: "1px solid var(--border)" }}>
            {INFO.map((item, i) => (
              <div
                key={item.label}
                className="px-5 py-4"
                style={{
                  borderBottom:
                    i < INFO.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <p
                  className="text-xs tracking-[0.15em] uppercase mb-1"
                  style={{ color: "var(--muted)" }}
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
