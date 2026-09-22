import { DetectVisual } from "@/components/detectDiagnosis/DetectVisual";

export const DetectDiagnosis = () => {
  return (
    <section className="border-t border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-[72px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 min-[900px]:flex-row min-[900px]:gap-24">
        <div className="flex max-w-[42ch] flex-1 flex-col gap-3.5">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            Real-time diagnosis
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] min-[900px]:text-[32px]">
            FIELD watches for the fault while the technician works
          </h2>
          <p className="text-base leading-[1.6] text-bodyGray">
            The moment a signal drifts out of range, FIELD flags it, diagnoses
            it against approved knowledge, and confirms the fix, before the
            technician has to look it up.
          </p>
        </div>
        <DetectVisual />
      </div>
    </section>
  );
};
