"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FileText, ArrowDown } from "lucide-react";

const roles = [
  "ECE Student @ NEC",
  "Metadata & Data Analyst",
  "Full-Stack Developer",
  "AI Systems Explorer",
  "IEEE Member",
];

function TypingRoleRotator() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < role.length) {
      timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === role.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <span className="text-[#5b7fff] terminal-text">
      {displayed}
      <span className="blink">|</span>
    </span>
  );
}

// Removed ParticleCanvas for a cleaner, minimal look

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.7 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Subtle top glow instead of radial center glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-[100%] bg-white/[0.03] blur-[80px] pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-6 max-w-6xl"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#888] border border-white/[0.08] rounded-full px-4 py-1.5 bg-white/[0.02]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
              </span>
              Based in Andhra Pradesh, India
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-4"
          >
            Veerababu J.
          </motion.h1>

          {/* Rotating role */}
          <motion.div
            variants={item}
            className="text-lg md:text-xl font-medium text-[#888] h-8 mb-6 flex items-center"
          >
            <TypingRoleRotator />
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-[#888] max-w-2xl leading-relaxed mb-10"
          >
            ECE student exploring intelligent systems, scalable software, and
            next-generation semiconductor technologies. Currently preparing for
            elite roles in AI chip design, systems engineering, and high-scale
            software infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href="#contact"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-[#e2e2e2] transition-colors flex items-center gap-2"
            >
              <FiMail className="w-4 h-4" />
              Get in touch
            </Link>
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm font-medium text-[#ccc] hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/veerababu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm font-medium text-[#ccc] hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2"
            >
              <FiLinkedin className="w-4 h-4" />
              LinkedIn
            </Link>
            <Link
              href="#"
              className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm font-medium text-[#ccc] hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 border-t border-white/[0.06] pt-8"
          >
            {[
              { label: "Tech Reach", value: "100K+" },
              { label: "Internships", value: "5" },
              { label: "Certifications", value: "15+" },
              { label: "IEEE Member", value: "✓" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-medium text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-[#666] mt-0.5 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to explore</span>
        <ArrowDown className="w-3 h-3" />
      </motion.div>
    </section>
  );
}
