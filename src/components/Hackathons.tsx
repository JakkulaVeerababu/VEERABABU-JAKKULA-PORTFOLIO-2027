"use client";

import { motion, Variants } from "framer-motion";
import { FiAward, FiStar } from "react-icons/fi";

const achievements = [
  {
    badge: "🏆 National Round",
    title: "Google Big Code Challenge 2026",
    desc: "Cleared the Qualifier Round and Round 1, competing at a national scale in structural coding and algorithmic puzzles.",
    icon: <FiAward />,
    featured: true,
  },
  {
    badge: "⚡ AWS Cloud",
    title: "AWS AI for Bharat Hackathon",
    desc: "Participated and built local-language LLM orchestration agents utilizing AWS Bedrock, Lambda functions, and DynamoDB.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "🦊 GitLab DevSecOps",
    title: "GitLab AI Hackathon",
    desc: "Participated in designing developer productivity tools using GitLab Duo APIs and automated CI/CD pipeline triggers.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "♊ Google AI",
    title: "Gemini 3 Hackathon",
    desc: "Built prototype applications using multi-modal Gemini Flash and Pro APIs, demonstrating real-time structured data parsing.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "🏎️ AMD Hardware",
    title: "AMD AI Hackathon",
    desc: "Developed local model acceleration pipelines leveraging AMD hardware, optimizing inference latency for image generation.",
    icon: <FiStar />,
    featured: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};


export default function Hackathons() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Competitions</div>
          <h2 className="section-title">Achievements &amp; Hackathons</h2>
          <div className="divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="ach-grid reveal"
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`glass-card ach-card ${ach.featured ? "border-cyan-400/30 shadow-cyan-400/5" : ""}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="ach-badge">{ach.badge}</span>
                <span className="text-cyan-500 text-lg">{ach.icon}</span>
              </div>
              <h3 className="ach-title">{ach.title}</h3>
              <p className="ach-desc">{ach.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

