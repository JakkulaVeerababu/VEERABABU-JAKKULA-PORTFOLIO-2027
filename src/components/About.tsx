"use client";

const timeline = [
  {
    year: "2022 — Present",
    degree: "B.Tech · Electronics & Communication Engineering",
    institution: "Narasaraopeta Engineering College",
    detail: "CGPA 8.71 / 10.0 · Andhra Pradesh",
    active: true,
  },
  {
    year: "2020 — 2022",
    degree: "Intermediate · MPC",
    institution: "Narasaraopeta Junior College",
    detail: "Percentage: 93.8%",
    active: false,
  },
  {
    year: "2019 — 2020",
    degree: "Secondary Education · SSC",
    institution: "ZP High School, Narasaraopeta",
    detail: "GPA 10.0 / 10.0",
    active: false,
  },
];

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
                Narasaraopeta Engineering College with a CGPA of <strong>8.71</strong>. I
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
                <div className="about-stat-val">8<span>.71</span></div>
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

          {/* RIGHT: Education timeline */}
          <div className="about-timeline-col reveal">
            <div className="about-timeline-label">Education</div>
            <div className="about-timeline">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`about-timeline-item${item.active ? " active" : ""}`}
                >
                  <div className="about-timeline-left">
                    <div className="about-timeline-dot" />
                    {i < timeline.length - 1 && (
                      <div className="about-timeline-line" />
                    )}
                  </div>
                  <div className="about-timeline-content">
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
