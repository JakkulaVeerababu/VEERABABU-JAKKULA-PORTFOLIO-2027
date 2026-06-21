"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight, FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
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
    id: 2,
    number: "02",
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
    id: 3,
    number: "03",
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
