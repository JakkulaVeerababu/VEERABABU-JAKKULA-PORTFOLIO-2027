"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FileText, ArrowDown } from "lucide-react";

const roles = [
  "ECE Student @ NEC",
  "Metadata & Data Analyst",
  "Full-Stack Developer",
  "AI Systems Explorer",
  "IEEE Member",
];

function TypingRoleRotator() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < role.length) {
      timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === role.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length - 1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <span className="text-[#5b7fff] terminal-text">
      {displayed}
      <span className="blink">|</span>
    </span>
  );
}

/* Minimal particle canvas */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; a: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W();
        if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H();
        if (p.y > H()) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(91,127,255,${p.a})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(91,127,255,${0.06 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      aria-hidden
    />
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.7 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleCanvas />

      {/* Radial center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#5b7fff]/6 blur-[120px] pointer-events-none" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-6 max-w-6xl"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#888] border border-white/[0.08] rounded-full px-4 py-1.5 bg-white/[0.02]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
              </span>
              Based in Andhra Pradesh, India
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-white leading-[0.95] mb-6"
          >
            Veerababu J.
          </motion.h1>

          {/* Rotating role */}
          <motion.div
            variants={item}
            className="text-xl md:text-2xl font-mono h-8 mb-6 flex items-center"
          >
            <TypingRoleRotator />
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-[#888] max-w-2xl leading-relaxed mb-10"
          >
            ECE student exploring intelligent systems, scalable software, and
            next-generation semiconductor technologies. Currently preparing for
            elite roles in AI chip design, systems engineering, and high-scale
            software infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 mb-12"
          >
            <Link
              href="#contact"
              className="group px-6 py-2.5 rounded-lg bg-[#5b7fff] text-white text-sm font-medium hover:bg-[#6a8aff] transition-all flex items-center gap-2 glow-blue"
            >
              <FiMail className="w-4 h-4" />
              Get in touch
            </Link>
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg glass text-sm font-medium text-[#ccc] hover:text-white hover:border-white/20 transition-all flex items-center gap-2"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/veerababu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg glass text-sm font-medium text-[#ccc] hover:text-white hover:border-white/20 transition-all flex items-center gap-2"
            >
              <FiLinkedin className="w-4 h-4" />
              LinkedIn
            </Link>
            <Link
              href="#"
              className="px-6 py-2.5 rounded-lg glass text-sm font-medium text-[#ccc] hover:text-white hover:border-white/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 border-t border-white/[0.06] pt-8"
          >
            {[
              { label: "Tech Reach", value: "100K+" },
              { label: "Internships", value: "5" },
              { label: "Certifications", value: "15+" },
              { label: "IEEE Member", value: "✓" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-[#666] mt-0.5 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555]"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
