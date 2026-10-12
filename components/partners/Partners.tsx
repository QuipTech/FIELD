import { Icon, type IconName } from "@/components/icons/Icon";

const partnerTypes: { title: string; description: string; icon: IconName }[] = [
  { title: "OEM & dealer partners", icon: "truck", description: "Offer FIELD under your brand to the fleets you already service. Your manuals, bulletins and service history, your logo, your support line. Customers see one supplier: you." },
  { title: "Resellers & integrators", icon: "diff", description: "For machine control, GNSS, fleet management, Comms and survey resellers. Bundle FIELD with hardware installs and support contracts, and give your customers' operators and technicians answers between site visits and make it more efficient to partner with your brand." },
  { title: "Service & maintenance contractors", icon: "users", description: "Run FIELD across every client site you maintain. Each client's data stays separate; your technicians work from one app and one knowledge base of your own procedures." },
  { title: "Founding pilot partners", icon: "spark", description: "A small number of sites will shape the product before general release. Fixed-fee pilot, one site, 10 to 20 assets, direct access to the product team." },
];

const benefits = [
  "White-label branding: your name, logo and colours on the app and portal",
  "A partner console to set up and manage customer sites",
  "Partner-level billing: invoice your customers directly, or have us bill them on your behalf",
  "Strict separation between each customer's data, and between your OEM document licences and theirs",
  "Sales and technical onboarding, demo tenant access, and co-branded collateral",
  "A say in the roadmap",
];

const steps = [
  { title: "Talk to us", description: "A 30-minute call about your fleet, your customers and how you support them today." },
  { title: "See it on your gear", description: "We set up a demo tenant with your machine list and a sample of your documentation." },
  { title: "Go to market", description: "Agree terms, brand your instance, and onboard your first customer site." },
];

export const Partners = () => (
  <section id="partners" aria-labelledby="partners-heading" className="scroll-mt-28 border-t border-borderGray bg-primarySoft px-6 py-16 min-[900px]:scroll-mt-32 min-[900px]:px-16 min-[900px]:py-20">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-9 flex max-w-[75ch] flex-col gap-3.5">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">Partners &amp; dealers</span>
        <h2 id="partners-heading" className="max-w-[26ch] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[38px]">Put FIELD in front of every machine you sell and support</h2>
        <p className="text-base leading-[1.65] text-bodyGray">FIELD was built to be resold. Dealers, OEMs and specialist integrators can offer it under their own brand, manage their customers&apos; sites from one partner console, and keep the service relationship where it belongs: with them.</p>
      </div>
      <div className="grid gap-4 min-[600px]:grid-cols-2 min-[1200px]:grid-cols-4">
        {partnerTypes.map((partner) => (
          <article key={partner.title} className="rounded-2xl border border-primaryBorder bg-white p-6">
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primary"><Icon name={partner.icon} size={21} /></span>
            <h3 className="mb-2 text-[17px] font-semibold leading-snug">{partner.title}</h3>
            <p className="text-[14px] leading-[1.7] text-bodyGray">{partner.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-8 rounded-2xl border border-primaryBorder bg-white p-6 min-[900px]:grid-cols-[1.15fr_1fr] min-[900px]:gap-12 min-[900px]:p-8">
        <div>
          <h3 className="mb-5 text-xl font-semibold tracking-[-0.01em]">What partners get</h3>
          <ul className="grid gap-4 min-[600px]:grid-cols-2 min-[900px]:grid-cols-1 min-[1200px]:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-bodyGray">
                <Icon name="check" size={18} className="mt-0.5 shrink-0 text-primary" />{benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-borderGray pt-6 min-[900px]:border-l min-[900px]:border-t-0 min-[900px]:pl-10 min-[900px]:pt-0">
          <h3 className="mb-5 text-xl font-semibold tracking-[-0.01em]">How it works</h3>
          <ol className="space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-3.5">
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primaryTint text-[12px] font-semibold text-primary">{index + 1}</span>
                <div><h4 className="text-[15px] font-semibold">{step.title}</h4><p className="mt-1 text-[14px] leading-[1.6] text-bodyGray">{step.description}</p></div>
              </li>
            ))}
          </ol>
          <a href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Contact<Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </div>
  </section>
);
