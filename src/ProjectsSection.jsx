import { useState } from "react";
import ProjectDrawer from "./ProjectDrawer"; // Mets le bon chemin si besoin

export default function ProjectsSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Projets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl shadow hover:shadow-blue-500/30 cursor-pointer transition-all duration-200 group overflow-hidden flex flex-col"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex gap-2 mb-2">
                {project.tech?.slice(0, 2).map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-800/70 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    {t.icon} {t.name}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-blue-300 text-lg mb-1">
                {project.title}
              </h3>
              <p className="text-neutral-300 text-sm flex-1">
                {project.description}
              </p>
              <div className="mt-4 text-right">
                <span className="text-blue-400 underline text-xs group-hover:text-blue-300 transition">
                  Voir détails
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectDrawer
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
