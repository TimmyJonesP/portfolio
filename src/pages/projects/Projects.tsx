import { useTranslation } from "react-i18next";
import ProjectList from "../../components/projectList/projectList";
import { Link } from "react-router-dom";
import Project from "../../utils/types";

export const Projects = () => {
  const [t] = useTranslation("global");
  const projects: Project[] = t("works", {
    returnObjects: true,
  });
  return (
    <section className="bg-white w-screen h-1/2">
      <article className=" px-4 flex justify-center items-center h-[445px] text-black pb-[2rem] pt-10 sm:pt-0">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <h1 className=" text-[12vw] uppercase font-medium leading-[1] md:text-[60px] lg:text-[6.25vw] md:w-[50%] ">
            {t("projects.title")}
          </h1>
          <p className="w-[70%] md:w-1/2 md:pr-[13%] mt-6 md:mt-0 leading-none md:text-[20px] lg:text-[30px] text-2xl ">
            {t("projects.description")}
          </p>
        </div>
      </article>
      {projects.map((project, index) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <ProjectList key={project.id} project={project} index={index} />
        </Link>
      ))}
    </section>
  );
};
