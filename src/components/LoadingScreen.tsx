"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          id="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.15em", color: "var(--text-primary)", fontWeight: 600 }}
          >
            VEERABABU JAKKULA
          </motion.div>
          <div className="loader-bar">
            <div className="loader-progress" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
