import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "filled" | "tonal" | "outlined" | "text" | "brand";
type Size = "md" | "lg";

const base =
  "state inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold leading-none transition-[transform,box-shadow,background-color] duration-200 ease-emphasized select-none disabled:opacity-40 disabled:pointer-events-none active:scale-[0.97]";

const sizes: Record<Size, string> = {
  md: "h-11 px-6 body-md",
  lg: "h-14 px-8 body-lg",
};

const variants: Record<Variant, string> = {
  filled: "bg-primary text-on-primary shadow-e1 hover:shadow-e2",
  brand: "bg-brand text-white shadow-e1 hover:shadow-e2",
  tonal: "bg-primary-container text-on-primary-container hover:shadow-e1",
  outlined: "border border-outline text-primary bg-transparent",
  text: "text-primary bg-transparent px-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", size = "md", className = "", children, ...rest }, ref) => (
    <button ref={ref} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
);
Button.displayName = "Button";

type LinkButtonProps = CommonProps & {
  href: string;
  children: React.ReactNode;
};

export function LinkButton({ href, variant = "filled", size = "md", className = "", children }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
