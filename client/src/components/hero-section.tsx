import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import { Link } from "wouter";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would trigger CV download
    window.open("/api/download-cv", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-background dark:to-muted"></div>
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            TE
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Tamara Elyyan</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Full Stack Developer & Network Engineer specialized in React.js, AWS Services, and Network Infrastructure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="shadow-lg"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:TamaraElyyan1@gmail.com" 
            className="text-muted-foreground hover:text-primary text-2xl transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary text-2xl transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.5h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.5h3.564v10.952zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary text-2xl transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
