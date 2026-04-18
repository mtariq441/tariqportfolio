import { ssrPage } from "./ssrShared.js";
import { POSTS2 } from "./blogPosts2.js";
import { POSTS3 } from "./blogPosts3.js";
import { POSTS4 } from "./blogPosts4.js";

const SITE = "https://tariqservices.site";
const FIVERR = "https://www.fiverr.com/tariq_webflow";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  dateModified?: string;
  readTime: string;
  body: string;
}

function ctaCard(headline = "Ready to Ship Your SaaS?") {
  return `
<div class="cta-card">
  <h3>${headline}</h3>
  <p>I take 2 clients per month. If you're serious about building a $1M+ SaaS on Replit, let's talk now.</p>
  <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="cta-btn">DM Me on Fiverr →</a>
</div>`;
}

export const POSTS: BlogPost[] = [
  {
    slug: "how-i-built-350-saas-apps-on-replit",
    title: "How I Built 350+ SaaS Apps on Replit — And What Every Founder Needs to Know",
    description: "Muhammad Tariq shares the real lessons from building over 350 SaaS products on Replit, including the patterns that generate $1M+ and the mistakes most developers make.",
    tag: "Case Study",
    date: "April 17, 2026",
    readTime: "7 min read",
    body: `
<div class="article-body">
  <p>When people hear I've built <strong>350+ SaaS applications on Replit</strong>, the first question is always the same: "How is that even possible?" The second question is usually: "Are they real products or just demos?"</p>
  <p>The answer to both: it's very possible, and they're very real. Across those 350+ apps, my clients have collectively generated <strong>over $27 million in revenue</strong>. That's not a typo.</p>
  <p>Here's what I've learned building at that scale — and what every founder considering a SaaS build needs to understand before they hire anyone.</p>

  <div class="stat-row">
    <div class="stat-card"><div class="val">350+</div><div class="lbl">Apps Built</div></div>
    <div class="stat-card"><div class="val">$27M+</div><div class="lbl">Revenue Generated</div></div>
    <div class="stat-card"><div class="val">157+</div><div class="lbl">Founders Served</div></div>
    <div class="stat-card"><div class="val">2–4 wks</div><div class="lbl">Avg. Delivery</div></div>
  </div>

  <h2 id="why-replit">Why Replit Is the Fastest Path to Production</h2>
  <p>Most developers will tell you to start with a local setup, configure your environment, set up CI/CD, provision cloud servers, handle SSL, configure a CDN… I used to do that too. It takes weeks before you write a single line of product logic.</p>
  <p>Replit eliminates all of that. Your app is running in the cloud from line one. Deployment is a button click. Collaboration is real-time. For SaaS founders who need speed to market, <strong>Replit is the single biggest competitive advantage I've found in six years of building.</strong></p>

  <h2 id="pattern">The Pattern That Makes $1M+ SaaS Products</h2>
  <p>After 350+ apps, I've noticed the same patterns in the products that succeed versus the ones that don't:</p>
  <h3>1. They solve a specific, painful problem for a specific niche</h3>
  <p>Not "project management for everyone." But "project management for architecture firms that bill hourly." The narrower the niche, the easier it is to reach customers and charge premium prices.</p>
  <h3>2. They have built-in recurring revenue from day one</h3>
  <p>Every product I recommend has a subscription component. Not a one-time purchase, not a freemium model — a paid subscription with a clear value proposition for why customers should keep paying every month.</p>
  <h3>3. They ship fast and iterate based on real feedback</h3>
  <p>My record is a full SaaS product in <strong>11 days</strong>. Not a prototype — a live, paying-customer-ready app. Founders who obsess over perfect features before launch almost always lose to founders who ship fast and learn fast.</p>

  <h2 id="stack">The Tech Stack I Use for Every Build</h2>
  <p>I've experimented with dozens of stacks across 350+ apps. Today, my default stack is:</p>
  <ul>
    <li><strong>Next.js</strong> — Full-stack React framework, excellent for SEO and performance</li>
    <li><strong>Supabase</strong> — PostgreSQL database with built-in auth, real-time, and storage</li>
    <li><strong>Stripe</strong> — Subscription billing, one-time payments, and invoicing</li>
    <li><strong>Clerk</strong> — Authentication with SSO, multi-tenancy, and team features</li>
    <li><strong>Replit</strong> — Hosting, deployment, and development environment</li>
  </ul>
  <p>This stack takes a product from zero to paying customers in 2–4 weeks consistently. I know every edge case, every gotcha, and every optimization because I've used it hundreds of times.</p>

  <h2 id="hiring">The Mistake Most Founders Make When Hiring a Developer</h2>
  <p>The biggest mistake? Hiring the cheapest developer and expecting quality results. The second biggest mistake? Hiring an expensive agency and waiting six months for a prototype.</p>
  <p>The sweet spot is an experienced specialist — someone who has built the exact type of product you need, many times. When you hire a developer who has built 350+ SaaS apps, you're not paying for their learning curve. You're paying for their <strong>accumulated knowledge of what works.</strong></p>

  ${ctaCard("Want to Be My Next Success Story?")}

  <h2 id="what-i-look-for">What I Look for Before Taking on a Client</h2>
  <p>I only take 2 clients per month. Here's what I look for:</p>
  <ul>
    <li>A founder who understands their market and customer pain point</li>
    <li>A clear MVP scope (not "I want to build the next Salesforce")</li>
    <li>A business model with at least one clear monetization path</li>
    <li>A founder who wants to move fast, not deliberate forever</li>
  </ul>
  <p>If that sounds like you, <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">reach out on Fiverr</a>. I respond to every message personally.</p>

  <blockquote>Muhammad delivered our entire SaaS platform in 3 weeks. We were live with paying customers before our competitors even finished their design phase. — Founder, $400K ARR SaaS</blockquote>
</div>`,
  },
  {
    slug: "replit-saas-developer-guide-2025",
    title: "Why Smart Founders Are Using Replit to Ship SaaS in 2025 (And How to Find the Right Developer)",
    description: "Replit has changed how SaaS products are built and shipped. Here's why the fastest-growing startups are betting on Replit, and how to find a developer who actually knows the platform.",
    tag: "Guide",
    date: "April 15, 2026",
    readTime: "6 min read",
    body: `
<div class="article-body">
  <p>Three years ago, if you told a VC-backed startup to build their product on Replit, they'd laugh. Today, some of the fastest-growing SaaS companies — including products generating $1M+ ARR — are built entirely on Replit.</p>
  <p>What changed? And more importantly, how do you find a <strong>Replit SaaS developer</strong> who can actually deliver?</p>

  <h2 id="what-is-replit">What Replit Actually Is (And Why Developers Love It)</h2>
  <p>Replit is a cloud-based development and deployment platform. You write code, and it runs — immediately, in the cloud, accessible from anywhere. There's no local setup, no server provisioning, no DevOps headaches.</p>
  <p>For SaaS development specifically, Replit offers:</p>
  <ul>
    <li><strong>Instant deployment</strong> — push a change and it's live in seconds</li>
    <li><strong>Always-on hosting</strong> — your app runs 24/7 without managing servers</li>
    <li><strong>Built-in collaboration</strong> — real-time code editing like Google Docs</li>
    <li><strong>Custom domains</strong> — connect your domain directly to your Replit deployment</li>
    <li><strong>Database support</strong> — PostgreSQL, key-value stores, and object storage built in</li>
  </ul>

  <div class="stat-row">
    <div class="stat-card"><div class="val">10x</div><div class="lbl">Faster Setup</div></div>
    <div class="stat-card"><div class="val">2–4 wks</div><div class="lbl">MVP Timeline</div></div>
    <div class="stat-card"><div class="val">$0</div><div class="lbl">DevOps Cost</div></div>
  </div>

  <h2 id="speed-advantage">The Real Advantage: Speed to Market</h2>
  <p>The traditional path to launching a SaaS product: hire a team, spend 3 months building, spend another month on DevOps, beta launch after 6 months. By then, competitors have moved in.</p>
  <p>The Replit path: hire one experienced Replit developer, have an MVP live in 2–4 weeks, get real customer feedback immediately, iterate. I've helped founders go from idea to first paying customer in under 30 days, multiple times.</p>
  <p><strong>Speed is a competitive advantage.</strong> Every week your product isn't live is a week competitors are learning while you're still planning.</p>

  ${ctaCard("Need a Replit SaaS Developer?")}

  <h2 id="what-to-look-for">What to Look for in a Replit Developer</h2>
  <p>Not every developer who says "I know Replit" can actually build a production SaaS on it. Here's what separates real Replit developers from people who've just used it for tutorials:</p>
  <h3>1. A portfolio of shipped products</h3>
  <p>Ask to see live apps, not screenshots. Real Replit SaaS developers have real, live products with actual users — not demo videos.</p>
  <h3>2. Knowledge of the full stack</h3>
  <p>Replit is the deployment platform. The actual product needs a proper stack: Next.js or similar framework, a real database (Supabase or PostgreSQL), authentication (Clerk or Auth.js), and payment processing (Stripe). A developer who only knows Replit basics can't build a production SaaS.</p>
  <h3>3. Experience with recurring billing</h3>
  <p>SaaS is built on subscriptions. Your developer needs to have implemented Stripe Billing, handled webhooks, managed subscription states, and dealt with failed payments — before. Not as a learning exercise on your project.</p>
  <h3>4. Communication skills</h3>
  <p>The best technical skill in the world is useless if the developer can't explain trade-offs, set realistic timelines, and flag risks early. In my experience, the projects that succeed are ones where the developer and founder communicate like partners.</p>

  <h2 id="red-flags">Red Flags When Hiring a Replit Developer</h2>
  <ul>
    <li>No live portfolio or only demo projects</li>
    <li>Can't explain their tech stack or why they chose it</li>
    <li>Promises features in unrealistic timeframes</li>
    <li>No experience with payment integration</li>
    <li>Doesn't ask questions about your business model</li>
  </ul>

  <blockquote>The right Replit developer doesn't just write code. They ask about your customers, your revenue model, and your growth targets — because those decisions shape every technical choice.</blockquote>

  <h2 id="where-to-find">Where to Find Replit SaaS Developers</h2>
  <p>The best place I've seen for finding vetted Replit developers is <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">Fiverr</a>. You can see real reviews, real portfolios, and communicate directly before committing.</p>
  <p>If you want to skip the search, I'm available for 2 projects per month at <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">fiverr.com/tariq_webflow</a>.</p>
</div>`,
  },
  {
    slug: "saas-tech-stack-nextjs-supabase-stripe",
    title: "The Exact Tech Stack I Use for Every $1M+ SaaS Build: Next.js + Supabase + Stripe",
    description: "After 350+ SaaS builds, Muhammad Tariq reveals the full tech stack that consistently produces $1M+ products: Next.js, Supabase, Stripe, and Clerk — and exactly why each tool earns its place.",
    tag: "Technical",
    date: "April 12, 2026",
    readTime: "8 min read",
    body: `
<div class="article-body">
  <p>After building <strong>350+ SaaS products</strong> across six years, I've tried almost every tool, framework, and database combination imaginable. Today, I use the same four-tool stack for virtually every SaaS build. It's not trendy — it's proven.</p>

  <div class="stat-row">
    <div class="stat-card"><div class="val">Next.js</div><div class="lbl">Framework</div></div>
    <div class="stat-card"><div class="val">Supabase</div><div class="lbl">Database & Auth</div></div>
    <div class="stat-card"><div class="val">Stripe</div><div class="lbl">Payments</div></div>
    <div class="stat-card"><div class="val">Clerk</div><div class="lbl">Auth & Teams</div></div>
  </div>

  <h2 id="nextjs">Next.js — The Framework</h2>
  <p><strong>Why not plain React? Why not Remix or SvelteKit?</strong> I've used all of them. Next.js wins for SaaS for three reasons:</p>
  <ul>
    <li><strong>App Router + Server Components</strong> — render data on the server, ship less JavaScript to the client, faster load times</li>
    <li><strong>Built-in API routes</strong> — your frontend and backend in one codebase, perfect for fast iteration</li>
    <li><strong>SEO out of the box</strong> — server-side rendering means Google can read your marketing pages</li>
  </ul>
  <p>The alternative is building a separate backend and a separate frontend. That's two codebases, two deployment pipelines, and twice the complexity. For a two-week MVP, that's not viable.</p>

  <h2 id="supabase">Supabase — The Database</h2>
  <p>Supabase is PostgreSQL with superpowers. You get a full relational database, plus:</p>
  <ul>
    <li><strong>Row-level security</strong> — users can only see their own data, enforced at the database level</li>
    <li><strong>Real-time subscriptions</strong> — push updates to clients without polling</li>
    <li><strong>Built-in storage</strong> — upload files, images, and documents without a separate service</li>
    <li><strong>Edge functions</strong> — run serverless functions close to your users</li>
  </ul>
  <p>The free tier handles most early-stage SaaS products comfortably. You scale to paid plans only when you have the revenue to justify it.</p>

  ${ctaCard("Want This Stack Built for You?")}

  <h2 id="stripe">Stripe — Billing and Payments</h2>
  <p>There is no viable alternative to Stripe for SaaS billing in 2025. Stripe's SaaS-specific features are unmatched:</p>
  <ul>
    <li><strong>Stripe Billing</strong> — subscription management, proration, trial periods, usage-based billing</li>
    <li><strong>Stripe Customer Portal</strong> — let customers manage their own subscriptions without you building a UI</li>
    <li><strong>Webhooks</strong> — handle payment success, failure, cancellation, and refunds automatically</li>
    <li><strong>Stripe Tax</strong> — automatic tax calculation and collection for global SaaS</li>
  </ul>
  <p>Every SaaS I build has Stripe Billing configured from day one. If money can't flow in on day one, you don't have a business.</p>

  <h2 id="clerk">Clerk — Authentication and Team Management</h2>
  <p>Authentication sounds simple until you need: social logins, multi-factor authentication, organization accounts, role-based permissions, and SSO for enterprise clients. Building that from scratch takes weeks.</p>
  <p>Clerk provides all of it with a few hours of integration. Their <strong>Organizations</strong> feature is particularly powerful for B2B SaaS — each customer can have their own team with different roles, all managed by Clerk.</p>

  <h2 id="replit">Replit — Deployment and Hosting</h2>
  <p>Instead of provisioning servers, configuring Nginx, setting up SSL, and managing deployment pipelines — you connect your domain, set your environment variables, and click deploy. SSL is automatic. Scaling is managed. The entire DevOps layer is abstracted away.</p>

  <h2 id="cost">Total Cost at Launch (Month 1)</h2>
  <ul>
    <li>Next.js: Free (open source)</li>
    <li>Supabase: Free tier (up to 500MB database, 1GB storage)</li>
    <li>Stripe: 2.9% + 30¢ per transaction (no monthly fee)</li>
    <li>Clerk: Free up to 10,000 monthly active users</li>
    <li>Replit: ~$25/month for the Core plan</li>
  </ul>
  <p><strong>Total: ~$25/month</strong> to run a production SaaS. You pay for tools as you grow.</p>

  <blockquote>The best tech stack is the one your team can move fastest with. After 350+ apps, this is the stack I can move fastest with — and the results speak for themselves.</blockquote>
</div>`,
  },
  {
    slug: "hire-saas-developer-fiverr",
    title: "How to Hire a SaaS Developer on Fiverr: A Guide From a Top-Rated Dev",
    description: "Finding a great SaaS developer on Fiverr is possible — if you know what to look for. Muhammad Tariq shares exactly how to evaluate developers, what questions to ask, and red flags to avoid.",
    tag: "Hiring Guide",
    date: "April 10, 2026",
    readTime: "6 min read",
    body: `
<div class="article-body">
  <p>I've been a full-stack SaaS developer on Fiverr for years. I've seen hundreds of project briefs, and I've talked to founders who had great experiences hiring on Fiverr — and founders who had very bad ones. The difference is almost never the platform. It's the process.</p>

  <h2 id="be-specific">Step 1: Be Specific About What You're Building</h2>
  <p>The most common mistake founders make on Fiverr: they write a vague brief. "I need a web app built" tells a developer almost nothing. Before you search, write down:</p>
  <ul>
    <li>What does your app do in one sentence?</li>
    <li>Who are your users and what problem does it solve for them?</li>
    <li>What features are in the MVP?</li>
    <li>What's your payment model — subscription, one-time, freemium?</li>
    <li>What's your timeline and budget?</li>
  </ul>

  <h2 id="search-specialists">Step 2: Search for Specialists, Not Generalists</h2>
  <p>On Fiverr, search for <strong>"SaaS developer"</strong> or <strong>"Next.js developer"</strong> — not just "web developer." Filter for sellers with:</p>
  <ul>
    <li><strong>Level Two or Top Rated</strong> status</li>
    <li><strong>4.9+ rating</strong> with at least 20 reviews</li>
    <li><strong>Recent orders</strong> — activity in the last 30 days</li>
  </ul>

  <h2 id="read-reviews">Step 3: Read Reviews Carefully</h2>
  <p>Don't just look at the star rating. Read the actual text of reviews. Look for reviews that mention specific features delivered, repeat clients, and communication quality.</p>

  ${ctaCard("Looking for a Top-Rated SaaS Developer?")}

  <h2 id="questions">Step 4: Ask These Questions Before Ordering</h2>
  <h3>Technical questions</h3>
  <ul>
    <li>"What stack do you use for SaaS products and why?"</li>
    <li>"Have you integrated Stripe subscriptions before? Can you show me a live example?"</li>
    <li>"How do you handle user authentication and multi-tenancy?"</li>
    <li>"What does your deployment setup look like?"</li>
  </ul>
  <h3>Process questions</h3>
  <ul>
    <li>"What's your process for understanding requirements?"</li>
    <li>"How do you handle scope changes mid-project?"</li>
    <li>"What milestones do you use for a typical SaaS project?"</li>
    <li>"What happens if something breaks after delivery?"</li>
  </ul>

  <h2 id="small-task">Step 5: Start With a Small Task</h2>
  <p>Before committing to a large project, commission a small task first. This tells you: Can they follow instructions? Do they communicate clearly? Is the code quality good?</p>

  <h2 id="red-flags">Red Flags to Avoid</h2>
  <ul>
    <li><strong>Impossibly low prices</strong> — quality SaaS development costs money</li>
    <li><strong>No portfolio</strong> or only screenshots (not live apps)</li>
    <li><strong>Can't answer technical questions</strong> specifically</li>
    <li><strong>Promises everything immediately</strong> without asking questions</li>
    <li><strong>Slow communication</strong> before you've even hired them</li>
  </ul>

  <blockquote>The best Fiverr developers treat every project like a business partnership, not a transaction. They ask about your customers, your revenue model, and your growth goals.</blockquote>

  <p>If you're ready to start, <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">my Fiverr profile is here</a>. I respond within 24 hours and take 2 clients per month.</p>
</div>`,
  },
  {
    slug: "mvp-to-launch-4-weeks-saas",
    title: "MVP to Launch in 4 Weeks: My Exact Process for Building SaaS That Founders Love",
    description: "The 4-week SaaS launch is real — if you follow the right process. Muhammad Tariq breaks down his exact week-by-week plan for taking a SaaS idea from zero to live paying customers.",
    tag: "Process",
    date: "April 8, 2026",
    readTime: "7 min read",
    body: `
<div class="article-body">
  <p>Every founder I work with wants the same thing: a working product in front of real customers as fast as possible. After building 350+ SaaS products, I've refined a process that consistently delivers a launch-ready MVP in <strong>2–4 weeks</strong>.</p>

  <div class="stat-row">
    <div class="stat-card"><div class="val">Week 1</div><div class="lbl">Foundation</div></div>
    <div class="stat-card"><div class="val">Week 2</div><div class="lbl">Core Features</div></div>
    <div class="stat-card"><div class="val">Week 3</div><div class="lbl">Payments & Polish</div></div>
    <div class="stat-card"><div class="val">Week 4</div><div class="lbl">Launch</div></div>
  </div>

  <h2 id="scope-lock">Before Week 1: Scope Lock</h2>
  <p>The projects that blow past deadlines almost always share one cause: the scope wasn't locked before development started. Before I write a single line of code, I do a 2-hour scoping session with the founder. We define:</p>
  <ul>
    <li><strong>The core user journey</strong> — what does a user do from sign-up to getting value?</li>
    <li><strong>The MVP feature list</strong> — maximum 8–10 features</li>
    <li><strong>The payment model</strong> — subscription tiers, pricing, trial period</li>
    <li><strong>The data model</strong> — what entities exist and how do they relate?</li>
    <li><strong>What's explicitly OUT of scope</strong> — as important as what's in scope</li>
  </ul>

  <h2 id="week-1">Week 1: Foundation</h2>
  <p>The first week is infrastructure. It's not glamorous, but it determines everything else.</p>
  <ul>
    <li>Project setup on Replit with Next.js and TypeScript</li>
    <li>Database schema in Supabase — every table, relationship, and index defined upfront</li>
    <li>Authentication with Clerk — sign-up, login, forgot password, email verification</li>
    <li>Basic layout and navigation — header, sidebar, dashboard shell</li>
    <li>Environment configuration — development, staging, production</li>
  </ul>
  <p>By end of week 1, a founder can sign up, log in, and see a dashboard. The plumbing that everything else builds on is solid.</p>

  <h2 id="week-2">Week 2: Core Features</h2>
  <p>This is where the product takes shape. Week 2 focuses exclusively on the features that make the app valuable.</p>
  <ul>
    <li>The primary CRUD operations for the main entities</li>
    <li>The core user workflow — the thing users do in the app every day</li>
    <li>Basic API integrations — any third-party services the app depends on</li>
    <li>Real-time features if needed — Supabase subscriptions for live updates</li>
  </ul>

  ${ctaCard("Want This Process Applied to Your SaaS?")}

  <h2 id="week-3">Week 3: Payments and Polish</h2>
  <p>No SaaS is complete without billing. Week 3 integrates Stripe and addresses the UX quality that converts users into paying customers.</p>
  <ul>
    <li>Stripe Billing integration — subscription plans, trial periods, payment collection</li>
    <li>Customer portal — let users manage their own subscriptions</li>
    <li>Webhook handling — payment success, failure, cancellation events</li>
    <li>Feature gating — premium features locked behind paid plans</li>
    <li>Onboarding flow — first-run experience that guides new users to value</li>
    <li>Email notifications — welcome email, payment receipt, cancellation confirmation</li>
  </ul>

  <h2 id="week-4">Week 4: Launch Readiness</h2>
  <p>The final week is about making the product trustworthy and ready for public launch.</p>
  <ul>
    <li>Error handling — graceful failures, not crashes</li>
    <li>Loading states — every async operation has feedback</li>
    <li>Mobile responsiveness — tested on real devices</li>
    <li>Performance optimization — lazy loading, image optimization, caching</li>
    <li>Security review — authentication, authorization, input validation</li>
    <li>Custom domain setup on Replit</li>
    <li>Analytics integration — track signups, activations, and churn</li>
  </ul>

  <h2 id="after-launch">What Happens After Launch</h2>
  <p>Launch isn't the end — it's the beginning. The first 30 days after launch are the most valuable for learning. I stay available for a 30-day post-launch support period on all projects.</p>

  <blockquote>We went from idea to first paying customer in 23 days. I couldn't believe it was possible until it happened. — B2B SaaS founder, 3 weeks post-launch</blockquote>

  <p>If you have a SaaS idea and want to know if it's feasible in 4 weeks, <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">message me on Fiverr</a> and I'll tell you honestly within 24 hours.</p>
</div>`,
  },
];

