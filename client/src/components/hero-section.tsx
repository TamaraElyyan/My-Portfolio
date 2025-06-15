import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import personalImage from "../../assets/personalimage.jpg";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-background dark:to-muted" />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl">
            <img
              src={personalImage}
              alt="Tamara Elyyan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Tamara Elyyan</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Full Stack Developer & Network Engineer specialized in React.js, AWS
          Services, and Network Infrastructure
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>

          {/* Download CV Button using frontend only */}
          <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:TamaraElyyan1@gmail.com"
            className="text-muted-foreground hover:text-primary text-2xl transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          {/* Add your social icons here as needed */}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
