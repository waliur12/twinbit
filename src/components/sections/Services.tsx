import { motion } from "framer-motion";
import { Zap, ShieldCheck, Sparkles, RefreshCw } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GradientBlob from "@/components/GradientBlob";

const services = [
  {
    icon: Zap,
    title: "Native Performance",
    desc: "Built in Swift & SwiftUI for fluid 120Hz experiences that feel instant on every iPhone.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    desc: "On-device intelligence, zero tracking, and no accounts required. Your data stays yours.",
  },
  {
    icon: Sparkles,
    title: "Designed for Delight",
    desc: "Haptics, animations, and HIG-perfect interactions that turn everyday taps into moments.",
  },
  {
    icon: RefreshCw,
    title: "Always Improving",
    desc: "Frequent updates shaped by our community — every release sharper than the last.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-32">
      <GradientBlob className="left-[-10%] top-1/3 h-[400px] w-[400px] opacity-30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Promise
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Why people choose <span className="text-gradient">our apps</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every app we ship follows the same set of principles — the things that make iPhone feel like iPhone.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard glow className="group h-full">
                <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;