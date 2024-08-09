import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/script/util"

const buttonVariants = cva(
  "rinline-flex ritems-center rjustify-center rwhitespace-nowrap rrounded-md rtext-sm rfont-medium rring-offset-white rtransition-colors focus-visible:routline-none focus-visible:rring-2 focus-visible:rring-slate-950 focus-visible:rring-offset-2 disabled:rpointer-events-none disabled:ropacity-50 dark:rring-offset-slate-950 dark:focus-visible:rring-slate-300",
  {
    variants: {
      variant: {
        default: "rbg-slate-900 rtext-slate-50 hover:rbg-slate-900/90 dark:rbg-slate-50 dark:rtext-slate-900 dark:hover:rbg-slate-50/90",
        destructive:
          "rbg-red-500 rtext-slate-50 hover:rbg-red-500/90 dark:rbg-red-900 dark:rtext-slate-50 dark:hover:rbg-red-900/90",
        outline:
          "rborder rborder-slate-200 rbg-white hover:rbg-slate-100 hover:rtext-slate-900 dark:rborder-slate-800 dark:rbg-slate-950 dark:hover:rbg-slate-800 dark:hover:rtext-slate-50",
        secondary:
          "rbg-slate-100 rtext-slate-900 hover:rbg-slate-100/80 dark:rbg-slate-800 dark:rtext-slate-50 dark:hover:rbg-slate-800/80",
        ghost: "hover:rbg-slate-100 hover:rtext-slate-900 dark:hover:rbg-slate-800 dark:hover:rtext-slate-50",
        link: "rtext-slate-900 runderline-offset-4 hover:runderline dark:rtext-slate-50",
      },
      size: {
        default: "rh-10 rpx-4 rpy-2",
        sm: "rh-9 rrounded-md rpx-3",
        lg: "rh-11 rrounded-md rpx-8",
        icon: "rh-10 rw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
