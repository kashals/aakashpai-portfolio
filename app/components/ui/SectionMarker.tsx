// section marker like: 01 // ABOUT

type Props = {
  index: string; // e.g. "01"
  label: string; // e.g. "ABOUT"
};

export default function SectionMarker({ index, label }: Props) {
  return (
    <p
      className="text-xs tracking-[0.2em] uppercase mb-8"
      style={{ color: "var(--muted)" }}
    >
      {index}&nbsp;&nbsp;//&nbsp;&nbsp;{label}
    </p>
  );
}
