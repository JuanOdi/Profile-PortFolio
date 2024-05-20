import Js from "../Pictures/icons/Js.png";
import java from "../Pictures/icons/java.png";
import ReactJs from "../Pictures/icons/ReactJs.png";
import Html from "../Pictures/icons/html1.png";
import mysql from "../Pictures/icons/mysql.png";
import wind from "../Pictures/icons/wind.png";
import basketball from "../Pictures/pic/profile.jpg";
import bootstrap from "../Pictures/icons/bootstrap1.png";
import Thesis from "../Content/Projects/video/thesis.mp4";
import carcue from "../Content/Projects/video/carcue.mp4";
import todo from "../Content/Projects/video/todo.mp4";
import fb from "../Pictures/icons/facebook1.png";
import In from "../Pictures/icons/linkedin9.png";
import git from "../Pictures/icons/github.png";
import Tg from "../Pictures/icons/telegram1.png";
import tp from "../Pictures/icons/tp.png";
import gmail from "../Pictures/icons/gmail.png";
import unity from "../Pictures/icons/u1.png";
import c2 from "../Pictures/icons/c2.png";
import blender from "../Pictures/icons/blender.png";
import react from "../Pictures/icons/react.png";
import tw from "../Pictures/icons/w1.png";
import figma from "../Pictures/icons/figma.png";

import "aos/dist/aos.css";
export const skill = [
  { description: "JavaScript", img: Js },
  { description: "ReactJs", img: ReactJs },
  { description: "Java", img: java },
  { description: "Html", img: Html },
  { description: "MySQL", img: mysql },
  { description: "Tailwindcss", img: wind },
  { description: "Bootstrap", img: bootstrap },
];
export const socialMedia = [
  {
    href: "https://www.facebook.com/odi.juan.7/",
    img: fb,
  },
  {
    href: "https://www.linkedin.com/in/juan-odi-815885272/",
    img: In,
  },
  {
    href: "https://github.com/JuanOdi",
    img: git,
  },
  {
    href: "",
    img: Tg,
  },
];

export const hobbies = [
  {
    id: 1,
    vid: todo,
    description:
      "A to-do list web app is a web-based tool that helps you manage your tasks and stay organized. You can create lists, add items, set deadlines, and check things off as you complete them. These apps are accessible from any device with a web browser, making them convenient for managing your to-dos on the go.",
    offset: 400,
    title: "Todo List",
    aos: "flip-right",
    techStack: [tw, react, Js],
  },
  {
    id: 2,
    vid: Thesis,
    title: "TriComp",
    aos: "flip-right",
    offset: 300,
    techStack: [c2, unity, blender],
    description:
      "A study created a game to teach high school and college students about computer components. The game used an iterative development model to be constantly improved. The results showed that students learned effectively through this game, achieving the study's goal of educating them about computer parts.",
  },
  {
    id: 3,
    vid: carcue,
    title: "Carcue",
    aos: "flip-right",
    offset: 500,
    techStack: [react, tw, figma, Js],
    description:
      "Carcue is a company focused on car maintenance and finances. They use a Limited Partnership structure and combine strong leadership with partnerships to deliver their services. Carcue helps users by proactively telling them when car parts need replacing and tracks all their car expenses. ",
  },
];

export const sm = [
  {
    image: gmail,
    contact: "odijuan@gmail.com",
  },
  {
    image: tp,
    contact: "+(63)9297849369",
  },
];
