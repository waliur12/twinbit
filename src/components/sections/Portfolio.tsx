import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import GradientBlob from "@/components/GradientBlob";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import appPulse from "@/assets/app-pulse.jpg";
import appLumen from "@/assets/app-lumen.jpg";
import appDrift from "@/assets/app-drift.jpg";
import appRhythm from "@/assets/app-rhythm.jpg";
import appAtlas from "@/assets/app-atlas.jpg";

type Project = {
  name: string;
  category: string;
  description: string;
  accent: string;
  image: string;
  metric: string;
  year: string;
  problem: string;
  approach: string;
  result: string;
};

const projects: Project[] = [
  {
    name: "Pulse Fitness",
    category: "Health & Fitness",
    description: "AI-guided workouts with real-time motion tracking via the Neural Engine.",
    accent: "from-primary/30 via-primary-glow/20 to-transparent",
    image: appPulse,
    metric: "220k MAU",
    year: "2024",
    problem: "Users dropped off home workouts due to poor form feedback.",
    approach: "Built on-device pose estimation using Vision + Core ML, with haptic cues.",
    result: "4.9 App Store rating · 220k MAU within 6 months.",
  },
  {
    name: "Lumen Notes",
    category: "Productivity",
    description: "A markdown-first journal with iCloud sync and beautiful typography.",
    accent: "from-accent/30 via-accent-glow/20 to-transparent",
    image: appLumen,
    metric: "Editor's Choice",
    year: "2024",
    problem: "Existing note apps felt cluttered and slow on launch.",
    approach: "SwiftUI architecture with CRDT sync engine — sub-100ms cold starts.",
    result: "Editor's Choice · featured by Apple in Productivity.",
  },
  {
    name: "Drift",
    category: "Travel",
    description: "Spontaneous trip planner with offline maps and curated stays.",
    accent: "from-primary-glow/30 via-accent/20 to-transparent",
    image: appDrift,
    metric: "$1.2M booked",
    year: "2023",
    problem: "Travelers needed an inspiration-first booking flow, not a search box.",
    approach: "Generative itineraries powered by an in-house LLM behind a Swift backend.",
    result: "$1.2M in bookings during a 90-day pilot.",
  },
  {
    name: "Rhythm",
    category: "Music",
    description: "Collaborative playlist studio with live listening rooms and reactions.",
    accent: "from-accent/30 via-primary/20 to-transparent",
    image: appRhythm,
    metric: "60k week-1",
    year: "2023",
    problem: "Music sharing felt asynchronous and impersonal.",
    approach: "Real-time low-latency audio sync via WebRTC + MusicKit integration.",
    result: "60k installs week one · trending #3 in Music.",
  },
  {
    name: "Atlas",
    category: "Finance",
    description: "A privacy-first net-worth tracker that never leaves your device.",
    accent: "from-primary/30 via-primary-glow/20 to-transparent",
    image: appAtlas,
    metric: "4.8 ★",
    year: "2024",
    problem: "Users distrusted finance apps that required cloud accounts.",
    approach: "All data stored in the Secure Enclave; sync via end-to-end encrypted iCloud.",
    result: "Featured in Privacy collections · 4.8 stars.",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-32">
      <GradientBlob className="left-[-10%] top-[10%] h-[500px] w-[500px] opacity-30" />
      <GradientBlob
        variant="accent"
        className="right-[-10%] bottom-[10%] h-[500px] w-[500px] opacity-30"
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Selected work
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Apps we're <span className="text-gradient">proud to ship</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Each project below is a partnership — design, engineering, and launch
            handled end-to-end. Tap any case to dive in.
          </p>
        </motion.div>

        {/* Project list — alternating split rows */}
        <div className="space-y-32 md:space-y-40">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Phone mockup column */}
                <div className="relative md:col-span-5">
                  <div
                    className="absolute inset-0 -z-10 opacity-60 blur-3xl"
                    style={{
                      background:
                        i % 2 === 0
                          ? "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.35), transparent 65%)"
                          : "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.35), transparent 65%)",
                    }}
                    aria-hidden
                  />
                  <motion.div
                    whileHover={{ y: -8, rotate: reversed ? -2 : 2 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="mx-auto"
                  >
                    <PhoneMockup
                      className="w-[240px] sm:w-[280px]"
                      showNotch={false}
                    >
                      <img
                        src={p.image}
                        alt={`${p.name} — ${p.category} app screen`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </PhoneMockup>
                  </motion.div>
                </div>

                {/* Content column */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-primary">0{i + 1}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{p.category}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{p.year}</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    {p.name}
                  </h3>

                  <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
                    {p.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-4 py-2 text-sm backdrop-blur">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      <span className="font-medium">{p.metric}</span>
                    </div>
                    <button
                      onClick={() => setActive(p)}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <span className="relative">
                        Read case study
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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

              <div className="my-4 overflow-hidden rounded-xl border border-glass-border/10">
                <img
                  src={active.image}
                  alt={`${active.name} app preview`}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
              </div>

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