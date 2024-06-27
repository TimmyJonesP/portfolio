import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [t] = useTranslation("global");
  const [scrollPosition, setScrollPosition] = useState(0);
  const email = "sandrocarioli43@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const backgrounds = [
    "bg-green-800",
    "bg-blue-800",
    "bg-red-800",
    "bg-yellow-800",
    "bg-orange-800",
    "bg-pink-800",
    "bg-cyan-800",
    "bg-amber-700",
    "bg-zinc-800",
    "bg-violet-800",
    "bg-rose-700",
  ];

  const calculateBackgroundIndex = () => {
    const index = Math.floor(scrollPosition / (window.innerHeight - 100));
    return Math.max(0, Math.min(index, backgrounds.length - 1));
  };

  const currentBackgroundIndex = calculateBackgroundIndex();

  return (
    <main className="no-scrollbar bg-green-400 relative">
      <div className="h-screen w-full self-center top-0 left-0 text-black leading-[0.8] z-10 sticky p-4 text-[12vw] md:text-[6vw] font-medium">
        <div className="px-4 h-full flex flex-col w-full self-center justify-center mt-[6vw]">
          <span className="pb-16 text-[10vw] md:text-[5vw] text-right">
            SCROLL
          </span>
          <div className="flex flex-col items-start uppercase">
            <span
              onClick={handleResume}
              className="md:mb-3 hover:text-red-500 cursor-pointer inline"
            >
              {t("footer.resume")}
            </span>
            <span
              onClick={handleCopy}
              className="md:mb-3 hover:text-red-500 cursor-pointer inline uppercase"
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
        </div>
      </div>
      {backgrounds.map((bgClass, index) => (
        <article
          key={index}
          className={`absolute inset-0 ${
            index === currentBackgroundIndex ? "" : "hidden"
          } ${bgClass}`}
        ></article>
      ))}
    </main>
  );
};

export default Contact;
