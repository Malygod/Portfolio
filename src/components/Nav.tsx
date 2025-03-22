import { useEffect } from "react";
import SwitchTheme from "./switchTheme.tsx";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar && navbar.classList.add("bg-stone-100", "shadow-md", "dark:bg-neutral-950");
      } else {
        navbar && navbar.classList.remove("bg-stone-100", "shadow-md", "dark:bg-neutral-950");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="navbar"
        className="hidden sm:flex justify-center items-center text-zinc-800 dark:text-zinc-300 text-center py-6 sticky top-0 z-50 transition-colors duration-300"
      >
        <ul className="flex justify-evenly max-w-4xl w-full">
          <li><a className="hover:text-zinc-500 text-xl font-medium transition-colors duration-300" href="#start">Start</a></li>
          <li><a className="hover:text-zinc-500 text-xl font-medium transition-colors duration-300" href="#experience">Experience</a></li>
          <li><a className="hover:text-zinc-500 text-xl font-medium transition-colors duration-300" href="#projects">Projects</a></li>
          <li><a className="hover:text-zinc-500 text-xl font-medium transition-colors duration-300" href="#about">About</a></li>
          <li><a className="hover:text-zinc-500 text-xl font-medium transition-colors duration-300" href="#skills">Skills</a></li>
        </ul>
      </div>
      <div className="sm:flex pt-6">
        <SwitchTheme />
      </div>
    </>
  );
};

export default Navbar;
