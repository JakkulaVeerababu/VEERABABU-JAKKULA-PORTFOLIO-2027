import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundGradient from "@/components/BackgroundGradient";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body
        className={`${playfairDisplay.variable} ${libreBaskerville.variable} ${geistMono.variable} antialiased relative`}
      >
        <BackgroundGradient />
        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />
        {children}
        <Navbar />
      </body>
    </html>
  );
}


