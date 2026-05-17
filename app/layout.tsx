import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash Pai — Software Engineer",
  description:
    "Personal portfolio of Aakash Pai — software engineer, full-stack developer, builder.",
  keywords: ["Aakash Pai", "portfolio", "software engineer", "developer"],
  authors: [{ name: "Aakash Pai" }],
  openGraph: {
    title: "Aakash Pai — Software Engineer",
    description: "Personal portfolio of Aakash Pai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
