const items = [
  "SAAS DEVELOPMENT",
  "FULL STACK",
  "NEXT.JS",
  "SUPABASE",
  "STRIPE",
  "AI INTEGRATION",
  "REPLIT NATIVE",
  "MVP IN WEEKS",
  "CLERK AUTH",
  "REVENUE GROWTH",
];

export function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 relative z-10"
      style={{ background: "#CCFF00" }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap px-6 font-black text-sm uppercase tracking-widest"
            style={{ color: "#3700FF" }}
          >
            {item}
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#3700FF" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
