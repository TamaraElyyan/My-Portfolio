import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/reveal";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const connectSocialBtnClass =
  "inline-flex items-center justify-center bg-[#4a4e69] text-[#f2e9e4] dark:text-white p-3 rounded-lg border-0 shadow-[0_0_20px_rgba(74,78,105,0.28)] dark:shadow-[0_0_24px_rgba(74,78,105,0.4)] transition-all duration-300 ease-out hover:bg-[#3a3d52] dark:hover:bg-[#5a5f7a] hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(74,78,105,0.45)] dark:hover:shadow-[0_0_38px_rgba(74,78,105,0.55)] active:scale-95";

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_ngjcrf4";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_omxptae";
/**
 * Public key from EmailJS → Account → API keys (letter before `o` is capital **I**, not `l`).
 * Override with VITE_EMAILJS_PUBLIC_KEY in .env after key refresh. Never use the private key here.
 */
const EMAILJS_PUBLIC_KEY = (
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "ZKV5AIo2RnFbYSCH0"
).trim();

function emailJsRawText(error: unknown): string {
  if (
    error &&
    typeof error === "object" &&
    "text" in error &&
    typeof (error as { text: unknown }).text === "string"
  ) {
    return (error as { text: string }).text;
  }
  if (error instanceof Error) return error.message;
  return "Something went wrong.";
}

/** Maps known EmailJS / provider errors to clearer copy for the toast. */
function emailJsToastContent(error: unknown): { title: string; description: string } {
  const raw = emailJsRawText(error);
  if (/invalid grant|Gmail_API.*reconnect/i.test(raw)) {
    return {
      title: "Gmail needs reconnecting (EmailJS)",
      description:
        "Open dashboard.emailjs.com → Email Services → your Gmail service → Reconnect / sign in with Google again. OAuth tokens expire; this is not a bug in your portfolio code.",
    };
  }
  if (/account not found/i.test(raw)) {
    return {
      title: "EmailJS: account not found",
      description:
        "The Public Key in this app does not match your EmailJS account (wrong key, or keys were refreshed). Copy Public Key from dashboard.emailjs.com → Account → API keys, set VITE_EMAILJS_PUBLIC_KEY in a .env file at the project root, restart npm run dev. Use service & template IDs from the same account.",
    };
  }
  return { title: "Error sending message", description: raw };
}

export function ContactSection() {
  const { toast } = useToast();

  useEffect(() => {
    if (!EMAILJS_PUBLIC_KEY) return;
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!EMAILJS_PUBLIC_KEY) {
      toast({
        title: "EmailJS public key missing",
        description:
          "Create .env next to package.json with: VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key_here (from EmailJS → Account → API keys). Optionally VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID. Restart the dev server.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      const subjectLine = formData.subject.trim() || "Portfolio contact";

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        user_email: formData.email,
        reply_to: formData.email,
        /** Matches body `{{subject}}` in EmailJS template */
        subject: subjectLine,
        /** Matches email subject `Contact Us: {{title}}` in EmailJS template */
        title: subjectLine,
        message: formData.message,
      });

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: unknown) {
      if (import.meta.env.DEV) {
        console.error("[EmailJS]", error);
      }
      const { title, description } = emailJsToastContent(error);
      toast({
        title,
        description,
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          {/* Contact Information */}
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
          </div>

          {/* Contact Form */}
          <Card className="glass-card rounded-3xl w-full max-w-lg lg:max-w-none">
            <CardContent className="p-8 text-center lg:text-left">
              <h3 className="text-xl font-bold mb-6 text-slate-100">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-slate-600 dark:text-white/80 text-center lg:text-left block">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="bg-white dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-[#4a4e69]/50"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-slate-600 dark:text-white/80 text-center lg:text-left block">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="bg-white dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-[#4a4e69]/50"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-slate-600 dark:text-white/80 text-center lg:text-left block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-white dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-[#4a4e69]/50"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-slate-600 dark:text-white/80 text-center lg:text-left block">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                    className="bg-white dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-[#4a4e69]/50"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-slate-600 dark:text-white/80 text-center lg:text-left block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-white dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-[#4a4e69]/50"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#4a4e69] text-[#f2e9e4] hover:bg-[#3a3d52] shadow-[0_0_24px_rgba(74,78,105,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(74,78,105,0.5)] active:translate-y-0 active:scale-[0.99] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_24px_rgba(74,78,105,0.35)]"
                  disabled={isSending}
                >
                  {isSending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
