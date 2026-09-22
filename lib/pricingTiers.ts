export type PricingTier = {
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Demo",
    price: "Free",
    description:
      "Always-on demo tenant with synthetic fleet data. No card, no time limit, sales-controlled.",
    ctaLabel: "Book a walkthrough →",
  },
  {
    name: "Pilot",
    price: "Fixed fee",
    description:
      "30 or 60 days, one site, 10–20 assets, full Standard feature set. Converts to Standard or ends on the agreed date.",
    ctaLabel: "Talk to sales →",
  },
  {
    name: "Standard",
    price: "Per asset / month",
    description:
      "CMDB, document corpus, AI assistant with an included query allowance, knowledge base and standard support. Metered overage above the allowance.",
    ctaLabel: "Get current rates →",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Everything in Standard, plus white-label, SSO/SAML, OEM licence controls, priority support and a named contact. Annual, negotiated per deal.",
    ctaLabel: "Contact sales →",
  },
];

export type PricingAddOn = {
  icon: "users" | "video" | "truck" | "file";
  label: string;
};

export const pricingAddOns: PricingAddOn[] = [
  { icon: "users", label: "Add-on · Wearable client seat, per user/month" },
  { icon: "video", label: "Add-on · Remote expert, per session" },
  { icon: "truck", label: "Hardware quoted separately, cost-plus or via reseller" },
  { icon: "file", label: "Onboarding billed as a one-off, never folded into renewal" },
];
