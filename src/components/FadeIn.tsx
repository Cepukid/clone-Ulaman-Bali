import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeIn = ({
  children,
  delay = 0.1,
  duration = 0.6,
  direction = "up",
}: FadeInProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const offset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, delay },
      });
    }
  }, [inView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset[direction] }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
