import { useEffect, useState } from "react";
import { Button, Flex } from "antd";
import Col from "../Pictures/icons/down.png";
import About from "../Content/About/About";
import Home from "../Content/Home/Home";
import Skills from "../Content/Skills/Skills";
import Portfolio from "../Content/Projects/Portfolio";
import "../App.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transition = () => {
    return " hover:text-white-300 mr-4 transition duration-500 transform hover:scale-150";
  };

  const smoothScroll = (id, event) => {
    if (id !== "home") {
      event.preventDefault();
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="bg-white">
        <header
          className={`text-white fixed w-full py-4 px-10 z-50 ${
            isScrolled ? "shadow-md bg-black" : "bg-opacity-0"
          }`}
          style={{ transition: "background-color 0.3s" }}
        >
          <nav className=" mx-auto flex flex-col lg:flex-row lg:justify-between ">
            <a
              href="/"
              onClick={(e) => smoothScroll("home", e)}
              className={`${
                isScrolled
                  ? "text-custom-headercolorScrolled"
                  : "text-custom-headercolorNotScrolled"
              } font-bold mb-4 lg:mb-0 ${transition()}`}
            >
              Home
            </a>
            <div className="lg:hidden ">
              <button onClick={toggleNav} className="block text-white">
                {isNavOpen ? "Close" : "Menu"}
              </button>
            </div>
            <div className={`lg:flex ${isNavOpen ? "flex" : "hidden"}`}>
              <a
                href="#"
                onClick={(e) => smoothScroll("about", e)}
                className={`${
                  isScrolled
                    ? "text-custom-headercolorScrolled"
                    : "headercolorNotScrolled"
                } font-bold mb-4 lg:mb-0 ${transition()}`}
              >
                About
              </a>
              <a
                href="#"
                onClick={(e) => smoothScroll("skills", e)}
                className={`${
                  isScrolled
                    ? "text-custom-headercolorScrolled"
                    : "headercolorNotScrolled"
                } font-bold mb-4 lg:mb-0 ${transition()}`}
              >
                Skill
              </a>
              <a
                href="/Contact"
                onClick={(e) => smoothScroll("portfolio", e)}
                className={`${
                  isScrolled
                    ? "text-custom-headercolorScrolled"
                    : "headercolorNotScrolled"
                }
        font-bold mb-4 lg:mb-0 ${transition()}`}
              >
                Portfolio
              </a>
            </div>
          </nav>
        </header>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="portfolio">
        <Portfolio></Portfolio>
      </section>
    </>
  );
};

export default Header;
