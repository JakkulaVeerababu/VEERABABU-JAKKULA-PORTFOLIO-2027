"use client";

import { motion, Variants } from "framer-motion";


const certifications = [
  { 
    name: "Google Data Analytics Professional Certificate", 
    issuer: "Google", 
    doc: "/docs/google-certified-data-analyst.pdf",
    featured: true 
  },
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
              className={`glass-card cert-card flex flex-col justify-between ${
                cert.featured ? "border-cyan-400/30 shadow-cyan-400/5 bg-cyan-50/5" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="cert-issuer text-cyan-500 font-mono text-[10px] tracking-wider uppercase font-bold">
                    {cert.issuer}
                  </div>
                  {cert.featured && (
                    <span className="text-[8px] font-bold text-cyan-600 bg-cyan-500/10 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="cert-title mt-2">{cert.name}</h3>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100/50">
                <span className="cert-desc m-0">Verified Coursework</span>
                {cert.doc && (
                  <a
                    href={cert.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-bold text-cyan-600 hover:text-cyan-700 font-mono cursor-pointer"
                  >
                    View PDF
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
