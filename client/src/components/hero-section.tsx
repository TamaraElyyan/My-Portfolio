import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import personalImage from "../../assets/personalimage.jpg";
import { scrollToSectionId } from "@/lib/scroll";

const accentRgb = "74, 78, 105";

/** Public folder; must respect Vite `base` (e.g. /My-Portfolio/). */
const cvHref = `${import.meta.env.BASE_URL}cv.pdf`;

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-[#f2e9e4] dark:bg-[#000000] text-[#22223b] dark:text-white rounded-b-[32px] md:rounded-b-[40px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-[#ebe4df] dark:from-zinc-950 dark:to-black dark:opacity-100 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center lg:justify-items-stretch">
          <div className="animate-fade-up-soft order-2 lg:order-1 w-full max-w-xl lg:max-w-none text-center lg:text-left">
            <p
              className="text-sm font-semibold tracking-[0.25em] uppercase text-[#4a4e69] dark:text-white/95 mb-4"
              style={{ animationDelay: "0ms" }}
            >
              Hello!
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              <span className="text-[#4a4e69] dark:text-[#b8a3c8]">I&apos;m </span>
              <span
                className="text-[#4a4e69] dark:text-[#c9b8d4]"
                style={{ textShadow: "0 0 40px rgba(74, 78, 105, 0.25)" }}
              >
                Tamara Elyyan
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-[#4a4e69] dark:text-white mt-2 mb-6">
              Frontend &amp; full-stack developer
            </p>

            <p className="text-base md:text-lg text-[#3d3d4a]/95 dark:text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
              React.js and Next.js for production UIs—API integration, performance
              tuning, and accessible components—with a network-engineering background
              from PS Core work at Ooredoo Palestine.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                type="button"
                onClick={() => scrollToSectionId("contact")}
                className="w-full max-w-xs sm:w-fit rounded-full px-8 py-6 text-base font-semibold border-0 bg-[#4a4e69] text-[#f2e9e4] dark:text-white hover:bg-[#3a3d52] dark:hover:bg-[#5a5f7a] shadow-[0_0_28px_rgba(74,78,105,0.45)] dark:shadow-[0_0_32px_rgba(74,78,105,0.55)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(74,78,105,0.55)] dark:hover:shadow-[0_0_44px_rgba(74,78,105,0.65)] active:translate-y-0 active:scale-[0.98]"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Let&apos;s talk
              </Button>
              <a
                href={cvHref}
                download="Tamara-Elyyan-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#4a4e69]/45 px-5 py-2.5 text-sm font-medium text-[#4a4e69] dark:text-white transition-all duration-300 ease-out hover:border-[#4a4e69] hover:bg-white/50 hover:text-[#22223b] dark:border-[#c9ada7]/50 dark:hover:border-[#c9ada7] dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex w-full justify-center lg:justify-end animate-fade-right-soft">
            <div className="relative w-[min(88vw,320px)] h-[min(88vw,320px)] sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div
                className="absolute -inset-4 md:-inset-6 rounded-full opacity-60 dark:opacity-80 blur-3xl"
                style={{
                  background: `radial-gradient(circle, rgba(${accentRgb}, 0.55) 0%, rgba(${accentRgb}, 0.2) 45%, transparent 70%)`,
                }}
              />
              <div
                className="absolute -inset-1 rounded-full opacity-50 dark:opacity-70"
                style={{
                  background: `radial-gradient(circle, rgba(${accentRgb}, 0.4) 0%, transparent 65%)`,
                  boxShadow: `0 0 50px 12px rgba(${accentRgb}, 0.35), 0 0 80px 24px rgba(${accentRgb}, 0.2)`,
                }}
              />
              <div
                className="absolute inset-0 rounded-full p-[3px] animate-float-slow"
                style={{
                  background: `linear-gradient(145deg, #4a4e69, #6a7088, #4a4e69)`,
                  boxShadow: `0 0 0 1px rgba(${accentRgb}, 0.5), 0 12px 40px rgba(0,0,0,0.25)`,
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#3d4a5c] to-[#2a3142] dark:from-[#2a3145] dark:to-[#1a1f2a] p-1">
                  <img
                    src={personalImage}
                    alt="Portrait of Tamara Elyyan, software engineer"
                    width={384}
                    height={384}
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-[center_15%] sm:object-center scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
