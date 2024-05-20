import { useState } from "react";
import { Carousel } from "antd";
import Header from "./Partials/Header";
import RootLayout from "./Layout/RootLayout";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import "./App.css";
import "animate.css";
import Skills from "./Content/Skills/Skills";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function App() {
  return (
    <>
      <div className="scroll">
        <RootLayout></RootLayout>
      </div>
    </>
  );
}

export default App;
