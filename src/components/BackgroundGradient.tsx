'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function BackgroundGradient() {
  const { scrollYProgress } = useScroll();

  // Create a spring-smoothed version of scroll progress for liquid inertia
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 15,
    mass: 0.4
  });

  // Green glow moves diagonally from Bottom-Left to Top-Right
  const greenX = useTransform(smoothScroll, [0, 1], ['-30vw', '80vw']);
  const greenY = useTransform(smoothScroll, [0, 1], ['50vh', '-60vh']);

  // Blue glow moves diagonally from Top-Right to Bottom-Left
  const blueX = useTransform(smoothScroll, [0, 1], ['80vw', '-30vw']);
  const blueY = useTransform(smoothScroll, [0, 1], ['-60vh', '50vh']);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none -z-50 bg-gradient-container"
      style={{
        backgroundColor: 'var(--bg-pure)',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      <style>{`
        .bg-gradient-container {
          --bg-blue-size: 480px;
          --bg-green-size: 480px;
        }
        @media (min-width: 768px) {
          .bg-gradient-container {
            --bg-blue-size: 720px;
            --bg-green-size: 720px;
          }
        }
        @media (min-width: 1024px) {
          .bg-gradient-container {
            --bg-blue-size: 960px;
            --bg-green-size: 960px;
          }
        }
      `}</style>

      {/* Layer 1: Pure Base (implied by container) */}

      {/* Layer 2: Luxury Emerald Green Glow (Bottom-Left to Top-Right) */}
      <motion.div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 'var(--bg-green-size)',
          height: 'var(--bg-green-size)',
          x: greenX,
          y: greenY,
          willChange: 'transform',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, var(--glow-green-color, #6EEB83) 0%, var(--glow-green-mid, rgba(82, 214, 106, 0.95)) 30%, var(--glow-green-low, rgba(82, 214, 106, 0.4)) 60%, transparent 80%)',
            opacity: 'var(--glow-green-opacity, 0.70)',
            filter: 'blur(120px)',
            borderRadius: '50%',
          }}
          animate={{
            x: [-15, 15, -15],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 25,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Layer 3: Blue Glow (Top-Right to Bottom-Left) */}
      <motion.div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 'var(--bg-blue-size)',
          height: 'var(--bg-blue-size)',
          x: blueX,
          y: blueY,
          willChange: 'transform',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, var(--glow-blue-color, #1E4CCF) 0%, var(--glow-blue-mid, #1A4ED8) 40%, var(--glow-blue-low, rgba(20, 61, 158, 0.75)) 65%, transparent 80%)',
            opacity: 'var(--glow-blue-opacity, 0.80)',
            filter: 'blur(120px)',
            borderRadius: '50%',
          }}
          animate={{
            x: [10, -10, 10],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Layer 3.5: Diagonal Dark/Theme-matching Divider Mask */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, var(--bg-pure) 48%, var(--bg-pure) 52%, transparent 70%)',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Layer 4: Vignette & Noise Overlay */}
      {/* 4a: Soft Vignette */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'var(--vignette-gradient, radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.35) 100%))',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* 4b: Ultra-light Film Grain Noise (1.5% opacity, Overlay blend mode) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.015,
          mixBlendMode: 'overlay',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
}