const ALL_POSTS: BlogPost[] = [...POSTS, ...POSTS2, ...POSTS3, ...POSTS4];

function parsePostDate(dateStr: string): string {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toISOString().split('T')[0];
}

function tocFromBody(body: string): string {
  const matches = [...body.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)];
  if (matches.length < 2) return '';
  const items = matches.map(m => `<li><a href="#${m[1]}">${m[2]}</a></li>`).join('\n');
  return `
<div class="sidebar-card">
  <h4>Table of Contents</h4>
  <ul class="toc-list">${items}</ul>
</div>`;
}

function relatedPosts(currentSlug: string): string {
  const others = ALL_POSTS.filter(p => p.slug !== currentSlug).slice(0, 2);
  if (!others.length) return '';
  const cards = others.map(p => `
    <a class="bc" href="/blog/${p.slug}" style="padding:1.25rem 1.5rem">
      <div class="bc-tag">${p.tag}</div>
      <h2 style="font-size:1rem;margin-bottom:.4rem">${p.title}</h2>
      <div class="bc-meta"><span class="bc-date">${p.readTime}</span><span class="bc-read">Read</span></div>
    </a>`).join('\n');
  return `
<div class="related">
  <h3>More Articles</h3>
  <div class="related-grid">${cards}</div>
</div>`;
}

