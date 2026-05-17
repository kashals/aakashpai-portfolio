"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // scroll listener for blur effect + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // figure out which section is in view
      const sections = links.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(9, 9, 11, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* logo */}
          <a
            href="#"
            className="mono text-sm font-semibold tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            ap.
          </a>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm rounded-lg transition-colors duration-200"
                  style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
                >
                  {/* active pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--surface-2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* resume cta */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted)",
            }}
          >
            Resume ↗
          </a>

          {/* mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--muted)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 glass"
            style={{ background: "rgba(9,9,11,0.97)" }}
          >
            <nav className="flex flex-col gap-2 mt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-lg font-medium border-b transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    color:
                      active === link.href.slice(1)
                        ? "var(--accent)"
                        : "var(--text)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 py-3 text-center rounded-lg text-sm font-medium border"
                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              >
                Resume ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
