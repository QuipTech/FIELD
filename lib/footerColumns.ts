export type FooterLink = {
  href: string;
  label: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { href: "#capabilities", label: "Capabilities" },
      { href: "#how", label: "How it works" },
      { href: "#field", label: "In the field" },
      { href: "#vision", label: "FIELD Vision" },
      { href: "#gap", label: "Why FIELD" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#faq", label: "FAQ" },
      { href: "#demo", label: "Support" },
      { href: "#demo", label: "Documentation" },
      { href: "#demo", label: "Release notes" },
      { href: "#demo", label: "Status" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#demo", label: "About QuipTech" },
      { href: "#demo", label: "Contact" },
      { href: "#demo", label: "Careers" },
      { href: "#demo", label: "Partners & dealers" },
    ],
  },
];

export const footerLegalLinks: FooterLink[] = [
  { href: "#demo", label: "Privacy policy" },
  { href: "#demo", label: "Terms of service" },
  { href: "#demo", label: "Data processing" },
  { href: "#demo", label: "Security" },
  { href: "#demo", label: "Accessibility" },
];
