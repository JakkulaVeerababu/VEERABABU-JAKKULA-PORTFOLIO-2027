"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
    title: "ShrFlow — Enterprise Email Marketing Engine",
    desc: "A high-performance, self-hosted, multi-tenant email marketing platform serving as an open-source alternative to Mailchimp and SendGrid. Presented directly to the Founder of byteXL.",
    badges: ["Next.js 14", "FastAPI", "RabbitMQ", "AWS SES", "Supabase", "Docker", "MJML"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    problem: "Lack of high-throughput asynchronous email marketing and event handling nodes leads to severe server bottlenecks during bulk marketing campaigns.",
    solution: "Architected a scalable, event-driven backend utilizing Python (FastAPI) and RabbitMQ background workers, decoupling REST APIs from async data workers. Deployed using Docker Compose for horizontal scalability.",
    features: [
      "Presented system architecture and business scalability directly to the Founder of byteXL.",
      "Engineered high-velocity asynchronous contacts engine enabling gigabyte-scale CSV ingestion, deduplication, and audience segmentation.",
      "Designed highly available dual-delivery pipeline routing transactional emails via Gmail SMTP and secured bulk dispatch through AWS SES.",
      "Built custom drag-and-drop MJML visual email builder with an integrated AI Copywriting Assistant.",
      "Implemented enterprise-grade observability and real-time tracking pipelines using Supabase Edge Functions and AWS SNS webhooks."
    ],
    workflow: "CSV Ingestion → FastAPI Ingest Node → RabbitMQ Task Queue → Async Consumers → AWS SES Dispatcher → SNS Observability Node.",
  },
  {
    id: 2,
    number: "02",
    title: "Maritime Vessel Tracking & Port Analytics",
    desc: "Real-time vessel tracking and port traffic optimization analytics dashboard presented at Infosys. Designed to manage high-throughput AIS telemetry feeds.",
    badges: ["React", "Node.js", "Express", "PostgreSQL", "Leaflet.js", "Socket.io"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    problem: "Manual monitoring of commercial shipping vessels results in cargo delays, port congestion, and high operational inefficiencies.",
    solution: "Built a web-based dashboard utilizing Leaflet.js and real-time Socket.io streams to process simulated AIS vessel telemetry, tracking locations and analyzing port entry queues.",
    features: [
      "Interactive map visualizing real-time vessel routes and boundary triggers.",
      "Automated port queue allocation and expected arrival metrics calculation.",
      "PostgreSQL data store holding histories of vessel logs and latency events."
    ],
    workflow: "Vessel AIS Signals → Socket.io Gateway → Express APIs → PostgreSQL Database → Leaflet Map Telemetry.",
  },
  {
    id: 3,
    number: "03",
    title: "Skill Bridge AI Platform",
    desc: "Created an AI-powered career guidance platform with scalable backend workflows, intelligent gap analysis, and dynamic recommendations.",
    badges: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Node.js"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    problem: "Traditional job boards lack actionable feedback, leaving students unaware of exact skill gaps relative to target roles.",
    solution: "Built a career advisory platform that parses resumes, compares against target role criteria using OpenAI, and maps gaps to structured online course pathways.",
    features: [
      "Automated resume parser utilizing LLM parsing schemas.",
      "Personalized skill gap visualizer panel.",
      "Dynamic curriculum matching from indexed MongoDB."
    ],
    workflow: "Resume PDF → LangChain Ingest → OpenAI Assessment → Course Catalog Match.",
  },
  {
    id: 4,
    number: "04",
    title: "Free GATE Platform & Tech Hub",
    desc: "Centralized educational roadmap tracking platform providing structured learning paths, preparation content, and progress logs.",
    badges: ["React", "Express.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/tech-learning-hub.pdf",
    problem: "ECE and CS students lack a structured, roadmap-focused preparation hub for core software engineering roles.",
    solution: "Designed a clean learning management hub with structured paths in systems, networks, and databases, including progress tracking.",
    features: [
      "Categorized syllabus modules (Systems, Networking, Coding).",
      "Interactive progress triggers and achievement badges.",
      "PostgreSQL telemetry logging for performance tracking."
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
    <section id="projects">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Selected Works</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" style={{ background: "var(--accent)" }} />
          <p className="section-sub">
            Highly engineered, production-ready applications built to solve complex software infrastructure and artificial intelligence problems.
          </p>
        </div>

        {/* Dynamic Bento Layout */}
        <div className="flex flex-col gap-6 reveal">
          
          {/* Main Showcase Project (ShrFlow) - Spans 12 Columns (Top Banner) */}
          <div className="bento-card w-full overflow-hidden border border-black/5 group/main shadow-lg">
            <div>
              {/* Image Banner */}
              <div className="bento-card-banner relative h-[260px] overflow-hidden border-b border-black/5 bg-slate-900">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEHsYKm2AM8dnub6MNwY9hb8ePj_3vOog1gFt8GFAThmePj3qgHZW57j3rukbjgSXNnRu_gysV-1aY013EPJJYGbJFoxMo_DzLgFUb0R09L2mhHDdSIRRXx-FAz3PM512YM2zT5XTlu2ytFQfCGvKfO1U29Evm_2CHJzdVy5CV0qZMpCxVpnbXLwuZQvW-RwY0-tLYKZ-r0qkq3F47md0WdGAETNcK-azEUMD9N6Bii1DOKxnkzk6iwQiVtOHJrkFr9JpikI9QLwQ"
                  alt="ShrFlow Analytics Dashboard"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-100 group-hover/main:scale-105 duration-700 ease-in-out transition-transform"
                />
                <div className="bento-card-banner-overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="bento-badge absolute bottom-4 left-6 bg-indigo-600/90 border border-indigo-400/50 text-white font-bold rounded-full px-3 py-1 text-xs uppercase tracking-wider shadow-md">
                  FOUNDER VALIDATED
                </span>
              </div>

              {/* Card Body */}
              <div className="bento-card-body p-8">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="bento-card-title text-xl md:text-2xl font-bold tracking-tight text-slate-900 group-hover/main:text-indigo-600 duration-300">
                    {projects[0].title}
                  </h3>
                  <span className="bento-card-number text-2xl font-bold font-mono text-indigo-600/30">01</span>
                </div>

                <p className="bento-card-desc text-slate-600 leading-relaxed text-sm mb-6">
                  {projects[0].desc}
                </p>

                {/* Tech Pills */}
                <div className="bento-tags flex flex-wrap gap-2 mb-6">
                  {projects[0].badges.map((b) => (
                    <span key={b} className="bento-tag text-xs font-mono px-3 py-1 rounded bg-white/90 border border-black/10 text-slate-700 shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300">
                      {b}
                    </span>
                  ))}
                </div>

                {/* Accordion Toggle */}
                <button
                  onClick={() => toggleExpand(projects[0].id)}
                  className="bento-accordion-btn flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 duration-200 transition-colors"
                >
                  {expandedId === projects[0].id ? (
                    <>
                      <FiChevronUp /> Hide Architecture Pipeline
                    </>
                  ) : (
                    <>
                      <FiChevronDown /> Show Architecture Pipeline
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
                      <div className="bento-accordion-content border-t border-black/5 mt-6 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="bento-accordion-section-title font-mono font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Problem Statement</div>
                          <p className="bento-accordion-text text-sm text-slate-600 leading-relaxed">{projects[0].problem}</p>
                        </div>
                        <div>
                          <div className="bento-accordion-section-title font-mono font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Engineered Solution</div>
                          <p className="bento-accordion-text text-sm text-slate-600 leading-relaxed">{projects[0].solution}</p>
                        </div>
                        <div className="md:col-span-2">
                          <div className="bento-accordion-section-title font-mono font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Core Features</div>
                          <ul className="list-disc pl-5 bento-accordion-text text-sm text-slate-600 space-y-1">
                            {projects[0].features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:col-span-2">
                          <div className="bento-accordion-section-title font-mono font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Data Pipeline Node</div>
                          <code className="bento-accordion-code block font-mono text-xs p-4 rounded bg-slate-900 border border-slate-800 text-emerald-400 overflow-x-auto shadow-inner">
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
            <div className="bento-card-actions px-8 pb-8 flex gap-4">
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-btn-primary bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-indigo-500 shadow-md duration-300 ease-in-out transition-all flex items-center gap-2 active:scale-95"
              >
                <FiGithub /> Repository Node
              </a>
              {projects[0].demo && projects[0].demo !== "#" && (
                <a
                  href={projects[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-btn-outline bg-white hover:bg-slate-50 text-slate-700 font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-black/10 shadow-sm duration-300 ease-in-out transition-all flex items-center gap-2 active:scale-95"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Supporting Projects - 3 Column Grid with Equal Heights & Aligned Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {projects.slice(1).map((proj) => (
              <div key={proj.id} className="bento-card p-6 flex flex-col h-full justify-between border border-black/5 hover:-translate-y-1 transition-all duration-300 shadow-md">
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between items-center gap-4">
                    <span className="bento-card-number text-lg font-bold font-mono text-indigo-600/30">{proj.number}</span>
                    <span className="bento-badge" style={{ position: "static", background: proj.id === 2 ? "rgba(6, 182, 212, 0.08)" : proj.id === 3 ? "rgba(99, 102, 241, 0.08)" : "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(26, 28, 28, 0.08)", color: proj.id === 2 ? "#0891b2" : proj.id === 3 ? "#5c5ff1" : "#dc2626", fontSize: "0.6rem", fontWeight: "700", letterSpacing: "0.05em" }}>
                      {proj.id === 2 ? "TELEMETRY" : proj.id === 3 ? "AI SYSTEM" : "LMS HUB"}
                    </span>
                  </div>

                  <h3 className="bento-card-title mt-4 font-bold text-slate-800 tracking-tight" style={{ fontSize: "1rem" }}>
                    {proj.title}
                  </h3>
                  <p className="bento-card-desc mb-4 text-slate-600 leading-relaxed" style={{ fontSize: "0.78rem" }}>
                    {proj.desc}
                  </p>

                  <div className="bento-tags mt-auto mb-4 flex flex-wrap gap-1.5">
                    {proj.badges.map((b) => (
                      <span key={b} className="bento-tag px-2 py-0.5 rounded text-[10px] font-mono shadow-sm bg-white/90 border border-black/5 text-slate-600">
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Accordion Toggle */}
                  <button
                    onClick={() => toggleExpand(proj.id)}
                    className="bento-accordion-btn mb-4 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 duration-200 transition-colors"
                  >
                    {expandedId === proj.id ? (
                      <>
                        <FiChevronUp /> Hide Telemetry
                      </>
                    ) : (
                      <>
                        <FiChevronDown /> View Telemetry
                      </>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedId === proj.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="bento-accordion-content mb-4 border-t border-black/5" style={{ marginTop: "0.75rem", paddingTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          <div>
                            <div className="bento-accordion-section-title font-mono font-bold text-[9px] uppercase tracking-wider text-slate-400">Problem</div>
                            <p className="bento-accordion-text text-slate-500 leading-relaxed" style={{ fontSize: "0.72rem" }}>{proj.problem}</p>
                          </div>
                          <div>
                            <div className="bento-accordion-section-title font-mono font-bold text-[9px] uppercase tracking-wider text-slate-400">Solution</div>
                            <p className="bento-accordion-text text-slate-500 leading-relaxed" style={{ fontSize: "0.72rem" }}>{proj.solution}</p>
                          </div>
                          <div>
                            <div className="bento-accordion-section-title font-mono font-bold text-[9px] uppercase tracking-wider text-slate-400">Data Path</div>
                            <code className="bento-accordion-code block font-mono text-[9px] p-2 rounded bg-slate-900 border border-slate-800 text-emerald-400 overflow-x-auto shadow-inner" style={{ fontSize: "0.65rem" }}>
                              {proj.workflow}
                            </code>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-black/5 pt-4 mt-auto flex gap-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-btn-outline flex-1 justify-center bg-white hover:bg-slate-50 text-slate-700 font-mono text-xs uppercase tracking-wider py-2.5 rounded-lg border border-black/10 shadow-sm duration-300 ease-in-out transition-all flex items-center gap-1.5 active:scale-95"
                    style={{ fontSize: "0.68rem" }}
                  >
                    <FiGithub /> Repo
                  </a>
                  {proj.doc && (
                    <a
                      href={proj.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-btn-outline flex-1 justify-center bg-white hover:bg-slate-50 text-slate-700 font-mono text-xs uppercase tracking-wider py-2.5 rounded-lg border border-black/10 shadow-sm duration-300 ease-in-out transition-all flex items-center gap-1.5 active:scale-95"
                      style={{ fontSize: "0.68rem" }}
                    >
                      <FiExternalLink /> PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
