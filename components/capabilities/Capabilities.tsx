import { capabilities } from "@/lib/capabilities";
import { CapabilityCard } from "@/components/capabilities/CapabilityCard";

export const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-t border-borderGray bg-surfaceGray px-6 py-16 min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="pointer-events-none absolute -right-[70px] top-10 h-[220px] w-[220px] animate-drift rounded-full border border-primaryBorder" />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="mb-10 flex max-w-[52ch] flex-col gap-3.5">
          <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">
            Six capabilities, one system of record
          </h2>
        </div>
        <div className="grid gap-5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
};
