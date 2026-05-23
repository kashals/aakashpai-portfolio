import { ImageResponse } from "next/og";

export const alt = "Aakash Pai — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0c0e",
          fontFamily: "monospace",
          padding: "60px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Outer terminal frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "1000px",
            height: "510px",
            backgroundColor: "#151518",
            border: "2px solid #2c2c31",
            borderRadius: "12px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
          }}
        >
          {/* Terminal Title Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 24px",
              backgroundColor: "#1c1c20",
              borderBottom: "2px solid #2c2c31",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#28c840",
                }}
              />
            </div>
            <div
              style={{
                color: "#64646f",
                fontSize: "16px",
                fontWeight: "bold",
                letterSpacing: "0.1em",
              }}
            >
              bash — aakash@aakashpai.dev
            </div>
            <div style={{ width: "52px" }} />
          </div>

          {/* Terminal Body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px 48px",
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            {/* Top Command sequence */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "16px", fontSize: "24px" }}>
                <span style={{ color: "#6b8cba" }}>guest@aakash:~$</span>
                <span style={{ color: "#e8e8ea" }}>whoami</span>
              </div>

              {/* Profile Intro block inside terminal */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: "56px",
                    fontWeight: "bold",
                    color: "#e8e8ea",
                    letterSpacing: "-0.02em",
                  }}
                >
                  AAKASH PAI.
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: "24px",
                    color: "#64646f",
                    maxWidth: "750px",
                    lineHeight: "1.4",
                  }}
                >
                  Full-Stack Engineer & Sunway University CS Student building
                  robust, scalable, and premium digital architectures.
                </div>
              </div>
            </div>

            {/* Bottom Status sequence */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "16px", fontSize: "22px" }}>
                <span style={{ color: "#6b8cba" }}>guest@aakash:~$</span>
                <span style={{ color: "#e8e8ea" }}>neofetch --portfolio</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  fontSize: "20px",
                  color: "#7d7d8a",
                }}
              >
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#4ade80" }}>[OK]</span>
                  <span>Domain resolved to https://aakashpai.dev</span>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#4ade80" }}>[OK]</span>
                  <span>Stack: React | Next.js | TypeScript | Go | CSS</span>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ color: "#4ade80" }}>[OK]</span>
                  <span>
                    Location: Kuala Lumpur, Malaysia (Open to Global Remote Roles)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
