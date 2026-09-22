import { Icon } from "@/components/icons/Icon";
import type { FaqItem as FaqItemType } from "@/lib/faqItems";

export const FaqItem = ({ icon, question, answer, wide }: FaqItemType) => {
  return (
    <div
      className={`flex flex-col gap-3 rounded-xl border border-borderGray bg-white p-[18px] transition-all hover:-translate-y-1 hover:border-[#CDD1D6] hover:shadow-[0_12px_32px_rgba(30,32,36,0.10)] min-[900px]:p-[26px] ${
        wide ? "min-[521px]:col-span-2" : ""
      }`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText min-[900px]:h-[38px] min-[900px]:w-[38px]">
        <Icon name={icon} size={20} strokeWidth={1.6} />
      </span>
      <span className="text-[15px] font-semibold min-[900px]:text-[17px]">{question}</span>
      <span className="text-[13.5px] leading-[1.6] text-bodyGray min-[900px]:text-[15px]">
        {answer}
      </span>
    </div>
  );
};
