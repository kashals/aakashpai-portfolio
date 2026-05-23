import type { Metadata } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aakashpai.dev"),
  title: "Aakash Pai — Software Engineer",
  description: "Personal portfolio of Aakash Pai — software engineer, full-stack developer, builder.",
  keywords: [
    "Aakash Pai",
    "Portfolio",
    "Software Engineer",
    "Full-Stack Developer",
    "Sunway University",
    "Malaysia Developer",
    "Engineering Manager Malaysia",
    "Kuala Lumpur Software Engineer",
    "React Developer",
    "Next.js",
    "Go Engineer",
  ],
  authors: [{ name: "Aakash Pai", url: "https://aakashpai.dev" }],
  openGraph: {
    title: "Aakash Pai — Software Engineer",
    description: "Personal portfolio of Aakash Pai — software engineer, full-stack developer, builder.",
    url: "https://aakashpai.dev",
    siteName: "Aakash Pai Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Pai — Software Engineer",
    description: "Personal portfolio of Aakash Pai — software engineer, full-stack developer, builder.",
  },
};

import CustomCursor from "./components/ui/CustomCursor";
import KonamiCodeProvider from "./components/ui/KonamiCodeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-dvh">
        <KonamiCodeProvider>
          <CustomCursor />
          {children}
          <Analytics />
          <SpeedInsights />
        </KonamiCodeProvider>
      </body>
    </html>
  );
}
