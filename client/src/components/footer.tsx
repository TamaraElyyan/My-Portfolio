import { Linkedin, Github, Mail } from "lucide-react";
import { footerQuickNavItems, siteSocial } from "@/data/site";
import { scrollToSectionId } from "@/lib/scroll";

const socialIconClass =
  "text-[#4a4e69] dark:text-white/90 hover:text-[#22223b] dark:hover:text-white transition-all duration-300 ease-out hover:-translate-y-px";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-slate-900 dark:text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-[#4a4e69] dark:text-[#b8a3c8]">
              Tamara Elyyan
            </h3>
            <p className="text-[#4a4e69] dark:text-white/90 mb-4">
              Full Stack Developer & Network Engineer passionate about creating
              innovative solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={siteSocial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={siteSocial.github}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={siteSocial.email}
                className={socialIconClass}
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-[#4a4e69] dark:text-[#b8a3c8]">Quick Links</h4>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              {footerQuickNavItems.map((item) => (
                <li key={item.sectionId}>
                  <button
                    type="button"
                    onClick={() => scrollToSectionId(item.sectionId)}
                    className="text-[#4a4e69] dark:text-white/90 hover:text-[#22223b] dark:hover:text-white transition-all duration-300 ease-out hover:-translate-y-px"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-[#4a4e69] dark:text-[#b8a3c8]">Services</h4>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li className="text-[#4a4e69] dark:text-white/90">Full Stack Development</li>
              <li className="text-[#4a4e69] dark:text-white/90">Network Engineering</li>
              <li className="text-[#4a4e69] dark:text-white/90">Cloud Solutions</li>
              <li className="text-[#4a4e69] dark:text-white/90">Technical Consulting</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-300 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-[#4a4e69] dark:text-white/65">
            © {year} Tamara Elyyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
