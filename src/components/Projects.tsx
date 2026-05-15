"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "Maritime Vessel Tracking & Port Analytics",
    subtitle: "Full-stack real-time monitoring platform",
    description:
      "Built a full-stack application for tracking maritime vessels and port traffic in real time. The PostgreSQL backend handles 1,000+ vessels with geospatial queries and time-series aggregations. Port operations teams get a live, filterable dashboard showing vessel positions, traffic density, and congestion metrics.",
    problem: "Port logistics teams lacked real-time visibility into vessel movements and traffic bottlenecks across multiple terminals.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "REST API", "WebSocket"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: true,
    accent: "#5b7fff",
  },
  {
    num: "02",
    title: "Neural Compiler for AI Chip Design",
    subtitle: "Research-inspired hardware optimization project",
    description:
      "Exploratory project studying how neural network computation graphs can be optimized for ASIC-level execution. Read papers on compiler IR representations, operator fusion, and memory layout strategies. Built a small proof-of-concept graph optimizer in Python that demonstrates how operator fusion reduces memory bandwidth.",
    problem: "Understanding how frameworks like TVM convert high-level computational graphs into hardware-efficient instruction sequences.",
    tech: ["Python", "Graph Theory", "LLVM Concepts", "AI Research", "ASIC Workflow"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: true,
    accent: "#e878fa",
  },
  {
    num: "03",
    title: "Smart AIoT Monitoring System",
    subtitle: "Cloud-connected sensor infrastructure",
    description:
      "IoT sensor system that pushes real-time readings to a cloud backend for analysis and alerting. Used MQTT for lightweight sensor communication, Node.js aggregation layer, and a React dashboard for threshold monitoring. Built during AIoT internship at Data Valley.",
    problem: "Industrial monitoring setups lack intelligent alerting — engineers react too late to anomalies. This tries to close that gap.",
    tech: ["IoT Sensors", "MQTT", "Node.js", "Cloud APIs", "React", "MongoDB"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
    accent: "#45d4a8",
  },
  {
    num: "04",
    title: "AI Data Insight Engine",
    subtitle: "SQL + AI analytics dashboard",
    description:
      "Data analytics engine combining SQL query pipelines with AI-assisted insight generation. Leverages BigQuery for large-scale analysis with a React dashboard that visualizes trends. Integrated an LLM layer for natural-language query translation — non-technical users describe what they want, the system writes the SQL.",
    problem: "Non-technical stakeholders need access to data insights without knowing SQL or data warehouse schema structures.",
    tech: ["Google BigQuery", "PostgreSQL", "Python", "React", "OpenAI API", "Tailwind"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
    accent: "#f5a623",
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.65 } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Projects</h2>
            <div className="line" />
          </div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.num}
                variants={cardAnim}
                custom={i}
                className="glass-card project-card p-6 md:p-8 group"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Visual panel */}
                  <div className="lg:w-[38%] flex-shrink-0">
                    <div
                      className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/[0.05] flex items-center justify-center group-hover:border-white/[0.1] transition-colors duration-500"
                    >
                      {/* Background gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(ellipse at center, ${project.accent}0a 0%, transparent 70%)`,
                        }}
                      />

                      {/* Circuit-inspired decoration */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        <div className="absolute top-4 bottom-4 right-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-white/5" />
                        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white/5" />
                      </div>

                      {/* Number */}
                      <div
                        className="font-mono text-6xl font-bold select-none transition-all duration-500 group-hover:opacity-70"
                        style={{ color: `${project.accent}1a` }}
                      >
                        {project.num}
                      </div>

                      {/* Accent lines on hover */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}40, transparent)` }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between gap-4 flex-1">
                    <div>
                      <div className="flex items-start gap-4 mb-3">
                        <div>
                          <p
                            className="text-[10px] font-mono mb-1.5 tracking-wider uppercase"
                            style={{ color: project.accent }}
                          >
                            {project.featured ? "// Featured Project" : "// Project"}
                          </p>
                          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#e8e8e8] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#555] mt-0.5">{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-[13px] text-[#888] leading-[1.85]">
                        {project.description}
                      </p>

                      <div className="mt-4 p-3 rounded-lg bg-white/[0.018] border border-white/[0.04]">
                        <span className="text-[11px] font-mono text-[#555]">Problem: </span>
                        <span className="text-[11px] text-[#666]">{project.problem}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="skill-pill text-[11px]"
                            style={{}}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[#555] hover:text-white transition-colors text-sm"
                        >
                          <FiGithub className="w-4 h-4" />
                          <span className="font-mono text-xs">Source</span>
                        </Link>
                        <Link
                          href={project.demo}
                          className="flex items-center gap-1.5 text-[#555] hover:text-[#5b7fff] transition-colors text-sm"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span className="font-mono text-xs">Live</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#5b7fff] transition-colors font-mono group"
            >
              <FiGithub className="w-4 h-4" />
              <span className="link-underline">More experiments on GitHub</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
