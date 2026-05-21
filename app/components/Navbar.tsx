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
import { SOCIALS } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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
      className="text-xs font-semibold tracking-[0.2em] uppercase relative z-[110] mr-4 flex items-center px-2 py-1"
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
          >
            <div className="flex w-full flex-col items-end gap-6 relative h-full">
              {/* Menu Links */}
              <div className="flex w-full flex-col items-end justify-center flex-1 gap-6">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.link.replace("#", "");
                  return (
                    <a
                      key={`mobile-link-${idx}`}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-4xl sm:text-5xl font-medium tracking-tight hover:opacity-70 transition-opacity ${isActive ? "text-text" : "text-muted"}`}
                      style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-medium tracking-tight hover:opacity-70 transition-opacity mt-4"
                  style={{ color: "var(--text)" }}
                >
                  RESUME
                </a>
              </div>

              {/* Social Icons at bottom right */}
              <div className="flex items-center gap-6 mt-auto pt-8">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "var(--text)" }}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "var(--text)" }}
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "var(--text)" }}
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}
