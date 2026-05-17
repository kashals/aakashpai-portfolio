import { SiGithub, SiLinkedin } from "react-icons/si";
import { SOCIALS } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container flex items-center justify-between">
        <p
          className="text-xs tracking-[0.1em] uppercase"
          style={{ color: "var(--dim)" }}
        >
          &copy; 2025 Aakash Pai — Engineered in KL
        </p>

        <div className="flex items-center gap-5">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-150"
            style={{ color: "var(--muted)" }}
          >
            <SiGithub size={14} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-150"
            style={{ color: "var(--muted)" }}
          >
            <SiLinkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
