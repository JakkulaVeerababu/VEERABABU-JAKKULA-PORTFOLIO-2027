"use client";

import { motion, Variants } from "framer-motion";


const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
  { name: "AWS Cloud Technical Essentials", issuer: "AWS" },
  { name: "DevOps on AWS: Code Build Test", issuer: "AWS" },
  { name: "DevOps on AWS: Release and Deploy", issuer: "AWS" },
  { name: "DevOps on AWS: Operate and Monitor", issuer: "AWS" },
  { name: "Introduction to Machine Learning on AWS", issuer: "AWS" },
  { name: "Google AI for Anyone", issuer: "Google" },
  { name: "AI Chatbots without Programming", issuer: "IBM" },
  { name: "Introduction to Prompt Engineering", issuer: "IBM" },
  { name: "Prompt Engineering", issuer: "Vanderbilt University" },
  { name: "Computer Science 101", issuer: "Stanford" },
  { name: "Software Engineering Basics for Everyone", issuer: "IBM" },
  { name: "Introduction to Web Development with HTML5 CSS3 and JS", issuer: "IBM" },
  { name: "Django Application Development with SQL and Databases", issuer: "IBM" },
  { name: "Introduction to Cloud Computing", issuer: "IBM" }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};


export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <div className="divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="cert-grid reveal"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card cert-card"
            >
              <div className="cert-issuer text-cyan-500 font-mono text-[10px] tracking-wider uppercase font-bold">
                {cert.issuer}
              </div>
              <h3 className="cert-title">{cert.name}</h3>
              <div className="cert-desc">Verified Coursework</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
