import { Icon } from "@/components/icons/Icon";

export const VisionPhoneMock = () => {
  return (
    <div
      className="flex justify-center [transform:scale(0.72)] min-[900px]:[transform:none]"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative flex h-[400px] w-[260px] flex-col overflow-hidden rounded-3xl border border-darkBorderAlt bg-darkCard shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
        style={{ transform: "rotateY(-16deg) rotateX(4deg)" }}
      >
        <div className="flex items-center gap-2 border-b border-darkBorder px-[18px] py-3.5">
          <Icon name="camera" size={16} strokeWidth={1.7} className="text-accentOnDark" />
          <span className="text-[13px] text-darkText">FIELD Vision</span>
          <span className="ml-auto text-[11px] font-semibold text-primary">LIVE</span>
        </div>
        <div className="relative m-[18px] flex-1 overflow-hidden rounded-xl border border-dashed border-darkBorderAlt">
          <div className="absolute left-0 right-0 h-0.5 animate-scanLine bg-[linear-gradient(90deg,rgba(74,52,199,0),#8D7DE0,rgba(74,52,199,0))]" />
          <div className="absolute left-[34px] top-11 h-16 w-24 rounded-md border-[1.5px] border-accentOnDark" />
          <div className="absolute left-[34px] top-[112px] rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-medium text-white">
            CAT 793F · 96%
          </div>
        </div>
        <div className="flex flex-col gap-2 px-[18px] pb-[18px]">
          <div className="rounded-lg bg-darkPanel px-3 py-2.5 text-[13px] text-darkTextLight">
            Connector on the aftercooler sensor is unseated.
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-md bg-darkPanelAlt px-2 py-0.5 text-[11px] text-accentOnDark">
              SB-4412
            </span>
            <span className="rounded-md bg-darkPanelAlt px-2 py-0.5 text-[11px] text-accentOnDark">
              Precedent · HT-2188
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
