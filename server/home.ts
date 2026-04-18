import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE = 'https://tariqservices.site';
const FIVERR = 'https://www.fiverr.com/tariq_webflow';

let cachedSpaAssets: string | null = null;
let cachedHomeHtml: string | null = null;

function extractSpaAssets(distPublicDir: string): string {
  if (cachedSpaAssets !== null) return cachedSpaAssets;
  try {
    const indexPath = path.join(distPublicDir, 'index.html');
    const html = fs.readFileSync(indexPath, 'utf-8');

    const linkTags = [...html.matchAll(/<link[^>]+rel="(?:stylesheet|modulepreload)"[^>]*>/g)].map(m => m[0]);
    const scriptTags = [...html.matchAll(/<script[^>]+src="\/assets\/[^"]*"[^>]*><\/script>/g)].map(m => m[0]);

    cachedSpaAssets = [...linkTags, ...scriptTags].join('\n  ');
    return cachedSpaAssets;
  } catch (err) {
    console.warn('[SSR] Failed to extract SPA assets from dist/public/index.html — SPA hydration tags will be missing:', err);
    return '';
  }
}

export function getHomeHtml(isProd: boolean): string {
  if (isProd && cachedHomeHtml !== null) return cachedHomeHtml;

  let spaAssets: string;
  if (isProd) {
    const distPublicDir = path.resolve(__dirname, 'public');
    spaAssets = extractSpaAssets(distPublicDir);
  } else {
    spaAssets = `<script type="module" src="/src/main.tsx"></script>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

  <title>Muhammad Tariq — Replit SaaS Developer | $27M+ Client Revenue | 350+ Apps Shipped</title>
  <meta name="description" content="I build $1M–$10M+ SaaS products on Replit. Muhammad Tariq — full-stack builder behind 350+ apps and $27M+ in client-generated revenue. Hire me on Fiverr to ship your SaaS in 2–4 weeks.">
  <meta name="keywords" content="Replit developer, SaaS developer for hire, full stack developer Fiverr, build SaaS app, Replit SaaS, Muhammad Tariq developer, hire SaaS developer, MVP developer, no-code SaaS builder">
  <meta name="author" content="Muhammad Tariq">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="seobility" content="efe74bdded3a5a22242f43fcb3dab777">
  <link rel="canonical" href="${SITE}/">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Muhammad Tariq">
  <meta property="og:url" content="${SITE}/">
  <meta property="og:title" content="Muhammad Tariq — Replit SaaS Developer | $27M+ Client Revenue">
  <meta property="og:description" content="I build $1M–$10M+ SaaS products on Replit. 350+ apps shipped, 157+ founders served, $27M+ revenue generated. Hire me on Fiverr.">
  <meta property="og:image" content="${SITE}/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Muhammad Tariq — Full Stack SaaS Developer on Replit">
  <meta property="og:locale" content="en_US">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@tariq_webflow">
  <meta name="twitter:creator" content="@tariq_webflow">
  <meta name="twitter:title" content="Muhammad Tariq — Replit SaaS Developer | $27M+ Client Revenue">
  <meta name="twitter:description" content="350+ apps shipped. $27M+ client revenue. I build $1M–$10M SaaS on Replit in 2–4 weeks. Hire me on Fiverr.">
  <meta name="twitter:image" content="${SITE}/og-image.png">

  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png">
  <meta name="theme-color" content="#3700FF">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "${SITE}/#person",
        "name": "Muhammad Tariq",
        "url": "${SITE}/",
        "image": {
          "@type": "ImageObject",
          "url": "${SITE}/og-image.png",
          "width": 1200,
          "height": 630
        },
        "jobTitle": "Full Stack SaaS Developer",
        "description": "Full-stack SaaS developer specialising in Replit-powered applications. $27M+ in client-generated revenue across 350+ apps shipped for 157+ founders.",
        "knowsAbout": ["Replit","SaaS development","Full stack development","Next.js","Supabase","Stripe integration","MVP development","Web application development"],
        "sameAs": ["${FIVERR}"],
        "offers": {
          "@type": "Offer",
          "name": "Full Stack SaaS Development on Replit",
          "description": "End-to-end SaaS product development — from MVP to production in 2–4 weeks. Specialising in Replit-powered apps with Next.js, Supabase, Stripe, and Clerk.",
          "url": "${FIVERR}",
          "priceCurrency": "USD",
          "availability": "https://schema.org/LimitedAvailability"
        }
      },
      {
        "@type": "WebSite",
        "@id": "${SITE}/#website",
        "url": "${SITE}/",
        "name": "Muhammad Tariq — Replit SaaS Developer",
        "description": "Portfolio of Muhammad Tariq, full-stack SaaS developer. $27M+ client revenue, 350+ apps, 157+ founders served.",
        "publisher": { "@id": "${SITE}/#person" },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": "${SITE}/#service",
        "name": "Muhammad Tariq — SaaS Development",
        "url": "${FIVERR}",
        "description": "Premium full-stack SaaS development on Replit. Serving founders doing $500K+ ARR who need to ship a $1M–$10M product.",
        "provider": { "@id": "${SITE}/#person" },
        "areaServed": "Worldwide",
        "availableLanguage": "English",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "157",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ]
  }
  </script>

  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{--blue:#3700FF;--neon:#CCFF00;--dark:#0a0a14}
    body{font-family:'Inter',system-ui,sans-serif;background:var(--dark);color:#fff;line-height:1.7;overflow-x:hidden}
    a{color:var(--neon);text-decoration:none}
    #spa-root{display:none;opacity:0;transform:translateY(4px);transition:opacity .35s ease,transform .35s ease}
    #ssr-shell{display:block;opacity:1;transition:opacity .35s ease}
    @media(prefers-reduced-motion:reduce){#spa-root,#ssr-shell{transition:none}}
    .ssr-nav{position:sticky;top:0;z-index:100;background:rgba(10,10,20,0.97);backdrop-filter:blur(24px);border-bottom:1px solid rgba(204,255,0,0.1);padding:0 1.5rem}
    .ssr-nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:64px;gap:1rem}
    .ssr-logo{display:flex;align-items:center;gap:.75rem;color:#fff;font-weight:900;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase}
    .ssr-badge{width:36px;height:36px;border-radius:10px;background:var(--neon);color:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem}
    .ssr-nav-links{display:flex;align-items:center;gap:2rem}
    .ssr-nav-links a{color:rgba(255,255,255,.65);font-size:.82rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
    .ssr-cta{background:var(--neon);color:var(--blue);font-weight:900;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:999px}
    @media(max-width:700px){.ssr-nav-links{display:none}}
    .ssr-hero{background:var(--blue);padding:6rem 1.5rem 5rem;text-align:center;position:relative;overflow:hidden}
    .ssr-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 100%,rgba(204,255,0,.15) 0%,transparent 70%);pointer-events:none}
    .ssr-hero-inner{max-width:900px;margin:0 auto;position:relative;z-index:1}
    .ssr-label{display:inline-flex;align-items:center;gap:.5rem;font-size:.7rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:var(--neon);margin-bottom:1.5rem}
    .ssr-h1{font-size:clamp(2.5rem,7vw,5rem);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.05;margin-bottom:1.5rem}
    .ssr-h1 span{color:var(--neon)}
    .ssr-desc{font-size:1.15rem;color:rgba(255,255,255,.65);max-width:600px;margin:0 auto 2.5rem;line-height:1.7}
    .ssr-hero-btns{display:flex;align-items:center;justify-content:center;gap:1rem;flex-wrap:wrap;margin-bottom:3.5rem}
    .ssr-btn-primary{background:var(--neon);color:var(--blue);font-weight:900;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;padding:.9rem 2rem;border-radius:999px}
    .ssr-btn-secondary{border:2px solid rgba(255,255,255,.2);color:#fff;font-weight:700;font-size:.85rem;padding:.9rem 2rem;border-radius:999px}
    .ssr-stats{display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,.1)}
    .ssr-stat .sv{display:block;font-size:2.2rem;font-weight:900;color:var(--neon);line-height:1}
    .ssr-stat .sl{display:block;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.45);margin-top:.35rem}
    .ssr-section{max-width:1200px;margin:0 auto;padding:5rem 1.5rem}
    .ssr-section-label{font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.22em;color:var(--neon);margin-bottom:1rem;display:block}
    .ssr-section h2{font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:#fff;letter-spacing:-.025em;margin-bottom:1.25rem}
    .ssr-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:3rem}
    .ssr-service-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem}
    .ssr-service-card h3{font-size:1.1rem;font-weight:800;color:#fff;margin-bottom:.75rem}
    .ssr-service-card p{font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.7}
    .ssr-footer{border-top:1px solid rgba(255,255,255,.06);padding:2.5rem 1.5rem;background:rgba(0,0,0,.3)}
    .ssr-footer-inner{max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}
    .ssr-footer p{font-size:.82rem;color:rgba(255,255,255,.35)}
    .ssr-footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
    .ssr-footer-links a{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.25)}
  </style>
</head>
<body>
  <div id="spa-root"><div id="root"></div></div>

  <div id="ssr-shell">
    <nav class="ssr-nav" aria-label="Main navigation">
      <div class="ssr-nav-inner">
        <a href="${SITE}" class="ssr-logo">
          <div class="ssr-badge">MT</div>
          <span>Muhammad Tariq</span>
        </a>
        <div class="ssr-nav-links">
          <a href="${SITE}/#services">Services</a>
          <a href="${SITE}/#portfolio">Portfolio</a>
          <a href="${SITE}/blog">Blog</a>
          <a href="${SITE}/#contact">Contact</a>
        </div>
        <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="ssr-cta">Start a Project</a>
      </div>
    </nav>

    <main>
      <section class="ssr-hero" aria-labelledby="hero-heading">
        <div class="ssr-hero-inner">
          <div class="ssr-label">&#9679; Available for 2 Projects / Month</div>
          <h1 id="hero-heading" class="ssr-h1">
            I Build <span>$1M–$10M+</span><br>SaaS Products on Replit
          </h1>
          <p class="ssr-desc">
            Muhammad Tariq — full-stack SaaS developer behind 350+ apps and $27M+ in client-generated revenue. Hire me on Fiverr to ship your SaaS in 2–4 weeks.
          </p>
          <div class="ssr-hero-btns">
            <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="ssr-btn-primary">Hire Me on Fiverr →</a>
            <a href="${SITE}/#portfolio" class="ssr-btn-secondary">View Portfolio</a>
          </div>
          <div class="ssr-stats">
            <div class="ssr-stat">
              <span class="sv">350+</span>
              <span class="sl">Apps Shipped</span>
            </div>
            <div class="ssr-stat">
              <span class="sv">$27M+</span>
              <span class="sl">Client Revenue</span>
            </div>
            <div class="ssr-stat">
              <span class="sv">157+</span>
              <span class="sl">Founders Served</span>
            </div>
            <div class="ssr-stat">
              <span class="sv">2–4 wks</span>
              <span class="sl">Avg. Delivery</span>
            </div>
            <div class="ssr-stat">
              <span class="sv">5.0 ★</span>
              <span class="sl">Fiverr Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading">
        <div class="ssr-section">
          <span class="ssr-section-label">What I Build</span>
          <h2 id="services-heading">Full-Stack SaaS Development Services</h2>
          <p style="color:rgba(255,255,255,.6);max-width:600px;margin-bottom:1rem">
            From MVP to production-ready SaaS — every layer of the stack, handled end-to-end.
          </p>
          <div class="ssr-services">
            <div class="ssr-service-card">
              <h3>SaaS MVP Development</h3>
              <p>Full-stack SaaS products built on Replit in 2–4 weeks. Next.js, Supabase, Stripe, and Clerk — the proven stack behind $27M+ in client revenue.</p>
            </div>
            <div class="ssr-service-card">
              <h3>Stripe Subscription Integration</h3>
              <p>Recurring billing, trial periods, usage-based pricing, customer portal, and webhook handling — all configured from day one.</p>
            </div>
            <div class="ssr-service-card">
              <h3>Replit Deployment &amp; Scaling</h3>
              <p>Production deployments on Replit with custom domains, SSL, environment configuration, and always-on hosting — zero DevOps required.</p>
            </div>
            <div class="ssr-service-card">
              <h3>Authentication &amp; Multi-Tenancy</h3>
              <p>User auth, social logins, organization accounts, role-based permissions, and SSO for enterprise clients — built with Clerk.</p>
            </div>
            <div class="ssr-service-card">
              <h3>API Integrations</h3>
              <p>Third-party API integrations — payment processors, CRMs, analytics, email services, AI providers, and more.</p>
            </div>
            <div class="ssr-service-card">
              <h3>SaaS Consulting</h3>
              <p>Architecture review, tech stack selection, and launch strategy from a developer who has shipped 350+ SaaS products.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" aria-labelledby="portfolio-heading" style="background:rgba(255,255,255,.02);padding:1px 0">
        <div class="ssr-section">
          <span class="ssr-section-label">Track Record</span>
          <h2 id="portfolio-heading">350+ Apps Shipped. $27M+ Revenue Generated.</h2>
          <p style="color:rgba(255,255,255,.6);max-width:680px">
            Across six years and 350+ SaaS products, my clients have collectively generated over $27 million in revenue. Here are a few highlights from recent builds.
          </p>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" style="background:var(--blue)">
        <div class="ssr-section" style="text-align:center">
          <span class="ssr-section-label">Get Started</span>
          <h2 id="contact-heading">Ready to Ship Your SaaS?</h2>
          <p style="color:rgba(255,255,255,.65);max-width:520px;margin:0 auto 2rem">
            I take 2 clients per month. If you're serious about building a $1M+ SaaS on Replit, let's talk now.
          </p>
          <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="ssr-btn-primary">DM Me on Fiverr →</a>
        </div>
      </section>
    </main>

    <footer class="ssr-footer">
      <div class="ssr-footer-inner">
        <div>
          <p>© ${new Date().getFullYear()} <a href="${SITE}" style="color:rgba(255,255,255,.35)">Muhammad Tariq</a> &mdash; Replit SaaS Developer</p>
        </div>
        <nav class="ssr-footer-links" aria-label="Footer navigation">
          <a href="${SITE}">Home</a>
          <a href="${SITE}/#services">Services</a>
          <a href="${SITE}/blog">Blog</a>
          <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">Fiverr</a>
          <a href="${SITE}/#contact">Contact</a>
        </nav>
      </div>
    </footer>
  </div>

  <script>
  (function () {
    var spaRoot = document.getElementById('spa-root');
    var ssrShell = document.getElementById('ssr-shell');
    var root = document.getElementById('root');
    if (!spaRoot || !ssrShell || !root) return;

    var observer = new MutationObserver(function () {
      if (root.children.length > 0) {
        observer.disconnect();
        ssrShell.style.opacity = '0';
        spaRoot.style.display = 'block';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            spaRoot.style.opacity = '1';
            spaRoot.style.transform = 'translateY(0)';
          });
        });
        var shellHidden = false;
        function hideShell() {
          if (!shellHidden) { shellHidden = true; ssrShell.style.display = 'none'; }
        }
        ssrShell.addEventListener('transitionend', hideShell, { once: true });
        setTimeout(hideShell, 500);
      }
    });
    observer.observe(root, { childList: true });
  })();
  </script>

  ${spaAssets}
</body>
</html>`;

  if (isProd && cachedSpaAssets !== null) cachedHomeHtml = html;
  return html;
}
