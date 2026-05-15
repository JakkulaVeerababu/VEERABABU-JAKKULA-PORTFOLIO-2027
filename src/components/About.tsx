"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.6 } },
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
              {/* Terminal block */}
              <div className="code-block">
                <div className="text-[#333] mb-3 text-[11px]"># whoami</div>
                <div className="space-y-1.5">
                  <div>
                    <span className="code-keyword">name</span>
                    <span className="text-[#333]"> = </span>
                    <span className="code-string">&quot;Veerababu J&quot;</span>
                  </div>
                  <div>
                    <span className="code-keyword">college</span>
                    <span className="text-[#333]"> = </span>
                    <span className="code-string">&quot;NEC, Andhra Pradesh&quot;</span>
                  </div>
                  <div>
                    <span className="code-keyword">degree</span>
                    <span className="text-[#333]"> = </span>
                    <span className="code-string">&quot;BTech ECE&quot;</span>
                  </div>
                  <div>
                    <span className="code-keyword">batch</span>
                    <span className="text-[#333]"> = </span>
                    <span className="code-var">2023</span>
                    <span className="text-[#333]"> – </span>
                    <span className="code-var">2027</span>
                  </div>
                  <div>
                    <span className="code-keyword">focus</span>
                    <span className="text-[#333]"> = </span>
                    <span className="code-string">&quot;AI chips + Systems&quot;</span>
                  </div>
                  <div className="code-comment"># target: NVIDIA / Qualcomm / Google</div>
                  <div className="code-comment"># currently: building foundations</div>
                </div>
              </div>

              {/* Interests */}
              <div className="glass-card p-5 space-y-3">
                <h3 className="text-[11px] font-mono text-[#5b7fff] mb-4 uppercase tracking-wider">
                  interests.json
                </h3>
                {[
                  "VLSI & ASIC/FPGA design",
                  "AI chip optimization",
                  "Distributed systems",
                  "Intelligent automation",
                  "GATE EC/CS preparation",
                  "Neural compilers (TVM, MLIR)",
                  "Open-source toolchains",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="text-[#5b7fff] text-xs flex-shrink-0">▹</span>
                    <span className="text-[#888] text-[13px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Education quick card */}
              <div className="glass-card p-5">
                <h3 className="text-[11px] font-mono text-[#555] mb-3 uppercase tracking-wider">Education</h3>
                <div className="space-y-1">
                  <p className="text-[13px] font-semibold text-white">Narasaraopeta Engineering College</p>
                  <p className="text-[12px] text-[#666]">BTech — Electronics &amp; Communication Engineering</p>
                  <p className="text-[11px] font-mono text-[#444]">Sep 2023 – May 2027</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
