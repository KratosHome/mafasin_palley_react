import React from "react";
import leftArrow from "../icons/left-arrow.svg";
import rightArrow from "../icons/right-arrow.svg";

const Btnbaner = ({ moveSlide, direction, setIsrining, isRining }) => {
  return (
    <>
      <button
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        onClick={isRining === true ? () => setIsrining(false) :moveSlide} 

      >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="arrow" />
      </button>
    </>
  );
};

export default Btnbaner;
