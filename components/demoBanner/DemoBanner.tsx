import { Icon } from "@/components/icons/Icon";

export const DemoBanner = () => {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-primary px-6 py-16 text-white min-[900px]:px-16 min-[900px]:py-20"
    >
      <div className="pointer-events-none absolute -top-20 left-[38%] h-[280px] w-[280px] animate-drift rounded-full border border-white/[0.22]" />
      <div className="pointer-events-none absolute -bottom-[90px] right-[60px] h-[200px] w-[200px] animate-driftB rounded-[32px] bg-white/[0.07]" />
      <div className="relative mx-auto grid w-full max-w-[1440px] items-end gap-8 min-[900px]:grid-cols-[1.4fr_1fr] min-[900px]:gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[22ch] text-[32px] font-semibold leading-[1.03] tracking-[-0.03em] text-white min-[900px]:text-[50px]">
            See FIELD against your own fleet
          </h2>
          <p className="max-w-[46ch] text-lg leading-[1.5] text-white/90">
            A working session with your machine list, your manuals and your
            service records, not a generic demo environment.
          </p>
        </div>
        <a
          href="#demo"
          className="inline-flex h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5"
        >
          Request a demo
          <Icon name="arrow" size={18} strokeWidth={1.8} />
        </a>
      </div>
    </section>
  );
};
