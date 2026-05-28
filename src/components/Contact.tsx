"use client";

import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Collaboration</div>
            <h2 className="section-title">Get in Touch</h2>
            <div className="divider"></div>
            <p className="section-sub">
              Open to internships, freelance projects, and full stack developer opportunities. Feel free to send a message.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Contact Info */}
            <div className="contact-info reveal">
              <a href="mailto:jakkulaveerababu429@gmail.com" className="contact-item">
                <FiMail className="contact-icon" />
                <span className="contact-item-text font-mono">jakkulaveerababu429@gmail.com</span>
              </a>
              <Link
                href="https://www.linkedin.com/in/veerababu/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FiLinkedin className="contact-icon" />
                <span className="contact-item-text font-mono">linkedin.com/in/veerababu</span>
              </Link>
              <Link
                href="https://github.com/JakkulaVeerababu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FiGithub className="contact-icon" />
                <span className="contact-item-text font-mono">github.com/JakkulaVeerababu</span>
              </Link>
              <div className="contact-item text-[#868c92]">
                <FiMapPin className="contact-icon" />
                <span className="contact-item-text font-mono">Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="reveal">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required placeholder="Your Name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required placeholder="your@email.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} required placeholder="Hi Veerababu, let's discuss..." />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="proj-btn-primary py-3 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
                  style={{ width: "100%", border: "none" }}
                >
                  {status === "idle" && (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                  {status === "sending" && "Sending message..."}
                  {status === "sent" && "Message Sent!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Veerababu Jakkula. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

