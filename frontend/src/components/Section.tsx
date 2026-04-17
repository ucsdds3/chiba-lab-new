interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full px-4 py-16 sm:px-6 md:py-24 ${id ? "scroll-mt-[5.5rem] sm:scroll-mt-28 md:scroll-mt-32" : ""} ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`}>{children}</div>
    </section>
  );
}
