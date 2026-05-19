// terminal chrome — reusable for hero + contact

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title = "bash — aakash@system",
  children,
  className = "",
}: Props) {
  return (
    <div
      className={className}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* titlebar — needs position relative for the centered title span */}
      <div
        className="flex items-center"
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid var(--border)",
          position: "relative",
        }}
      >
        {/* traffic lights */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, zIndex: 1 }}>
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "var(--t-dot-red)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "var(--t-dot-yellow)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "var(--t-dot-green)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
        </div>

        {/* centered title */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </span>
      </div>

      {/* body */}
      <div className="text-sm leading-7" style={{ padding: "24px", minHeight: "400px" }}>
        {children}
      </div>
    </div>
  );
}
