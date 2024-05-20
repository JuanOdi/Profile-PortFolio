import React, { useState, useRef } from "react";
import front from "../../Pictures/pic/front4.jpg";
import profile from "../../Pictures/pic/profile.jpg";
import { Carousel } from "antd";
import { Scrollama, Step } from "react-scrollama";

import { hobbies } from "../../Constants/profile";
import play from "../../Pictures/icons/play.png";
import pause from "../../Pictures/icons/pause.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortFolio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null); // Define a ref for the video element

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div>
      <h2 className="pt-20 text-black text-center text-4xl font-bold lg:mt-2 sm:text-6xl xl:text-6xl">
        PortFolio
      </h2>

      {hobbies.map((hobby, stepIndex) => (
        <div>
          <div className="py-10 sm:py-16 lg:py-24" data-aos-duration="1500">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 ">
                <div data-aos="fade-right" data-aos-offset="100">
                  <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-6xl">
                    {hobby.title}
                  </h1>

                  <p className="text-base leading-relaxed text-black lg:mt-8 sm:text-xl pt text-justify">
                    {hobby.description}
                  </p>
                  <div className=" mt-4">
                    <h2 className="font-bold">TechStack </h2>
                    <span className=" flex items-center gap-4 mt-4">
                      {hobby.techStack &&
                        hobby.techStack.map((image, index) => (
                          <img key={index} className="w-8" src={image} alt="" />
                        ))}
                    </span>{" "}
                  </div>
                </div>

                <div className="overflow-hidden mt-12 rounded-3xl">
                  <video
                    ref={videoRef} // Assign the ref to the video element
                    src={hobby.vid}
                    data-aos={hobby.aos}
                    data-aos-offset="300"
                    loop
                    controls // Corrected attribute name
                    style={{ width: "100%" }}
                    className="bg-black "
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
