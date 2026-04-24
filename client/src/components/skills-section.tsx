import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto px-2">
            Comprehensive technical skills across full-stack development and
            network engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16 justify-items-center lg:justify-items-stretch">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-card rounded-3xl hover:-translate-y-2 transition-all duration-300 ease-out w-full max-w-md lg:max-w-none"
            >
              <CardContent className="p-8 text-center lg:text-left">
                <div className={`${category.color} text-3xl mb-4 flex justify-center lg:justify-start`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-100">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-neutral-700 dark:text-white/90 tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2.5 bg-[#e0d9d4] dark:bg-[#4a4e69]/50" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
