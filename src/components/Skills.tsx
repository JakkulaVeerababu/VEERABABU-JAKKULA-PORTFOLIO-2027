"use client";

import { motion, Variants } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiFastapi, SiExpress, SiPostgresql, SiMongodb, SiDocker } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#555" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
  { name: "AWS", icon: <FaAws />, color: "#ff9900" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "Python", icon: <FaPython />, color: "#3776ab" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "SQL", icon: <FaDatabase />, color: "#0052cc" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};


export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="divider"></div>
          <p className="section-sub">
            A verified stack of modern programming languages, frameworks, cloud services, and databases used to build scalable systems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="skills-grid reveal"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="glass-card skill-card"
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


