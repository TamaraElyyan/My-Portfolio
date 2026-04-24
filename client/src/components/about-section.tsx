import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/reveal";

/** April 1, 2024 — anchor date for displayed tenure (updates automatically). */
const experienceAnchor = new Date(2024, 3, 1);

/** Full calendar years elapsed since anchor (same month/day rule as age). */
function fullYearsSince(start: Date, now = new Date()): number {
  let y = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  const dayDiff = now.getDate() - start.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) y -= 1;
  return Math.max(0, y);
}

export function AboutSection() {
  const completedYears = fullYearsSince(experienceAnchor);
  const yearsExperienceLabel = `${completedYears}+`;

  return (
    <section
      id="about"
      className="py-20 md:py-28 section-shell"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold mb-8 gradient-text"
            >
              About Me
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              B.Sc. in Communication Engineering (Al-Quds University). I combine
              telecom and systems thinking with modern web delivery—Next.js and
              React on the frontend, Express and Spring Boot where the problem
              needs a solid API and data layer.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              From optimizing PS Core at Ooredoo Palestine and technical support
              at the Engineers Association, to part-time frontend work at Swapmoq,
              the Amana full-stack bootcamp, and volunteer UI work on Forsa
              Khadra—I care about shipping interfaces that behave well in
              production, not just in demos.
            </p>

            <div
              className="mt-10 flex justify-center"
              role="group"
              aria-label="Career highlights"
            >
              <div
                className="group glass-card relative flex cursor-default flex-col items-center overflow-hidden rounded-2xl px-8 py-5 text-center min-w-[11rem] transition-all duration-300 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 active:translate-y-0 active:scale-[0.98] hover:shadow-[0_0_32px_rgba(74,78,105,0.28)] dark:hover:shadow-[0_0_40px_rgba(74,78,105,0.35)]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
                  aria-hidden
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#4a4e69]/12 via-transparent to-[#9a8c98]/10 dark:from-[#4a4e69]/25 dark:to-transparent" />
                </div>
                <div
                  className="relative mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#4a4e69]/30 bg-[#4a4e69]/12 text-[#4a4e69] shadow-inner shadow-[#4a4e69]/10 transition-all duration-300 ease-out dark:border-white/20 dark:bg-white/10 dark:text-[#e8dccf] motion-safe:group-hover:scale-110 motion-safe:group-hover:border-[#4a4e69]/50 motion-safe:group-hover:bg-[#4a4e69]/18 dark:motion-safe:group-hover:bg-white/15"
                  aria-hidden
                >
                  <Briefcase className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <p className="relative text-2xl font-bold text-[#4a4e69] dark:text-white tabular-nums transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 motion-reduce:group-hover:scale-100">
                  {yearsExperienceLabel}
                </p>
                <p className="relative mt-1 text-sm text-slate-300 transition-colors duration-300 group-hover:text-[#4a4e69] dark:group-hover:text-[#e8dccf]">
                  Years experience
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
