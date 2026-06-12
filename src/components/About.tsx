"use client";

import { FiCode, FiCloud, FiCpu, FiCheckCircle } from "react-icons/fi";

const cards = [
  {
    icon: <FiCode />,
    title: "Full Stack & Backend",
    desc: "Building robust interfaces and high-performance server architectures using React, Next.js, FastAPI, and Node.js.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud & DevOps",
    desc: "Deploying microservices and scalable cloud pipelines on AWS and Vercel with Docker-based CI/CD workflows.",
  },
  {
    icon: <FiCpu />,
    title: "AI/ML Systems",
    desc: "Integrating intelligent API workflows and exploring hardware-accelerated learning models with LangChain and Bedrock.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Problem Solving",
    desc: "Applying ECE hardware concepts and algorithmic theory to write optimized, production-grade software solutions.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-layout">
          {/* Left: Text */}
          <div className="reveal">
            <div className="section-eyebrow">Profile</div>
            <h2 className="section-title">Engineering Mindset</h2>
            <div className="section-divider" />
            <div className="about-text">
              <p>
                I&apos;m a <strong>Electronics & Communication Engineering student</strong> at
                Narasaraopeta Engineering College, maintaining a CGPA of{" "}
                <strong>8.71</strong>. I specialize in building full-stack web
                platforms, AI-powered tools, and systems solutions that solve real-world problems.
              </p>
              <p>
                I study the software stack from user interfaces down to CPU instruction
                pipelines — preparing myself for advanced software engineering and
                systems roles at product-driven companies.
              </p>
              <p>
                Notable enterprise projects like <strong>ShrFlow</strong> — an automated
                email marketing pipeline — have been directly validated by industry
                founders for their architecture design.
              </p>
            </div>

            <div className="about-stat-row flex gap-4 mt-8">
              <div className="about-stat bg-white/40 border border-black/5 rounded-xl p-4 flex-1 text-center shadow-sm hover:scale-105 duration-300 transition-all">
                <div className="about-stat-number font-mono text-xl md:text-2xl font-bold text-slate-800">8<span className="text-indigo-600 font-normal">.71</span></div>
                <div className="about-stat-label font-mono text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">CGPA</div>
              </div>
              <div className="about-stat bg-white/40 border border-black/5 rounded-xl p-4 flex-1 text-center shadow-sm hover:scale-105 duration-300 transition-all">
                <div className="about-stat-number font-mono text-xl md:text-2xl font-bold text-slate-800">8</div>
                <div className="about-stat-label font-mono text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Internships</div>
              </div>
              <div className="about-stat bg-white/40 border border-black/5 rounded-xl p-4 flex-1 text-center shadow-sm hover:scale-105 duration-300 transition-all">
                <div className="about-stat-number font-mono text-xl md:text-2xl font-bold text-slate-800">24</div>
                <div className="about-stat-label font-mono text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">Hackathons</div>
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="about-cards reveal grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <div key={i} className="about-card bg-white/40 hover:bg-white/80 hover:shadow-md hover:scale-105 border border-black/5 rounded-xl p-5 flex flex-col transition-all duration-300 shadow-sm cursor-default">
                <div className="about-card-icon text-indigo-600 text-lg mb-3">{card.icon}</div>
                <div className="about-card-title text-sm font-bold text-slate-800 tracking-tight mb-1.5">{card.title}</div>
                <div className="about-card-desc text-slate-600 leading-relaxed" style={{ fontSize: "0.78rem" }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
