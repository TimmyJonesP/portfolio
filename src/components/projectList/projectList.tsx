import Project from "../../utils/types";
const ProjectList = ({ project }: { project: Project; index: number }) => {
  return (
    <article className="h-1/2 md:h-1/3 w-full hover:bg-emerald-400">
      <div className="flex flex-col md:h-[55vh] md:flex-row justify-center md:justify-between">
        <div className="flex flex-col md:flex-col justify-between p-5">
          <h4 className="text-2xl uppercase font-normal pb-5 lg:text-[2vw]">
            {project.tech}
          </h4>
          <h3 className="text-[50px] uppercase font-medium leading-[0.8] md:text-[6vw] pb-7">
            {project.name}
          </h3>
        </div>
        {project.image && (
          <img src={project.image} alt={project.name} className="w-auto" />
        )}
      </div>
    </article>
  );
};

export default ProjectList;
