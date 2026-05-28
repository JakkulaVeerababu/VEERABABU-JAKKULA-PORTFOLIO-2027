"use client";

import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";

const pinnedRepos = [
  {
    name: "VEERABABU-JAKKULA-PORTFOLIO-2027",
    desc: "Premium white-neon developer portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 1,
    forks: 0,
    url: "https://github.com/JakkulaVeerababu/VEERABABU-JAKKULA-PORTFOLIO-2027"
  },
  {
    name: "ShrFlow",
    desc: "Self-hosted, multi-tenant enterprise email marketing dashboard supporting high-throughput event queues.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 2,
    forks: 1,
    url: "https://github.com/JakkulaVeerababu"
  }
];

export default function GithubSection() {
  const gridCells = Array.from({ length: 154 }).map((_, i) => {
    const r = Math.random();
    if (r < 0.5) return "bg-gray-200/50";
    if (r < 0.75) return "bg-cyan-100";
    if (r < 0.9) return "bg-cyan-300";
    return "bg-cyan-500";
  });

  return (
    <section id="github">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Open Source</div>
          <h2 className="section-title">GitHub Activity</h2>
          <div className="divider"></div>
        </div>

        <div className="github-grid">
          {/* Left: Contributions Graph */}
          <div className="github-card reveal flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiGithub className="text-cyan-500 text-lg" />
                <h3 className="font-bold text-sm text-[#121314]">Coding Activity</h3>
              </div>
              <p className="section-sub" style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>
                Continuous integration commits, algorithmic practices, and system repository updates.
              </p>
              
              {/* Contributions Grid */}
              <div className="grid grid-flow-col grid-rows-7 gap-[3px] p-2 bg-[#f6f8fa] border border-gray-200/50 rounded-lg max-w-full overflow-x-auto select-none">
                {gridCells.map((val, idx) => (
                  <div key={idx} className={`w-[9px] h-[9px] rounded-[1px] ${val}`} />
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-gray-400 mt-4 font-mono">
              <span>@JakkulaVeerababu</span>
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2.5 h-2.5 bg-gray-200/50 rounded-[1px]" />
                <div className="w-2.5 h-2.5 bg-cyan-100 rounded-[1px]" />
                <div className="w-2.5 h-2.5 bg-cyan-300 rounded-[1px]" />
                <div className="w-2.5 h-2.5 bg-cyan-500 rounded-[1px]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Pinned Repos */}
          <div className="flex flex-col gap-4">
            {pinnedRepos.map((repo, i) => (
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="glass-card p-5 block hover:-translate-y-1 transition-all text-decoration-none reveal"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FiGithub className="text-cyan-500 text-sm" />
                    <h4 className="font-bold text-sm text-[#121314]">{repo.name}</h4>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">Public</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{repo.desc}</p>
                <div className="flex items-center gap-4 text-[11px] text-gray-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span>{repo.lang}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiStar /> <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiGitBranch /> <span>{repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
