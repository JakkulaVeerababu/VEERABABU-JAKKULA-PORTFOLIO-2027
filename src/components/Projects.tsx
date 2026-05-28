"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Maritime Vessel Tracking & Port Analytics Platform",
    desc: "Built scalable REST APIs and deployed cloud-hosted maritime analytics dashboards with real-time geospatial tracking using PostgreSQL/PostGIS.",
    badges: ["FastAPI", "PostgreSQL", "PostGIS", "Docker", "AWS EC2", "React"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    problem:
      "Lack of real-time visibility and predictive analytics in port operations leads to logistics congestion and vessel delays.",
    solution:
      "Developed a distributed tracking system feeding high-frequency AIS vessel feeds into PostgreSQL/PostGIS, paired with a FastAPI backend to expose low-latency telemetry endpoints.",
    features: [
      "Real-time AIS vessel coordinate mapping",
      "Geospatial querying with PostGIS spatial indices",
      "Interactive analytics dashboard showing harbor traffic density",
    ],
    workflow:
      "AIS stream → FastAPI ingestion service → PostgreSQL/PostGIS → Analytics engine → React mapping frontend.",
  },
  {
    id: 2,
    number: "02",
    title: "Skill Bridge AI Platform",
    desc: "Created an AI-powered career guidance platform with scalable backend workflows, intelligent gap analysis, and course recommendation engine.",
    badges: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    problem:
      "Traditional job boards lack actionable feedback, leaving students unaware of exact skill gaps relative to target roles.",
    solution:
      "Built a career advisory platform that parses resumes, compares against target role criteria using OpenAI, and maps gaps to structured online course pathways.",
    features: [
      "Automated resume parser utilizing LLM parsing schemas",
      "Personalized skill gap visualizer panel",
      "Dynamic curriculum matching from an indexed MongoDB database",
    ],
    workflow:
      "Resume PDF → LangChain Parsing → OpenAI Gap Evaluation → Course Catalog Match → Interactive Learning Roadmap.",
  },
  {
    id: 3,
    number: "03",
    title: "Tech Learning Hub",
    desc: "Built a centralized educational platform providing structured learning resources, roadmap-based preparation content, and interactive progress tracking.",
    badges: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "Node.js"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/tech-learning-hub.pdf",
    problem:
      "ECE and CS students lack a structured, roadmap-focused preparation hub for core software engineering roles.",
    solution:
      "Designed a clean learning management hub with structured paths in systems, networks, and databases, including progress tracking.",
    features: [
      "Categorized syllabus modules (Systems, Networking, Coding)",
      "Interactive playground exercises and self-check progress tracking",
      "Lightweight, fast responsive interface optimized for all devices",
    ],
    workflow:
      "Student chooses Track → Interactive Learning Path → PostgreSQL progress tracking → Visualized completion stats.",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-item reveal">
      {/* Header row: number + tags */}
      <div>
        <div className="project-number">{project.number}</div>
        <div className="project-tags" style={{ marginTop: "0.5rem" }}>
          {project.badges.map((b) => (
            <span key={b} className="project-tag">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="project-expand-btn"
        >
          {expanded ? (
            <>
              <FiChevronUp size={13} /> Hide Breakdown
            </>
          ) : (
            <>
              <FiChevronDown size={13} /> Technical Breakdown
            </>
          )}
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="project-breakdown" style={{ marginTop: "0.75rem" }}>
                <div className="breakdown-item">
                  <div className="breakdown-label">Problem</div>
                  <div className="breakdown-value">{project.problem}</div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-label">Solution</div>
                  <div className="breakdown-value">{project.solution}</div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-label">Key Features</div>
                  <div className="breakdown-value">
                    <ul>
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-label">Architecture</div>
                  <div className="breakdown-value">{project.workflow}</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="project-actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-btn-primary"
        >
          <FiGithub /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-btn-secondary"
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>

      {/* PDF preview */}
      {project.doc && (
        <div className="pdf-block">
          <div className="pdf-frame">
            <iframe
              src={`${project.doc}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${project.title} PDF`}
            />
          </div>
          <div className="pdf-footer">
            <span className="pdf-label">Project Certificate</span>
            <a
              href={project.doc}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-open-btn"
            >
              <FiExternalLink size={11} /> Open Full PDF
            </a>
          </div>
        </div>
      )}
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
        </div>

        <div className="projects-stack">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
