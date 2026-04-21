import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PhoneMockupProps {
  children?: ReactNode;
  className?: string;
  screenClassName?: string;
  showNotch?: boolean;
}

const PhoneMockup = ({ children, className, screenClassName, showNotch = true }: PhoneMockupProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-[260px] rounded-[2.75rem] border border-glass-border/10 bg-gradient-to-b from-surface-elevated to-surface p-2 shadow-elegant",
        className,
      )}
      style={{ borderColor: "hsl(var(--glass-border) / 0.12)" }}
    >
      {/* Side buttons */}
      <div className="absolute left-[-3px] top-24 h-10 w-[3px] rounded-l bg-foreground/10" />
      <div className="absolute left-[-3px] top-40 h-16 w-[3px] rounded-l bg-foreground/10" />
      <div className="absolute right-[-3px] top-32 h-20 w-[3px] rounded-r bg-foreground/10" />

      {/* Screen */}
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[2.25rem] bg-background",
          screenClassName,
        )}
      >
        {/* Notch / Dynamic Island */}
        {showNotch && (
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        )}
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;