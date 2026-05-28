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

            <div className="about-stat-row">
              <div className="about-stat">
                <div className="about-stat-number">8<span>.71</span></div>
                <div className="about-stat-label">CGPA</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">5</div>
                <div className="about-stat-label">Internships</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">6<span>+</span></div>
                <div className="about-stat-label">Hackathons</div>
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="about-cards reveal">
            {cards.map((card, i) => (
              <div key={i} className="about-card">
                <div className="about-card-icon">{card.icon}</div>
                <div className="about-card-title">{card.title}</div>
                <div className="about-card-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
