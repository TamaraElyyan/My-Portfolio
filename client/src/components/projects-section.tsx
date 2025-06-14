import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { Link } from "wouter";

export function ProjectsSection() {
  const projects = [
    {
      title: "Travel & Booking Website",
      description: "Responsive travel booking platform with interactive UI, search functionality, and booking management system.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React.js", "Tailwind CSS"],
      featured: false
    },
    {
      title: "Book Library E-commerce",
      description: "Full-stack e-commerce platform for book sales with REST APIs, user authentication, and payment integration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React.js", "Express.js", "REST API"],
      featured: false
    },
    {
      title: "Event Management Website",
      description: "Comprehensive event management platform with Spring Boot backend and React.js frontend, featuring event creation, registration, and management capabilities.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Spring Boot", "Bootstrap", "REST API"],
      features: [
        "Event creation and management",
        "User registration system", 
        "Real-time notifications",
        "Admin dashboard"
      ],
      featured: false,
      fullWidth: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Showcasing innovative solutions that demonstrate technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resume Ranker Project (Featured) */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-muted dark:to-card border-2 border-primary/20 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Resume Ranker for HR</h3>
                  <Badge variant="secondary" className="mt-1">Featured Project</Badge>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                An intelligent HR tool that automatically ranks and evaluates resumes based on job requirements. 
                Built with React.js for the frontend and Express.js for the backend, featuring AI-powered matching algorithms, 
                batch processing capabilities, and comprehensive analytics dashboard for HR professionals.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AI-powered resume analysis</li>
                    <li>• Batch processing & ranking</li>
                    <li>• Skills matching algorithms</li>
                    <li>• Interactive analytics dashboard</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Express.js</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">OpenAI</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/resume-ranker">
                  <Button className="shadow-lg">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Try Demo
                  </Button>
                </Link>
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Other Projects */}
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-shadow animate-slide-up ${
                project.fullWidth ? 'lg:col-span-2' : ''
              }`}
            >
              <CardContent className={project.fullWidth ? "p-6" : "p-6"}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full object-cover rounded-lg mb-4 ${
                    project.fullWidth ? 'h-64' : 'h-48'
                  }`}
                />
                {project.fullWidth ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                        <Button variant="secondary" className="flex-1">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Demo
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Github className="mr-1 h-4 w-4" />
                          Code
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
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" className="flex-1">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-1 h-3 w-3" />
                        Code
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
