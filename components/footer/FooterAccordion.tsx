import type { FooterColumn } from "@/lib/footerColumns";

export const FooterAccordion = ({ title, links }: FooterColumn) => {
  return (
    <details className="group flex flex-col gap-3 border-b border-borderGray min-[901px]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-bodyGray">
        {title}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          className="transition-transform group-open:rotate-180"
          style={{
            fill: "none",
            stroke: "#585C64",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="flex flex-col gap-3 pb-3.5">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="text-sm text-bodyGray">
            {link.label}
          </a>
        ))}
      </div>
    </details>
  );
};
