"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-500 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-burgundy text-ivory hover:bg-burgundy-light hover:scale-[1.02] shadow-sm",
        outline:
          "border border-burgundy/25 bg-transparent text-burgundy hover:border-burgundy hover:bg-burgundy/[0.04] hover:scale-[1.02]",
        ivory:
          "bg-ivory text-burgundy hover:bg-ivory-pure hover:scale-[1.02] shadow-sm",
        ghost:
          "bg-transparent text-charcoal hover:bg-burgundy/5 hover:text-burgundy",
      },
      size: {
        default: "min-h-[44px] px-7 py-3 text-xs",
        lg: "min-h-[48px] px-9 py-3.5 text-xs tracking-[0.2em]",
        sm: "min-h-[44px] px-5 py-2.5 text-[11px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface RippleItem {
  id: number;
  x: number;
  y: number;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disableRipple?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disableRipple = false, onClick, children, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<RippleItem[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disableRipple) {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const id = Date.now() + Math.random();
        setRipples((prev) => [...prev, { id, x, y }]);
        window.setTimeout(() => {
          setRipples((prev) => prev.filter((item) => item.id !== id));
        }, 700);
      }
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            aria-hidden="true"
            initial={{ left: ripple.x, top: ripple.y, scale: 0, opacity: 0.45 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30"
          />
        ))}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
