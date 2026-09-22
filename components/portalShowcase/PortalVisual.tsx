import Image from "next/image";
import {
  portalFaults,
  priorityClasses,
  statusClasses,
} from "@/lib/portalFaults";

const sidebarLinks = [
  "Machines",
  "Knowledge centre",
  "Technicians",
  "Audit log",
];

export const PortalVisual = () => {
  return (
    <div className="relative pb-6 pl-2 pt-4">
      <div className="flex overflow-hidden rounded-2xl border border-borderGray bg-white shadow-[0_24px_60px_rgba(30,32,36,0.10)]">
        <div className="hidden w-[180px] shrink-0 flex-col gap-1 bg-dark p-3.5 min-[900px]:flex">
          <div className="mb-4 flex items-center gap-2 px-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-[11px] font-semibold text-white">
              Q
            </span>
            <span className="text-[13px] font-semibold text-white">
              FIELD Portal
            </span>
          </div>
          <span className="rounded-lg bg-white/[0.08] px-2.5 py-2 text-[13px] font-medium text-white">
            Dashboard
          </span>
          {sidebarLinks.map((link) => (
            <span
              key={link}
              className="rounded-lg px-2.5 py-2 text-[13px] text-darkText"
            >
              {link}
            </span>
          ))}
        </div>
        <div className="min-w-0 flex-1 px-[18px] pb-[26px] pt-[22px]">
          <span className="text-base font-semibold text-ink">Open faults</span>
          <div className="mt-3.5 flex flex-col gap-px overflow-hidden rounded-[10px] border border-borderGray">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-2.5 bg-surfaceGray px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-mutedGray">
              <span>Asset</span>
              <span>Priority</span>
              <span>Status</span>
            </div>
            {portalFaults.map((fault) => (
              <div
                key={fault.asset}
                className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2.5 bg-white px-3.5 py-2.5 text-[13px] text-navText"
              >
                <span>{fault.asset}</span>
                <span
                  className={`font-medium ${priorityClasses[fault.priority]}`}
                >
                  {fault.priority}
                </span>
                <span
                  className={`inline-flex w-fit rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                    statusClasses[fault.status]
                  }`}
                >
                  {fault.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-6 -top-7 h-32 w-32 animate-floatY overflow-hidden rounded-2xl border-[3px] border-white shadow-[0_14px_34px_rgba(30,32,36,0.18)]">
        <Image
          src="/images/portalshowcase/image-slot-4.svg"
          alt="Technician headshot"
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute -bottom-[30px] -left-5 h-28 w-28 animate-floatY overflow-hidden rounded-2xl border-[3px] border-white shadow-[0_14px_34px_rgba(30,32,36,0.18)]"
        style={{ animationDelay: "-3s" }}
      >
        <Image
          src="/images/portalshowcase/overlay.svg"
          alt="Technician headshot"
          width={112}
          height={112}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute bottom-[-34px] right-9 z-[2] flex max-w-[190px] animate-floatY flex-col gap-1 rounded-xl border border-borderGray bg-white p-3.5 shadow-[0_16px_40px_rgba(30,32,36,0.14)]"
        style={{ animationDelay: "-1.5s" }}
      >
        <span className="text-[11px] font-semibold text-mutedGray">
          FIELD Assistant
        </span>
        <span className="text-[13px] text-navText">
          How can I help with HT-2201?
        </span>
      </div>
    </div>
  );
};
