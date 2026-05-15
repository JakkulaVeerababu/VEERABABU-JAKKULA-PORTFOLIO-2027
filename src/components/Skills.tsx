"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillGroups = [
  {
    category: "Programming",
    icon: "{ }",
    color: "#7eb2ff",
    items: [
      { name: "Java", level: 85 },
      { name: "Python", level: 82 },
      { name: "C", level: 78 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Frontend",
    icon: "</>",
    color: "#9b59ff",
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    color: "#5b7fff",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 74 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    category: "Database & Analytics",
    icon: "◈",
    color: "#45d4a8",
    items: [
      { name: "PostgreSQL", level: 84 },
      { name: "MySQL", level: 80 },
      { name: "Google BigQuery", level: 72 },
      { name: "Data Visualization", level: 75 },
    ],
  },
  {
    category: "AI & Systems",
    icon: "◉",
    color: "#e878fa",
    items: [
      { name: "Machine Learning", level: 68 },
      { name: "AI Tools", level: 78 },
      { name: "Prompt Engineering", level: 80 },
      { name: "Neural Compiler Concepts", level: 45 },
    ],
  },
  {
    category: "Embedded & ECE",
    icon: "⬡",
    color: "#f5a623",
    items: [
      { name: "IoT", level: 72 },
      { name: "Embedded Systems", level: 68 },
      { name: "FPGA Basics", level: 42 },
      { name: "Microcontrollers", level: 65 },
      { name: "Sensors", level: 70 },
    ],
  },
  {
    category: "Developer Tools",
    icon: "⌘",
    color: "#aaa",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "Linux", level: 72 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.55 } },
};

function SkillCard({ group }: { group: typeof skillGroups[0] }) {
  return (
    <motion.div
      variants={cardAnim}
      className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.03] transition-colors"
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-sm font-mono font-bold opacity-80"
          style={{ color: group.color }}
        >
          {group.icon}
        </span>
        <h3 className="text-sm font-semibold text-white tracking-wide">
          {group.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 text-xs font-medium text-[#aaa] bg-white/[0.03] border border-white/[0.05] rounded-lg hover:text-white hover:border-white/10 transition-colors cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Technical Arsenal</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {skillGroups.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
