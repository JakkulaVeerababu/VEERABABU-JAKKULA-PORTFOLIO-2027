"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowRight } from "react-icons/fi";

const TYPED_WORDS = [
  "Full Stack Developer",
  "Backend Engineer",
  "AI Systems Builder",
  "Cloud-Native Engineer",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let timer: NodeJS.Timeout;

    if (!deleting && charIdx <= word.length) {
      timer = setTimeout(() => {
        setDisplayText(word.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 75);
    } else if (deleting && charIdx >= 0) {
      timer = setTimeout(() => {
        setDisplayText(word.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, 38);
    }

    if (charIdx === word.length + 1 && !deleting) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (charIdx === -1 && deleting) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % TYPED_WORDS.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section id="hero">
      <div className="dot-grid" />
      <div className="hero-glow-ring" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 mb-6 border border-primary/30 bg-primary/10 rounded-full"
          style={{ background: "rgba(173, 198, 255, 0.1)", borderColor: "rgba(173, 198, 255, 0.3)" }}
        >
          <span className="font-label-caps text-label-caps text-primary text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--accent)" }}>
            Enterprise Portfolio 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-name uppercase tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          VEERABABU{" "}
          <span className="hero-name-accent" style={{ background: "linear-gradient(135deg, var(--accent-bright) 0%, var(--accent) 50%, var(--accent-deep) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            JAKKULA
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="hero-typed-wrap"
        >
          <span className="hero-typed">
            {displayText}
            <span className="hero-typed-cursor">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="hero-sub font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
          style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}
        >
          Full-Stack Engineer & AI/ML Specialist | B.Tech ECE @ Narasaraopeta Engineering College |{" "}
          <span className="font-bold" style={{ color: "var(--secondary)" }}>8.71 CGPA</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="hero-actions"
        >
          <a
            href="/docs/maritime-vessel-tracking-infosys.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.85rem 2rem", fontSize: "0.9rem", color: "var(--bg-canvas)", background: "var(--accent)" }}
          >
            Download Resume <FiArrowRight />
          </a>
          <a
            href="https://github.com/JakkulaVeerababu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "0.85rem 2rem", fontSize: "0.9rem" }}
          >
            View GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="hero-socials"
        >
          <a
            href="https://www.linkedin.com/in/veerababu/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/JakkulaVeerababu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://leetcode.com/u/VEERABABU_JAKKULA/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LeetCode"
          >
            <FiCode />
          </a>
          <a
            href="mailto:jakkulaveerababu429@gmail.com"
            className="social-link"
            title="Email"
          >
            <FiMail />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="hero-metrics"
        >
          <div className="hero-metric">
            <div className="hero-metric-value">8.71</div>
            <div className="hero-metric-label">CGPA</div>
          </div>
          <div className="hero-metric">
            <div className="hero-metric-value">6+</div>
            <div className="hero-metric-label">Hackathons</div>
          </div>
          <div className="hero-metric">
            <div className="hero-metric-value">5</div>
            <div className="hero-metric-label">Internships</div>
          </div>
          <div className="hero-metric">
            <div className="hero-metric-value">3+</div>
            <div className="hero-metric-label">Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
