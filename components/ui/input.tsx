import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex min-h-[48px] w-full rounded-xl border border-burgundy/15 bg-ivory-pure px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-subtle/70 transition-all duration-300 ease-editorial focus:border-burgundy focus:bg-ivory-pure focus:outline-none focus:ring-2 focus:ring-gold/25 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

