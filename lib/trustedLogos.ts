export type TrustedLogo = {
  name: string;
  url: string;
  icon?: "truck" | "shield";
  italic?: boolean;
  weight?: "bold" | "extrabold" | "semibold";
  tracking?: "tight" | "normal" | "wide";
};

export const trustedLogos: TrustedLogo[] = [
  { name: "Norrgate Mining", url: "https://norrgatemining.example", icon: "truck", weight: "bold", tracking: "tight" },
  { name: "Basecamp Resources", url: "https://basecampresources.example", italic: true, weight: "bold", tracking: "tight" },
  { name: "STRATA WORKS", url: "https://strataworks.example", weight: "extrabold", tracking: "wide" },
  { name: "Ironvale", url: "https://ironvale.example", icon: "shield", weight: "semibold" },
  { name: "Coppervale Group", url: "https://coppervalegroup.example", weight: "bold", tracking: "tight" },
  { name: "HALDEN PLANT OPS", url: "https://haldenplantops.example", weight: "semibold", tracking: "wide" },
];
