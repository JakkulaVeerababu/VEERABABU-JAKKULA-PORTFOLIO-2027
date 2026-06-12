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

        <div className="matrix-grid reveal" style={{ marginBottom: "3rem" }}>
          {explorations.map((item) => {
            const isResearch = item.status.toLowerCase().includes("research");
            const isOngoing = item.status.toLowerCase().includes("ongoing");
            
            const badgeBg = isResearch 
              ? "rgba(99, 102, 241, 0.08)" 
              : isOngoing 
                ? "rgba(255, 153, 0, 0.08)" 
                : "rgba(16, 185, 129, 0.08)";
                
            const badgeColor = isResearch 
              ? "#5c5ff1" 
              : isOngoing 
                ? "#ff9900" 
                : "#10b981";

            const badgeBorder = isResearch 
              ? "rgba(99, 102, 241, 0.15)" 
              : isOngoing 
                ? "rgba(255, 153, 0, 0.15)" 
                : "rgba(16, 185, 129, 0.15)";

            return (
              <div 
                key={item.title} 
                className="matrix-card p-5 border border-black/5 hover:-translate-y-1 hover:shadow-lg bg-white/40 hover:bg-white/70 transition-all duration-300 shadow-sm flex flex-col justify-between" 
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span 
                    className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                    style={{ background: badgeBg, color: badgeColor, borderColor: badgeBorder }}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="matrix-title text-sm font-bold text-slate-800 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal" style={{ marginTop: "4rem" }}>
          <h3 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Engineering Notes</h3>
        </div>

        <div className="matrix-grid reveal">
          {notes.map((note, i) => (
            <div 
              key={i} 
              className="matrix-card p-5 border border-black/5 hover:-translate-y-1 hover:shadow-lg bg-white/40 hover:bg-white/70 transition-all duration-300 shadow-sm flex flex-col"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="matrix-category font-mono text-[9px] text-indigo-600 font-bold uppercase tracking-wider mb-3 px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100 self-start">
                {note.tag}
              </div>
              <p className="text-slate-600 leading-relaxed text-xs mb-0">
                {note.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

