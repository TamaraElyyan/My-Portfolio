import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

const connectSocialBtnClass =
  "inline-flex items-center justify-center bg-[#4a4e69] text-[#f2e9e4] dark:text-white p-3 rounded-lg border-0 shadow-[0_0_20px_rgba(74,78,105,0.28)] dark:shadow-[0_0_24px_rgba(74,78,105,0.4)] transition-all duration-300 ease-out hover:bg-[#3a3d52] dark:hover:bg-[#5a5f7a] hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(74,78,105,0.45)] dark:hover:shadow-[0_0_38px_rgba(74,78,105,0.55)] active:scale-95";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss how we can
            collaborate on your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 justify-items-center lg:justify-items-stretch">
          <div className="glass-card rounded-3xl p-8 w-full max-w-lg lg:max-w-none text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-8 text-slate-100">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-0">
                <div className="bg-[#4a4e69]/15 p-3 rounded-lg border border-[#4a4e69]/30 sm:mr-4 shrink-0">
                  <Mail className="h-5 w-5 text-[#4a4e69] dark:text-white/70" />
                </div>
                <div>
                  <p className="font-medium text-[#4a4e69] dark:text-white">Email</p>
                  <p className="text-slate-300 break-all sm:break-normal">
                    tamaraelyyan1@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-0">
                <div className="bg-[#4a4e69]/15 p-3 rounded-lg border border-[#4a4e69]/30 sm:mr-4 shrink-0">
                  <Phone className="h-5 w-5 text-[#4a4e69] dark:text-white/70" />
                </div>
                <div>
                  <p className="font-medium text-[#4a4e69] dark:text-white">Phone</p>
                  <p className="text-slate-300">+972562667777</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-0">
                <div className="bg-[#4a4e69]/15 p-3 rounded-lg border border-[#4a4e69]/30 sm:mr-4 shrink-0">
                  <MapPin className="h-5 w-5 text-[#4a4e69] dark:text-white/70" />
                </div>
                <div>
                  <p className="font-medium text-[#4a4e69] dark:text-white">Location</p>
                  <p className="text-slate-300">Palestine, Ramallah</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-slate-100">Connect With Me</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="https://www.linkedin.com/in/tamara-elyyan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectSocialBtnClass}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/TamaraElyyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectSocialBtnClass}
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:tamaraelyyan1@gmail.com"
                  className={connectSocialBtnClass}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Prefer a full-page form with the red accent?{" "}
              <Link
                href="/contact"
                className="font-medium text-destructive underline decoration-destructive/50 underline-offset-2 hover:decoration-destructive"
              >
                Open the contact page
              </Link>
            </p>
          </div>

          <div className="w-full max-w-lg lg:max-w-none">
            <ContactForm variant="default" />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
