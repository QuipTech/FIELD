import { faqItems } from "@/lib/faqItems";
import { FaqItem } from "@/components/faq/FaqItem";

export const Faq = () => {
  return (
    <section
      id="faq"
      className="border-t border-borderGray bg-surfaceGray px-6 py-16 min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="mx-auto mb-10 flex max-w-[60ch] flex-col gap-3.5 text-center">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
          Common questions
        </span>
        <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
          What technical managers ask first
        </h2>
        <p className="text-[15px] text-bodyGray">
          Something not covered here?{" "}
          <a href="#demo" className="text-primary hover:text-primaryHover">
            Ask a support engineer
          </a>
          .
        </p>
      </div>
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 min-[521px]:grid-cols-2">
        {faqItems.map((item) => (
          <FaqItem key={item.question} {...item} />
        ))}
      </div>
    </section>
  );
};
