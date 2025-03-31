import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar && navbar.classList.add("bg-transparent", "backdrop-blur-[5px]", "shadow-md");
      } else {
        navbar && navbar.classList.remove("bg-transparent", "backdrop-blur-[5px]", "shadow-md");
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
        className="hidden sm:flex justify-center items-center text-zinc-800 dark:text-zinc-400 w-full overflow-visible text-center py-4 sticky top-0 z-50 transition-colors duration-100"
      >
        <ul className="flex justify-evenly max-w-5xl w-full text-[22px] text-pretty">
          <li><a className="hover:text-zinc-100 transition-colors duration-300" href="#start">Start</a></li>
          <li><a className="hover:text-zinc-100 transition-colors duration-300" href="#experience">Experience</a></li>
          <li><a className="hover:text-zinc-100 transition-colors duration-300" href="#projects">Projects</a></li>
          <li><a className="hover:text-zinc-100 transition-colors duration-300" href="#about">About</a></li>
          <li><a className="hover:text-zinc-100 transition-colors duration-300" href="#skills">Skills</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
