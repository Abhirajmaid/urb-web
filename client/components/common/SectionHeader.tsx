type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const defaultEyebrowClass =
  "text-base sm:text-base lg:text-sm font-medium text-[#8a6a6a]";
const defaultTitleClass =
  "text-2xl sm:text-4xl font-semibold leading-tight text-[#4b2f2f]";
const defaultDescriptionClass =
  "text-base sm:text-base lg:text-sm leading-relaxed text-[#6f5655]";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  const gapClass = eyebrow ? "space-y-3 sm:space-y-2" : "space-y-4 sm:space-y-3";

  return (
    <div
      className={`flex flex-col ${gapClass} ${alignment} ${className ?? ""}`}
    >
      {eyebrow ? (
        <p className={`${defaultEyebrowClass} ${eyebrowClassName ?? ""}`.trim()}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`${defaultTitleClass} ${titleClassName ?? ""}`.trim()}>
        {title}
      </h2>
      {description ? (
        <p
          className={`${defaultDescriptionClass} ${
            align === "center" ? "max-w-2xl mx-auto" : ""
          } ${descriptionClassName ?? ""}`.trim()}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
