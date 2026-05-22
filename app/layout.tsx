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
  title: "Aakash Pai — Software Engineer",
  description: "Personal portfolio of Aakash Pai — software engineer, full-stack developer, builder.",
  keywords: ["Aakash Pai", "portfolio", "software engineer", "developer"],
  authors: [{ name: "Aakash Pai" }],
  openGraph: {
    title: "Aakash Pai — Software Engineer",
    description: "Personal portfolio of Aakash Pai",
    type: "website",
  },
};

import CustomCursor from "./components/ui/CustomCursor";
import KonamiCodeProvider from "./components/ui/KonamiCodeProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-dvh">
        <KonamiCodeProvider>
          <CustomCursor />
          {children}
        </KonamiCodeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
