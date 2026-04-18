const SITE = 'https://tariqservices.site';
const FIVERR = 'https://www.fiverr.com/tariq_webflow';

const INTEGRATIONS = [
  {
    category: "Payments & Billing",
    icon: "💳",
    tools: [
      { name: "Stripe", url: "https://stripe.com", desc: "Subscription billing, one-time payments, usage-based pricing, customer portal, and webhook automation." },
      { name: "Stripe Billing", url: "https://stripe.com/billing", desc: "Recurring subscriptions, metered billing, free trials, and invoice management." },
      { name: "Stripe Connect", url: "https://stripe.com/connect", desc: "Multi-party payments, marketplace payouts, and platform fee collection." },
      { name: "Lemon Squeezy", url: "https://lemonsqueezy.com", desc: "Merchant-of-record billing for SaaS. Handles VAT, tax compliance, and global payments." },
    ]
  },
  {
    category: "Authentication & Identity",
    icon: "🔐",
    tools: [
      { name: "Clerk", url: "https://clerk.com", desc: "Drop-in auth with social logins, magic links, MFA, organizations, and role management." },
      { name: "Auth0", url: "https://auth0.com", desc: "Enterprise identity platform for complex auth requirements and SSO." },
      { name: "NextAuth.js", url: "https://next-auth.js.org", desc: "Open-source auth for Next.js with 50+ OAuth providers." },
      { name: "Supabase Auth", url: "https://supabase.com/auth", desc: "Built-in auth tied directly to your Postgres database with RLS." },
    ]
  },
  {
    category: "Database & Backend",
    icon: "🗄️",
    tools: [
      { name: "Supabase", url: "https://supabase.com", desc: "Open-source Firebase alternative. Postgres database, realtime, storage, and edge functions." },
      { name: "Prisma", url: "https://prisma.io", desc: "Type-safe ORM for Node.js. Schema-first database access with migrations." },
      { name: "Drizzle ORM", url: "https://orm.drizzle.team", desc: "Lightweight, type-safe ORM with excellent Next.js and Supabase support." },
      { name: "Neon", url: "https://neon.tech", desc: "Serverless Postgres with branching. Ideal for development environments." },
      { name: "PlanetScale", url: "https://planetscale.com", desc: "Serverless MySQL with schema branching and zero-downtime deployments." },
      { name: "Redis / Upstash", url: "https://upstash.com", desc: "Serverless Redis for caching, rate limiting, and real-time features." },
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    tools: [
      { name: "OpenAI API", url: "https://openai.com/api", desc: "GPT-4o, embeddings, DALL-E image generation, and Whisper speech-to-text." },
      { name: "Anthropic Claude", url: "https://anthropic.com", desc: "Claude 3.5 for complex reasoning, code generation, and document analysis." },
      { name: "Google Gemini", url: "https://deepmind.google/technologies/gemini", desc: "Multimodal AI with long context windows for document-heavy applications." },
      { name: "Vercel AI SDK", url: "https://sdk.vercel.ai", desc: "Unified interface for streaming AI responses in Next.js with tool use support." },
      { name: "Pinecone", url: "https://pinecone.io", desc: "Vector database for semantic search, RAG pipelines, and AI memory." },
      { name: "pgvector", url: "https://github.com/pgvector/pgvector", desc: "Vector similarity search directly in Postgres via Supabase." },
      { name: "LangChain", url: "https://langchain.com", desc: "Framework for building LLM-powered pipelines, agents, and RAG applications." },
    ]
  },
  {
    category: "Email & Notifications",
    icon: "📧",
    tools: [
      { name: "Resend", url: "https://resend.com", desc: "Developer-first email API. React Email templates, high deliverability." },
      { name: "SendGrid", url: "https://sendgrid.com", desc: "Transactional and marketing email at scale. Detailed analytics." },
      { name: "Twilio", url: "https://twilio.com", desc: "SMS, WhatsApp, voice, and OTP verification. 180+ country coverage." },
      { name: "Postmark", url: "https://postmarkapp.com", desc: "Transactional email focused on deliverability. Ideal for receipts and alerts." },
      { name: "GMass", url: "https://gmass.co", desc: "Gmail-based mass email automation. Integrates for bulk campaign dashboards." },
      { name: "Loops", url: "https://loops.so", desc: "Email for SaaS — lifecycle emails, onboarding sequences, and user events." },
    ]
  },
  {
    category: "Frontend & UI",
    icon: "🎨",
    tools: [
      { name: "Next.js", url: "https://nextjs.org", desc: "The React framework for production SaaS. App Router, server actions, and RSC." },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", desc: "Utility-first CSS framework. Used in 95% of my SaaS builds." },
      { name: "Shadcn/ui", url: "https://ui.shadcn.com", desc: "Copy-paste UI component library built on Radix. Beautiful, accessible, customisable." },
      { name: "Framer Motion", url: "https://framer.com/motion", desc: "Production-ready animation library for React. Used for all premium UI animations." },
      { name: "Recharts", url: "https://recharts.org", desc: "React chart library. Used for analytics dashboards, metric displays, and reports." },
    ]
  },
  {
    category: "Deployment & Infrastructure",
    icon: "🚀",
    tools: [
      { name: "Replit", url: "https://replit.com", desc: "My primary deployment platform. Build, run, and deploy SaaS in minutes. Zero DevOps." },
      { name: "Vercel", url: "https://vercel.com", desc: "Edge network deployment for Next.js with instant global CDN." },
      { name: "Cloudflare", url: "https://cloudflare.com", desc: "DNS, DDoS protection, and edge caching for high-traffic applications." },
      { name: "AWS S3", url: "https://aws.amazon.com/s3", desc: "Object storage for user uploads, exports, and generated files via presigned URLs." },
    ]
  },
  {
    category: "Analytics & Monitoring",
    icon: "📊",
    tools: [
      { name: "PostHog", url: "https://posthog.com", desc: "Open-source product analytics. Feature flags, session recording, and funnels." },
      { name: "Sentry", url: "https://sentry.io", desc: "Error tracking and performance monitoring. Essential for production SaaS." },
      { name: "Plausible", url: "https://plausible.io", desc: "Privacy-friendly website analytics. GDPR compliant without cookie banners." },
      { name: "Baremetrics", url: "https://baremetrics.com", desc: "Stripe metrics dashboard. MRR, churn, LTV. Or I build a custom version for your stack." },
      { name: "Logflare / Pino", url: "https://logflare.app", desc: "Structured logging and log aggregation for Node.js SaaS backends." },
    ]
  },
  {
    category: "CRM & Customer Success",
    icon: "🤝",
    tools: [
      { name: "HubSpot", url: "https://hubspot.com", desc: "CRM integration for lead capture, contact management, and pipeline visibility." },
      { name: "Intercom", url: "https://intercom.com", desc: "In-app chat, user onboarding, and support ticketing." },
      { name: "Crisp", url: "https://crisp.chat", desc: "Lightweight live chat for SaaS. Cheaper Intercom alternative with good APIs." },
      { name: "Customer.io", url: "https://customer.io", desc: "Behavioural email automation. Send emails triggered by user actions." },
    ]
  },
  {
    category: "Social Media & Marketing",
    icon: "📣",
    tools: [
      { name: "SocialBee", url: "https://socialbee.com", desc: "Social media scheduling. I build SaaS integrations that connect with SocialBee's API." },
      { name: "Meta Ads API", url: "https://developers.facebook.com/docs/marketing-api", desc: "Facebook and Instagram ad management, campaign automation, and ROAS tracking." },
      { name: "Google Ads API", url: "https://developers.google.com/google-ads/api", desc: "Campaign management, keyword tracking, and performance reporting." },
      { name: "LinkedIn API", url: "https://developer.linkedin.com", desc: "Profile data, content posting, and company page management for B2B SaaS." },
    ]
  },
  {
    category: "Developer Tools & Workflow",
    icon: "🛠️",
    tools: [
      { name: "GitHub", url: "https://github.com", desc: "Version control, code review, and CI/CD pipelines via GitHub Actions." },
      { name: "Zod", url: "https://zod.dev", desc: "TypeScript schema validation for API inputs, form data, and environment variables." },
      { name: "React Hook Form", url: "https://react-hook-form.com", desc: "Performant forms with validation. Used in every SaaS onboarding and settings page." },
      { name: "BullMQ", url: "https://bullmq.io", desc: "Job queue for background tasks, email sending, and scheduled operations." },
      { name: "Inngest", url: "https://inngest.com", desc: "Serverless background jobs and workflow orchestration for Next.js and Vercel." },
    ]
  },
];

export function getIntegrationsHtml(): string {
  const allToolNames = INTEGRATIONS.flatMap(cat => cat.tools.map(t => t.name));
  const toolCount = allToolNames.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tools & Integrations — Muhammad Tariq SaaS Developer",
    "description": `Muhammad Tariq integrates ${toolCount}+ tools and APIs into production SaaS products. Stripe, OpenAI, Twilio, Supabase, Clerk, and more.`,
    "url": `${SITE}/integrations`,
    "author": {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      "name": "Muhammad Tariq"
    }
  };

  const categorySections = INTEGRATIONS.map(cat => `
    <section class="cat-section" aria-labelledby="cat-${cat.category.toLowerCase().replace(/\s+&?\s*/g, '-')}">
      <div class="cat-header">
        <span class="cat-icon">${cat.icon}</span>
        <h2 id="cat-${cat.category.toLowerCase().replace(/\s+&?\s*/g, '-')}" class="cat-title">${cat.category}</h2>
      </div>
      <div class="tools-grid">
        ${cat.tools.map(tool => `
        <article class="tool-card">
          <div class="tool-name-row">
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-name">${tool.name}</a>
            <span class="tool-arrow">↗</span>
          </div>
          <p class="tool-desc">${tool.desc}</p>
        </article>`).join('')}
      </div>
    </section>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tools &amp; Integrations — Muhammad Tariq | Replit SaaS Developer</title>
  <meta name="description" content="Muhammad Tariq integrates ${toolCount}+ APIs and tools into production SaaS products: Stripe, OpenAI, Twilio, Supabase, Clerk, GMass, SocialBee, Baremetrics, and more.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${SITE}/integrations">

  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE}/integrations">
  <meta property="og:title" content="Tools &amp; Integrations — Muhammad Tariq SaaS Developer">
  <meta property="og:description" content="${toolCount}+ APIs and tools I integrate into production SaaS products. Stripe, OpenAI, Twilio, Supabase, and more.">
  <meta property="og:image" content="${SITE}/og-image.png">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Tools &amp; Integrations — Muhammad Tariq SaaS Developer">
  <meta name="twitter:description" content="${toolCount}+ APIs and tools integrated into production SaaS products.">
  <meta name="twitter:image" content="${SITE}/og-image.png">

  <link rel="icon" type="image/png" href="/favicon.png">
  <meta name="theme-color" content="#3700FF">

  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--blue:#3700FF;--neon:#CCFF00;--dark:#0a0a14;--surface:rgba(255,255,255,0.04);--border:rgba(255,255,255,0.08)}
    body{font-family:'Inter',system-ui,sans-serif;background:var(--dark);color:#fff;line-height:1.6;overflow-x:hidden}
    a{color:var(--neon);text-decoration:none}
    a:hover{text-decoration:underline}

    /* NAV */
    nav{position:sticky;top:0;z-index:100;background:rgba(10,10,20,0.97);backdrop-filter:blur(24px);border-bottom:1px solid rgba(204,255,0,0.1);padding:0 1.5rem}
    .nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:64px;gap:1rem}
    .nav-logo{display:flex;align-items:center;gap:.75rem;color:#fff;font-weight:900;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase}
    .nav-badge{width:36px;height:36px;border-radius:10px;background:var(--neon);color:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem}
    .nav-links{display:flex;align-items:center;gap:2rem}
    .nav-links a{color:rgba(255,255,255,.65);font-size:.82rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
    .nav-links a.active{color:var(--neon)}
    .nav-cta{background:var(--neon);color:var(--blue);font-weight:900;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:999px}
    @media(max-width:700px){.nav-links{display:none}}

    /* HERO */
    .hero{background:var(--blue);padding:5rem 1.5rem 4rem;position:relative;overflow:hidden}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 50% at 50% 100%,rgba(204,255,0,.15) 0%,transparent 70%);pointer-events:none}
    .hero-inner{max-width:900px;margin:0 auto;position:relative;z-index:1;text-align:center}
    .hero-label{display:inline-flex;align-items:center;gap:.5rem;font-size:.7rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:var(--neon);margin-bottom:1.25rem}
    .hero h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:900;line-height:1.05;letter-spacing:-.03em;margin-bottom:1.25rem}
    .hero h1 span{color:var(--neon)}
    .hero-desc{font-size:1.1rem;color:rgba(255,255,255,.65);max-width:640px;margin:0 auto 2.5rem}
    .hero-stats{display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;padding-top:2rem;border-top:1px solid rgba(255,255,255,.1)}
    .stat-v{display:block;font-size:2rem;font-weight:900;color:var(--neon);line-height:1}
    .stat-l{display:block;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.4);margin-top:.3rem}
    .hire-btn{display:inline-flex;align-items:center;gap:.5rem;background:var(--neon);color:var(--blue);font-weight:900;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;padding:.9rem 2rem;border-radius:999px;margin-bottom:2.5rem}

    /* MAIN CONTENT */
    main{max-width:1200px;margin:0 auto;padding:4rem 1.5rem}

    /* CATEGORY SECTIONS */
    .cat-section{margin-bottom:4rem}
    .cat-header{display:flex;align-items:center;gap:1rem;margin-bottom:1.75rem;padding-bottom:1rem;border-bottom:1px solid var(--border)}
    .cat-icon{font-size:1.75rem;line-height:1}
    .cat-title{font-size:1.4rem;font-weight:900;color:#fff;letter-spacing:-.02em}
    .tools-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem}

    /* TOOL CARDS */
    .tool-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:1.5rem;transition:border-color .2s,background .2s}
    .tool-card:hover{border-color:rgba(204,255,0,.3);background:rgba(204,255,0,.04)}
    .tool-name-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}
    .tool-name{font-weight:800;font-size:1rem;color:#fff}
    .tool-name:hover{color:var(--neon);text-decoration:none}
    .tool-arrow{font-size:.85rem;color:rgba(255,255,255,.3)}
    .tool-desc{font-size:.87rem;color:rgba(255,255,255,.55);line-height:1.65}

    /* CTA BANNER */
    .cta-banner{background:var(--blue);border-radius:24px;padding:3.5rem;text-align:center;margin-top:3rem}
    .cta-banner h2{font-size:clamp(1.5rem,3vw,2.5rem);font-weight:900;margin-bottom:1rem}
    .cta-banner p{color:rgba(255,255,255,.65);max-width:560px;margin:0 auto 2rem;font-size:1.05rem}
    .cta-btn{display:inline-flex;align-items:center;gap:.5rem;background:var(--neon);color:var(--blue);font-weight:900;font-size:.9rem;letter-spacing:.1em;text-transform:uppercase;padding:1rem 2.5rem;border-radius:999px}

    /* FOOTER */
    footer{border-top:1px solid var(--border);padding:2.5rem 1.5rem;margin-top:2rem}
    .footer-inner{max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}
    .footer-inner p{font-size:.82rem;color:rgba(255,255,255,.3)}
    .footer-links{display:flex;gap:1.5rem}
    .footer-links a{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.25)}
  </style>
</head>
<body>
  <nav aria-label="Main navigation">
    <div class="nav-inner">
      <a href="${SITE}" class="nav-logo">
        <div class="nav-badge">MT</div>
        <span>Muhammad Tariq</span>
      </a>
      <div class="nav-links">
        <a href="${SITE}/#services">Services</a>
        <a href="${SITE}/#portfolio">Portfolio</a>
        <a href="${SITE}/blog">Blog</a>
        <a href="${SITE}/integrations" class="active">Integrations</a>
        <a href="${SITE}/#contact">Contact</a>
      </div>
      <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="nav-cta">Start a Project</a>
    </div>
  </nav>

  <header class="hero" aria-labelledby="page-heading">
    <div class="hero-inner">
      <div class="hero-label">&#9679; Full-Stack SaaS Integrations</div>
      <h1 id="page-heading">
        <span>${toolCount}+ APIs &amp; Tools</span><br>
        I Integrate Into Your SaaS
      </h1>
      <p class="hero-desc">
        From Stripe subscription billing to Twilio SMS to OpenAI-powered features — I integrate the tools your SaaS needs to generate revenue and retain customers. 350+ apps shipped, $27M+ in client revenue.
      </p>
      <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="hire-btn">
        Hire Me on Fiverr →
      </a>
      <div class="hero-stats">
        <div>
          <span class="stat-v">350+</span>
          <span class="stat-l">Apps Shipped</span>
        </div>
        <div>
          <span class="stat-v">$27M+</span>
          <span class="stat-l">Client Revenue</span>
        </div>
        <div>
          <span class="stat-v">${toolCount}+</span>
          <span class="stat-l">Integrations</span>
        </div>
        <div>
          <span class="stat-v">2–4 wks</span>
          <span class="stat-l">Avg. Delivery</span>
        </div>
      </div>
    </div>
  </header>

  <main>
    ${categorySections}

    <section class="cta-banner" aria-labelledby="cta-heading">
      <h2 id="cta-heading">Need an Integration Built Into Your SaaS?</h2>
      <p>I take 2 clients per month and ship production-ready integrations in 2–4 weeks. If you have a specific API or tool you need wired into your product, let's talk.</p>
      <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="cta-btn">DM Me on Fiverr →</a>
    </section>
  </main>

  <footer>
    <div class="footer-inner">
      <p>© ${new Date().getFullYear()} <a href="${SITE}" style="color:rgba(255,255,255,.3)">Muhammad Tariq</a> — Replit SaaS Developer</p>
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="${SITE}">Home</a>
        <a href="${SITE}/blog">Blog</a>
        <a href="${SITE}/integrations">Integrations</a>
        <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">Fiverr</a>
      </nav>
    </div>
  </footer>
</body>
</html>`;
}
