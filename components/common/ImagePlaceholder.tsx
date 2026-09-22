import { Icon } from "@/components/icons/Icon";

type ImagePlaceholderProps = {
  label: string;
  shape?: "rect" | "circle";
  tone?: "light" | "dark";
  className?: string;
};

export const ImagePlaceholder = ({
  label,
  shape = "rect",
  tone = "light",
  className = "",
}: ImagePlaceholderProps) => {
  const toneClasses =
    tone === "dark"
      ? "bg-darkCard text-accentOnDark"
      : "bg-primaryTint text-primaryTintText";
  const shapeClasses = shape === "circle" ? "rounded-full" : "";

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center ${toneClasses} ${shapeClasses} ${className}`}
    >
      <Icon name="camera" size={22} />
      <span className="text-[11px] font-medium leading-tight opacity-80">
        {label}
      </span>
    </div>
  );
};
