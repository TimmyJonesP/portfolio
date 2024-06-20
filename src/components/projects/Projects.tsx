import { useTranslation } from "react-i18next";

export interface Project {
  id: string;
  nameKey: string;
  descriptionKey: string;
  deployLink: string;
  githubLink: string;
}

export const Projects = () => {
  const [t] = useTranslation("global");
  return (
    <section className="bg-white w-screen">
      <article className=" px-4 flex justify-center items-center h-[445px] text-black pb-[2rem]">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <h1 className=" text-[12vw] uppercase font-medium leading-[1] md:text-[60px] lg:text-[6.25vw] md:w-[50%] ">
            {t("projects.title")}
          </h1>
          <p className="w-[70%] md:w-1/2 md:pr-[13%] mt-6 md:mt-0 leading-none md:text-[20px] lg:text-[30px] text-2xl ">
            {t("projects.description")}
          </p>
        </div>
      </article>
      <article></article>
    </section>
  );
};
