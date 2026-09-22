import { outcomeStats } from "@/lib/outcomeStats";
import { OutcomeCard } from "@/components/outcomes/OutcomeCard";

export const Outcomes = () => {
  return (
    <section className="border-t border-borderGray bg-surfaceGray px-6 py-10 min-[900px]:px-16 min-[900px]:py-[72px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-3.5 min-[900px]:grid-cols-4 min-[900px]:gap-5">
        {outcomeStats.map((stat) => (
          <OutcomeCard key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
};
