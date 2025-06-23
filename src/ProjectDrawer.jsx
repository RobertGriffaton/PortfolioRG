import { FaCheckCircle, FaGithub, FaTimesCircle } from "react-icons/fa";

export default function ProjectDrawer({ project, open, onClose }) {
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ background: open ? "rgba(15,23,42,0.70)" : "transparent" }}
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[440px] bg-neutral-900 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 text-blue-400 text-2xl hover:text-blue-600"
          onClick={onClose}
        >
          ×
        </button>
        <div className="p-8 flex flex-col h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover rounded-xl mb-5"
          />
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="bg-blue-900/70 text-xs px-2 py-1 rounded-full flex items-center gap-1"
              >
                {t.icon} {t.name}
              </span>
            ))}
          </div>
          <p className="text-neutral-200 mb-4">{project.description}</p>
          <div className="flex flex-col gap-2 mb-3">
            <div>
              <span className="font-semibold text-green-400">
                Points positifs :
              </span>
              <ul className="ml-4 mt-1 list-disc text-green-200 text-sm">
                {project.positifs?.map((pos, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <FaCheckCircle /> {pos}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-red-400">À améliorer :</span>
              <ul className="ml-4 mt-1 list-disc text-red-200 text-sm">
                {project.negatifs?.map((neg, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <FaTimesCircle /> {neg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-blue-200 italic text-xs mb-5">
            {project.perso}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-md shadow transition self-start"
          >
            <FaGithub /> Voir sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
