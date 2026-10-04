"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/icons/Icon";

const replacedIcons: Array<{ icon: IconName; label: string }> = [
  { icon: "video", label: "Remote video support" },
  { icon: "spark", label: "AI-powered diagnostics" },
  { icon: "book", label: "Document repository" },
  { icon: "history", label: "Maintenance log" },
];

const defaultCopy = [
  "Remote support platforms put an expert on a video call, but they know nothing about the asset in front of the camera. AI assistants answer from a document set with no service record behind them. Knowledge bases hold the manuals but cannot reason across them. Maintenance systems record what was done without helping anyone decide what to do next.",
  "A technician standing at a stopped machine needs all four at once: a sourced answer, that machine's history, the OEM's guidance, and, when the answer isn't there, a live expert.",
];

const gapTiles = [
  {
    label: "AI diagnostics",
    description:
      "Every question gets a sourced answer with citations back to the manual or bulletin it came from, drawn from that asset's own history, not a best guess.",
  },
  {
    label: "Asset history",
    description:
      "A full service record per asset, searchable by fault, part number, date or technician, so nothing gets diagnosed twice.",
  },
  {
    label: "OEM support",
    description:
      "Manuals, service bulletins and known issues from every OEM in one approval-gated library, so guidance is never one brand's alone.",
  },
  {
    label: "Multi-brand fleet",
    description:
      "Mixed fleets are the norm, not the exception. FIELD models every make on site the same way, so technicians never switch tools between machines.",
  },
];

export const GapSection = () => {
  const [activeTile, setActiveTile] = useState<number | null>(null);

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
            {replacedIcons.map((item) => (
              <span
                key={item.icon}
                className="group relative flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-primaryTint text-primaryTintText transition-transform duration-300 hover:z-10 hover:scale-125"
              >
                <Icon name={item.icon} size={17} strokeWidth={1.7} />
                <span className="pointer-events-none absolute -top-9 left-1/2 origin-bottom -translate-x-1/2 scale-75 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  {item.label}
                </span>
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
        <div key={activeTile ?? "default"} className="flex flex-col gap-5 animate-fadeIn">
          {activeTile === null ? (
            defaultCopy.map((paragraph) => (
              <p key={paragraph} className="text-[17px] leading-[1.65] text-bodyGray">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-[17px] leading-[1.65] text-bodyGray">
              {gapTiles[activeTile].description}
            </p>
          )}
        </div>
        <div className="mt-2 grid grid-cols-2 items-stretch gap-3 min-[520px]:grid-cols-4">
          {gapTiles.map((tile, index) => (
            <button
              key={tile.label}
              type="button"
              onClick={() => setActiveTile((current) => (current === index ? null : index))}
              aria-pressed={activeTile === index}
              className={`box-border rounded-lg border p-4 text-left text-[15px] font-medium leading-[1.3] transition-colors duration-300 focus:outline-none ${
                activeTile === index
                  ? "border-primary bg-primary text-white"
                  : "border-borderGray bg-white text-ink hover:border-primary hover:bg-primary hover:text-white focus-visible:border-primary focus-visible:bg-primary focus-visible:text-white"
              }`}
            >
              {tile.label}
            </button>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
