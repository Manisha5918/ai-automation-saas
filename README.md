# AIFlow - Premium AI Data Automation SaaS Platform

### 🏆 Built for **FrontEnd Battle 3.0** — VibeCoding Competition
#### **Indian Institute of Technology (IIT) Bhubaneswar**

An advanced, high-converting, responsive landing page built under strict time constraints for the **Next-Gen AI Platform Speed Run** problem statement.

---

## ⚡ The Challenge & Submission Guidelines
The objective was to create a premium SaaS landing page demonstrating:
- **Architectural Integrity:** Modular, performant React state structures with minimal re-renders.
- **Motion Choreography:** Smooth, hardware-accelerated transitions under a strict 500ms initial page load threshold.
- **SEO & Layout Hygiene:** Perfect responsive design, semantic elements, and social/metadata optimization.
- **Zero-Dependency Core Components:** No pre-built component libraries (like Radix, Shadcn) or external animation engines (like Framer Motion) for key features.

---

## 🚀 Key Features Implemented

### 📊 1. Matrix-Driven Pricing Engine & Performance-Isolated Currency Switcher
- **Dynamic Billing Logic:** Computes subscription pricing on-the-fly using a multi-dimensional matrix. It dynamically factors in regional tariff coefficients for **INR (₹)**, **USD ($)**, and **EUR (€)**, and applies a **20% flat discount** for annual billing cycles.
- **State Isolation Guardrail:** Prevented global component reflows or parent node layout thrashing. State updates are strictly localized, preventing layout thrashing and unnecessary Chrome DevTools performance costs.
- **Responsive Layout:** Automatically scales from 3-column desktop layouts to fluid stacked viewports.

### 🍱 2. Zero-Dependency Bento-to-Accordion Wrapper
- **Adaptive Layout:** On desktop viewports, features are presented in a modern, highly interactive **Bento-Grid** layout with mouse-spotlight radial glows and 3D tilting effects. On mobile screen sizes, it seamlessly transitions into a touch-optimized **Accordion list**.
- **Context Lock Constraint:** Shared active-index state ensures that if a user is interacting with a specific bento node on desktop and resizes the viewport past the mobile breakpoint, the matching accordion panel automatically and smoothly opens.
- **Pure CSS Motion:** Built completely from scratch without external runtime libraries or component frameworks, utilizing optimized CSS transitions for maximum performance.

### 🎮 3. Interactive Webhook Pipeline Simulator (Hero Section)
- **Live Simulator:** Contains an interactive action row inside the SaaS dashboard mockup. Tapping the **⚡ Trigger Run** button initiates a dynamic visual execution.
- **Motion Choreography:** Watch webhooks travel step-by-step from the trigger listener, through the AI agent parser, to the final database dispatch nodes, reflecting active states and updating logs live.

### 🔒 4. Credential Vault & Self-Healing Node Live Previews
- **Interactive Mockups:** Implemented custom interactive tools inside the Bento cards:
  - **Vault Secrets Toggle:** Decrypts database secrets with a visual toggle animation to demonstrate AES-256 secure sandboxing.
  - **Self-Healing Simulation:** Lets users trigger a node outage and watch the auto-recovery handler repair and reroute connection pools in real-time.

### 🎨 5. Premium UI/UX Polish
- **Mouse-Tracking Spotlight:** Flashlight reveal gradient mask following the cursor coordinate flow (`GradientSpotlight`).
- **Reading Progress Bar:** Top-fixed progress indicator rendering page scroll percentage (`ScrollProgress`).
- **Floating Particles Field:** Drifting, interactive `<canvas>` particle network with mouse repulsion physics for a lively background atmosphere.
- **Compact & High-Converting Layout:** Visually optimized spacing and heights ensuring tier specifications, price metrics, and CTA buttons are clearly visible together without unnecessary scrolling.

---

## 🛠️ Technology Stack
- **Framework:** React 19 (Strict Mode)
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 (built with `@tailwindcss/vite` plugin for optimized compiler compilation) & Vanilla CSS for specific animations
- **Icons:** SVG-optimized custom pack

---

## 💻 Local Setup & Development

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd ai-automation-saas
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production (Strict Verification check)
```bash
npm run build
```
The production bundle generates highly optimized, compressed HTML, CSS, and JS chunks under the `dist/` directory.

---

## 📈 Performance & SEO Hygiene
- **Sub-500ms Orchestration:** Hardware-accelerated entry transitions.
- **Semantic Structure:** Fully structured using `<header>`, `<main>`, `<section>`, and `<footer>` elements rather than deep non-semantic `div` structures.
- **SEO Metadata:** Configured title headers, meta descriptions, Open Graph (OG), and Twitter Card integrations for high crawlability index.
