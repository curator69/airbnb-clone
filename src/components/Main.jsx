import React from "react";
import Slider from "./Slider";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Main = () => {
  return (
    <div className="main">
      <div className="heading-nav">
        <h1>New this week</h1>
        <div className="buttons">
          <div className="btn-left">
            <MdKeyboardArrowLeft className="btn-logo" />
          </div>
          <div className="btn-right">
            <MdKeyboardArrowRight className="btn-logo" />
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Main;
