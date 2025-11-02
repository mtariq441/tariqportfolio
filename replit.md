# Muhammad Tariq - Portfolio Website

## Overview

This is a premium portfolio website for Muhammad Tariq, a Webflow developer showcasing professional expertise, completed projects, and client success stories. The site features a modern dark theme with neon lime green accents (#C6FF00), glassmorphic UI elements, and smooth animations powered by Framer Motion. The application is built as a single-page application (SPA) with multiple sections including hero, capabilities, portfolio, process timeline, testimonials, blog, and contact.

## Recent Changes (November 2, 2025)

**Client Testimonial Images:**
- Updated testimonials section with actual client profile photos
- Replaced initials-only avatars with professional headshots for all 8 clients
- Implemented AvatarImage component with fallback support for reliability
- Enhanced testimonial credibility and visual appeal with real client faces
- All images imported via @assets alias for proper bundling and optimization

**Loading Screen Optimization:**
- Removed duplicate loading screen from HeroSection component
- Application now shows only one clean loading screen on initial page load
- Improved user experience with smooth, single-phase loading transition
- Hero background image fades in smoothly without secondary loading overlay
- Eliminated potential loading screen flicker and redundant animations

**Calendly Integration:**
- Added Calendly meeting scheduler to the Contact section
- Implemented tabbed interface allowing users to choose between "Send Message" and "Schedule Meeting"
- Calendly widget loads dynamically via official Calendly embed script
- Users can now book 30-minute meetings directly through the portfolio: https://calendly.com/muhammadtariqw33/30min
- Clean UX with Radix UI Tabs component for seamless switching between contact methods

**Portfolio Section Update:**
- Replaced placeholder projects with 10 real client projects
- All projects now include actual screenshots, live URLs, and detailed descriptions
- Project cards are clickable and open project websites in new tabs
- Featured projects include:
  1. Kate Bagoy - Freelance Product Designer Portfolio
  2. 5Four Digital - Full-Service Branding & Web Design Agency
  3. HeyMara - E-Commerce Platform (Shopify Plus Partner)
  4. BH Field Behavioral Health - Bilingual ABA Therapy Practice
  5. Evvvolution - Employee Testimonial Marketing Platform
  6. DealerVault - Automotive Dealership SaaS Platform
  7. Rippleshot - AI-Powered Fraud Intelligence Platform
  8. Record Recharge - Customer Data Verification Platform
  9. Atriz - Modern Recruitment Platform
  10. PFP Clinic Gym - Professional Fitness & Personal Training

**Technical Improvements:**
- Fixed LoadingScreen animation bug that prevented proper exit transitions
- Optimized loading experience with 300ms delay for smooth fade-out
- All project images stored in `attached_assets/` and imported via `@assets` alias
- Enhanced type safety with TypeScript inference from projects array

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- **React 18** with TypeScript as the core UI framework
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **Framer Motion** for animations and page transitions
- **TanStack Query (React Query)** for data fetching and state management

**UI Component System:**
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for styling with custom theme configuration
- **CSS Variables** for dynamic theming (light/dark mode support)
- Components follow atomic design with reusable UI primitives in `client/src/components/ui/`

**Design System:**
- Color scheme: Dark charcoal black (#0E0E0E) backgrounds with neon lime green (#C6FF00) accents
- Typography: Inter for body text, JetBrains Mono for code elements
- Spacing system: Tailwind's standard scale (2, 4, 6, 8, 12, 16, 20, 24)
- Border radius: Custom values (9px, 6px, 3px) defined in tailwind config
- Glassmorphic effects using backdrop-blur and semi-transparent backgrounds

**Animation Strategy:**
- Scroll-triggered animations using Framer Motion's `useInView` hook
- Stagger effects for card grids and timeline elements
- Hover interactions with scale transforms and glow effects
- Parallax effects on hero section responding to mouse movement
- Animated counters for statistics with easing functions

### State Management

**Client-Side State:**
- React Query for server state and async data
- React Context for theme management (light/dark mode)
- Local component state with useState/useReducer hooks
- Custom hooks for reusable logic (use-mobile, use-toast)

**Form Handling:**
- React Hook Form with Zod validation (via @hookform/resolvers)
- Type-safe form schemas using drizzle-zod integration

### Backend Architecture

**Server Setup:**
- **Node.js** runtime with ESM modules
- **Vite dev server** for development (port 5000)
- Express-like server structure (prepared for API routes)
- Static file serving from dist/public in production

**Build Process:**
- Client build: Vite bundles React app to `dist/public`
- Server build: esbuild bundles server code to `dist/index.js`
- Development: tsx with hot module replacement via Vite
- Production: Pre-bundled server with static assets

### Data Layer (Prepared)

**ORM Configuration:**
- **Drizzle ORM** configured for PostgreSQL/Neon database
- Schema definitions expected in shared types
- Migration support via drizzle-kit push command
- Connection via @neondatabase/serverless for edge compatibility

**Session Management:**
- connect-pg-simple for PostgreSQL session storage (configured but not actively used)

### Routing Architecture

**Client-Side Navigation:**
- Single-page application using Wouter
- Hash-based section navigation (#home, #portfolio, #process, etc.)
- Smooth scroll behavior for anchor links
- 404 fallback page component

### Component Architecture

**Page Structure:**
- **Home** - Main landing page composing all sections
- **Navigation** - Sticky header with theme toggle and mobile menu
- **HeroSection** - Full-screen intro with animated text and particles
- **CapabilitiesSection** - Statistics grid with animated counters and tech stack logos
- **PortfolioSection** - 3D card grid with hover effects
- **ProcessSection** - Vertical timeline with alternating cards
- **TestimonialsSection** - Carousel-style testimonial cards
- **BlogSection** - Grid of blog post previews
- **ContactSection** - Contact form with platform links
- **Footer** - Credits and copyright

**Reusable Patterns:**
- Intersection Observer for scroll animations (via Framer Motion)
- Responsive grid layouts (3-column → 2-column → 1-column)
- Card components with glassmorphic styling
- Badge components for categories and tags

### Responsive Design

**Breakpoint Strategy:**
- Mobile-first approach using Tailwind's responsive utilities
- Custom mobile hook (useIsMobile) with 768px breakpoint
- Adaptive layouts: Grid columns adjust per viewport
- Mobile menu with slide-in sheet component
- Touch-optimized interactions

### Asset Management

**Image Handling:**
- Static assets in `attached_assets/` directory
- AI-generated placeholder images for portfolio/blog content
- Vite alias (`@assets`) for clean imports
- Lazy loading via native browser features

## External Dependencies

### UI Component Libraries
- **Radix UI** - Headless component primitives (dialogs, dropdowns, tooltips, etc.)
- **shadcn/ui** - Pre-styled component system built on Radix
- **Lucide React** - Icon library
- **React Icons** - Brand icons (Fiverr, Upwork, LinkedIn, tech logos)

### Animation & Interaction
- **Framer Motion** - Declarative animations and gestures
- **Embla Carousel** - Touch-friendly carousel component
- **cmdk** - Command menu component (keyboard navigation)

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Zod integration for React Hook Form

### Database (Configured)
- **Neon Database** - Serverless PostgreSQL provider
- **Drizzle ORM** - Type-safe database toolkit
- **connect-pg-simple** - PostgreSQL session store

### Utilities
- **date-fns** - Date manipulation and formatting
- **clsx** & **tailwind-merge** - Conditional className utilities
- **class-variance-authority** - Component variant system

### Development Tools
- **TypeScript** - Static type checking
- **Vite** - Build tool with HMR
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast JavaScript bundler
- **Replit plugins** - Development banners and error overlays (dev only)

### Deployment
- **Vercel** - Configured for deployment via vercel.json
- Build outputs to `dist/public` for static hosting
- Environment-aware builds (NODE_ENV detection)