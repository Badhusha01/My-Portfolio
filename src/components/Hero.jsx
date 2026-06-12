import { Download, MapPin, ArrowDown, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { personalInfo } from "../data/portfolioData";
import { getWhatsAppChatLink } from "../utils/contactService";

export default function Hero() {
  const whatsappLink = getWhatsAppChatLink();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden section-padding pt-32 pb-16"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="animate-fade-in-up order-2 lg:order-1">
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for opportunities
          </p>

          <h1 className="mt-2 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="typing-text inline-block overflow-hidden whitespace-nowrap text-zinc-50">
              Hi, I&apos;m <span className="text-gradient">{personalInfo.shortName}</span>
            </span>
          </h1>

          <p className="mt-2 text-xl font-medium text-violet-400 sm:text-2xl">
            {personalInfo.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {personalInfo.bio}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={15} className="text-emerald-500" />
            {personalInfo.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/40"
            >
              Get In Touch
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-7 py-3 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-400"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
              aria-label="GitHub profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-400 hover:shadow-lg hover:shadow-violet-500/10"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-green-500/50 hover:text-green-400 hover:shadow-lg hover:shadow-green-500/10"
              aria-label="WhatsApp chat"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:border-sky-500/50 hover:text-sky-400 hover:shadow-lg hover:shadow-sky-500/10"
              aria-label="Call phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="group relative cursor-pointer">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-violet-600/20 blur-2xl transition-all duration-500 ease-out group-hover:from-emerald-500/35 group-hover:to-violet-600/35 group-hover:blur-3xl" />
            <div className="profile-glow relative overflow-hidden rounded-[2rem] border border-zinc-700/50 bg-zinc-900/50 p-1.5 shadow-2xl shadow-emerald-500/10 transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:-translate-y-3 group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/25">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} profile photo`}
                  className="h-64 w-64 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-2xl border border-emerald-500/30 bg-zinc-900/90 px-4 py-2 shadow-xl backdrop-blur-sm transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20">
              <p className="text-xs font-semibold text-emerald-400">Full Stack</p>
              <p className="text-xs text-zinc-500">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
