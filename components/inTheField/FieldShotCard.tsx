import Image from "next/image";
import type { FieldShot } from "@/lib/fieldShots";

export const FieldShotCard = ({
  step,
  title,
  description,
  imageLabel,
  imageSrc,
}: FieldShot) => {
  return (
    <div className="group flex min-w-0 cursor-pointer flex-row items-stretch gap-3 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl min-[900px]:flex-col min-[900px]:gap-3.5">
      <div className="relative w-full h-48 overflow-hidden rounded-xl border border-borderGray bg-white md:h-56">
        <Image
          src={imageSrc}
          alt={imageLabel}
          fill
          sizes="(min-width: 900px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 min-[900px]:justify-start">
        <span className="text-xs font-semibold text-primary">{step}</span>
        <span className="text-sm font-medium min-[900px]:text-base">{title}</span>
        <span className="text-xs leading-[1.35] text-bodyGray min-[900px]:text-sm min-[900px]:leading-[1.6]">
          {description}
        </span>
      </div>
    </div>
  );
};
