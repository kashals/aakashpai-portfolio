"use client";

import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { Terminal, FileText } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "ABOUT", link: "#about" },
    { name: "STACK", link: "#stack" },
    { name: "PROJECTS", link: "#projects" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "CONTACT", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.link.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.link.replace("#", ""));
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const Logo = () => (
    <a
      href="#"
      className="text-xs font-semibold tracking-[0.2em] uppercase relative z-20 mr-4 flex items-center px-2 py-1"
      style={{ color: "var(--text)" }}
    >
      AP.DEV
    </a>
  );

  return (
    <div className="relative w-full">
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody className="border border-border bg-surface">
          <Logo />
          <NavItems items={navItems} activeSection={activeSection} />
          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors duration-150 hover:text-text"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <FileText size={14} />
              <span className="hidden xl:inline">RESUME</span>
            </a>
            <div
              className="flex items-center justify-center w-8 h-8 rounded-sm"
              style={{ border: "1px solid var(--border)" }}
            >
              <Terminal size={13} style={{ color: "var(--muted)" }} />
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="border border-border bg-surface dark:bg-surface"
          >
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.link.replace("#", "");
              return (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative text-xs tracking-[0.15em] uppercase hover:text-text w-full pb-4 border-b border-border ${isActive ? "text-text" : "text-muted"}`}
                  style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
                >
                  <span className="block">{item.name}</span>
                </a>
              );
            })}
            <div className="flex w-full flex-col gap-4 mt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs tracking-[0.15em] uppercase w-full text-left"
                style={{ color: "var(--text)" }}
              >
                RESUME
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}
