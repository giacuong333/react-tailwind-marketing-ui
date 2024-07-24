import React, { useEffect, useState } from "react";
import { MdCloudDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Button from "../Button";

function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 590);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="max-w-screen-xl w-full px-4 mx-auto pb-8 pt-6 md:pb-24 md:pt-12">
      <div className="grid lg:grid-cols-2 gap-6 pt-16 place-items-center">
        <div>
          <h1 className="xl:text-7xl lg:text-6xl text-5xl font-bold lg:tracking-tight md:tracking-tighter">
            Marketing website done with Astro
          </h1>
          <p className="text-lg text-slate-600 my-4 max-w-xl">
            Astroship is a starter template for startups, marketing websites & landing pages. Built with Astro.build and
            TailwindCSS. You can quickly create any website with this starter.
          </p>
          <div className="flex md:flex-row flex-col md:items-center md:gap-x-3 gap-y-3">
            <Button dark widthFull={isSmallScreen}>
              <div className="inline-flex place-items-center">
                <MdCloudDownload size={18} className="text-white mr-1" />
                <span>Download for Free</span>
              </div>
            </Button>
            <Button border widthFull={isSmallScreen}>
              <div className="inline-flex place-items-center">
                <FaGithub size={18} className="mr-1" />
                <span>GitHub Repo</span>
              </div>
            </Button>
          </div>
        </div>

        <div className="md:block hidden">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
