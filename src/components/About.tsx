"use client";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal about-grid">
          <div className="flex flex-col items-center gap-4">
            <div className="about-avatar">VJ</div>
            <div className="text-center">
              <div className="font-syne text-[0.85rem] font-bold text-[var(--text)]">
                Veerababu Jakkula
              </div>
              <div className="text-[0.78rem] color-[var(--blue)]">
                ECE • 3rd Year
              </div>
            </div>
          </div>
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Passionate Builder.<br />
              Enterprise Thinker.
            </h2>
            <div className="divider"></div>
            <p className="text-[var(--text2)] mb-4 text-base">
              I&apos;m a passionate Electronics &amp; Communication Engineering student at Narasaraopeta Engineering College maintaining a CGPA of 8.71. I build full-stack web platforms, AI-powered tools, and embedded systems that solve real problems.
            </p>
            <p className="text-[var(--text2)] mb-4 text-base">
              I&apos;ve completed 8+ internships with companies including Infosys, Google, Microchip Technology, Emertxe, and Tata. I actively participate in global hackathons and believe in learning by building real, production-grade products.
            </p>
            <p className="text-[var(--text2)] text-base">
              My most notable project, ShrFlow — an enterprise email marketing engine — was presented directly to the Founder of byteXL, validating its architecture and enterprise readiness.
            </p>
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-num">8+</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">20+</div>
                <div className="stat-label">Hackathons</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">100+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
