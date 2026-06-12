import { ExternalLink, FolderCode } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Portfolio
          </p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-zinc-500">
            A selection of full-stack and frontend work — from Spring Boot APIs to
            React interfaces. Add new projects anytime in{" "}
            <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-emerald-400">
              src/data/projectsData.js
            </code>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group glass-card hover-lift flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-violet-600/20 text-emerald-400">
                    <FolderCode size={18} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-all duration-300 hover:bg-zinc-800 hover:text-emerald-400"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitHubIcon size={16} />
                </a>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-emerald-300">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-700/80 bg-zinc-800/50 px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* இங்க தான் பட்டன் கண்டிஷன் செக் ஆகுது மாப்ள */}
                <div className="mt-6 flex items-center gap-4 border-t border-zinc-800/50 pt-4">
                  {project.liveLink ? (
                    <>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:text-emerald-300 hover:underline"
                      >
                        View Live
                        <ExternalLink size={14} />
                      </a>
                      <span className="text-zinc-700">|</span>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-zinc-200"
                      >
                        Source Code
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:gap-3"
                    >
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}