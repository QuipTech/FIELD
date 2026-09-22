import { Icon } from "@/components/icons/Icon";
import type { Capability } from "@/lib/capabilities";

export const CapabilityCard = ({ icon, title, description }: Capability) => {
  return (
    <div
      tabIndex={0}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-borderGray bg-white p-[26px] focus:outline-none focus-visible:border-primary"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText transition-colors duration-500 group-hover:bg-white/[0.16] group-hover:text-white group-focus-visible:bg-white/[0.16] group-focus-visible:text-white">
        <Icon name={icon} size={22} strokeWidth={1.6} />
      </span>
      <h3 className="relative text-xl font-semibold tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
        {title}
      </h3>
      <p className="relative text-[15px] leading-[1.6] text-bodyGray transition-colors duration-500 group-hover:text-white/[0.88] group-focus-visible:text-white/[0.88]">
        {description}
      </p>
    </div>
  );
};
