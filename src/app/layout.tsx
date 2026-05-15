import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veerababu J — ECE Engineer & Systems Developer",
  description:
    "Portfolio of Veerababu J, an Electronics & Communication Engineering student at NEC exploring AI chip design, full-stack systems, embedded systems, and intelligent automation.",
  keywords: [
    "Veerababu", "ECE", "NEC", "Narasaraopeta Engineering College",
    "Full Stack Developer", "Embedded Systems", "VLSI", "AI", "Portfolio"
  ],
  authors: [{ name: "Veerababu J" }],
  openGraph: {
    title: "Veerababu J — ECE Engineer & Systems Developer",
    description: "ECE student exploring intelligent systems, scalable software, and semiconductor technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#080808] text-[#e8e8e8] bg-noise`}
      >
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
