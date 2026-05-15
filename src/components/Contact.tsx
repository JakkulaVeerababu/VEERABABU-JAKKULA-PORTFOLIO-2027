"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3500);
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-28 w-full border-t border-white/[0.05]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ease: [0.16, 1, 0.3, 1] as [number, number, number, number], duration: 0.6 }}
        >
          <div className="section-divider">
            <h2>Get in Touch</h2>
            <div className="line" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-2 space-y-7">
              <div>
                <p className="text-[#888] text-[15px] leading-[1.85]">
                  Always open to conversations about interesting projects, collaboration,
                  or just talking shop about AI hardware, embedded systems, or systems design.
                  Recruiters welcome — I&apos;m actively building toward elite engineering roles.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:jakkulaveerababu429@gmail.com"
                  className="flex items-center gap-3 text-[#888] hover:text-white transition-all duration-200 group w-fit"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] flex items-center justify-center border border-white/[0.07] group-hover:border-white/[0.15] group-hover:bg-white/[0.05] transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-mono">jakkulaveerababu429@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-[#666]">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.02] flex items-center justify-center border border-white/[0.07]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-mono">Andhra Pradesh, India</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[#444] mb-3 uppercase tracking-wider">Connect</p>
                <div className="flex gap-3">
                  <Link
                    href="https://github.com/JakkulaVeerababu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.02] flex items-center justify-center border border-white/[0.07] text-[#666] hover:text-white hover:border-white/[0.2] transition-all"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/veerababu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/[0.02] flex items-center justify-center border border-white/[0.07] text-[#666] hover:text-white hover:border-white/[0.2] transition-all"
                  >
                    <FiLinkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>

              {/* Availability */}
              <div className="code-block">
                <div className="terminal-text text-[11px] space-y-1">
                  <div className="text-[#555]"># current status</div>
                  <div>
                    <span className="text-[#888]">available_for</span>
                    <span className="text-[#555]"> = </span>
                    <span className="text-[#aaa]">&quot;internships, collab&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#888]">response_time</span>
                    <span className="text-[#555]"> = </span>
                    <span className="text-[#aaa]">&quot;24–48h&quot;</span>
                  </div>
                  <div>
                    <span className="text-[#888]">timezone</span>
                    <span className="text-[#555]"> = </span>
                    <span className="text-[#aaa]">&quot;IST (UTC+5:30)&quot;</span>
                  </div>
                  <div className="code-comment"># DMs open on LinkedIn</div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-[#555] uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.05] transition-all placeholder:text-[#444]"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-[#555] uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.05] transition-all placeholder:text-[#444]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-[#555] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.05] transition-all placeholder:text-[#444]"
                    placeholder="Project idea, collab, recruitment..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-[#555] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/[0.07] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.05] transition-all resize-none placeholder:text-[#444]"
                    placeholder="Hi Veerababu, I wanted to reach out about..."
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={status !== "idle"}
                  className="w-full px-6 py-3.5 rounded-lg bg-white text-black text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#e0e0e0] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "idle" && (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {status === "sent" && "Message sent ✓"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/[0.05] pt-8 pb-10">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#444] text-xs font-mono">
            {`© ${new Date().getFullYear()} Veerababu J · Built with Next.js, Tailwind CSS & Framer Motion`}
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/JakkulaVeerababu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444] hover:text-white transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/veerababu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444] hover:text-white transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <a
              href="mailto:jakkulaveerababu429@gmail.com"
              className="text-[#444] hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
