import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-[100] focus:rounded-md focus:bg-[#4a4e69] focus:px-4 focus:py-2 focus:text-[#f2e9e4]"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-center text-sm text-slate-400">
            <Link
              href="/"
              className="font-medium text-[#4a4e69] dark:text-[#f2e9e4] underline underline-offset-2 hover:opacity-90"
            >
              ← Back to portfolio
            </Link>
          </p>
          <ContactForm variant="page" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
