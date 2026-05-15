import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
        className={`${inter.variable} antialiased bg-[var(--bg)] text-[var(--fg)] bg-noise`}
      >
        <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,rgba(0,245,255,0.05)_50%,transparent_70%)] blur-[100px] rounded-full pointer-events-none z-[-1]" />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
