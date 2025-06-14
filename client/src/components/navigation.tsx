import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, Code2 } from "lucide-react";

interface NavigationProps {
  showResumeRanker?: boolean;
}

export function Navigation({ showResumeRanker = false }: NavigationProps) {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", href: "#home", action: () => scrollToSection("home") },
    { label: "About", href: "#about", action: () => scrollToSection("about") },
    { label: "Skills", href: "#skills", action: () => scrollToSection("skills") },
    { label: "Projects", href: "#projects", action: () => scrollToSection("projects") },
    { label: "Contact", href: "#contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
            Tamara Elyyan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {location === "/" && navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {showResumeRanker && (
              <Link 
                href="/resume-ranker" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Code2 className="h-4 w-4" />
                Resume Ranker
              </Link>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {location === "/" && navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="text-left hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {showResumeRanker && (
                    <Link 
                      href="/resume-ranker" 
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Code2 className="h-4 w-4" />
                      Resume Ranker
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
