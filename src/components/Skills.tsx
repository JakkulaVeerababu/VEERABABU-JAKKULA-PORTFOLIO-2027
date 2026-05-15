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
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.55 } },
};

function SkillCard({ group }: { group: typeof skillGroups[0] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      variants={cardAnim}
      className="glass-card p-5 group project-card"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span
          className="text-sm font-mono font-bold opacity-80"
          style={{ color: group.color }}
        >
          {group.icon}
        </span>
        <h3 className="text-sm font-semibold tracking-wide" style={{ color: group.color }}>
          {group.category}
        </h3>
      </div>

      <div className="space-y-3">
        {group.items.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHovered(skill.name)}
            className="group/skill cursor-default"
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-[12px] transition-colors duration-200"
                style={{ color: hovered === skill.name ? group.color : "#888" }}
              >
                {skill.name}
              </span>
              <span
                className="text-[10px] font-mono transition-opacity duration-200"
                style={{
                  color: group.color,
                  opacity: hovered === skill.name ? 1 : 0,
                }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="h-[2px] bg-white/[0.05] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${group.color}aa, ${group.color})`,
                  boxShadow: hovered === skill.name ? `0 0 8px ${group.color}60` : "none",
                }}
              />
            </div>
          </div>
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
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Technical Arsenal</h2>
            <div className="line" />
          </div>

          <p className="text-[#555] text-xs font-mono mb-8 -mt-4">
            // proficiency shown as self-assessment — still building in all areas
          </p>

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
