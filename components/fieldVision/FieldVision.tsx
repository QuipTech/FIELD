import { Icon } from "@/components/icons/Icon";
import { visionSteps } from "@/lib/visionSteps";
import { VisionPhoneMock } from "@/components/fieldVision/VisionPhoneMock";

export const FieldVision = () => {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-dark px-6 py-16 text-darkTextLight min-[900px]:px-16 min-[900px]:py-[88px]"
    >
      <div className="pointer-events-none absolute -right-20 -top-[120px] h-[420px] w-[420px] animate-drift rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(74,52,199,0.55),rgba(20,22,26,0)_68%)]" />
      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-9 min-[900px]:grid-cols-[1fr_1.1fr] min-[900px]:gap-16">
        <div className="flex flex-col gap-5">
          <span className="inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.08em] text-accentOnDark">
            <Icon name="camera" size={18} strokeWidth={1.6} />
            FIELD Vision
          </span>
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white min-[900px]:text-[46px]">
            Point the camera. Ask what&apos;s wrong.
          </h2>
          <p className="max-w-[44ch] text-[17px] leading-[1.65] text-darkText">
            A technician holds up a phone to a stopped machine and asks the
            question out loud. FIELD Vision identifies the asset, reads what
            it sees, and reasons across the same approved knowledge and
            service history the assistant uses today.
          </p>
          <div className="mt-2 flex flex-col gap-px overflow-hidden rounded-xl bg-darkBorder">
            {visionSteps.map((step) => (
              <div key={step.number} className="flex gap-4 bg-darkCard px-[18px] py-3.5">
                <span className="min-w-[22px] text-[13px] font-semibold text-accentOnDark">
                  {step.number}
                </span>
                <div>
                  <div className="text-base font-medium text-white">{step.title}</div>
                  <div className="text-sm text-mutedGray">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <VisionPhoneMock />
      </div>
    </section>
  );
};
