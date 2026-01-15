import { TbBrandGithub } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ image, title, description, techs, github, live }) {
  return (
    <div className="max-w-xl group mx-auto cursor-pointer rounded-md border border-white/20
     bg-linear-to-bl from-blue-200/10 to-purple-900/20 backdrop-blur h-full
      relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
      <img src={image} alt={title} className="rounded-t-md bg-white transition-transform duration-300" />
      <div className="mt-2 p-4">
        <h3 className="text-2xl font-semibold text-white/90">{title}</h3>

        <p className="mt-2 text-white/80 leading-relaxed">
          {description}
        </p>

        <ul className="list-none flex gap-2 flex-wrap my-2">
          {techs.map((tech, i) => (
            <li key={i} className="bg-purple-600/20 text-purple-400 rounded-full p-1 px-3 text-sm font-medium">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex text-black/80 gap-5 items-center justify-end absolute top-0 right-0
       bg-white p-2 rounded-tr-md rounded-bl-md shadow-sm">
        <a href={github} target="_blank">
          <TbBrandGithub className="text-3xl hover:text-purple-400 transition" />
        </a>
        {
          (live !== "") && (
            <a href={live} target="_blank">
              <FaExternalLinkAlt className="text-2xl hover:text-purple-400 transition" />
            </a>
          )
        }

      </div>
    </div>
  );
}

export default ProjectCard;
