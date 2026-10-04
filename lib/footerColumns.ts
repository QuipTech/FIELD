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
      { href: "/#capabilities", label: "Capabilities" },
      { href: "/#how", label: "How it works" },
      { href: "/#field", label: "In the field" },
      { href: "/#vision", label: "FIELD Vision" },
      { href: "/#gap", label: "Why FIELD" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/#faq", label: "FAQ" },
      { href: "/contact", label: "Support" },
      { href: "/documentation", label: "Documentation" },
      { href: "/release-notes", label: "Release notes" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About QuipTech" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
      { href: "/#partners", label: "Partners & dealers" },
    ],
  },
];

export const footerLegalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/data-processing", label: "Data processing" },
  { href: "/security", label: "Security" },
  { href: "/accessibility", label: "Accessibility" },
];
