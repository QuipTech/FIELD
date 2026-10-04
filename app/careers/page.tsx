import type { Metadata } from "next";
import { Icon } from "@/components/icons/Icon";
import { PageShell } from "@/components/common/PageShell";

export const metadata: Metadata = {
  title: "Careers — QuipTech FIELD",
  description: "Open roles at QuipTech, the team building the FIELD platform.",
};

const perks = [
  { icon: "truck" as const, title: "Time in the field", description: "Every hire spends time on site with technicians before shipping features for them." },
  { icon: "history" as const, title: "Flexible hours", description: "We optimise for output, not desk time. Work when you're sharpest." },
  { icon: "life" as const, title: "Health cover", description: "Private health cover contribution for you and your family." },
  { icon: "spark" as const, title: "Learning budget", description: "Annual budget for courses, conferences and books." },
];

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (Australia) / Perth, WA",
  },
  {
    title: "AI/ML Engineer — Diagnostics",
    department: "Engineering",
    location: "Remote (Australia)",
  },
  {
    title: "Field Solutions Engineer",
    department: "Customer Success",
    location: "Perth, WA",
  },
  {
    title: "Account Executive — Mining & Resources",
    department: "Sales",
    location: "Perth, WA / Brisbane, QLD",
  },
  {
    title: "Technical Support Engineer",
    department: "Support",
    location: "Remote (Australia)",
  },
];

const CareersPage = () => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            Careers
          </span>
          <h1 className="max-w-[22ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            Help us build the system technicians actually want
          </h1>
          <p className="max-w-[60ch] text-base leading-[1.6] text-bodyGray">
            We&rsquo;re a small, remote-friendly team based in Australia, building software for
            people who work with their hands on critical assets.
          </p>
        </div>
      </section>

      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] gap-5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col gap-2.5 rounded-2xl border border-borderGray p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText">
                <Icon name={perk.icon} size={20} strokeWidth={1.7} />
              </span>
              <h3 className="text-[15px] font-semibold text-ink">{perk.title}</h3>
              <p className="text-sm leading-[1.55] text-bodyGray">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
          <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink min-[900px]:text-[28px]">
            Open roles
          </h2>
          <div className="flex flex-col divide-y divide-borderGray overflow-hidden rounded-2xl border border-borderGray">
            {openRoles.map((role) => (
              <a
                key={role.title}
                href={`mailto:careers@quiptechfield.com?subject=${encodeURIComponent(
                  `Application: ${role.title}`,
                )}`}
                className="group flex flex-col gap-2 p-5 transition-colors hover:bg-surfaceGray min-[600px]:flex-row min-[600px]:items-center min-[600px]:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[15px] font-semibold text-ink">{role.title}</span>
                  <span className="text-[13px] text-bodyGray">
                    {role.department} · {role.location}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                  Apply
                  <Icon name="arrow" size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
          <p className="text-[13px] text-mutedGray">
            Don&rsquo;t see a fit? Send a general application to{" "}
            <a href="mailto:careers@quiptechfield.com" className="text-primary hover:text-primaryHover">
              careers@quiptechfield.com
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default CareersPage;
