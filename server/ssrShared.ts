export interface SsrPageOptions {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  body: string;
  isPost?: boolean;
  structuredData?: object | object[];
}

const SITE = "https://tariqservices.site";
const FIVERR = "https://www.fiverr.com/tariq_webflow";

function head(opts: SsrPageOptions): string {
  const og = opts.ogImage || `${SITE}/og-image.png`;
  const jsonLd = opts.structuredData
    ? `\n<script type="application/ld+json">\n${JSON.stringify(opts.structuredData, null, 2)}\n</script>`
    : '';
  return `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${opts.title}</title>
<meta name="description" content="${opts.description}">
<meta name="author" content="Muhammad Tariq">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${opts.canonical}">
<meta property="og:type" content="${opts.ogType ?? "website"}">
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
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">${jsonLd}
`.trim();
}

function css(): string {
  return `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--blue:#3700FF;--neon:#CCFF00;--dark:#0a0a14;--mid:#0f0f1e;--card:rgba(255,255,255,0.04)}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:var(--dark);color:#fff;line-height:1.7;overflow-x:hidden}
a{color:var(--neon);text-decoration:none}
a:hover{text-decoration:underline}
img{max-width:100%;height:auto;display:block}

/* READING PROGRESS */
#progress-bar{position:fixed;top:0;left:0;height:3px;background:var(--neon);z-index:200;width:0%;transition:width .1s linear;box-shadow:0 0 12px rgba(204,255,0,.6)}

/* NAV */
.nav{position:sticky;top:0;z-index:100;background:rgba(10,10,20,0.97);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid rgba(204,255,0,0.1);padding:0 1.5rem}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:64px;gap:1rem}
.nav-logo{display:flex;align-items:center;gap:.75rem;text-decoration:none;color:#fff;font-weight:900;font-size:.85rem;letter-spacing:.12em;text-transform:uppercase;flex-shrink:0}
.nav-logo:hover{text-decoration:none}
.nav-badge{width:36px;height:36px;border-radius:10px;background:var(--neon);color:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;flex-shrink:0}
.nav-links{display:flex;align-items:center;gap:2rem}
.nav-links a{color:rgba(255,255,255,.65);font-size:.82rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:color .2s;position:relative;padding-bottom:2px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--neon);border-radius:2px;transition:width .25s}
.nav-links a:hover{color:#fff;text-decoration:none}
.nav-links a:hover::after{width:100%}
.nav-links a.active{color:#fff}
.nav-links a.active::after{width:100%}
.nav-cta{background:var(--neon);color:var(--blue);font-weight:900;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:999px;text-decoration:none;white-space:nowrap;transition:box-shadow .2s,opacity .2s;flex-shrink:0}
.nav-cta:hover{opacity:.9;text-decoration:none;box-shadow:0 0 20px rgba(204,255,0,.4)}
@media(max-width:700px){.nav-links{display:none}.nav-name{display:none}}

/* HERO BANNER (blog index) */
.blog-hero{background:var(--blue);padding:5rem 1.5rem 4rem;position:relative;overflow:hidden}
.blog-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 100%,rgba(204,255,0,.12) 0%,transparent 70%);pointer-events:none}
.blog-hero::after{content:'BLOG';position:absolute;font-size:min(18vw,160px);font-weight:900;color:rgba(255,255,255,.04);bottom:-1rem;left:50%;transform:translateX(-50%);letter-spacing:-.05em;pointer-events:none;white-space:nowrap}
.blog-hero-inner{max-width:800px;margin:0 auto;text-align:center;position:relative;z-index:1}
.hero-label{display:inline-flex;align-items:center;gap:.5rem;font-size:.7rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:var(--neon);margin-bottom:1.5rem}
.hero-label span{width:6px;height:6px;border-radius:50%;background:var(--neon);animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.blog-hero h1{font-size:clamp(2.5rem,7vw,4.5rem);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1;margin-bottom:1.25rem}
.blog-hero h1 span{color:var(--neon)}
.blog-hero p{font-size:1.05rem;color:rgba(255,255,255,.6);max-width:480px;margin:0 auto 2rem;line-height:1.7}
.hero-stats{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.hero-stats .s{text-align:center}
.hero-stats .sv{display:block;font-size:1.6rem;font-weight:900;color:var(--neon);line-height:1}
.hero-stats .sl{display:block;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.4);margin-top:.2rem}

/* BLOG INDEX GRID */
.blog-wrap{max-width:1100px;margin:0 auto;padding:3rem 1.5rem 6rem}
.blog-featured{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-bottom:1.5rem}
@media(min-width:900px){.blog-featured{grid-template-columns:1.4fr 1fr}}
.blog-secondary{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:640px){.blog-secondary{grid-template-columns:1fr 1fr}}
@media(min-width:900px){.blog-secondary{grid-template-columns:1fr 1fr 1fr}}

/* BLOG CARD */
.bc{background:var(--card);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:1.75rem 2rem;transition:border-color .25s,transform .25s,background .25s;text-decoration:none;display:block;color:#fff}
.bc:hover{border-color:rgba(204,255,0,.35);background:rgba(255,255,255,.07);transform:translateY(-3px);text-decoration:none;color:#fff}
.bc.featured{padding:2.25rem 2.5rem}
.bc .bc-tag{font-size:.65rem;font-weight:900;text-transform:uppercase;letter-spacing:.18em;color:var(--neon);margin-bottom:.75rem;display:flex;align-items:center;gap:.4rem}
.bc .bc-tag::before{content:'';display:block;width:5px;height:5px;border-radius:50%;background:var(--neon);flex-shrink:0}
.bc h2{font-size:1.15rem;font-weight:800;color:#fff;margin-bottom:.6rem;line-height:1.35;letter-spacing:-.01em}
.bc.featured h2{font-size:1.55rem}
.bc p{font-size:.875rem;color:rgba(255,255,255,.5);line-height:1.65;margin-bottom:1.1rem}
.bc-meta{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem}
.bc-date{font-size:.72rem;font-weight:600;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em}
.bc-read{font-size:.72rem;font-weight:800;color:var(--neon);text-transform:uppercase;letter-spacing:.1em;display:flex;align-items:center;gap:.3rem}
.bc-read::after{content:'→'}
.bc.featured .bc-read::after{content:'→ Read Full Article'}
.bc-updated{display:inline-block;margin-top:.55rem;font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--neon);background:rgba(204,255,0,.08);border:1px solid rgba(204,255,0,.2);border-radius:999px;padding:.2rem .65rem}
.section-title{font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.3);margin-bottom:1rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,.06)}

/* ARTICLE LAYOUT */
.article-wrap{max-width:1200px;margin:0 auto;padding:3rem 1.5rem 6rem;display:grid;grid-template-columns:1fr;gap:3rem}
@media(min-width:1024px){.article-wrap{grid-template-columns:1fr 300px;align-items:start}}

/* ARTICLE HEADER */
.article-header{margin-bottom:2.5rem;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,.08)}
.article-tag{display:inline-flex;align-items:center;gap:.4rem;background:var(--neon);color:var(--blue);font-size:.68rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase;padding:.3rem .85rem;border-radius:999px;margin-bottom:1.25rem}
.article-title{font-size:clamp(1.9rem,5vw,3rem);font-weight:900;line-height:1.1;letter-spacing:-.025em;margin-bottom:1.25rem;color:#fff}
.article-byline{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
.author-avatar{width:40px;height:40px;border-radius:50%;background:var(--neon);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.75rem;color:var(--blue);flex-shrink:0}
.byline-info{flex:1}
.byline-name{font-size:.88rem;font-weight:700;color:#fff}
.byline-sub{font-size:.75rem;color:rgba(255,255,255,.4);font-weight:500}
.byline-badges{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;margin-left:auto}
.byline-badge{font-size:.68rem;font-weight:700;color:rgba(255,255,255,.4);background:rgba(255,255,255,.06);padding:.3rem .75rem;border-radius:999px;text-transform:uppercase;letter-spacing:.06em}
.byline-badge--updated{color:var(--neon);background:rgba(215,255,0,.08)}

/* ARTICLE BODY */
.article-body{font-size:1.05rem;color:rgba(255,255,255,.78);line-height:1.85}
.article-body h2{font-size:1.5rem;font-weight:800;color:#fff;margin:3rem 0 1rem;letter-spacing:-.015em;padding-top:.5rem;scroll-margin-top:5rem}
.article-body h3{font-size:1.1rem;font-weight:700;color:var(--neon);margin:2.25rem 0 .75rem;letter-spacing:-.01em}
.article-body p{margin-bottom:1.4rem}
.article-body ul,.article-body ol{margin:.75rem 0 1.4rem 1.5rem}
.article-body li{margin-bottom:.6rem;padding-left:.25rem}
.article-body strong{color:#fff;font-weight:700}
.article-body em{font-style:italic;color:rgba(255,255,255,.7)}
.article-body blockquote{border-left:3px solid var(--neon);padding:1rem 1.5rem;background:rgba(204,255,0,.05);border-radius:0 16px 16px 0;margin:2rem 0;color:rgba(255,255,255,.7);font-style:italic;font-size:1.05rem;line-height:1.7}
.article-body blockquote::before{content:'"';font-size:2.5rem;color:var(--neon);line-height:1;display:block;margin-bottom:.25rem;font-style:normal}
.article-body a{color:var(--neon);border-bottom:1px solid rgba(204,255,0,.3)}
.article-body a:hover{border-bottom-color:var(--neon)}
.stat-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:1rem;margin:2rem 0}
.stat-card{background:rgba(55,0,255,.2);border:1px solid rgba(55,0,255,.45);border-radius:16px;padding:1.25rem 1rem;text-align:center}
.stat-card .val{font-size:1.8rem;font-weight:900;color:var(--neon);line-height:1}
.stat-card .lbl{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.45);margin-top:.35rem}

/* CTA CARD (inline) */
.cta-card{background:linear-gradient(135deg,var(--blue) 0%,rgba(55,0,255,.8) 100%);border:1px solid rgba(204,255,0,.2);border-radius:24px;padding:2.25rem 2rem;text-align:center;margin:3rem 0;position:relative;overflow:hidden}
.cta-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 0%,rgba(204,255,0,.15),transparent 60%);pointer-events:none}
.cta-card h3{font-size:1.45rem;font-weight:900;color:#fff;margin-bottom:.6rem;position:relative}
.cta-card p{font-size:.9rem;color:rgba(255,255,255,.65);margin-bottom:1.5rem;position:relative}
.cta-btn{display:inline-block;background:var(--neon);color:var(--blue);font-weight:900;font-size:.82rem;letter-spacing:.12em;text-transform:uppercase;padding:.9rem 2rem;border-radius:999px;text-decoration:none;position:relative;transition:box-shadow .2s,transform .2s}
.cta-btn:hover{text-decoration:none;box-shadow:0 0 24px rgba(204,255,0,.5);transform:scale(1.03)}

/* SIDEBAR */
.sidebar{display:flex;flex-direction:column;gap:1.5rem}
.sidebar-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:1.5rem}
.sidebar-card h4{font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.35);margin-bottom:1.1rem}

/* TOC */
.toc-list{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.toc-list li a{font-size:.875rem;color:rgba(255,255,255,.55);font-weight:500;text-decoration:none;display:block;padding:.3rem .6rem;border-left:2px solid rgba(255,255,255,.08);transition:color .2s,border-color .2s}
.toc-list li a:hover{color:var(--neon);border-left-color:var(--neon)}
.toc-list li a.toc-active{color:var(--neon);border-left-color:var(--neon)}

/* AUTHOR SIDEBAR */
.author-sidebar{text-align:center}
.author-sidebar .av{width:64px;height:64px;border-radius:50%;background:var(--neon);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.1rem;color:var(--blue);margin:0 auto 1rem;border:3px solid rgba(204,255,0,.3)}
.author-sidebar h5{font-size:1rem;font-weight:800;color:#fff;margin-bottom:.25rem}
.author-sidebar .sub{font-size:.78rem;color:rgba(255,255,255,.4);margin-bottom:.75rem}
.author-sidebar p{font-size:.82rem;color:rgba(255,255,255,.55);line-height:1.6;margin-bottom:1rem}
.author-sidebar a.fiverr-link{display:block;background:var(--neon);color:var(--blue);font-weight:900;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;padding:.65rem 1rem;border-radius:999px;text-decoration:none;text-align:center;transition:box-shadow .2s}
.author-sidebar a.fiverr-link:hover{text-decoration:none;box-shadow:0 0 18px rgba(204,255,0,.4)}

/* SIDEBAR CTA */
.sidebar-cta{background:var(--blue);border-radius:20px;padding:1.5rem;text-align:center}
.sidebar-cta h4{font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.4);margin-bottom:.75rem}
.sidebar-cta h3{font-size:1.05rem;font-weight:900;color:#fff;margin-bottom:.5rem}
.sidebar-cta p{font-size:.8rem;color:rgba(255,255,255,.55);margin-bottom:1rem;line-height:1.6}
.sidebar-cta a{display:block;background:var(--neon);color:var(--blue);font-weight:900;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;padding:.65rem 1rem;border-radius:999px;text-decoration:none;text-align:center;transition:box-shadow .2s}
.sidebar-cta a:hover{text-decoration:none;box-shadow:0 0 18px rgba(204,255,0,.4)}

/* SHARE */
.share-row{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap}
.share-btn{display:inline-flex;align-items:center;gap:.4rem;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:.55rem 1rem;border-radius:999px;cursor:pointer;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:rgba(255,255,255,.65);transition:all .2s;text-decoration:none}
.share-btn:hover{border-color:var(--neon);color:var(--neon);text-decoration:none}
.share-btn svg{width:13px;height:13px;flex-shrink:0}

/* RELATED POSTS */
.related{margin-top:4rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,.07)}
.related h3{font-size:.7rem;font-weight:900;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.35);margin-bottom:1.25rem}
.related-grid{display:grid;gap:1rem;grid-template-columns:1fr}
@media(min-width:640px){.related-grid{grid-template-columns:1fr 1fr}}

/* BACK LINK */
.back-link{display:inline-flex;align-items:center;gap:.5rem;font-size:.78rem;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;text-decoration:none;margin-bottom:2rem;transition:color .2s}
.back-link:hover{color:var(--neon);text-decoration:none}
.back-link::before{content:'←'}

/* BREADCRUMB */
.breadcrumb{font-size:.75rem;color:rgba(255,255,255,.3);margin-bottom:2rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;display:flex;align-items:center;flex-wrap:nowrap;overflow:hidden}
.breadcrumb a{color:rgba(255,255,255,.3);text-decoration:none;white-space:nowrap}
.breadcrumb a:hover{color:var(--neon)}
.breadcrumb>span[aria-hidden]{color:rgba(255,255,255,.15);flex-shrink:0;white-space:nowrap}
.breadcrumb .bc-current{color:rgba(255,255,255,.3);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
@media(max-width:639px){.breadcrumb a{padding:.55rem .3rem;min-height:44px;display:inline-flex;align-items:center}}

/* FOOTER */
.site-footer{border-top:1px solid rgba(255,255,255,.06);padding:2.5rem 1.5rem;background:rgba(0,0,0,.3)}
.site-footer-inner{max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}
.footer-left p{font-size:.82rem;color:rgba(255,255,255,.35);font-weight:500}
.footer-left a{color:rgba(255,255,255,.35)}
.footer-left a:hover{color:var(--neon)}
.footer-links{display:flex;gap:1.5rem;flex-wrap:wrap}
.footer-links a{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:rgba(255,255,255,.25);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:var(--neon)}
`;
}

