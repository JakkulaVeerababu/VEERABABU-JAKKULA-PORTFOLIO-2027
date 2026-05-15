"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
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
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.65 } },
};

export default function Projects() {

  return (
    <section id="projects" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Projects</h2>
            <div className="line" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.num}
                variants={cardAnim}
                custom={i}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.03] transition-colors flex flex-col h-full group"
              >
                {/* Thumbnail Support */}
                <div className="w-full aspect-[16/9] mb-6 rounded-xl bg-white/[0.01] border border-white/[0.02] overflow-hidden flex items-center justify-center relative group-hover:border-white/[0.05] transition-colors">
                  {/* Image placeholder / Number */}
                  <span
                    className="font-mono text-5xl font-bold opacity-10 transition-opacity group-hover:opacity-20"
                    style={{ color: project.accent }}
                  >
                    {project.num}
                  </span>
                  {/* Subtle gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accent}0a 0%, transparent 70%)`,
                    }}
                  />
                </div>

                <div className="mb-3 flex-1">
                  <h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#888] font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-[13px] text-[#aaa] mt-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-medium text-[#888] bg-white/[0.03] border border-white/[0.05] rounded-md cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-1 text-[10px] font-medium text-[#666]">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-white/[0.04] mt-auto">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-sm"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="font-medium text-xs">Source</span>
                  </Link>
                  <Link
                    href={project.demo}
                    className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="font-medium text-xs">Live</span>
                  </Link>
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
