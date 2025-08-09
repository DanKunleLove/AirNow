
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BadgeIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary shadow-inner",
        className
      )}
    >
      <div className="absolute inset-0.5 rounded-full bg-background/80" />
      <div className="relative">{children}</div>
    </div>
  );
}
