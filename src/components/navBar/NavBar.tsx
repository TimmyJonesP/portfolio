import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <nav className="nav fixed w-[100vw] flex justify-between  text-[20px] md:py-[30px] xl:text-[30px] xl:py-[35px] items-center">
      <div className="bg-white text-black text-right mb-auto pr-2 pb-1 pl-[14px] leading-[1.2]">
        <button
          onClick={() => handleChangeLanguage("es")}
          className=" text-base xl:text-xl mr-2 font-medium"
        >
          ES
        </button>
        <button
          onClick={() => handleChangeLanguage("en")}
          className=" text-base xl:text-xl mr-2 font-medium"
        >
          EN
        </button>
        <Link to="/" className="font-regular">
          <span className=" font-regular m-0">portfolio©</span>
          <br />
          sandro carioli.
        </Link>
      </div>
      <ul className="flex flex-col lg:flex-row bg-white text-black pl-6 px-[14px] py-[13px] text-end font-normal leading-[1.2] md:py-2 md:gap-2 md:pl-6 md:pr-[30px] lg:items-center xl:py-3">
        <li>
          <Link
            to="/"
            className={`hover:text-red-300 ${
              location.pathname === "/" ? "text-red-300 underline" : ""
            } xl:ml-3`}
          >
            {t("nav.home")}
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={` hover:text-green-300 ${
              location.pathname === "/projects"
                ? "text-green-300 underline"
                : ""
            } xl:ml-3`}
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:text-cyan-300 ${
              location.pathname === "/contact" ? "text-cyan-300 underline" : ""
            } xl:ml-3`}
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
