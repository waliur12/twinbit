import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Bell, Apple } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import { toast } from "@/hooks/use-toast";

const apps = [
  { name: "Pulse Fitness", url: "#" },
  { name: "Lumen Notes", url: "#" },
  { name: "Drift", url: "#" },
  { name: "Rhythm", url: "#" },
  { name: "Atlas", url: "#" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "You're on the list",
        description: "We'll email you the moment our next app hits the App Store.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <GradientBlob className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <GradientBlob variant="accent" className="left-[10%] top-[10%] h-[300px] w-[300px] opacity-30" />
      <GradientBlob variant="accent" className="right-[10%] bottom-[10%] h-[300px] w-[300px] opacity-30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Stay in the loop
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Be first to try our <span className="text-gradient">next app</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Drop your email and we'll let you know the day our next iPhone app launches. No spam — ever.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass mx-auto mt-12 flex max-w-xl flex-col gap-3 rounded-full p-2 shadow-elegant sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@apple.com"
            className="w-full flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            <Bell className="h-4 w-4" />
            <span>{submitting ? "Subscribing…" : "Notify me"}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Or grab one of our apps today
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {apps.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-4 py-2.5 text-background transition-transform hover:scale-[1.04]"
              >
                <Apple className="h-5 w-5" />
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[9px] uppercase tracking-wide opacity-70">{a.name} on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;