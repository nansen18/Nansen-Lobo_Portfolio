import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
      style={{
        scaleX,
        background: "var(--gradient-primary)",
        boxShadow: "0 0 12px hsl(258 90% 66% / 0.6)",
      }}
    />
  );
};

export default ScrollProgress;
