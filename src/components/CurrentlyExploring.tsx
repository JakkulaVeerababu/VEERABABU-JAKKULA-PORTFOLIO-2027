"use client";

import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.5, delay: i * 0.05 },
  }),
};

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="relative py-24 w-full">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-medium text-white tracking-tight">Active Research</h2>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {explorations.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="glass-card p-5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/[0.05] bg-white/[0.02] text-zinc-400 uppercase tracking-wider">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-[14px] font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-medium text-white tracking-tight">Engineering Notes</h2>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
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
                note: "Preparing for roles at companies like NVIDIA or Apple means understanding both the software stack and what's happening on silicon. That's the intersection I want to work in.",
              },
            ].map((note, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="glass-card p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  <p className="text-[12px] font-medium text-zinc-400">
                    {note.tag}
                  </p>
                </div>
                <p className="text-[14px] text-zinc-500 leading-relaxed">{note.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
