import { useTranslation } from "react-i18next";
import { Me } from "./Me";

export const Home = () => {
  const [t] = useTranslation("global");
  return (
    <main className=" ">
      <article className="row-1 h-svh bg-white">
        <div className="flex gap-20 justify-end md:justify-between items-end h-full py-[14px] md:py-[30px] flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col left self-start md:self-end mx-4 text-black text-[20px] font-medium leading-none">
            <p className="md:text-[2vw]">{t("home.presentation")}</p>
            <p className="font-bold leading-[0.79] gradient-text text-transparent text-[40px] animate-gradient sm:text-[80px] md:text-[7vw]">
              SANDRO <br className="hidden sm:block leading-[0px]" />
              CARIOLI
            </p>
            <p className="flex flex-row md:flex-col items-center md:items-start md:text-[2vw] leading-[0.8]">
              {t("home.foot")}
            </p>
          </div>
          <div className="md:w-1/2 w-max relative">
            <div id="circle"></div>
            <picture className="filter-grayscale">
              <source srcSet="/sc.jpg" type="image/jpg" />
              <img className="w-screen" src="/sc.jpg" alt="Description" />
            </picture>
          </div>
        </div>
      </article>
      <article className="row-1 h-screen bg-lime-300 bg-grey flex items-center justify-center">
        <div className="max-w-none sm:max-w-[60%] md:max-w-[840px] text-center leading-[0.8] flex sm:block flex-col items-center gap-0 sm:gap-2">
          {(t("me.hobbies", { returnObjects: true }) as string[]).map(
            (hobby: string, index: number) => (
              <Me key={index} hobby={hobby} />
            )
          )}
        </div>
      </article>
      <article className="row-2 h-screen bg-white relative overflow-x-hidden">
        <div className="stripes-container flex pf-container sm:px-0 justify-between sm:justify-evenly h-full mx-5">
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500"></div>
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500"></div>
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500"></div>
          <div className="w-[30px] h-full animate-horizontal-move  bg-orange-500"></div>
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500 hidden sm:block"></div>
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500 hidden sm:block"></div>
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500 hidden sm:block"></div>
          <div className="w-[30px] h-full animate-horizontal-move  bg-orange-500 hidden sm:block"></div>
          <div className="w-[30px] h-full animate-horizontal-move bg-orange-500 hidden sm:block"></div>
          <div className=" absolute-center overflow-hidden pointer-events-none md:w-[50vh] text-[30px] text-center bg-cyan-300 p-4">
            <span className=" text-black font-bold">TECH.STACK:</span>
            <p className=" gradient-tech font-medium text-transparent hover:text-[50px]">
              <p> HTML CSS JAVASCRIPT TYPESCRIPT REACT NODEJS NESTJS</p>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};
