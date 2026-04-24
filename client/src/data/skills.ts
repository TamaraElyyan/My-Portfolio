import type { LucideIcon } from "lucide-react";
import { Code, Server, Cloud } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-[#4a4e69] dark:text-white/85",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
      "TypeScript",
      "Next.js",
      "Redux",
      "Bootstrap",
      "Material UI",
      "Responsive Design",
      "Cross-browser compatibility",
      "Performance optimization",
      "Jest & React Testing Library",
      "SASS",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-[#4a4e69] dark:text-white/85",
    skills: [
      "Express.js",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "RESTful APIs",
      "Node.js",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "text-[#4a4e69] dark:text-white/85",
    skills: [
      "AWS (training)",
      "CCNA",
      "Linux",
      "Network configuration",
      "Automation Anywhere RPA",
      "Git & version control",
      "CI/CD pipelines",
      "Agile methodologies",
    ],
  },
];
