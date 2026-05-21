"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    company: "Infosys Springboard",
    role: "Full Stack Developer",
    type: "Virtual Internship",
    period: "Feb 2026 – Present",
    color: "#7eb2ff",
    tags: ["Java", "React", "Spring Boot", "REST APIs", "SQL", "Web Dev"],
    description:
      "Engineered clean enterprise Full Stack workflows. Covered core Java internals, React interfaces, Spring Boot architectures, and robust REST APIs. Developed scalable databases and backend logic, applying high-performance software patterns, structured exception handling, and microservice decoupling.",
    highlight: "Currently Active",
  },
  {
    id: "02",
    company: "Google & APSCHE",
    role: "AI/ML Developer",
    type: "Virtual Internship",
    period: "Jul 2025 – Sep 2025",
    color: "#4ade80",
    tags: ["Machine Learning", "TensorFlow", "Python", "Neural Networks"],
    description:
      "Completed Google's AI/ML internship curriculum focused on practical end-to-end ML workflows. Developed model training pipelines, performed advanced data preprocessing, and handled large-scale model inference. Researched hardware-aware compiler structures and neural optimization pathways.",
    highlight: "Completed",
  },
  {
    id: "03",
    company: "Microchip Technology & APSCHE",
    role: "Embedded System Developer",
    type: "Virtual Internship",
    period: "Jul 2025 – Sep 2025",
    color: "#f5a623",
    tags: ["Embedded C", "Microcontrollers", "Firmware", "MPLAB X IDE"],
    description:
      "Focused on microcontrollers, register-level hardware programming, and peripheral interfaces. Interfaced analog and digital sensors with PIC/dsPIC microcontrollers. Gained experience compiling low-level code, debugging hardware constraints, and bridging the gap between firmware and silicon.",
    highlight: "Completed",
  },
  {
    id: "04",
    company: "Emertxe Technologies",
    role: "IoT & Embedded Developer",
    type: "Virtual Internship",
    period: "Aug 2025 – Dec 2025",
    color: "#e878fa",
    tags: ["Embedded Linux", "C Programming", "Device Drivers", "RTOS", "IoT"],
    description:
      "Immersed in systems-level IoT engineering. Wrote character device drivers in C, explored Linux kernel space architecture, and integrated RTOS concepts for predictable multitasking. Interfaced high-frequency sensors and modules for real-time edge processing.",
    highlight: "Completed",
  },
  {
    id: "05",
    company: "Data Valley",
    role: "Artificial Intelligence & IoT Developer",
    type: "Internship",
    period: "May 2025 – Jul 2025",
    color: "#45d4a8",
    tags: ["IoT Sensors", "MQTT Protocols", "Edge AI", "Cloud IoT", "Python"],
    description:
      "Orchestrated real-time sensor pipelines pushing high-throughput edge-data to cloud networks using MQTT protocols. Integrated intelligent edge models to perform basic AI inference on hardware nodes. Designed custom dashboards and automated anomaly alerts.",
    highlight: "Completed",
  },
  {
    id: "06",
    company: "Tata Group (Forage)",
    role: "GenAI Powered Data Analytics",
    type: "Job Simulation",
    period: "Aug 2025",
    color: "#a78bfa",
    tags: ["Generative AI", "Data Analytics", "Power BI", "Prompt Engineering"],
    description:
      "Completed a virtual program simulating high-level GenAI powered data analytics workflows. Conducted interactive prompt-driven analysis, optimized business intelligence pipelines, and built responsive data dashboards to deliver actionable enterprise decisions.",
    highlight: "Completed",
  },
  {
    id: "07",
    company: "Deloitte (Forage)",
    role: "Data Analytics",
    type: "Job Simulation",
    period: "Nov 2025",
    color: "#60a5fa",
    tags: ["Data Extraction", "SQL", "Tableau", "Business Insight"],
    description:
      "Engaged in mock client cases simulating enterprise data analytics pipelines. Extracted, cleaned, and processed multi-layered corporate datasets. Built predictive dashboards, performed exploratory data analysis, and formatted results into executive reports.",
    highlight: "Completed",
  },
  {
    id: "08",
    company: "Accenture (Forage)",
    role: "Data Analytics and Visualization",
    type: "Job Simulation",
    period: "Jan 2025",
    color: "#f472b6",
    tags: ["Data Visualization", "Content Analysis", "Client Pitch", "Excel"],
    description:
      "Simulated consultant engagements focusing on visual data storytelling and project management. Analyzed social content trends, created visual presentation frameworks, and structured high-impact insights to support complex business decisions.",
    highlight: "Completed",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.65, delay: i * 0.09 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Experience</h2>
            <div className="line" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.05] hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative md:pl-16 group"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[20px] top-8 w-2 h-2 rounded-full bg-[#444] hidden md:block transition-all duration-300 group-hover:bg-[#888]"
                  />

                  <div className="p-6 glass-card group-hover:border-white/10 transition-all duration-300 relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-medium tracking-wider text-zinc-300">
                            {exp.company}
                          </span>
                          <span className="text-zinc-600 text-xs">·</span>
                          <span className="text-xs text-zinc-500 font-mono">{exp.type}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <time className="text-xs font-mono text-zinc-400">{exp.period}</time>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/[0.05] bg-white/[0.02] text-zinc-500">
                          {exp.highlight}
                        </span>
                      </div>
                    </div>

                    <p className="text-[14px] text-zinc-400 leading-[1.8] mb-4 relative z-10">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[11px] font-medium text-zinc-400 bg-white/[0.02] border border-white/[0.04] rounded-md cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
