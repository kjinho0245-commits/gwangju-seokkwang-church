import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-terracotta text-cream hover:bg-terracotta/90 active:bg-terracotta/80",
  secondary:
    "bg-transparent text-dark border-2 border-dark hover:bg-dark/5 active:bg-dark/10",
} as const;

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 font-sans text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta";

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
