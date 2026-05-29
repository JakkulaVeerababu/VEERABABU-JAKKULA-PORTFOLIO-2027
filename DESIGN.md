# Stitch Lavender-Peach Design System (S-LPDS)

Welcome to the **Stitch Lavender-Peach Design System** specification. This document defines the design tokens, visual aesthetics, typography, layout guidelines, and UI component standards used in the portfolio redesign.

---

## 1. Design Philosophy
The S-LPDS combines a high-end, premium **glassmorphism** aesthetic with a warm, organic background palette. It is inspired by the soft violet-to-peach gradient, providing a highly polished, inviting, and professional developer showcase.

- **Warmth**: Ditching cold, sterile dark modes for a friendly, high-contrast warm cream canvas.
- **Glassmorphism**: Soft backdrop blur filters, glowing drop-shadows, and ultra-subtle translucent borders.
- **Micro-Animations**: Snappy, spring-based interactive transitions that make the page feel responsive and alive.

---

## 2. Design Tokens

### A. Color Palette

| Token Name | Hex Code | Role | Description |
| :--- | :--- | :--- | :--- |
| `bg-pure` | `#FFFFFF` | Background (Cards / Modals) | Absolute pure white, used for interactive floating elements. |
| `bg-canvas` | `#FAF8F6` | Main Body Background | Warm, premium soft cream that reduces eye strain and looks organic. |
| `bg-surface` | `#F5EFEB` | Secondary Background | Slightly deeper warm tone for section dividers and offset canvases. |
| `text-primary` | `#1E1625` | Primary Typography | Deep amethyst charcoal for exceptional legibility and high contrast. |
| `text-secondary` | `#4A3E56` | Subheadings & Descriptions | Medium violet-tinted charcoal. |
| `text-muted` | `#756783` | Captions & Placeholders | Soft violet-tinted gray. |
| `accent` | `#9D80E6` | Primary Interactive Color | Beautiful soft lavender/violet used for active states and primary buttons. |
| `accent-bright` | `#B59DF5` | Hover/Highlight State | Vibrant bright lavender for button hover transitions. |
| `accent-deep` | `#7858D6` | Deep Accent State | Rich purple for link text and pressed states. |
| `accent-peach` | `#F2A8A8` | Secondary Blend Highlight | Soft blush peach/coral from the gradient, used in glows and graphics. |

### B. Glows & Shadows
- **Soft Ambient Glow**: `rgba(157, 128, 230, 0.08)` (sm) / `rgba(157, 128, 230, 0.15)` (md).
- **Secondary Highlight Glow**: `rgba(242, 168, 168, 0.10)` (peach blush).
- **Card Interactive Shadow**: `0 4px 24px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.03)`.
- **Primary Glowing Button**: `0 4px 16px rgba(157, 128, 230, 0.30), 0 1px 4px rgba(157, 128, 230, 0.20)`.

### C. Borders
- **Subtle Glass Border**: `rgba(117, 103, 131, 0.06)` (translucent violet border).
- **Medium Border**: `rgba(117, 103, 131, 0.12)`.
- **Interactive Neon Border**: `rgba(157, 128, 230, 0.35)`.

---

## 3. Typography Specification

### **Headings & Primary Text**
- **Font Family**: `Plus Jakarta Sans`, sans-serif (via Google Fonts).
- **Style**: Bold, high letter-spacing adjustment (`-0.03em` to `-0.045em`), tight line-height (`1.06` to `1.18`).
- **Accent Headings**: Gradient blend using `linear-gradient(135deg, var(--accent-bright) 0%, var(--accent) 50%, var(--accent-deep) 100%)`.

### **Code & Technical Information**
- **Font Family**: `JetBrains Mono`, monospace.
- **Role**: CGPA indicators, section eyebrows, skill tags, and terminal blocks.

---

## 4. UI Layout & Component Guidelines

### A. Glass Cards
All content blocks (About profile cards, Projects, Internships) are enclosed in `.glass-card` elements with the following specs:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(117, 103, 131, 0.06);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-card:hover {
  border-color: rgba(157, 128, 230, 0.35);
  box-shadow: 0 0 0 1px rgba(157, 128, 230, 0.25), 0 4px 32px rgba(157, 128, 230, 0.15);
  transform: translateY(-2px);
  background: #ffffff;
}
```

### B. Backdrop Gradients & Ambient Effects
- **Hero Ambient Circle**: A large `720px` blurred glow ring using a lavender-to-peach radial gradient:
  ```css
  background: radial-gradient(
    circle at center,
    rgba(157, 128, 230, 0.08) 0%,
    rgba(242, 168, 168, 0.04) 45%,
    transparent 70%
  );
  filter: blur(40px);
  ```
- **Dot Grid overlay**: Subtle dot-matrix grid using `rgba(157, 128, 230, 0.06)`.
- **Dynamic Cursor Glow**: Soft `400px` tracking radial overlay around the user's cursor using the same ambient tokens.

---

*This design system is implemented in `globals.css` and applied natively across all React components.*
