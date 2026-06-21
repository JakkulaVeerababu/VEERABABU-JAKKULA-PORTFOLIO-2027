"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    doc: "/docs/google-certified-data-analyst.pdf",
    img: "/IMGS/google-certified-data-analyst_preview.png",
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

              {cert.doc && cert.img && (
                <div className="pdf-block">
                  <div className="pdf-frame" style={{ overflow: "hidden" }}>
                    <img
                      src={cert.img}
                      alt={`${cert.name} certificate preview`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        background: "rgba(0, 0, 0, 0.4)",
                      }}
                    />
                  </div>
                  <div className="pdf-footer">
                    <span className="pdf-label">Certificate Preview</span>
                    <a
                      href={cert.doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-open-btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "var(--accent-pale, rgba(255, 255, 255, 0.08))",
                        padding: "6px 14px",
                        borderRadius: "99px",
                        border: "1px solid var(--border-subtle, rgba(255, 255, 255, 0.15))",
                        color: "var(--text-primary)",
                        fontSize: "12px",
                        fontWeight: 600,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <FiExternalLink size={12} /> PDF
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
