import { techStack } from "../data/portfolioData";

const categoryColors = {
  Backend: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Frontend: "border-violet-500/30 bg-violet-500/10 text-violet-400",
  Database: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Tools: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

export default function TechStack() {
  return (
    <section id="skills" className="section-padding bg-zinc-900/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="section-label justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Tech Stack
          </p>
          <h2 className="section-title">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            A curated stack I use to build robust full-stack applications from
            database to deployment-ready UI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group glass-card hover-lift flex items-center justify-between p-5"
            >
              <span className="font-medium text-zinc-200 transition-colors group-hover:text-emerald-300">
                {tech.name}
              </span>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[tech.category] ?? "border-zinc-600 bg-zinc-800 text-zinc-400"}`}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
