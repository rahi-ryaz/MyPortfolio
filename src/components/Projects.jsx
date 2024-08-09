import { PROJECTS } from "../assets/Info";

const Projects = () => {
  return (
    
 <div className="pb-4 flex flex-col ">

<div className="flex justify-center mb-4">
        <h1 className="text-3xl animate-bounce text-[#01D293]">Projects</h1>
      </div>
      {/* Container for project cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 max-w-xs" // Ensure 3 cards per row on lg screens
          >
            <div
              className="w-full h-80 p-4 border border-slate-600 rounded-lg
              transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-zinc-900"
              style={{ height: '100%' }} // Ensure the height is consistent
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg" // Ensure image covers the area and fits nicely
              />

              <h6 className="text-white mb-2 font-semibold text-xl">{project.title}</h6>
              
              <p className="text-neutral-400 mb-4">{project.description}</p>

              {/* Container for technology tags */}
              <div className="flex gap-2 flex-wrap">
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
