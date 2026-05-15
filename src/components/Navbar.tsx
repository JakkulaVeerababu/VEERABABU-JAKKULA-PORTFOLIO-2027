"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certs", href: "#certifications" },
  { name: "Exploring", href: "#exploring" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled
          ? "pt-4 pb-2"
          : "pt-8 pb-4"
      }`}
    >
      <div className={`transition-all duration-500 w-full flex items-center justify-between px-6 ${
        scrolled ? "max-w-4xl glass rounded-full py-3 mx-4" : "max-w-6xl mx-auto"
      }`}>
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-tight flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#00f5ff] blur-[2px]" />
          <span>Veerababu.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#7c3aed] to-[#00f5ff] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="mailto:jakkulaveerababu429@gmail.com"
            className="ml-2 px-5 py-2 rounded-full text-sm font-medium text-white relative overflow-hidden group border border-white/10"
          >
            <div className="absolute inset-0 bg-white/5 transition-colors group-hover:bg-white/10" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.4)_0%,transparent_100%)] blur-md" />
            <span className="relative">Hire me</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-px bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[var(--bg)]/95 backdrop-blur-md border-t border-white/[0.04]"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#888] hover:text-white transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
