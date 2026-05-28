"use client";

import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "ShrFlow — Enterprise Email Engine",
    tag: "Full Stack · Cloud · AI",
    description:
      "Self-hosted, multi-tenant email marketing platform — an open-source alternative to Mailchimp/SendGrid. Architected and presented to the Founder of byteXL. Features gigabyte-scale CSV ingestion, drag-and-drop MJML builder, and AI copywriting assistant.",
    tech: ["Next.js 14", "FastAPI", "RabbitMQ", "AWS SES/SNS", "Supabase", "Docker", "Redis", "PostgreSQL"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: true,
  },
  {
    num: "02",
    title: "Maritime Vessel Tracking & Port Analytics",
    tag: "Data · Analytics · Real-time",
    description:
      "Real-time vessel tracking and port intelligence dashboard providing maritime data visualization, route analysis, and port activity monitoring for shipping analytics.",
    tech: ["Python", "Geospatial APIs", "Real-time Data", "Dashboard"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
  },
  {
    num: "03",
    title: "Skill Bridge AI",
    tag: "AI · EdTech · Full Stack",
    description:
      "AI-powered skill gap analyzer and personalized learning path generator. Helps developers and students identify missing skills and get curated roadmaps to reach their career goals.",
    tech: ["Generative AI", "Next.js", "FastAPI", "NLP"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
  },
  {
    num: "04",
    title: "Free GATE Preparation Platform",
    tag: "EdTech · Open Source",
    description:
      "Open-access platform for ECE and CS GATE exam preparation. Includes topic-wise practice questions, performance analytics, and curated study material — completely free for all students.",
    tech: ["React", "Node.js", "PostgreSQL", "Open Source"],
    github: "https://github.com/JakkulaVeerababu",
    demo: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <div className="section-label">What I&apos;ve Built</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card ${project.featured ? "featured" : ""} reveal`}
            >
              {project.featured && (
                <div className="featured-badge">⭐ Founder Validated</div>
              )}
              <div className="proj-tag">{project.tag}</div>
              <div className="proj-name">{project.title}</div>
              <p className="proj-desc">{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                <Link href={project.demo} className="proj-link">
                  → View Project
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                >
                  → GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
