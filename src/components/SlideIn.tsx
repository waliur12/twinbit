import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * SlideIn — reusable scroll-triggered slide + fade animation.
 *
 * Wrap any element with <SlideIn> and it will:
 *  1. Start slightly off-screen (left or right)
 *  2. Fade in
 *  3. Glide to its final position when it enters the viewport
 *
 * Tweak the props to control speed, direction, distance, and easing.
 */

export type SlideDirection = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  /** Direction the element slides FROM. Default: "left" */
  direction?: SlideDirection;
  /** Pixel distance the element travels. Default: 80 */
  distance?: number;
  /** Animation duration in seconds. Default: 0.9 */
  duration?: number;
  /** Delay before the animation starts (seconds). Default: 0 */
  delay?: number;
  /** Framer Motion easing curve. Default: cubic-bezier(0.22, 1, 0.36, 1) */
  ease?: number[] | string;
  /** Only animate the first time the element enters view. Default: true */
  once?: boolean;
  /** IntersectionObserver root margin — when to trigger. Default: "-80px" */
  margin?: string;
  /** Optional className passed to the wrapper. */
  className?: string;
}

const SlideIn = ({
  children,
  direction = "left",
  distance = 80,
  duration = 0.9,
  delay = 0,
  ease = [0.22, 1, 0.36, 1],
  once = true,
  margin = "-80px",
  className,
}: SlideInProps) => {
  // Map direction → starting offset
  const offset = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  }[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin as any }}
      transition={{ duration, delay, ease: ease as any }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;