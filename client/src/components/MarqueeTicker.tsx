const items = [
  "SAAS DEVELOPMENT",
  "FULL STACK ENGINEERING",
  "NEXT.JS",
  "SUPABASE",
  "STRIPE INTEGRATION",
  "AI FEATURES",
  "REPLIT NATIVE",
  "MVP IN 2 WEEKS",
  "CLERK AUTH",
  "REVENUE-FIRST CODE",
  "PRODUCTION-READY",
  "ZERO TECH DEBT",
];

const doubled = [...items, ...items];

export function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden py-4 relative z-10"
      style={{ background: "#CCFF00" }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 whitespace-nowrap px-5 font-black text-xs uppercase tracking-[0.2em]"
            style={{ color: "#3700FF" }}
          >
            {item}
            <span
              className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
              style={{ background: "rgba(55,0,255,0.4)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
