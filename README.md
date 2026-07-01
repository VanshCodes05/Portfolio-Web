# Vansh Saini — Personal Portfolio Website

A fully animated, 3D-interactive personal portfolio built for **Vansh Saini** — B.Tech CSE student (AI/ML specialization) at Quantum Global Campus, Roorkee. The site combines scroll-driven storytelling, a rigged 3D character, physics-based tech spheres, and smooth GSAP animations into a single-page experience.

---

## Table of Contents

- [Overview](#overview)
- [Website Sections](#website-sections)
- [Tech Stack](#tech-stack)
- [Programming Languages & Tools](#programming-languages--tools)
- [Databases](#databases)
- [Color Palette & Design System](#color-palette--design-system)
- [Typography](#typography)
- [Animations & Motion](#animations--motion)
- [3D Character System](#3d-character-system)
- [Tech Stack 3D Scene](#tech-stack-3d-scene)
- [Projects Showcased](#projects-showcased)
- [Project Structure](#project-structure)
- [Dependencies Explained](#dependencies-explained)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Assets & Models](#assets--models)
- [Responsive Behavior](#responsive-behavior)
- [License](#license)

---

## Overview

| Detail | Info |
|--------|------|
| **Owner** | Vansh Saini |
| **Role** | Software Engineer · ML Developer |
| **Education** | B.Tech CSE (AI/ML), Quantum Global Campus, Roorkee |
| **Email** | vanshsaini8457@gmail.com |
| **GitHub** | [github.com/vanshsaini](https://github.com/vanshsaini) |
| **LinkedIn** | [linkedin.com/in/vansh-saini-a0bb193382](https://www.linkedin.com/in/vansh-saini-a0bb193382) |
| **Location** | Roorkee, Uttarakhand, India |

This portfolio is **not a backend application** — it is a frontend-only React SPA. There is no server, API, or database connected to the website itself. Contact form uses `mailto:` to open the user's email client.

---

## Website Sections

| Section | Component | Purpose |
|---------|-----------|---------|
| **Loading Screen** | `Loading.tsx` | Asset preload progress, marquee text, intro animation before site unlocks |
| **Landing / Hero** | `Landing.tsx` | Name, role titles (Software Engineer / ML Dev), animated text swap |
| **3D Character** | `Character/Scene.tsx` | Interactive rigged 3D model — head tracking, typing, intro animation |
| **About** | `About.tsx` | Bio, education, skills summary |
| **What I Do** | `WhatIDo.tsx` | Full Stack & AI/ML skill cards with expandable tags |
| **Career** | `Career.tsx` | Timeline of internships, hackathons, and club roles |
| **Work** | `Work.tsx` | Project carousel with images, tools, and live links |
| **Tech Stack** | `TechStack.tsx` | 3D physics scene with floating tech-logo spheres (desktop only) |
| **Contact** | `Contact.tsx` | Contact form, email/phone/location, social links, footer |
| **Navbar** | `Navbar.tsx` | Fixed navigation + smooth scroll wrapper |
| **Social Icons** | `SocialIcons.tsx` | GitHub, LinkedIn, Email, certifications, resume download |
| **Custom Cursor** | `Cursor.tsx` | Animated cursor with hover states |

---

## Tech Stack

### Core Frontend

| Technology | Version | Used For |
|------------|---------|----------|
| **React** | 18.3 | UI components, state management, lazy loading |
| **TypeScript** | 5.5 | Type-safe development across all components |
| **Vite** | 5.4 | Fast dev server, production bundling |
| **HTML5** | — | Semantic page structure (`index.html`) |
| **CSS3** | — | All styling — component-scoped CSS files |

### Animation & Scroll

| Technology | Used For |
|------------|----------|
| **GSAP** | Core animation engine — tweens, timelines, easing |
| **ScrollTrigger** | Scroll-linked animations for sections, text reveals, character movement |
| **ScrollSmoother** | Butter-smooth scroll experience (`smooth: 1.7`, `effects: true`) |
| **SplitText** | Splits headings/paragraphs into chars/words/lines for staggered reveal |
| **react-fast-marquee** | Scrolling "Software Engineer / ML Developer" text on loading screen |

### 3D & WebGL

| Technology | Used For |
|------------|----------|
| **Three.js** | Vanilla WebGL renderer for the hero 3D character |
| **three-stdlib** | GLTFLoader, DRACOLoader, RGBELoader for models & HDR environment |
| **@react-three/fiber** | React renderer for Three.js (Tech Stack section) |
| **@react-three/drei** | HDR `Environment` map for Tech Stack scene |
| **@react-three/rapier** | Physics engine — 30 floating spheres with mouse interaction |
| **@react-three/postprocessing** | N8AO ambient occlusion pass on Tech Stack canvas |
| **DRACO** | Compressed 3D mesh decoding (`public/draco/`) |

### Icons & UI

| Technology | Used For |
|------------|----------|
| **react-icons** | GitHub, LinkedIn, Email, arrows, send, copyright icons |

### Dev Tools

| Technology | Used For |
|------------|----------|
| **ESLint** | Code linting |
| **TypeScript ESLint** | TS-specific lint rules |

---

## Programming Languages & Tools

### Languages used in this project

| Language | Where Used |
|----------|------------|
| **TypeScript** | All React components, utils, context, types |
| **JavaScript** | GSAP animation scripts, Three.js logic, DRACO decoder |
| **CSS** | 15 component stylesheets + `index.css` + `App.css` |
| **HTML** | `index.html` entry point |

### Languages & frameworks showcased (skills/projects)

| Skill / Tool | Where Mentioned |
|--------------|-----------------|
| **JavaScript** | What I Do, Work projects, Career |
| **TypeScript** | What I Do, Work projects, this portfolio |
| **React.js** | What I Do, Work projects, Tech Stack textures |
| **Next.js** | What I Do, Work projects |
| **Node.js** | What I Do, Work (CRM project), Tech Stack sphere |
| **Express.js** | Work (AI-Powered CRM project) |
| **Python** | What I Do (AI/ML section) |
| **Tailwind CSS** | Work projects (external projects) |
| **Chart.js** | Work (CRM project) |
| **REST APIs** | What I Do tags |
| **Git / GitHub** | What I Do tags, Social Icons |
| **scikit-learn, NumPy, Pandas** | What I Do (ML section) |
| **Generative AI / Copilot Studio** | What I Do, Certifications |

---

## Databases

> **Note:** This portfolio website does **not** use any database. It is a static frontend app.

**MongoDB** is listed because it was used in one of the showcased projects:

| Project | Database | Purpose |
|---------|----------|---------|
| **AI-Powered CRM System** | MongoDB | Backend data storage for the CRM application (external project) |

Other data-related tools mentioned in skills:
- **MySQL** — Tech Stack 3D sphere texture (skill showcase)
- **MongoDB** — Tech Stack 3D sphere texture + CRM project

---

## Color Palette & Design System

### CSS Variables (`index.css`)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--backgroundColor` | `#0a0e17` | Main dark navy background |
| `--accentColor` | `#5eead4` | Primary accent — links, highlights, buttons, headings |
| Body text | `#eae5ec` | Default paragraph and body text |
| Body (initial) | `#050810` | Darker background before loading completes |

### Accent & Highlight Colors

| Color | Hex | Where Used |
|-------|-----|------------|
| Teal / Cyan accent | `#5eead4` | Navbar links, section highlights, buttons, career dot glow |
| Cyan highlight | `#22d3ee` | 3D point light, landing circles, character rim |
| Teal dark | `#14b8a6` | Landing text, career timeline gradient |
| Teal mid | `#0d9488` | Career timeline gradient start |
| Bright teal | `#2dd4bf` | Loading screen accent |
| Mint loading bg | `#e0f2f1` | Loading screen background |
| Purple cursor | `#e6c3ff` | Custom cursor color |
| Glow cyan | `#67e8f9`, `#a5f3fc` | Career dot pulse animation |
| Screen light | `#B0F5EA` | 3D monitor emissive glow on character |
| White | `#ffffff` | Borders, What I Do card lines |
| Muted gray | `#adacac`, `#ccc`, `#363636` | Secondary text, carousel borders |
| Light text | `#f4f0f5` | Navbar title, contact headings |

### 3D Character Colors

| Part | Color | Hex |
|------|-------|-----|
| Shirt | Brown | `#8B4513` |
| Pants | Black | `#000000` |
| Directional light | Teal | `#5eead4` |
| Point light | Cyan | `#22d3ee` |
| Monitor screen | White | `#FFFFFF` |

### Design Theme

Dark navy base with **teal/cyan accent** — modern, tech-focused, high contrast. Loading screen uses a lighter mint palette that transitions into the dark theme on unlock.

---

## Typography

| Font | Source | Usage |
|------|--------|-------|
| **Geist** | Google Fonts | All headings (h1–h6) and body text |

Loaded via:
```css
@import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
```

---

## Animations & Motion

### 1. Loading Screen (`Loading.tsx` + `initialFX.ts`)

| Animation | Library | Description |
|-----------|---------|-------------|
| Progress counter | Custom interval | Simulated 0→100% load progress |
| Marquee text | react-fast-marquee | "Software Engineer / ML Developer" scrolling |
| Mouse-follow glow | CSS variables | `--mouse-x`, `--mouse-y` tracking |
| Loader ball game | CSS animation | Bouncing ball between lines |
| Welcome transition | CSS classes | `loading-complete` → `loading-clicked` unlock |
| Background fade | GSAP | Body color `#050810` → `#0a0e17` |
| Landing text reveal | GSAP + SplitText | Chars fade in with blur + y-offset stagger |
| Role text loop | GSAP timeline | "Engineer" ↔ "ML Dev" infinite swap animation |
| Header/icons fade in | GSAP | Navbar and social icons opacity reveal |

### 2. Smooth Scroll (`Navbar.tsx`)

| Setting | Value | Purpose |
|---------|-------|---------|
| `ScrollSmoother` | `smooth: 1.7, speed: 1.7` | Smooth interpolated scrolling |
| `effects` | `true` | Parallax-style scroll effects |
| `autoResize` | `true` | Recalculates on window resize |
| Starts paused | `smoother.paused(true)` | Waits until loading completes |

### 3. Character Scroll Story (`GsapScroll.ts`)

Scroll-scrubbed timelines tied to page sections:

| Timeline | Trigger Section | What Animates |
|----------|----------------|---------------|
| **tl1** | Landing → About | Character Y rotation, camera Z, character slides left, landing text fades |
| **tl2** | About → What I Do | Camera flies back, monitor screen lights up, neck bone rotates, character rim fades |
| **tl3** | What I Do | Character exits viewport upward, section parallax |
| **careerTimeline** | Career | Timeline height grows, info boxes stagger in, dot animation stops |

All timelines use `scrub: true` — animation position is directly tied to scroll.

### 4. Text Reveal (`splitText.ts`)

| Target | Split Type | Animation |
|--------|-----------|-------------|
| `.para` elements | words + lines | Fade up on scroll into view |
| `.title` elements | chars + lines | Fade up + rotate on scroll |
| Desktop trigger | `20% 60%` | Earlier reveal on large screens |
| Mobile trigger | `top 60%` | Later reveal on small screens |
| Skipped below | `900px` width | No split on small mobile |

### 5. Custom Cursor (`Cursor.tsx`)

- GSAP-smoothed follow cursor with delay easing
- Expands on social icon hover (`data-cursor="icons"`)
- Hides on form/links (`data-cursor="disable"`)

### 6. Social Icons (`SocialIcons.tsx`)

- Magnetic icon effect — icons follow mouse within hover zone
- `requestAnimationFrame` lerp animation per icon

### 7. Work & Certifications Carousels

- CSS `translateX` slide transitions
- Dot navigation + arrow buttons
- 500ms animation lock to prevent rapid clicking

### 8. What I Do Cards

- Touch/click expand on mobile (`ScrollTrigger.isTouch`)
- SVG dashed border animations
- Active card highlight toggle

### 9. Career Timeline

- Animated glowing dot with CSS `box-shadow` pulse
- Scroll-scrubbed timeline height expansion
- Gradient line (`#0d9488` → `#ffffff`)

---

## 3D Character System

**Location:** `src/components/Character/`

### Model Pipeline

```
character.enc (AES encrypted GLB)
    → decrypt.ts (AES decryption)
    → GLTFLoader + DRACOLoader
    → Three.js Scene
    → WebGLRenderer (vanilla, not R3F)
```

| File | Purpose |
|------|---------|
| `Scene.tsx` | WebGL renderer, camera, animation loop, mouse/touch input |
| `character.ts` | Model loading, DRACO decode, shirt/pants color theming |
| `lighting.ts` | HDR environment map, directional + point lights, GSAP light fade-in |
| `animationUtils.ts` | AnimationMixer — intro, typing, blink, keyboard, eyebrow hover |
| `mouseUtils.ts` | Head bone (`spine006`) follows mouse/touch with lerp |
| `resizeUtils.ts` | Canvas resize + ScrollTrigger timeline rebuild |
| `decrypt.ts` | AES decrypt for encrypted model file |

### Character Animations (GLTF Clips)

| Clip Name | Purpose |
|-----------|---------|
| `introAnimation` | Character intro pose on load |
| `key1`, `key2`, `key5`, `key6` | Keyboard key press animations |
| `typing` | Hand/arm typing motion (filtered to finger/arm bones) |
| `Blink` | Eye blink loop after intro |
| `browup` | Eyebrow raise on face hover |

### 3D Lighting

| Light | Color | Purpose |
|-------|-------|---------|
| Directional | `#5eead4` | Main character lighting + shadows (1024px shadow map) |
| Point | `#22d3ee` | Screen glow — intensity tied to monitor emissive |
| HDR Environment | `char_enviorment.hdr` | Image-based reflections and ambient lighting |
| ACES Filmic | — | Tone mapping for cinematic look |

### Interaction

- **Mouse move** — head rotates to follow cursor (when `scrollY < 200`)
- **Face hover** — eyebrow raise animation
- **Scroll** — full body position/rotation driven by GSAP ScrollTrigger

---

## Tech Stack 3D Scene

**Location:** `src/components/TechStack.tsx` (desktop only, `> 1024px`)

| Feature | Detail |
|---------|--------|
| **Renderer** | React Three Fiber Canvas |
| **Physics** | Rapier — 30 rigid body spheres |
| **Post-processing** | N8AO ambient occlusion (`color: #0f002c`) |
| **Interaction** | Spheres attracted toward mouse pointer when scrolled past Work section |
| **Shadows** | Spot light with 512px shadow map |
| **HDR** | Same `char_enviorment.hdr` environment map |

### Tech Logo Spheres

| Texture | Technology |
|---------|-----------|
| `react2.webp` | React.js |
| `next2.webp` | Next.js |
| `node2.webp` | Node.js |
| `express.webp` | Express.js |
| `mongo.webp` | MongoDB |
| `mysql.webp` | MySQL |
| `typescript.webp` | TypeScript |
| `javascript.webp` | JavaScript |

---

## Projects Showcased

| # | Project | Category | Tech Used |
|---|---------|----------|-----------|
| 1 | Royal Spice Restaurant | Business Website | React.js, Tailwind CSS, JavaScript, Vercel |
| 2 | AI-Powered CRM System | Full Stack App | JavaScript, Chart.js, Node.js, Express.js, **MongoDB** |
| 3 | Personal Portfolio Website | Web Development | Next.js, React, TypeScript, Tailwind CSS, Vercel |
| 4 | Viraasat — Ethnic Wear Store | Hackathon E-Commerce | Next.js, React, TypeScript, Tailwind CSS, Context API |

---

## Certifications

Accessible via sidebar social dock (`SocialIcons.tsx`):

| Certification | Provider |
|---------------|----------|
| What Is Generative AI? | LinkedIn Learning |
| Microsoft Copilot Studio | Microsoft |
| Excel Automation using ChatGPT | Professional Certification |
| National Financial Literacy | Certification Program |

---

## Project Structure

```
src/
├── main.tsx                  # React entry point
├── App.tsx                   # Root app with lazy-loaded components
├── index.css                 # Global styles, CSS variables, font
├── App.css                   # Layout utilities
├── context/
│   └── LoadingProvider.tsx   # Loading state context
├── data/
│   └── boneData.ts           # 3D character bone names for animation filtering
├── components/
│   ├── MainContainer.tsx     # Page layout + section orchestration
│   ├── Navbar.tsx            # Navigation + ScrollSmoother
│   ├── Landing.tsx           # Hero section
│   ├── About.tsx
│   ├── WhatIDo.tsx
│   ├── Career.tsx
│   ├── Work.tsx
│   ├── TechStack.tsx         # 3D physics tech spheres
│   ├── Contact.tsx
│   ├── Certifications.tsx    # Cert carousel (standalone component)
│   ├── Loading.tsx           # Loading screen
│   ├── Cursor.tsx            # Custom cursor
│   ├── SocialIcons.tsx       # Side dock links
│   ├── HoverLinks.tsx        # Navbar link hover effect
│   ├── ProjectThumbnail.tsx  # Project/cert thumbnail cards
│   ├── WorkImage.tsx         # Work section images
│   ├── Character/
│   │   ├── index.tsx
│   │   ├── Scene.tsx         # Three.js character scene
│   │   └── utils/            # character, lighting, animations, decrypt, etc.
│   ├── utils/
│   │   ├── GsapScroll.ts     # Character scroll timelines
│   │   ├── initialFX.ts      # Landing intro animations
│   │   └── splitText.ts      # Section text reveal animations
│   └── styles/               # Component CSS files
public/
├── images/                   # Project screenshots, tech logos
├── models/
│   ├── character.enc         # Encrypted 3D character model
│   ├── character.glb         # Unencrypted GLB (dev reference)
│   └── char_enviorment.hdr   # HDR environment map
├── draco/                    # DRACO mesh decoder
└── Vansh_Saini_Resume.pdf    # Downloadable resume
```

---

## Dependencies Explained

| Package | Purpose in This Project |
|---------|------------------------|
| `react` / `react-dom` | UI framework |
| `typescript` | Type safety |
| `vite` | Build tool & dev server |
| `gsap` | All scroll and UI animations |
| `@gsap/react` | Installed (available for React GSAP hooks) |
| `three` | 3D rendering engine |
| `three-stdlib` | Loaders (GLTF, DRACO, RGBE) |
| `@react-three/fiber` | React renderer for Tech Stack 3D scene |
| `@react-three/drei` | Three.js helpers (Environment HDR) |
| `@react-three/rapier` | Physics for floating tech spheres |
| `@react-three/postprocessing` | N8AO post-processing effect |
| `@react-three/cannon` | Installed (not actively used — Rapier is used instead) |
| `react-fast-marquee` | Loading screen scrolling text |
| `react-icons` | Icon library |
| `@vercel/analytics` | Installed for deployment analytics on Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd "M....VANSH. PORTFOLIO"

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with `--host` (network accessible) |
| `npm run build` | TypeScript compile + Vite production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Assets & Models

| Asset | Path | Purpose |
|-------|------|---------|
| Encrypted character | `public/models/character.enc` | Production 3D model (AES encrypted) |
| HDR environment | `public/models/char_enviorment.hdr` | Lighting/reflections for 3D scenes |
| DRACO decoder | `public/draco/` | Decompresses 3D mesh geometry |
| Tech logos | `public/images/*.webp` | Textures on Tech Stack spheres |
| Project images | `public/images/*.png` | Work section carousel screenshots |
| Resume PDF | `public/Vansh_Saini_Resume.pdf` | Downloadable resume from sidebar |

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| `> 1024px` (desktop) | Full experience — 3D character outside scroll wrapper, Tech Stack section visible |
| `≤ 1024px` (tablet/mobile) | Character inside Landing section, Tech Stack hidden, simplified scroll triggers |
| `≤ 900px` | SplitText animations disabled, smaller typography |
| `≤ 768px` | Container width adjusts to `94%` |
| Touch devices | What I Do cards use click-to-expand instead of hover |

---

## License

This project is available under the [MIT License](LICENSE).

---

**Built with passion by [Vansh Saini](https://github.com/vanshsaini)** · © 2026
