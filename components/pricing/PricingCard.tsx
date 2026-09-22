import type { PricingTier } from "@/lib/pricingTiers";

export const PricingCard = ({ name, price, description, ctaLabel, highlighted }: PricingTier) => {
  if (highlighted) {
    return (
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-primary p-6 transition-all duration-300">
        <div className="pointer-events-none absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        <div className="relative z-10 flex flex-col gap-2.5">
          <span className="text-[13px] font-semibold uppercase tracking-[0.04em] text-primary transition-colors duration-300 group-hover:text-blue-100">
            {name}
          </span>
          <span className="text-[26px] font-semibold tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-white">
            {price}
          </span>
          <p className="flex-1 text-sm leading-[1.55] text-bodyGray transition-colors duration-300 group-hover:text-blue-100/90">
            {description}
          </p>
          <a
            href="#demo"
            className="text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-white"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 p-6 transition-all duration-300">
      <div className="pointer-events-none absolute inset-0 translate-x-full bg-primary transition-transform duration-300 ease-out group-hover:translate-x-0" />
      <div className="relative z-10 flex flex-col gap-2.5 transition-colors duration-300">
        <span className="text-[13px] font-semibold uppercase tracking-[0.04em] text-mutedGray group-hover:text-blue-100">
          {name}
        </span>
        <span className="text-[26px] font-semibold tracking-[-0.02em] text-ink group-hover:text-white">
          {price}
        </span>
        <p className="flex-1 text-sm leading-[1.55] text-bodyGray group-hover:text-blue-100/90">
          {description}
        </p>
        <a href="#demo" className="text-sm font-semibold text-primary group-hover:text-white">
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};
