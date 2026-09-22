export const DetectVisual = () => {
  return (
    <div
      className="relative mx-auto flex h-[240px] w-[220px] shrink-0 items-center justify-center min-[900px]:mx-0 min-[900px]:ml-auto min-[900px]:h-[320px] min-[900px]:w-[300px]"
      style={{ perspective: "1100px" }}
    >
      <div
        className="relative h-[220px] w-[220px] animate-spinStack"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 rounded-2xl border border-borderGray bg-surfaceGray"
          style={{ transform: "translateZ(-42px)" }}
        />
        <div
          className="absolute inset-0 rounded-2xl border border-primaryBorder bg-primaryTint"
          style={{ transform: "translateZ(-14px)" }}
        />
        <div
          className="absolute inset-0 rounded-2xl bg-primary shadow-[0_20px_48px_rgba(74,52,199,0.28)]"
          style={{ transform: "translateZ(14px)" }}
        />
        <div
          className="absolute inset-0 rounded-2xl border border-primary/35"
          style={{ transform: "translateZ(42px)" }}
        />
      </div>

      <div
        className="absolute right-4 top-6 h-[66px] w-[66px] animate-cubeSpin"
        style={{ transformStyle: "preserve-3d", perspective: "600px" }}
      >
        <div
          className="absolute inset-0 border-[1.5px] border-primary/55"
          style={{ transform: "translateZ(33px)" }}
        />
        <div
          className="absolute inset-0 border-[1.5px] border-primary/[0.28]"
          style={{ transform: "rotateY(90deg) translateZ(33px)" }}
        />
        <div
          className="absolute inset-0 border-[1.5px] border-accentOnDark/40"
          style={{ transform: "translateZ(-33px)" }}
        />
      </div>

      <div className="absolute bottom-9 left-2 h-12 w-12 animate-floatY rounded-full bg-primaryTint" />
      <div className="absolute bottom-12 left-[22px] h-12 w-12 animate-pulseRing rounded-full border-2 border-primary" />

      <StatusCard />
    </div>
  );
};

const StatusCard = () => (
  <div className="absolute bottom-0 right-[-8px] z-[2] flex w-[200px] animate-floatY items-center gap-3 rounded-xl border border-borderGray bg-white p-3 shadow-[0_16px_40px_rgba(30,32,36,0.14)]">
    <span className="relative flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-primaryTint text-primaryTintText">
      <svg width="17" height="17" style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
        <use href="#l-person" />
      </svg>
      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-dotCycle rounded-full border-2 border-white" />
    </span>
    <div className="flex min-w-0 flex-col gap-0.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.04em] text-mutedGray">
        Technician + AI
      </span>
      <span className="relative block h-[15px] overflow-hidden">
        <span className="absolute animate-statusCycle whitespace-nowrap text-[13px] font-medium text-ink">
          Fault detected
        </span>
        <span className="absolute animate-statusCycle whitespace-nowrap text-[13px] font-medium text-ink [animation-delay:2.5s]">
          Diagnosing live…
        </span>
        <span className="absolute animate-statusCycle whitespace-nowrap text-[13px] font-medium text-ink [animation-delay:5s]">
          Fix confirmed
        </span>
      </span>
    </div>
  </div>
);
