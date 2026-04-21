import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import GradientBlob from "@/components/GradientBlob";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Project = {
  name: string;
  category: string;
  description: string;
  gradient: string;
  problem: string;
  approach: string;
  result: string;
};

const projects: Project[] = [
  {
    name: "Pulse Fitness",
    category: "Health & Fitness",
    description: "AI-guided workouts with real-time motion tracking via the Neural Engine.",
    gradient: "from-primary via-accent to-primary-glow",
    problem: "Users dropped off home workouts due to poor form feedback.",
    approach: "Built on-device pose estimation using Vision + Core ML, with haptic cues.",
    result: "4.9 App Store rating · 220k MAU within 6 months.",
  },
  {
    name: "Lumen Notes",
    category: "Productivity",
    description: "A markdown-first journal with iCloud sync and beautiful typography.",
    gradient: "from-accent via-primary to-accent-glow",
    problem: "Existing note apps felt cluttered and slow on launch.",
    approach: "SwiftUI architecture with CRDT sync engine — sub-100ms cold starts.",
    result: "Editor's Choice · featured by Apple in Productivity.",
  },
  {
    name: "Drift",
    category: "Travel",
    description: "Spontaneous trip planner with offline maps and curated stays.",
    gradient: "from-primary-glow via-accent-glow to-primary",
    problem: "Travelers needed an inspiration-first booking flow, not a search box.",
    approach: "Generative itineraries powered by an in-house LLM behind a Swift backend.",
    result: "$1.2M in bookings during a 90-day pilot.",
  },
  {
    name: "Rhythm",
    category: "Music",
    description: "Collaborative playlist studio with live listening rooms and reactions.",
    gradient: "from-accent-glow via-primary to-accent",
    problem: "Music sharing felt asynchronous and impersonal.",
    approach: "Real-time low-latency audio sync via WebRTC + MusicKit integration.",
    result: "60k installs week one · trending #3 in Music.",
  },
  {
    name: "Atlas",
    category: "Finance",
    description: "A privacy-first net-worth tracker that never leaves your device.",
    gradient: "from-primary via-primary-glow to-accent",
    problem: "Users distrusted finance apps that required cloud accounts.",
    approach: "All data stored in the Secure Enclave; sync via end-to-end encrypted iCloud.",
    result: "Featured in Privacy collections · 4.8 stars.",
  },
];

const Portfolio = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-78%"]);

  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <GradientBlob className="left-[40%] top-[20%] h-[400px] w-[400px] opacity-20" variant="accent" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Selected work
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Apps we're <span className="text-gradient">proud to ship</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Scroll horizontally to explore. Click any project for the full case study.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="absolute left-0 top-1/2 flex -translate-y-1/4 gap-8 px-[6vw] pt-32 will-change-transform">
          {projects.map((p) => (
            <button
              key={p.name}
              onClick={() => setActive(p)}
              className="group flex w-[320px] shrink-0 cursor-pointer flex-col items-center text-left focus:outline-none"
            >
              <PhoneMockup className="transition-transform duration-500 ease-smooth group-hover:-translate-y-2 group-hover:scale-[1.03]">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90`} />
                <div className="absolute inset-0 flex flex-col justify-end p-5 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-3 inline-flex w-fit rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium text-white backdrop-blur">
                    {p.category}
                  </div>
                  <div className="text-lg font-bold text-white">{p.name}</div>
                </div>
                {/* Status bar */}
                <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 pt-4 text-[10px] font-semibold text-white/90">
                  <span>9:41</span>
                  <span />
                </div>
              </PhoneMockup>
              <div className="mt-6 flex w-full items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold">{p.name}</div>
                  <p className="mt-1 max-w-[240px] text-xs text-muted-foreground">{p.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="glass max-w-2xl border-glass-border/10 bg-background/80">
          {active && (
            <>
              <DialogHeader>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {active.category}
                </span>
                <DialogTitle className="text-3xl font-bold tracking-tight">
                  {active.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {active.description}
                </DialogDescription>
              </DialogHeader>

              <div className={`my-4 h-32 rounded-xl bg-gradient-to-br ${active.gradient}`} />

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Problem</div>
                  <p className="mt-1 text-muted-foreground">{active.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Approach</div>
                  <p className="mt-1 text-muted-foreground">{active.approach}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Result</div>
                  <p className="mt-1 text-muted-foreground">{active.result}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;