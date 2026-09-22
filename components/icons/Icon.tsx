export type IconName =
  | "spark"
  | "history"
  | "book"
  | "video"
  | "truck"
  | "diff"
  | "arrow"
  | "check"
  | "shield"
  | "camera"
  | "life"
  | "lock"
  | "file"
  | "users"
  | "person";

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export const Icon = ({ name, size = 20, strokeWidth = 1.7, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    >
      <use href={`#l-${name}`} />
    </svg>
  );
};
