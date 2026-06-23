"use client";

import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const timeline = [
  {
    year: "May 2026 — Present",
    degree: "Artificial Intelligence Internet of Things Intern",
    institution: "Datavalley Inc",
    detail: "Architecting hybrid AI-IoT workflows, managing telemetry pipelines, and building predictive edge models.",
    domain: "datavalley.ai",
    type: "internship",
    active: true,
  },
  {
    year: "Feb 2026 — Present",
    degree: "Full Stack Engineer (Internship)",
    institution: "Infosys Springboard",
    detail: "Built AI-powered Maritime Vessel Tracking System for live tracking, route analytics, and anomaly detection.",
    domain: "infyspringboard.onwingspan.com",
    type: "internship",
    active: true,
  },
  {
    year: "Feb 2026 — Present",
    degree: "Back End Developer (Internship)",
    institution: "Runway Digital Media",
    detail: "Contributed to SHRFLOW high-performance multi-tenant email platform and asynchronous orchestration queues.",
    domain: "thelitrunway.com",
    type: "internship",
    active: true,
  },
  {
    year: "2023 — 2027",
    degree: "B.Tech · Electronics & Communication Engineering",
    institution: "Narasaraopeta Engineering College",
    detail: "CGPA 8.75 / 10.0 · Andhra Pradesh",
    domain: "nrtec.in",
    type: "education",
    active: true,
  },
  {
    year: "Aug 2025 — Dec 2025",
    degree: "Internet of Things Intern",
    institution: "Emertxe Information Technologies",
    detail: "Constructed IoT prototypes, scripting device telemetry collectors, local gateway nodes, and cloud telemetry.",
    domain: "emertxe.com",
    type: "internship",
    active: false,
  },
  {
    year: "Jul 2025 — Sep 2025",
    degree: "AI/ML Virtual Internship",
    institution: "Google & APSCHE",
    detail: "Collaborated on machine learning models, exploring neural frameworks, classification algorithms, and feature pipelines.",
    domain: "google.com",
    type: "internship",
    active: false,
  },
  {
    year: "Jul 2025 — Sep 2025",
    degree: "Embedded System Developer VIRTUAL INTERNSHIP",
    institution: "Microchip Technology Inc.",
    detail: "Programmed microcontrollers in C using MPLAB IDE, implementing peripheral configs and sensor interfaces.",
    domain: "microchip.com",
    type: "internship",
    active: false,
  },
];

function TimelineIcon({ item }: { item: typeof timeline[0] }) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = item.domain
    ? `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`
    : null;

  if (logoUrl && !imgError) {
    return (
      <div style={{
        width: "30px",
        height: "30px",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        border: "1px solid var(--border-medium)",
        padding: "3px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        flexShrink: 0
      }}>
        <img
          src={logoUrl}
          alt={`${item.institution} logo`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: item.active ? "var(--accent)" : "var(--border-medium)",
      color: item.active ? "#ffffff" : "var(--text-secondary)",
      fontSize: "12px",
      border: "1px solid var(--border-subtle)",
      flexShrink: 0,
      boxShadow: item.active ? "0 0 10px var(--neon-cyan-light)" : "none"
    }}>
      {item.type === "education" ? <FaGraduationCap size={14} /> : <FaBriefcase size={12} />}
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-editorial-layout">
          {/* LEFT: Narrative + Stats */}
          <div className="about-narrative reveal">
            <div className="section-eyebrow">Profile</div>
            <h2 className="section-title">Engineering<br />Mindset</h2>
            <div className="section-divider" />

            <div className="about-body-text">
              <p>
                I&apos;m a <strong>Electronics &amp; Communication Engineering student</strong> at
                Narasaraopeta Engineering College with a CGPA of <strong>8.75</strong>. I
                specialize in building full-stack platforms, AI-powered tools, and
                distributed systems that solve real-world problems.
              </p>
              <p>
                I study the software stack from user interfaces down to CPU instruction
                pipelines — preparing myself for advanced software engineering and
                systems roles at product-driven companies.
              </p>
              <p>
                Projects like <strong>ShrFlow</strong> — an automated email marketing
                pipeline — have been validated by industry founders for their
                architecture and production quality.
              </p>
            </div>

            <div className="about-stats-row">
              <div className="about-stat-chip" style={{ background: 'none', border: 'none', boxShadow: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
                <div className="about-stat-val">8<span>.75</span></div>
                <div className="about-stat-lbl">CGPA</div>
              </div>
              <div className="about-stat-chip" style={{ background: 'none', border: 'none', boxShadow: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
                <div className="about-stat-val">5</div>
                <div className="about-stat-lbl">Internships</div>
              </div>
              <div className="about-stat-chip" style={{ background: 'none', border: 'none', boxShadow: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
                <div className="about-stat-val">6<span>+</span></div>
                <div className="about-stat-lbl">Hackathons</div>
              </div>
              <div className="about-stat-chip" style={{ background: 'none', border: 'none', boxShadow: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
                <div className="about-stat-val">10<span>+</span></div>
                <div className="about-stat-lbl">Projects</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Experience timeline */}
          <div className="about-timeline-col reveal">
            <div className="about-timeline-label">Experience</div>
            <div className="about-timeline">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`about-timeline-item${item.active ? " active" : ""}`}
                >
                  <div className="about-timeline-left" style={{ width: "32px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <TimelineIcon item={item} />
                    {i < timeline.length - 1 && (
                      <div className="about-timeline-line" style={{ width: "1px", background: "linear-gradient(180deg, var(--border-medium) 0%, transparent 100%)", flexGrow: 1, minHeight: "2.5rem" }} />
                    )}
                  </div>
                  <div className="about-timeline-content" style={{ paddingLeft: "0.5rem" }}>
                    <div className="about-timeline-year">{item.year}</div>
                    <div className="about-timeline-degree">{item.degree}</div>
                    <div className="about-timeline-inst">{item.institution}</div>
                    <div className="about-timeline-detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
