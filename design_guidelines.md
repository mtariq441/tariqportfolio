# Muhammad Tariq - Webflow Developer Portfolio Design Guidelines

## Design Approach
**Premium Dark Aesthetic** - Creating a visually striking portfolio with glassmorphic UI, neon accents, and smooth animations that showcases professional expertise while maintaining modern, clean aesthetics.

## Brand Colors
- **Neon Lime Green**: #C6FF00 (highlights, buttons, icons, accent text, glowing effects)
- **Dark Charcoal Black**: #0E0E0E (background sections, base layout)

## Typography
- **Headings**: Bold, modern sans-serif with neon lime green accents
- **Hero Title**: Extra large, animated reveal effect
- **Body Text**: Light gray (#E5E5E5) on dark backgrounds for readability
- **Accent Text**: Neon lime green for CTAs and highlights

## Layout System
Use Tailwind spacing: **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm across all sections.

## Page Structure & Components

### 1. Header/Hero Section
- **Large hero image**: Abstract tech/development workspace with gradient overlay (dark to transparent)
- Animated text reveal: "Hi, I'm Muhammad Tariq — Webflow Developer | $27M+ Client Growth | Development Expert"
- Two prominent CTAs: "Hire Me" (neon lime green with gradient hover), "View My Work" (outlined)
- Subtle looping particle animation background layer
- Buttons over hero image have blurred backgrounds (backdrop-blur-md)

### 2. About/Capabilities Section
- **4-column grid** (2 on tablet, 1 on mobile) showcasing:
  - Animated counter cards: "157+ Projects", "6+ Years Experience", "$27M+ Client Growth"
  - Client logo showcase grid with hover glow animations (neon lime green)
- Each card: glassmorphic background (rgba(255,255,255,0.05)), subtle border, hover scale effect
- Icons from Heroicons for each capability

### 3. Portfolio/Work Section
- **3-column masonry grid** (2 on tablet, 1 on mobile)
- Project cards with:
  - Project thumbnail images
  - Animated gradient borders (dark to neon lime green)
  - Hover scale and glow effect
  - Overlay with project title and category on hover
- Each card uses glassmorphic treatment

### 4. Process Timeline Section
- **Vertical timeline** with alternating left/right cards
- Steps numbered 01, 02, 03, 04
- Each step card fades in with stagger effect
- Icons representing each phase
- Connecting line with neon lime green glow

### 5. Testimonials Section
- **Horizontal slider** with 3 visible cards
- Each testimonial card includes:
  - Client photo (circular, bordered with neon lime green)
  - Company logo
  - Quote text
  - Client name and title
- 3D tilt-on-hover effect
- Glassmorphic card backgrounds

### 6. Blog Section
- Title: "Insights from My Journey"
- **3-column grid** of blog cards
- Categories: Webflow Tips, SEO Strategies, Freelancing, Design Psychology
- Each card: featured image, title, excerpt, read time, animated on scroll
- Hover state: lift and neon glow border

### 7. Contact/Hire Me Section
- **2-column layout**: Contact form (left) + Platform links (right)
- Animated contact form with glassmorphic background
- Platform icons with magnetic hover effect:
  - Fiverr, Upwork, Contra, LinkedIn, WhatsApp, Email
- Each icon: neon lime green on hover with glow effect

### 8. Footer
- **Full-width glassmorphic bar**
- Animated gradient border (top)
- Text: "Built with ❤️ by Muhammad Tariq using React, Framer Motion & Tailwind CSS"
- Social links with hover animations

## Component Library

### Cards
- Glass background: rgba(255,255,255,0.05)
- Border: 1px solid rgba(198,255,0,0.1)
- Border radius: 16px
- Backdrop blur: medium
- Hover: scale(1.02) + neon glow

### Buttons
- Primary: Neon lime green (#C6FF00) background, dark text, gradient hover
- Secondary: Outlined with neon lime green, transparent background
- Blurred background when over images
- No custom hover states (use default Button component)

### Icons
- Heroicons library via CDN
- Size: 24px standard, 32px for hero section
- Neon lime green color on dark backgrounds

### Input Fields
- Glassmorphic background
- Neon lime green focus border
- Light placeholder text (#9CA3AF)

## Animations Strategy

### Page Load
- Smooth fade-in for all sections
- Stagger effect for grid items
- Text reveal animations for headings

### Scroll Triggers
- Fade up + scale for cards
- Counter animations when in viewport
- Timeline steps appear sequentially

### Hover Effects
- Scale transforms (1.02-1.05)
- Neon glow shadows
- 3D tilt for testimonial cards
- Magnetic cursor effect on social icons

### Transitions
- Smooth page transitions
- Modal animations for project details
- Slider transitions for testimonials

## Images
- **Hero Section**: Large full-width abstract tech/workspace image with dark gradient overlay
- **Portfolio Cards**: Project screenshots/mockups
- **Testimonials**: Circular client photos
- **Blog Cards**: Featured article images
- All images optimized for web, lazy-loaded

## Spacing & Rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Card gaps: gap-6 to gap-8
- Max content width: max-w-7xl
- Prose content: max-w-4xl

## Accessibility
- High contrast between neon lime green and dark backgrounds
- Focus states clearly visible with neon borders
- Semantic HTML structure
- ARIA labels for all interactive elements
- Keyboard navigation support

This premium dark portfolio balances bold neon aesthetics with professional credibility, creating an immersive, animated experience that showcases expertise while maintaining usability.