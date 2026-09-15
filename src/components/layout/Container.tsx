interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </Component>
  );
}
