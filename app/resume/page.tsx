"use client";

import { useState, useRef } from "react";
import { FileText, Download, ArrowLeft, ExternalLink, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const RESUME_PATH = "/resume/Aakash_Pai_Resume.pdf";

export default function ResumePage() {
  const [zoom, setZoom] = useState(100);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const zoomIn = () => setZoom((z) => Math.min(z + 10, 150));
  const zoomOut = () => setZoom((z) => Math.max(z - 10, 60));

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Top Bar ── */}
      <header
        className="px-4 sm:px-6"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          gap: "16px",
        }}
      >
        {/* Left: back + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Desktop Back Link */}
          <Link
            href="/"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            className="hidden sm:flex items-center gap-1.5"
          >
            <ArrowLeft size={13} />
            <span>Back</span>
          </Link>

          {/* Mobile Back Link (Icon only, touch-friendly square button) */}
          <Link
            href="/"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s ease",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              background: "var(--surface-2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            className="flex sm:hidden items-center justify-center w-9 h-9"
          >
            <ArrowLeft size={16} />
          </Link>

          <div
            className="hidden sm:block"
            style={{
              width: "1px",
              height: "16px",
              background: "var(--border)",
            }}
          />

          <div className="hidden sm:flex items-center gap-2">
            <FileText size={13} style={{ color: "var(--muted)" }} />
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              Aakash_Pai_Resume.pdf
            </span>
          </div>
        </div>

        {/* Right: zoom + actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Zoom controls */}
          <div
            className="hidden sm:flex"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "4px 8px",
            }}
          >
            <button
              onClick={zoomOut}
              disabled={zoom <= 60}
              aria-label="Zoom out"
              style={{
                background: "none",
                border: "none",
                color: zoom <= 60 ? "var(--dim)" : "var(--muted)",
                cursor: zoom <= 60 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                padding: "2px",
                transition: "color 0.15s ease",
              }}
            >
              <ZoomOut size={13} />
            </button>
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "var(--muted)",
                minWidth: "36px",
                textAlign: "center",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              {zoom}%
            </span>
            <button
              onClick={zoomIn}
              disabled={zoom >= 150}
              aria-label="Zoom in"
              style={{
                background: "none",
                border: "none",
                color: zoom >= 150 ? "var(--dim)" : "var(--muted)",
                cursor: zoom >= 150 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                padding: "2px",
                transition: "color 0.15s ease",
              }}
            >
              <ZoomIn size={13} />
            </button>
          </div>

          {/* Open in new tab */}
          {/* Desktop Open Link (Untouched styling) */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in new tab"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "color 0.15s ease",
              padding: "6px 10px",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              background: "var(--surface-2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            className="hidden sm:flex items-center gap-1.5"
          >
            <ExternalLink size={12} />
            <span>Open</span>
          </a>

          {/* Mobile Open Link (Square icon button) */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in new tab"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.15s ease",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              background: "var(--surface-2)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            className="flex sm:hidden items-center justify-center w-9 h-9"
          >
            <ExternalLink size={14} />
          </a>

          {/* Desktop Download Link (Untouched styling) */}
          <a
            href={RESUME_PATH}
            download="Aakash_Pai_Resume.pdf"
            aria-label="Download resume"
            style={{
              color: "var(--bg)",
              background: "var(--text)",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "opacity 0.15s ease",
              padding: "6px 14px",
              borderRadius: "6px",
              border: "1px solid var(--text)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            className="hidden sm:flex items-center gap-1.5"
          >
            <Download size={12} />
            <span>Download</span>
          </a>

          {/* Mobile Download Link (Square icon button) */}
          <a
            href={RESUME_PATH}
            download="Aakash_Pai_Resume.pdf"
            aria-label="Download resume"
            style={{
              color: "var(--bg)",
              background: "var(--text)",
              textDecoration: "none",
              transition: "opacity 0.15s ease",
              borderRadius: "6px",
              border: "1px solid var(--text)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            className="flex sm:hidden items-center justify-center w-9 h-9"
          >
            <Download size={14} />
          </a>
        </div>
      </header>

      {/* ── PDF Viewer Area ── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 16px",
          position: "relative",
        }}
      >
        {/* Loading state */}
        {!loaded && !error && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              zIndex: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              <FileText size={16} />
              <span>Loading resume...</span>
              <span className="cursor-block" />
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              padding: "64px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              Could not embed PDF in your browser.
            </div>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
              }}
            >
              <ExternalLink size={13} />
              Open PDF Directly
            </a>
          </div>
        )}

        {/* Iframe wrapper with zoom */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(0,0,0,0.4)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <iframe
            ref={iframeRef}
            src={`${RESUME_PATH}#toolbar=0&view=FitH`}
            title="Aakash Pai Resume"
            style={{
              width: `${zoom}%`,
              marginLeft: `${(100 - zoom) / 2}%`,
              height: "calc(100dvh - 56px - 64px)",
              minHeight: "600px",
              border: "none",
              display: "block",
              background: "var(--surface)",
              transition: "width 0.3s ease, margin-left 0.3s ease",
            }}
            onLoad={() => setLoaded(true)}
            onError={() => { setError(true); setLoaded(true); }}
          />
        </div>

        {/* Footer hint */}
        {loaded && !error && (
          <p
            style={{
              marginTop: "20px",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--dim)",
              textAlign: "center",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            Having trouble viewing?{" "}
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)", textDecoration: "underline" }}
            >
              Open directly
            </a>{" "}
            or{" "}
            <a
              href={RESUME_PATH}
              download="Aakash_Pai_Resume.pdf"
              style={{ color: "var(--muted)", textDecoration: "underline" }}
            >
              download PDF
            </a>
            .
          </p>
        )}
      </main>
    </div>
  );
}
