"use client";

import { motion, Variants } from "framer-motion";


const experiences = [
  {
    company: "Data Valley",
    role: "AI & IoT Virtual Internship",
    date: "2026 – Present",
    desc: "Architecting hybrid AI-IoT workflows, managing high-throughput sensor telemetry pipelines, and building predictive analytic modules at the system edge.",
  },
  {
    company: "Infosys Springboard",
    role: "Full Stack Development Internship",
    date: "2025",
    desc: "Developed clean web architectures, covering frontend responsive design, server APIs, secure routing, and database performance optimizations.",
  },
  {
    company: "Google & APSCHE",
    role: "AI/ML Virtual Internship",
    date: "2025",
    desc: "Collaborated on machine learning models, exploring neural frameworks, classification algorithms, and high-quality feature engineering.",
  },
  {
    company: "Microchip Technology Inc & APSCHE",
    role: "Embedded Systems Internship",
    date: "2024",
    desc: "Programmed microcontrollers in C using MPLAB IDE, implementing peripheral configurations, analog sensor interfaces, and device drivers.",
  },
  {
    company: "Emertxe",
    role: "IoT Virtual Internship",
    date: "2024",
    desc: "Constructed Internet of Things prototypes, scripting device telemetry collectors, local gateway nodes, and cloud-to-device event lines.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Trajectory</div>
          <h2 className="section-title">Professional Experience</h2>
          <div className="divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="exp-timeline reveal"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="exp-item"
            >
              <div className="exp-dot" />
              <div className="glass-card exp-card">
                <div className="exp-header">
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <div className="exp-role">{exp.role}</div>
                <p className="section-sub" style={{ margin: "0.5rem 0 0 0", fontSize: "0.825rem", lineHeight: "1.5" }}>
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

