import { Heart, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { personalInfo, navLinks } from "../data/portfolioData";
import { getWhatsAppChatLink } from "../utils/contactService";

export default function Footer() {
  const whatsappLink = getWhatsAppChatLink();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-zinc-100">{personalInfo.name}</p>
            <p className="mt-1 text-sm text-zinc-500">{personalInfo.role}</p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-500 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
              aria-label="GitHub"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href={personalInfo.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-500 transition-all hover:border-violet-500/50 hover:text-violet-400"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-500 transition-all hover:border-green-500/50 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-500 transition-all hover:border-sky-500/50 hover:text-sky-400"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-zinc-800/60 pt-8 text-center text-sm text-zinc-600">
          <p className="flex items-center gap-1.5">
            Built with <Heart size={13} className="text-emerald-500" /> by{" "}
            {personalInfo.shortName}
          </p>
          <p>&copy; {year} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
