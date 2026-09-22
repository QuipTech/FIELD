import { Icon } from "@/components/icons/Icon";

const replacedIcons: Array<"video" | "spark" | "book" | "history"> = [
  "video",
  "spark",
  "book",
  "history",
];

const gapTiles = [
  { label: "AI diagnostics", highlighted: false },
  { label: "Asset history", highlighted: false },
  { label: "OEM support", highlighted: false },
  { label: "Multi-brand fleet", highlighted: false },
];

export const GapSection = () => {
  return (
    <section
      id="gap"
      className="relative overflow-hidden px-6 py-16 min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="pointer-events-none absolute -left-[90px] -top-[60px] h-60 w-60 animate-drift rounded-full bg-[radial-gradient(circle_at_35%_35%,#EDEBFA,#F7F6FE_60%,rgba(255,255,255,0)_72%)]" />
      <div className="pointer-events-none absolute bottom-16 left-10 h-[120px] w-[120px] -rotate-12 animate-driftB rounded-[20px] border border-primaryBorder" />
      <div className="pointer-events-none absolute bottom-[120px] left-[200px] h-2.5 w-2.5 animate-floatY rounded-full bg-primary opacity-45" />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 min-[900px]:grid-cols-[0.85fr_1.15fr] min-[900px]:gap-16">
      <div className="relative flex flex-col gap-4">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
          The gap in the market
        </span>
        <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
          Every tool solves one part of the problem. None solve the job.
        </h2>
        <div className="mt-auto flex flex-col gap-2.5 pt-8">
          <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-mutedGray">
            One system replaces four
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {replacedIcons.map((icon) => (
              <span
                key={icon}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-primaryTint text-primaryTintText"
              >
                <Icon name={icon} size={17} strokeWidth={1.7} />
              </span>
            ))}
            <Icon
              name="arrow"
              size={18}
              strokeWidth={2}
              className="text-borderGray"
            />
            <span className="flex h-[34px] items-center rounded-lg bg-primary px-3.5 text-[13px] font-semibold text-white">
              FIELD
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-5">
        <p className="text-[17px] leading-[1.65] text-bodyGray">
          Remote support platforms put an expert on a video call, but they know
          nothing about the asset in front of the camera. AI assistants answer
          from a document set with no service record behind them. Knowledge
          bases hold the manuals but cannot reason across them. Maintenance
          systems record what was done without helping anyone decide what to do
          next.
        </p>
        <p className="text-[17px] leading-[1.65] text-bodyGray">
          A technician standing at a stopped machine needs all four at once: a
          sourced answer, that machine&apos;s history, the OEM&apos;s guidance,
          and, when the answer isn&apos;t there, a live expert.
        </p>
        <div className="mt-2 grid grid-cols-2 items-stretch gap-3 min-[520px]:grid-cols-4">
          {gapTiles.map((tile) => (
            <div
              key={tile.label}
              tabIndex={0}
              className={`box-border rounded-lg border p-4 text-[15px] font-medium leading-[1.3] transition-colors duration-300 focus:outline-none ${
                tile.highlighted
                  ? "border-primary bg-primary text-white"
                  : "border-borderGray bg-white text-ink hover:border-primary hover:bg-primary hover:text-white focus-visible:border-primary focus-visible:bg-primary focus-visible:text-white"
              }`}
            >
              {tile.label}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
