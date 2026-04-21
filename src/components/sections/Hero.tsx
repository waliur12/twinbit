import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import GradientBlob from "@/components/GradientBlob";
import PhoneMockup from "@/components/PhoneMockup";
import appPulse from "@/assets/app-pulse.jpg";
import appLumen from "@/assets/app-lumen.jpg";
import appDrift from "@/assets/app-drift.jpg";
import appRhythm from "@/assets/app-rhythm.jpg";
import appAtlas from "@/assets/app-atlas.jpg";

const headline = ["We", "Build", "High-Performance", "iOS", "Apps"];

const floatingPhones = [
  {
    src: appPulse,
    alt: "Pulse Fitness app screen",
    className: "left-[4%] top-[18%] w-[160px] sm:w-[190px]",
    rotate: -14,
    depth: 1.4,
    delay: 0,
  },
  {
    src: appAtlas,
    alt: "Atlas finance app screen",
    className: "right-[4%] top-[14%] w-[170px] sm:w-[200px]",
    rotate: 12,
    depth: -1.6,
    delay: 0.4,
  },
  {
    src: appLumen,
    alt: "Lumen Notes app screen",
    className: "left-[10%] bottom-[8%] w-[140px] sm:w-[170px]",
    rotate: 8,
    depth: -1.1,
    delay: 0.8,
  },
  {
    src: appDrift,
    alt: "Drift travel app screen",
    className: "right-[8%] bottom-[6%] w-[150px] sm:w-[180px]",
    rotate: -10,
    depth: 1.2,
    delay: 1.1,
  },
  {
    src: appRhythm,
    alt: "Rhythm music app screen",
    className: "left-1/2 top-[6%] -translate-x-1/2 w-[130px] sm:w-[155px]",
    rotate: -3,
    depth: 0.8,
    delay: 0.6,
  },
];

const Hero = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx1 = useTransform(sx, (v) => v * 30);
  const ty1 = useTransform(sy, (v) => v * 30);
  const tx2 = useTransform(sx, (v) => v * -20);
  const ty2 = useTransform(sy, (v) => v * -20);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grain"
    >
      {/* Background hero gradient */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      {/* Floating blobs */}
      <GradientBlob className="left-[-10%] top-[10%] h-[480px] w-[480px]" />
      <GradientBlob variant="accent" className="right-[-10%] bottom-[5%] h-[520px] w-[520px]" />

      {/* Parallax orbs */}
      <motion.div
        style={{ x: tx1, y: ty1 }}
        className="pointer-events-none absolute left-[15%] top-[25%] h-24 w-24 rounded-full bg-gradient-primary opacity-50 blur-2xl"
        aria-hidden
      />
      <motion.div
        style={{ x: tx2, y: ty2 }}
        className="pointer-events-none absolute right-[18%] top-[30%] h-32 w-32 rounded-full bg-accent opacity-40 blur-2xl"
        aria-hidden
      />

      {/* Floating animated iPhone mockups */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block" aria-hidden>
        {floatingPhones.map((p, i) => {
          const px = useTransform(sx, (v) => v * 22 * p.depth);
          const py = useTransform(sy, (v) => v * 22 * p.depth);
          return (
            <motion.div
              key={i}
              style={{ x: px, y: py, rotate: p.rotate }}
              className={`absolute ${p.className}`}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3 + p.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="opacity-70 mix-blend-luminosity hover:opacity-100"
              >
                <PhoneMockup
                  className="w-full shadow-glow"
                  showNotch={false}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                </PhoneMockup>
              </motion.div>
            </motion.div>
          );
        })}
        {/* Vignette to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70" />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>iOS-first studio · App Store specialists</span>
          </motion.div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {headline.map((word, i) => (
              <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block ${i === 2 ? "text-gradient" : ""}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            From concept to App Store launch — we design, build, and ship native iOS
            experiences that feel inevitable. Crafted in Swift, polished to perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Start a project
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border/60 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-gradient-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;