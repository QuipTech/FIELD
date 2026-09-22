import { Icon } from "@/components/icons/Icon";
import { TypewriterHeading } from "@/components/hero/TypewriterHeading";

const trustPoints = [
  "Every answer cites its source",
  "Works offline in the pit",
  "Any brand, one workflow",
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-[620px] flex-col justify-start overflow-hidden bg-gradient-to-br from-dark via-[#181227] to-[#100a1e] py-24 min-[900px]:py-28">
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/videos/heroBackground.mp4"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(10,10,14,0.92)_0%,rgba(10,10,14,0.8)_45%,rgba(10,10,14,0.62)_100%)]" />

      <div className="relative z-[2] mx-auto box-border w-full max-w-[1440px] px-20">
        <div className="flex w-full max-w-[560px] flex-col items-start gap-7 text-start">
          <TypewriterHeading
            text="The AI technical intelligence platform for critical assets"
            className="max-w-[16ch] text-[34px] font-semibold leading-[1.04] tracking-[-0.03em] text-white min-[900px]:max-w-[490px] min-[900px]:text-[60px]"
          />
          <p className="max-w-[48ch] text-base leading-[1.5] text-white/90 min-[900px]:text-xl">
            FIELD gives field technicians AI-powered answers, complete machine
            history and live expert support in one place, not three separate
            tools.
          </p>
          <div className="flex flex-wrap justify-start gap-3">
            <a
              href="#demo"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-[22px] text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primaryHover"
            >
              Request a demo
              <Icon name="arrow" size={18} strokeWidth={1.7} />
            </a>
            <a
              href="#capabilities"
              className="inline-flex h-12 items-center rounded-lg border border-white/40 px-[22px] text-base font-medium text-white transition-colors hover:border-primary hover:bg-primarySoft hover:text-ink"
            >
              See the capabilities
            </a>
          </div>
          <div className="flex flex-wrap justify-start gap-6 border-t border-white/20 pt-4 max-w-[60ch]">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <Icon
                  name="check"
                  size={16}
                  strokeWidth={2}
                  className="text-accentOnDark"
                />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
