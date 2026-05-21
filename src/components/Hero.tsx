"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ChevronRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.8 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Subtle ambient light behind hero, neutral color */}
      <div className="absolute right-[15%] top-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] blur-[60px] pointer-events-none z-[-1]" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row items-center gap-20"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 max-w-2xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-wider uppercase text-zinc-400 border border-white/10 rounded-full px-3 py-1 bg-white/[0.02] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
              Available for roles
            </span>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            variants={item}
            className="text-[3rem] md:text-[4.5rem] font-medium tracking-tight text-white leading-[1.05] mb-6"
          >
            Engineering scalable <br />
            software <span className="text-zinc-500">&</span> systems.
          </motion.h1>

          <motion.div variants={item} className="text-xl md:text-2xl text-zinc-300 font-medium tracking-tight mb-6">
            VEERABABU JAKKULA
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-base text-zinc-400 max-w-lg leading-relaxed mb-10"
          >
            I design and build production-ready applications with a focus on architecture, performance, and low-level system optimization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="#contact"
              className="h-11 px-6 rounded-full bg-white text-black text-[13px] font-semibold flex items-center justify-center gap-2 transition-all hover:bg-zinc-200"
            >
              Start a project
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </Link>
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-[13px] font-medium text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/veerababu/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-[13px] font-medium text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <FiLinkedin className="w-4 h-4" />
              LinkedIn
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 border-t border-white/5 pt-8"
          >
            {[
              { label: "Tech Reach", value: "100K+" },
              { label: "Internships", value: "8+" },
              { label: "Certifications", value: "80+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="text-xl font-semibold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side visual element - SaaS Metrics / Architecture Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden lg:block flex-1 w-full max-w-md"
        >
          <div className="glass-card p-6 flex flex-col gap-6 relative overflow-hidden group">
            {/* Subtle internal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span className="text-xs font-mono text-zinc-400">sys_architecture.json</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500">Live</span>
            </div>

            <div className="space-y-5">
              {[
                { label: "Throughput", val: "12,450 req/s", bar: "w-[85%]" },
                { label: "Latency (p99)", val: "42ms", bar: "w-[20%]" },
                { label: "Error Rate", val: "0.01%", bar: "w-[5%]" },
              ].map((metric, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-zinc-400">{metric.label}</span>
                    <span className="text-white font-mono">{metric.val}</span>
                  </div>
                  <div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className={`h-full bg-zinc-400 rounded-full ${metric.bar}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Node Status</span>
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Healthy
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Uptime</span>
                <span className="text-sm font-medium text-white font-mono">99.99%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
