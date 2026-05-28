"use client";

const skillGroups = [
  {
    category: "Programming",
    items: ["Java", "Python", "C", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    category: "Database & Analytics",
    items: ["PostgreSQL", "MySQL", "Google BigQuery", "Data Visualization"],
  },
  {
    category: "AI & Systems",
    items: ["Machine Learning", "AI Tools", "Prompt Engineering", "Neural Compiler Concepts"],
  },
  {
    category: "Embedded & ECE",
    items: ["IoT", "Embedded Systems", "FPGA Basics", "Microcontrollers", "Sensors"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Linux", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="divider"></div>
          <p className="section-sub">
            A comprehensive list of programming languages, frameworks, databases, and technologies I work with.
          </p>
        </div>

        <div className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-group-title">{group.category}</h3>
              <div className="skill-pills">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

