"use client"

import * as React from "react"
import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

/**
 * Card — dark glass surface with a hairline border, a faint teal hover wash
 * (.card-wash, see globals.css), and a subtle mouse-tilt parallax that gives the
 * card 3D life: the cursor's normalized offset from centre drives
 * perspective(900px) rotateY/rotateX. Disabled under prefers-reduced-motion and
 * when `tilt={false}`. Used to build the bento-grid sections (see
 * components/ui/bento.tsx and components/sections/*).
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { tilt?: boolean }
>(({ className, tilt = true, onMouseMove, onMouseLeave, style, ...props }, ref) => {
  const reduce = useReducedMotion()
  const innerRef = React.useRef<HTMLDivElement | null>(null)
  const [transform, setTransform] = React.useState<string | undefined>(undefined)

  const setRefs = (node: HTMLDivElement | null) => {
    innerRef.current = node
    if (typeof ref === "function") ref(node)
    else if (ref) ref.current = node
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(e)
    if (!tilt || reduce || !innerRef.current) return
    const r = innerRef.current.getBoundingClientRect()
    const dx = (e.clientX - r.left) / r.width - 0.5
    const dy = (e.clientY - r.top) / r.height - 0.5
    setTransform(`perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`)
  }

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e)
    setTransform(undefined)
  }

  return (
    <div
      ref={setRefs}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, ...style }}
      className={cn(
        "card-wash card-3d group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] text-card-foreground backdrop-blur-sm hover:border-cyan/30 hover:bg-white/[0.06]",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-lg leading-none tracking-tight text-[var(--color-text)]", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed text-[var(--color-text-2)]", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
