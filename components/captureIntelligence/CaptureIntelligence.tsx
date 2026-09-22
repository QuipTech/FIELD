import { Icon } from "@/components/icons/Icon";
import { CaptureVisual } from "@/components/captureIntelligence/CaptureVisual";

const checklist = [
  "Every resolved fault is automatically turned into a step-by-step guide, no write-up required.",
  "Builds a living knowledge base from real fixes, reviewed before it reaches the next technician.",
];

export const CaptureIntelligence = () => {
  return (
    <section className="border-t border-borderGray bg-white px-6 py-16 min-[900px]:px-16 min-[900px]:py-[88px]">
      <div className="mx-auto mb-12 flex max-w-[640px] flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center rounded-full border border-primaryBorder px-3.5 py-1.5 text-[13px] font-semibold text-primary">
          Platform
        </span>
        <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] min-[900px]:text-[38px]">
          Every fix in the field becomes intelligence
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 min-[900px]:grid-cols-[1.1fr_1fr] min-[900px]:gap-16">
        <CaptureVisual />
        <div className="flex flex-col gap-[18px]">
          <h3 className="text-2xl font-semibold leading-[1.2] tracking-[-0.01em] min-[900px]:text-[28px]">
            Capture expertise.
            <br />
            Scale it instantly.
          </h3>
          {checklist.map((item) => (
            <div key={item} className="flex gap-2.5">
              <Icon
                name="check"
                size={18}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-primary"
              />
              <span className="text-base leading-[1.6] text-bodyGray">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
