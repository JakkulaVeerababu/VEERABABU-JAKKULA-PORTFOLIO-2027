"use client";

import { FiCode, FiCpu, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

const cards = [
  {
    icon: <FiCode style={{ fontSize: "28px" }} />,
    title: "Full-Stack Development",
    desc: "Architecting scalable web solutions using React, Next.js 14, and high-performance FastAPI backends.",
    accentColor: "var(--accent)",
    bgAccent: "rgba(173, 198, 255, 0.1)",
  },
  {
    icon: <FiCpu style={{ fontSize: "28px" }} />,
    title: "AI & Machine Learning",
    desc: "Designing GenAI pipelines, RAG systems, and predictive models for enterprise-grade performance.",
    accentColor: "var(--secondary)",
    bgAccent: "rgba(78, 222, 163, 0.1)",
  },
  {
    icon: <FiTrendingUp style={{ fontSize: "28px" }} />,
    title: "Data Analytics",
    desc: "Uncovering insights through big data visualization, statistical analysis, and complex data modeling.",
    accentColor: "var(--tertiary)",
    bgAccent: "rgba(255, 183, 134, 0.1)",
  },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg-canvas)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        <div className="mb-12 text-center md:text-left reveal">
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-divider" style={{ background: "var(--accent)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {cards.map((card, i) => (
            <div key={i} className="glass-card p-8 flex flex-col items-start gap-5 rounded-lg" style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", transition: "all 0.3s ease" }}>
              <div className="p-3.5 rounded-lg" style={{ backgroundColor: card.bgAccent, color: card.accentColor }}>
                {card.icon}
              </div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface" style={{ color: "var(--text-primary)" }}>{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
