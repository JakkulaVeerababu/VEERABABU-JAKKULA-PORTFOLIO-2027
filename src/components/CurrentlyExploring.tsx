"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const terminalLines = [
  { text: "$ cd ~/current-exploration", delay: 0, color: "#888" },
  { text: "Entering workspace...", delay: 0.3, color: "#666" },
  { text: "$ ls -la", delay: 0.6, color: "#888" },
  { text: "├── vlsi_design_notes/", delay: 0.9, color: "#aaa" },
  { text: "├── asic_flow_experiments/", delay: 1.1, color: "#aaa" },
  { text: "├── gate_prep_2027/", delay: 1.3, color: "#aaa" },
  { text: "├── neural_compiler_poc/", delay: 1.5, color: "#aaa" },
  { text: "└── embedded_linux_notes/", delay: 1.7, color: "#aaa" },
  { text: "$ cat status.txt", delay: 2.0, color: "#888" },
  { text: "All systems active. Coffee level: critical.", delay: 2.3, color: "#ccc" },
];

const explorations = [
  {
    icon: "◈",
    title: "VLSI & ASIC Design Flows",
    status: "active",
    detail:
      "Going through Cadence's ASIC design methodology. Understanding synthesis, place & route, and timing closure — it's a different kind of engineering than software.",
    color: "#f5a623",
  },
  {
    icon: "◈",
    title: "GATE CS/EC Preparation",
    status: "active",
    detail:
      "Parallel track. Data structures, algorithms, signals, and control systems. Building for the long game here — not rushing.",
    color: "#7eb2ff",
  },
  {
    icon: "◈",
    title: "Neural Compiler Research",
    status: "exploring",
    detail:
      "Reading TVM papers and MLIR documentation. Trying to understand how computation graphs get lowered to hardware-specific IR. Deep rabbit hole.",
    color: "#e878fa",
  },
  {
    icon: "◈",
    title: "Embedded Linux & Kernel Modules",
    status: "active",
    detail:
      "Writing simple character device drivers in C. The kernel is surprisingly readable once you stop being intimidated by it.",
    color: "#45d4a8",
  },
  {
    icon: "◈",
    title: "MIT 6.004 — Computation Structures",
    status: "ongoing",
    detail:
      "Self-studying computer architecture from first principles. Helps connect the dots between VLSI and systems software.",
    color: "#9b59ff",
  },
];

const buildLogs = [
  {
    time: "02:14 AM",
    entry:
      "Fixed a timing issue in the maritime vessel tracker — the WebSocket reconnection logic was silently failing. Took 90 minutes to find a single off-by-one in the retry delay.",
  },
  {
    time: "11:47 PM",
    entry:
      "Read through the TVM paper on Halide scheduling primitives. Starting to understand why hardware-aware compilation matters so much for inference latency.",
  },
  {
    time: "01:03 AM",
    entry:
      "Got the MQTT sensor pipeline actually working end-to-end. Turns out the QoS level was the issue — switched to QoS 1 and the dropped packets disappeared.",
  },
  {
    time: "12:30 AM",
    entry:
      "Spent 2 hours on GATE signals notes. Fourier transforms aren't clicking yet. Tomorrow: go back to basics with Oppenheim.",
  },
];

function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay * 1000 + 200)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
      transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
      className="code-block"
    >
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#444]" />
        <span className="ml-2 text-[#666] text-[11px] font-mono">veerababu@system:~</span>
      </div>
      <div className="space-y-1">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="terminal-text text-[12px]" style={{ color: line.color }}>
            {line.text}
            {i === visibleLines - 1 && <span className="blink ml-0.5">▌</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6, delay: i * 0.07 },
  }),
};

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
          className="mb-24"
        >
          <div className="section-divider">
            <h2>Currently Exploring</h2>
            <div className="line" />
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-4">
              {explorations.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] group hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-base mt-0.5 flex-shrink-0 text-[#888]">
                      {item.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider text-[#888] bg-white/[0.05] border border-white/[0.1]">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#666] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <TerminalWidget />
            </div>
          </div>
        </motion.div>

        {/* Late Night Build Logs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
          className="mb-24"
        >
          <div className="section-divider">
            <h2 className="text-xl">Late Night Build Logs</h2>
            <div className="line" />
          </div>

          <p className="text-xs font-mono text-[#555] mb-8 -mt-6">
            // things I figure out at odd hours
          </p>

          <div className="space-y-4">
            {buildLogs.map((log, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="text-[11px] font-mono text-[#888] whitespace-nowrap">
                    {log.time}
                  </span>
                </div>
                <div className="flex-1 border-l border-white/[0.05] pl-5 pb-4 group-hover:border-white/[0.1] transition-colors">
                  <p className="text-[13px] text-[#aaa] leading-[1.8]">{log.entry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Architecture Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2 className="text-xl">Engineering Notes</h2>
            <div className="line" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                tag: "// hardware",
                note: "The abstraction layers in modern CPUs are incredible — you write Python, LLVM compiles it, the hardware scheduler reorders micro-ops, and branch predictors speculate across it all. And it's still fast. That's decades of engineering.",
                color: "#f5a623",
              },
              {
                tag: "// software",
                note: "Every large-scale system I've studied has the same core problem: consistency vs. availability under partition. CAP theorem isn't just academic — every design decision in distributed systems flows from it.",
                color: "#7eb2ff",
              },
              {
                tag: "// learning",
                note: "Best way I've found to actually understand something: implement a broken version of it. The wrong answers teach more than reading the right ones.",
                color: "#9b59ff",
              },
              {
                tag: "// career",
                note: "Preparing for roles at companies like NVIDIA or Qualcomm means understanding both the software stack and what's happening on silicon. That's the intersection I want to work in. Two years out. Building toward it daily.",
                color: "#45d4a8",
              },
            ].map((note, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] group hover:bg-white/[0.03] transition-all duration-300"
              >
                <p className="text-[11px] font-mono mb-3 text-[#666]">
                  {note.tag}
                </p>
                <p className="text-[13px] text-[#aaa] leading-relaxed italic">{note.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
