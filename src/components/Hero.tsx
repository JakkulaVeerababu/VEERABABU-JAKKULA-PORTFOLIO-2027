"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiArrowRight, FiTerminal, FiDatabase, FiCpu } from "react-icons/fi";

const TYPED_WORDS = [
  "Full Stack Engineer",
  "AI Systems Builder",
  "ECE Systems Architect",
  "Embedded Developer",
];

const PROFILE_DATA = `{
  "engineer": "Veerababu Jakkula",
  "role": "Full-Stack & ECE Systems",
  "location": "India, AP",
  "education": {
    "college": "Narasaraopeta Engineering College",
    "degree": "B.Tech ECE (2023-2027)",
    "cgpa": "8.71 / 10.00"
  },
  "status": "OPERATIONAL"
}`;

const CAPABILITIES_DATA = `capabilities:
  hardware_systems:
    - ECE Core Concepts
    - Embedded Systems & IoT
    - VLSI & Hardware Design
  software_stack:
    - Languages: [Python, Java, JavaScript, TypeScript, SQL]
    - Frameworks: [Next.js, FastAPI, Node.js, Express.js]
    - Infrastructure: [Docker, AWS Services, Git]
    - Telemetry: [PostgreSQL, MongoDB, RabbitMQ]`;

const SYSTEM_LOGS = `[SYSTEM_LOG 2026-05-29]
> INITIALIZING CORE TELEMETRY... OK
> COMPILING ARCHITECTURE... SUCCESS (5.4s)
> SYNCING DISTRIBUTED QUEUES... ACTIVE
> RABBITMQ WORKERS: 4 ONLINE
> ACTIVE CONSOLE NODES: [ShrFlow, SkillBridge]
> GATE PREPARATION Telemetry: READY
> HOST: PORTFOLIO_V2.SAAS_NODE_01`;

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "caps" | "logs" | "playground">("profile");
  
  // Simulated Interactive Playground States
  const [playgroundLogs, setPlaygroundLogs] = useState<string[]>(["// Interactive systems simulator ready.", "> Click an operational node button below to execute telemetry..."]);
  const [isSimulatingIngest, setIsSimulatingIngest] = useState(false);
  const [isSimulatingWave, setIsSimulatingWave] = useState(false);
  const [waveTimer, setWaveTimer] = useState(0);

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx];
    let timer: NodeJS.Timeout;

    if (!deleting && charIdx <= word.length) {
      timer = setTimeout(() => {
        setDisplayText(word.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 70);
    } else if (deleting && charIdx >= 0) {
      timer = setTimeout(() => {
        setDisplayText(word.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, 35);
    }

    if (charIdx === word.length + 1 && !deleting) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (charIdx === -1 && deleting) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % TYPED_WORDS.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  // Telemetry simulation logic
  const handleIngestSim = () => {
    if (isSimulatingIngest || isSimulatingWave) return;
    setIsSimulatingIngest(true);
    setPlaygroundLogs(["[INITIALIZING INGESTION API...]"]);
    
    const steps = [
      "> Decoupling REST ingestion gate... OK",
      "> Allocating RabbitMQ audience ingestion buffer...",
      "> Telemetry streaming: Ingested 14,204 packets/sec.",
      "> supabased.edge_deduplication worker #3 compiled successfully (0.12s)",
      "> AWS SES dual-routing bulk dispatcher dispatch complete.",
      "STATUS: Ingestion Operational - 200 SUCCESS OK"
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setPlaygroundLogs(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setIsSimulatingIngest(false);
        }
      }, (index + 1) * 700);
    });
  };

  const handleWaveSim = () => {
    if (isSimulatingIngest || isSimulatingWave) return;
    setIsSimulatingWave(true);
    setWaveTimer(0);
    setPlaygroundLogs(["[INITIALIZING SPECTRUM ANALYZER...]"]);

    const steps = [
      "> Mounting Aura-v2 English sound wave matrix...",
      "> Executing real-time frequency synthesis...",
      "> Spectral density: 192kbps PCM telemetry active.",
      "> Observing low-latency signal dispatcher..."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setPlaygroundLogs(prev => [...prev, step]);
      }, (index + 1) * 750);
    });

    const interval = setInterval(() => {
      setWaveTimer(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulatingWave(false);
          setPlaygroundLogs(p => [...p, "STATUS: Voice Synthesis Completed Node."]);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <section id="hero">
      <div className="dot-grid" />
      <div className="hero-glow-ring" />

      <div className="hero-content">
        {/* Left Side: Editorial Typography */}
        <div className="hero-editorial">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-availability"
          >
            <div className="hero-availability-dot" />
            SYSTEMS ACTIVE // CGPA: 8.71
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="hero-name"
          >
            VEERABABU{" "}
            <span className="hero-name-accent">
              JAKKULA
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="hero-typed-wrap"
          >
            <span className="hero-typed">
              &gt; {displayText}
              <span className="hero-typed-cursor">_</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="hero-sub"
          >
            B.Tech Electronics & Communication Engineering student. Building high-performance, distributed full-stack systems and exploring hardware-accelerated AI computation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="hero-actions"
          >
            <a
              href="/docs/maritime-vessel-tracking-infosys.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume File <FiArrowRight />
            </a>
            <a
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub Node
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="hero-socials"
          >
            <a
              href="https://www.linkedin.com/in/veerababu?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn Node"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Node"
            >
              <FiGithub />
            </a>
            <a
              href="https://leetcode.com/u/VEERABABU_JAKKULA/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LeetCode Terminal"
            >
              <FiCode />
            </a>
            <a
              href="mailto:jakkulaveerababu429@gmail.com"
              className="social-link"
              title="Secure Email Port"
            >
              <FiMail />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.58 }}
            className="hero-metrics"
          >
            <div className="hero-metric">
              <div className="hero-metric-value">8.71</div>
              <div className="hero-metric-label">CGPA ACCREDITED</div>
            </div>
            <div className="hero-metric">
              <div className="hero-metric-value">24</div>
              <div className="hero-metric-label">HACK RECORD</div>
            </div>
            <div className="hero-metric">
              <div className="hero-metric-value">8</div>
              <div className="hero-metric-label">INTERNSHIPS</div>
            </div>
            <div className="hero-metric">
              <div className="hero-metric-value">4</div>
              <div className="hero-metric-label">CORE PROJECTS</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Terminal Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-terminal-container"
        >
          <div className="terminal-panel shadow-2xl border border-black/10">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
              </div>
              <div className="terminal-title flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                VJ.systems_console_core_v2
              </div>
              <div><FiTerminal size={12} className="text-slate-400" /></div>
            </div>

            <div className="terminal-tabs border-b border-black/5 bg-slate-950">
              <div
                className={`terminal-tab hover:text-indigo-600 transition-all font-mono text-[10px] uppercase tracking-wider py-2.5 px-4 cursor-pointer ${activeTab === "profile" ? "active text-indigo-500 font-semibold border-b-2 border-indigo-500 bg-slate-900" : "text-slate-400 bg-slate-950"}`}
                onClick={() => { setActiveTab("profile"); setIsSimulatingIngest(false); setIsSimulatingWave(false); }}
              >
                profile.json
              </div>
              <div
                className={`terminal-tab hover:text-indigo-600 transition-all font-mono text-[10px] uppercase tracking-wider py-2.5 px-4 cursor-pointer ${activeTab === "caps" ? "active text-indigo-500 font-semibold border-b-2 border-indigo-500 bg-slate-900" : "text-slate-400 bg-slate-950"}`}
                onClick={() => { setActiveTab("caps"); setIsSimulatingIngest(false); setIsSimulatingWave(false); }}
              >
                skills.yaml
              </div>
              <div
                className={`terminal-tab hover:text-indigo-600 transition-all font-mono text-[10px] uppercase tracking-wider py-2.5 px-4 cursor-pointer ${activeTab === "logs" ? "active text-indigo-500 font-semibold border-b-2 border-indigo-500 bg-slate-900" : "text-slate-400 bg-slate-950"}`}
                onClick={() => { setActiveTab("logs"); setIsSimulatingIngest(false); setIsSimulatingWave(false); }}
              >
                telemetry.conf
              </div>
              <div
                className={`terminal-tab hover:text-indigo-600 transition-all font-mono text-[10px] uppercase tracking-wider py-2.5 px-4 cursor-pointer ${activeTab === "playground" ? "active text-indigo-500 font-semibold border-b-2 border-indigo-500 bg-slate-900" : "text-slate-400 bg-slate-950"}`}
                onClick={() => { setActiveTab("playground"); }}
              >
                playground.sh
              </div>
            </div>

            <div className="terminal-body relative overflow-hidden" style={{ minHeight: "260px" }}>
              {activeTab === "profile" && (
                <pre style={{ margin: 0 }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
                    <span className="terminal-text-blue">{`{`}</span><br />
                    {`  `}<span className="terminal-text-purple">"engineer"</span>: <span className="terminal-text-green">"Veerababu Jakkula"</span>,<br />
                    {`  `}<span className="terminal-text-purple">"role"</span>: <span className="terminal-text-green">"Full-Stack & ECE Systems"</span>,<br />
                    {`  `}<span className="terminal-text-purple">"location"</span>: <span className="terminal-text-green">"India, AP"</span>,<br />
                    {`  `}<span className="terminal-text-purple">"education"</span>: <span className="terminal-text-blue">{`{`}</span><br />
                    {`    `}<span className="terminal-text-purple">"college"</span>: <span className="terminal-text-green">"Narasaraopeta Engineering College"</span>,<br />
                    {`    `}<span className="terminal-text-purple">"degree"</span>: <span className="terminal-text-green">"B.Tech ECE (2023-2027)"</span>,<br />
                    {`    `}<span className="terminal-text-purple">"cgpa"</span>: <span className="terminal-text-green">"8.71 / 10.00"</span><br />
                    {`  `}<span className="terminal-text-blue">{`}`}</span>,<br />
                    {`  `}<span className="terminal-text-purple">"status"</span>: <span className="terminal-text-yellow">"OPERATIONAL"</span><br />
                    <span className="terminal-text-blue">{`}`}</span>
                  </code>
                </pre>
              )}

              {activeTab === "caps" && (
                <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
                    <span className="terminal-text-blue">capabilities:</span><br />
                    {`  `}<span className="terminal-text-purple">hardware_systems:</span><br />
                    {`    `}<span className="terminal-text-green">- ECE Core Concepts</span><br />
                    {`    `}<span className="terminal-text-green">- Embedded Systems & IoT</span><br />
                    {`    `}<span className="terminal-text-green">- VLSI & Hardware Design</span><br />
                    {`  `}<span className="terminal-text-purple">software_stack:</span><br />
                    {`    `}<span className="terminal-text-yellow">- Languages:</span> <span className="terminal-text-green">[Python, Java, JS, TS, SQL]</span><br />
                    {`    `}<span className="terminal-text-yellow">- Frameworks:</span> <span className="terminal-text-green">[Next.js, FastAPI, Node.js]</span><br />
                    {`    `}<span className="terminal-text-yellow">- Infrastructure:</span> <span className="terminal-text-green">[Docker, AWS Services, Git]</span><br />
                    {`    `}<span className="terminal-text-yellow">- Telemetry:</span> <span className="terminal-text-green">[PostgreSQL, MongoDB, RabbitMQ]</span>
                  </code>
                </pre>
              )}

              {activeTab === "logs" && (
                <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
                    <span className="terminal-text-yellow">[SYSTEM_LOG 2026-05-29]</span><br />
                    <span className="terminal-text-blue">&gt; INITIALIZING CORE TELEMETRY...</span> <span className="terminal-text-green">OK</span><br />
                    <span className="terminal-text-blue">&gt; COMPILING ARCHITECTURE...</span> <span className="terminal-text-green">SUCCESS (5.4s)</span><br />
                    <span className="terminal-text-blue">&gt; SYNCING DISTRIBUTED QUEUES...</span> <span className="terminal-text-yellow">ACTIVE</span><br />
                    <span className="terminal-text-blue">&gt; RABBITMQ WORKERS:</span> <span className="terminal-text-green">4 ONLINE</span><br />
                    <span className="terminal-text-blue">&gt; ACTIVE CONSOLE NODES:</span> <span className="terminal-text-green">[ShrFlow, SkillBridge]</span><br />
                    <span className="terminal-text-blue">&gt; GATE PREPARATION TELEMETRY:</span> <span className="terminal-text-green">READY</span><br />
                    <span className="terminal-text-blue">&gt; HOST:</span> <span className="terminal-text-purple">PORTFOLIO_V2.SAAS_NODE_01</span>
                  </code>
                </pre>
              )}

              {activeTab === "playground" && (
                <div className="flex flex-col justify-between h-full min-h-[220px]">
                  <div className="flex-grow font-mono text-[11px] leading-relaxed text-slate-300 overflow-y-auto max-h-[170px] no-scrollbar">
                    {playgroundLogs.map((log, idx) => {
                      const isStatus = log.startsWith("STATUS:");
                      const isHeader = log.startsWith("[");
                      const isBlue = log.startsWith(">");
                      return (
                        <div 
                          key={idx} 
                          className={`${
                            isStatus 
                              ? "text-emerald-400 font-bold mt-2" 
                              : isHeader 
                                ? "text-indigo-400 font-bold" 
                                : isBlue 
                                  ? "text-sky-400" 
                                  : "text-slate-400"
                          }`}
                        >
                          {log}
                        </div>
                      );
                    })}
                    
                    {/* Simulated Voice Waveform Visualizer overlay */}
                    {isSimulatingWave && (
                      <div className="flex items-end gap-1 mt-4 h-10 border-b border-white/5 pb-2">
                        <div className="w-1.5 bg-indigo-500 rounded-full animate-bounce h-8"></div>
                        <div className="w-1.5 bg-indigo-500 rounded-full animate-bounce h-5 [animation-delay:0.1s]"></div>
                        <div className="w-1.5 bg-indigo-500 rounded-full animate-bounce h-7 [animation-delay:0.2s]"></div>
                        <div className="w-1.5 bg-indigo-500 rounded-full animate-bounce h-3 [animation-delay:0.15s]"></div>
                        <div className="w-1.5 bg-indigo-500 rounded-full animate-bounce h-6 [animation-delay:0.3s]"></div>
                        <div className="w-1.5 bg-indigo-500 rounded-full animate-bounce h-4 [animation-delay:0.05s]"></div>
                        <span className="text-[10px] text-slate-500 font-mono ml-4 mb-1">Aura-v2 Synthesis: {waveTimer}%</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Console Interactive Triggers */}
                  <div className="border-t border-white/5 pt-3 mt-3 flex flex-wrap gap-3">
                    <button
                      onClick={handleIngestSim}
                      disabled={isSimulatingIngest || isSimulatingWave}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-mono text-[9px] uppercase tracking-wider py-2 px-3 rounded border border-indigo-500 shadow-md transition-all active:scale-95 text-center font-bold"
                    >
                      {isSimulatingIngest ? "Streaming..." : "Trigger Ingestion Node"}
                    </button>
                    <button
                      onClick={handleWaveSim}
                      disabled={isSimulatingIngest || isSimulatingWave}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-mono text-[9px] uppercase tracking-wider py-2 px-3 rounded border border-emerald-500 shadow-md transition-all active:scale-95 text-center font-bold"
                    >
                      {isSimulatingWave ? "Synthesizing..." : "Synthesize AI System"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
