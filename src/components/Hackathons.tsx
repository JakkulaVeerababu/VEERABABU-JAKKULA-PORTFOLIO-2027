"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiAward, FiStar, FiMaximize2, FiX, FiExternalLink } from "react-icons/fi";

const achievements = [
  {
    badge: "National Round",
    title: "Google Big Code Challenge 2026",
    desc: "Cleared the Qualifier Round and Round 1, competing at a national scale in structural coding and algorithmic puzzles.",
    icon: <FiAward />,
    featured: true,
    images: ["/google-big-code-banner.png", "/google-big-code-email.png"],
  },
  {
    badge: "Regional Ideathon",
    title: "AMD Slingshot Regional Ideathon 2026",
    desc: "Shortlisted for the regional level of the AMD Slingshot Ideathon in Hyderabad, pitching system accelerators and IoT designs.",
    icon: <FiAward />,
    featured: true,
    doc: "/docs/amd-slingshot-ideathon.pdf",
    img: "/IMGS/amd-slingshot-ideathon_preview.png",
  },
  {
    badge: "AWS Cloud",
    title: "AWS AI for Bharat Hackathon",
    desc: "Participated and built local-language LLM orchestration agents utilizing AWS Bedrock, Lambda functions, and DynamoDB.",
    icon: <FiStar />,
    featured: false,
    doc: "/docs/ai-for-bharat-hackathon.pdf",
    img: "/IMGS/ai-for-bharat-hackathon_preview.png",
  },
  {
    badge: "Buildathon",
    title: "BUILDATHON 2025 by Hack2Skill",
    desc: "Successfully built, shipped, and received official recognition at Buildathon 2025, deploying end-to-end full-stack web tools.",
    icon: <FiAward />,
    featured: true,
    doc: "/docs/buildathon-2025.pdf",
    img: "/IMGS/buildathon-2025_preview.png",
  },
  {
    badge: "AMD Hardware",
    title: "AMD AI Hackathon",
    desc: "Developed local model acceleration pipelines leveraging AMD hardware, optimizing inference latency for image generation.",
    icon: <FiStar />,
    featured: false,
    images: ["/amd-slingshot.png"],
    doc: "/docs/amd-slingshot-hackathon.pdf",
    img: "/IMGS/amd-slingshot-hackathon_preview.png",
  },
  {
    badge: "IBM Developer",
    title: "IBM Dev Day Hackathon",
    desc: "Participated in the IBM Dev Day Hackathon, building cloud applications and using enterprise APIs.",
    icon: <FiStar />,
    featured: false,
    doc: "/docs/ibm-dev-day-hackathon.pdf",
    img: "/IMGS/ibm-dev-day-hackathon_preview.png",
  },
  {
    badge: "GitLab DevSecOps",
    title: "GitLab AI Hackathon",
    desc: "Participated in designing developer productivity tools using GitLab Duo APIs and automated CI/CD pipeline triggers.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Google AI",
    title: "Gemini 3 Hackathon",
    desc: "Built prototype applications using multi-modal Gemini Flash and Pro APIs, demonstrating real-time structured data parsing.",
    icon: <FiStar />,
    featured: false,
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hackathons() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="achievements">
      <style>{`
        .ach-marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          padding: 1.5rem 0;
        }
        .ach-marquee-container::before {
          content: "";
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 80px;
          background: linear-gradient(to right, var(--bg-pure) 0%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }
        .ach-marquee-container::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0; right: 0;
          width: 80px;
          background: linear-gradient(to left, var(--bg-pure) 0%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }
        .ach-marquee-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          animation: marquee-scroll 45s linear infinite;
        }
        .ach-marquee-item {
          flex: 0 0 355px;
          max-width: 90vw;
          display: flex;
          flex-direction: column;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.625rem));
          }
        }
        @media (max-width: 600px) {
          .ach-marquee-item {
            flex: 0 0 305px;
          }
        }
      `}</style>

      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Competitions</div>
          <h2 className="section-title">Achievements & Hackathons</h2>
          <div className="section-divider" />
        </div>

        <div className="ach-marquee-container reveal">
          <div className="ach-marquee-track">
            {/* Copy 1 of achievements */}
            {achievements.map((ach, i) => (
              <div
                key={`ach-1-${i}`}
                className={`ach-card ach-marquee-item${ach.featured ? " featured" : ""}`}
              >
                {/* Header */}
                <div className="ach-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className="ach-badge">{ach.badge}</span>
                    {ach.featured && <span className="ach-priority">Priority</span>}
                  </div>
                  <span className="ach-icon">{ach.icon}</span>
                </div>

                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-desc">{ach.desc}</p>

                {/* Images */}
                {ach.images && (
                  <div className={`ach-images${ach.images.length > 1 ? " cols-2" : ""}`}>
                    {ach.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="ach-img-wrap"
                        onClick={() => setLightbox(img)}
                      >
                        <img src={img} alt={`${ach.title} image ${idx + 1}`} />
                        <div className="ach-img-overlay">
                          <FiMaximize2 className="ach-img-zoom-icon" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PDF */}
                {ach.doc && ach.img && (
                  <div className="pdf-block" style={{ marginTop: "auto" }}>
                    <div className="pdf-frame" style={{ overflow: "hidden", height: "200px" }}>
                      <img
                        src={ach.img}
                        alt={`${ach.title} certificate preview`}
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
                        href={ach.doc}
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
              </div>
            ))}

            {/* Copy 2 of achievements (for seamless scroll loop) */}
            {achievements.map((ach, i) => (
              <div
                key={`ach-2-${i}`}
                className={`ach-card ach-marquee-item${ach.featured ? " featured" : ""}`}
              >
                {/* Header */}
                <div className="ach-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className="ach-badge">{ach.badge}</span>
                    {ach.featured && <span className="ach-priority">Priority</span>}
                  </div>
                  <span className="ach-icon">{ach.icon}</span>
                </div>

                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-desc">{ach.desc}</p>

                {/* Images */}
                {ach.images && (
                  <div className={`ach-images${ach.images.length > 1 ? " cols-2" : ""}`}>
                    {ach.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="ach-img-wrap"
                        onClick={() => setLightbox(img)}
                      >
                        <img src={img} alt={`${ach.title} image ${idx + 1}`} />
                        <div className="ach-img-overlay">
                          <FiMaximize2 className="ach-img-zoom-icon" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* PDF */}
                {ach.doc && ach.img && (
                  <div className="pdf-block" style={{ marginTop: "auto" }}>
                    <div className="pdf-frame" style={{ overflow: "hidden", height: "200px" }}>
                      <img
                        src={ach.img}
                        alt={`${ach.title} certificate preview`}
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
                        href={ach.doc}
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-inner"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox} alt="Enlarged view" />
              <button className="lightbox-close" onClick={() => setLightbox(null)}>
                <FiX size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
