import React from "react";

import Carousel from "./Carousel";
import Header from "./Header";
import Description from "./Description";
import Related from "./Related";

import "./Styles.css";

const Index = () => {
  return (
    <div>
      <div className="DriBody-main">
        <div className="DriBody-container">
          <Header />
          <Carousel />
          <Description />
          <Related />
        </div>
      </div>
    </div>
  );
};

export default Index;
