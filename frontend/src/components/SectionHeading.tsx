interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  children,
  className = "",
  align = "left"
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <h2
      className={`mb-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${alignClasses[align]} ${className}`}
    >
      {children}
    </h2>
  );
}
