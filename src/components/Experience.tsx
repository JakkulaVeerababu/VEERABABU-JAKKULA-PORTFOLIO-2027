"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    company: "Infosys Springboard",
    role: "Java Software Engineer",
    type: "Virtual Internship",
    period: "Feb 2026 – Present",
    color: "#7eb2ff",
    tags: ["Java", "OOP", "Spring", "REST APIs"],
    description:
      "Working through Infosys Springboard's structured Java engineering track. Covering core Java internals, object-oriented design patterns, and building REST-style APIs. Reinforcing fundamentals I picked up from coursework but now applying them to structured production-style scenarios — error handling, clean architecture, that kind of thing.",
    highlight: "Currently active",
  },
  {
    id: "02",
    company: "Google",
    role: "AI/ML Engineer",
    type: "Virtual Internship",
    period: "Jul 2025 – Sep 2025",
    color: "#4ade80",
    tags: ["Machine Learning", "TensorFlow", "Python", "Model Training"],
    description:
      "Went through Google's AI/ML internship curriculum. The focus was on practical ML workflows — data preprocessing, training pipelines, and evaluating model performance. Also got into understanding how large-scale ML systems handle inference at production. Opened up a lot of rabbit holes around hardware-aware model design.",
    highlight: "Completed",
  },
  {
    id: "03",
    company: "Microchip Technology",
    role: "Embedded Systems Developer",
    type: "Virtual Internship",
    period: "Jul 2025 – Sep 2025",
    color: "#f5a623",
    tags: ["Embedded C", "Microcontrollers", "Firmware", "MPLAB"],
    description:
      "Focused on embedded firmware development using Microchip's ecosystem. Worked with PIC microcontrollers, peripheral interfacing, and low-level register programming. This was the most hardware-grounded internship I've done — understanding the gap between software abstractions and what's actually happening on silicon.",
    highlight: "Completed",
  },
  {
    id: "04",
    company: "Emertxe Information Technologies",
    role: "Embedded Systems Developer",
    type: "Virtual Internship",
    period: "Aug 2025 – Dec 2025",
    color: "#e878fa",
    tags: ["Linux Kernel", "C", "Device Drivers", "RTOS"],
    description:
      "Deep dive into embedded Linux and systems programming. Covered device driver development, kernel module writing, and RTOS fundamentals. Emertxe has a strong reputation for rigorous embedded training — the curriculum pushed me to understand how OS abstractions interact with hardware at a very low level.",
    highlight: "Completed",
  },
  {
    id: "05",
    company: "Data Valley",
    role: "AIoT Engineer",
    type: "Internship",
    period: "2025",
    color: "#45d4a8",
    tags: ["IoT", "MQTT", "Cloud", "Sensor Integration", "Python"],
    description:
      "Built and deployed IoT sensor pipelines that push data to cloud-based analytics systems. The AIoT angle was interesting — combining traditional sensor data collection with basic AI inference at the edge. Learned a lot about MQTT protocols, data buffering under connectivity constraints, and cloud-to-edge latency tradeoffs.",
    highlight: "Completed",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.65, delay: i * 0.09 },
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
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Experience</h2>
            <div className="line" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#5b7fff]/25 to-transparent hidden md:block" />

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
                    className="absolute left-[18px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#080808] hidden md:block transition-all duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: exp.color,
                      boxShadow: `0 0 12px ${exp.color}60`,
                    }}
                  />

                  <div className="glass-card p-6 group-hover:border-white/[0.12] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-mono font-semibold tracking-wider"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </span>
                          <span className="text-[#333] text-xs">·</span>
                          <span className="text-xs text-[#555] font-mono">{exp.type}</span>
                        </div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <time className="text-xs font-mono text-[#555]">{exp.period}</time>
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                          style={{
                            color: exp.color,
                            borderColor: `${exp.color}30`,
                            backgroundColor: `${exp.color}0a`,
                          }}
                        >
                          {exp.highlight}
                        </span>
                      </div>
                    </div>

                    <p className="text-[13px] text-[#888] leading-[1.8] mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-pill text-[11px]">
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
