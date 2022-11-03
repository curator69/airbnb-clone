import React from "react";

import Slide from "./Slide";
import { slides } from "../utils/data";

const Slider = () => {
  return (
    <div className="slider">
      {slides.map((slide, i) => (
        <Slide key={i} title={slide[0]} image={slide[1]} />
      ))}
    </div>
  );
};

export default Slider;
