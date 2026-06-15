import { Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, experience } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            About Me
          </p>
          <h2 className="section-title">
            Building digital products with{" "}
            <span className="text-gradient">purpose & precision</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="glass-card hover-lift p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">Who I Am</h3>
            </div>
            <p className="leading-relaxed text-zinc-400">
              I&apos;m <strong className="font-medium text-zinc-200">{personalInfo.name}</strong>, a <strong className="font-medium text-zinc-200">B.E. Computer Science & Engineering</strong> graduate and a passionate Java Full Stack Developer based in {personalInfo.location}. I specialize in building end-to-end web applications — from designing RESTful APIs with Spring Boot to crafting responsive, interactive UIs with React.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              My approach combines clean layered architecture on the backend with thoughtful frontend state management, ensuring every project is maintainable, scalable, and delightful to use.
            </p>
          </div>

          <div className="space-y-4">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">Experience</h3>
            </div>

            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`glass-card hover-lift p-6 ${index === 0 ? "border-emerald-500/20" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-zinc-100">{job.role}</p>
                    <p className="text-sm text-emerald-400">{job.company}</p>
                  </div>
                  <span className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
