"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FileText, ChevronRight, Sparkles } from "lucide-react";

const roles = [
  "AI Systems Explorer",
  "Full-Stack Developer",
  "Metadata Analyst",
  "ECE Engineer",
];

function FadeRoleRotator() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-8 overflow-hidden inline-block min-w-[250px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={roleIdx}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 font-medium text-gradient-accent text-xl md:text-2xl"
        >
          {roles[roleIdx]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
      {/* Background glowing orb */}
      <div className="absolute right-[10%] top-[20%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_60%)] blur-[60px] pointer-events-none z-[-1]" />
      <div className="absolute right-[20%] top-[40%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_60%)] blur-[60px] pointer-events-none z-[-1]" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-16"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 max-w-2xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-zinc-400 border border-white/10 rounded-full px-4 py-1.5 glass-card shadow-lg shadow-purple-500/5">
              <Sparkles className="w-3.5 h-3.5 text-[#00f5ff]" />
              Crafting premium scalable systems
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Building the next <br />
            generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#00f5ff]">software.</span>
          </motion.h1>

          <motion.div variants={item} className="text-xl md:text-2xl text-zinc-400 mb-8 flex items-center gap-2">
            I'm Veerababu, a <FadeRoleRotator />
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10"
          >
            An engineer bridging the gap between scalable full-stack applications and low-level AI systems. I design and build highly optimized, production-ready software with a deep focus on architecture, performance, and premium user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]"
            >
              Start a project
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full glass-card hover:bg-white/5 text-sm font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/veerababu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full glass-card hover:bg-white/5 text-sm font-medium text-zinc-300 hover:text-white transition-all flex items-center gap-2"
            >
              <FiLinkedin className="w-4 h-4" />
              LinkedIn
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4"
          >
            {[
              { label: "Tech Reach", value: "100K+" },
              { label: "Internships", value: "5" },
              { label: "Certifications", value: "15+" },
              { label: "IEEE Member", value: "Yes" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card px-5 py-4 min-w-[130px] flex-1">
                <div className="text-2xl font-bold text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden lg:block flex-1 relative perspective-1000"
          style={{ perspective: "1000px" }}
        >
          <div 
            className="relative w-full max-w-md mx-auto aspect-[4/5] glass-card overflow-hidden group shadow-2xl border-white/10"
            style={{ transformStyle: "preserve-3d", transform: "rotateY(-5deg) rotateX(5deg)" }}
          >
            {/* Animated internal gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-[#00f5ff]/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <motion.div 
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_50%)] bg-[length:200%_200%]"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="glass px-4 py-3 rounded-xl border border-white/10 inline-block w-fit mb-4">
                <div className="text-xs text-[#00f5ff] font-mono mb-1">Status</div>
                <div className="text-sm font-medium text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for new roles
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Systems & AI</h3>
              <p className="text-zinc-400 text-sm">Passionate about low-level optimization and high-level architectural design.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
