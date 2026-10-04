import type { Metadata } from "next";
import { Icon } from "@/components/icons/Icon";
import { PageShell } from "@/components/common/PageShell";

export const metadata: Metadata = {
  title: "Documentation — QuipTech FIELD",
  description: "What will live in the QuipTech FIELD documentation.",
};

const docSections = [
  {
    icon: "spark" as const,
    title: "Getting started",
    description: "Account setup, inviting your team, and connecting your first machines.",
  },
  {
    icon: "users" as const,
    title: "Admin portal guide",
    description: "Roles & permissions, approving knowledge base content, managing faults.",
  },
  {
    icon: "truck" as const,
    title: "Mobile app guide",
    description: "Scanning assets, offline mode, logging faults and requesting an expert.",
  },
  {
    icon: "diff" as const,
    title: "Data model reference",
    description: "How assets, faults, documents and configuration history relate.",
  },
  {
    icon: "book" as const,
    title: "Knowledge base authoring",
    description: "Formatting manuals and bulletins so FIELD can cite them correctly.",
  },
  {
    icon: "history" as const,
    title: "Integrations & API",
    description: "Connecting FIELD to your CMMS, ERP or existing maintenance systems.",
  },
];

const DocumentationPage = () => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            Documentation
          </span>
          <h1 className="max-w-[24ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            Docs are on their way
          </h1>
          <p className="max-w-[60ch] text-base leading-[1.6] text-bodyGray">
            We&rsquo;re building out full documentation for FIELD. Here&rsquo;s what it will
            cover first. In the meantime, our team can walk you through setup directly.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
          <div className="grid gap-5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
            {docSections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col gap-2.5 rounded-2xl border border-borderGray p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText">
                  <Icon name={section.icon} size={20} strokeWidth={1.7} />
                </span>
                <h3 className="text-[15px] font-semibold text-ink">{section.title}</h3>
                <p className="text-sm leading-[1.55] text-bodyGray">{section.description}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-mutedGray">
            Need something specific now? Email{" "}
            <a href="mailto:support@quiptechfield.com" className="text-primary hover:text-primaryHover">
              support@quiptechfield.com
            </a>{" "}
            or visit our{" "}
            <a href="/contact" className="text-primary hover:text-primaryHover">
              contact page
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default DocumentationPage;
