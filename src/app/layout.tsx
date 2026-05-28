import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veerababu Jakkula | Portfolio",
  description:
    "Portfolio of Veerababu Jakkula, Electronics & Communication Engineering student exploring AI hardware, embedded systems, and scalable full-stack applications.",
  keywords: [
    "Veerababu Jakkula", "ECE", "Systems Engineer", "VLSI", "Embedded Systems", "Full Stack Developer"
  ],
  authors: [{ name: "Veerababu Jakkula" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

