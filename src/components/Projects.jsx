
import { PROJECTS } from "../assets/Info";

const Projects = () => {
  return (
    <div className="pb-4 flex flex-col items-center">
      <h1 className="my-2 text-3xl animate-bounce text-[#01D293]">Projects</h1>

      <div className="w-full max-w-screen-lg">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex items-center justify-center mb-6"
          >
            <div
              className="flex w-full max-w-4xl p-4 border border-slate-600 rounded-lg
              transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-zinc-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-1/3 h-48 object-cover rounded-l-lg"
              />

              <div className="w-2/3 p-4">
                <h6 className="text-white mb-2 font-semibold text-xl">{project.title}</h6>
                <p className="text-neutral-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-purple-500 rounded px-2 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


