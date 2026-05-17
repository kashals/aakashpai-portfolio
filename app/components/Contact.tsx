import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import SectionMarker from "./ui/SectionMarker";
import { SOCIALS } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="container">
        <SectionMarker index="06" label="CONTACT" />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-2xl font-semibold tracking-tight leading-snug mb-4"
              style={{ color: "var(--text)" }}
            >
              INITIATE_CONTACT
            </h2>
            <p className="text-xs leading-7" style={{ color: "var(--muted)" }}>
              Whether it&apos;s for collaboration, an internship, or just to
              talk shop — the channel is open. Fastest response via WhatsApp.
            </p>
          </div>

          {/* status indicator */}
          <div
            className="flex items-center gap-3 self-start px-5 py-4"
            style={{ border: "1px solid var(--border)" }}
          >
            <span
              className="block w-2 h-2 rounded-full"
              style={{ background: "var(--t-ok)" }}
            />
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              comm_link.service — active (running)
            </span>
          </div>
        </div>

        {/* contact options */}
        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ background: "var(--border)" }}
        >
          {/* whatsapp */}
          <a
            href={SOCIALS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-8 py-8 group transition-colors duration-150"
            style={{ background: "var(--surface)" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                PREFERRED
              </p>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text)" }}
              >
                WhatsApp
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--dim)" }}>
                +60 11-2377 6040
              </p>
            </div>
            <SiWhatsapp
              size={20}
              className="transition-colors duration-150 group-hover:text-[color:var(--text)]"
              style={{ color: "var(--muted)" }}
            />
          </a>

          {/* email */}
          <a
            href={`mailto:${SOCIALS.email}`}
            className="flex items-center justify-between px-8 py-8 group transition-colors duration-150"
            style={{ background: "var(--surface)" }}
          >
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-2"
                style={{ color: "var(--muted)" }}
              >
                EMAIL
              </p>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--text)" }}
              >
                Email
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--dim)" }}>
                {SOCIALS.email}
              </p>
            </div>
            <Mail
              size={20}
              className="transition-colors duration-150 group-hover:text-[color:var(--text)]"
              style={{ color: "var(--muted)" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
