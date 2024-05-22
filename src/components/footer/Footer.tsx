import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const [t] = useTranslation("global");
  const location = useLocation();
  const email = "sandrocarioli43@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Copied!", {
          className: "custom-toast",
        });
      })
      .catch((err) => {
        toast.error("Can't get email", {
          className: "custom-toast-error",
        });
        console.error(err);
      });
  };

  const cv = t("footer.cv");

  const handleResume = () => {
    window.open(cv, "_blank");
  };

  return (
    <footer className="md:items-center justify-start bg-black  md:pb-0 text-[12vw] md:text-[6.75vw] font-medium text-white uppercase">
      <section className="flex flex-col items-start gap-12 px-4 h-screen w-screen md:items-center md:gap-20 md:flex-col   bg-zinc-900">
        <span className="font-lg pb-[20vw] md:pb-0">{t("footer.foot")}</span>
        <div className="flex flex-col leading-[0.7] gap-4">
          <Link
            to="/projects"
            className={` hover:text-green-300 ${
              location.pathname === "/projects" ? "text-green-300" : ""
            } xl:ml-3`}
          >
            <span>{t("nav.projects")}</span>
          </Link>
          <Link
            to="/contact"
            className={`hover:text-cyan-300 ${
              location.pathname === "/contact" ? "text-cyan-300" : ""
            } xl:ml-3`}
          >
            <span>{t("nav.contact")}</span>
          </Link>
        </div>
      </section>
      <section className="relative h-screen w-auto bg-white flex text-black leading-[0.8] p-4 text-[12vw] md:text-[6.75vw]">
        <div className="flex flex-col self-center">
          <span
            onClick={handleResume}
            className="md:mb-3 hover:text-red-500 cursor-pointer inline"
          >
            {t("footer.resume")}
          </span>
          <span
            onClick={handleCopy}
            className="md:mb-3 hover:text-red-500 cursor-pointer inline"
          >
            {t("footer.email")}
          </span>
          <span
            onClick={() =>
              window.open("https://wa.me/+540239615430243", "_blank")
            }
            className="md:mb-3 hover:text-red-500 cursor-pointer inline"
          >
            {t("footer.whatsapp")}
          </span>
          <p className="text-sm md:text-[20px] md:px-2 md:pb-2 lowercase">
            {t("footer.also")}
          </p>
          <span
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sandrocarioli/",
                "_blank"
              )
            }
            className="md:mb-3 hover:text-red-500 cursor-pointer inline"
          >
            {t("footer.linkedin")}
          </span>
          <span
            onClick={() =>
              window.open("https://github.com/TimmyJonesP/", "_blank")
            }
            className="md:mb-3 hover:text-red-500 cursor-pointer inline"
          >
            {t("footer.github")}
          </span>

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
