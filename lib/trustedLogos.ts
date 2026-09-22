export type TrustedLogo = {
  name: string;
  icon?: "truck" | "shield";
  italic?: boolean;
  weight?: "bold" | "extrabold" | "semibold";
  tracking?: "tight" | "normal" | "wide";
};

export const trustedLogos: TrustedLogo[] = [
  { name: "Norrgate Mining", icon: "truck", weight: "bold", tracking: "tight" },
  { name: "Basecamp Resources", italic: true, weight: "bold", tracking: "tight" },
  { name: "STRATA WORKS", weight: "extrabold", tracking: "wide" },
  { name: "Ironvale", icon: "shield", weight: "semibold" },
  { name: "Coppervale Group", weight: "bold", tracking: "tight" },
  { name: "HALDEN PLANT OPS", weight: "semibold", tracking: "wide" },
];
