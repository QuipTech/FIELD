import { Icon } from "@/components/icons/Icon";

const floatingIcons: Array<{
  icon: "file" | "camera" | "video";
  position: string;
  delay: string;
}> = [
  { icon: "file", position: "left-8 top-8", delay: "0s" },
  { icon: "camera", position: "bottom-14 left-11", delay: "-2s" },
  { icon: "video", position: "right-9 top-15", delay: "-4s" },
];

export const CaptureVisual = () => {
  return (
    <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[#8D7DE0] p-8 min-[900px]:min-h-[420px] min-[900px]:p-10">
      {floatingIcons.map(({ icon, position, delay }) => (
        <div
          key={icon}
          className={`absolute ${position} flex h-[52px] w-[52px] animate-floatY items-center justify-center rounded-xl bg-white/[0.16]`}
          style={{ animationDelay: delay }}
        >
          <Icon name={icon} size={24} strokeWidth={1.6} className="text-white" />
        </div>
      ))}

      <div
        className="relative w-[250px] animate-floatY overflow-hidden rounded-[22px] border border-white/25 bg-darkCard shadow-[0_30px_70px_rgba(20,10,60,0.4)]"
        style={{ animationDelay: "-1s" }}
      >
        <div className="flex items-center gap-2 border-b border-darkBorder px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-statusRed" />
          <span className="text-[11px] text-darkText">Auto-captured just now</span>
        </div>
        <div className="flex flex-col gap-2.5 p-4">
          <span className="text-sm font-semibold leading-tight text-white">
            How to reseat the aftercooler sensor connector
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-md bg-darkPanelAlt px-2 py-0.5 text-[10px] text-accentOnDark">
              CAT 793F
            </span>
            <span className="rounded-md bg-darkPanelAlt px-2 py-0.5 text-[10px] text-accentOnDark">
              3 steps
            </span>
          </div>
          <div className="flex flex-col gap-px overflow-hidden rounded-lg bg-darkBorder">
            {[
              "1. Power down and isolate",
              "2. Reseat the connector",
              "3. Confirm sensor reading",
            ].map((step) => (
              <div key={step} className="bg-darkPanel px-2.5 py-2 text-xs text-[#C7C9CF]">
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-5 right-6 rounded-full bg-white/[0.16] px-3 py-1 text-xs font-semibold text-white">
        FIELD Capture™
      </span>
    </div>
  );
};
