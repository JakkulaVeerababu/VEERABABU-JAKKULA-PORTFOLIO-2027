"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 w-full">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-divider">
            <h2>About</h2>
            <div className="line" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Main text */}
            <div className="lg:col-span-3 space-y-5 text-[#888] text-[15px] leading-[1.9]">
              <p>
                Started tinkering with code around my second year — mostly breaking things before fixing them.
                My background is ECE, but somewhere along the way I got drawn into the software layer.
                Specifically: how large systems are architected, how data moves at scale, and how AI is
                starting to reshape how we think about hardware design itself.
              </p>
              <p>
                Right now I&apos;m doing metadata workflows and SQL analytics as a data analyst,
                while also self-studying VLSI design and ASIC flows on the side. Unusual combination,
                I know. But the gap between software intelligence and physical compute is exactly where
                I want to eventually operate.
              </p>
              <p>
                I&apos;ve been working through MIT OpenCourseWare (6.004 is genuinely excellent),
                IBM&apos;s developer resources, and various Google research papers on compilers and systems.
                Also preparing seriously for GATE — that&apos;s its own parallel track.
                Not rushing it. Building foundations first.
              </p>
              <p>
                Outside of structured learning: experimenting with embedded Linux, reading semiconductor
                industry news, and occasionally contributing to open-source. I&apos;m preparing for roles
                at companies like NVIDIA, Qualcomm, or Apple — places that build the actual hardware
                the world runs on.
              </p>
            </div>

            {/* Right column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-5 glass-card font-mono text-[13px] leading-relaxed relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="text-zinc-500 mb-4 text-[11px] uppercase tracking-wider relative z-10"># Profile_Data</div>
                <div className="space-y-2 relative z-10">
                  <div className="flex">
                    <span className="text-[#888] w-24">Name:</span>
                    <span className="text-[#ccc]">VEERABABU JAKKULA</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#888] w-24">Location:</span>
                    <span className="text-[#ccc]">Andhra Pradesh, India</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#888] w-24">Education:</span>
                    <span className="text-[#ccc]">BTech ECE (2023 - 2027)</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#888] w-24">CGPA (3rd Yr):</span>
                    <span className="text-[#ccc]">8.71 / 10</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#888] w-24">Focus:</span>
                    <span className="text-[#ccc]">AI Hardware & Systems</span>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="p-5 glass-card space-y-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h3 className="text-[11px] font-mono text-zinc-500 mb-4 uppercase tracking-wider relative z-10">
                  Core Interests
                </h3>
                <div className="relative z-10 space-y-3">
                {[
                  "VLSI & ASIC/FPGA design",
                  "AI chip optimization",
                  "Distributed systems",
                  "Intelligent automation",
                  "Neural compilers (TVM, MLIR)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[#444] text-[10px] flex-shrink-0">●</span>
                    <span className="text-[#888] text-[13px]">{item}</span>
                  </div>
                ))}
                </div>
              </div>

              {/* Education quick card */}
              <div className="p-5 glass-card relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h3 className="text-[11px] font-mono text-zinc-500 mb-3 uppercase tracking-wider relative z-10">Education</h3>
                <div className="space-y-1 relative z-10">
                  <p className="text-[13px] font-semibold text-white">Narasaraopeta Engineering College</p>
                  <p className="text-[12px] text-[#888]">BTech — Electronics &amp; Communication Engineering</p>
                  <p className="text-[12px] text-[#ccc] font-medium pt-0.5">CGPA (3rd Year): 8.71</p>
                  <p className="text-[11px] font-mono text-[#555] pt-1">Sep 2023 – May 2027</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
