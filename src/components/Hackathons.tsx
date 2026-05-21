"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Cpu, Code2, Globe } from "lucide-react";

interface Hackathon {
  title: string;
  organizer: string;
  category: "AI & ML" | "Systems & Cloud" | "Mobile & Web";
  highlight?: string;
  color: string;
  year: string;
}

const hackathons: Hackathon[] = [
  {
    title: "Google Big Code Challenge 2026",
    organizer: "Google",
    category: "AI & ML",
    highlight: "Cleared Qualifier & Round 1",
    color: "#4ade80",
    year: "2026",
  },
  {
    title: "AI Agent Olympics Hackathon",
    organizer: "Surge, Google AI Studio, Gemini, Vultr, Speechmatics",
    category: "AI & ML",
    highlight: "Agent Builder",
    color: "#a78bfa",
    year: "2026",
  },
  {
    title: "AMD Developer Hackathon",
    organizer: "AMD (Build AI agents on AMD GPUs in the cloud)",
    category: "Systems & Cloud",
    highlight: "High Performance AI Agent",
    color: "#f5a623",
    year: "2026",
  },
  {
    title: "India's Biggest AI Hackathon",
    organizer: "Meta & Scalar School of Technology",
    category: "AI & ML",
    highlight: "AI Innovator",
    color: "#60a5fa",
    year: "2026",
  },
  {
    title: "AMD Slingshot Innovator Challenge",
    organizer: "AMD & Slingshot",
    category: "Systems & Cloud",
    highlight: "Innovator Award",
    color: "#f472b6",
    year: "2025",
  },
  {
    title: "Solution Challenge 2026",
    organizer: "Google for Developers",
    category: "AI & ML",
    highlight: "Build with AI",
    color: "#4ade80",
    year: "2026",
  },
  {
    title: "DeepSeek vs Llama: The Kill the Cloud Challenge",
    organizer: "Local LLM community & Systems Challenge",
    category: "Systems & Cloud",
    highlight: "On-Premises Specialist",
    color: "#7eb2ff",
    year: "2026",
  },
  {
    title: "BUILDATHON 2025 by Flutter & Dreamflow",
    organizer: "Hack2Skill & Dreamflow AI",
    category: "Mobile & Web",
    highlight: "Dreamflow AI Builder",
    color: "#e878fa",
    year: "2025",
  },
  {
    title: "Claude Code Build with Opus 4.7",
    organizer: "Anthropic Community",
    category: "AI & ML",
    highlight: "Agentic Developer",
    color: "#f472b6",
    year: "2026",
  },
  {
    title: "Global Virtual Hackathon",
    organizer: "Tech Community",
    category: "Mobile & Web",
    highlight: "Global Competitor",
    color: "#60a5fa",
    year: "2025",
  },
  {
    title: "IBM Dev Day: AI Demystified",
    organizer: "IBM",
    category: "AI & ML",
    highlight: "Enterprise AI",
    color: "#a78bfa",
    year: "2025",
  },
  {
    title: "AI for Bharat Hackathon",
    organizer: "AWS & Hack2Skill",
    category: "AI & ML",
    highlight: "AWS Cloud ML",
    color: "#f5a623",
    year: "2025",
  },
  {
    title: "Build with Medo Hackathon",
    organizer: "Medo AI",
    category: "AI & ML",
    highlight: "AI Healthtech",
    color: "#4ade80",
    year: "2026",
  },
  {
    title: "GitLab AI Hackathon",
    organizer: "GitLab",
    category: "Systems & Cloud",
    highlight: "DevSecOps & AI",
    color: "#7eb2ff",
    year: "2025",
  },
  {
    title: "Gemini 3 Hackathon",
    organizer: "Google AI Studio",
    category: "AI & ML",
    highlight: "Multimodal AI Creator",
    color: "#4ade80",
    year: "2025",
  },
  {
    title: "Build your Flutter Butler with Serverpod",
    organizer: "Serverpod & Flutter",
    category: "Mobile & Web",
    highlight: "Full-Stack Dart",
    color: "#e878fa",
    year: "2025",
  },
  {
    title: "Meta Horizon Creator Competition",
    organizer: "Meta (Elevate your mobile world)",
    category: "Mobile & Web",
    highlight: "AR/VR Mobile Creator",
    color: "#60a5fa",
    year: "2025",
  },
  {
    title: "AWS Lambda Hackathon",
    organizer: "Amazon Web Services",
    category: "Systems & Cloud",
    highlight: "Serverless Architecture",
    color: "#f5a623",
    year: "2025",
  },
  {
    title: "World's Largest Hackathon",
    organizer: "Powered by Bolt.new",
    category: "Mobile & Web",
    highlight: "Rapid Prototyper",
    color: "#e878fa",
    year: "2025",
  },
  {
    title: "AI Driven Learning Tools Ideathon",
    organizer: "Education Tech Community",
    category: "AI & ML",
    highlight: "EdTech Innovator",
    color: "#a78bfa",
    year: "2025",
  },
  {
    title: "Prompt Wars: Built with AI",
    organizer: "Google for Developers",
    category: "AI & ML",
    highlight: "Prompt Specialist",
    color: "#4ade80",
    year: "2025",
  },
  {
    title: "GenAI Exchange Hackathon",
    organizer: "Developer Community",
    category: "AI & ML",
    highlight: "GenAI Specialist",
    color: "#7eb2ff",
    year: "2026",
  },
  {
    title: "HackHazards 2026",
    organizer: "Namespace",
    category: "Systems & Cloud",
    highlight: "Cyber & Cloud Defense",
    color: "#f472b6",
    year: "2026",
  },
  {
    title: "The Economic Times AI Hackathon",
    organizer: "The Economic Times",
    category: "AI & ML",
    highlight: "Business AI Core",
    color: "#60a5fa",
    year: "2026",
  },
  {
    title: "AMD Slingshot: Human Imagination",
    organizer: "AMD & Slingshot (Built with AI)",
    category: "Systems & Cloud",
    highlight: "Creative Accelerator",
    color: "#f5a623",
    year: "2025",
  },
];