function shareButtons(title: string, slug: string): string {
  const url = encodeURIComponent(`${SITE}/blog/${slug}`);
  const text = encodeURIComponent(title);
  return `
<div style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.07)">
  <p style="font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.3);margin-bottom:.85rem">Share this article</p>
  <div class="share-row">
    <a class="share-btn" href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      Twitter / X
    </a>
    <a class="share-btn" href="https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      LinkedIn
    </a>
    <button class="share-btn" onclick="navigator.clipboard.writeText('${SITE}/blog/${slug}').then(function(){this.textContent='✓ Copied!'}.bind(this))" style="cursor:pointer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
      Copy Link
    </button>
  </div>
</div>`;
}

function blogIndexHtml(): string {
  const [featured, ...rest] = ALL_POSTS;

  const featuredCard = `
<a class="bc featured" href="/blog/${featured.slug}">
  <div class="bc-tag">${featured.tag}</div>
  <h2>${featured.title}</h2>
  <p>${featured.description}</p>
  <div class="bc-meta">
    <span class="bc-date">${featured.date} &nbsp;·&nbsp; ${featured.readTime}</span>
    <span class="bc-read">Read Full Article</span>
  </div>
</a>`;

  const sideCard = rest[0] ? `
<a class="bc" href="/blog/${rest[0].slug}" style="height:100%;display:flex;flex-direction:column;justify-content:space-between">
  <div>
    <div class="bc-tag">${rest[0].tag}</div>
    <h2>${rest[0].title}</h2>
    <p>${rest[0].description}</p>
  </div>
  <div class="bc-meta">
    <span class="bc-date">${rest[0].readTime}</span>
    <span class="bc-read">Read</span>
  </div>
</a>` : '';

  const smallCards = rest.slice(1).map(p => `
<a class="bc" href="/blog/${p.slug}">
  <div class="bc-tag">${p.tag}</div>
  <h2>${p.title}</h2>
  <p>${p.description}</p>
  <div class="bc-meta">
    <span class="bc-date">${p.readTime}</span>
    <span class="bc-read">Read</span>
  </div>
</a>`).join('\n');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Muhammad Tariq — SaaS Development Blog",
    "description": "Insights on SaaS development, hiring developers, tech stacks, and building $1M+ products on Replit. By Muhammad Tariq — 350+ apps, $27M+ client revenue.",
    "url": `${SITE}/blog`,
    "author": {
      "@type": "Person",
      "name": "Muhammad Tariq",
      "url": SITE,
    },
    "hasPart": ALL_POSTS.map(p => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "url": `${SITE}/blog/${p.slug}`,
      "description": p.description,
      "datePublished": parsePostDate(p.date),
    })),
  };

  return ssrPage({
    title: "Blog — Muhammad Tariq | Replit SaaS Developer",
    description: "Insights on SaaS development, hiring developers, tech stacks, and building $1M+ products on Replit. By Muhammad Tariq — 350+ apps, $27M+ client revenue.",
    canonical: `${SITE}/blog`,
    structuredData,
    body: `
<div class="blog-hero">
  <div class="blog-hero-inner">
    <div class="hero-label"><span></span>Knowledge Base</div>
    <h1>SaaS<br><span>Development</span><br>Blog</h1>
    <p>Real lessons from 350+ apps and $27M+ in client revenue. No fluff, no theory — just what actually works.</p>
    <div class="hero-stats">
      <div class="s"><span class="sv">350+</span><span class="sl">Apps Built</span></div>
      <div class="s"><span class="sv">$27M+</span><span class="sl">Revenue Generated</span></div>
      <div class="s"><span class="sv">100+</span><span class="sl">Articles</span></div>
      <div class="s"><span class="sv">157+</span><span class="sl">Founders Served</span></div>
    </div>
  </div>
</div>

<div class="blog-wrap">
  <p class="section-title" style="border-top:none;padding-top:0;margin-bottom:1.25rem">Featured Article</p>
  <div class="blog-featured">
    ${featuredCard}
    ${sideCard}
  </div>
  <p class="section-title">More Articles</p>
  <div class="blog-secondary">
    ${smallCards}
  </div>
</div>`,
  });
}

