"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";

export default function Hero() {
  const words = [
    "Full Stack Developer",
    "Backend Engineer",
    "AI-Powered Web Applications"
  ];
  
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex <= activeWord.length) {
      timer = setTimeout(() => {
        setText(activeWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => {
        setText(activeWord.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 40);
    }

    if (charIndex === activeWord.length + 1 && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (charIndex === -1 && isDeleting) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="hero">
      <div className="engineering-grid-light"></div>
      <div className="hero-glow-accents">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge"
        >
          <span></span> Available for Opportunities
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-name"
        >
          VEERABABU <span>JAKKULA</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="hero-typed"
        >
          <span>{text}</span>
          <span className="cursor animate-pulse">|</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-sub"
        >
          Passionate about building scalable backend systems, AI-powered platforms, and modern cloud-native web applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="#projects" className="btn-primary">
            View Projects
          </Link>
          <Link href="#contact" className="btn-outline">
            Contact Me
          </Link>
          <a
            href="https://www.linkedin.com/in/veerababu/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hero-socials"
        >
          <Link
            href="https://www.linkedin.com/in/veerababu/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="https://github.com/JakkulaVeerababu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://leetcode.com/u/VEERABABU_JAKKULA/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LeetCode"
          >
            <FiCode />
          </Link>
          <a
            href="mailto:jakkulaveerababu429@gmail.com"
            className="social-link"
            title="Email"
          >
            <FiMail />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

