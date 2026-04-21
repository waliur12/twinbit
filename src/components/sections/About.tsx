import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GradientBlob from "@/components/GradientBlob";
import PhoneMockup from "@/components/PhoneMockup";

const stats = [
  { value: 120, suffix: "+", label: "Apps shipped" },
  { value: 18, suffix: "M+", label: "Total downloads" },
  { value: 9, suffix: "yrs", label: "iOS expertise" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <GradientBlob className="right-[-10%] top-1/4 h-[500px] w-[500px] opacity-30" variant="accent" />
      <GradientBlob className="left-[-10%] bottom-0 h-[400px] w-[400px] opacity-30" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex h-[480px] w-full max-w-md items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-glow blur-2xl" />
            <div className="relative flex items-center justify-center gap-[-40px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative -mr-12 -rotate-12"
                style={{ scale: 0.85 }}
              >
                <PhoneMockup>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-glow" />
                </PhoneMockup>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
                className="relative z-10"
              >
                <PhoneMockup>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary-glow to-primary" />
                </PhoneMockup>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 1 }}
                className="relative -ml-12 rotate-12"
                style={{ scale: 0.85 }}
              >
                <PhoneMockup>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow via-accent-glow to-accent" />
                </PhoneMockup>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              An iOS-only studio, by choice.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We've spent nearly a decade obsessing over a single platform. Every animation curve,
              every haptic, every Swift line is tuned to feel inevitable on Apple hardware.
              Founders trust us with their first app; established teams rely on us to keep their
              flagship sharp release after release.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;