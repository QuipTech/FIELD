import { howSteps } from "@/lib/howSteps";
import { HowStepCard } from "@/components/howItWorks/HowStepCard";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export const HowItWorks = () => {
  return (
    <section
      id="how"
      className="border-t border-borderGray px-6 py-16 min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 flex max-w-[44ch] flex-col gap-3.5">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            How it works
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
            From question to sourced answer, or to a live expert
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch gap-6 min-[521px]:grid-cols-2 min-[901px]:grid-cols-4">
          {howSteps.map((step, index) => (
            <RevealOnScroll
              key={step.number}
              delayMs={index * 140}
              className="h-full"
            >
              <HowStepCard {...step} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
