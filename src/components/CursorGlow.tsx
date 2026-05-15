"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, [visible]);

  return (
    <>
      {/* Large ambient glow */}
      <motion.div
        className="pointer-events-none fixed z-30"
        animate={{
          background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(91,127,255,0.04), transparent 70%)`,
        }}
        transition={{ type: "tween", duration: 0 }}
        style={{ inset: 0 }}
        aria-hidden
      />
      {/* Small sharp cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-40 w-4 h-4 rounded-full border border-[#5b7fff]/40 mix-blend-screen"
        animate={{
          x: pos.x - 8,
          y: pos.y - 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
        aria-hidden
      />
    </>
  );
}
