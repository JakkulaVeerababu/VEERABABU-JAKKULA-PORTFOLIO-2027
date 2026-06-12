"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  desc: string;
  doc?: string;
  featured?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Data Valley",
    role: "Artificial Intelligence IoT Virtual Internship",
    date: "2026 – Present",
    desc: "Architecting hybrid AI-IoT workflows, managing high-throughput sensor telemetry pipelines, and building predictive analytic modules at the system edge.",
    featured: true,
  },
  {
    company: "Infosys Springboard",
    role: "Full Stack Dev Virtual Internship",
    date: "2025",
    desc: "Developed clean web architectures covering frontend responsive design, server APIs, secure routing, and database performance optimizations.",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    featured: true,
  },
  {
    company: "Google & APSCHE",
    role: "AI ML Virtual Internship",
    date: "2025",
    desc: "Collaborated on machine learning models, exploring neural frameworks, classification algorithms, and high-quality feature engineering pipelines.",
    doc: "/docs/google-aiml-internship.pdf",
    featured: true,
  },
  {
    company: "Microchip Technology Inc & APSCHE",
    role: "Embedded System Developer Internship",
    date: "2024",
    desc: "Programmed microcontrollers in C using MPLAB IDE, implementing peripheral configurations, analog sensor interfaces, and low-level device drivers.",
    doc: "/docs/embedded-system-internship.pdf",
    featured: false,
  },
  {
    company: "Emertx",
    role: "IoT Internship",
    date: "2024",
    desc: "Constructed IoT prototypes, scripting device telemetry collectors, local gateway nodes, and cloud-to-device event pipelines.",
    doc: "/docs/iot-internship.pdf",
    featured: false,
  },
  {
    company: "TATA (Forage)",
    role: "GenAI Powered Data Analytics Job Simulation",
    date: "2025",
    desc: "Completed simulated data analytics pipelines using GenAI tools, building cleaning algorithms and strategic visualizations.",
    featured: false,
  },
  {
    company: "Deloitte (Forage)",
    role: "Data Analytics Job Simulation",
    date: "2025",
    desc: "Analyzed complex dataset metrics, performing data processing steps and preparing visual telemetry reporting dashboards.",
    featured: false,
  },
  {
    company: "Accenture (Forage)",
    role: "Data Analytics and Visualization Job Simulation",
    date: "2025",
    desc: "Simulated analytics strategies, parsing consumer trends and presenting dashboard telemetry to corporate clients.",
    featured: false,
  }
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Trajectory</div>
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="timeline-container reveal"
        >
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemAnim} className="timeline-item">
              <div className="timeline-node" />
              <div className={`glass-card timeline-content p-6 border border-black/5 hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all flex flex-col justify-between ${exp.featured ? "shadow-md bg-white/70" : ""}`}>
                <div className="timeline-header flex justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="timeline-org text-indigo-600 font-mono text-xs uppercase tracking-wider font-bold mb-1">{exp.company}</div>
                    <div className="timeline-title text-base font-bold text-slate-800 tracking-tight">{exp.role}</div>
                    {exp.featured && (
                      <span className="inline-block mt-2 bg-indigo-600/90 border border-indigo-400/50 text-white font-bold rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-wider shadow-sm">Featured</span>
                    )}
                  </div>
                  <span className="timeline-date-chip text-[10px] font-mono font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded bg-white/90 border border-black/10 text-slate-600 shadow-sm">{exp.date}</span>
                </div>
                <p className="timeline-desc text-slate-600 leading-relaxed text-sm mb-4">{exp.desc}</p>

                {exp.doc && (
                  <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center">
                    <span className="pdf-label font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider">Credential Node</span>
                    <a
                      href={exp.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-open-btn flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors active:scale-95"
                    >
                      <FiExternalLink size={12} /> View PDF Credential
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
