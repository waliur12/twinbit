import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Idea & Planning", desc: "Discovery sprints, scope, and a roadmap aligned to App Store goals." },
  { icon: PenTool, title: "Design", desc: "Interactive prototypes built on Apple's Human Interface Guidelines." },
  { icon: Code2, title: "Development", desc: "Native Swift, modular architecture, full CI/CD pipelines." },
  { icon: Rocket, title: "Launch", desc: "Submission, ASO, marketing assets, and post-launch monitoring." },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative overflow-hidden py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            From idea to <span className="text-gradient">App Store</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Desktop horizontal line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border/40 md:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-8 hidden h-px bg-gradient-primary shadow-glow md:block"
          />

          {/* Mobile vertical line */}
          <div className="absolute bottom-0 left-7 top-0 w-px bg-border/40 md:hidden" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-7 top-0 w-px bg-gradient-primary shadow-glow md:hidden"
          />

          <div className="grid gap-12 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-5 md:flex-col md:gap-0"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-background ring-1 ring-border md:h-16 md:w-16">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="md:mt-6">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;