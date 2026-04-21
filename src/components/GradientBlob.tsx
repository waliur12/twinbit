import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "primary" | "accent";
}

const GradientBlob = ({ className, variant = "primary" }: GradientBlobProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-60 animate-float-slow",
        variant === "primary" ? "bg-gradient-glow" : "bg-gradient-accent-glow",
        className,
      )}
    />
  );
};

export default GradientBlob;