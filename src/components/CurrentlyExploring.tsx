"use client";

const explorations = [
  {
    title: "VLSI & ASIC Design Flows",
    status: "Active",
    detail: "Cadence ASIC design methodology, understanding synthesis, place & route, and timing closure.",
  },
  {
    title: "GATE CS/EC Preparation",
    status: "Active",
    detail: "Data structures, algorithms, signals, and control systems. Building strong theoretical foundations.",
  },
  {
    title: "Neural Compiler Research",
    status: "Research",
    detail: "Studying TVM papers and MLIR to understand how computation graphs lower to hardware-specific IR.",
  },
  {
    title: "Embedded Linux",
    status: "Active",
    detail: "Writing character device drivers in C. Bridging the gap between kernel space and hardware.",
  },
  {
    title: "MIT 6.004",
    status: "Ongoing",
    detail: "Self-studying computer architecture from first principles to connect VLSI with systems software.",
  },
];

const notes = [
  {
    tag: "Hardware Abstraction",
    note: "The abstraction layers in modern CPUs are incredible — you write Python, LLVM compiles it, the hardware scheduler reorders micro-ops, and branch predictors speculate across it all. And it's still fast. That's decades of engineering.",
  },
  {
    tag: "Distributed Systems",
    note: "Every large-scale system I've studied has the same core problem: consistency vs. availability under partition. CAP theorem isn't just academic — every design decision in distributed systems flows from it.",
  },
  {
    tag: "Systems Learning",
    note: "Best way I've found to actually understand something: implement a broken version of it. The wrong answers teach more than reading the right ones.",
  },
  {
    tag: "Career Trajectory",
    note: "Preparing for roles at companies like NVIDIA or Apple means understanding both the software stack and silicon. That's the intersection I want to work in.",
  },
];

export default function CurrentlyExploring() {
  return (
    <section id="exploring">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Research &amp; Notes</div>
          <h2 className="section-title">Active Explorations</h2>
          <div className="divider"></div>
          <p className="section-sub">
            Fields of study, technical deep-dives, and notes on systems engineering.
          </p>
        </div>

        <div className="skills-grid reveal" style={{ marginBottom: "3rem" }}>
          {explorations.map((item) => (
            <div key={item.title} className="skill-group" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="skill-pill" style={{ fontSize: "0.7rem", textTransform: "uppercase" }}>
                  {item.status}
                </span>
              </div>
              <h3 className="skill-group-title" style={{ fontSize: "0.95rem", color: "var(--text)", textTransform: "none", margin: "0.25rem 0" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text2)", lineHeight: "1.5" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "4rem" }}>
          <h3 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Engineering Notes</h3>
        </div>

        <div className="projects-grid reveal">
          {notes.map((note, i) => (
            <div key={i} className="project-card">
              <div className="proj-tag">{note.tag}</div>
              <p className="proj-desc" style={{ marginBottom: 0 }}>
                {note.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

