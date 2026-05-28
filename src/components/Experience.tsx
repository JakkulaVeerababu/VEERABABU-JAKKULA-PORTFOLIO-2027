"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiFileText } from "react-icons/fi";

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
    desc: "Developed clean web architectures, covering frontend responsive design, server APIs, secure routing, and database performance optimizations.",
    doc: "/docs/maritime-vessel-tracking-infosys.pdf",
    docLabel: "View Project Certificate",
    featured: true,
  },
  {
    company: "Google & APSCHE",
    role: "AI/ML Virtual Internship",
    date: "2025",
    desc: "Collaborated on machine learning models, exploring neural frameworks, classification algorithms, and high-quality feature engineering.",
    doc: "/docs/google-aiml-internship.pdf",
    docLabel: "View Google AI-ML Certificate",
    featured: true,
  },
  {
    company: "Microchip Technology Inc & APSCHE",
    role: "Embedded Systems Internship",
    date: "2024",
    desc: "Programmed microcontrollers in C using MPLAB IDE, implementing peripheral configurations, analog sensor interfaces, and device drivers.",
    doc: "/docs/embedded-system-internship.pdf",
    docLabel: "View Internship Certificate",
    featured: false,
  },
  {
    company: "Emertxe",
    role: "IoT Virtual Internship",
    date: "2024",
    desc: "Constructed Internet of Things prototypes, scripting device telemetry collectors, local gateway nodes, and cloud-to-device event lines.",
    doc: "/docs/iot-internship.pdf",
    docLabel: "View IoT Certificate",
    featured: false,
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
              <div className={`glass-card exp-card ${exp.featured ? "border-cyan-400/30 shadow-cyan-400/5 bg-cyan-50/5" : ""}`}>
                <div className="exp-header flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h3 className="exp-company">{exp.company}</h3>
                    <div className="exp-role">{exp.role}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="exp-date">{exp.date}</span>
                    {exp.featured && (
                      <span className="text-[9px] uppercase font-extrabold tracking-widest text-cyan-600 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-400/20">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <p className="section-sub" style={{ margin: "0.75rem 0 0 0", fontSize: "0.825rem", lineHeight: "1.5" }}>
                  {exp.desc}
                </p>
                {exp.doc && (
                  <div className="mt-4 w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-gray-200/50 bg-[#fafafa]">
                    <iframe 
                      src={exp.doc} 
                      className="w-full h-full border-none" 
                      title={`${exp.company} Certificate`}
                    />
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

