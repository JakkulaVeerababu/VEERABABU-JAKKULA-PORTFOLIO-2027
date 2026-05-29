"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";

const categories = [
  {
    title: "Data & Analytics",
    color: "var(--accent)",
    borderClass: "border-t-2 border-t-[#adc6ff]",
    items: [
      { name: "Google Data Analytics Professional", issuer: "Google", doc: "/docs/google-certified-data-analyst.pdf", featured: true },
      { name: "Django & SQL Databases", issuer: "IBM" },
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "var(--secondary)",
    borderClass: "border-t-2 border-t-[#4edea3]",
    items: [
      { name: "Prompt Engineering Essentials", issuer: "Vanderbilt University" },
      { name: "Introduction to Machine Learning", issuer: "AWS" },
      { name: "Google AI for Anyone", issuer: "Google" },
      { name: "AI Chatbots & Semantic Flows", issuer: "IBM" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "var(--tertiary)",
    borderClass: "border-t-2 border-t-[#ffb786]",
    items: [
      { name: "DevOps on AWS: Build & Test", issuer: "AWS" },
      { name: "DevOps on AWS: Release & Deploy", issuer: "AWS" },
      { name: "DevOps on AWS: Operate & Monitor", issuer: "AWS" },
      { name: "Introduction to Cloud Computing", issuer: "IBM" },
    ],
  },
  {
    title: "Systems & Web Labs",
    color: "var(--text-primary)",
    borderClass: "border-t-2 border-t-[#dae2fd]",
    items: [
      { name: "Computer Science 101 Labs", issuer: "Stanford University" },
      { name: "Web Development HTML5/CSS3/JS", issuer: "IBM" },
      { name: "Software Engineering Basics", issuer: "IBM" },
    ],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "var(--bg-canvas)", borderBottom: "1px solid var(--border-subtle)", padding: "6rem 1.5rem" }}>
      <div className="container mx-auto max-w-[1100px]">
        <div className="reveal section-header mb-12">
          <div className="section-eyebrow">Credentials</div>
          <h2 className="section-title">Technical Certifications</h2>
          <div className="section-divider" style={{ background: "var(--accent)" }} />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 reveal"
        >
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-5">
              {/* Category Header */}
              <div className={`pb-2 border-b border-stone-900/10 ${cat.borderClass}`}>
                <h3 className="font-semibold text-xs uppercase tracking-wider mt-2" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              {/* Category Cards */}
              <div className="flex flex-col gap-4">
                {cat.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardAnim}
                    className="p-4 bg-surface-container rounded-lg border border-stone-900/5 transition-all duration-200 hover:bg-[rgba(0,0,0,0.02)] hover:scale-[1.01] hover:border-[rgba(0,0,0,0.08)] cursor-pointer"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.35)", borderColor: "var(--border-subtle)" }}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                        {item.issuer}
                      </span>
                      {item.featured && (
                        <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded" style={{ backgroundColor: "var(--accent-pale)", color: "var(--accent)" }}>
                          Featured
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-semibold leading-relaxed mb-3" style={{ color: "var(--text-primary)" }}>
                      {item.name}
                    </h4>

                    {item.doc && (
                      <div className="border-t border-white/5 pt-2 flex justify-between items-center">
                        <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Creds</span>
                        <a
                          href={item.doc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider hover:underline"
                          style={{ color: "var(--accent)" }}
                        >
                          <FiExternalLink /> Verify PDF
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
