import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import GradientBlob from "@/components/GradientBlob";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll be in touch within one business day.",
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
            Contact
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's build your <span className="text-gradient">next app</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Tell us about your idea — we'll reply with next steps within one business day.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass mx-auto mt-12 max-w-2xl rounded-3xl p-8 shadow-elegant"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Jane Appleseed"
                className="w-full rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="details" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Project details
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              placeholder="A few sentences about what you're building, timeline, and goals…"
              className="w-full resize-none rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            <span>{submitting ? "Sending…" : "Send message"}</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;