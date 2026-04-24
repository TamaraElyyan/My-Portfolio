import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
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
            Stack I use in production-style work—frontend-led, with backend and
            infrastructure when the problem needs it.
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
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {category.skills.map((name) => (
                    <Badge
                      key={name}
                      variant="secondary"
                      className="text-xs font-medium bg-[#ebe4df] text-[#22223b] border border-[#c9ada7]/55 dark:bg-[#09090b] dark:text-[#f2e9e4] dark:border-[#3f3f46]"
                    >
                      {name}
                    </Badge>
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
