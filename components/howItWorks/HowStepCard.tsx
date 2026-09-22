import Image from "next/image";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import type { HowStep } from "@/lib/howSteps";

export const HowStepCard = ({
  number,
  title,
  description,
  headBg,
  imageLabel,
  image,
}: HowStep) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
      <div
        className="flex flex-1 flex-col justify-between gap-3 p-6"
        style={{ backgroundColor: headBg }}
      >
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-white/70">{number}</span>
          <h3 className="text-[19px] font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm leading-[1.5] text-white/[0.88]">{description}</p>
      </div>
      <div className="relative h-[235px] w-full flex-none bg-surfaceGray">
        {image ? (
          <Image
            src={image}
            alt={imageLabel}
            fill
            sizes="(min-width: 901px) 25vw, (min-width: 521px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <ImagePlaceholder label={imageLabel} />
        )}
      </div>
    </div>
  );
};
