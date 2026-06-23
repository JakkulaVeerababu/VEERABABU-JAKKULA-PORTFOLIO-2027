"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight, FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
    label: "AI Engine · Candidate Discovery",
    title: "Argus AI",
    subtitle: "High-dimensional candidate discoverability engine processing 100k records in sub-second CPU latency.",
    badges: ["Python", "FastAPI", "FAISS", "ONNX Runtime", "Docker", "React 19"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: null,
    impact: [
      "Hybrid retrieval matching combining BM25 keyword precision & FAISS dense vector search",
      "ONNX-optimized Cross-Encoder reranking achieving 0.55s CPU latency for Top 200 candidates",
      "Deterministic honeypot gatekeeper filtering logical anomalies for fraud detection",
      "Robust production-grade test suite of 39 passing unit & integration tests covering search pipelines"
    ],
    problem:
      "Traditional applicant tracking systems rely on flat keyword matching, which fails to capture deep semantic relevance, school tiers, and profile activity signals.",
    solution:
      "Built a hybrid discovery pipeline parsing complex candidate schemas, embedding vectors via sentence-transformers, reranking via Cross-Encoder on ONNX CPU runner, and applying sigmoid-scaled business scoring.",
    workflow:
      "Query → SQLite FTS5 + FAISS index search → RRF Fusion (k=60) → ONNX Cross-Encoder reranking → Sigmoid scaling + Multipliers → Fraud filter → Factual reason generator.",
  },
  {
    id: 2,
    number: "02",
    label: "Interactive Mind-Map · Supabase",
    title: "DSA Patterns Mind-Map",
    subtitle: "Organic infinite-canvas mind-map with progress tracking and direct LeetCode mapping.",
    badges: ["HTML5", "CSS3/HSL", "JavaScript", "Node.js", "Supabase DB & Auth"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: null,
    impact: [
      "Custom infinite-canvas SVG bezier-curve mind-map with recursive node expansion & zoom/pan",
      "4 Progression Tiers (Starter ➔ Mid ➔ Senior ➔ Elite) targeting top tech firm expectation paths",
      "Real-time visual learning analytics synchronized with Supabase DB progress logging & RLS",
      "Integrated Python code playgrounds with live status search and direct LeetCode mappings"
    ],
    problem:
      "Engineers struggle with rote memorization of 500+ LeetCode questions instead of building dynamic, structure-aware pattern recognition habits.",
    solution:
      "Built a pattern-based organic mind-map tracking topic completion states, rendering dynamic circular indicators, and embedding playground code blocks.",
    workflow:
      "Mind-map explorer → Dynamic bezier rendering → Click topic node → Dynamic playground stats → Supabase progress sync.",
  },
  {
    id: 3,
    number: "03",
    label: "SaaS · Marketing Automation",
    title: "ShrFlow",
    subtitle: "Self-hosted, multi-tenant enterprise email marketing dashboard supporting high-throughput event queues.",
    badges: ["Python", "FastAPI", "React", "Docker", "Redis", "Celery", "PostgreSQL"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: null,
    impact: [
      "Automated high-frequency marketing campaigns validated by industry founders for scale",
      "Redis-backed asynchronous Celery queuing executing reliable email delivery tasks",
      "Multi-tenant data isolation structures with secure RBAC and registration systems",
      "Dynamic tracking dashboard displaying open rates, delivery stats, and link tracking"
    ],
    problem:
      "Commercial email marketing APIs charge high premiums at scale and lack self-hosted data ownership and deep custom sequence setups.",
    solution:
      "A self-hosted SaaS application executing event-driven email delivery pipelines via queue engines, tracking metrics with webhooks, and exposing stats on a React panel.",
    workflow:
      "Dashboard creation → Scheduled campaign → Redis queue → Celery runner SMTP execution → Webhook event catcher → Analytics update.",
  },
  {
    id: 4,
    number: "04",
    label: "Internship · Infosys",
    title: "Maritime Vessel Tracking & Port Analytics",
    subtitle: "Real-time geospatial analytics platform for global port operations.",
    badges: ["FastAPI", "PostgreSQL", "PostGIS", "Docker", "AWS EC2", "React"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    impact: ["Real-time AIS vessel position tracking", "Geospatial queries via PostGIS spatial indices", "Harbor traffic density analytics dashboard"],
    problem:
      "Lack of real-time visibility and predictive analytics in port operations leads to logistics congestion and vessel delays.",
    solution:
      "Distributed tracking system feeding high-frequency AIS vessel feeds into PostgreSQL/PostGIS, exposed through low-latency FastAPI telemetry endpoints.",
    workflow:
      "AIS stream → FastAPI ingestion service → PostgreSQL/PostGIS → Analytics engine → React mapping frontend.",
  },
  {
    id: 5,
    number: "05",
    label: "AI Platform",
    title: "Skill Bridge AI",
    subtitle: "AI-powered career advisory platform with gap analysis and course recommendations.",
    badges: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Node.js"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: null,
    impact: ["LLM resume parser with structured extraction", "Personalized skill gap visualizer panel", "Dynamic curriculum matching from MongoDB index"],
    problem:
      "Traditional job boards lack actionable feedback, leaving students unaware of exact skill gaps relative to target roles.",
    solution:
      "Career advisory platform that parses resumes, compares against role criteria using OpenAI, and maps gaps to structured online course pathways.",
    workflow:
      "Resume PDF → LangChain Parsing → OpenAI Gap Evaluation → Course Catalog Match → Interactive Learning Roadmap.",
  },
  {
    id: 6,
    number: "06",
    label: "EdTech · Full Stack",
    title: "Tech Learning Hub",
    subtitle: "Centralized educational platform with roadmap-based preparation and progress tracking.",
    badges: ["React", "Express.js", "PostgreSQL", "Node.js"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/tech-learning-hub.pdf",
    impact: ["Categorized syllabus modules (Systems, Networking, Coding)", "Interactive playground exercises", "PostgreSQL progress tracking with completion stats"],
    problem:
      "ECE and CS students lack a structured, roadmap-focused preparation hub for core software engineering roles.",
    solution:
      "Learning management hub with structured paths in systems, networks, and databases, including visual progress tracking.",
    workflow:
      "Student chooses Track → Interactive Learning Path → PostgreSQL progress tracking → Visualized completion stats.",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-case-card reveal">
      {/* Top bar: label + number */}
      <div className="pcc-topbar">
        <span className="pcc-label">{project.label}</span>
        <span className="pcc-number">{project.number}</span>
      </div>

      {/* Title block */}
      <div className="pcc-title-block">
        <h3 className="pcc-title">{project.title}</h3>
        <p className="pcc-subtitle">{project.subtitle}</p>
      </div>

      {/* Impact points */}
      <ul className="pcc-impact-list">
        {project.impact.map((pt, i) => (
          <li key={i} className="pcc-impact-item">
            <span className="pcc-impact-dot" />
            {pt}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="pcc-tags">
        {project.badges.map((b) => (
          <span key={b} className="project-tag">{b}</span>
        ))}
      </div>

      {/* Expandable breakdown */}
      <button
        onClick={() => setOpen(!open)}
        className="pcc-expand-btn"
        aria-expanded={open}
      >
        {open ? <><FiChevronUp size={12} /> Hide Breakdown</> : <><FiChevronDown size={12} /> Technical Breakdown</>}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="pcc-breakdown">
              <div className="pcc-breakdown-row">
                <span className="pcc-bd-label">Problem</span>
                <span className="pcc-bd-text">{project.problem}</span>
              </div>
              <div className="pcc-breakdown-row">
                <span className="pcc-bd-label">Solution</span>
                <span className="pcc-bd-text">{project.solution}</span>
              </div>
              <div className="pcc-breakdown-row">
                <span className="pcc-bd-label">Architecture</span>
                <span className="pcc-bd-text pcc-bd-arch">{project.workflow}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="pcc-actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="pcc-btn-primary"
        >
          <FiGithub size={13} /> GitHub <FiArrowRight size={12} />
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="pcc-btn-ghost"
        >
          <FiExternalLink size={13} /> Live Demo
        </a>
        {project.doc && (
          <a
            href={project.doc}
            target="_blank"
            rel="noopener noreferrer"
            className="pcc-btn-ghost"
          >
            <FiFileText size={13} /> Certificate
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Selected Works</div>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <p className="section-sub">
            End-to-end systems built with production architectures — from
            geospatial analytics to AI-powered career platforms.
          </p>
        </div>

        <div className="projects-case-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
