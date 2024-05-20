import React from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
const RootLayout = ({ props }) => {
  return (
    <div>
      <Header />
      {props}
      <Footer />
    </div>
  );
};

export default RootLayout;
