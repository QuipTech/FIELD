import { Icon } from "@/components/icons/Icon";

export const SupportFab = () => {
  return (
    <div className="fixed bottom-7 right-7 z-40 flex flex-row-reverse items-center gap-2.5">
      <div className="relative h-14 w-14">
        <span className="fab-ring absolute -inset-1.5 animate-fabRing rounded-full border-[1.5px] border-primary/45" />
        <a
          href="#demo"
          aria-label="Talk to support"
          className="fab relative flex h-14 w-14 animate-fabFloat items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(74,52,199,0.3)] transition-transform hover:scale-105 hover:-translate-y-0.5"
        >
          <Icon name="life" size={26} strokeWidth={1.6} />
        </a>
      </div>
      <span className="fabtip translate-x-2 rounded-lg bg-ink px-3 py-2 text-[13px] text-white opacity-0 shadow-[0_6px_18px_rgba(30,32,36,0.18)] transition-all">
        Talk to a support engineer
      </span>
    </div>
  );
};
