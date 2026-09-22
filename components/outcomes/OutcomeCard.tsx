"use client";

import type { OutcomeStat } from "@/lib/outcomeStats";
import { useCountUp } from "@/components/outcomes/useCountUp";

export const OutcomeCard = ({ count, suffix, decimals, title, subtitle }: OutcomeStat) => {
  const { ref, display } = useCountUp(count, suffix, decimals);

  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-borderGray bg-white p-[18px] shadow-[0_1px_2px_rgba(30,32,36,0.04)] min-[900px]:gap-2.5 min-[900px]:px-6 min-[900px]:py-7">
      <span className="h-[3px] w-9 rounded-sm bg-primary" />
      <span
        ref={ref}
        className="bg-gradient-to-br from-primary to-[#8D7DE0] bg-clip-text text-[26px] font-semibold leading-none tracking-[-0.03em] text-transparent min-[900px]:text-[42px]"
      >
        {display}
      </span>
      <span className="text-sm font-semibold leading-[1.3] text-ink min-[900px]:text-[15px]">
        {title}
      </span>
      <span className="text-[11.5px] leading-[1.35] text-mutedGray min-[900px]:text-[13px]">
        {subtitle}
      </span>
    </div>
  );
};
