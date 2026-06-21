"use client";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-copy">
          © {new Date().getFullYear()} Veerababu Jakkula<span className="footer-dot">.</span> All rights reserved.
        </div>
        <div className="footer-tag">
          Built for Precision
        </div>
      </div>
    </footer>
  );
}
