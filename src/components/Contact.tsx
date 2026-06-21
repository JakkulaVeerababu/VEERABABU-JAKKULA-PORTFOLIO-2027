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
              href="https://www.linkedin.com/in/veerababu/"
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
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="cf-name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="cf-name"
                className="form-input"
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="cf-email"
                className="form-input"
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-message" className="form-label">
                Message
              </label>
              <textarea
                id="cf-message"
                className="form-textarea"
                rows={5}
                required
                placeholder="Hi Veerababu, let's discuss..."
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="form-submit"
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
    </section>
  );
}
