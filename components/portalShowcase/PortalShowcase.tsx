import { Icon } from "@/components/icons/Icon";
import { PortalVisual } from "@/components/portalShowcase/PortalVisual";

const checklist = [
  "Assign, escalate and track faults across every site from one dashboard.",
  "Role-based access for managers, technicians and remote experts.",
  "Same knowledge base and audit trail the mobile app writes to.",
];

export const PortalShowcase = () => {
  return (
    <section className="relative overflow-hidden border-t border-borderGray bg-white px-6 py-16 min-[900px]:px-16 min-[900px]:py-[88px]">
      <div className="mx-auto grid max-w-[1300px] items-center gap-14 min-[900px]:grid-cols-[1.15fr_1fr] min-[900px]:gap-[72px]">
        <PortalVisual />
        <div className="flex flex-col gap-[18px]">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            The FIELD portal
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] min-[900px]:text-[36px]">
            Built for the field. Designed to scale.
          </h2>
          <p className="text-base leading-[1.6] text-bodyGray">
            One admin portal gives technical managers a live view of every
            open fault, every technician and every machine, the same system
            of record the field is using, not a separate export.
          </p>
          <div className="mt-1.5 flex flex-col gap-3">
            {checklist.map((item) => (
              <div key={item} className="flex gap-2.5">
                <Icon
                  name="check"
                  size={18}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span className="text-[15px] leading-[1.6] text-bodyGray">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#portal-login"
            className="mt-2 inline-flex h-12 w-fit items-center gap-2 rounded-lg bg-primary px-[22px] text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primaryHover"
          >
            See the portal
            <Icon name="arrow" size={18} strokeWidth={1.7} />
          </a>
        </div>
      </div>
    </section>
  );
};
