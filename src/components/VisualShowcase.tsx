"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiImage, FiFileText, FiMaximize2, FiX, FiExternalLink, FiLayers } from "react-icons/fi";
import mediaData from "../data/mediaAssets.json";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function VisualShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "images" | "pdfs">("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredImages = mediaData.images;
  const filteredPdfs = mediaData.docs;

  return (
    <section id="gallery" style={{ borderTop: "1px solid var(--border-subtle)", background: "transparent" }}>
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Evidence</div>
          <h2 className="section-title">Credentials & Media Gallery</h2>
          <div className="section-divider" />
          <p className="section-sub">
            Verified documentation, selection emails, and visual proof of hackathons, internships, and certifications.
          </p>
        </div>

        {/* Tab Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "35px" }} className="reveal">
          <button
            onClick={() => setActiveTab("all")}
            className={`btn-outline ${activeTab === "all" ? "active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 18px", fontSize: "14px", borderRadius: "99px" }}
          >
            <FiLayers size={14} /> All Assets ({filteredImages.length + filteredPdfs.length})
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`btn-outline ${activeTab === "images" ? "active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 18px", fontSize: "14px", borderRadius: "99px" }}
          >
            <FiImage size={14} /> Images & Badges ({filteredImages.length})
          </button>
          <button
            onClick={() => setActiveTab("pdfs")}
            className={`btn-outline ${activeTab === "pdfs" ? "active" : ""}`}
            style={{ display: "flex", alignItems: "center", gap: "8px", height: "44px", padding: "0 18px", fontSize: "14px", borderRadius: "99px" }}
          >
            <FiFileText size={14} /> PDFs ({filteredPdfs.length})
          </button>
        </div>

        {/* Grid Area */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="ach-grid reveal"
          key={activeTab}
        >
          {/* Images / Screenshots Grid */}
          {(activeTab === "all" || activeTab === "images") &&
            filteredImages.map((img, i) => {
              const getBadgeText = (name: string) => {
                if (name.toLowerCase().includes("certificate")) return "Certificate";
                if (name.toLowerCase().includes("badge")) return "Badge";
                if (name.toLowerCase().includes("email")) return "Email Notification";
                if (name.toLowerCase().includes("banner")) return "Banner";
                if (name.toLowerCase().includes("letter")) return "Official Letter";
                if (name.toLowerCase().includes("structure") || name.toLowerCase().includes("directory")) return "Project Preview";
                return "Verification Proof";
              };
              return (
                <motion.div
                  key={`img-${i}`}
                  variants={card}
                  className="ach-card"
                  style={{ padding: "1rem" }}
                >
                  <div className="ach-header" style={{ marginBottom: "0.5rem" }}>
                    <span className="ach-badge" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <FiImage size={10} /> {getBadgeText(img.name)}
                    </span>
                  </div>
                  <h3 className="ach-title" style={{ fontSize: "0.8rem", marginBottom: "0.75rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {img.name}
                  </h3>
                  <div className="ach-img-wrap" onClick={() => setLightbox(img.path)} style={{ height: "140px" }}>
                    <img
                      src={encodeURI(img.path)}
                      alt={img.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", padding: 0 }}
                    />
                    <div className="ach-img-overlay">
                      <FiMaximize2 className="ach-img-zoom-icon" />
                    </div>
                  </div>
                </motion.div>
              );
            })}

          {/* PDFs Grid */}
          {(activeTab === "all" || activeTab === "pdfs") &&
            filteredPdfs.map((pdf, i) => (
              <motion.div
                key={`pdf-${i}`}
                variants={card}
                className="ach-card"
              >
                <div className="ach-header">
                  <span className="ach-badge" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <FiFileText size={10} /> PDF Document
                  </span>
                </div>
                <h3 className="ach-title" style={{ minHeight: "2.4rem" }}>
                  {pdf.name}
                </h3>
                <div className="pdf-block">
                  <div className="pdf-frame" style={{ height: "140px" }}>
                    <iframe
                      src={`${encodeURI(pdf.path)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title={`${pdf.name} Preview`}
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                  <div className="pdf-footer">
                    <span className="pdf-label">Verify Credentials</span>
                    <a
                      href={encodeURI(pdf.path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-open-btn"
                    >
                      <FiExternalLink size={12} /> Open Full PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={encodeURI(lightbox)} alt="Enlarged view" />
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
