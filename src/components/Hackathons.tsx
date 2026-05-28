"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiAward, FiStar, FiMaximize2, FiFileText } from "react-icons/fi";

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
    docLabel: "View Regional Shortlist PDF",
  },
  {
    badge: "AWS Cloud",
    title: "AWS AI for Bharat Hackathon",
    desc: "Participated and built local-language LLM orchestration agents utilizing AWS Bedrock, Lambda functions, and DynamoDB.",
    icon: <FiStar />,
    featured: false,
    doc: "/docs/ai-for-bharat-hackathon.pdf",
    docLabel: "View Adaptive Copilot PDF",
  },
  {
    badge: "Buildathon",
    title: "BUILDATHON 2025 by Hack2Skill",
    desc: "Successfully built, shipped, and received official recognition at Buildathon 2025, deploying end-to-end full-stack web tools.",
    icon: <FiAward />,
    featured: true,
    doc: "/docs/buildathon-2025.pdf",
    docLabel: "View Recognition Certificate",
  },
  {
    badge: "AMD Hardware",
    title: "AMD AI Hackathon",
    desc: "Developed local model acceleration pipelines leveraging AMD hardware, optimizing inference latency for image generation.",
    icon: <FiStar />,
    featured: false,
    images: ["/amd-slingshot.png"],
    doc: "/docs/amd-slingshot-hackathon.pdf",
    docLabel: "View Submission Details",
  },
  {
    badge: "IBM Developer",
    title: "IBM Dev Day Hackathon",
    desc: "Participated in the IBM Dev Day Hackathon, building cloud applications and using enterprise APIs.",
    icon: <FiStar />,
    featured: false,
    doc: "/docs/ibm-dev-day-hackathon.pdf",
    docLabel: "View Participation PDF",
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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hackathons() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="achievements">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Competitions</div>
          <h2 className="section-title">Achievements &amp; Hackathons</h2>
          <div className="divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="ach-grid reveal"
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`glass-card ach-card flex flex-col justify-between ${
                ach.featured ? "border-cyan-400/30 shadow-cyan-400/5 md:col-span-2 bg-cyan-50/5" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="ach-badge">{ach.badge}</span>
                    {ach.featured && (
                      <span className="text-[8px] font-bold text-cyan-600 bg-cyan-500/10 px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                        Priority
                      </span>
                    )}
                  </div>
                  <span className="text-cyan-500 text-lg">{ach.icon}</span>
                </div>
                <h3 className="ach-title">{ach.title}</h3>
                <p className="ach-desc">{ach.desc}</p>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {ach.images && (
                  <div className={`grid gap-3 ${
                    ach.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                  }`}>
                    {ach.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedImage(img)}
                        className={`relative overflow-hidden rounded-lg border border-gray-200/50 bg-[#fafafa] group/img cursor-zoom-in ${
                          ach.images.length === 1 ? "h-[180px]" : "h-[140px] sm:h-[160px]"
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`${ach.title} asset ${idx + 1}`}
                          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/img:scale-102"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-all flex items-center justify-center">
                          <FiMaximize2 className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 p-1.5 rounded-full w-8 h-8" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {ach.doc && (
                  <div className="w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-gray-200/50 bg-[#fafafa]">
                    <iframe 
                      src={ach.doc} 
                      className="w-full h-full border-none" 
                      title={`${ach.title} PDF`}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#121314]/75 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-white p-1.5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg" 
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 transition-all border-none cursor-pointer text-xs"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

