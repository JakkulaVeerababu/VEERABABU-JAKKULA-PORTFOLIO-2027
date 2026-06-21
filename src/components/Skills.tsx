"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub, FaPython, FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs, SiFastapi, SiExpress, SiPostgresql, SiMongodb, SiDocker,
  SiTypescript, SiJavascript, SiOpenai, SiLangchain, SiRedis, SiVercel, SiTailwindcss, SiC,
} from "react-icons/si";

type Category = "All" | "Frontend" | "Backend" | "Databases" | "Cloud & DevOps" | "AI / ML";

const categories: Category[] = ["All", "Frontend", "Backend", "Databases", "Cloud & DevOps", "AI / ML"];

const skills = [
  { name: "React.js",     icon: <FaReact />,       color: "#61dafb", cat: "Frontend"     },
  { name: "Next.js",      icon: <SiNextdotjs />,   color: "#000000", cat: "Frontend"     },
  { name: "TypeScript",   icon: <SiTypescript />,  color: "#3178c6", cat: "Frontend"     },
  { name: "JavaScript",   icon: <SiJavascript />,  color: "#cbd5e1", cat: "Frontend"     },
  { name: "HTML5",        icon: <FaHtml5 />,       color: "#e34f26", cat: "Frontend"     },
  { name: "CSS3",         icon: <FaCss3Alt />,     color: "#264de4", cat: "Frontend"     },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8", cat: "Frontend"     },
  { name: "Node.js",      icon: <FaNodeJs />,      color: "#339933", cat: "Backend"      },
  { name: "FastAPI",      icon: <SiFastapi />,     color: "#009688", cat: "Backend"      },
  { name: "Express.js",   icon: <SiExpress />,     color: "#555555", cat: "Backend"      },
  { name: "Python",       icon: <FaPython />,      color: "#3776ab", cat: "Backend"      },
  { name: "Java",         icon: <FaJava />,        color: "#007396", cat: "Backend"      },
  { name: "C",            icon: <SiC />,           color: "#a8b9cc", cat: "Backend"      },
  { name: "PostgreSQL",   icon: <SiPostgresql />,  color: "#4169e1", cat: "Databases"    },
  { name: "MongoDB",      icon: <SiMongodb />,     color: "#47a248", cat: "Databases"    },
  { name: "Redis",        icon: <SiRedis />,       color: "#dc382d", cat: "Databases"    },
  { name: "SQL",          icon: <FaDatabase />,    color: "#0052cc", cat: "Databases"    },
  { name: "Docker",       icon: <SiDocker />,      color: "#2496ed", cat: "Cloud & DevOps"},
  { name: "AWS",          icon: <FaAws />,         color: "#cbd5e1", cat: "Cloud & DevOps"},
  { name: "Vercel",       icon: <SiVercel />,      color: "#000000", cat: "Cloud & DevOps"},
  { name: "Git",          icon: <FaGitAlt />,      color: "#f05032", cat: "Cloud & DevOps"},
  { name: "GitHub",       icon: <FaGithub />,      color: "#181717", cat: "Cloud & DevOps"},
  { name: "Linux",        icon: <FaLinux />,       color: "#cbd5e1", cat: "Cloud & DevOps"},
  { name: "OpenAI API",   icon: <SiOpenai />,      color: "#10a37f", cat: "AI / ML"      },
  { name: "LangChain",    icon: <SiLangchain />,   color: "#1c3c3c", cat: "AI / ML"      },
];

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="section-divider" />
          <p className="section-sub">
            A verified stack of modern languages, frameworks, cloud services,
            and databases used to build scalable, production-grade systems.
          </p>
        </div>

        {/* Tab filter bar */}
        <div className="skills-tabs-container">
          <div className="skills-tabs-list" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`skills-tab-trigger${active === cat ? " active" : ""}`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="skills-tab-indicator"
                    className="skills-tab-indicator"
                    transition={{ type: "spring", stiffness: 480, damping: 38 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>

          <div className="skills-tab-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                className="skills-marquee-container"
              >
                <div className="skills-marquee-track">
                  {/* First set */}
                  {(() => {
                    const minItems = 16;
                    let displaySkills = [...filtered];
                    if (displaySkills.length > 0) {
                      while (displaySkills.length < minItems) {
                        displaySkills = [...displaySkills, ...filtered];
                      }
                    }
                    return displaySkills.map((skill, idx) => (
                      <div
                        key={`s1-${skill.name}-${idx}`}
                        className="skill-card"
                      >
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ));
                  })()}
                  {/* Second set (exact duplicate for seamless loop) */}
                  {(() => {
                    const minItems = 16;
                    let displaySkills = [...filtered];
                    if (displaySkills.length > 0) {
                      while (displaySkills.length < minItems) {
                        displaySkills = [...displaySkills, ...filtered];
                      }
                    }
                    return displaySkills.map((skill, idx) => (
                      <div
                        key={`s2-${skill.name}-${idx}`}
                        className="skill-card"
                      >
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ));
                  })()}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
