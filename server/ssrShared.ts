export interface SsrPageOptions {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  body: string;
}

const SITE = "https://tariqservices.site";
const FIVERR = "https://www.fiverr.com/tariq_webflow";

function head(opts: SsrPageOptions): string {
  const og = opts.ogImage || `${SITE}/og-image.png`;
  return `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${opts.title}</title>
<meta name="description" content="${opts.description}">
<meta name="author" content="Muhammad Tariq">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${opts.canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="${opts.title}">
<meta property="og:description" content="${opts.description}">
<meta property="og:url" content="${opts.canonical}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${opts.title}">
<meta name="twitter:description" content="${opts.description}">
<meta name="twitter:image" content="${og}">
<link rel="icon" href="${SITE}/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
`.trim();
}

function css(): string {
  return `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--blue:#3700FF;--neon:#CCFF00;--dark:#0a0a14;--mid:#0f0f1e}
body{font-family:'Inter',system-ui,sans-serif;background:var(--dark);color:#fff;line-height:1.6;overflow-x:hidden}
a{color:var(--neon);text-decoration:none}
a:hover{text-decoration:underline}
img{max-width:100%;height:auto;display:block}

/* NAV */
.nav{position:sticky;top:0;z-index:50;background:rgba(10,10,20,0.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(204,255,0,0.1);padding:0 1.5rem}
.nav-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:64px;gap:1rem}
.nav-logo{display:flex;align-items:center;gap:.75rem;text-decoration:none;color:#fff;font-weight:900;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase}
.nav-badge{width:36px;height:36px;border-radius:10px;background:var(--neon);color:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;flex-shrink:0}
.nav-links{display:flex;align-items:center;gap:2rem}
.nav-links a{color:rgba(255,255,255,.65);font-size:.85rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;text-decoration:none;transition:color .2s}
.nav-links a:hover{color:#fff}
.nav-cta{background:var(--neon);color:var(--blue);font-weight:900;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:999px;text-decoration:none;white-space:nowrap;transition:opacity .2s}
.nav-cta:hover{opacity:.9;text-decoration:none}
@media(max-width:640px){.nav-links{display:none}.nav-name{display:none}}

/* MAIN */
.main{max-width:760px;margin:0 auto;padding:3rem 1.5rem 5rem}

/* ARTICLE HEADER */
.article-tag{display:inline-block;background:var(--neon);color:var(--blue);font-size:.7rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;padding:.3rem .8rem;border-radius:999px;margin-bottom:1.25rem}
.article-title{font-size:clamp(1.75rem,5vw,2.75rem);font-weight:900;line-height:1.1;letter-spacing:-.02em;margin-bottom:1rem;color:#fff}
.article-meta{font-size:.8rem;color:rgba(255,255,255,.4);font-weight:600;letter-spacing:.05em;text-transform:uppercase;display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,.08)}
.article-body{font-size:1rem;color:rgba(255,255,255,.8);line-height:1.8}
.article-body h2{font-size:1.4rem;font-weight:800;color:#fff;margin:2.5rem 0 1rem;letter-spacing:-.01em}
.article-body h3{font-size:1.1rem;font-weight:700;color:var(--neon);margin:2rem 0 .75rem}
.article-body p{margin-bottom:1.25rem}
.article-body ul,.article-body ol{margin:.75rem 0 1.25rem 1.5rem}
.article-body li{margin-bottom:.5rem}
.article-body strong{color:#fff;font-weight:700}
.article-body blockquote{border-left:3px solid var(--neon);padding:.75rem 1.25rem;background:rgba(204,255,0,.06);border-radius:0 12px 12px 0;margin:1.5rem 0;color:rgba(255,255,255,.7);font-style:italic}
.article-body .stat-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1rem;margin:2rem 0}
.article-body .stat-card{background:rgba(55,0,255,.25);border:1px solid rgba(55,0,255,.4);border-radius:16px;padding:1.25rem;text-align:center}
.article-body .stat-card .val{font-size:1.75rem;font-weight:900;color:var(--neon);line-height:1}
.article-body .stat-card .lbl{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-top:.3rem}

/* CTA CARD */
.cta-card{background:var(--blue);border-radius:20px;padding:2rem;text-align:center;margin:3rem 0}
.cta-card h3{font-size:1.4rem;font-weight:900;color:#fff;margin-bottom:.5rem}
.cta-card p{font-size:.9rem;color:rgba(255,255,255,.7);margin-bottom:1.25rem}
.cta-btn{display:inline-block;background:var(--neon);color:var(--blue);font-weight:900;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;padding:.85rem 2rem;border-radius:999px;text-decoration:none;transition:opacity .2s}
.cta-btn:hover{opacity:.9;text-decoration:none}

/* BLOG INDEX */
.blog-grid{display:grid;gap:1.5rem;margin-top:2rem}
.blog-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:1.75rem;transition:border-color .2s}
.blog-card:hover{border-color:rgba(204,255,0,.3)}
.blog-card a{text-decoration:none;color:#fff}
.blog-card .tag{font-size:.65rem;font-weight:900;text-transform:uppercase;letter-spacing:.15em;color:var(--neon);margin-bottom:.6rem}
.blog-card h2{font-size:1.2rem;font-weight:800;color:#fff;margin-bottom:.5rem;line-height:1.3}
.blog-card p{font-size:.88rem;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:.75rem}
.blog-card .read-more{font-size:.78rem;font-weight:700;color:var(--neon);text-transform:uppercase;letter-spacing:.08em}

/* PAGE HEADER */
.page-header{background:var(--blue);padding:4rem 1.5rem 3rem;text-align:center;position:relative;overflow:hidden}
.page-header::after{content:'BLOG';position:absolute;font-size:8rem;font-weight:900;color:rgba(255,255,255,.04);top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:-.05em;pointer-events:none}
.page-header .label{font-size:.7rem;font-weight:900;letter-spacing:.2em;text-transform:uppercase;color:var(--neon);margin-bottom:1rem}
.page-header h1{font-size:clamp(2rem,6vw,3.5rem);font-weight:900;color:#fff;letter-spacing:-.02em}
.page-header p{font-size:1rem;color:rgba(255,255,255,.6);max-width:500px;margin:1rem auto 0}

/* BREADCRUMB */
.breadcrumb{font-size:.78rem;color:rgba(255,255,255,.35);margin-bottom:2rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
.breadcrumb a{color:rgba(255,255,255,.35);text-decoration:none}
.breadcrumb a:hover{color:var(--neon)}

/* FOOTER */
.footer{border-top:1px solid rgba(255,255,255,.06);padding:2rem 1.5rem;text-align:center;color:rgba(255,255,255,.3);font-size:.8rem}
.footer a{color:rgba(255,255,255,.3)}
.footer a:hover{color:var(--neon)}
`;
}

function nav(): string {
  return `
<nav class="nav">
  <div class="nav-inner">
    <a href="${SITE}" class="nav-logo">
      <div class="nav-badge">MT</div>
      <span class="nav-name">Muhammad Tariq</span>
    </a>
    <div class="nav-links">
      <a href="${SITE}/#services">Services</a>
      <a href="${SITE}/#portfolio">Portfolio</a>
      <a href="${SITE}/blog">Blog</a>
      <a href="${SITE}/#contact">Contact</a>
    </div>
    <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="nav-cta">Start a Project</a>
  </div>
</nav>`.trim();
}

function footer(): string {
  return `
<footer class="footer">
  <p>© ${new Date().getFullYear()} Muhammad Tariq &nbsp;·&nbsp;
    <a href="${SITE}">tariqservices.site</a> &nbsp;·&nbsp;
    <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">Fiverr</a> &nbsp;·&nbsp;
    <a href="${SITE}/blog">Blog</a>
  </p>
</footer>`.trim();
}

export function ssrPage(opts: SsrPageOptions): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head(opts)}
<style>${css()}</style>
</head>
<body>
${nav()}
${opts.body}
${footer()}
</body>
</html>`;
}
