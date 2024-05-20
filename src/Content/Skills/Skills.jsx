import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import { skill } from "../../Constants/profile";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__backInLeft"
          );
        }
      });
    });

    cardRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className="py-10 sm:py-16 lg:py-20 h-screen bg-black bg-center opacity-90"
        data-aos="fadeInUp"
        data-aos-offset="300"
      >
        <h2 className="text-white pb-10 text-center  text-4xl font-bold lg:mt-2 sm:text-6xl xl:text-6xl">
          Tech Stack
        </h2>
        <div className="px-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-5 overflow-x-auto">
            {skill.map((map, index) => (
              <Card
                key={map.Name}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`text-center bg-transparent text-white flex-shrink-0    hover:bg-gray-800 hover:border-gray-800 hover:shadow-lg transition duration-300 ease-in`}
                style={{ maxWidth: "calc(25% - 1rem)" }}
              >
                <div className="flex justify-center">
                  <img src={map.img} className="" alt="" />
                </div>
                <p className="mt-4 text-base text-white lg:mt-8 sm:text-xl w-52">
                  {map.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
