"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    company: "Infosys Springboard",
    role: "Full Stack Intern",
    date: "2025",
    desc: "Focused on scalable web applications, secure routing configurations, database indexing, and enterprise-grade software development lifecycles.",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    tagColor: "var(--accent)",
    bgColor: "rgba(173, 198, 255, 0.1)",
  },
  {
    company: "Google & APSCHE",
    role: "AI ML Intern",
    date: "2025",
    desc: "Deep learning specialization, hands-on model training pipelines, dataset optimization, and implementation of computer vision modules.",
    doc: "/docs/google-aiml-internship.pdf",
    tagColor: "var(--secondary)",
    bgColor: "rgba(78, 222, 163, 0.1)",
  },
  {
    company: "Microchip Technology",
    role: "Embedded Systems Intern",
    date: "2024",
    desc: "Firmware development inside MPLAB IDE environment, coding controller drivers, peripheral architectures, and hardware-software integration.",
    doc: "/docs/embedded-system-internship.pdf",
    tagColor: "var(--tertiary)",
    bgColor: "rgba(255, 183, 134, 0.1)",
  },
  {
    company: "Emertx & Data Valley",
    role: "IoT & AI Systems Research",
    date: "2024 – Present",
    desc: "Connecting physical sensors to cloud telemetry pipelines, scripting gateway edge aggregators, and analyzing distributed sensor networks.",
    doc: "/docs/iot-internship.pdf",
    tagColor: "var(--accent)",
    bgColor: "rgba(173, 198, 255, 0.1)",
  },
];

const simulations = [
  {
    company: "Tata Group",
    role: "GenAI & Data Engineering Virtual Simulation",
    desc: "Engineered prompt schemas, mock RAG pipelines, and structured customer feedback semantic classifiers.",
  },
  {
    company: "Deloitte & Accenture",
    role: "Data Analytics & Strategic Tech Simulation",
    desc: "Modelled strategic business flows, data visualization presentations, and system scaling requirements.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg-canvas)", borderBottom: "1px solid var(--border-subtle)", padding: "6rem 1.5rem" }}>
      <div className="container mx-auto max-w-[960px]">
        <div className="reveal section-header text-center mb-16">
          <div className="section-eyebrow">Trajectory</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-on-surface-variant text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
            Strategic internships and simulation programs
          </p>
          <div className="section-divider mx-auto" style={{ background: "var(--accent)" }} />
        </div>

        {/* Timeline Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative space-y-12 reveal"
        >
          {/* Alternating Centered Vertical Line on Desktop */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 hidden md:block" style={{ backgroundColor: "rgba(28, 25, 23, 0.08)" }} />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={itemAnim}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Side Label */}
                <div className={`hidden md:block w-[45%] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                  <span className="text-xs font-semibold uppercase tracking-wider block" style={{ color: exp.tagColor }}>
                    {i === 0 ? "Latest" : "Internship"}
                  </span>
                </div>

                {/* Timeline Center Dot */}
                <div
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-[3px] hidden md:block"
                  style={{ backgroundColor: exp.tagColor, borderColor: "var(--bg-canvas)" }}
                />

                {/* Card Container */}
                <div className="w-full md:w-[45%] glass-card p-6 rounded-lg" style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)" }}>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider" style={{ color: exp.tagColor, backgroundColor: exp.bgColor }}>
                        {exp.date}
                      </span>
                      <h3 className="font-headline-md text-lg font-bold text-on-surface mt-2" style={{ color: "var(--text-primary)" }}>{exp.company}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)", marginTop: "2px" }}>{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{exp.desc}</p>

                  {exp.doc && (
                    <div className="mt-4 border-t border-white/5 pt-3.5 flex justify-between items-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: "var(--text-muted)" }}>Credentials</span>
                      <a
                        href={exp.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider hover:underline"
                        style={{ color: "var(--accent)" }}
                      >
                        <FiExternalLink /> View Verification PDF
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Corporate Simulations Grid at bottom */}
        <div className="mt-16 reveal">
          <h4 className="text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: "var(--text-muted)" }}>
            SIMULATED PROFESSIONAL PATHWAYS
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {simulations.map((sim, i) => (
              <div key={i} className="p-6 rounded-lg border" style={{ backgroundColor: "rgba(255, 255, 255, 0.35)", borderColor: "var(--border-subtle)" }}>
                <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: "var(--tertiary)" }}>
                  {sim.company}
                </span>
                <h5 className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{sim.role}</h5>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{sim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