function navHtml(): string {
  return `
<div id="progress-bar"></div>
<nav class="nav">
  <div class="nav-inner">
    <a href="${SITE}" class="nav-logo">
      <div class="nav-badge">MT</div>
      <span class="nav-name">Muhammad Tariq</span>
    </a>
    <div class="nav-links">
      <a href="${SITE}/#services">Services</a>
      <a href="${SITE}/#portfolio">Portfolio</a>
      <a href="${SITE}/blog" class="active">Blog</a>
      <a href="${SITE}/#contact">Contact</a>
    </div>
    <a href="${FIVERR}" target="_blank" rel="noopener noreferrer" class="nav-cta">Start a Project</a>
  </div>
</nav>`.trim();
}

function footerHtml(): string {
  return `
<footer class="site-footer">
  <div class="site-footer-inner">
    <div class="footer-left">
      <p>© ${new Date().getFullYear()} <a href="${SITE}">Muhammad Tariq</a> &mdash; Replit SaaS Developer</p>
    </div>
    <nav class="footer-links">
      <a href="${SITE}">Home</a>
      <a href="${SITE}/#services">Services</a>
      <a href="${SITE}/blog">Blog</a>
      <a href="${FIVERR}" target="_blank" rel="noopener noreferrer">Fiverr</a>
      <a href="${SITE}/#contact">Contact</a>
    </nav>
  </div>
</footer>`.trim();
}

