import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Project from "../../utils/types";
const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [t] = useTranslation("global");
  const projects: Project[] = t("works", {
    returnObjects: true,
  }) as Project[];

  // Asegurarse de que id no sea undefined antes de usar parseInt
  const projectId = id ? parseInt(id, 10) : null;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <section>
      <div className="uppercase font-normal flex flex-col p-3">
        <h1 className=" font-medium pt-[180px] mb-[80px] text-[50px] md:text-[80px] leading-[0.8]">
          {project.name}
        </h1>
        <p className=" text-[15px] text-right md:text-[30px]">{project.tech}</p>
      </div>
      {project.image && (
        <img
          src={project.image2}
          alt={project.name}
          className=" md:h-[100vh] h-full w-full object-cover object-center"
        />
      )}
      <article className="p-5">
        <h2 className=" font-medium uppercase text-[50px] md:text-[80px] leading-[0.8] py-7">
          {project.tech}
        </h2>
        <p className=" text-[15px] md:text-[30px]">{project.description}</p>
      </article>
      <article className="h-[90px] md:h-[180px] flex flex-row">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 h-full w-full text-white text-[15px] md:text-[30px] hover:bg-blue-950 flex flex-col justify-center text-center items-center font-regular"
        >
          {t("common.viewGithub")}
        </a>
        {project.deployLink && (
          <a
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 h-full w-full text-white text-[15px] md:text-[30px] hover:bg-green-950 flex flex-col justify-center items-center font-regular"
          >
            <p className="text-center">{t("common.viewDeployed")}</p>
          </a>
        )}
      </article>
    </section>
  );
};

export default ProjectDetail;
