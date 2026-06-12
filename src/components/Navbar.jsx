import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo, navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-800/80 bg-[#0a0a0f]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#hero"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-violet-600 text-sm font-black text-white transition-transform duration-300 group-hover:scale-110">
              B
            </span>
            <span className="hidden sm:inline">{personalInfo.shortName}</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-emerald-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col border-l border-zinc-800 bg-[#0a0a0f] pt-20 shadow-2xl transition-transform duration-350 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-emerald-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 px-6">
          <a
            href={personalInfo.resumePath}
            download={personalInfo.resumeFileName}
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-500/20"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </aside>
    </>
  );
}
