"use client";

import { useState, useEffect } from "react";
import { Terminal, X, Menu } from "lucide-react";

const LINKS = [
  { label: "WORK", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = LINKS.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="container">
          <nav
            className="flex items-center justify-between px-6 h-14 relative"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            {/* brand */}
            <a
              href="#"
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--text)" }}
            >
              AP.DEV
            </a>

            {/* desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.15em] uppercase transition-colors duration-150"
                  style={{
                    color: active === link.href.slice(1) ? "var(--text)" : "var(--muted)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* resume + terminal icon */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase transition-colors duration-150"
                style={{ color: "var(--muted)" }}
              >
                RESUME
              </a>
              <div
                className="flex items-center justify-center w-8 h-8"
                style={{ border: "1px solid var(--border)" }}
              >
                <Terminal size={13} style={{ color: "var(--muted)" }} />
              </div>
            </div>

            {/* mobile toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen((p) => !p)}
              style={{ color: "var(--muted)" }}
              aria-label="toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>

          {/* mobile dropdown */}
          {mobileOpen && (
            <div
              className="flex flex-col md:hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderTop: "none",
              }}
            >
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-4 text-xs tracking-[0.15em] uppercase"
                  style={{
                    color: active === link.href.slice(1) ? "var(--text)" : "var(--muted)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-xs tracking-[0.15em] uppercase"
                style={{ color: "var(--muted)" }}
              >
                RESUME
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
