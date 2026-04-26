import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

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

export type ContactFormProps = {
  /** `default` matches the home section; `page` uses a red-accent full-page style. */
  variant?: "default" | "page";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const { toast } = useToast();
  const isPage = variant === "page";

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
        subject: subjectLine,
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

  const fieldClass =
    "bg-white dark:bg-slate-900/70 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-[#4a4e69]/50";

  const labelClass = "text-slate-600 dark:text-white/80 text-center lg:text-left block";

  return (
    <Card
      className={cn(
        "w-full",
        isPage
          ? "border-destructive/40 shadow-[0_0_32px_hsl(var(--destructive)/0.15)]"
          : "glass-card rounded-3xl"
      )}
    >
      <CardContent className="p-8 text-center lg:text-left">
        <h3
          className={cn(
            "text-xl font-bold mb-6 text-slate-100",
            isPage && "text-destructive"
          )}
        >
          Send Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-3">
              <Label htmlFor="firstName" className={labelClass}>
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                className={fieldClass}
                required
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName" className={labelClass}>
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className={fieldClass}
                required
              />
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className={labelClass}>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={fieldClass}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="subject" className={labelClass}>
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project collaboration"
              className={fieldClass}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="message" className={labelClass}>
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={fieldClass}
              required
            />
          </div>
          <Button
            type="submit"
            variant={isPage ? "destructive" : "default"}
            className={cn(
              "w-full transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:opacity-60 disabled:hover:translate-y-0",
              !isPage &&
                "bg-[#4a4e69] text-[#f2e9e4] hover:bg-[#3a3d52] shadow-[0_0_24px_rgba(74,78,105,0.35)] hover:shadow-[0_0_32px_rgba(74,78,105,0.5)] disabled:hover:shadow-[0_0_24px_rgba(74,78,105,0.35)]"
            )}
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
  );
}
