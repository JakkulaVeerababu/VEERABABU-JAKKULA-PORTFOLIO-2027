"use client";

import { motion, Variants } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";

const highlights = [
  {
    badge: "National Round",
    title: "Google Big Code Challenge",
    desc: "2026 Qualifier & Rd 1 Cleared. Competing on national architectural coding.",
    leftBorder: "4px solid var(--secondary)",
  },
  {
    badge: "Buildathon Winner",
    title: "Buildathon 2025",
    desc: "Dreamflow Winner. Shipped and deployed high-performance full-stack web solutions.",
    leftBorder: "4px solid var(--accent)",
  },
  {
    badge: "Regional Ideathon",
    title: "AMD Slingshot",
    desc: "Innovation Track Participant. Pitching customized system accelerators and edge IoT.",
    leftBorder: "4px solid var(--tertiary)",
  },
];

const tags = [
  "IBM Dev Day",
  "AWS AI for Bharat",
  "GitLab AI Challenge",
  "Gemini 3 Hack",
  "GenAI Summit",
  "Google Cloud Community",
  "AMD AI Hackathon",
  "Cisco Cybersecurity Labs",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Hackathons() {
  return (
    <section id="achievements" style={{ background: "var(--bg-pure)", padding: "6rem 1.5rem" }}>
      <div className="container mx-auto max-w-[960px]">
        <div className="reveal section-header text-center mb-12">
          <div className="section-eyebrow">Competitions</div>
          <h2 className="section-title">Competitive Achievements</h2>
          <p className="text-on-surface-variant text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
            Hackathons & Technical Challenges
          </p>
          <div className="section-divider mx-auto" style={{ background: "var(--accent)" }} />
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal">
          {highlights.map((hl, i) => (
            <div
              key={i}
              className="glass-card p-6 flex flex-col gap-4 rounded-lg"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-subtle)",
                borderLeft: hl.leftBorder,
                transition: "all 0.3s ease",
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.03)", color: "var(--text-secondary)" }}>
                  {hl.badge}
                </span>
                <FiAward size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>{hl.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{hl.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tag Cloud of all other hackathons */}
        <div className="reveal text-center">
          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
            MORE INVOLVEMENT & HACKATHON PARTICIPATIONS
          </h4>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                variants={itemAnim}
                className="bg-surface-variant/40 text-xs font-semibold px-4 py-2 rounded-full border border-stone-900/5 cursor-default hover:bg-black/5 transition-colors"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.03)", color: "var(--text-secondary)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
