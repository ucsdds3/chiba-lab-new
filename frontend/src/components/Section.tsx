interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
  
  export default function Section({ children, className = "", id }: SectionProps) {
    return (
      <section id={id} className={`w-full py-12 px-10 ${className}`}>
        <div className="container mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }