"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiAward, FiStar, FiMaximize2, FiX, FiExternalLink } from "react-icons/fi";

interface Achievement {
  badge: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  featured?: boolean;
  images?: string[];
  doc?: string;
}

const achievements: Achievement[] = [
  {
    badge: "Hack2Skill",
    title: "BUILDATHON 2025",
    desc: "Dreamflow AI Project - Built dream flow builder tools utilizing Flutter and Dreamflow under Hack2Skill builder guidelines.",
    icon: <FiAward />,
    featured: true,
  },
  {
    badge: "AI Innovator",
    title: "AMD Slingshot Hackathon",
    desc: "Designed systems blending human imagination with hardware-accelerated AI models.",
    icon: <FiAward />,
    featured: true,
  },
  {
    badge: "Google Cloud",
    title: "Google Big Code Challenge 2026",
    desc: "Successfully cleared the Qualifier Round and Round 1, competing in large-scale algorithmic and coding structures.",
    icon: <FiAward />,
    featured: true,
  },
  {
    badge: "AWS & H2S",
    title: "AI for Bharat Hackathon",
    desc: "Developed local AI applications leveraging cloud infrastructure and advanced engineering models by AWS and Hack2Skill.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Buildathon",
    title: "Build with Medo Hackathon",
    desc: "Successfully built and shipped optimized web platforms in a fast-paced development sprint.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "DevSecOps",
    title: "GitLab AI Hackathon",
    desc: "Built productivity tools leveraging GitLab Duo APIs and automated pipeline triggers.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Google AI",
    title: "Gemini 3 Hackathon",
    desc: "Developed intelligent workflows using Google Gemini multi-modal Flash models.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Global Virtual",
    title: "Global Virtual Hackathon",
    desc: "Built high-performance local compilation and coding logic with Claude Code running on Opus 4.7.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "IBM Cloud",
    title: "IBM Dev Day AI Demystified",
    desc: "Explored enterprise cognitive solutions, Watson Assistant APIs, and cloud-native services.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "AMD Hardware",
    title: "AMD Slingshot Innovator",
    desc: "Implemented local execution pipelines optimizing inference for visual generative AI.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Local AI",
    title: "Deepseek vs Llama: The Kill the Cloud Challenge",
    desc: "Optimized offline local LLMs to run at high tokens-per-second, bypassing cloud cost structures.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Mobile Dev",
    title: "Built Your Flutter Butler with Serverpod",
    desc: "Constructed high-speed responsive mobile applications with automated backend code generators.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "XR / Creator",
    title: "Meta Horizon Creator Completion",
    desc: "Elevating mobile worlds with advanced immersive UX paradigms and virtual spaces.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "AWS Cloud",
    title: "AWS Lambda Hackathon",
    desc: "Constructed highly scalable serverless backends deploying API triggers and data storage queues.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Bolt.new",
    title: "World's Largest Hackathon",
    desc: "Rapidly bootstrapped full-stack production sites using next-gen instant deployment architectures.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Ideathon",
    title: "AI-Driven Learning Tools Ideathon",
    desc: "Pitched automated curriculum alignment systems and personalized pedagogical maps.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Google Devs",
    title: "Prompt Wars",
    desc: "Completed advanced generative prompt engineering pipelines using Google AI developer tools.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Google Devs",
    title: "Solution Challenge 2026",
    desc: "Built with AI systems to address local community challenges under Google guidelines.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Generative",
    title: "GenAI Exchange Hackathon",
    desc: "Engineered scalable vector indexing workflows for custom corporate knowledge bases.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Surge AI",
    title: "AI Agent Olympics Hackathon",
    desc: "Constructed multi-agent clusters using surge, AI Week, Vultr, Google AI Studio, Gemini, and Speechmatics APIs.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Namespace",
    title: "Hackhazards 2026",
    desc: "Participated in designing developer utilities and real-time infrastructure templates.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Meta & Scalar",
    title: "India's Biggest AI Hackathon",
    desc: "Co-created large language model interfaces at the Scalar School of Technology campus.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "Economic Times",
    title: "The Economic Times AI Hackathons",
    desc: "Presented enterprise-focused AI solutions solving commercial finance bottlenecks.",
    icon: <FiStar />,
    featured: false,
  },
  {
    badge: "AMD Cloud",
    title: "AMD Developer Hackathon",
    desc: "Built high-performance AI agents and optimized inference engines on cloud AMD GPUs.",
    icon: <FiStar />,
    featured: false,
  }
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
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Competitions</div>
          <h2 className="section-title">Achievements & Hackathons</h2>
          <div className="section-divider" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="matrix-grid reveal"
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              variants={card}
              className={`matrix-card p-5 border border-black/5 hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all flex flex-col justify-between ${ach.featured ? "shadow-md bg-white/70" : "bg-white/40"}`}
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              {/* Header */}
              <div className="matrix-header flex justify-between items-center mb-4 gap-2">
                <span className="matrix-category font-mono text-[10px] text-indigo-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">{ach.badge}</span>
                {ach.featured ? (
                  <span className="inline-block bg-emerald-500/90 border border-emerald-400/50 text-white font-bold rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-wider shadow-sm">WINNER</span>
                ) : (
                  <span className="inline-block bg-slate-200/90 border border-slate-300/50 text-slate-700 font-bold rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider">FINALIST</span>
                )}
              </div>

              <h3 className="matrix-title text-sm font-bold text-slate-800 tracking-tight mb-2">{ach.title}</h3>
              <p className="matrix-issuer text-slate-600 leading-relaxed text-xs mb-4 flex-grow">{ach.desc}</p>

              {/* Images */}
              {ach.images && (
                <div className={`ach-images gap-2 flex mb-4${ach.images.length > 1 ? " cols-2" : ""}`}>
                  {ach.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="ach-img-wrap relative cursor-zoom-in rounded overflow-hidden shadow-sm"
                      onClick={() => setLightbox(img)}
                    >
                      <img src={img} alt={`${ach.title} image ${idx + 1}`} className="w-full h-16 object-cover" />
                      <div className="ach-img-overlay absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <FiMaximize2 className="ach-img-zoom-icon text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* PDF */}
              {ach.doc && (
                <div className="mt-4 pt-4 border-t border-black/5 flex justify-between items-center">
                  <span className="pdf-label font-mono text-[9px] text-slate-500 font-bold uppercase tracking-wider">Proof Node</span>
                  <a
                    href={ach.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-open-btn flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors active:scale-95"
                  >
                    <FiExternalLink size={12} /> View PDF Proof
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
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
