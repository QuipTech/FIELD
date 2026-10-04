import type { ReactNode } from "react";
import { PageShell } from "@/components/common/PageShell";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const LegalLayout = ({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalLayoutProps) => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
          <div className="flex max-w-[70ch] flex-col gap-4">
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
              {eyebrow}
            </span>
            <h1 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
              {title}
            </h1>
            <p className="text-base leading-[1.6] text-bodyGray">{intro}</p>
            <span className="text-[13px] text-mutedGray">Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
          <div className="flex max-w-[70ch] flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink min-[900px]:text-2xl">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3 text-[15px] leading-[1.7] text-bodyGray">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};
