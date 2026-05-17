// lil pill badge for tech tags
export default function TechBadge({ label }: { label: string }) {
  return (
    <span
      className="mono inline-block rounded-full border px-3 py-1 text-xs"
      style={{
        borderColor: "var(--border)",
        color: "var(--muted)",
        background: "var(--surface)",
      }}
    >
      {label}
    </span>
  );
}
