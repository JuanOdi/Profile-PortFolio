import React from "react";
import { socialMedia, sm } from "../Constants/profile";
import { Button, Form, Input, Select, Space } from "antd";
const Footer = () => {
  return (
    <section class="py-10 bg-black bg-center opacity-90 sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <h1 className="text-4xl font-bold text-white sm:text-6xl xl:text-6xl">
              Contact
            </h1>
            <p class="text-base leading-relaxed text-white mt-7">
              Craft a high-performing website to elevate your brand and achieve
              business goals. I specialize in user-centric development.
            </p>
            {/*ICon  */}
            <ul class="flex items-center space-x-3 mt-9">
              {socialMedia.map((social) => {
                return (
                  <li>
                    <a
                      href={social.href}
                      class="flex items-center justify-center text-white transition-all duration-200 bg-gray-900 rounded-full w-8 h-8  pl-2 pr-2 hover:bg-blue-600 focus:bg-blue-600 hover:scale-125"
                    >
                      <img src={social.img} />
                    </a>
                  </li>
                );
              })}
            </ul>
            {/*ICon end  */}
          </div>

          <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8 ">
            <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Messages
            </p>

            <form action="#" method="POST" class="mt-6">
              <div>
                <label for="email" class="sr-only">
                  Email
                </label>
                <Input
                  placeholder="Enter your messages"
                  className="block w-full p-4 "
                />
              </div>
              <Button type="primary" className="mt-3  bg-blue-500">
                Send Messages
              </Button>
            </form>

            {sm.map((media) => {
              return (
                <div class="flex items-center">
                  <a class="flex items-center mt-8 justify-center text-white transition-all duration-200 bg-gray-900 rounded-full w-8 h-8 pl-2 pr-2 hover:bg-blue-600 focus:bg-blue-600 hover:scale-125">
                    <img src={media.image} alt="Gmail Icon" />
                  </a>

                  <p class="text-sm mt-7 font-semibold tracking-widest text-gray-400 ml-2">
                    {media.contact}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-400" />

        <p class="text-sm text-center text-gray-600">
          © Juan Odi 2024, Web Developer
        </p>
      </div>
    </section>
  );
};

export default Footer;
