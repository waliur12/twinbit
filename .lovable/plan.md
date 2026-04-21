
# iOS App Development Studio — Premium Animated Website

A dark, futuristic single-page marketing site for an iOS app development company, with scroll-driven storytelling, glassmorphism, and fluid micro-interactions inspired by detail.co.

## Design System

- **Theme**: Deep navy/black background (`#0A0E1A` base, layered surfaces)
- **Primary**: Electric blue (`hsl(217 100% 60%)`)
- **Accent**: Purple gradient (`hsl(270 90% 65%)` → electric blue)
- **Glow effects**: Soft blue/purple radial halos behind key elements
- **Typography**: Modern sans-serif (Inter/Geist-style), oversized display weights for headlines, tight tracking
- **Surfaces**: Glassmorphism cards — `backdrop-blur`, subtle white border at 8% opacity, gradient overlays
- **Buttons**: Fully rounded pill shape, primary uses gradient fill with glow on hover
- **Grid**: Generous whitespace, 12-col responsive grid, max-width container

## Sections & Interactions

### 1. Hero
- Sticky animated background: layered gradient blobs (blue/purple) drifting slowly, subtle grain
- Floating abstract 3D-style orbs that parallax with mouse movement
- Headline **"We Build High-Performance iOS Apps"** — letters fade/rise in sequence on load
- Subheading + pill CTA **"View Our Work"** with glow + arrow micro-animation
- Scroll cue indicator at bottom

### 2. Services
- 4 glassmorphism cards in a responsive grid: iOS App Development, UI/UX Design, App Store Publishing, App Maintenance
- Each card: Lucide icon in gradient circle, title, short description
- Staggered fade-up entrance triggered on scroll
- Hover: slight scale-up, border glow, icon pulse

### 3. Portfolio
- Horizontal scrolling showcase pinned during vertical scroll (GSAP-style feel using Framer Motion's `useScroll`)
- Each project rendered inside a realistic iPhone mockup frame (CSS-built device with notch + screen)
- Card details: app name, category tag, short description
- Hover preview: screen content shifts/scales subtly
- Click → modal with expanded case study (problem, approach, result, screenshots)

### 4. Process
- Horizontal timeline: Idea & Planning → Design → Development → Launch
- Animated connecting line draws across as user scrolls
- Each step node lights up sequentially with number, title, description
- Mobile: collapses to vertical timeline

### 5. About
- Split layout: animated illustration (gradient device cluster / abstract iOS UI fragments) on one side, copy on the other
- Animated stat counters (apps shipped, downloads, years)
- Subtle drifting gradient background

### 6. Contact
- Centered headline **"Let's Build Your Next App"**
- Glassmorphism form: Name, Email, Project Details
- Submit button with gradient + glow; toast confirmation on submit (frontend only — wires to backend later)
- Floating ambient shapes in background

### Global
- **Sticky navbar** with glass blur, anchor links to each section, smooth scroll
- **Footer** with brand mark, quick links, social icons
- Page-wide custom scroll feel; reduced-motion respected

## Tech Approach

- **Framer Motion** for entrance, scroll, hover, and stagger animations (already-friendly with React; lighter than GSAP for this scope)
- Component-based structure under `src/components/sections/` — `Hero`, `Services`, `Portfolio`, `Process`, `About`, `Contact`, plus shared `Navbar`, `Footer`, `GlassCard`, `PhoneMockup`, `GradientBlob`
- Design tokens added to `index.css` + `tailwind.config.ts` (electric blue, purple, glass surfaces, glow shadows, gradient utilities, new keyframes for float/shimmer)
- Fully responsive (mobile, tablet, desktop), keyboard-accessible nav, semantic HTML — clean handoff for Laravel Blade/API integration later
