"use client";

const experiences = [
  {
    company: "Infosys Springboard",
    role: "Full Stack Developer",
    badge: "Virtual",
    desc: "End-to-end web application development covering frontend, backend, APIs, and deployment practices using modern frameworks.",
  },
  {
    company: "Google & APSCHE",
    role: "AI / ML Engineer",
    badge: "Virtual",
    desc: "Machine learning model development and AI application building in collaboration with Google and APSCHE initiative.",
  },
  {
    company: "Microchip Technology Inc & APSCHE",
    role: "Embedded Systems Developer",
    badge: "Industry",
    desc: "Hands-on embedded systems development using MPLAB IDE, C programming, microcontrollers, and motor control systems.",
  },
  {
    company: "Emertxe",
    role: "IoT Developer",
    badge: "Industry",
    desc: "Internet of Things application development including sensor integration, data pipelines, and edge computing solutions.",
  },
  {
    company: "Data Valley",
    role: "AI & IoT Engineer",
    badge: "Industry",
    desc: "Combined AI and IoT project development, building intelligent connected systems and data-driven automation solutions.",
  },
  {
    company: "Tata (Forage)",
    role: "GenAI Powered Data Analytics",
    badge: "Simulation",
    desc: "Job simulation focused on applying generative AI to data analytics workflows and business intelligence reporting.",
  },
  {
    company: "Deloitte (Forage)",
    role: "Data Analytics",
    badge: "Simulation",
    desc: "Real-world data analytics simulation covering data cleaning, analysis, visualization, and business insights generation.",
  },
  {
    company: "Accenture (Forage)",
    role: "Data Analytics & Visualization",
    badge: "Simulation",
    desc: "Analytics and visualization job simulation covering storytelling with data, dashboard design, and client presentation skills.",
  },
];

export default function Experience() {
  return (
    <section id="internships">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Internships</h2>
          <div className="divider"></div>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-card">
                <div className="tc-header">
                  <span className="tc-company">{exp.company}</span>
                  <span className="tc-badge">{exp.badge}</span>
                </div>
                <div className="tc-role">{exp.role}</div>
                <div className="tc-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
