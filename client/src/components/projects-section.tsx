import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "My Dream Place - Travel & Booking Website",
      description:
        "Responsive travel booking platform with interactive UI, search functionality, and booking management system.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Tailwind",
        "REST API",
        "axios",
      ],
      demoUrl: "https://demo.mydreamplace.com",
      codeUrl: "https://github.com/TamaraElyyan/Travel-Booking-Website",
      featured: false,
    },
    {
      title: "Book Library E-commerce",
      description:
        "Full-stack e-commerce platform for book sales with REST APIs, user authentication, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React.js", "Express.js", "REST API"],
      demoUrl: "https://demo.booklibrary.com",
      codeUrl: "https://github.com/TamaraElyyan/library_store",
      featured: false,
    },
    {
      title: "YALLA SHABAB - Event Management Website",
      description:
        "Comprehensive event management platform with Spring Boot backend and React.js frontend, featuring event creation, registration, and management capabilities.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Spring Boot", "Tailwind", "REST API"],
      demoUrl: "https://demo.yallashabab.com",
      codeUrl: "https://github.com/Israa-Mousa/event-website",
      features: [
        "Event creation and management",
        "User registration system",
        "Real-time notifications",
        "Admin dashboard",
      ],
      featured: false,
      fullWidth: false,
    },
    {
      title: "FitFinder – Resume Ranker",
      description:
        "AI-powered resume analysis tool that ranks candidate profiles based on job descriptions using NLP and keyword matching.",
      image:
        "https://images.unsplash.com/photo-1600267165477-3c4d8e9286e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flask API", "React", "TypeScript", "Next.js"],
      demoUrl: "https://demo.fitfinder.com",
      codeUrl: "https://github.com/TamaraElyyan/FitFinder2",
      features: [
        "Resume parsing and keyword extraction",
        "Job matching score calculator",
        "RESTful Flask backend",
        "Modern React + Next.js frontend",
      ],
      featured: false,
      fullWidth: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing innovative solutions that demonstrate technical expertise
            and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-shadow animate-slide-up ${
                project.fullWidth ? "lg:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover rounded-lg mb-4 ${
                    project.fullWidth ? "h-64" : "h-48"
                  }`}
                />

                {project.fullWidth ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      {project.features && (
                        <div>
                          <h4 className="font-semibold mb-2">Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex gap-2">
                        <Button variant="secondary" className="flex-1" asChild>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" />
                            Demo
                          </a>
                        </Button>

                        <Button variant="outline" className="flex-1" asChild>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
