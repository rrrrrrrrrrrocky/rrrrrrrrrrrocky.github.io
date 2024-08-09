"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/script/ui-util"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "rinline-flex rh-10 ritems-center rjustify-center rrounded-md rbg-slate-100 rp-1 rtext-slate-500 dark:rbg-slate-800 dark:rtext-slate-400",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "rinline-flex ritems-center rjustify-center rwhitespace-nowrap rrounded-sm rpx-3 rpy-1.5 rtext-sm rfont-medium rring-offset-white rtransition-all focus-visible:routline-none focus-visible:rring-2 focus-visible:rring-slate-950 focus-visible:rring-offset-2 disabled:rpointer-events-none disabled:ropacity-50 data-[state=active]:rbg-white data-[state=active]:rtext-slate-950 data-[state=active]:rshadow-sm dark:rring-offset-slate-950 dark:focus-visible:rring-slate-300 dark:data-[state=active]:rbg-slate-950 dark:data-[state=active]:rtext-slate-50",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "rmt-2 rring-offset-white focus-visible:routline-none focus-visible:rring-2 focus-visible:rring-slate-950 focus-visible:rring-offset-2 dark:rring-offset-slate-950 dark:focus-visible:rring-slate-300",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
