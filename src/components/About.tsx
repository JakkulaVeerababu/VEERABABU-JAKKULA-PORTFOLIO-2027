"use client";

import { FiCode, FiCloud, FiCpu, FiCheckCircle } from "react-icons/fi";

const aboutCards = [
  {
    icon: <FiCode />,
    title: "Full Stack & Backend",
    desc: "Building robust frontend user interfaces and high-performance server structures.",
  },
  {
    icon: <FiCloud />,
    title: "Cloud & DevOps",
    desc: "Deploying microservices and scalable cloud pipelines on AWS and Vercel environments.",
  },
  {
    icon: <FiCpu />,
    title: "AI/ML Systems",
    desc: "Integrating intelligent API workflows and exploring hardware-accelerated learning models.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Problem Solving",
    desc: "Applying ECE concepts and engineering theory to write optimized computer algorithms.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="section-label">Profile</div>
            <h2 className="section-title">Engineering Mindset</h2>
            <div className="divider"></div>
            <p className="section-sub" style={{ marginBottom: "1.5rem" }}>
              I&apos;m a passionate Electronics &amp; Communication Engineering student at Narasaraopeta Engineering College maintaining a CGPA of 8.71. I build full-stack web platforms, AI-powered tools, and systems solutions that solve real-world problems.
            </p>
            <p className="section-sub" style={{ marginBottom: "1.5rem" }}>
              I study the software stack from user interfaces down to CPU instruction pipelines and silicon, preparing myself for advanced software engineering and systems roles.
            </p>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Notable enterprise projects like ShrFlow — an automated email marketing pipeline — have been directly validated by industry founders for architecture design.
            </p>
          </div>
          
          <div className="about-cards reveal">
            {aboutCards.map((card, i) => (
              <div key={i} className="glass-card about-card">
                <div className="ac-icon">{card.icon}</div>
                <div className="ac-title">{card.title}</div>
                <div className="ac-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