function blogPostHtml(post: BlogPost): string {
  const toc = tocFromBody(post.body);
  const related = relatedPosts(post.slug);
  const share = shareButtons(post.title, post.slug);

  const sidebar = `
<aside class="sidebar">
  <div class="author-sidebar sidebar-card">
    <div class="av">MT</div>
    <h5>Muhammad Tariq</h5>
    <div class="sub">Replit SaaS Developer &bull; 350+ Apps</div>
    <p>Full-stack SaaS builder helping founders ship $1M+ products on Replit in 2–4 weeks.</p>
    <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="fiverr-link">Hire Me on Fiverr →</a>
  </div>
  ${toc}
  <div class="sidebar-cta">
    <h4>Ready to Build?</h4>
    <h3>Ship Your SaaS in 4 Weeks</h3>
    <p>2 client spots open this month. Let's talk about your idea.</p>
    <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">Start a Project →</a>
  </div>
</aside>`;

  const isoDate = parsePostDate(post.date);
  const isoDateModified = post.dateModified ? parsePostDate(post.dateModified) : isoDate;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": isoDate,
      "dateModified": isoDateModified,
      "url": `${SITE}/blog/${post.slug}`,
      "image": `${SITE}/og-image.png`,
      "author": {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        "name": "Muhammad Tariq",
        "url": SITE,
      },
      "publisher": {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        "name": "Muhammad Tariq",
        "url": SITE,
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${SITE}/blog/${post.slug}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${SITE}/blog`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `${SITE}/blog/${post.slug}`,
        },
      ],
    },
  ];

  return ssrPage({
    title: `${post.title} | Muhammad Tariq`,
    description: post.description,
    canonical: `${SITE}/blog/${post.slug}`,
    ogType: "article",
    isPost: true,
    structuredData,
    body: `
<div class="article-wrap">
  <main>
    <a href="/blog" class="back-link">Back to Blog</a>
    <div class="article-header">
      <div class="article-tag">${post.tag}</div>
      <h1 class="article-title">${post.title}</h1>
      <div class="article-byline">
        <div class="author-avatar">MT</div>
        <div class="byline-info">
          <div class="byline-name">Muhammad Tariq</div>
          <div class="byline-sub">Replit SaaS Developer</div>
        </div>
        <div class="byline-badges">
          <span class="byline-badge">${post.date}</span>
          <span class="byline-badge">${post.readTime}</span>
        </div>
      </div>
    </div>
    ${post.body}
    ${share}
    ${related}
  </main>
  ${sidebar}
</div>`,
  });
}

let cachedBlogIndexHtml: string | null = null;
const cachedBlogPostHtmlMap = new Map<string, string>();

export function prewarmBlogCaches(): void {
  getBlogIndexHtml();
  for (const post of ALL_POSTS) {
    getBlogPostHtml(post.slug);
  }
}

export function getBlogIndexHtml(): string {
  if (cachedBlogIndexHtml !== null) return cachedBlogIndexHtml;
  const html = blogIndexHtml();
  cachedBlogIndexHtml = html;
  return html;
}

export function getBlogPostHtml(slug: string): string | null {
  if (cachedBlogPostHtmlMap.has(slug)) return cachedBlogPostHtmlMap.get(slug)!;
  const post = ALL_POSTS.find(p => p.slug === slug);
  if (!post) return null;
  const html = blogPostHtml(post);
  cachedBlogPostHtmlMap.set(slug, html);
  return html;
}
