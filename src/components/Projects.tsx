"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
    title: "ShrFlow — Enterprise Workflow Orchestration Platform",
    desc: "A high-impact workflow orchestration platform presented at byteXL. Engineered for enterprise-level asynchronous processing and queue management.",
    badges: ["FastAPI", "RabbitMQ", "AWS SES", "Next.js 14", "Docker", "PostgreSQL"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    problem: "Lack of high-throughput asynchronous email marketing and event handling nodes leads to high server bottlenecks.",
    solution: "Designed a distributed queue network feeding FastAPI ingestion nodes directly into RabbitMQ workers, delivering parallel task execution with AWS SES integration.",
    features: [
      "Asynchronous tasks routing with RabbitMQ clustering",
      "Dynamic webhook triggers and payload validations",
      "High-fidelity analytics console showing live delivery rates",
    ],
    workflow: "FastAPI Node → RabbitMQ Cluster → Asynchronous Consumer → AWS SES Dispatcher.",
  },
  {
    id: 2,
    number: "02",
    title: "Skill Bridge AI Platform",
    desc: "Created an AI-powered career guidance platform with scalable backend workflows, intelligent gap analysis, and dynamic recommendations.",
    badges: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Node.js"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    problem: "Traditional job boards lack actionable feedback, leaving students unaware of exact skill gaps relative to target roles.",
    solution: "Built a career advisory platform that parses resumes, compares against target role criteria using OpenAI, and maps gaps to structured online course pathways.",
    features: [
      "Automated resume parser utilizing LLM parsing schemas",
      "Personalized skill gap visualizer panel",
      "Dynamic curriculum matching from indexed MongoDB",
    ],
    workflow: "Resume PDF → LangChain Ingest → OpenAI Assessment → Course Catalog Match.",
  },
  {
    id: 3,
    number: "03",
    title: "Free GATE Platform & Tech Hub",
    desc: "Built a centralized educational platform providing structured learning roadmaps, preparation content, and interactive progress tracking.",
    badges: ["React", "Express.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/tech-learning-hub.pdf",
    problem: "ECE and CS students lack a structured, roadmap-focused preparation hub for core software engineering roles.",
    solution: "Designed a clean learning management hub with structured paths in systems, networks, and databases, including progress tracking.",
    features: [
      "Categorized syllabus modules (Systems, Networking, Coding)",
      "Interactive progress triggers and achievement badges",
      "PostgreSQL telemetry logging for performance tracking",
    ],
    workflow: "Student chooses Track → Interactive Path → Telemetry Logging → Visualized Stats.",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" style={{ background: "var(--bg-canvas)", borderBottom: "1px solid var(--border-subtle)", padding: "6rem 1.5rem" }}>
      <div className="container mx-auto max-w-[1200px]">
        <div className="reveal section-header mb-12">
          <div className="section-eyebrow">Selected Works</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" style={{ background: "var(--secondary)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 reveal">
          {/* Main Showcase Project (ShrFlow) - Spans 8 Columns */}
          <div className="md:col-span-8 glass-card overflow-hidden rounded-lg flex flex-col justify-between" style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", transition: "all 0.3s ease" }}>
            <div>
              {/* Image Banner */}
              <div className="h-64 relative bg-[var(--bg-surface)] overflow-hidden group">
                <img
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEHsYKm2AM8dnub6MNwY9hb8ePj_3vOog1gFt8GFAThmePj3qgHZW57j3rukbjgSXNnRu_gysV-1aY013EPJJYGbJFoxMo_DzLgFUb0R09L2mhHDdSIRRXx-FAz3PM512YM2zT5XTlu2ytFQfCGvKfO1U29Evm_2CHJzdVy5CV0qZMpCxVpnbXLwuZQvW-RwY0-tLYKZ-r0qkq3F47md0WdGAETNcK-azEUMD9N6Bii1DOKxnkzk6iwQiVtOHJrkFr9JpikI9QLwQ"
                  alt="ShrFlow Analytics Dashboard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-canvas)] to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3.5 py-1 rounded-full font-semibold text-xs tracking-wider uppercase" style={{ backgroundColor: "var(--secondary)", color: "#003824" }}>
                    Founder Validated
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-headline-md text-2xl font-bold text-on-surface" style={{ color: "var(--text-primary)" }}>
                    {projects[0].title}
                  </h3>
                  <span className="font-mono text-3xl font-extrabold opacity-20" style={{ color: "var(--accent)" }}>01</span>
                </div>

                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {projects[0].desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].badges.map((b) => (
                    <span key={b} className="bg-[rgba(0,0,0,0.03)] text-xs font-semibold px-3 py-1 rounded" style={{ color: "var(--accent)" }}>
                      {b}
                    </span>
                  ))}
                </div>

                {/* Accordion Toggle */}
                <button
                  onClick={() => toggleExpand(projects[0].id)}
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                  style={{ color: "var(--accent)", borderBottom: "1px dashed var(--border-neon)", paddingBottom: "2px" }}
                >
                  {expandedId === projects[0].id ? (
                    <>
                      <FiChevronUp /> Hide Breakdown
                    </>
                  ) : (
                    <>
                      <FiChevronDown /> Technical Breakdown
                    </>
                  )}
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {expandedId === projects[0].id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="mt-6 space-y-4 border-t border-[rgba(0,0,0,0.06)] pt-5">
                        <div>
                          <span className="text-xs uppercase tracking-wider font-extrabold text-muted-foreground block mb-1" style={{ color: "var(--text-muted)" }}>Problem</span>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{projects[0].problem}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider font-extrabold text-muted-foreground block mb-1" style={{ color: "var(--text-muted)" }}>Solution</span>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{projects[0].solution}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider font-extrabold text-muted-foreground block mb-1" style={{ color: "var(--text-muted)" }}>Key Features</span>
                          <ul className="list-disc pl-4 text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
                            {projects[0].features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider font-extrabold text-muted-foreground block mb-1" style={{ color: "var(--text-muted)" }}>Architecture Pipeline</span>
                          <code className="text-xs px-2.5 py-1.5 rounded block font-mono" style={{ backgroundColor: "rgba(0,0,0,0.04)", color: "var(--accent-deep)" }}>
                            {projects[0].workflow}
                          </code>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Actions */}
            <div className="p-8 pt-0 flex gap-4">
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-all"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg-canvas)" }}
              >
                <FiGithub /> GitHub Repo
              </a>
              {projects[0].doc && (
                <a
                  href={projects[0].doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-all border border-white/10 hover:bg-white/5"
                  style={{ color: "var(--text-primary)" }}
                >
                  <FiExternalLink /> Case Study
                </a>
              )}
            </div>
          </div>

          {/* Right Side Column (2 cards, each spanning 4 columns or stacked) */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Project 2 (Skill Bridge AI) */}
            <div className="glass-card p-8 flex flex-col justify-between rounded-lg flex-1" style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", transition: "all 0.3s ease" }}>
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="font-mono text-xl font-bold opacity-30" style={{ color: "var(--accent)" }}>02</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-secondary/15 text-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      GenAI recommendation
                    </span>
                  </div>
                </div>

                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3" style={{ color: "var(--text-primary)" }}>
                  {projects[1].title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {projects[1].desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {projects[1].badges.map((b) => (
                    <span key={b} className="bg-[rgba(255,255,255,0.03)] text-[11px] font-semibold px-2 py-0.5 rounded" style={{ color: "var(--accent)" }}>
                      {b}
                    </span>
                  ))}
                </div>

                {/* Accordion Toggle */}
                <button
                  onClick={() => toggleExpand(projects[1].id)}
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors block mb-2"
                  style={{ color: "var(--accent)", borderBottom: "1px dashed var(--border-neon)", paddingBottom: "2px" }}
                >
                  {expandedId === projects[1].id ? (
                    <>
                      <FiChevronUp /> Hide Details
                    </>
                  ) : (
                    <>
                      <FiChevronDown /> Tech Details
                    </>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {expandedId === projects[1].id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="mt-4 space-y-3 border-t border-[rgba(0,0,0,0.06)] pt-4 text-xs">
                        <p style={{ color: "var(--text-secondary)" }}><strong>Problem:</strong> {projects[1].problem}</p>
                        <p style={{ color: "var(--text-secondary)" }}><strong>Solution:</strong> {projects[1].solution}</p>
                        <code className="text-[10px] px-2 py-1 rounded block font-mono" style={{ backgroundColor: "rgba(0,0,0,0.04)", color: "var(--accent-deep)" }}>
                          {projects[1].workflow}
                        </code>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 border-t border-white/5 pt-4">
                <a
                  href={projects[1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-label-caps text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5 hover:underline"
                  style={{ color: "var(--secondary)" }}
                >
                  <FiGithub /> Repository
                </a>
              </div>
            </div>

            {/* Project 3 (GATE Hub) */}
            <div className="glass-card p-8 flex flex-col justify-between rounded-lg flex-1" style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", transition: "all 0.3s ease" }}>
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="font-mono text-xl font-bold opacity-30" style={{ color: "var(--accent)" }}>03</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-tertiary/15 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      LMS platform
                    </span>
                  </div>
                </div>

                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3" style={{ color: "var(--text-primary)" }}>
                  {projects[2].title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {projects[2].desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {projects[2].badges.map((b) => (
                    <span key={b} className="bg-[rgba(0,0,0,0.03)] text-[11px] font-semibold px-2 py-0.5 rounded" style={{ color: "var(--accent)" }}>
                      {b}
                    </span>
                  ))}
                </div>

                {/* Accordion Toggle */}
                <button
                  onClick={() => toggleExpand(projects[2].id)}
                  className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors block mb-2"
                  style={{ color: "var(--accent)", borderBottom: "1px dashed var(--border-neon)", paddingBottom: "2px" }}
                >
                  {expandedId === projects[2].id ? (
                    <>
                      <FiChevronUp /> Hide Details
                    </>
                  ) : (
                    <>
                      <FiChevronDown /> Tech Details
                    </>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {expandedId === projects[2].id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="mt-4 space-y-3 border-t border-[rgba(0,0,0,0.06)] pt-4 text-xs">
                        <p style={{ color: "var(--text-secondary)" }}><strong>Problem:</strong> {projects[2].problem}</p>
                        <p style={{ color: "var(--text-secondary)" }}><strong>Solution:</strong> {projects[2].solution}</p>
                        <code className="text-[10px] px-2 py-1 rounded block font-mono" style={{ backgroundColor: "rgba(0,0,0,0.04)", color: "var(--accent-deep)" }}>
                          {projects[2].workflow}
                        </code>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 border-t border-white/5 pt-4">
                <a
                  href={projects[2].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-label-caps text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5 hover:underline"
                  style={{ color: "var(--secondary)" }}
                >
                  <FiGithub /> Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
