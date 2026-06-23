"use client";

import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const pinnedRepos = [
  {
    name: "VEERABABU-JAKKULA-PORTFOLIO-2027",
    desc: "Premium developer portfolio built using Next.js, TypeScript, and Framer Motion with liquid glass design.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 1,
    forks: 0,
    url: "https://github.com/JakkulaVeerababu/VEERABABU-JAKKULA-PORTFOLIO-2027",
  },
  {
    name: "ShrFlow",
    desc: "Self-hosted, multi-tenant enterprise email marketing dashboard supporting high-throughput event queues.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 2,
    forks: 1,
    url: "https://github.com/JakkulaVeerababu",
  },
];

export default function GithubSection() {

  return (
    <section id="github">
      <div className="container">
        <div className="reveal section-header">
          <div className="section-eyebrow">Open Source</div>
          <h2 className="section-title">GitHub Activity</h2>
          <div className="section-divider" />
        </div>

        <div className="github-layout reveal">
          {/* Left Column: LeetCode Profiles (Larger size) */}
          <div className="leetcode-grid">
            {/* LeetCode Professional Profile */}
            <div className="github-card" style={{ display: "flex", flexDirection: "column", padding: "0", overflow: "hidden" }}>
              <div style={{ padding: "1.5rem 1.5rem 0.875rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <SiLeetcode style={{ color: "#FFA116", fontSize: "1.15rem" }} />
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      LeetCode (Professional)
                    </h4>
                  </div>
                  <a
                    href="https://leetcode.com/u/VEERABABU_JAKKULA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.68rem",
                      color: "#FFA116",
                      textDecoration: "none",
                      fontWeight: 600,
                      borderBottom: "1px solid transparent",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFA116")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  >
                    @veerababu_jakkula
                  </a>
                </div>

                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.45,
                    minHeight: "2.5rem",
                  }}
                >
                  <strong>811 Solved</strong> · Global Rank <strong>59,985</strong> · 1,059 submissions past year.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  borderTop: "1px solid var(--border-subtle)",
                  background: "var(--bg-canvas)",
                  cursor: "pointer",
                  marginTop: "auto",
                }}
                onClick={() => window.open("https://leetcode.com/u/VEERABABU_JAKKULA/", "_blank")}
              >
                <img
                  src="/IMGS/leetcode_professional.png"
                  alt="LeetCode Professional Dashboard"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: 0.95,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.95";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            </div>

            {/* LeetCode Practice Profile */}
            <div className="github-card" style={{ display: "flex", flexDirection: "column", padding: "0", overflow: "hidden" }}>
              <div style={{ padding: "1.5rem 1.5rem 0.875rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <SiLeetcode style={{ color: "#FFA116", fontSize: "1.15rem" }} />
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      LeetCode (Practice)
                    </h4>
                  </div>
                  <a
                    href="https://leetcode.com/u/veerababu9z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.68rem",
                      color: "#FFA116",
                      textDecoration: "none",
                      fontWeight: 600,
                      borderBottom: "1px solid transparent",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#FFA116")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                  >
                    @veerababu9z
                  </a>
                </div>

                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.45,
                    minHeight: "2.5rem",
                  }}
                >
                  <strong>362 Solved</strong> · Global Rank <strong>350,936</strong> · 475 submissions past year.
                </p>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  borderTop: "1px solid var(--border-subtle)",
                  background: "var(--bg-canvas)",
                  cursor: "pointer",
                  marginTop: "auto",
                }}
                onClick={() => window.open("https://leetcode.com/u/veerababu9z/", "_blank")}
              >
                <img
                  src="/IMGS/leetcode_practice.png"
                  alt="LeetCode Practice Dashboard"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: 0.95,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.95";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Pinned Repos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-card"
                style={{ display: "block", textDecoration: "none", transition: "all 0.25s" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}
                  >
                    <FiGithub
                      style={{ color: "var(--neon-cyan)", fontSize: "0.9rem", flexShrink: 0 }}
                    />
                    <h4
                      style={{
                        fontSize: "0.825rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        wordBreak: "break-all",
                      }}
                    >
                      {repo.name}
                    </h4>
                  </div>
                  <span
                    style={{
                      fontSize: "0.62rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      flexShrink: 0,
                      marginLeft: "0.5rem",
                    }}
                  >
                    Public
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.775rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {repo.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: repo.langColor,
                        display: "inline-block",
                      }}
                    />
                    {repo.lang}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <FiStar size={11} /> {repo.stars}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <FiGitBranch size={11} /> {repo.forks}
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
