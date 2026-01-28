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
      right: "text-right",
    };
  
    return (
      <h2 className={`text-4xl md:text-5xl font-semibold mb-4 ${alignClasses[align]} ${className}`}>
        {children}
      </h2>
    );
  }