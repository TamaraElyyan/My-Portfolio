import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { primaryNavItems } from "@/data/site";
import { scrollToSectionId } from "@/lib/scroll";
import { cn } from "@/lib/utils";

function ThemeToggleRow({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-[#4a4e69]/20 bg-[#ebe4df]/60 px-2 py-1 dark:border-white/15 dark:bg-white/[0.06]",
        className
      )}
      title={isDark ? "Dark theme on" : "Light theme on"}
    >
      <Sun
        className={cn(
          "h-3.5 w-3.5 shrink-0 transition-opacity",
          isDark ? "text-amber-400/45" : "text-amber-600"
        )}
        aria-hidden
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="h-6 w-11 shrink-0 border-0 bg-[#c9ada7]/50 data-[state=checked]:bg-[#4a4e69] data-[state=unchecked]:bg-[#d8cfc7] dark:bg-zinc-700 dark:data-[state=checked]:bg-[#6b7194] dark:data-[state=unchecked]:bg-zinc-600"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      />
      <Moon
        className={cn(
          "h-3.5 w-3.5 shrink-0 transition-opacity",
          isDark ? "text-[#c9b8d4]" : "text-[#4a4e69]/35"
        )}
        aria-hidden
      />
    </div>
  );
}

export function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigateToSection = (label: string, sectionId: string) => {
    setActiveItem(label);
    scrollToSectionId(sectionId);
    setMobileNavOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 w-full border-b border-[#c9ada7]/30 bg-[#f2e9e4]/85 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-[#f2e9e4]/70 dark:border-white/10 dark:bg-zinc-950/85 dark:supports-[backdrop-filter]:bg-zinc-950/70 animate-nav-drop"
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2.5 md:py-3">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-[#4a4e69] dark:text-[#b8a3c8] transition-all duration-300 ease-out hover:opacity-90 hover:scale-[1.02] active:scale-100"
          >
            Portfolio.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {primaryNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateToSection(item.label, item.sectionId)}
                className={`px-2 py-1.5 text-sm font-medium transition-all duration-300 ease-out rounded-md ${
                  activeItem === item.label
                    ? "text-[#4a4e69] dark:text-[#b8a3c8] underline decoration-2 underline-offset-[6px] decoration-[#4a4e69]/50 dark:decoration-[#b8a3c8]/60"
                    : "text-[#4a4e69] dark:text-white/90 hover:text-[#22223b] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:-translate-y-0.5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="ml-2 flex items-center pl-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative h-9 w-9 shrink-0 text-[#22223b] dark:text-white hover:bg-[#ebe4df]/90 dark:hover:bg-[#27272a]/60 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
                aria-label={
                  theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
                }
              >
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-1">
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-[#22223b] dark:text-white hover:text-[#4a4e69] dark:hover:text-white hover:bg-[#ebe4df]/90 dark:hover:bg-[#27272a]/60 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-white/90 to-[#ebe4df] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-black text-slate-900 dark:text-white border-[#c9ada7]/35 dark:border-zinc-800">
                <div className="flex flex-col items-center space-y-4 mt-8">
                  {primaryNavItems.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => navigateToSection(item.label, item.sectionId)}
                      className={`w-full text-center transition-all duration-300 ease-out py-1 rounded-lg ${
                        activeItem === item.label
                          ? "text-[#4a4e69] dark:text-[#b8a3c8] bg-[#4a4e69]/10 dark:bg-white/5"
                          : "text-[#4a4e69] dark:text-white/90 hover:text-[#22223b] dark:hover:text-white hover:bg-[#ebe4df]/80 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="w-full max-w-[14rem] border-t border-[#c9ada7]/40 pt-6 dark:border-white/10">
                    <ThemeToggleRow className="w-full justify-between px-3 py-2" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}