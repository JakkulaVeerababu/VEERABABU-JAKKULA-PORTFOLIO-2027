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
          className="hero-availability"
        >
          <span className="hero-availability-dot" />
          Open to Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-name"
        >
          VEERABABU{" "}
          <span className="hero-name-accent">JAKKULA</span>
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
          className="hero-sub"
        >
          Passionate about building scalable backend systems, AI-powered
          platforms, and modern cloud-native web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}
        >
          <Link href="#projects" className="btn-primary">
            View Projects <FiArrowRight />
          </Link>
          <Link href="#contact" className="btn-outline">
            Contact Me
          </Link>
          <a
            href="https://www.linkedin.com/in/veerababu/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume
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
