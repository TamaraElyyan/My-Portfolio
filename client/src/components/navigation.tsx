import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { primaryNavItems } from "@/data/site";
import { scrollToSectionId } from "@/lib/scroll";

export function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");
  const { theme, setTheme } = useTheme();

  return (
    <nav className="absolute top-0 w-full z-40 animate-nav-drop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <Link
            href="/"
            className="text-2xl font-semibold text-[#4a4e69] dark:text-[#b8a3c8] transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.03] active:scale-100"
          >
            Portfolio.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {primaryNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveItem(item.label);
                  scrollToSectionId(item.sectionId);
                }}
                className={`font-medium transition-all duration-300 ease-out ${
                  activeItem === item.label
                    ? "text-[#4a4e69] dark:text-[#b8a3c8] underline decoration-2 underline-offset-[10px] decoration-[#4a4e69]/50 dark:decoration-[#b8a3c8]/60"
                    : "text-[#4a4e69] dark:text-white/90 hover:text-[#22223b] dark:hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-[#22223b] dark:text-white hover:bg-[#ebe4df]/90 dark:hover:bg-[#27272a]/60 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#22223b] dark:text-white hover:text-[#4a4e69] dark:hover:text-white hover:bg-[#ebe4df]/90 dark:hover:bg-[#27272a]/60 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-white/90 to-[#ebe4df] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-black text-slate-900 dark:text-white border-[#c9ada7]/35 dark:border-zinc-800">
                <div className="flex flex-col items-center space-y-4 mt-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full max-w-xs text-[#22223b] dark:text-white hover:bg-[#ebe4df]/90 dark:hover:bg-[#27272a]/60 transition-all duration-300 ease-out"
                  >
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </Button>
                  {primaryNavItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        setActiveItem(item.label);
                        scrollToSectionId(item.sectionId);
                      }}
                      className={`w-full text-center transition-all duration-300 ease-out py-1 rounded-lg ${
                        activeItem === item.label
                          ? "text-[#4a4e69] dark:text-[#b8a3c8] bg-[#4a4e69]/10 dark:bg-white/5"
                          : "text-[#4a4e69] dark:text-white/90 hover:text-[#22223b] dark:hover:text-white hover:bg-[#ebe4df]/80 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}