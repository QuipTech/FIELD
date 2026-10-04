import { Icon } from "@/components/icons/Icon";

const specialists = [
  { initials: "JT", name: "Jordan Tran", title: "Solutions Engineer" },
  { initials: "AM", name: "Amara Osei", title: "Customer Success Lead" },
  { initials: "RK", name: "Ravi Kapoor", title: "Sales Engineer" },
  { initials: "EL", name: "Ellie Novak", title: "Onboarding Specialist" },
];

export const ProductSpecialists = () => {
  return (
    <section className="border-t border-borderGray px-6 py-14 min-[900px]:px-16 min-[900px]:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-5 min-[900px]:flex-row min-[900px]:items-end">
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-primary">
              The team
            </span>
            <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink min-[900px]:text-[32px]">
              Meet our product specialists
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primaryHover"
          >
            Contact us
            <Icon name="arrow" size={16} strokeWidth={2} />
          </a>
        </div>

        <div className="grid gap-5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
          {specialists.map((person) => (
            <div
              key={person.name}
              className="flex flex-col gap-3 rounded-2xl border border-borderGray p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryTint text-[15px] font-semibold text-primaryTintText">
                {person.initials}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-ink">{person.name}</span>
                <span className="text-[13px] text-bodyGray">{person.title}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-mutedGray">
          Placeholder team — swap in your real specialists (name, title and photo) before launch.
        </p>
      </div>
    </section>
  );
};
