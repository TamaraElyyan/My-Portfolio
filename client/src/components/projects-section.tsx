import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { PENDING_DEMO, projects, type Project } from "@/data/projects";

const demoButtonClass =
  "w-full sm:flex-1 bg-[#4a4e69] text-[#f2e9e4] hover:bg-[#3a3d52] shadow-[0_0_20px_rgba(74,78,105,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(74,78,105,0.4)] active:scale-[0.98]";

function LiveDemoAction({ project, size = "sm" }: { project: Project; size?: "sm" | "default" }) {
  const pending = project.demoUrl === PENDING_DEMO;
  const iconClass = size === "sm" ? "mr-1 h-3 w-3" : "mr-1 h-4 w-4";
  const cls = demoButtonClass;

  if (pending) {
    return (
      <Button
        type="button"
        variant="secondary"
        size={size}
        disabled
        className={`${cls} cursor-not-allowed opacity-50 grayscale-[0.15]`}
        title="رابط الـ live قريباً"
        aria-label="Live demo: link not added yet"
      >
        <ExternalLink className={iconClass} />
        Live demo
      </Button>
    );
  }

  return (
    <Button
      variant="secondary"
      size={size}
      className={cls}
      asChild
    >
      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className={iconClass} />
        Live demo
      </a>
    </Button>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Selected projects
          </h2>
          <div className="max-w-2xl mx-auto px-2 space-y-4 text-lg text-slate-300 leading-relaxed">
            <p>
              Here are some of the projects I&apos;ve built, showcasing my
              experience in full-stack development, UI/UX design, and real-world
              problem solving.
            </p>
            <p>
              Each project reflects my approach to building scalable,
              user-focused applications using modern technologies.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 justify-items-center lg:justify-items-stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-card rounded-3xl hover:-translate-y-2 transition-all duration-300 ease-out w-full max-w-lg lg:max-w-none ${
                project.fullWidth ? "lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6 text-center lg:text-left">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) min(50vw, 42rem), 100vw"
                  className={`w-full object-cover rounded-lg mb-4 ${
                    project.fullWidth ? "h-64" : "h-48"
                  }`}
                />

                {project.fullWidth ? (
                  <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-100">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-[#ebe4df] text-[#22223b] border border-[#c9ada7]/55 dark:bg-[#09090b] dark:text-[#f2e9e4] dark:border-[#3f3f46]"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between text-center md:text-left">
                      {project.features && (
                        <div>
                          <h4 className="font-semibold mb-2 text-slate-200">Features:</h4>
                          <ul className="text-sm text-slate-300 space-y-1 mb-4">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:max-w-none md:mx-0">
                        <LiveDemoAction project={project} size="default" />

                        <Button
                          variant="outline"
                          className="w-full sm:flex-1 border-[#4a4e69]/50 text-[#4a4e69] dark:text-white/85 hover:bg-[#4a4e69]/10 dark:hover:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#4a4e69] active:scale-[0.98]"
                          asChild
                        >
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-4 w-4" />
                            Code &amp; README
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-[#ebe4df] text-[#22223b] border border-[#c9ada7]/55 dark:bg-[#09090b] dark:text-[#f2e9e4] dark:border-[#3f3f46]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:max-w-none lg:mx-0">
                      <LiveDemoAction project={project} size="sm" />

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:flex-1 border-[#4a4e69]/50 text-[#4a4e69] dark:text-white/85 hover:bg-[#4a4e69]/10 dark:hover:text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#4a4e69] active:scale-[0.98]"
                        asChild
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code &amp; README
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
