import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { personalInfo } from "../data/portfolioData";
import {
  submitContactForm,
  getWhatsAppChatLink,
  isWhatsAppAlertConfigured,
} from "../utils/contactService";

const initialFormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [banner, setBanner] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showBanner = (type, message) => {
    setBanner({ type, message });
    setTimeout(() => setBanner(null), 6000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showBanner("error", "Please fill in all fields before submitting.");
      return;
    }

    setStatus("loading");

    try {
      await submitContactForm(formData);

      setStatus("success");
      setFormData(initialFormState);
      showBanner(
        "success",
        isWhatsAppAlertConfigured
          ? "Message sent! You'll receive it on email and WhatsApp."
          : "Message sent successfully! Check your email — first-time setup may require confirming FormSubmit in your inbox."
      );
    } catch {
      setStatus("error");
      showBanner(
        "error",
        "Could not send message. Please try WhatsApp or email me directly at badhusha334@gmail.com"
      );
    } finally {
      setStatus("idle");
    }
  };

  const whatsappLink = getWhatsAppChatLink(formData.name, formData.message);

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="section-label justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Contact
          </p>
          <h2 className="section-title">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Have a project in mind or want to discuss an opportunity? Drop me a
            message and I&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="space-y-6">
            <div className="glass-card hover-lift p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="mt-1 block text-zinc-200 transition-colors hover:text-emerald-400"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card hover-lift p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-zinc-200 transition-colors hover:text-violet-400"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card hover-lift p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">WhatsApp</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-zinc-200 transition-colors hover:text-green-400"
                  >
                    Chat on WhatsApp
                  </a>
                  <p className="mt-1 text-xs text-zinc-600">
                    Instant direct message to {personalInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card hover-lift p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Location</p>
                  <p className="mt-1 text-zinc-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {banner && (
              <div
                className={`mb-4 flex items-center gap-3 rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-300 ${
                  banner.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
                role="alert"
              >
                {banner.type === "success" ? (
                  <CheckCircle2 size={18} className="shrink-0" />
                ) : (
                  <AlertCircle size={18} className="shrink-0" />
                )}
                {banner.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="glass-card space-y-5 p-8"
              noValidate
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-200 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-200 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 text-zinc-100 placeholder-zinc-600 outline-none transition-all duration-200 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/35 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-3.5 text-sm font-semibold text-green-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500/20"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp Me
                </a>
              </div>

              <p className="text-center text-xs text-zinc-600">
                Form messages are delivered to{" "}
                <span className="text-zinc-500">{personalInfo.email}</span>
                {isWhatsAppAlertConfigured
                  ? " and your WhatsApp instantly."
                  : ". Enable WhatsApp alerts in .env for instant notifications."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
