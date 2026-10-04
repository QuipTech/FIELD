import type { Metadata } from "next";
import { Icon } from "@/components/icons/Icon";
import { PageShell } from "@/components/common/PageShell";
import { DemoRequestForm } from "@/components/demoRequest/DemoRequestForm";
import { ProductSpecialists } from "@/components/demoRequest/ProductSpecialists";
import { trustedLogos } from "@/lib/trustedLogos";

export const metadata: Metadata = {
  title: "Request a Demo — QuipTech FIELD",
  description: "See FIELD against your own fleet in a live 30-minute walkthrough with a solutions engineer.",
};

const highlights = [
  "A live 30-minute walkthrough with a solutions engineer",
  "Tailored to your fleet, sites and machine brands",
  "No commitment required",
];

const DemoPage = () => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] items-start gap-12 min-[900px]:grid-cols-[1fr_1.05fr] min-[900px]:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
              Request a demo
            </span>
            <h1 className="max-w-[16ch] text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink min-[900px]:text-[50px]">
              See FIELD against your own fleet
            </h1>
            <p className="max-w-[46ch] text-base leading-[1.6] text-bodyGray">
              A working session with your machine list, your manuals and your service
              records, not a generic demo environment.
            </p>
            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-bodyGray">
                  <Icon
                    name="check"
                    size={18}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-4 border-t border-borderGray pt-6">
              <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-mutedGray">
                Trusted by teams running critical fleets
              </span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {trustedLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className="flex items-center gap-2 whitespace-nowrap text-base font-bold text-marqueeGray"
                  >
                    {logo.icon && <Icon name={logo.icon} size={16} strokeWidth={2} />}
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <DemoRequestForm />
        </div>
      </section>

      <ProductSpecialists />
    </PageShell>
  );
};

export default DemoPage;
