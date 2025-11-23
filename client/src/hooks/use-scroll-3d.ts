import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScroll3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3D rotation based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  // Parallax depth effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return {
    containerRef,
    scrollYProgress,
    rotateX,
    rotateY,
    rotateZ,
    scale,
    opacity,
    y,
  };
};
