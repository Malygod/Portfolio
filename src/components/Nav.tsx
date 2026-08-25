import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
        id="navbar"
        aria-label="Primary navigation"
        className="sticky top-0 z-50 flex w-full items-center justify-center overflow-x-auto px-3 py-3 text-center text-stone-700 transition-all duration-300 dark:text-stone-300 sm:px-6 sm:py-4"
        style={
          scrolled
            ? {
                backgroundColor: "rgba(23, 23, 23, 0.78)",
                color: "rgb(214, 211, 209)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              }
            : {}
        }
      >
        <ul className="flex w-max min-w-full max-w-4xl items-center justify-center gap-5 whitespace-nowrap text-xs sm:justify-evenly sm:gap-8 sm:text-base">
          <li><a className="transition-colors duration-300 hover:text-red-500" href="#start">Start</a></li>
          <li><a className="transition-colors duration-300 hover:text-red-500" href="#experience">Experience</a></li>
          <li><a className="transition-colors duration-300 hover:text-red-500" href="#projects">Projects</a></li>
          <li><a className="transition-colors duration-300 hover:text-red-500" href="#about">About</a></li>
          <li><a className="transition-colors duration-300 hover:text-red-500" href="#skills">Skills</a></li>
          <li><a className="transition-colors duration-300 hover:text-red-500" href="/resume.pdf" download="Resume_Matias_Sepulveda.pdf">Résumé</a></li>
        </ul>
      </nav>
  );
};

export default Navbar;