const categories = ["All", "AI & ML", "Systems & Cloud", "Mobile & Web"];

export default function Hackathons() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredHackathons =
    activeCategory === "All"
      ? hackathons
      : hackathons.filter((h) => h.category === activeCategory);

  return (
    <section id="hackathons" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Hackathons & Challenges</h2>
            <div className="line" />
          </div>

          <p className="text-[#666] text-sm font-mono mb-8 -mt-4">
            Participated and competed in <span className="text-[#aaa]">25+ prestigious hackathons</span> pushing boundaries in AI, cloud computing, and low-level systems.
          </p>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-white bg-white text-black font-semibold"
                    : "border-white/[0.08] bg-white/[0.01] text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Hackathons Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredHackathons.map((hack) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  key={hack.title}
                  className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-[180px]"
                >
                  {/* Subtle hover background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at bottom right, ${hack.color}08 0%, transparent 65%)`,
                    }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {hack.category === "AI & ML" && <Cpu className="w-4 h-4 text-zinc-500 group-hover:text-[#a78bfa] transition-colors" />}
                        {hack.category === "Systems & Cloud" && <Code2 className="w-4 h-4 text-zinc-500 group-hover:text-[#f5a623] transition-colors" />}
                        {hack.category === "Mobile & Web" && <Globe className="w-4 h-4 text-zinc-500 group-hover:text-[#60a5fa] transition-colors" />}
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                          {hack.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-600">{hack.year}</span>
                    </div>

                    <h3 className="text-[14px] font-semibold text-white/90 leading-snug group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">
                      {hack.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                      {hack.organizer}
                    </p>
                  </div>

                  {hack.highlight && (
                    <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-white/[0.02] z-10">
                      <Trophy className="w-3.5 h-3.5" style={{ color: hack.color }} />
                      <span
                        className="text-[10px] font-mono font-medium tracking-wide uppercase"
                        style={{ color: hack.color }}
                      >
                        {hack.highlight}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
