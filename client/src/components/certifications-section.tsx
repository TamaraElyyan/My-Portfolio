import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { certifications as certificationLabels } from "@/data/certifications";

const certPillClassName =
  "inline-flex w-full max-w-[min(100%,26rem)] sm:w-auto items-center justify-center text-center rounded-full border-0 ring-0 outline-none px-6 py-3.5 text-sm font-semibold leading-snug bg-[#4a4e69] text-[#f2e9e4] dark:text-white hover:bg-[#3a3d52] dark:hover:bg-[#5a5f7a] shadow-[0_4px_14px_rgba(0,0,0,0.12)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_14px_32px_rgba(0,0,0,0.45)] active:scale-[0.99]";

export function CertificationsSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const [pillsVisible, setPillsVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPillsVisible(true);
          ob.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -20px 0px" }
    );
    ob.observe(node);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-20 md:py-28 section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Certifications & Courses
          </h2>
          <p className="text-lg text-[#22223b] dark:text-white/90 max-w-3xl mx-auto leading-relaxed">
            Continuous learning through industry certifications and structured
            full-stack training programs.
          </p>
        </div>

        <div
          ref={listRef}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          role="list"
        >
          {certificationLabels.map((certification, index) => (
            <div
              key={index}
              role="listitem"
              className={cn(
                certPillClassName,
                !pillsVisible &&
                  "opacity-0 translate-y-2 motion-reduce:translate-y-0 motion-reduce:opacity-100",
                pillsVisible &&
                  "animate-cert-pill-in motion-reduce:animate-none motion-reduce:opacity-100"
              )}
              style={
                pillsVisible
                  ? { animationDelay: `${index * 72}ms` }
                  : undefined
              }
            >
              {certification}
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
