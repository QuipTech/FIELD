import { Icon } from "@/components/icons/Icon";
import { builtTiles } from "@/lib/builtTiles";

export const BuiltForAssets = () => {
  return (
    <section className="border-t border-borderGray px-6 py-16 min-[900px]:px-16 min-[900px]:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 min-[900px]:grid-cols-[1fr_1.05fr] min-[900px]:gap-16">
      <div className="flex flex-col gap-4">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
          Built for critical assets
        </span>
        <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
          Engineered for mine sites, not offices
        </h2>
        <p className="text-[17px] leading-[1.65] text-bodyGray">
          FIELD is multi-tenant by design, with strict data separation between
          operations, role-scoped permissions for technicians, managers and
          remote experts, and a full audit trail over every question asked,
          document approved and answer given.
        </p>
        <p className="border-t border-borderGray pt-4 text-[15px] text-bodyGray">
          <span className="font-semibold text-ink">Who it&apos;s for: </span>
          field technicians, technical managers, dealer and distributor
          technicians, and remote experts.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 self-center">
        {builtTiles.map((tile) => (
          <div
            key={tile.title}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 p-6"
          >
            <div className="pointer-events-none absolute inset-0 origin-right scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            <div className="relative z-10 flex flex-col gap-2">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText transition-colors duration-500 group-hover:bg-white/[0.16] group-hover:text-white group-focus-visible:bg-white/[0.16] group-focus-visible:text-white">
                <Icon
                  name={tile.icon}
                  size={20}
                  strokeWidth={1.7}
                  className="text-primary"
                />
              </span>
              <h3 className="relative text-[17px] font-semibold tracking-[-0.01em] text-ink transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                {tile.title}
              </h3>
              <p className="relative text-sm leading-[1.6] text-bodyGray transition-colors duration-500 group-hover:text-white/[0.88] group-focus-visible:text-white/[0.88]">
                {tile.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
