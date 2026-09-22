export type OutcomeStat = {
  count: number;
  suffix: string;
  decimals: number;
  title: string;
  subtitle: string;
};

export const outcomeStats: OutcomeStat[] = [
  {
    count: 64,
    suffix: "%",
    decimals: 0,
    title: "Less time hunting for answers",
    subtitle: "Against manual search on pilot sites",
  },
  {
    count: 3.5,
    suffix: " h",
    decimals: 1,
    title: "Average downtime avoided per fault",
    subtitle: "When the fix lands on the first visit",
  },
  {
    count: 100,
    suffix: "%",
    decimals: 0,
    title: "Of answers cite an approved source",
    subtitle: "No source, no answer, by design",
  },
  {
    count: 19,
    suffix: "",
    decimals: 0,
    title: "Machine models in one library",
    subtitle: "Mixed fleets, one workflow",
  },
];
