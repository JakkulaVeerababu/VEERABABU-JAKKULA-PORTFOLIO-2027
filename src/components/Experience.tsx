"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    company: "Data Valley",
    role: "AI & IoT Virtual Internship",
    date: "2026 – Present",
    desc: "Architecting hybrid AI-IoT workflows, managing high-throughput sensor telemetry pipelines, and building predictive analytic modules at the system edge.",
    featured: false,
  },
  {
    company: "Infosys Springboard",
    role: "Full Stack Development Internship",
    date: "2025",
    desc: "Developed clean web architectures covering frontend responsive design, server APIs, secure routing, and database performance optimizations.",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    featured: true,
  },
  {
    company: "Google & APSCHE",
    role: "AI/ML Virtual Internship",
    date: "2025",
    desc: "Collaborated on machine learning models, exploring neural frameworks, classification algorithms, and high-quality feature engineering pipelines.",
    doc: "/docs/google-aiml-internship.pdf",
    featured: true,
  },
  {
    company: "Microchip Technology Inc & APSCHE",
    role: "Embedded Systems Internship",
    date: "2024",
    desc: "Programmed microcontrollers in C using MPLAB IDE, implementing peripheral configurations, analog sensor interfaces, and low-level device drivers.",
    doc: "/docs/embedded-system-internship.pdf",
    featured: false,
  },
  {
    company: "Emertxe",
    role: "IoT Virtual Internship",
    date: "2024",
    desc: "Constructed IoT prototypes, scripting device telemetry collectors, local gateway nodes, and cloud-to-device event pipelines.",
    doc: "/docs/iot-internship.pdf",
    featured: false,
  },
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
          className="exp-timeline reveal"
        >
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemAnim} className="exp-item">
              <div className="exp-dot" />
              <div className={`glass-card exp-card${exp.featured ? " border-cyan-400/20" : ""}`}>
                <div className="exp-card-top">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    {exp.featured && (
                      <span className="exp-featured-badge">Featured</span>
                    )}
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <p className="exp-desc">{exp.desc}</p>

                {exp.doc && (
                  <div className="pdf-block">
                    <div className="pdf-frame">
                      <iframe
                        src={`${exp.doc}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title={`${exp.company} certificate`}
                      />
                    </div>
                    <div className="pdf-footer">
                      <span className="pdf-label">Certificate PDF</span>
                      <a
                        href={exp.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pdf-open-btn"
                      >
                        <FiExternalLink size={12} /> Open Full PDF
                      </a>
                    </div>
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
