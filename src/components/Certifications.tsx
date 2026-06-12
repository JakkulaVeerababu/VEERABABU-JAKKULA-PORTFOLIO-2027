"use client";

import { motion, Variants } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface CertificationItem {
  name: string;
  issuer: string;
  doc?: string;
  featured?: boolean;
}

const certifications: CertificationItem[] = [
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
  visible: { transition: { staggerChildren: 0.035 } },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="reveal section-header mb-16">
          <div className="section-eyebrow font-mono text-[10px] text-indigo-600 font-bold uppercase tracking-[0.2em] mb-2">
            Credentials
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Professional Certifications
          </h2>
          <div className="section-divider w-12 h-0.5 bg-indigo-600 mt-4 mb-6" />
          <p className="section-sub text-slate-500 max-w-[600px] leading-relaxed text-sm">
            Verified academic and industry coursework in cloud architectures, data analytics, artificial intelligence, and systems engineering.
          </p>
        </div>

        {/* Dynamic Matrix & Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-8 reveal"
        >
          
          {/* Featured Google Certification - Top Showcase Bento Card */}
          {certifications.filter(c => c.featured).map((cert, idx) => (
            <div 
              key={idx}
              className="bento-card w-full overflow-hidden border border-black/5 bg-white/65 backdrop-blur-2xl rounded-3xl shadow-lg group/main transition-all duration-300 hover:border-indigo-500/20 hover:shadow-xl"
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Banner Left */}
                <div className="lg:col-span-5 relative min-h-[220px] bg-slate-900 overflow-hidden flex flex-col justify-between p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/45 to-slate-900/90 z-0" />
                  
                  {/* Floating Elements */}
                  <div className="z-10 flex justify-between items-start">
                    <span className="bg-indigo-600/90 border border-indigo-400/50 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 shadow-md">
                      FEATURED CREDENTIAL
                    </span>
                    <SiGoogle className="text-white/40 text-3xl animate-pulse" />
                  </div>

                  <div className="z-10 mt-auto">
                    <h4 className="text-white font-bold text-xl md:text-2xl tracking-tight leading-snug mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-indigo-200/80 font-mono text-xs uppercase tracking-wider">
                      Verified Google Professional Node
                    </p>
                  </div>
                </div>

                {/* Details Content Right */}
                <div className="lg:col-span-7 p-8 flex flex-col justify-between bg-white/45">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-600 px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">// Coursework Verified</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Comprehensive professional training focusing on dataset cleaning, telemetry processing, SQL analysis pipelines, statistical visualization modeling, and strategic data-driven decision architectures.
                    </p>
                  </div>

                  {/* Integrated PDF Frame / Actions */}
                  {cert.doc && (
                    <div className="flex flex-col gap-4 border-t border-black/5 pt-6 mt-4">
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-wider">Verification Signature: OK</span>
                        <a
                          href={cert.doc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bento-btn-primary bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-indigo-500 shadow-md duration-300 ease-in-out transition-all flex items-center gap-2 active:scale-95"
                        >
                          <FiExternalLink /> Open Full PDF Certificate
                        </a>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}

          {/* Supporting Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {certifications.filter(c => !c.featured).map((cert, idx) => {
              const isGoogle = cert.issuer.toLowerCase().includes("google");
              const isAWS = cert.issuer.toLowerCase().includes("aws");
              const isIBM = cert.issuer.toLowerCase().includes("ibm");
              
              const badgeBg = isGoogle 
                ? "rgba(66, 133, 244, 0.08)" 
                : isAWS 
                  ? "rgba(255, 153, 0, 0.08)" 
                  : isIBM 
                    ? "rgba(9, 110, 180, 0.08)" 
                    : "rgba(99, 102, 241, 0.08)";
                    
              const badgeColor = isGoogle 
                ? "#4285F4" 
                : isAWS 
                  ? "#ff9900" 
                  : isIBM 
                    ? "#096eb4" 
                    : "#5c5ff1";

              const badgeBorder = isGoogle 
                ? "rgba(66, 133, 244, 0.15)" 
                : isAWS 
                  ? "rgba(255, 153, 0, 0.15)" 
                  : isIBM 
                    ? "rgba(9, 110, 180, 0.15)" 
                    : "rgba(99, 102, 241, 0.15)";

              return (
                <motion.div
                  key={idx}
                  variants={itemAnim}
                  className="matrix-card p-6 border border-black/5 hover:-translate-y-1 hover:shadow-lg bg-white/40 hover:bg-white/80 duration-300 ease-in-out transition-all flex flex-col justify-between shadow-md"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  <div className="flex-grow">
                    {/* Top Scaffolding Header */}
                    <div className="flex justify-between items-center mb-6 border-b border-black/5 pb-4">
                      <span 
                        className="font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border shadow-sm"
                        style={{ background: badgeBg, color: badgeColor, borderColor: badgeBorder }}
                      >
                        {cert.issuer}
                      </span>
                      <div className="text-slate-400/80">
                        {isGoogle && <SiGoogle className="text-base" />}
                        {isAWS && <FaAws className="text-base" />}
                        {isIBM && <FiAward className="text-base" />}
                        {!isGoogle && !isAWS && !isIBM && <FiAward className="text-base" />}
                      </div>
                    </div>

                    <h3 className="matrix-title text-sm font-bold text-slate-800 tracking-tight leading-snug mb-2 group-hover:text-indigo-600">
                      {cert.name}
                    </h3>
                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-wider mb-4">
                      Verified Coursework
                    </p>
                  </div>

                  {/* Actions / Telemetry link */}
                  {cert.doc && (
                    <div className="border-t border-black/5 pt-4 mt-4 flex justify-between items-center">
                      <span className="font-mono text-[9px] text-slate-400">STATUS: SIGNED</span>
                      <a
                        href={cert.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors active:scale-95"
                      >
                        <FiExternalLink /> Open PDF
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
