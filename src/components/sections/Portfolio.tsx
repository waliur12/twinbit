import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Star, Apple, Download } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import GradientBlob from "@/components/GradientBlob";
import SlideIn from "@/components/SlideIn";
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
import appPulseVideo from "@/assets/app-pulse-video.mp4.asset.json";
import appDriftVideo from "@/assets/app-drift-video.mp4.asset.json";

type Project = {
  name: string;
  category: string;
  description: string;
  accent: string;
  image: string;
  /** Optional looping screen-recording shown inside the iPhone mockup. */
  video?: string;
  metric: string;
  rating: string;
  downloads: string;
  appStoreUrl: string;
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
    video: appPulseVideo.url,
    metric: "220k MAU",
    rating: "4.9",
    downloads: "220k+",
    appStoreUrl: "#",
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
    rating: "4.8",
    downloads: "150k+",
    appStoreUrl: "#",
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
    video: appDriftVideo.url,
    metric: "$1.2M booked",
    rating: "4.7",
    downloads: "90k+",
    appStoreUrl: "#",
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
    rating: "4.8",
    downloads: "60k+",
    appStoreUrl: "#",
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
    rating: "4.8",
    downloads: "40k+",
    appStoreUrl: "#",
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
            Our Apps
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Apps we've <span className="text-gradient">shipped to the world</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Every app below is built, owned, and updated by our team — and downloaded
            by Apple users in 90+ countries. Tap any title to peek behind the build.
          </p>
        </motion.div>

        {/* Project list — alternating split rows */}
        <div className="space-y-32 md:space-y-40">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            // Image slides in from the side it sits on; copy slides from the opposite side.
            const imageDirection = reversed ? "right" : "left";
            const contentDirection = reversed ? "left" : "right";
            return (
              <div
                key={p.name}
                className={`grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Phone mockup column */}
                <SlideIn
                  direction={imageDirection}
                  distance={120}
                  duration={1}
                  ease={[0.22, 1, 0.36, 1]}
                  once={false}
                  className="relative md:col-span-5"
                >
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
                      {p.video ? (
                        <video
                          src={p.video}
                          poster={p.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          aria-label={`${p.name} — ${p.category} app preview`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={p.image}
                          alt={`${p.name} — ${p.category} app screen`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      )}
                    </PhoneMockup>
                  </motion.div>
                </SlideIn>

                {/* Content column */}
                <SlideIn
                  direction={contentDirection}
                  distance={80}
                  duration={0.9}
                  delay={0.15}
                  once={false}
                  className="md:col-span-7"
                >
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="text-primary">0{i + 1}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{p.category}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{p.year}</span>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="font-medium text-foreground">{p.rating}</span>
                    <span className="opacity-50">·</span>
                    <Download className="h-3 w-3" />
                    <span>{p.downloads} downloads</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    {p.name}
                  </h3>

                  <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
                    {p.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={p.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition-transform hover:scale-[1.03]"
                    >
                      <Apple className="h-6 w-6" />
                      <span className="flex flex-col items-start leading-none">
                        <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
                        <span className="text-sm font-semibold">App Store</span>
                      </span>
                    </a>
                    <button
                      onClick={() => setActive(p)}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </SlideIn>
              </div>
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
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">The story</div>
                  <p className="mt-1 text-muted-foreground">{active.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Behind the build</div>
                  <p className="mt-1 text-muted-foreground">{active.approach}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">In the wild</div>
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