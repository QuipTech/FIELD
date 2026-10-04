import type { Metadata } from "next";
import { Icon } from "@/components/icons/Icon";
import { PageShell } from "@/components/common/PageShell";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — QuipTech FIELD",
  description: "Talk to the QuipTech FIELD team about sales, support or partnerships.",
};

const contactCards = [
  {
    icon: "spark" as const,
    title: "Sales",
    description: "See FIELD against your own fleet, pricing and rollout timelines.",
    email: "sales@quiptechfield.com",
  },
  {
    icon: "life" as const,
    title: "Support",
    description: "Already a customer? Get help from our support engineers.",
    email: "support@quiptechfield.com",
  },
  {
    icon: "shield" as const,
    title: "Security",
    description: "Report a vulnerability or request compliance documentation.",
    email: "security@quiptechfield.com",
  },
  {
    icon: "users" as const,
    title: "Partnerships",
    description: "OEMs, dealers and distributors interested in working with FIELD.",
    email: "partners@quiptechfield.com",
  },
];

const ContactPage = () => {
  return (
    <PageShell>
      <section className="border-b border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
            Contact
          </span>
          <h1 className="max-w-[20ch] text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            Talk to the team building FIELD
          </h1>
          <p className="max-w-[60ch] text-base leading-[1.6] text-bodyGray">
            Whether you&rsquo;re evaluating FIELD for your fleet or already running it on site,
            we&rsquo;d like to hear from you.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] items-start gap-10 min-[900px]:grid-cols-[1fr_1.1fr] min-[900px]:gap-16">
          <div className="grid gap-4 min-[520px]:grid-cols-2">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-2.5 rounded-2xl border border-borderGray p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primaryTint text-primaryTintText">
                  <Icon name={card.icon} size={20} strokeWidth={1.7} />
                </span>
                <h3 className="text-[15px] font-semibold text-ink">{card.title}</h3>
                <p className="text-sm leading-[1.55] text-bodyGray">{card.description}</p>
                <a
                  href={`mailto:${card.email}`}
                  className="mt-auto text-[13px] font-semibold text-primary hover:text-primaryHover"
                >
                  {card.email}
                </a>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
