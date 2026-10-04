import type { Metadata } from "next";
import { Icon } from "@/components/icons/Icon";
import { PageShell } from "@/components/common/PageShell";

export const metadata: Metadata = {
  title: "About — QuipTech FIELD",
  description: "Why QuipTech built FIELD, and what we believe about supporting critical assets.",
};

const values = [
  {
    icon: "book" as const,
    title: "Sourced, not guessed",
    description:
      "Every answer FIELD gives cites the manual, bulletin or record it came from. If there's no source, there's no answer.",
  },
  {
    icon: "truck" as const,
    title: "Built for the field, not the office",
    description:
      "Glove-friendly, offline-tolerant, and designed for a technician standing at a stopped machine, not a desk.",
  },
  {
    icon: "diff" as const,
    title: "Multi-brand by default",
    description:
      "Mixed fleets are the norm on real sites. One workflow should work across every OEM, not just one.",
  },
  {
    icon: "shield" as const,
    title: "Security is table stakes",
    description:
      "Multi-tenant isolation, role-scoped access and full audit trails aren't add-ons — they're how FIELD is built from day one.",
  },
];

const AboutPage = () => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            About QuipTech
          </span>
          <h1 className="max-w-[22ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            Built by people who&rsquo;ve stood at a stopped machine
          </h1>
          <p className="max-w-[64ch] text-base leading-[1.6] text-bodyGray">
            QuipTech builds technical intelligence software for operations running critical
            assets — mine sites, plants and fleets where downtime is expensive and the right
            answer has to be right. FIELD is our flagship platform, built in Australia.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
          <div className="flex max-w-[64ch] flex-col gap-4">
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] min-[900px]:text-[32px]">
              Why we built FIELD
            </h2>
            <p className="text-base leading-[1.6] text-bodyGray">
              Every tool on a site solves one part of the problem: remote support puts an
              expert on a call who knows nothing about the asset in front of the camera; AI
              assistants answer from documents with no service record behind them; knowledge
              bases hold manuals but can&rsquo;t reason across them. A technician standing at a
              stopped machine needs all of it at once — a sourced answer, that machine&rsquo;s
              history, the OEM&rsquo;s guidance, and a live expert when the answer isn&rsquo;t
              written down anywhere. FIELD is that system.
            </p>
          </div>

          <div className="grid gap-5 min-[600px]:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 rounded-2xl border border-borderGray p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText">
                  <Icon name={value.icon} size={20} strokeWidth={1.7} />
                </span>
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink">
                  {value.title}
                </h3>
                <p className="text-sm leading-[1.6] text-bodyGray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-borderGray bg-surfaceGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-5 min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
              Want to build this with us?
            </h2>
            <p className="max-w-[52ch] text-sm leading-[1.6] text-bodyGray">
              We&rsquo;re a small team solving a real problem for people who work with their
              hands. Take a look at open roles.
            </p>
          </div>
          <a
            href="/careers"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-primaryHover"
          >
            See open roles
            <Icon name="arrow" size={18} strokeWidth={1.7} />
          </a>
        </div>
      </section>
    </PageShell>
  );
};

export default AboutPage;
