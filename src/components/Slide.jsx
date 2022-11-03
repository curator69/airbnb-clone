import React from "react";

const Slide = ({ title, image }) => {
  console.log(image);
  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="info">
        <p>Collection</p>
        <h2>{title}</h2>
      </div>

      <a href="https://uniacco.com/" className="showall-btn">
        Show all
      </a>
    </div>
  );
};

export default Slide;
