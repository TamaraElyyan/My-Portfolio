import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Server, Cloud } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-blue-600 dark:text-blue-400",
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
      color: "text-emerald-600 dark:text-emerald-400",
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
      color: "text-purple-600 dark:text-purple-400",
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

  // const certifications = [
  //   "CCNA - Cisco",
  //   "AWS Services",
  //   "Automation Anywhere RPA",
  //   "Full Stack Development",
  //   "React.js",
  //   "JavaScript",
  //   "Spring Boot",
  // ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technical skills across full-stack development and
            network engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="animate-slide-up hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className={`${category.color} text-3xl mb-4`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
