"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    doc: "/docs/google-certified-data-analyst.pdf",
    featured: true,
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
  {
    name: "Introduction to Web Development with HTML5, CSS3 and JS",
    issuer: "IBM",
  },
  {
    name: "Django Application Development with SQL and Databases",
    issuer: "IBM",
  },
  { name: "Introduction to Cloud Computing", issuer: "IBM" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="cert-grid reveal"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`cert-card${cert.featured ? " featured" : ""}`}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="cert-issuer">{cert.issuer}</span>
                {cert.featured && <span className="cert-badge">Featured</span>}
              </div>

              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-sub">Verified Coursework</p>

              {cert.doc && (
                <div className="pdf-block">
                  <div className="pdf-frame">
                    <iframe
                      src={`${cert.doc}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title={`${cert.name} certificate`}
                    />
                  </div>
                  <div className="pdf-footer">
                    <span className="pdf-label">Official Certificate</span>
                    <a
                      href={cert.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-open-btn"
                    >
                      <FiExternalLink size={12} /> Open Full PDF
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
