import React, { useState, useEffect } from "react";
import front from "../../Pictures/pic/front4.jpg";
import profile from "../../Pictures/pic/me.jpg";
import { Carousel } from "antd";
import { Scrollama, Step } from "react-scrollama";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className="h-screen about">
      <div className="py-10 sm:py-16 lg:py-24">
        <h2
          className="text-black text-center text-4xl font-bold lg:mt-0 sm:text-6xl xl:text-6xl"
          data-aos="fade-up"
          data-aos-offset="50"
        >
          About Me
        </h2>
        <div className="px-4  mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ">
            <div>
              <h1
                className=" text-4xl font-bold text-black  sm:text-6xl xl:text-6xl "
                data-aos={
                  scrollDirection === "down" ? "fade-left" : "fade-right"
                }
                data-aos-offset="100"
              >
                <span> I'm Juan Odi</span>
              </h1>
              <p
                className="text-base font-semibold tracking-wider text-blue-600 uppercase"
                data-aos="fade-right"
              ></p>
              <p
                className="text-base text-black lg:mt-8 sm:text-xl text-justify mr-4"
                data-aos="fade-right"
              >
                With a passion for innovation and dedication to crafting elegant
                solutions, I thrive in web development, continuously honing my
                skills in HTML, CSS, and JavaScript to deliver high-quality
                websites that exceed expectations and leave a lasting impact.
              </p>
            </div>

            <div
              className="overflow-hidden mt-12 ml-auto"
              data-aos="fade-left"
              data-aos-offset="200"
            >
              <img className=" w-full h-96 rounded-md " src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
};

export default About;
