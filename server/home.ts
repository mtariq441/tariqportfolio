import { ssrPage } from "./ssrShared.js";

const SITE = "https://tariqservices.site";
const FIVERR = "https://www.fiverr.com/tariq_webflow";

export function getHomeHtml(): string {
  const body = `
<main>
  <!-- HERO -->
  <section style="background:#3700FF;padding:5rem 1.5rem 4rem;position:relative;overflow:hidden">
    <div style="max-width:900px;margin:0 auto;position:relative;z-index:1">
      <p style="display:inline-flex;align-items:center;gap:.5rem;font-size:.7rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:#CCFF00;margin-bottom:1.5rem">
        <span style="width:8px;height:8px;border-radius:50%;background:#CCFF00;display:inline-block"></span>
        Available — 2 Spots This Month
      </p>
      <h1 style="font-size:clamp(2.8rem,8vw,6rem);font-weight:900;color:#fff;line-height:1;letter-spacing:-.03em;margin-bottom:1.5rem">
        Muhammad Tariq — Replit SaaS Developer<br>
        <span style="color:#CCFF00">Shipping $1M–$10M+ Products</span>
      </h1>
      <p style="font-size:1.1rem;color:rgba(255,255,255,.7);max-width:600px;line-height:1.7;margin-bottom:2rem">
        I'm Muhammad Tariq, a full-stack SaaS developer specialising in Replit-powered applications.
        With over 350 SaaS apps shipped and $27 million in client-generated revenue, I help founders go from idea to paying customers in 2–4 weeks.
      </p>
      <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">
        <a href="${FIVERR}" target="_blank" rel="noopener noreferrer"
           style="display:inline-block;background:#CCFF00;color:#3700FF;font-weight:900;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;padding:.9rem 2rem;border-radius:999px;text-decoration:none">
          Hire Me on Fiverr →
        </a>
        <a href="${SITE}/#portfolio"
           style="display:inline-block;background:transparent;color:#fff;font-weight:700;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;padding:.9rem 2rem;border-radius:999px;text-decoration:none;border:2px solid rgba(255,255,255,.3)">
          See My Work
        </a>
      </div>
      <div style="display:flex;gap:3rem;flex-wrap:wrap">
        <div><div style="font-size:2rem;font-weight:900;color:#CCFF00">$27M+</div><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.5)">Client Revenue</div></div>
        <div><div style="font-size:2rem;font-weight:900;color:#CCFF00">350+</div><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.5)">Apps Shipped</div></div>
        <div><div style="font-size:2rem;font-weight:900;color:#CCFF00">157+</div><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.5)">Founders Served</div></div>
        <div><div style="font-size:2rem;font-weight:900;color:#CCFF00">2–4 wks</div><div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.5)">Avg. Delivery</div></div>
      </div>
    </div>
  </section>

  <!-- SHARE BAR -->
  <section style="background:#0f0f1e;padding:1.25rem 1.5rem;border-bottom:1px solid rgba(255,255,255,.06)">
    <div style="max-width:900px;margin:0 auto;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
      <span style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35)">Share</span>
      <a href="https://twitter.com/intent/tweet?text=Muhammad+Tariq+%E2%80%94+Replit+SaaS+Developer+who+shipped+350%2B+apps+and+%2427M%2B+in+client+revenue&url=https%3A%2F%2Ftariqservices.site%2F"
         target="_blank" rel="noopener noreferrer" class="share-btn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Share on X
      </a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ftariqservices.site%2F"
         target="_blank" rel="noopener noreferrer" class="share-btn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        Share on LinkedIn
      </a>
      <button onclick="(function(btn){navigator.clipboard.writeText('https://tariqservices.site/').then(function(){btn.textContent='Link Copied!';setTimeout(function(){btn.textContent='Copy Link'},2000)})})(this)" class="share-btn" style="cursor:pointer;background:none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        Copy Link
      </button>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" style="padding:5rem 1.5rem;background:#0a0a14">
    <div style="max-width:900px;margin:0 auto">
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;margin-bottom:.75rem;letter-spacing:-.02em">
        Full-Stack SaaS Development Services
      </h2>
      <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:600px;line-height:1.7;margin-bottom:3rem">
        Every service I offer is built around one outcome: a live, revenue-generating SaaS product in your hands as fast as possible.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5rem">
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem">
          <h3 style="font-size:1.1rem;font-weight:800;color:#CCFF00;margin-bottom:.75rem">MVP Development</h3>
          <p style="font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7">
            From zero to a production-ready SaaS MVP in 2–4 weeks. I handle every layer: frontend, backend, database, auth, payments, and deployment on Replit.
          </p>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem">
          <h3 style="font-size:1.1rem;font-weight:800;color:#CCFF00;margin-bottom:.75rem">Stripe Billing Integration</h3>
          <p style="font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7">
            Subscription plans, trial periods, usage-based billing, and customer portals — set up correctly from day one so money flows immediately after launch.
          </p>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem">
          <h3 style="font-size:1.1rem;font-weight:800;color:#CCFF00;margin-bottom:.75rem">Next.js + Supabase Apps</h3>
          <p style="font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7">
            My default stack combines Next.js for the frontend, Supabase for the database and real-time, Clerk for auth, and Stripe for billing — proven across 350+ builds.
          </p>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem">
          <h3 style="font-size:1.1rem;font-weight:800;color:#CCFF00;margin-bottom:.75rem">Replit Deployment</h3>
          <p style="font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7">
            I deploy everything on Replit — fast, reliable, and with zero DevOps overhead. SSL, custom domains, and scaling are all handled on the platform.
          </p>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem">
          <h3 style="font-size:1.1rem;font-weight:800;color:#CCFF00;margin-bottom:.75rem">Post-Launch Support</h3>
          <p style="font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7">
            All projects include a 30-day post-launch support window. If something breaks or a quick iteration is needed, I'm available to fix it fast.
          </p>
        </div>
        <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem">
          <h3 style="font-size:1.1rem;font-weight:800;color:#CCFF00;margin-bottom:.75rem">SaaS Consulting</h3>
          <p style="font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7">
            Not sure what to build or how to architect it? I offer strategy sessions for founders who want expert guidance before committing to a full build.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO / CASE STUDIES -->
  <section id="portfolio" style="padding:5rem 1.5rem;background:#0f0f1e">
    <div style="max-width:900px;margin:0 auto">
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;margin-bottom:.75rem;letter-spacing:-.02em">
        Case Studies: SaaS Products I've Built
      </h2>
      <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:600px;line-height:1.7;margin-bottom:3rem">
        These are a sample of the 350+ SaaS products I've shipped for founders worldwide. Each one went live within 4 weeks and generated revenue within the first month.
      </p>
      <div style="display:grid;gap:1.5rem">
        <div style="background:rgba(55,0,255,.15);border:1px solid rgba(55,0,255,.4);border-radius:20px;padding:2rem">
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1rem">
            <h3 style="font-size:1.2rem;font-weight:800;color:#fff">B2B Invoicing SaaS</h3>
            <span style="font-size:1.4rem;font-weight:900;color:#CCFF00">$400K ARR</span>
          </div>
          <p style="font-size:.9rem;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:.75rem">
            A complete invoicing and payments platform for freelancers and small agencies. Built with Next.js, Supabase, and Stripe Billing. Delivered in 3 weeks. The client reached $400K ARR within 8 months of launch.
          </p>
          <p style="font-size:.8rem;font-style:italic;color:rgba(255,255,255,.45)">
            "Muhammad delivered our entire SaaS platform in 3 weeks. We were live with paying customers before our competitors even finished their design phase."
          </p>
        </div>
        <div style="background:rgba(55,0,255,.15);border:1px solid rgba(55,0,255,.4);border-radius:20px;padding:2rem">
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1rem">
            <h3 style="font-size:1.2rem;font-weight:800;color:#fff">AI-Powered HR Platform</h3>
            <span style="font-size:1.4rem;font-weight:900;color:#CCFF00">$1.2M ARR</span>
          </div>
          <p style="font-size:.9rem;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:.75rem">
            An AI-assisted recruitment and HR management tool for mid-market companies. Integrated OpenAI APIs, Clerk for multi-tenant orgs, and complex role-based permissions. Live in 4 weeks. Now at $1.2M ARR.
          </p>
          <p style="font-size:.8rem;font-style:italic;color:rgba(255,255,255,.45)">
            "The fastest developer I've ever worked with. Zero compromises on quality."
          </p>
        </div>
        <div style="background:rgba(55,0,255,.15);border:1px solid rgba(55,0,255,.4);border-radius:20px;padding:2rem">
          <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1rem">
            <h3 style="font-size:1.2rem;font-weight:800;color:#fff">E-Learning Subscription Platform</h3>
            <span style="font-size:1.4rem;font-weight:900;color:#CCFF00">$275K ARR</span>
          </div>
          <p style="font-size:.9rem;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:.75rem">
            A course hosting and subscription platform for online educators. Video hosting integration, Stripe subscription tiers, student analytics dashboard. Shipped in 11 days — my personal record.
          </p>
          <p style="font-size:.8rem;font-style:italic;color:rgba(255,255,255,.45)">
            "11 days from first message to live paying students. I couldn't believe it."
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY ME -->
  <section style="padding:5rem 1.5rem;background:#0a0a14">
    <div style="max-width:900px;margin:0 auto">
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;margin-bottom:.75rem;letter-spacing:-.02em">
        Why Founders Hire Me Over an Agency
      </h2>
      <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:600px;line-height:1.7;margin-bottom:3rem">
        Agencies take 6 months and charge 10× more. I take 2–4 weeks and deliver a live product with real paying customers. Here's what makes the difference.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.25rem">
        <div style="padding:1.5rem;border-left:3px solid #CCFF00">
          <h3 style="font-size:1rem;font-weight:800;color:#fff;margin-bottom:.5rem">350+ Apps of Experience</h3>
          <p style="font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.65">
            When you hire me, you're not paying for my learning curve. You're getting the accumulated knowledge of 350+ builds applied to your product from day one.
          </p>
        </div>
        <div style="padding:1.5rem;border-left:3px solid #CCFF00">
          <h3 style="font-size:1rem;font-weight:800;color:#fff;margin-bottom:.5rem">Replit-Native Expertise</h3>
          <p style="font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.65">
            I know every edge case, performance consideration, and deployment pattern specific to Replit. Your app will be optimised for the platform, not just "works on my machine."
          </p>
        </div>
        <div style="padding:1.5rem;border-left:3px solid #CCFF00">
          <h3 style="font-size:1rem;font-weight:800;color:#fff;margin-bottom:.5rem">Direct Communication</h3>
          <p style="font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.65">
            No account managers. No project coordinators. You talk directly to the person writing the code. Decisions happen in hours, not days.
          </p>
        </div>
        <div style="padding:1.5rem;border-left:3px solid #CCFF00">
          <h3 style="font-size:1rem;font-weight:800;color:#fff;margin-bottom:.5rem">Revenue-Focused Mindset</h3>
          <p style="font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.65">
            I don't just build features — I ask about your business model, your pricing, and your customer journey. Every technical decision is made with revenue in mind.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- BLOG PREVIEW -->
  <section style="padding:5rem 1.5rem;background:#0f0f1e">
    <div style="max-width:900px;margin:0 auto">
      <h2 style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;margin-bottom:.75rem;letter-spacing:-.02em">
        SaaS Development Insights
      </h2>
      <p style="font-size:1rem;color:rgba(255,255,255,.55);max-width:600px;line-height:1.7;margin-bottom:2.5rem">
        Practical guides on building, launching, and growing SaaS products on Replit.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;margin-bottom:2rem">
        <a href="${SITE}/blog/how-i-built-350-saas-apps-on-replit" style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:1.75rem 2rem;display:block;text-decoration:none;color:#fff">
          <span style="font-size:.65rem;font-weight:900;text-transform:uppercase;letter-spacing:.18em;color:#CCFF00;display:block;margin-bottom:.75rem">Case Study</span>
          <h3 style="font-size:1.05rem;font-weight:800;margin-bottom:.5rem;line-height:1.35">How I Built 350+ SaaS Apps on Replit</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:.75rem">Real lessons from building over 350 SaaS products — patterns that generate $1M+ and mistakes most developers make.</p>
          <span style="font-size:.72rem;font-weight:800;color:#CCFF00;text-transform:uppercase;letter-spacing:.1em">Read Article →</span>
        </a>
        <a href="${SITE}/blog/replit-saas-developer-guide-2025" style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:1.75rem 2rem;display:block;text-decoration:none;color:#fff">
          <span style="font-size:.65rem;font-weight:900;text-transform:uppercase;letter-spacing:.18em;color:#CCFF00;display:block;margin-bottom:.75rem">Guide</span>
          <h3 style="font-size:1.05rem;font-weight:800;margin-bottom:.5rem;line-height:1.35">Why Smart Founders Use Replit to Ship SaaS</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:.75rem">Replit has changed how SaaS products are built. Here's why the fastest-growing startups are betting on it.</p>
          <span style="font-size:.72rem;font-weight:800;color:#CCFF00;text-transform:uppercase;letter-spacing:.1em">Read Article →</span>
        </a>
        <a href="${SITE}/blog/saas-tech-stack-nextjs-supabase-stripe" style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:1.75rem 2rem;display:block;text-decoration:none;color:#fff">
          <span style="font-size:.65rem;font-weight:900;text-transform:uppercase;letter-spacing:.18em;color:#CCFF00;display:block;margin-bottom:.75rem">Technical</span>
          <h3 style="font-size:1.05rem;font-weight:800;margin-bottom:.5rem;line-height:1.35">The Exact Stack I Use for Every $1M+ SaaS Build</h3>
          <p style="font-size:.875rem;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:.75rem">Next.js + Supabase + Stripe + Clerk — and exactly why each tool earns its place in 350+ builds.</p>
          <span style="font-size:.72rem;font-weight:800;color:#CCFF00;text-transform:uppercase;letter-spacing:.1em">Read Article →</span>
        </a>
      </div>
      <a href="${SITE}/blog" style="display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:800;color:#CCFF00;text-decoration:none;text-transform:uppercase;letter-spacing:.1em">View All Articles →</a>
    </div>
  </section>

  <!-- HIRE CTA -->
  <section id="contact" style="padding:5rem 1.5rem;background:#3700FF;text-align:center">
    <div style="max-width:700px;margin:0 auto">
      <h2 style="font-size:clamp(2rem,5vw,3.5rem);font-weight:900;color:#fff;margin-bottom:1rem;letter-spacing:-.02em">
        Ready to Ship Your SaaS?
      </h2>
      <p style="font-size:1.05rem;color:rgba(255,255,255,.65);max-width:480px;margin:0 auto 2rem;line-height:1.7">
        I take 2 clients per month. If you're serious about building a $1M+ SaaS on Replit, reach out now before the spots fill up.
      </p>
      <a href="${FIVERR}" target="_blank" rel="noopener noreferrer"
         style="display:inline-block;background:#CCFF00;color:#3700FF;font-weight:900;font-size:.9rem;letter-spacing:.12em;text-transform:uppercase;padding:1rem 2.5rem;border-radius:999px;text-decoration:none">
        DM Me on Fiverr →
      </a>
    </div>
  </section>
</main>`;

  return ssrPage({
    title: "Muhammad Tariq | Replit SaaS Developer",
    description: "Full-stack SaaS developer on Replit. 350+ apps shipped, $27M+ client revenue. I build $1M–$10M SaaS products in 2–4 weeks. Hire me on Fiverr.",
    canonical: "https://tariqservices.site/",
    body,
  });
}
