

# Reposition as a Product-Based iOS App Studio

Right now the site reads like an agency ("we build for clients"). We'll repivot the messaging, sections, and CTAs so it reads as a product company that ships its own iOS apps directly to Apple users worldwide.

## Messaging Shift (Agency → Product Company)

| Area | Before (agency) | After (product co.) |
|---|---|---|
| Hero badge | "iOS-first studio · App Store specialists" | "Made for iPhone · Loved worldwide" |
| Hero headline | "We Build High-Performance iOS Apps" | "Apps We Build. Worlds You Love." |
| Hero subcopy | "From concept to App Store launch — we design, build, and ship..." | "We're a product studio crafting our own iOS apps — used by millions of Apple fans across 90+ countries." |
| Primary CTA | "View Our Work" | "Explore Our Apps" |
| Secondary CTA | "Start a project" | "Download on the App Store" |
| Navbar CTA | "Start a project" | "Get our apps" |
| Section: Services | Client services (Design, Dev, Publishing, Maintenance) | **Replace** with "Why our apps" (What makes our products great) |
| Section: Portfolio "Selected work" / "case study" | Reads like client work | Rename to "Our Apps" with App Store-style cards (rating, downloads, "Get" button) |
| Section: Process "From idea to App Store" | Client engagement flow | **Replace** with "How we craft our apps" — internal product journey |
| Section: About | "founders trust us with their first app" | "An indie iOS product studio" — focus on team building their own apps |
| Section: Contact "Let's build your next app" / contact form | Client lead form | **Replace** with "Stay in the loop" — email signup for new app launches + App Store badge links |
| Footer tagline | "Crafted in Swift" | Keep, add "© LoftiOS — Independent iOS product studio" |

## Section-by-Section Changes

### 1. Hero (`Hero.tsx`)
- Update badge, headline array, subcopy, and the two CTAs.
- Replace "Start a project" with an App Store badge–style button (Apple logo + "Download on the App Store") linking to `#apps`.

### 2. Services → "Why Our Apps" (`Services.tsx`)
- Repurpose the same 4-card grid with new content focused on product qualities:
  - **Native Performance** — Built in Swift/SwiftUI for fluid 120Hz experiences.
  - **Privacy First** — On-device intelligence, zero tracking, no accounts required.
  - **Designed for Delight** — Haptics, animations, and HIG-perfect interactions.
  - **Always Improving** — Frequent updates, listening to our community.
- Section eyebrow: "Our Promise" / Heading: "Why people choose <gradient>our apps</gradient>"

### 3. Portfolio → "Our Apps" (`Portfolio.tsx`)
- Rename eyebrow to "Our Apps", heading to "Apps we've shipped to the world".
- Per app row, replace "Read case study" with two App Store–style actions:
  - **"View on App Store"** (primary, with Apple logo) → opens link
  - **"Learn more"** (secondary) → opens existing modal
- Add a small App Store rating + download count chip ("4.9 ★ · 220k downloads") above the title.
- In the modal, rename Problem/Approach/Result to **"The story"**, **"Behind the build"**, **"In the wild"** so it reads like product storytelling, not client deliverables.

### 4. Process → "How We Craft" (`Process.tsx`)
- Keep the 4-step animated timeline visual, rewrite copy as our internal product cycle:
  - **Spark** — An idea our team can't stop using.
  - **Sketch** — Prototype until it feels inevitable on iPhone.
  - **Ship** — Polish in Swift, test with our community.
  - **Listen** — Update relentlessly based on real users.

### 5. About (`About.tsx`)
- Eyebrow stays "About". Headline: "An indie iOS product studio."
- New body: "We don't build for clients. We build the apps we wish existed — then share them with Apple users in 90+ countries."
- Stats relabel:
  - "Apps shipped" → "Apps in the App Store"
  - "Total downloads" → "Worldwide downloads"
  - "iOS expertise" → "Years shipping on iOS"

### 6. Contact → "Stay in the Loop" (`Contact.tsx`)
- Remove the project-inquiry form. Replace with:
  - Heading: "Be first to try our next app"
  - Email-only signup (single input + "Notify me" button), same toast on submit.
  - Below the form: a row of **App Store badge buttons** linking to each existing app (Pulse, Lumen, Drift, Rhythm, Atlas).

### 7. Navbar (`Navbar.tsx`)
- Rename "Work" link → "Apps".
- Replace "Start a project" CTA with **"Get our apps"** linking to `#portfolio`.

### 8. Footer (`Footer.tsx`)
- Update tagline to "Independent iOS product studio · Crafted in Swift".

## Technical Notes

- All edits are copy + small JSX swaps in existing section files. No new dependencies.
- App Store badge: a reusable inline component using Lucide's `Apple` icon + "Download on the App Store" label, styled as a black pill — used in Hero, Portfolio rows, and Contact.
- Project type gains an optional `appStoreUrl` (defaulting to `#`) so links are wired but harmless until real URLs are provided.
- Animations, layout, mockups, videos, and responsive rules stay exactly as they are — only content/labels/CTAs change.
- No backend changes; the email signup is frontend-only with a toast (matches current contact form behavior).

