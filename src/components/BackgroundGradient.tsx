'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundGradient() {
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
          --bg-green-size: 627px;
        }
        @media (min-width: 768px) {
          .bg-gradient-container {
            --bg-blue-size: 720px;
            --bg-green-size: 969px;
          }
        }
        @media (min-width: 1024px) {
          .bg-gradient-container {
            --bg-blue-size: 960px;
            --bg-green-size: 1254px;
          }
        }
      `}</style>

      {/* Layer 1: Pure Base (implied by container) */}

      {/* Layer 2: Luxury Emerald Green Glow (Bottom-Left) */}
      <motion.div
        className="absolute"
        style={{
          bottom: 'calc(var(--bg-green-size) * 1.6 * -0.62)',
          left: 'calc(var(--bg-green-size) * -0.5)',
          width: 'var(--bg-green-size)',
          height: 'calc(var(--bg-green-size) * 1.6)',
          background: 'radial-gradient(ellipse at center, #6EEB83 0%, rgba(82, 214, 106, 0.95) 30%, rgba(82, 214, 106, 0.4) 60%, transparent 80%)',
          opacity: 0.57,
          filter: 'blur(180px)',
          borderRadius: '50%',
          willChange: 'transform',
          rotate: 45,
        }}
        animate={{
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 25,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Layer 3: Blue Glow (Top-Right) */}
      <motion.div
        className="absolute"
        style={{
          top: 'calc(var(--bg-blue-size) * -0.5)',
          right: 'calc(var(--bg-blue-size) * -0.5)',
          width: 'var(--bg-blue-size)',
          height: 'var(--bg-blue-size)',
          background: 'radial-gradient(circle, #1E4CCF 0%, #1A4ED8 40%, rgba(20, 61, 158, 0.75) 65%, transparent 80%)',
          opacity: 0.70,
          filter: 'blur(160px)',
          borderRadius: '50%',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 20,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

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
