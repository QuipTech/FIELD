import type { FaqItem as FaqItemType } from "@/lib/faqItems";

export const FaqItem = ({ question, answer }: FaqItemType) => {
  return (
    <details className="group border-b border-borderGray last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-semibold transition-colors hover:bg-surfaceGray focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary min-[900px]:px-6 min-[900px]:text-[16px] [&::-webkit-details-marker]:hidden">
        {question}
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </summary>
      <p className="px-5 pb-5 pr-12 text-[14px] leading-[1.7] text-bodyGray min-[900px]:px-6 min-[900px]:pr-14 min-[900px]:text-[15px]">
        {answer}
      </p>
    </details>
  );
};
