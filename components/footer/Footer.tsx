import { Icon } from "@/components/icons/Icon";
import { footerColumns, footerLegalLinks } from "@/lib/footerColumns";
import { FooterAccordion } from "@/components/footer/FooterAccordion";

export const Footer = () => {
  return (
    <footer className="border-t border-borderGray bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-5 px-5 pb-7 pt-10 min-[900px]:grid-cols-[1.4fr_1fr_1fr_1fr] min-[900px]:gap-10 min-[900px]:px-16 min-[900px]:pb-10 min-[900px]:pt-14">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-primary text-[13px] font-semibold text-white">
              Q
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.01em]">QuipTech FIELD</span>
          </div>
          <p className="max-w-[34ch] text-sm leading-[1.6] text-bodyGray">
            AI technical intelligence for critical assets, sourced answers,
            complete machine history and live expert support in one system
            of record.
          </p>
          <a
            href="#demo"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white"
          >
            Request a demo
            <Icon name="arrow" size={16} strokeWidth={1.8} />
          </a>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="hidden flex-col gap-3 min-[901px]:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-bodyGray">
              {column.title}
            </span>
            {column.links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-bodyGray">
                {link.label}
              </a>
            ))}
          </div>
        ))}
        <div className="flex flex-col min-[901px]:hidden">
          {footerColumns.map((column) => (
            <FooterAccordion key={column.title} {...column} />
          ))}
        </div>
      </div>
      <div className="border-t border-borderGray">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-3 px-5 py-4 min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-6 min-[900px]:px-16 min-[900px]:py-5">
          <span className="text-[13px] text-bodyGray">
            © 2026 QuipTech Pty Ltd. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-5 text-[13px]">
            {footerLegalLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-bodyGray">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 min-[900px]:ml-auto">
            <span className="flex items-center gap-1.5 text-[13px] text-bodyGray">
              <Icon name="shield" size={15} strokeWidth={1.8} className="text-primary" />
              SOC 2 Type II
            </span>
            <span className="text-[13px] text-bodyGray">Built in Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
