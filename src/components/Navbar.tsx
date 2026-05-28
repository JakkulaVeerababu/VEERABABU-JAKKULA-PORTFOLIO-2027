"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "achievements", "certifications", "github", "contact"];
      let current = "";
      
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 110;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="nav-inner">
        <Link href="#hero" className="nav-logo">
          VJ<span>.</span>
        </Link>
        
        <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          <li>
            <Link
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#achievements"
              className={activeSection === "achievements" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              href="#certifications"
              className={activeSection === "certifications" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Certs
            </Link>
          </li>
          <li>
            <Link
              href="#github"
              className={activeSection === "github" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link href="#contact" className="nav-cta">
          Contact Me
        </Link>
        
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

