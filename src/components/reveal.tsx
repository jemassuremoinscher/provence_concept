import { CSSProperties, ReactNode } from "react";

/**
 * Entrance animation as pure CSS, gated by the `.js` class on <html>
 * (set before first paint in layout). Guarantees:
 * - no-JS / crawlers: fully visible (the `.js` rule never applies).
 * - JS users: a one-shot fade-up that ALWAYS completes (not scroll/IO bound).
 * - prefers-reduced-motion: visible, no motion.
 * Server component — ships zero JS.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
