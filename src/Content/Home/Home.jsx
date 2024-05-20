import React, { useState, useEffect } from "react";
import front from "../../Pictures/pic/front4.jpg";
import "./index.css";
import fb from "../../Pictures/icons/facebook1.png";
import In from "../../Pictures/icons/linkedin9.png";
import git from "../../Pictures/icons/github.png";
import Tg from "../../Pictures/icons/telegram1.png";
import Cv from "./Cv.pdf";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="py-10 sm:py-16 lg:py-24 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${front})` }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:mt-9 ">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-1 lg:mt-20 sm:mt-9">
            <div className="text-center  ">
              <h1
                className=" font-extrabold  text-4xl  text-shadow-black text-slate-200 lg:mt-2 sm:text-6xl xl:text-8xl "
                data-aos="fade-down"
                style={{
                  WebkitTextStroke: "2px black",
                }}
              >
                M Y P R O F I L E
              </h1>

              <p
                className="text-center mt-4 text-base text-white lg:mt-8 sm:text-xl"
                style={{ WebkitTextStroke: " black" }}
                data-aos="fade-down"
              >
                An Aspring Web Developer
              </p>
            </div>
            <div className="flex justify-center">
              <a href={Cv} download>
                <Button
                  type="primary"
                  className="w-52 bg-orange-300 text-black transition-opacity duration-300 ease-in-out hover:opacity-75"
                  shape="round"
                  icon={<DownloadOutlined />}
                >
                  Download
                </Button>
              </a>
            </div>
            <div className="flex mt-24 ml-3 justify-center items-center p-2 space-x-4">
              <a href="https://www.facebook.com/odi.juan.7/" target="_blank">
                <img src={fb} className="hover:scale-150 cursor-pointer " />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-odi-815885272/"
                target="_blank"
              >
                <img
                  src={In}
                  alt=""
                  className="hover:scale-150 cursor-pointer"
                />
              </a>
              <a href="https://github.com/JuanOdi" target="_blank">
                <img
                  src={git}
                  alt=""
                  className="hover:scale-150 cursor-pointer"
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={Tg}
                  alt=""
                  className="hover:scale-150 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
