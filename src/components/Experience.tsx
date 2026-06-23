"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Datavalley Inc",
    role: "Artificial Intelligence Internet of Things Intern",
    date: "May 2026 — Present",
    desc: "Architecting hybrid AI-IoT workflows, managing telemetry pipelines, and building predictive edge models.",
    keyFeatures: [
      "Designed and integrated real-time telemetry processing pipelines for high-frequency IoT sensors",
      "Deployed optimized lightweight neural network models at the edge for predictive system health monitoring",
      "Constructed cloud-edge hybrid databases ensuring secure data ingestion and minimal packet loss"
    ],
    techStack: ["Python", "TensorFlow Lite", "MQTT", "FastAPI", "PostgreSQL", "Docker", "AWS IoT Core"],
    domain: "datavalley.ai",
    featured: false,
  },
  {
    company: "Infosys Springboard",
    role: "Full Stack Engineer (Internship)",
    date: "Feb 2026 — Present",
    desc: "Built an AI-powered Maritime Vessel Tracking System designed to monitor, analyze, and visualize real-time vessel movement data with high accuracy. The platform integrates live AIS (Automatic Identification System) data, interactive geospatial mapping, route analytics, and intelligent monitoring features to enhance maritime surveillance and operational efficiency.",
    keyFeatures: [
      "Contributed to backend logic, high-performance data processing workflows, and tracking visualization",
      "Integrated Live AIS feeds and geospatial queries for precise position calculations and port arrival estimations",
      "Optimized tracking performance and route prediction accuracy using smart geospatial mapping algorithms"
    ],
    techStack: ["Python", "FastAPI", "React", "Maps API", "AIS Processing", "WebSockets", "PostgreSQL", "MongoDB", "AI/ML Analytics", "Docker"],
    domain: "infyspringboard.onwingspan.com",
    doc: "/docs/c0d627b4-4731-42cf-b684-f548f0bccdf8.pdf",
    img: "/IMGS/Screenshot 2026-06-21 120507.png",
    featured: true,
  },
  {
    company: "Runway Digital Media",
    role: "Back End Developer (Internship)",
    date: "Feb 2026 — Present",
    desc: "Contributed to the development of SHRFLOW — a high-performance, multi-tenant enterprise email platform designed for scalable communication and campaign orchestration. Worked with asynchronous workflows, event-driven processing, and modern cloud-native architectures to support large-scale email operations and campaign orchestration. Gained hands-on experience with distributed systems, containerized deployments, and scalable backend development.",
    keyFeatures: [
      "Multi-tenant workspace architecture",
      "Contact management and audience segmentation",
      "Campaign scheduling and orchestration",
      "Event-driven asynchronous processing",
      "Real-time analytics and monitoring",
      "Scalable cloud-native infrastructure",
      "Containerized deployment workflows"
    ],
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "AWS", "Tailwind CSS"],
    domain: "thelitrunway.com",
    featured: false,
  },
  {
    company: "Emertxe Information Technologies",
    role: "Internet of Things Intern",
    date: "Aug 2025 — Dec 2025",
    desc: "Constructed IoT prototypes, scripting device telemetry collectors, local gateway nodes, and cloud telemetry.",
    keyFeatures: [
      "Programmed microcontroller firmware in C/C++ for hardware peripheral configurations and sensor interfaces",
      "Developed local data collectors on Raspberry Pi gateways to parse and buffer telemetry streams",
      "Configured robust MQTT message brokers for low-overhead publishing of telemetry to cloud dashboards"
    ],
    techStack: ["C", "C++", "Raspberry Pi", "Arduino", "MQTT", "Node-RED", "Linux"],
    domain: "emertxe.com",
    doc: "/docs/iot-internship.pdf",
    img: "/IMGS/Screenshot 2026-06-21 120227.png",
    featured: false,
  },
  {
    company: "Google & APSCHE",
    role: "AI/ML Virtual Internship",
    date: "Jul 2025 — Sep 2025",
    desc: "Collaborated on machine learning models, exploring neural frameworks, classification algorithms, and feature pipelines.",
    keyFeatures: [
      "Engineered data pre-processing and feature selection pipelines for multi-class classification tasks",
      "Evaluated model performance and hyperparameter tuning using TensorFlow and Scikit-Learn frameworks",
      "Built interactive data visualizations to present insights and predictive metrics to project stakeholders"
    ],
    techStack: ["Python", "TensorFlow", "Scikit-Learn", "NumPy", "Pandas", "Google Cloud", "Colab"],
    domain: "google.com",
    doc: "/docs/google-aiml-internship.pdf",
    img: "/IMGS/Screenshot 2026-06-21 120422.png",
    featured: true,
  },
  {
    company: "Microchip Technology Inc.",
    role: "Embedded System Developer VIRTUAL INTERNSHIP",
    date: "Jul 2025 — Sep 2025",
    desc: "Programmed microcontrollers in C using MPLAB IDE, implementing peripheral configs and sensor interfaces.",
    keyFeatures: [
      "Wrote low-level drivers in C for microcontrollers utilizing internal timers, ADC converters, and interrupts",
      "Interfaced hardware sensors and liquid crystal displays (LCD) using serial communication protocols (SPI, I2C, UART)",
      "Simulated circuit designs on Proteus software to validate signal fidelity and logic correctness before hardware setup"
    ],
    techStack: ["Embedded C", "PIC Microcontrollers", "MPLAB X IDE", "XC8 Compiler", "Proteus Simulation"],
    domain: "microchip.com",
    doc: "/docs/embedded-system-internship.pdf",
    img: "/IMGS/Screenshot 2026-06-21 120308.png",
    featured: false,
  },
];

