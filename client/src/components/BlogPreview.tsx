import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    slug: "how-i-built-350-saas-apps-on-replit",
    tag: "Case Study",
    title: "How I Built 350+ SaaS Apps on Replit",
    excerpt: "The real lessons from building over 350 SaaS products — and the patterns that consistently generate $1M+ in client revenue.",
    readTime: "7 min",
  },
  {
    slug: "saas-tech-stack-nextjs-supabase-stripe",
    tag: "Technical",
    title: "The Exact Stack I Use for Every $1M+ SaaS Build",
    excerpt: "Next.js + Supabase + Stripe + Clerk. After 350 builds, this is the stack that ships fastest and scales furthest.",
    readTime: "8 min",
  },
  {
    slug: "mvp-to-launch-4-weeks-saas",
    tag: "Process",
    title: "MVP to Launch in 4 Weeks: My Exact Process",
    excerpt: "Week-by-week breakdown of how I take a SaaS idea from zero to live, paying customers in under a month.",
    readTime: "7 min",
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0a0a14" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] mb-3" style={{ color: "#CCFF00" }}>
              Knowledge Base
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-none tracking-tight">
              Articles &<br />
              <span style={{ color: "#CCFF00" }}>Guides</span>
            </h2>
          </motion.div>
          <motion.a
            href="/blog"
            className="flex items-center gap-2 text-sm font-black uppercase tracking-wider pb-1 border-b-2 self-start sm:self-auto"
            style={{ color: "#CCFF00", borderColor: "#CCFF00" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ gap: "0.75rem" } as any}
          >
            View All Articles
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: "rgba(204,255,0,0.3)", backgroundColor: "rgba(255,255,255,0.06)" } as any}
            >
              {/* Tag */}
              <span
                className="inline-block text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(204,255,0,0.12)", color: "#CCFF00" }}
              >
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-black text-white leading-snug mb-3 group-hover:text-[#CCFF00] transition-colors duration-200">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {post.readTime} read
                </span>
                <span className="flex items-center gap-1 text-xs font-black uppercase tracking-wide" style={{ color: "#CCFF00" }}>
                  Read
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
