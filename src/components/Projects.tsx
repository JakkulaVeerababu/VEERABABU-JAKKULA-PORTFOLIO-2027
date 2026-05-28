"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Maritime Vessel Tracking & Port Analytics Platform",
    desc: "Built scalable REST APIs and deployed cloud-hosted maritime analytics dashboards using PostgreSQL and FastAPI.",
    badges: ["FastAPI", "PostgreSQL", "PostGIS", "Docker", "AWS EC2", "React"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    problem: "Lack of real-time visibility and predictive analytics in port operations leading to logistics congestion and vessel delays.",
    solution: "Developed a distributed tracking system feeding high-frequency AIS vessel feeds into PostgreSQL/PostGIS, paired with a FastAPI backend to expose low-latency telemetry endpoints.",
    features: [
      "Real-time AIS vessel coordinate mapping",
      "Geospatial querying with PostGIS spatial indices",
      "Interactive analytics dashboard showing harbor traffic density"
    ],
    workflow: "AIS stream data -> FastAPI ingestion service -> PostgreSQL database with spatial index -> Analytics engine -> React mapping frontend."
  },
  {
    id: 2,
    title: "Skill Bridge AI Platform",
    desc: "Created an AI-powered career guidance and recommendation platform with scalable backend workflows and intelligent guidance systems.",
    badges: ["Next.js", "LangChain", "OpenAI API", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    problem: "Traditional job boards lack actionable feedback or educational guidance, leaving students unaware of exact skill gaps.",
    solution: "Built a career advisory platform that parses resumes, compares them against target role criteria using OpenAI, and maps gaps to structured online course pathways.",
    features: [
      "Automated resume parser utilizing LLM parsing schemas",
      "Personalized skill gap visualizer panel",
      "Dynamic curriculum matching from an indexed MongoDB database"
    ],
    workflow: "Resume PDF -> LangChain Parsing -> OpenAI Gap Evaluation -> Course Catalog Match -> Interactive Learning Roadmap."
  },
  {
    id: 3,
    title: "Tech Learning Hub",
    desc: "Built a centralized educational platform providing structured learning resources and roadmap-based preparation content.",
    badges: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "Node.js"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    doc: "/docs/tech-learning-hub.pdf",
    problem: "ECE and CS students lack a structured, roadmap-focused preparation hub for core software engineering roles.",
    solution: "Designed a clean learning management hub offering structured paths in systems, networks, and databases, with progress tracking.",
    features: [
      "Categorized syllabus modules (Systems, Networking, Coding)",
      "Interactive playground exercises and self-check progress tracking",
      "Lightweight, fast responsive interface optimized for desktop and mobile devices"
    ],
    workflow: "Student chooses Track -> Loads Interactive Learning Path -> Tracks completion in PostgreSQL -> Visualizes progress stats."
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card-new reveal">
      {/* Banner */}
      <div className="proj-banner">
        <div className="proj-banner-title">{project.title}</div>
      </div>

      {/* Info */}
      <div className="proj-info">
        <div>
          <div className="proj-badge-list">
            {project.badges.map((b) => (
              <span key={b} className="proj-badge">
                {b}
              </span>
            ))}
          </div>
          <h3 className="proj-title">{project.title}</h3>
          <p className="proj-description">{project.desc}</p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="proj-meta-toggle"
          >
            {isOpen ? <><FiChevronUp /> Hide Breakdown</> : <><FiChevronDown /> Technical Breakdown</>}
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="proj-meta-content">
                  <div className="proj-meta-item">
                    <strong>Problem:</strong>
                    <p>{project.problem}</p>
                  </div>
                  <div className="proj-meta-item">
                    <strong>Solution:</strong>
                    <p>{project.solution}</p>
                  </div>
                  <div className="proj-meta-item">
                    <strong>Key Features:</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="proj-meta-item">
                    <strong>Architecture / Workflow:</strong>
                    <p>{project.workflow}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="proj-actions flex flex-wrap gap-2">
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
          {project.doc && (
            <a
              href={project.doc}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-btn-secondary border-cyan-200/60 hover:border-cyan-400 hover:text-cyan-600 bg-cyan-50/5"
            >
              <FiFileText /> View PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Selected Works</div>
          <h2 className="section-title">Projects</h2>
          <div className="divider"></div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

