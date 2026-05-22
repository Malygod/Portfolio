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
    <>
      <div
        id="navbar"
        className="hidden sm:flex justify-center items-center text-zinc-800 dark:text-zinc-400 w-full overflow-visible text-center py-4 sticky top-0 z-50 transition-all duration-300"
        style={
          scrolled
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              }
            : {}
        }
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
