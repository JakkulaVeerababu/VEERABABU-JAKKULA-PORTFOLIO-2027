"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Web Development with HTML5, CSS3 & JavaScript",
    issuer: "edX Verified",
    category: "Frontend",
    color: "#7eb2ff",
    year: "2025",
  },
  {
    title: "Visualizing Data with R",
    issuer: "edX / Statistics",
    category: "Data Science",
    color: "#45d4a8",
    year: "2025",
  },
  {
    title: "AI Chatbots without Programming",
    issuer: "edX",
    category: "AI",
    color: "#e878fa",
    year: "2025",
  },
  {
    title: "Computer Science 101",
    issuer: "Stanford / edX",
    category: "CS Fundamentals",
    color: "#9b59ff",
    year: "2024",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    category: "Analytics",
    color: "#45d4a8",
    year: "2025",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "IBM Developer",
    category: "AI/ML",
    color: "#5b7fff",
    year: "2025",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "IBM",
    category: "Deep Learning",
    color: "#e878fa",
    year: "2025",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    category: "Cloud",
    color: "#f5a623",
    year: "2025",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    category: "Analytics",
    color: "#4ade80",
    year: "2025",
  },
  {
    title: "Python for Data Science",
    issuer: "MIT OpenCourseWare",
    category: "Python",
    color: "#7eb2ff",
    year: "2024",
  },
  {
    title: "Introduction to VLSI Design",
    issuer: "NPTEL",
    category: "ECE / Hardware",
    color: "#f5a623",
    year: "2025",
  },
  {
    title: "SQL and Relational Databases",
    issuer: "IBM SkillsBuild",
    category: "Databases",
    color: "#45d4a8",
    year: "2024",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Certifications</h2>
            <div className="line" />
          </div>

          <p className="text-[#666] text-sm font-mono mb-10 -mt-4">
            <span className="text-[#5b7fff]">15+</span> verified certifications across AI, systems, cloud, and analytics
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {certs.map((cert) => (
              <motion.div
                key={cert.title}
                variants={cardAnim}
                className="cert-card glass-card p-5 group cursor-default"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className="w-1.5 h-full min-h-[3rem] rounded-full flex-shrink-0"
                    style={{ backgroundColor: cert.color, opacity: 0.7 }}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[10px] font-mono tracking-wider mb-1 uppercase"
                      style={{ color: cert.color }}
                    >
                      {cert.category}
                    </p>
                    <h3 className="text-[13px] font-semibold text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#333] group-hover:text-[#5b7fff] transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center justify-between pl-3">
                  <span className="text-[11px] text-[#666]">{cert.issuer}</span>
                  <span className="text-[10px] font-mono text-[#444]">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
