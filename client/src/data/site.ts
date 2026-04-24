export type PrimaryNavItem = {
  label: string;
  /** Matches `<section id="...">` */
  sectionId: string;
  href: string;
};

export const primaryNavItems: PrimaryNavItem[] = [
  { label: "Home", sectionId: "home", href: "#home" },
  { label: "About", sectionId: "about", href: "#about" },
  { label: "Skills", sectionId: "skills", href: "#skills" },
  { label: "Portfolio", sectionId: "projects", href: "#projects" },
  { label: "Contact", sectionId: "contact", href: "#contact" },
];

export type FooterQuickLink = { label: string; sectionId: string };

export const footerQuickNavItems: FooterQuickLink[] = [
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Contact", sectionId: "contact" },
];

export const siteSocial = {
  linkedin: "https://www.linkedin.com/in/tamara-elyyan/",
  github: "https://github.com/TamaraElyyan",
  email: "mailto:tamaraelyyan1@gmail.com",
} as const;
