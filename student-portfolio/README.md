# 🌌 Midnight Glassmorphism Portfolio — Gopikrishna

A production-ready, single-page personal portfolio website built from scratch with **Clean HTML5**, **Modern CSS3**, **Tailwind CSS**, and **Vanilla JavaScript**.

Designed specifically for **Gopikrishna**, a 10th-grade graduate from **Vidyaniketan Matric Higher Secondary School** (85.4% High Honors) exploring **C++**, **modern responsive web design**, and **creative digital arts**.

---

## 🎨 Design Direction

- **Style**: Frosted glassmorphism (`backdrop-filter: blur(18px)`), top highlight sheens, and soft glowing ambient mesh.
- **Color Palette (Midnight Dark Mode)**:
  - Background: `#0a0a0a` (Near-black)
  - Cards & Glass Surfaces: `rgba(26, 26, 26, 0.65)` (`#1a1a1a` base)
  - Subtle Borders: `#2a2a2a`
  - Text: `#ffffff` (Pure white headers) and `#e0e0e0` (Soft white body)
  - Muted Text: `#9e9e9e`
  - Accents: Electric Blue (`#3b82f6` / `#60a5fa`), Neon Purple (`#8b5cf6`), and Emerald (`#10b981`).

---

## ⚡ Interactive Features

1. **🌌 Interactive Hero Canvas**:
   - High-performance HTML5 2D Canvas particle constellation network.
   - Dynamic connection lines between neighboring particles.
   - Interactive mouse repulsion physics (particles smoothly scatter away from the cursor and gently drift back).
   - Fully responsive on mobile, tablet, and desktop resize.

2. **🖼️ Full-Featured Image Lightbox Gallery**:
   - Clickable preview thumbnails on project cards.
   - Fullscreen frosted dark overlay with smooth zoom-in animation.
   - Previous (`←`) and Next (`→`) navigation arrows.
   - Keyboard accessibility (`Esc` to close, `Left` and `Right` arrow keys to browse).
   - Image counter (e.g. `Image 2 of 6`) and descriptive captions.

3. **📜 Scroll-Triggered Fade-In Animations**:
   - Driven by `IntersectionObserver` for 60 FPS scrolling performance without external libraries.
   - Cards, timeline items, and section headers smoothly translate and fade in upon entering the viewport.

4. **⬆️ Floating Back-to-Top Button**:
   - Frosted circular button at the bottom-right that smoothly fades in after scrolling past 380px.
   - 1-click smooth animated scroll back to the hero section.

5. **📱 Responsive Mobile Hamburger Menu**:
   - Sticky frosted navigation bar.
   - Animated hamburger button toggle (`menu` / `x`).
   - Smooth slide-down frosted mobile drawer menu that automatically closes when any link is tapped.

6. **🔍 Project Details Modal**:
   - In-depth modal dialog for each project displaying bullet points, engineering highlights, tags, and source code / demo links.

7. **📬 Working Contact Form & Utilities**:
   - Client-side validation with real-time character counter (`0 / 500`).
   - Instant toast notification feedback.
   - Automated `mailto:` message drafting.
   - 1-click email copy button with clipboard API.

---

## 📂 Project Structure

```text
student-portfolio/
├── index.html        # Semantic HTML5 layout, canvas, lightbox modal, and components
├── css/
│   └── style.css     # Midnight dark palette, frosted glassmorphism, animations, lightbox
├── js/
│   ├── data.js       # Central data file with Gopikrishna's details, skills, and gallery
│   └── main.js       # Particle canvas engine, lightbox, scroll animations, and form
└── README.md         # Documentation & guide
```

---

## 🚀 How to Run Locally

No build tools, npm packages, or server installations are required:

1. Open File Explorer to:
   ```text
   C:\Users\gopi0\.gemini\antigravity\scratch\student-portfolio\
   ```
2. Double-click **`index.html`** to launch it immediately in Google Chrome, Microsoft Edge, or Firefox.

*(Optional)* To preview via Python HTTP server:
```powershell
cd C:\Users\gopi0\.gemini\antigravity\scratch\student-portfolio
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## ✏️ How to Customize

All content is cleanly separated from layout logic in:
👉 **[`js/data.js`](file:///C:/Users/gopi0/.gemini/antigravity/scratch/student-portfolio/js/data.js)**

- **Profile & Contact**: Name, bio, email, school, and board score.
- **Skills Matrix**: Add or update languages, subjects, tools, and percentage proficiencies.
- **Projects & Gallery**: Update project descriptions, bullet points, tags, and image URLs.
- **Achievements**: Add new certificates, hackathons, or school awards.
