import Section from "./Section";
import SectionHeading from "./SectionHeading";

type ImagePosition = "left" | "right";

interface BackgroundProps {
  imagePosition: ImagePosition;
  image: string;
  title: string;
  text: string[];
}

export default function Background({
  imagePosition,
  image,
  title,
  text,
}: BackgroundProps) {
  const isRight = imagePosition === "right";

  return (
    <Section>
      <div
        className={[
          "flex flex-col md:flex-row items-center justify-center gap-8 md:gap-40",
          isRight ? "md:flex-row-reverse" : "",
        ].join(" ")}
      >
        <div className="w-full max-w-[550px] relative">
          <div
            className={[
              "absolute w-[300px] h-[300px] rounded-md -z-10",
              isRight
                ? "-top-6 -right-6 bg-yellow-400"
                : "-bottom-6 -left-6 bg-slate-900",
              "md:w-[260px] md:h-[260px] sm:w-[220px] sm:h-[220px]",
            ].join(" ")}
          />
          <img
            src={image}
            alt=""
            className="w-full h-auto rounded-2xl block"
          />
        </div>
        <div className="w-full max-w-[520px] md:pt-2">
          <SectionHeading>{title}</SectionHeading>
          <div className="space-y-6">
            {text.map((p, i) => (
              <p key={i} className="text-lg md:text-xl font-light opacity-70">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}