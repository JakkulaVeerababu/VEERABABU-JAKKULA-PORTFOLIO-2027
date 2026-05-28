"use client";

const topAchievements = [
  {
    badge: "🏆 TOP ACHIEVEMENT",
    name: "Google Big Code Challenge 2026",
    detail: "Cleared Qualifier Round & Round 1 — competing at national scale",
  },
  {
    badge: "⭐ INNOVATOR",
    name: "AMD Slingshot: Human Imagination",
    detail: "Human Imagination Built with AI — AMD innovation challenge",
  },
  {
    badge: "🌐 GLOBAL",
    name: "Claude Code — Global Virtual Hackathon",
    detail: "Built with Claude Opus 4.7 — Anthropic&apos;s global hackathon",
  },
];

const otherPills = [
  "BUILDATHON 2025 — Flutter & DreamFlow",
  "AI for Bharat — AWS & Hack2Skill",
  "GenAI Exchange Hackathon",
  "HackHazards 2026 — Namespace",
  "World's Largest Hackathon — Bolt",
  "Solution Challenge 2026 — Google",
  "Gemini 3 Hackathon",
  "GitLab AI Hackathon",
  "AWS Lambda Hackathon",
  "IBM Dev Day AI Demystified",
  "Meta Horizon Creator Competition",
  "Prompt Wars — Google for Developers",
  "AI Agent Olympics",
  "Economic Times AI Hackathon",
  "AMD Developer Hackathon",
  "Build with Medo Hackathon",
  "DeepSeek vs LLaMA — Kill the Cloud",
  "AI-Driven Learning Ideathon",
  "Flutter Butler with Serverpod",
  "India's Biggest AI Hackathon — Meta & Scalar",
];

export default function Hackathons() {
  return (
    <section id="hackathons">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Competitions</div>
          <h2 className="section-title">Hackathons &amp; Challenges</h2>
          <div className="divider"></div>
          <p className="section-sub">
            20+ hackathons across global platforms — from Google to AMD, AWS to Anthropic.
          </p>
        </div>
        
        <div className="hack-highlight reveal">
          {topAchievements.map((ach, i) => (
            <div key={i} className="hack-feature">
              <div className="hack-star">{ach.badge}</div>
              <div className="hack-name">{ach.name}</div>
              <div className="hack-detail">{ach.detail}</div>
            </div>
          ))}
        </div>

        <div className="hack-pills reveal">
          {otherPills.map((pill, i) => (
            <span key={i} className="hack-pill">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
