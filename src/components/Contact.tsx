"use client";

import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="reveal section-header">
            <div className="section-eyebrow">Collaboration</div>
            <h2 className="section-title">Get in Touch</h2>
            <div className="section-divider" />
            <p className="section-sub">
              Open to internships, freelance projects, and full-stack developer opportunities.
            </p>
          </div>

          <div className="contact-layout reveal">
            {/* Left: Info */}
            <div className="contact-info">
              <a
                href="mailto:jakkulaveerababu429@gmail.com"
                className="contact-item"
              >
                <FiMail className="contact-icon" />
                <div>
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">jakkulaveerababu429@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/veerababu?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FiLinkedin className="contact-icon" />
                <div>
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">linkedin.com/in/veerababu</span>
                </div>
              </a>

              <a
                href="https://github.com/JakkulaVeerababu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FiGithub className="contact-icon" />
                <div>
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">github.com/JakkulaVeerababu</span>
                </div>
              </a>

              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-panel border border-black/5 shadow-2xl" style={{ borderRadius: "var(--radius-xl)" }}>
              <form onSubmit={handleSubmit} className="contact-form-body p-8">
                <div className="contact-group mb-6">
                  <label htmlFor="cf-name" className="contact-label font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
                    Name Node
                  </label>
                  <input
                    type="text"
                    id="cf-name"
                    className="contact-input bg-white/70 hover:bg-white border border-black/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all duration-300 rounded-lg p-3 text-slate-800 text-sm shadow-sm"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="contact-group mb-6">
                  <label htmlFor="cf-email" className="contact-label font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
                    Email Node
                  </label>
                  <input
                    type="email"
                    id="cf-email"
                    className="contact-input bg-white/70 hover:bg-white border border-black/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all duration-300 rounded-lg p-3 text-slate-800 text-sm shadow-sm"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contact-group mb-8">
                  <label htmlFor="cf-message" className="contact-label font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
                    Message Telemetry
                  </label>
                  <textarea
                    id="cf-message"
                    className="contact-input bg-white/70 hover:bg-white border border-black/10 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none transition-all duration-300 rounded-lg p-3 text-slate-800 text-sm shadow-sm"
                    rows={5}
                    required
                    placeholder="Hi Veerababu, let's discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="contact-submit-btn bg-indigo-600 hover:bg-indigo-700 text-white font-mono text-xs uppercase tracking-wider py-3.5 rounded-lg border border-indigo-500 shadow-md duration-300 ease-in-out transition-all flex items-center justify-center gap-2 active:scale-95 w-full font-bold"
                >
                  {status === "idle" && (
                    <>
                      <FiSend size={14} /> Send Message
                    </>
                  )}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "Message Sent!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Veerababu Jakkula<span className="footer-dot">.</span> All rights reserved.
          </p>
          <span className="footer-copyright" style={{ opacity: 0.8 }}>Built with Next.js & TypeScript</span>
        </div>
      </footer>
    </>
  );
}
