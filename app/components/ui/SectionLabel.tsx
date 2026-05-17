// section tag label like <About />
export default function SectionLabel({ label }: { label: string }) {
  return (
    <span
      className="mono text-xs font-medium tracking-wider"
      style={{ color: "var(--accent)" }}
    >
      &lt;{label} /&gt;
    </span>
  );
}
