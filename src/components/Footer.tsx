import { Github, Twitter, Linkedin, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <span className="text-sm font-bold text-primary-foreground">L</span>
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Loft<span className="text-gradient">iOS</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} LoftiOS Studio. Crafted in Swift.
        </p>

        <div className="flex items-center gap-3">
          {[Twitter, Github, Linkedin, Dribbble].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Social link"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground hover:shadow-glow"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;