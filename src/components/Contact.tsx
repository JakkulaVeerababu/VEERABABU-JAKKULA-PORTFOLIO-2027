"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact-center reveal">
            <div className="section-label">Connect</div>
            <h2 className="section-title">Let&apos;s Build Something</h2>
            <div className="divider" style={{ margin: "1rem auto 2rem" }}></div>
            <p>
              I&apos;m always open to new opportunities, collaborations, or just chatting about engineering.
              Feel free to reach out via any channel below.
            </p>
            
            <div className="contact-btns">
              <a href="mailto:jakkulaveerababu429@gmail.com" className="contact-btn cb-email">
                Email Me
              </a>
              <Link
                href="https://www.linkedin.com/in/veerababu/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn cb-linkedin"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/JakkulaVeerababu"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn cb-github"
              >
                GitHub
              </Link>
            </div>
            
            <div className="contact-note">
              Based in Andhra Pradesh, India • Available for global opportunities
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
