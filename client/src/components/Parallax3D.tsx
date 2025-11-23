import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Parallax3DProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax3D({ children, offset = 50, className = "" }: Parallax3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
