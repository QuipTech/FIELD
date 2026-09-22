import { Icon } from "@/components/icons/Icon";
import { pricingTiers, pricingAddOns } from "@/lib/pricingTiers";
import { PricingCard } from "@/components/pricing/PricingCard";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-borderGray bg-white px-6 py-16 min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 flex max-w-[60ch] flex-col gap-3.5">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            Pricing
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
            Priced against your fleet, not your headcount
          </h2>
          <p className="max-w-[56ch] text-base leading-[1.6] text-bodyGray">
            Standard billing is per asset under management, invoiced monthly,
            the same account most current clients already use. Enterprise is
            annual and negotiated per deal. List prices are still being set
            from live pilot data, contact us for current rates.
          </p>
        </div>
        <div className="grid gap-5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3.5 border-t border-borderGray pt-6">
          {pricingAddOns.map((addOn) => (
            <span
              key={addOn.label}
              className="inline-flex items-center gap-2 rounded-full bg-surfaceGray px-3.5 py-2 text-[13px] text-bodyGray"
            >
              <Icon name={addOn.icon} size={15} strokeWidth={1.8} className="text-primary" />
              {addOn.label}
            </span>
          ))}
        </div>
        <p className="mt-4 text-[13px] text-mutedGray">
          All prices ex-GST. Australian B2B convention, Stripe Tax applies 10%.
        </p>
      </div>
    </section>
  );
};
