import { fieldShots } from "@/lib/fieldShots";
import { FieldShotCard } from "@/components/inTheField/FieldShotCard";

export const InTheField = () => {
  return (
    <section
      id="field"
      className="relative overflow-hidden border-t border-borderGray bg-surfaceGray px-6 py-16 min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-9 flex flex-col gap-4 min-[900px]:flex-row min-[900px]:items-end min-[900px]:gap-10">
          <div className="flex max-w-[44ch] flex-col gap-3.5">
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
              In the field
            </span>
            <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
              One technician, one phone, the whole service behind them
            </h2>
          </div>
          <p className="max-w-full text-base leading-[1.6] text-bodyGray min-[900px]:ml-auto min-[900px]:max-w-[38ch]">
            A shift starts at the machine, not at a desk. FIELD travels with
            the technician, scan the asset, ask the question, log what was
            done, and pull an expert in when the answer isn&apos;t written
            down anywhere.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 min-[900px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)] min-[900px]:gap-5">
          {fieldShots.map((shot) => (
            <FieldShotCard key={shot.step} {...shot} />
          ))}
        </div>
      </div>
    </section>
  );
};