function progressScript(): string {
  return `
<script>
(function(){
  var bar=document.getElementById('progress-bar');
  if(!bar)return;
  function update(){
    var doc=document.documentElement,body=document.body;
    var st=doc.scrollTop||body.scrollTop;
    var h=Math.max(doc.scrollHeight,body.scrollHeight)-doc.clientHeight;
    var p=h>0?(st/h)*100:0;
    bar.style.width=Math.min(p,100)+'%';
  }
  window.addEventListener('scroll',update,{passive:true});
  update();
})();
</script>`.trim();
}

function tocScript(): string {
  return `
<script>
(function(){
  var links=document.querySelectorAll('.toc-list a');
  if(!links.length)return;
  var headings=[];
  links.forEach(function(l){
    var id=l.getAttribute('href').replace('#','');
    var el=document.getElementById(id);
    if(el)headings.push({el:el,link:l});
  });
  function activate(){
    var fromTop=window.scrollY+120;
    var current=headings[0];
    for(var i=0;i<headings.length;i++){
      if(headings[i].el.offsetTop<=fromTop)current=headings[i];
    }
    links.forEach(function(l){l.classList.remove('toc-active')});
    if(current)current.link.classList.add('toc-active');
  }
  window.addEventListener('scroll',activate,{passive:true});
  activate();
})();
</script>`.trim();
}

export function ssrPage(opts: SsrPageOptions): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head(opts)}
<style>${css()}</style>
</head>
<body>
${navHtml()}
${opts.body}
${footerHtml()}
${progressScript()}
${opts.isPost ? tocScript() : ''}
</body>
</html>`;
}
