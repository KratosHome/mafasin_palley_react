import React, { useState } from "react";
import "./MayBaner.css";
import dataSlider from "./dataSlider";
import Btnbaner from "./BTNBaner/BTNBaner";

const MayBaner = () => {
  const [slideIndex, setSlideInsex] = useState(1);

  const nexSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideInsex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideInsex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideInsex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideInsex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideInsex(index);
  };
  return (
    <>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={obj.id}
            >
              <img
                src={
                  process.env.PUBLIC_URL + `/img/baner/Imgs/img${index + 1}.jpg`
                }
                alt="f"
              />
            </div>
          );
        })}
        <Btnbaner moveSlide={nexSlide} direction={"next"} />
        <Btnbaner moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MayBaner;
