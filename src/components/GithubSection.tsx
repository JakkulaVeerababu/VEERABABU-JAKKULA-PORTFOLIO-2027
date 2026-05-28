"use client";

import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";

const GRID_SIZE = 168; // 7 rows × 24 cols

function getContribColor(rand: number) {
  if (rand < 0.48) return "#ebedf0";
  if (rand < 0.70) return "#b3e8f0";
  if (rand < 0.87) return "#3ecbdf";
  return "#06b6d4";
}

const gridCells = Array.from({ length: GRID_SIZE }, () =>
  getContribColor(Math.random())
);

const pinnedRepos = [
  {
    name: "VEERABABU-JAKKULA-PORTFOLIO-2027",
    desc: "Premium white-neon developer portfolio built using Next.js 15, TypeScript, and Framer Motion.",
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
          {/* Contribution Graph */}
          <div className="github-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <FiGithub style={{ color: "var(--neon-cyan)", fontSize: "1.05rem" }} />
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                Coding Activity
              </h3>
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
              }}
            >
              Continuous integration commits, algorithmic practices, and
              system repository updates.
            </p>

            {/* Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(7, 10px)",
                gridAutoFlow: "column",
                gap: "3px",
                padding: "0.875rem",
                background: "var(--bg-canvas)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {gridCells.map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "0.75rem",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>@JakkulaVeerababu</span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <span>Less</span>
                {["#ebedf0", "#b3e8f0", "#3ecbdf", "#06b6d4"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      backgroundColor: c,
                    }}
                  />
                ))}
                <span>More</span>
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
