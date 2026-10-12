"use client";

import { useState } from "react";
import { faqCategories } from "@/lib/faqItems";
import { FaqItem } from "@/components/faq/FaqItem";

export const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = faqCategories[activeCategory];

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
      </div>
      <div className="mx-auto flex max-w-[850px] flex-col gap-6">
        <div className="flex flex-wrap justify-center gap-2" aria-label="FAQ categories">
          {faqCategories.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={activeCategory === index}
              aria-controls="faq-questions"
              onClick={() => setActiveCategory(index)}
              className={`rounded-full border px-4 py-2.5 text-[14px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                activeCategory === index
                  ? "border-primary bg-primary text-white"
                  : "border-borderGray bg-white text-bodyGray hover:border-primary hover:text-primary"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div id="faq-questions" className="overflow-hidden rounded-xl border border-borderGray bg-white">
          <h3 className="sr-only">{category.title}</h3>
          {category.items.map((item) => (
            <FaqItem key={`${category.title}-${item.question}`} {...item} />
          ))}
        </div>
        <p className="text-center text-[15px] text-bodyGray">
          Something not covered here?{" "}
          <a href="https://www.quiptechfield.com.au/contact" className="text-primary hover:text-primaryHover">
            Ask a support engineer
          </a>
          .
        </p>
      </div>
    </section>
  );
};
