"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Hackathons" },
  { href: "#github", label: "GitHub" },
  { href: "#certifications", label: "Certifications" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      if (window.scrollY < 80) {
        setActiveSection("");
        return;
      }
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        {/* Logo */}
        <Link href="#hero" className="nav-logo group" onClick={() => setMenuOpen(false)}>
          VJ<span className="group-hover:translate-x-1 duration-300 ease-in-out">.</span>
        </Link>

        {/* Desktop links */}
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${activeSection === href.slice(1) ? "active font-semibold" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>

        {/* Desktop CTA */}
        <Link 
          href="#contact" 
          className="nav-cta active:scale-95 hover:opacity-90 duration-200 transition-all font-semibold uppercase tracking-[0.05em]" 
          onClick={() => setMenuOpen(false)}
        >
          Contact Node
        </Link>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
        </button>
      </div>
    </nav>
  );
}
