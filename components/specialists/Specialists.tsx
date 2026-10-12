import { Icon, type IconName } from "@/components/icons/Icon";

const specialists: { title: string; description: string; brands?: string; icon: IconName }[] = [
  { title: "Machine control & guidance", icon: "diff", description: "2D and 3D grade control on excavators, dozers, graders, compactors and pavers: install, calibration, design files and troubleshooting.", brands: "Systems we work across: Trimble, Topcon, Leica, Hemisphere, MOBA, Unicontrol, CHCNAV, Stonex, Makin." },
  { title: "GNSS & survey", icon: "spark", description: "Base stations, rovers, RTK corrections, total stations and site calibrations, plus the data prep that gets a design from the office to the cab.", brands: "Systems we work across: Trimble, Topcon, Leica, CHCNAV, Stonex, Hemisphere." },
  { title: "OEM machine integration", icon: "truck", description: "Factory-fitted and aftermarket systems on the major earthmoving and mining brands: machine-specific setup, sensor and hydraulic interfaces, firmware and fault codes.", brands: "Machines we work across: CAT, Komatsu, Hitachi, SANY, XCMG, Volvo, Liebherr, John Deere, CASE and more." },
  { title: "Field service & diagnostics", icon: "video", description: "The remote expert behind the session. Fault finding on mixed fleets, live over video and smart glasses, with the machine's history already on screen." },
  { title: "Knowledge & documentation", icon: "book", description: "Turns your manuals, bulletins and resolved jobs into an approved, searchable library, and keeps it current as models, firmware and procedures change." },
];

export const Specialists = () => (
  <section id="specialists" aria-labelledby="specialists-heading" className="border-t border-borderGray bg-white px-6 py-16 min-[900px]:px-16 min-[900px]:py-20">
    <div className="mx-auto grid max-w-[1440px] gap-10 min-[900px]:grid-cols-[0.8fr_1.4fr] min-[900px]:gap-16">
      <div className="flex flex-col items-start gap-4">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">Technical specialists</span>
        <h2 id="specialists-heading" className="max-w-[20ch] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">People who&apos;ve stood at the machine</h2>
        <p className="max-w-[55ch] text-base leading-[1.65] text-bodyGray">FIELD is built and supported by specialists from machine technology, survey OEMs and heavy-equipment service. When an answer isn&apos;t in the manual, the expert on the other end of the session knows the gear, the brands and the site.</p>
        <p className="mt-2 max-w-[32ch] border-l-2 border-primary pl-4 text-[17px] font-medium leading-[1.6]">Mixed fleet? That&apos;s the normal case. One team, every brand on site.</p>
        <a href="/contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-primaryBorder bg-primarySoft px-5 py-3 text-[14px] font-semibold text-primary transition-colors hover:bg-primaryTint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Talk to a specialist<Icon name="arrow" size={17} /></a>
      </div>
      <div className="grid items-start gap-4 min-[600px]:grid-cols-2">
        {specialists.map((specialist, index) => (
          <article key={specialist.title} className={`rounded-xl border border-borderGray bg-surfaceGrayAlt p-5 min-[900px]:p-6 ${index === 2 ? "min-[600px]:col-span-2" : ""}`}>
            <div className="mb-3 flex items-center gap-3"><Icon name={specialist.icon} size={21} className="shrink-0 text-primary" /><h3 className="text-[16px] font-semibold">{specialist.title}</h3></div>
            <p className="text-[14px] leading-[1.65] text-bodyGray">{specialist.description}</p>
            {specialist.brands && <p className="mt-4 border-t border-borderGray pt-3 text-[12px] leading-[1.7] text-bodyGray">{specialist.brands}</p>}
          </article>
        ))}
      </div>
    </div>
  </section>
);
