import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Section3DProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section3D({ children, className = "", id }: Section3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Advanced 3D parallax effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-25, 0, 25]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 1, 1, 0.1]);
  const z = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      style={{
        rotateX,
        rotateY,
        rotateZ,
        scale,
        opacity,
        perspective: 1200,
        transformStyle: "preserve-3d",
        z,
      }}
    >
      {children}
    </motion.div>
  );
}
