import type { LucideIcon } from "lucide-react";
import { Code, Server, Cloud } from "lucide-react";

export type SkillEntry = { name: string; level: number };

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: SkillEntry[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-[#4a4e69] dark:text-white/85",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML & CSS", level: 95 },
      { name: "TypeScript", level: 75 },
      { name: "Next.js", level: 75 },
      { name: "Redux", level: 90 },
      { name: "Bootstrap", level: 80 },
      { name: "Material UI", level: 70 },
      { name: "Responsive Design", level: 90 },
      { name: "Cross-Browser Compatibility", level: 85 },
      { name: "Performance Optimization", level: 80 },
      { name: "Testing (Jest, React Testing Library)", level: 70 },
      { name: "SASS", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-[#4a4e69] dark:text-white/85",
    skills: [
      { name: "Express.js", level: 85 },
      { name: "Spring Boot", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "RESTful APIs", level: 90 },
      { name: "Node.js", level: 85 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "text-[#4a4e69] dark:text-white/85",
    skills: [
      { name: "AWS Services", level: 80 },
      { name: "CCNA", level: 90 },
      { name: "Linux", level: 75 },
      { name: "Network Configuration", level: 85 },
      { name: "Automation Anywhere RPA", level: 70 },
      { name: "Git & Version Control", level: 90 },
      { name: "CI/CD Pipelines", level: 70 },
      { name: "Agile Methodologies", level: 80 },
    ],
  },
];
