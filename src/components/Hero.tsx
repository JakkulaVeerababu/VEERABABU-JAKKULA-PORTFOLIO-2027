"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowRight } from "react-icons/fi";

const TITLES = [
  "Backend Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"whoami" | "leetcode">("whoami");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero">
      <div className="hero-content">
        {/* Left: Text & Actions */}
        <div className="hero-text-block">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-availability"
          >
            <span className="hero-availability-dot" />
            <span
              style={{
                background: 'var(--liquid-glossy)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
              }}
            >
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="hero-name"
          >
            VEERABABU<br />
            <span className="hero-name-accent">JAKKULA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="hero-rotator-wrap"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hero-rotator-text"
              >
                {TITLES[index]}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="hero-sub"
          >
            Passionate about building scalable backend systems, AI-powered
            platforms, and modern cloud-native applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="hero-actions"
          >
            <Link href="#projects" className="btn-primary">
              View Projects <FiArrowRight />
            </Link>
            <a
              href="/docs/maritime-vessel-tracking-infosys.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="hero-socials"
          >
            <a
              href="https://www.linkedin.com/in/veerababu/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-circle"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-circle"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://leetcode.com/u/VEERABABU_JAKKULA/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-circle"
              title="LeetCode"
            >
              <FiCode />
            </a>
            <a
              href="mailto:jakkulaveerababu429@gmail.com"
              className="social-link-circle"
              title="Email"
            >
              <FiMail />
            </a>
          </motion.div>
        </div>

        {/* Right: Asymmetric Premium Terminal Showcase */}
        <div className="hero-right-block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-window"
          >
            <div className="terminal-header" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
              </div>
              <div style={{ display: "flex", gap: "2px", marginLeft: "1.25rem" }}>
                <button
                  onClick={() => setActiveTab("whoami")}
                  className={`terminal-tab-btn whoami${activeTab === "whoami" ? " active" : ""}`}
                >
                  whoami.sh
                </button>
                <button
                  onClick={() => setActiveTab("leetcode")}
                  className={`terminal-tab-btn leetcode${activeTab === "leetcode" ? " active" : ""}`}
                >
                  leetcode_stats.png
                </button>
              </div>
            </div>
            <div className="terminal-body" style={{ padding: activeTab === "leetcode" ? "0" : "1.25rem" }}>
              {activeTab === "whoami" ? (
                <>
                  <div className="terminal-line">
                    <span className="terminal-prompt">~$ <span className="terminal-input">whoami</span></span>
                    <span className="terminal-output">Veerababu Jakkula</span>
                  </div>
                  
                  <div className="terminal-line">
                    <span className="terminal-output terminal-accent">Backend Engineer</span>
                    <span className="terminal-output terminal-accent">Full Stack Developer</span>
                    <span className="terminal-output terminal-accent">AI Enthusiast</span>
                  </div>

                  <div className="terminal-line">
                    <span className="terminal-prompt">~$ <span className="terminal-input">cat techstack.txt</span></span>
                    <div className="terminal-output">
                      <span className="block font-semibold mb-1" style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>Tech Stack:</span>
                      <ul className="terminal-list">
                        <li>FastAPI</li>
                        <li>Spring Boot</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>PostgreSQL</li>
                        <li>Docker</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div className="terminal-leetcode-header">
                    <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      leetcode.com/u/veerababu_jakkula/
                    </span>
                    <a
                      href="https://leetcode.com/u/VEERABABU_JAKKULA/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-leetcode-link"
                      style={{ fontSize: "0.68rem", color: "#FFA116", textDecoration: "none", fontWeight: 600 }}
                    >
                      Open Profile ↗
                    </a>
                  </div>
                  <div style={{ padding: "0.75rem", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(0, 0, 0, 0.15)" }}>
                    <img
                      src="/IMGS/leetcode_professional.png"
                      alt="LeetCode Professional Profile"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "220px",
                        objectFit: "contain",
                        borderRadius: "4px",
                        border: "1px solid rgba(255, 255, 255, 0.05)"
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