function ExperienceLogo({ domain, company }: { domain?: string; company: string }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
    : null;

  if (logoUrl && !imgError) {
    return (
      <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-[var(--border-medium)] p-1.5 md:p-2.5 shadow-sm shrink-0">
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[var(--border-medium)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0 shadow-sm">
      <FaBriefcase className="w-5 h-5 md:w-8 md:h-8" />
    </div>
  );
}

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
              <div className={`glass-card exp-card${exp.featured ? " border-white/20" : ""}`}>
                <div className={`exp-card-grid ${exp.doc && exp.img ? "has-preview" : ""}`}>
                  
                  {/* Left Column: Details & Description */}
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Logo Column */}
                    <ExperienceLogo domain={exp.domain} company={exp.company} />

                    {/* Content Column */}
                    <div className="flex-1 w-full">
                      <div className="exp-card-top" style={{ marginBottom: "0.5rem" }}>
                        <div>
                          <div className="exp-company">{exp.company}</div>
                          <div className="exp-role">{exp.role}</div>
                          {exp.featured && (
                            <span className="exp-featured-badge">Featured</span>
                          )}
                        </div>
                        <span className="exp-date">{exp.date}</span>
                      </div>
                      
                      <p className="exp-desc" style={{ marginBottom: "1rem" }}>{exp.desc}</p>

                      {/* Key Features / Contributions */}
                      {exp.keyFeatures && exp.keyFeatures.length > 0 && (
                        <div style={{ marginBottom: "1rem" }}>
                          <div className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-mono font-bold mb-2">Key Contributions & Features</div>
                          <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
                            {exp.keyFeatures.map((feat, idx) => (
                              <li key={idx} className="text-xs text-[var(--text-secondary)] py-0.5">
                                – {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack */}
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.techStack.map((tech) => (
                            <span key={tech} className="project-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: PDF Preview Card */}
                  {exp.doc && exp.img && (
                    <div className="pdf-block">
                      <div className="pdf-frame" style={{ overflow: "hidden", height: "200px", width: "100%" }}>
                        <img
                          src={exp.img}
                          alt={`${exp.company} certificate preview`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                      </div>
                      <div className="pdf-footer">
                        <span className="pdf-label">Certificate Preview</span>
                        <a
                          href={exp.doc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pdf-open-btn"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "var(--accent-pale, rgba(255, 255, 255, 0.08))",
                            padding: "6px 14px",
                            borderRadius: "99px",
                            border: "1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))",
                            color: "var(--text-primary)",
                            fontSize: "12px",
                            fontWeight: 600,
                            transition: "all 0.2s ease",
                          }}
                        >
                          <FiExternalLink size={12} /> PDF
                        </a>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
